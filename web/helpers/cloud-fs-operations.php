<?php

namespace cloudFS;
use Exception;

class Operations {

    private string $rCloneBinaryPath;
    private string $rCloneConfigPath;
    private string $rCloneDestination;
    private bool   $encoded;

    function __construct(string $rCloneDestination = 'privuma:', bool $encoded = true, string $rCloneBinaryPath = '/usr/bin/rclone', string $rCloneConfigPath = __DIR__ . '/../config/rclone/rclone.conf') {
        exec($rCloneBinaryPath . ' version', $void, $code);
        if($code !== 0) {
            $rCloneBinaryPath = __DIR__ . '/../bin/rclone';
        }
        $this->rCloneBinaryPath = $rCloneBinaryPath;
        $this->rCloneConfigPath = $rCloneConfigPath;
        $this->rCloneDestination = $rCloneDestination;
        $this->encoded = $encoded;
    }

    public function scandir(string $directory, bool $objects = false, bool $recursive = false, ?string $filter = null) {
        if(!$this->is_dir($directory) && $directory !== DIRECTORY_SEPARATOR) {
            error_log("not a dir");
            return false;
        }
        try {
            $files = json_decode($this->execute('lsjson', $directory, null, false, true, [($recursive !== false) ? '--recursive': '', (!is_null($filter)) ? '--include ' . escapeshellarg($this->encoded ? $this->encode($filter) : $filter): '']), true);
            usort($files, function($a, $b) {
                return strtotime(explode('.', $b['ModTime'])[0]) <=> strtotime(explode('.', $a['ModTime'])[0]);
            });
            $response = array_map(function($object) {
                $object['Name'] = ($this->encoded ? $this->decode($object['Name']) : $object['Name']);
                return $object;
            }, $files);

            $response = $objects ? $response : ['.','..', ...array_column($response, 'Name')];
            return  $response;
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
    }

    private function getPathInfo(string $path, bool $modTime = true, bool $mimetype = true, bool $onlyDirs = false, bool $onlyFiles = false, bool $showMD5 = false) {
        try {
            $list = json_decode($this->execute('lsjson', $path, null, false, true, [
                '--stat',
                $modTime ? '' : '--no-modtime',
                $mimetype ? '' : '--no-mimetype',
                $onlyDirs ? '--dirs-only' : '',
                $onlyFiles ? '--files-only' : '',
                $showMD5 ? '--hash --hash-type md5' : '',
            ]), true);
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
        return is_null($list) ? false : $list;
    }

    public function file_exists(string $file) : bool {
        $info = $this->getPathInfo($file, false, false, false, false, false);
        return $info !== false;
    }

    public function is_file(string $file) : bool {
        $info = $this->getPathInfo($file, false, false, false, true, false);
        return $info !== false;
    }

    public function filemtime(string $file) {
        $info = $this->getPathInfo($file,true,false,false,true,false);
        if ($info !== false) {
            return strtotime(explode('.', $info['ModTime'])[0]);
        }
        return false;
    }

    public function touch(string $file, ?int $time = null, ?int $atime = null) : bool {
        if(is_null($time)) {
            $time = time();
        }
        if(is_null($atime)) {
            $atime = $time;
        }
        try{
            $this->execute('touch', $file, null, false, true, ['--timestamp', date("Y-m-d\TH:i:s", $time) ]);
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
        return true;
    }

    public function mime_content_type(string $file) {
        $info = $this->getPathInfo($file, false,true,false,true,false);
        if ($info !== false) {
            return $info['MimeType'];
        }
        return false;
    }

    public function filesize(string $file) {
        $info = $this->getPathInfo($file, false,false,false,true,false);
        if ($info !== false) {
            return strtotime(explode('.', $info['Size'])[0]);
        }
        return false;
    }

    public function is_dir(string $directory) : bool {
        $info = $this->getPathInfo($directory,false,false,true,false,false);
        return $info !== false;
    }

    public function mkdir(string $directory) : bool {
        if(!$this->is_dir($directory)){
            try{
                $this->execute('mkdir', $directory);
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
            return true;
        }
        return false;
    }

    public function file_put_contents(string $path, string $contents) {
        $tmpfile = tempnam(sys_get_temp_dir(), 'PVMA');
        file_put_contents($tmpfile, $contents);
        try{
            $this->execute('copyto', $path, $tmpfile);
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
        unlink($tmpfile);
        return mb_strlen($contents, '8bit');
    }

    public function file_get_contents(string $path) {   
        if($this->file_exists($path)){
            return $this->execute('cat', $path);
        }  
        return false;
    }

    public function readfile(string $path) {   
        if($this->file_exists($path)){
            try {
                $this->execute('cat', $path,null,false,true,[],true);
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
        }  
        return false;
    }

    public function public_link(string $path, string $expire = "1d") {   
        if($this->file_exists($path)){
            return array_pop(explode(PHP_EOL, $this->execute('link', $path, null, false, true, ['--expire', $expire])));
        }  
        return false;
    }


    public function remove_public_link(string $path): bool {   
        if($this->file_exists($path)){
            try{
                $this->execute('link', $path, null, false, true, ['--unlink']);
                return true;
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
        }  
        return false;
    }


    public function unlink(string $path): bool {   
        if($this->file_exists($path)){
            try{
                $this->execute('delete', $path);
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
            return true;
        }
        return false;
    }

    public function rmdir(string $path, bool $recursive = false): bool {   
        if($this->is_dir($path)){
            try{
                $this->execute($recursive ? 'purge' : 'rmdir', $path);
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
            return true;
        }
        return false;
    }

    public function rename(string $oldname, string $newname, bool $remoteSource = true): bool {   
        try{
            $this->execute('moveto', $newname, $oldname, $remoteSource);
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
        return true;
    }

    public function copy(string $oldname, string $newname, bool $remoteSource = true, bool $remoteDestination = true): bool {
        try{   
            $this->execute('copyto', $newname, $oldname, $remoteSource, $remoteDestination);
        } catch(Exception $e) {
            error_log($e->getMessage());
            return false;
        }
        return true;
    }


    public function md5_file(string $path) {
        if ($this->file_exists($path)) {
            try {
                return explode(' ', $this->execute('md5sum', $path, null, false, true, ['--download']))[0];
            } catch (Exception $e) {
                error_log($e->getMessage());
                return false;
            }
        }
        return true;
    }

    public function pull(string $path) {   
        if($this->file_exists($path)){
            $tmpfile = tempnam(sys_get_temp_dir(), 'PVMA');
            try{
                $this->execute('copyto', $tmpfile, $path, true, false);  
            } catch(Exception $e) {
                error_log($e->getMessage());
                return false;
            }
            return $tmpfile;
        }  
        return false;
    }

    public function encode(string $path) : string {
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        return implode(DIRECTORY_SEPARATOR, array_map(function($part) use ($ext) {
            return base64_encode(basename($part, '.' . $ext));
        }, explode(DIRECTORY_SEPARATOR, $path))) . (empty($ext) ? '' :  '.' . $ext);
    }

    public function decode(string $path) : string {
        $ext = pathinfo($path, PATHINFO_EXTENSION);
        return implode(DIRECTORY_SEPARATOR, array_map(function($part) use ($ext) {
            return base64_decode(basename($part, '.' . $ext));
        }, explode(DIRECTORY_SEPARATOR, $path))) . (empty($ext) ? '' :  '.' . $ext);
    }




    public function moveSync(string $source, string $destination, bool $encodeDestination = true, bool $decodeSource = false, bool $preserveBucketName = true, array $flags = []): bool {
        try{
            $destinationParts = explode(':', $destination);
            $sourceParts = explode(':', $source);
            $target = $destination;
            if($encodeDestination) {
                $target = array_shift($destinationParts) 
                . ':';
                if($preserveBucketName){
                    $parts = array_filter(explode(DIRECTORY_SEPARATOR, implode(
                        ':', $destinationParts)));
                    $bucket = array_shift($parts);
                    $target .= $bucket . DIRECTORY_SEPARATOR . $this->encode(implode(DIRECTORY_SEPARATOR, $parts));
                } else {
                    $target .= $this->encode(
                        implode(
                            ':', 
                            $destinationParts
                        )
                    ) ;
                }
            }

            $this->execute(
                'moveto',
                $target,
                (
                    $decodeSource 
                    ? array_shift($sourceParts) 
                    . ':'
                    . $this->decode(
                        implode(
                            ':', 
                            $sourceParts
                        )
                    )
                    : $source
                ),
                false, 
                false, 
                $flags
            );
        } catch(Exception $e) {
            var_dump($e->getMessage());
            return false;
        }
        return true;
    }



    public function sync(string $source, string $destination, bool $encodeDestination = true, bool $decodeSource = false, bool $preserveBucketName = true, array $flags = []): bool {
        try{
            $destinationParts = explode(':', $destination);
            $sourceParts = explode(':', $source);
            $target = $destination;
            if($encodeDestination) {
                $target = array_shift($destinationParts) 
                . ':';
                if($preserveBucketName){
                    $parts = array_filter(explode(DIRECTORY_SEPARATOR, implode(
                        ':', $destinationParts)));
                    $bucket = array_shift($parts);
                    $target .= $bucket . DIRECTORY_SEPARATOR . $this->encode(implode(DIRECTORY_SEPARATOR, $parts));
                } else {
                    $target .= $this->encode(
                        implode(
                            ':', 
                            $destinationParts
                        )
                    ) ;
                }
            }

            $this->execute(
                'sync',
                $target,
                (
                    $decodeSource 
                    ? array_shift($sourceParts) 
                    . ':'
                    . $this->decode(
                        implode(
                            ':', 
                            $sourceParts
                        )
                    )
                    : $source
                ),
                false, 
                false, 
                $flags
            );
        } catch(Exception $e) {
            var_dump($e->getMessage());
            return false;
        }
        return true;
    }

    private function execute(string $command, string $destination, ?string $source = null, bool $remoteSource = false, bool $remoteDestination = true, array $flags = [], bool $passthru = false) {
        $cmd = implode(
            ' ', 
            [
                $this->rCloneBinaryPath,
                '--config',
                escapeshellarg($this->rCloneConfigPath),
                '--auto-confirm',
                '--log-level ERROR',
                $command,
                ...$flags,
                !is_null($source) ? escapeshellarg(($remoteSource ? $this->rCloneDestination . ( $this->encoded ? $this->encode($source) : $source): $source)) : '',
                escapeshellarg($remoteDestination ? $this->rCloneDestination . ( $this->encoded ? $this->encode($destination) : $destination) : $destination),
                '2>&1'
            ]
            );
        if($passthru) {
            passthru($cmd, $result_code);
        } else {
            exec(
                $cmd,
                $response,
                $result_code
            );
        }
        if($result_code !== 0){
            throw new Exception(PHP_EOL.'RClone exited with an error code: '. (!empty($response) ? PHP_EOL . implode(PHP_EOL, $response) : 'No Response'));
        }
        return implode(PHP_EOL, $response);
    }

}



?>