<?php

use privuma\privuma;
use privuma\helpers\mediaFile;

require_once(__DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'privuma.php');

$privuma = privuma::getInstance();
$ops = $privuma->getCloudFS();

$configs = json_decode(file_get_contents($privuma->getConfigDirectory() . DIRECTORY_SEPARATOR . 'sync-dirs.json'), true) ?? [];
foreach ($configs as $sync) {

    if (substr($sync['path'], 0, 1) !== DIRECTORY_SEPARATOR) {
        $sync['path'] = $privuma->canonicalizePath(__DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . $sync['path']);
        echo PHP_EOL . 'Using abolsute path of the web folder relative path: ' . $sync['path'];
    }

    if (!is_dir($sync['path'])) {
        echo PHP_EOL . 'Cannot find sync path: ' . $sync['path'];
        continue;
    }

    processDir($sync['path'], $sync);
}

function processDir($dir, $sync)
{
    global $ops;
    global $privuma;
    $files = scandir($dir);
    foreach ($files as $value) {
        if (in_array($value, ['.', '..'])) {
            continue;
        }
        $path = $dir . DIRECTORY_SEPARATOR . $value;
        if (!is_dir($path)) {
            $ext = pathinfo($path, PATHINFO_EXTENSION);
            if (in_array($ext, ['DS_Store'])) {
                continue;
            }
            if (!$sync['preserve'] && in_array(strtolower($ext), ['webm', 'mov', 'swf', 'avi', 'mkv', 'm4v', 'mp4', 'jpg', 'jpeg', 'gif', 'png', 'heif'])) {
                $album = str_replace(DIRECTORY_SEPARATOR, '---', str_replace($sync['path'], 'Syncs', dirname($path)));
                $filename = mediaFile::sanitize(basename($path, '.' . $ext)) . '.' . (!in_array(strtolower(pathinfo($path, PATHINFO_EXTENSION)), ['jpg', 'jpeg', 'gif', 'png', 'heif']) ? 'mp4' : strtolower(pathinfo($path, PATHINFO_EXTENSION)));
                $preserve = privuma::getDataFolder() . DIRECTORY_SEPARATOR . mediaFile::MEDIA_FOLDER . DIRECTORY_SEPARATOR . $album . DIRECTORY_SEPARATOR . $filename;
                $mediaFile = (new mediaFile($filename, $album));
                if (!$mediaFile->preserved()) {
                    if (!$ops->is_dir(dirname($preserve))) {
                        $ops->mkdir(dirname($preserve));
                    }
                    if (!$ops->is_file($preserve) && !$mediaFile->record()) {
                        echo PHP_EOL . 'Queue Processing of media file: ' . $preserve;
                        $privuma->getQueueManager()->enqueue(json_encode([
                            'type' => 'processMedia',
                            'data' => [
                                'album' => $album,
                                'filename' => mediaFile::sanitize(basename($path, '.' . $ext)) . '.' . $ext,
                                'path' => $path,
                                'local' => $sync['removeFromSource']
                            ],
                        ]));
                    } elseif ($sync['removeFromSource']) {
                        $mediaFile->save();
                        echo PHP_EOL . 'Removing file that already exists in media sync destination: ' . $preserve . ' for path: ' . $path;
                        unlink($path);
                        exec('rmdir ' . escapeshellarg(dirname($path)) . ' 2>&1 > /dev/null');
                    }
                } elseif ($sync['removeFromSource']) {
                    echo PHP_EOL . 'Removing file that already exists in media sync destination: ' . $preserve . ' for path: ' . $path;
                    unlink($path);
                    exec('rmdir ' . escapeshellarg(dirname($path)) . ' 2>&1 > /dev/null');
                }
            } elseif ($sync['preserve']) {
                $preserve = privuma::getDataFolder() . DIRECTORY_SEPARATOR . 'SCRATCH' . DIRECTORY_SEPARATOR . 'Syncs' . DIRECTORY_SEPARATOR . basename(dirname($path)) . DIRECTORY_SEPARATOR . mediaFile::sanitize(basename($path, '.' . pathinfo($path, PATHINFO_EXTENSION))) . '.' . pathinfo($path, PATHINFO_EXTENSION);
                if (!$ops->is_file($preserve)) {
                    echo PHP_EOL . 'Queue Processing of preservation file: ' . $preserve;
                    $privuma->getQueueManager()->enqueue(json_encode([
                        'type' => 'processMedia',
                        'data' => [
                            'preserve' => $preserve,
                            'path' => $path,
                            'local' => $sync['removeFromSource']
                        ],
                    ]));
                } elseif ($sync['removeFromSource']) {
                    echo PHP_EOL . 'Removing file that already exists in preserve sync destination: ' . $preserve . ' for path: ' . $path;
                    unlink($path);
                    exec('rmdir ' . escapeshellarg(dirname($path)) . ' 2>&1 > /dev/null');
                }
            } elseif ($sync['removeFromSource']) {
                echo PHP_EOL . 'Removing unsupported media file with path: ' . $path;
                unlink($path);
                exec('rmdir ' . escapeshellarg(dirname($path)) . ' 2>&1 > /dev/null');
            }
        } elseif ($value != '.' && $value != '..' && $value !== '@eaDir') {
            processDir($path, $sync);
        }
    }
}

echo PHP_EOL . 'Done';
