"use strict";
(self.webpackChunkruffle_selfhosted =
  self.webpackChunkruffle_selfhosted || []).push([
  [655],
  {
    693: (e, n, t) => {
      function _(e, n) {
        const t = e.length,
          _ = e.getChannelData(0),
          r = e.getChannelData(1);
        let b = 0,
          c = 0;
        for (; c < t; ) (_[c] = n[b]), (r[c] = n[b + 1]), c++, (b += 2);
      }
      function r(e, n) {
        return new Function(`return (${e})(...arguments);`)(...n);
      }
      t.d(n, { A: () => _, V: () => r });
    },
    655: (e, n, t) => {
      t.r(n),
        t.d(n, {
          IntoUnderlyingByteSource: () => $,
          IntoUnderlyingSink: () => J,
          IntoUnderlyingSource: () => Z,
          RuffleHandle: () => ne,
          RuffleInstanceBuilder: () => _e,
          ZipWriter: () => be,
          default: () => ae,
          global_init: () => E,
          initSync: () => oe,
        });
      var _ = t(693);
      e = t.hmd(e);
      const r =
        "undefined" != typeof AudioContext
          ? AudioContext
          : "undefined" != typeof webkitAudioContext
            ? webkitAudioContext
            : void 0;
      let b;
      const c = new Array(128).fill(void 0);
      function f(e) {
        return c[e];
      }
      c.push(void 0, null, !0, !1);
      let o = c.length;
      function u(e) {
        const n = f(e);
        return (
          (function (e) {
            e < 132 || ((c[e] = o), (o = e));
          })(e),
          n
        );
      }
      function a(e) {
        o === c.length && c.push(c.length + 1);
        const n = o;
        return (o = c[n]), (c[n] = e), n;
      }
      let i = 0,
        g = null;
      function w() {
        return (
          (null !== g && 0 !== g.byteLength) ||
            (g = new Uint8Array(b.memory.buffer)),
          g
        );
      }
      const d =
          "undefined" != typeof TextEncoder
            ? new TextEncoder("utf-8")
            : {
                encode: () => {
                  throw Error("TextEncoder not available");
                },
              },
        s =
          "function" == typeof d.encodeInto
            ? function (e, n) {
                return d.encodeInto(e, n);
              }
            : function (e, n) {
                const t = d.encode(e);
                return n.set(t), { read: e.length, written: t.length };
              };
      function l(e, n, t) {
        if (void 0 === t) {
          const t = d.encode(e),
            _ = n(t.length, 1) >>> 0;
          return (
            w()
              .subarray(_, _ + t.length)
              .set(t),
            (i = t.length),
            _
          );
        }
        let _ = e.length,
          r = n(_, 1) >>> 0;
        const b = w();
        let c = 0;
        for (; c < _; c++) {
          const n = e.charCodeAt(c);
          if (n > 127) break;
          b[r + c] = n;
        }
        if (c !== _) {
          0 !== c && (e = e.slice(c)),
            (r = t(r, _, (_ = c + 3 * e.length), 1) >>> 0);
          const n = w().subarray(r + c, r + _);
          (c += s(e, n).written), (r = t(r, _, c, 1) >>> 0);
        }
        return (i = c), r;
      }
      function m(e) {
        return null == e;
      }
      let p = null;
      function h() {
        return (
          (null === p ||
            !0 === p.buffer.detached ||
            (void 0 === p.buffer.detached && p.buffer !== b.memory.buffer)) &&
            (p = new DataView(b.memory.buffer)),
          p
        );
      }
      const y =
        "undefined" != typeof TextDecoder
          ? new TextDecoder("utf-8", { ignoreBOM: !0, fatal: !0 })
          : {
              decode: () => {
                throw Error("TextDecoder not available");
              },
            };
      function x(e, n) {
        return (e >>>= 0), y.decode(w().subarray(e, e + n));
      }
      function S(e) {
        const n = typeof e;
        if ("number" == n || "boolean" == n || null == e) return `${e}`;
        if ("string" == n) return `"${e}"`;
        if ("symbol" == n) {
          const n = e.description;
          return null == n ? "Symbol" : `Symbol(${n})`;
        }
        if ("function" == n) {
          const n = e.name;
          return "string" == typeof n && n.length > 0
            ? `Function(${n})`
            : "Function";
        }
        if (Array.isArray(e)) {
          const n = e.length;
          let t = "[";
          n > 0 && (t += S(e[0]));
          for (let _ = 1; _ < n; _++) t += ", " + S(e[_]);
          return (t += "]"), t;
        }
        const t = /\[object ([^\]]+)\]/.exec(toString.call(e));
        let _;
        if (!(t.length > 1)) return toString.call(e);
        if (((_ = t[1]), "Object" == _))
          try {
            return "Object(" + JSON.stringify(e) + ")";
          } catch (e) {
            return "Object";
          }
        return e instanceof Error ? `${e.name}: ${e.message}\n${e.stack}` : _;
      }
      "undefined" != typeof TextDecoder && y.decode();
      const v =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) => {
              b.__wbindgen_export_2.get(e.dtor)(e.a, e.b);
            });
      function I(e, n, t, _) {
        const r = { a: e, b: n, cnt: 1, dtor: t },
          c = (...e) => {
            r.cnt++;
            const n = r.a;
            r.a = 0;
            try {
              return _(n, r.b, ...e);
            } finally {
              0 == --r.cnt
                ? (b.__wbindgen_export_2.get(r.dtor)(n, r.b), v.unregister(r))
                : (r.a = n);
            }
          };
        return (c.original = r), v.register(c, r, r), c;
      }
      function A(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0cc1e05643c4b63f(
          e,
          n,
          a(t),
        );
      }
      function B(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hd0055886eff61684(
          e,
          n,
          t,
        );
      }
      function P(e, n) {
        b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h7b382c1856f0e938(
          e,
          n,
        );
      }
      function T(e, n) {
        b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hab246cb44b9a4829(
          e,
          n,
        );
      }
      function D(e, n) {
        b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hea951c6a4292b134(
          e,
          n,
        );
      }
      function C(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hae2e4f55b8a34dcb(
          e,
          n,
          a(t),
        );
      }
      function R(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h5ce1655cf0a7d7ac(
          e,
          n,
          a(t),
        );
      }
      function k(e, n, t) {
        b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h34bca96d11be80d5(
          e,
          n,
          a(t),
        );
      }
      function F(e, n) {
        try {
          return e.apply(this, n);
        } catch (e) {
          b.__wbindgen_exn_store(a(e));
        }
      }
      function M(e, n) {
        const t = n(4 * e.length, 4) >>> 0,
          _ = h();
        for (let n = 0; n < e.length; n++) _.setUint32(t + 4 * n, a(e[n]), !0);
        return (i = e.length), t;
      }
      function E() {
        b.global_init();
      }
      function L(e, n) {
        const t = n(1 * e.length, 1) >>> 0;
        return w().set(e, t / 1), (i = e.length), t;
      }
      function O(e, n) {
        return (e >>>= 0), w().subarray(e / 1, e / 1 + n);
      }
      let W = null;
      function V(e, n) {
        return (
          (e >>>= 0),
          ((null !== W && 0 !== W.byteLength) ||
            (W = new Float32Array(b.memory.buffer)),
          W).subarray(e / 4, e / 4 + n)
        );
      }
      let G = null;
      function U(e, n) {
        return (
          (e >>>= 0),
          ((null !== G && 0 !== G.byteLength) ||
            (G = new Uint32Array(b.memory.buffer)),
          G).subarray(e / 4, e / 4 + n)
        );
      }
      let z = null;
      function q(e, n) {
        return (
          (e >>>= 0),
          ((null !== z && 0 !== z.byteLength) ||
            (z = new Int32Array(b.memory.buffer)),
          z).subarray(e / 4, e / 4 + n)
        );
      }
      let j = null;
      function H(e, n) {
        return (
          (e >>>= 0),
          ((null !== j && 0 !== j.byteLength) ||
            (j = new Uint8ClampedArray(b.memory.buffer)),
          j).subarray(e / 1, e / 1 + n)
        );
      }
      let N = null;
      function Q(e, n) {
        return (
          (e >>>= 0),
          ((null !== N && 0 !== N.byteLength) ||
            (N = new Float64Array(b.memory.buffer)),
          N).subarray(e / 8, e / 8 + n)
        );
      }
      const K =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              b.__wbg_intounderlyingbytesource_free(e >>> 0, 1),
            );
      class $ {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), K.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_intounderlyingbytesource_free(e, 0);
        }
        get type() {
          let e, n;
          try {
            const r = b.__wbindgen_add_to_stack_pointer(-16);
            b.intounderlyingbytesource_type(r, this.__wbg_ptr);
            var t = h().getInt32(r + 0, !0),
              _ = h().getInt32(r + 4, !0);
            return (e = t), (n = _), x(t, _);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16), b.__wbindgen_free(e, n, 1);
          }
        }
        get autoAllocateChunkSize() {
          return (
            b.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr) >>>
            0
          );
        }
        start(e) {
          b.intounderlyingbytesource_start(this.__wbg_ptr, a(e));
        }
        pull(e) {
          return u(b.intounderlyingbytesource_pull(this.__wbg_ptr, a(e)));
        }
        cancel() {
          const e = this.__destroy_into_raw();
          b.intounderlyingbytesource_cancel(e);
        }
      }
      const Y =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              b.__wbg_intounderlyingsink_free(e >>> 0, 1),
            );
      class J {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), Y.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_intounderlyingsink_free(e, 0);
        }
        write(e) {
          return u(b.intounderlyingsink_write(this.__wbg_ptr, a(e)));
        }
        close() {
          const e = this.__destroy_into_raw();
          return u(b.intounderlyingsink_close(e));
        }
        abort(e) {
          const n = this.__destroy_into_raw();
          return u(b.intounderlyingsink_abort(n, a(e)));
        }
      }
      const X =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              b.__wbg_intounderlyingsource_free(e >>> 0, 1),
            );
      class Z {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), X.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_intounderlyingsource_free(e, 0);
        }
        pull(e) {
          return u(b.intounderlyingsource_pull(this.__wbg_ptr, a(e)));
        }
        cancel() {
          const e = this.__destroy_into_raw();
          b.intounderlyingsource_cancel(e);
        }
      }
      const ee =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              b.__wbg_rufflehandle_free(e >>> 0, 1),
            );
      class ne {
        static __wrap(e) {
          e >>>= 0;
          const n = Object.create(ne.prototype);
          return (n.__wbg_ptr = e), ee.register(n, n.__wbg_ptr, n), n;
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), ee.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_rufflehandle_free(e, 0);
        }
        stream_from(e, n) {
          try {
            const _ = b.__wbindgen_add_to_stack_pointer(-16),
              r = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            b.rufflehandle_stream_from(_, this.__wbg_ptr, r, c, a(n));
            var t = h().getInt32(_ + 0, !0);
            if (h().getInt32(_ + 4, !0)) throw u(t);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        load_data(e, n, t) {
          try {
            const r = b.__wbindgen_add_to_stack_pointer(-16),
              c = l(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              f = i;
            b.rufflehandle_load_data(r, this.__wbg_ptr, a(e), a(n), c, f);
            var _ = h().getInt32(r + 0, !0);
            if (h().getInt32(r + 4, !0)) throw u(_);
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
        play() {
          b.rufflehandle_play(this.__wbg_ptr);
        }
        pause() {
          b.rufflehandle_pause(this.__wbg_ptr);
        }
        is_playing() {
          return 0 !== b.rufflehandle_is_playing(this.__wbg_ptr);
        }
        has_focus() {
          return 0 !== b.rufflehandle_has_focus(this.__wbg_ptr);
        }
        volume() {
          return b.rufflehandle_volume(this.__wbg_ptr);
        }
        set_volume(e) {
          b.rufflehandle_set_volume(this.__wbg_ptr, e);
        }
        renderer_debug_info() {
          return u(b.rufflehandle_renderer_debug_info(this.__wbg_ptr));
        }
        renderer_name() {
          return u(b.rufflehandle_renderer_name(this.__wbg_ptr));
        }
        prepare_context_menu() {
          return u(b.rufflehandle_prepare_context_menu(this.__wbg_ptr));
        }
        run_context_menu_callback(e) {
          return u(b.rufflehandle_run_context_menu_callback(this.__wbg_ptr, e));
        }
        set_fullscreen(e) {
          b.rufflehandle_set_fullscreen(this.__wbg_ptr, e);
        }
        clear_custom_menu_items() {
          b.rufflehandle_clear_custom_menu_items(this.__wbg_ptr);
        }
        destroy() {
          b.rufflehandle_destroy(this.__wbg_ptr);
        }
        call_exposed_callback(e, n) {
          const t = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            _ = i,
            r = M(n, b.__wbindgen_malloc),
            c = i;
          return u(
            b.rufflehandle_call_exposed_callback(this.__wbg_ptr, t, _, r, c),
          );
        }
        set_trace_observer(e) {
          b.rufflehandle_set_trace_observer(this.__wbg_ptr, a(e));
        }
        audio_context() {
          return u(b.rufflehandle_audio_context(this.__wbg_ptr));
        }
        static is_wasm_simd_used() {
          return 0 !== b.rufflehandle_is_wasm_simd_used();
        }
      }
      const te =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) =>
              b.__wbg_ruffleinstancebuilder_free(e >>> 0, 1),
            );
      class _e {
        toJSON() {
          return {};
        }
        toString() {
          return JSON.stringify(this);
        }
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), te.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_ruffleinstancebuilder_free(e, 0);
        }
        constructor() {
          const e = b.ruffleinstancebuilder_new();
          return (
            (this.__wbg_ptr = e >>> 0),
            te.register(this, this.__wbg_ptr, this),
            this
          );
        }
        setAllowScriptAccess(e) {
          b.ruffleinstancebuilder_setAllowScriptAccess(this.__wbg_ptr, e);
        }
        setBackgroundColor(e) {
          b.ruffleinstancebuilder_setBackgroundColor(
            this.__wbg_ptr,
            !m(e),
            m(e) ? 0 : e,
          );
        }
        setUpgradeToHttps(e) {
          b.ruffleinstancebuilder_setUpgradeToHttps(this.__wbg_ptr, e);
        }
        setCompatibilityRules(e) {
          b.ruffleinstancebuilder_setCompatibilityRules(this.__wbg_ptr, e);
        }
        setLetterbox(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setLetterbox(this.__wbg_ptr, n, t);
        }
        setBaseUrl(e) {
          var n = m(e) ? 0 : l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setBaseUrl(this.__wbg_ptr, n, t);
        }
        setShowMenu(e) {
          b.ruffleinstancebuilder_setShowMenu(this.__wbg_ptr, e);
        }
        setAllowFullscreen(e) {
          b.ruffleinstancebuilder_setAllowFullscreen(this.__wbg_ptr, e);
        }
        setStageAlign(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setStageAlign(this.__wbg_ptr, n, t);
        }
        setForceAlign(e) {
          b.ruffleinstancebuilder_setForceAlign(this.__wbg_ptr, e);
        }
        setQuality(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setQuality(this.__wbg_ptr, n, t);
        }
        setScale(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setScale(this.__wbg_ptr, n, t);
        }
        setForceScale(e) {
          b.ruffleinstancebuilder_setForceScale(this.__wbg_ptr, e);
        }
        setFrameRate(e) {
          b.ruffleinstancebuilder_setFrameRate(
            this.__wbg_ptr,
            !m(e),
            m(e) ? 0 : e,
          );
        }
        setWmode(e) {
          var n = m(e) ? 0 : l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setWmode(this.__wbg_ptr, n, t);
        }
        setLogLevel(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setLogLevel(this.__wbg_ptr, n, t);
        }
        setMaxExecutionDuration(e) {
          b.ruffleinstancebuilder_setMaxExecutionDuration(this.__wbg_ptr, e);
        }
        setPlayerVersion(e) {
          b.ruffleinstancebuilder_setPlayerVersion(
            this.__wbg_ptr,
            m(e) ? 16777215 : e,
          );
        }
        setPreferredRenderer(e) {
          var n = m(e) ? 0 : l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setPreferredRenderer(this.__wbg_ptr, n, t);
        }
        setOpenUrlMode(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setOpenUrlMode(this.__wbg_ptr, n, t);
        }
        setAllowNetworking(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setAllowNetworking(this.__wbg_ptr, n, t);
        }
        addSocketProxy(e, n, t) {
          const _ = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            r = i,
            c = l(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
            f = i;
          b.ruffleinstancebuilder_addSocketProxy(this.__wbg_ptr, _, r, n, c, f);
        }
        setCredentialAllowList(e) {
          const n = M(e, b.__wbindgen_malloc),
            t = i;
          b.ruffleinstancebuilder_setCredentialAllowList(this.__wbg_ptr, n, t);
        }
        setPlayerRuntime(e) {
          const n = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            t = i;
          b.ruffleinstancebuilder_setPlayerRuntime(this.__wbg_ptr, n, t);
        }
        setVolume(e) {
          b.ruffleinstancebuilder_setVolume(this.__wbg_ptr, e);
        }
        addFont(e, n) {
          const t = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            _ = i,
            r = L(n, b.__wbindgen_malloc),
            c = i;
          b.ruffleinstancebuilder_addFont(this.__wbg_ptr, t, _, r, c);
        }
        setDefaultFont(e, n) {
          const t = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            _ = i,
            r = M(n, b.__wbindgen_malloc),
            c = i;
          b.ruffleinstancebuilder_setDefaultFont(this.__wbg_ptr, t, _, r, c);
        }
        build(e, n) {
          return u(b.ruffleinstancebuilder_build(this.__wbg_ptr, a(e), a(n)));
        }
      }
      const re =
        "undefined" == typeof FinalizationRegistry
          ? { register: () => {}, unregister: () => {} }
          : new FinalizationRegistry((e) => b.__wbg_zipwriter_free(e >>> 0, 1));
      class be {
        __destroy_into_raw() {
          const e = this.__wbg_ptr;
          return (this.__wbg_ptr = 0), re.unregister(this), e;
        }
        free() {
          const e = this.__destroy_into_raw();
          b.__wbg_zipwriter_free(e, 0);
        }
        constructor() {
          const e = b.zipwriter_new();
          return (
            (this.__wbg_ptr = e >>> 0),
            re.register(this, this.__wbg_ptr, this),
            this
          );
        }
        addFile(e, n) {
          const t = l(e, b.__wbindgen_malloc, b.__wbindgen_realloc),
            _ = i,
            r = L(n, b.__wbindgen_malloc),
            c = i;
          b.zipwriter_addFile(this.__wbg_ptr, t, _, r, c);
        }
        save() {
          try {
            const r = b.__wbindgen_add_to_stack_pointer(-16);
            b.zipwriter_save(r, this.__wbg_ptr);
            var e = h().getInt32(r + 0, !0),
              n = h().getInt32(r + 4, !0),
              t = h().getInt32(r + 8, !0);
            if (h().getInt32(r + 12, !0)) throw u(t);
            var _ = O(e, n).slice();
            return b.__wbindgen_free(e, 1 * n, 1), _;
          } finally {
            b.__wbindgen_add_to_stack_pointer(16);
          }
        }
      }
      function ce() {
        const n = { wbg: {} };
        return (
          (n.wbg.__wbindgen_object_drop_ref = function (e) {
            u(e);
          }),
          (n.wbg.__wbindgen_cb_drop = function (e) {
            const n = u(e).original;
            if (1 == n.cnt--) return (n.a = 0), !0;
            return !1;
          }),
          (n.wbg.__wbindgen_object_clone_ref = function (e) {
            return a(f(e));
          }),
          (n.wbg.__wbg_displayClipboardModal_569d3e13a5abdea3 = function (
            e,
            n,
          ) {
            f(e).displayClipboardModal(0 !== n);
          }),
          (n.wbg.__wbg_suppressContextMenu_96e9b91fb972b4dd = function (e) {
            f(e).suppressContextMenu();
          }),
          (n.wbg.__wbg_setMetadata_043ed4b72d8869e2 = function (e, n) {
            f(e).setMetadata(u(n));
          }),
          (n.wbg.__wbindgen_string_get = function (e, n) {
            const t = f(n),
              _ = "string" == typeof t ? t : void 0;
            var r = m(_) ? 0 : l(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
          }),
          (n.wbg.__wbg_onCallbackAvailable_03c42ccb24ed8e42 = function (
            e,
            n,
            t,
          ) {
            f(e).onCallbackAvailable(x(n, t));
          }),
          (n.wbg.__wbg_getObjectId_60d687bd38d1d216 = function (e, n) {
            const t = f(n).getObjectId();
            var _ = m(t) ? 0 : l(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              r = i;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, _, !0);
          }),
          (n.wbg.__wbg_onFSCommand_017ca43ca4f05787 = function () {
            return F(function (e, n, t, _, r) {
              return f(e).onFSCommand(x(n, t), x(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_panic_616f3c503fd818fd = function (e, n) {
            f(e).panic(f(n));
          }),
          (n.wbg.__wbg_displayRootMovieDownloadFailedMessage_5b39b325517d28f5 =
            function (e, n) {
              f(e).displayRootMovieDownloadFailedMessage(0 !== n);
            }),
          (n.wbg.__wbg_displayMessage_9ef7588e3f1c497d = function (e, n, t) {
            f(e).displayMessage(x(n, t));
          }),
          (n.wbg.__wbg_setFullscreen_d332d00564712373 = function () {
            return F(function (e, n) {
              f(e).setFullscreen(0 !== n);
            }, arguments);
          }),
          (n.wbg.__wbg_openVirtualKeyboard_474750938810c541 = function (e) {
            f(e).openVirtualKeyboard();
          }),
          (n.wbg.__wbg_closeVirtualKeyboard_52fcae04ccccb4e8 = function (e) {
            f(e).closeVirtualKeyboard();
          }),
          (n.wbg.__wbg_isVirtualKeyboardFocused_722148f3f1710fb0 = function (
            e,
          ) {
            return f(e).isVirtualKeyboardFocused();
          }),
          (n.wbg.__wbg_displayUnsupportedVideo_6342507758ce4d07 = function (
            e,
            n,
            t,
          ) {
            f(e).displayUnsupportedVideo(x(n, t));
          }),
          (n.wbg.__wbindgen_string_new = function (e, n) {
            return a(x(e, n));
          }),
          (n.wbg.__wbindgen_add = function (e, n) {
            return a(f(e) + f(n));
          }),
          (n.wbg.__wbg_rufflehandle_new = function (e) {
            return a(ne.__wrap(e));
          }),
          (n.wbg.__wbindgen_error_new = function (e, n) {
            return a(new Error(x(e, n)));
          }),
          (n.wbg.__wbindgen_is_function = function (e) {
            return "function" == typeof f(e);
          }),
          (n.wbg.__wbg_copyToAudioBufferInterleaved_efb71b16faf5adb2 =
            function (e, n, t) {
              (0, _.A)(f(e), V(n, t));
            }),
          (n.wbg.__wbg_callExternalInterface_71616285357f98c8 = function () {
            return F(function (e, n, t, r) {
              var c = (function (e, n) {
                e >>>= 0;
                const t = h(),
                  _ = [];
                for (let r = e; r < e + 4 * n; r += 4)
                  _.push(u(t.getUint32(r, !0)));
                return _;
              })(t, r).slice();
              b.__wbindgen_free(t, 4 * r, 4);
              return a((0, _.V)(x(e, n), c));
            }, arguments);
          }),
          (n.wbg.__wbindgen_number_get = function (e, n) {
            const t = f(n),
              _ = "number" == typeof t ? t : void 0;
            h().setFloat64(e + 8, m(_) ? 0 : _, !0),
              h().setInt32(e + 0, !m(_), !0);
          }),
          (n.wbg.__wbindgen_boolean_get = function (e) {
            const n = f(e);
            return "boolean" == typeof n ? (n ? 1 : 0) : 2;
          }),
          (n.wbg.__wbindgen_is_null = function (e) {
            return null === f(e);
          }),
          (n.wbg.__wbindgen_is_undefined = function (e) {
            return void 0 === f(e);
          }),
          (n.wbg.__wbindgen_number_new = function (e) {
            return a(e);
          }),
          (n.wbg.__wbindgen_in = function (e, n) {
            return f(e) in f(n);
          }),
          (n.wbg.__wbg_new_abda76e883ba8a5f = function () {
            return a(new Error());
          }),
          (n.wbg.__wbg_stack_658279fe44541cf6 = function (e, n) {
            const t = l(f(n).stack, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_error_f851667af71bcfc6 = function (e, n) {
            let t, _;
            try {
              (t = e), (_ = n), console.error(x(e, n));
            } finally {
              b.__wbindgen_free(t, _, 1);
            }
          }),
          (n.wbg.__wbindgen_is_object = function (e) {
            const n = f(e);
            return "object" == typeof n && null !== n;
          }),
          (n.wbg.__wbg_set_f975102236d3c502 = function (e, n, t) {
            f(e)[u(n)] = u(t);
          }),
          (n.wbg.__wbg_getReader_584431a478f1339c = function () {
            return F(function (e) {
              return a(f(e).getReader());
            }, arguments);
          }),
          (n.wbg.__wbg_done_510de141aaf69a99 = function (e) {
            return f(e).done;
          }),
          (n.wbg.__wbg_value_3ef4965e9c7085be = function (e) {
            return a(f(e).value);
          }),
          (n.wbg.__wbindgen_is_string = function (e) {
            return "string" == typeof f(e);
          }),
          (n.wbg.__wbg_log_c9486ca5d8e2cbe8 = function (e, n) {
            let t, _;
            try {
              (t = e), (_ = n), console.log(x(e, n));
            } finally {
              b.__wbindgen_free(t, _, 1);
            }
          }),
          (n.wbg.__wbg_log_aba5996d9bde071f = function (
            e,
            n,
            t,
            _,
            r,
            c,
            f,
            o,
          ) {
            let u, a;
            try {
              (u = e), (a = n), console.log(x(e, n), x(t, _), x(r, c), x(f, o));
            } finally {
              b.__wbindgen_free(u, a, 1);
            }
          }),
          (n.wbg.__wbg_mark_40e050a77cc39fea = function (e, n) {
            performance.mark(x(e, n));
          }),
          (n.wbg.__wbg_measure_aa7a73f17813f708 = function () {
            return F(function (e, n, t, _) {
              let r, c, f, o;
              try {
                (r = e),
                  (c = n),
                  (f = t),
                  (o = _),
                  performance.measure(x(e, n), x(t, _));
              } finally {
                b.__wbindgen_free(r, c, 1), b.__wbindgen_free(f, o, 1);
              }
            }, arguments);
          }),
          (n.wbg.__wbg_performance_a1b8bde2ee512264 = function (e) {
            return a(f(e).performance);
          }),
          (n.wbg.__wbg_now_abd80e969af37148 = function (e) {
            return f(e).now();
          }),
          (n.wbg.__wbg_crypto_1d1f22824a6a080c = function (e) {
            return a(f(e).crypto);
          }),
          (n.wbg.__wbg_process_4a72847cc503995b = function (e) {
            return a(f(e).process);
          }),
          (n.wbg.__wbg_versions_f686565e586dd935 = function (e) {
            return a(f(e).versions);
          }),
          (n.wbg.__wbg_node_104a2ff8d6ea03a2 = function (e) {
            return a(f(e).node);
          }),
          (n.wbg.__wbg_require_cca90b1a94a0255b = function () {
            return F(function () {
              return a(e.require);
            }, arguments);
          }),
          (n.wbg.__wbg_msCrypto_eb05e62b530a1508 = function (e) {
            return a(f(e).msCrypto);
          }),
          (n.wbg.__wbg_randomFillSync_5c9c955aa56b6049 = function () {
            return F(function (e, n) {
              f(e).randomFillSync(u(n));
            }, arguments);
          }),
          (n.wbg.__wbg_getRandomValues_3aa56aa6edec874c = function () {
            return F(function (e, n) {
              f(e).getRandomValues(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_GpuDeviceLostInfo_c7232ceb822b15d6 =
            function (e) {
              let n;
              try {
                n = f(e) instanceof GPUDeviceLostInfo;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_dispatchWorkgroups_f0fd90dcd4a506fa = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).dispatchWorkgroups(n >>> 0, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_dispatchWorkgroupsIndirect_567a84763f6a0b87 = function (
            e,
            n,
            t,
          ) {
            f(e).dispatchWorkgroupsIndirect(f(n), t);
          }),
          (n.wbg.__wbg_end_bbe499813ce72830 = function (e) {
            f(e).end();
          }),
          (n.wbg.__wbg_setPipeline_4d0e04e7370f0e2e = function (e, n) {
            f(e).setPipeline(f(n));
          }),
          (n.wbg.__wbg_setBindGroup_48300d51a3d74853 = function (e, n, t) {
            f(e).setBindGroup(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_setBindGroup_d79f4f1d5e43c06f = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).setBindGroup(n >>> 0, f(t), U(_, r), b, c >>> 0);
          }),
          (n.wbg.__wbg_reason_436ee862de561851 = function (e) {
            return { unknown: 0, destroyed: 1 }[f(e).reason] ?? 2;
          }),
          (n.wbg.__wbg_message_54cb97c0fd1579bf = function (e, n) {
            const t = l(
                f(n).message,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc,
              ),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_instanceof_GpuValidationError_05482398d349fd2d =
            function (e) {
              let n;
              try {
                n = f(e) instanceof GPUValidationError;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_message_4bd9ef09b3092122 = function (e, n) {
            const t = l(
                f(n).message,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc,
              ),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_instanceof_GpuOutOfMemoryError_658135cd3b3f08e2 =
            function (e) {
              let n;
              try {
                n = f(e) instanceof GPUOutOfMemoryError;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_type_c3e79de7c41f03c2 = function (e) {
            return { error: 0, warning: 1, info: 2 }[f(e).type] ?? 3;
          }),
          (n.wbg.__wbg_offset_47f9a19926637c8e = function (e) {
            return f(e).offset;
          }),
          (n.wbg.__wbg_length_ff62902e8840f82f = function (e) {
            return f(e).length;
          }),
          (n.wbg.__wbg_lineNum_06a4c70c1027df81 = function (e) {
            return f(e).lineNum;
          }),
          (n.wbg.__wbg_message_0ff806941d54e1d2 = function (e, n) {
            const t = l(
                f(n).message,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc,
              ),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_getMappedRange_08e71df297c66a50 = function (e, n, t) {
            return a(f(e).getMappedRange(n, t));
          }),
          (n.wbg.__wbg_features_b1971639ec1a77f7 = function (e) {
            return a(f(e).features);
          }),
          (n.wbg.__wbg_limits_e806d307d42a9dde = function (e) {
            return a(f(e).limits);
          }),
          (n.wbg.__wbg_queue_e124eaca54d285d4 = function (e) {
            return a(f(e).queue);
          }),
          (n.wbg.__wbg_lost_02e8ddfb37103cc2 = function (e) {
            return a(f(e).lost);
          }),
          (n.wbg.__wbg_setonuncapturederror_c702acc9eeeb9613 = function (e, n) {
            f(e).onuncapturederror = f(n);
          }),
          (n.wbg.__wbg_createBindGroup_f93afa3a0a06b10e = function (e, n) {
            return a(f(e).createBindGroup(f(n)));
          }),
          (n.wbg.__wbg_createBindGroupLayout_4243a95be946d48a = function (
            e,
            n,
          ) {
            return a(f(e).createBindGroupLayout(f(n)));
          }),
          (n.wbg.__wbg_createBuffer_44406243485760b1 = function (e, n) {
            return a(f(e).createBuffer(f(n)));
          }),
          (n.wbg.__wbg_createCommandEncoder_c7eddb5143f91992 = function (e, n) {
            return a(f(e).createCommandEncoder(f(n)));
          }),
          (n.wbg.__wbg_createComputePipeline_fb60500f9a96e290 = function (
            e,
            n,
          ) {
            return a(f(e).createComputePipeline(f(n)));
          }),
          (n.wbg.__wbg_createPipelineLayout_bcb406883550f9cc = function (e, n) {
            return a(f(e).createPipelineLayout(f(n)));
          }),
          (n.wbg.__wbg_createQuerySet_4040f9ea5a2ac03c = function (e, n) {
            return a(f(e).createQuerySet(f(n)));
          }),
          (n.wbg.__wbg_createRenderBundleEncoder_d9644450ab4cad8f = function (
            e,
            n,
          ) {
            return a(f(e).createRenderBundleEncoder(f(n)));
          }),
          (n.wbg.__wbg_createRenderPipeline_7ca396c186d8d06a = function (e, n) {
            return a(f(e).createRenderPipeline(f(n)));
          }),
          (n.wbg.__wbg_createSampler_ed81ff565caa903a = function (e, n) {
            return a(f(e).createSampler(f(n)));
          }),
          (n.wbg.__wbg_createShaderModule_cda89eb5c1073627 = function (e, n) {
            return a(f(e).createShaderModule(f(n)));
          }),
          (n.wbg.__wbg_createTexture_06106f81b60e5462 = function (e, n) {
            return a(f(e).createTexture(f(n)));
          }),
          (n.wbg.__wbg_destroy_2a8c41712abac4cb = function (e) {
            f(e).destroy();
          }),
          (n.wbg.__wbg_popErrorScope_6d6b4abc95412374 = function (e) {
            return a(f(e).popErrorScope());
          }),
          (n.wbg.__wbg_pushErrorScope_3dc565fa86fee870 = function (e, n) {
            f(e).pushErrorScope(["validation", "out-of-memory", "internal"][n]);
          }),
          (n.wbg.__wbg_error_520ca6f621497012 = function (e) {
            return a(f(e).error);
          }),
          (n.wbg.__wbg_has_14b751afdcf0a341 = function (e, n, t) {
            return f(e).has(x(n, t));
          }),
          (n.wbg.__wbg_maxTextureDimension1D_71c238385d79f287 = function (e) {
            return f(e).maxTextureDimension1D;
          }),
          (n.wbg.__wbg_maxTextureDimension2D_ce910a0ea6c7213b = function (e) {
            return f(e).maxTextureDimension2D;
          }),
          (n.wbg.__wbg_maxTextureDimension3D_76032d2a97af63ac = function (e) {
            return f(e).maxTextureDimension3D;
          }),
          (n.wbg.__wbg_maxTextureArrayLayers_b561668f7e1ebacc = function (e) {
            return f(e).maxTextureArrayLayers;
          }),
          (n.wbg.__wbg_maxBindGroups_d2b688642140a1bb = function (e) {
            return f(e).maxBindGroups;
          }),
          (n.wbg.__wbg_maxBindingsPerBindGroup_a3e9e404dd893c83 = function (e) {
            return f(e).maxBindingsPerBindGroup;
          }),
          (n.wbg.__wbg_maxDynamicUniformBuffersPerPipelineLayout_98a8fbca367148bf =
            function (e) {
              return f(e).maxDynamicUniformBuffersPerPipelineLayout;
            }),
          (n.wbg.__wbg_maxDynamicStorageBuffersPerPipelineLayout_0dec6aea74b472ad =
            function (e) {
              return f(e).maxDynamicStorageBuffersPerPipelineLayout;
            }),
          (n.wbg.__wbg_maxSampledTexturesPerShaderStage_7a0712465c0a12b4 =
            function (e) {
              return f(e).maxSampledTexturesPerShaderStage;
            }),
          (n.wbg.__wbg_maxSamplersPerShaderStage_6716e9792fc2a833 = function (
            e,
          ) {
            return f(e).maxSamplersPerShaderStage;
          }),
          (n.wbg.__wbg_maxStorageBuffersPerShaderStage_640d34738978a4ff =
            function (e) {
              return f(e).maxStorageBuffersPerShaderStage;
            }),
          (n.wbg.__wbg_maxStorageTexturesPerShaderStage_6614a1e40f7e2827 =
            function (e) {
              return f(e).maxStorageTexturesPerShaderStage;
            }),
          (n.wbg.__wbg_maxUniformBuffersPerShaderStage_1ff2f3c6468374ae =
            function (e) {
              return f(e).maxUniformBuffersPerShaderStage;
            }),
          (n.wbg.__wbg_maxUniformBufferBindingSize_8830a8df4f730637 = function (
            e,
          ) {
            return f(e).maxUniformBufferBindingSize;
          }),
          (n.wbg.__wbg_maxStorageBufferBindingSize_10b6eb49372335bc = function (
            e,
          ) {
            return f(e).maxStorageBufferBindingSize;
          }),
          (n.wbg.__wbg_maxVertexBuffers_9f97f2a89863a431 = function (e) {
            return f(e).maxVertexBuffers;
          }),
          (n.wbg.__wbg_maxBufferSize_1c8b836056558ebf = function (e) {
            return f(e).maxBufferSize;
          }),
          (n.wbg.__wbg_maxVertexAttributes_cff466bbace9aa7c = function (e) {
            return f(e).maxVertexAttributes;
          }),
          (n.wbg.__wbg_maxVertexBufferArrayStride_fb650714a5bd0e68 = function (
            e,
          ) {
            return f(e).maxVertexBufferArrayStride;
          }),
          (n.wbg.__wbg_minUniformBufferOffsetAlignment_0168a0d08b19afbe =
            function (e) {
              return f(e).minUniformBufferOffsetAlignment;
            }),
          (n.wbg.__wbg_minStorageBufferOffsetAlignment_3b63a59f37f275f8 =
            function (e) {
              return f(e).minStorageBufferOffsetAlignment;
            }),
          (n.wbg.__wbg_maxInterStageShaderComponents_db659eaa3b248a74 =
            function (e) {
              return f(e).maxInterStageShaderComponents;
            }),
          (n.wbg.__wbg_maxColorAttachments_e821b856b5cba24e = function (e) {
            return f(e).maxColorAttachments;
          }),
          (n.wbg.__wbg_maxColorAttachmentBytesPerSample_ab770042dd82a5bf =
            function (e) {
              return f(e).maxColorAttachmentBytesPerSample;
            }),
          (n.wbg.__wbg_maxComputeWorkgroupStorageSize_e6773eb1cbfa7a83 =
            function (e) {
              return f(e).maxComputeWorkgroupStorageSize;
            }),
          (n.wbg.__wbg_maxComputeInvocationsPerWorkgroup_4ed447998b195973 =
            function (e) {
              return f(e).maxComputeInvocationsPerWorkgroup;
            }),
          (n.wbg.__wbg_maxComputeWorkgroupSizeX_de94f4925b26c73c = function (
            e,
          ) {
            return f(e).maxComputeWorkgroupSizeX;
          }),
          (n.wbg.__wbg_maxComputeWorkgroupSizeY_cb75de6b450c8915 = function (
            e,
          ) {
            return f(e).maxComputeWorkgroupSizeY;
          }),
          (n.wbg.__wbg_maxComputeWorkgroupSizeZ_6277d18773d70891 = function (
            e,
          ) {
            return f(e).maxComputeWorkgroupSizeZ;
          }),
          (n.wbg.__wbg_maxComputeWorkgroupsPerDimension_baef21641827881d =
            function (e) {
              return f(e).maxComputeWorkgroupsPerDimension;
            }),
          (n.wbg.__wbg_instanceof_GpuAdapter_ba82c448cfa55608 = function (e) {
            let n;
            try {
              n = f(e) instanceof GPUAdapter;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_instanceof_GpuCanvasContext_1eacd2a8c6b36ada = function (
            e,
          ) {
            let n;
            try {
              n = f(e) instanceof GPUCanvasContext;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_Window_4d1f8d969d639a22 = function (e) {
            return a(f(e).Window);
          }),
          (n.wbg.__wbg_WorkerGlobalScope_c4f12290f7d2efed = function (e) {
            return a(f(e).WorkerGlobalScope);
          }),
          (n.wbg.__wbg_gpu_7d756a02ad45027d = function (e) {
            return a(f(e).gpu);
          }),
          (n.wbg.__wbg_requestAdapter_8413757c51a35b1d = function (e, n) {
            return a(f(e).requestAdapter(f(n)));
          }),
          (n.wbg.__wbg_requestDevice_1c8e4f0fe8729328 = function (e, n) {
            return a(f(e).requestDevice(f(n)));
          }),
          (n.wbg.__wbg_features_e7f12cb6c5258238 = function (e) {
            return a(f(e).features);
          }),
          (n.wbg.__wbg_limits_622a6ae19a037dbf = function (e) {
            return a(f(e).limits);
          }),
          (n.wbg.__wbg_getPreferredCanvasFormat_d55bc32b5a6b948a = function (
            e,
          ) {
            return (
              {
                r8unorm: 0,
                r8snorm: 1,
                r8uint: 2,
                r8sint: 3,
                r16uint: 4,
                r16sint: 5,
                r16float: 6,
                rg8unorm: 7,
                rg8snorm: 8,
                rg8uint: 9,
                rg8sint: 10,
                r32uint: 11,
                r32sint: 12,
                r32float: 13,
                rg16uint: 14,
                rg16sint: 15,
                rg16float: 16,
                rgba8unorm: 17,
                "rgba8unorm-srgb": 18,
                rgba8snorm: 19,
                rgba8uint: 20,
                rgba8sint: 21,
                bgra8unorm: 22,
                "bgra8unorm-srgb": 23,
                rgb9e5ufloat: 24,
                rgb10a2uint: 25,
                rgb10a2unorm: 26,
                rg11b10ufloat: 27,
                rg32uint: 28,
                rg32sint: 29,
                rg32float: 30,
                rgba16uint: 31,
                rgba16sint: 32,
                rgba16float: 33,
                rgba32uint: 34,
                rgba32sint: 35,
                rgba32float: 36,
                stencil8: 37,
                depth16unorm: 38,
                depth24plus: 39,
                "depth24plus-stencil8": 40,
                depth32float: 41,
                "depth32float-stencil8": 42,
                "bc1-rgba-unorm": 43,
                "bc1-rgba-unorm-srgb": 44,
                "bc2-rgba-unorm": 45,
                "bc2-rgba-unorm-srgb": 46,
                "bc3-rgba-unorm": 47,
                "bc3-rgba-unorm-srgb": 48,
                "bc4-r-unorm": 49,
                "bc4-r-snorm": 50,
                "bc5-rg-unorm": 51,
                "bc5-rg-snorm": 52,
                "bc6h-rgb-ufloat": 53,
                "bc6h-rgb-float": 54,
                "bc7-rgba-unorm": 55,
                "bc7-rgba-unorm-srgb": 56,
                "etc2-rgb8unorm": 57,
                "etc2-rgb8unorm-srgb": 58,
                "etc2-rgb8a1unorm": 59,
                "etc2-rgb8a1unorm-srgb": 60,
                "etc2-rgba8unorm": 61,
                "etc2-rgba8unorm-srgb": 62,
                "eac-r11unorm": 63,
                "eac-r11snorm": 64,
                "eac-rg11unorm": 65,
                "eac-rg11snorm": 66,
                "astc-4x4-unorm": 67,
                "astc-4x4-unorm-srgb": 68,
                "astc-5x4-unorm": 69,
                "astc-5x4-unorm-srgb": 70,
                "astc-5x5-unorm": 71,
                "astc-5x5-unorm-srgb": 72,
                "astc-6x5-unorm": 73,
                "astc-6x5-unorm-srgb": 74,
                "astc-6x6-unorm": 75,
                "astc-6x6-unorm-srgb": 76,
                "astc-8x5-unorm": 77,
                "astc-8x5-unorm-srgb": 78,
                "astc-8x6-unorm": 79,
                "astc-8x6-unorm-srgb": 80,
                "astc-8x8-unorm": 81,
                "astc-8x8-unorm-srgb": 82,
                "astc-10x5-unorm": 83,
                "astc-10x5-unorm-srgb": 84,
                "astc-10x6-unorm": 85,
                "astc-10x6-unorm-srgb": 86,
                "astc-10x8-unorm": 87,
                "astc-10x8-unorm-srgb": 88,
                "astc-10x10-unorm": 89,
                "astc-10x10-unorm-srgb": 90,
                "astc-12x10-unorm": 91,
                "astc-12x10-unorm-srgb": 92,
                "astc-12x12-unorm": 93,
                "astc-12x12-unorm-srgb": 94,
              }[f(e).getPreferredCanvasFormat()] ?? 95
            );
          }),
          (n.wbg.__wbg_configure_48cfbf148a9998c2 = function (e, n) {
            f(e).configure(f(n));
          }),
          (n.wbg.__wbg_getCurrentTexture_1c8e29bec577927d = function (e) {
            return a(f(e).getCurrentTexture());
          }),
          (n.wbg.__wbg_mapAsync_98ce4986e2f6d4af = function (e, n, t, _) {
            return a(f(e).mapAsync(n >>> 0, t, _));
          }),
          (n.wbg.__wbg_unmap_efca7885e5daff78 = function (e) {
            f(e).unmap();
          }),
          (n.wbg.__wbg_getCompilationInfo_adcb4d74ed54d1f9 = function (e) {
            return a(f(e).getCompilationInfo());
          }),
          (n.wbg.__wbg_messages_6833dfd0ae6a0a7c = function (e) {
            return a(f(e).messages);
          }),
          (n.wbg.__wbg_createView_87e589e1574ba76c = function (e, n) {
            return a(f(e).createView(f(n)));
          }),
          (n.wbg.__wbg_destroy_387cb19081689594 = function (e) {
            f(e).destroy();
          }),
          (n.wbg.__wbg_destroy_b040948312c539a9 = function (e) {
            f(e).destroy();
          }),
          (n.wbg.__wbg_getBindGroupLayout_0194b7a790ac805d = function (e, n) {
            return a(f(e).getBindGroupLayout(n >>> 0));
          }),
          (n.wbg.__wbg_getBindGroupLayout_1490d5a61f4fd56b = function (e, n) {
            return a(f(e).getBindGroupLayout(n >>> 0));
          }),
          (n.wbg.__wbg_copyBufferToBuffer_f0736fef84f76be5 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).copyBufferToBuffer(f(n), t, f(_), r, b);
          }),
          (n.wbg.__wbg_copyBufferToTexture_aedde01ad3786b4f = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).copyBufferToTexture(f(n), f(t), f(_));
          }),
          (n.wbg.__wbg_copyTextureToBuffer_268207d3e09dfa81 = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).copyTextureToBuffer(f(n), f(t), f(_));
          }),
          (n.wbg.__wbg_copyTextureToTexture_7ea3d6de0a82ce7f = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).copyTextureToTexture(f(n), f(t), f(_));
          }),
          (n.wbg.__wbg_beginComputePass_df50d9ddd5f32a63 = function (e, n) {
            return a(f(e).beginComputePass(f(n)));
          }),
          (n.wbg.__wbg_beginRenderPass_14284a54cee2063b = function (e, n) {
            return a(f(e).beginRenderPass(f(n)));
          }),
          (n.wbg.__wbg_label_81cb6c4ebcba5f4d = function (e, n) {
            const t = l(f(n).label, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_finish_78696a2f194fbb7a = function (e, n) {
            return a(f(e).finish(f(n)));
          }),
          (n.wbg.__wbg_finish_7ad9d3e23124bbc6 = function (e) {
            return a(f(e).finish());
          }),
          (n.wbg.__wbg_clearBuffer_a5ccb106665ad51e = function (e, n, t) {
            f(e).clearBuffer(f(n), t);
          }),
          (n.wbg.__wbg_clearBuffer_f06a69a0aa134d24 = function (e, n, t, _) {
            f(e).clearBuffer(f(n), t, _);
          }),
          (n.wbg.__wbg_resolveQuerySet_7354946ea63dacbb = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).resolveQuerySet(f(n), t >>> 0, _ >>> 0, f(r), b >>> 0);
          }),
          (n.wbg.__wbg_finish_5be91110098e071c = function (e) {
            return a(f(e).finish());
          }),
          (n.wbg.__wbg_finish_667443ed0047f53a = function (e, n) {
            return a(f(e).finish(f(n)));
          }),
          (n.wbg.__wbg_writeBuffer_6ce87bc6ff22a2b5 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).writeBuffer(f(n), t, f(_), r, b);
          }),
          (n.wbg.__wbg_usage_5043ac06189fbe53 = function (e) {
            return f(e).usage;
          }),
          (n.wbg.__wbg_size_61d4fa05868b79cd = function (e) {
            return f(e).size;
          }),
          (n.wbg.__wbg_writeTexture_3708ced0dd386721 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).writeTexture(f(n), f(t), f(_), f(r));
          }),
          (n.wbg.__wbg_copyExternalImageToTexture_e192d56d70996ad4 = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).copyExternalImageToTexture(f(n), f(t), f(_));
          }),
          (n.wbg.__wbg_setPipeline_6174c2e8900fe24a = function (e, n) {
            f(e).setPipeline(f(n));
          }),
          (n.wbg.__wbg_setBindGroup_de4812744c6ebb6c = function (e, n, t) {
            f(e).setBindGroup(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_setBindGroup_92581920e209bf52 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).setBindGroup(n >>> 0, f(t), U(_, r), b, c >>> 0);
          }),
          (n.wbg.__wbg_setIndexBuffer_91b6f5eb1a43df9b = function (e, n, t, _) {
            f(e).setIndexBuffer(f(n), ["uint16", "uint32"][t], _);
          }),
          (n.wbg.__wbg_setIndexBuffer_5bce79843be8653d = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).setIndexBuffer(f(n), ["uint16", "uint32"][t], _, r);
          }),
          (n.wbg.__wbg_setVertexBuffer_d9b48c3489dcfa22 = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).setVertexBuffer(n >>> 0, f(t), _);
          }),
          (n.wbg.__wbg_setVertexBuffer_330ab505b9dfc64b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).setVertexBuffer(n >>> 0, f(t), _, r);
          }),
          (n.wbg.__wbg_draw_29abcb466fee48b4 = function (e, n, t, _, r) {
            f(e).draw(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_drawIndexed_34b06707991ddaf7 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).drawIndexed(n >>> 0, t >>> 0, _ >>> 0, r, b >>> 0);
          }),
          (n.wbg.__wbg_drawIndirect_0054fe754e8e46e9 = function (e, n, t) {
            f(e).drawIndirect(f(n), t);
          }),
          (n.wbg.__wbg_drawIndexedIndirect_4b7b51fa979657ca = function (
            e,
            n,
            t,
          ) {
            f(e).drawIndexedIndirect(f(n), t);
          }),
          (n.wbg.__wbg_setPipeline_8f2f5c316ddb7f68 = function (e, n) {
            f(e).setPipeline(f(n));
          }),
          (n.wbg.__wbg_setBindGroup_da48569994113ec3 = function (e, n, t) {
            f(e).setBindGroup(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_setBindGroup_1c3dd07b998fa943 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).setBindGroup(n >>> 0, f(t), U(_, r), b, c >>> 0);
          }),
          (n.wbg.__wbg_setIndexBuffer_1dc175abfd5d9be9 = function (e, n, t, _) {
            f(e).setIndexBuffer(f(n), ["uint16", "uint32"][t], _);
          }),
          (n.wbg.__wbg_setIndexBuffer_a0fcb26f210351b7 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).setIndexBuffer(f(n), ["uint16", "uint32"][t], _, r);
          }),
          (n.wbg.__wbg_setVertexBuffer_c347f9618d3f056a = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).setVertexBuffer(n >>> 0, f(t), _);
          }),
          (n.wbg.__wbg_setVertexBuffer_40da6368898587db = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).setVertexBuffer(n >>> 0, f(t), _, r);
          }),
          (n.wbg.__wbg_draw_a3e2be7a25d4af68 = function (e, n, t, _, r) {
            f(e).draw(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_drawIndexed_f219cccc74b869c5 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).drawIndexed(n >>> 0, t >>> 0, _ >>> 0, r, b >>> 0);
          }),
          (n.wbg.__wbg_drawIndirect_23fc0a72c5f1b993 = function (e, n, t) {
            f(e).drawIndirect(f(n), t);
          }),
          (n.wbg.__wbg_drawIndexedIndirect_6839c0505e2eed2e = function (
            e,
            n,
            t,
          ) {
            f(e).drawIndexedIndirect(f(n), t);
          }),
          (n.wbg.__wbg_setBlendConstant_fd172910ef2cc0c8 = function (e, n) {
            f(e).setBlendConstant(f(n));
          }),
          (n.wbg.__wbg_setScissorRect_915b4534e3936f28 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).setScissorRect(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_setViewport_aff318ede051c64e = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).setViewport(n, t, _, r, b, c);
          }),
          (n.wbg.__wbg_setStencilReference_e2bb05496423e92e = function (e, n) {
            f(e).setStencilReference(n >>> 0);
          }),
          (n.wbg.__wbg_executeBundles_0f6b9b3accb5b6a7 = function (e, n) {
            f(e).executeBundles(f(n));
          }),
          (n.wbg.__wbg_end_c97b7dbccda72e72 = function (e) {
            f(e).end();
          }),
          (n.wbg.__wbg_submit_4283b63806c5d15e = function (e, n) {
            f(e).submit(f(n));
          }),
          (n.wbg.__wbg_queueMicrotask_48421b3cc9052b68 = function (e) {
            return a(f(e).queueMicrotask);
          }),
          (n.wbg.__wbg_queueMicrotask_12a30234db4045d3 = function (e) {
            queueMicrotask(f(e));
          }),
          (n.wbg.__wbg_instanceof_WebGl2RenderingContext_62ccef896d9204fa =
            function (e) {
              let n;
              try {
                n = f(e) instanceof WebGL2RenderingContext;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_beginQuery_2babccfce9472da4 = function (e, n, t) {
            f(e).beginQuery(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindBufferRange_ec55dd1088960c35 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).bindBufferRange(n >>> 0, t >>> 0, f(_), r, b);
          }),
          (n.wbg.__wbg_bindSampler_f251f0dde3843dc4 = function (e, n, t) {
            f(e).bindSampler(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindVertexArray_bec56c40e9ec299d = function (e, n) {
            f(e).bindVertexArray(f(n));
          }),
          (n.wbg.__wbg_blitFramebuffer_cb1261c0e925d363 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
            a,
            i,
          ) {
            f(e).blitFramebuffer(n, t, _, r, b, c, o, u, a >>> 0, i >>> 0);
          }),
          (n.wbg.__wbg_bufferData_f552c26392b9837d = function (e, n, t, _) {
            f(e).bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_94ce174a81b32961 = function (e, n, t, _) {
            f(e).bufferData(n >>> 0, f(t), _ >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_897bff8bd23ca0b4 = function (e, n, t, _) {
            f(e).bufferSubData(n >>> 0, t, f(_));
          }),
          (n.wbg.__wbg_clearBufferfv_bd093a58afda7a8b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).clearBufferfv(n >>> 0, t, V(_, r));
          }),
          (n.wbg.__wbg_clearBufferiv_18ffec9d148aaf4b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).clearBufferiv(n >>> 0, t, q(_, r));
          }),
          (n.wbg.__wbg_clearBufferuiv_8575fe1b1af9dd15 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).clearBufferuiv(n >>> 0, t, U(_, r));
          }),
          (n.wbg.__wbg_clientWaitSync_8d3b836729fa705f = function (e, n, t, _) {
            return f(e).clientWaitSync(f(n), t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_d2201c663eb7e7c0 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
            a,
          ) {
            f(e).compressedTexSubImage2D(n >>> 0, t, _, r, b, c, o >>> 0, u, a);
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_088b90b29f544ebc = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
          ) {
            f(e).compressedTexSubImage2D(n >>> 0, t, _, r, b, c, o >>> 0, f(u));
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_8d64b364b8ed6808 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
            a,
            i,
            g,
          ) {
            f(e).compressedTexSubImage3D(
              n >>> 0,
              t,
              _,
              r,
              b,
              c,
              o,
              u,
              a >>> 0,
              i,
              g,
            );
          }),
          (n.wbg.__wbg_compressedTexSubImage3D_d2b94340686bbb79 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
            a,
            i,
          ) {
            f(e).compressedTexSubImage3D(
              n >>> 0,
              t,
              _,
              r,
              b,
              c,
              o,
              u,
              a >>> 0,
              f(i),
            );
          }),
          (n.wbg.__wbg_copyBufferSubData_026e82b392fb8df2 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).copyBufferSubData(n >>> 0, t >>> 0, _, r, b);
          }),
          (n.wbg.__wbg_copyTexSubImage3D_f2471ef3614db8d4 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
            a,
          ) {
            f(e).copyTexSubImage3D(n >>> 0, t, _, r, b, c, o, u, a);
          }),
          (n.wbg.__wbg_createQuery_88b1a8cbfaeadcd4 = function (e) {
            const n = f(e).createQuery();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createSampler_ece1b922a455bd52 = function (e) {
            const n = f(e).createSampler();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createVertexArray_a3e58c38609ae150 = function (e) {
            const n = f(e).createVertexArray();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_deleteQuery_deba58de1a061092 = function (e, n) {
            f(e).deleteQuery(f(n));
          }),
          (n.wbg.__wbg_deleteSampler_341b638a62cece3e = function (e, n) {
            f(e).deleteSampler(f(n));
          }),
          (n.wbg.__wbg_deleteSync_ddf848c7dd5cb195 = function (e, n) {
            f(e).deleteSync(f(n));
          }),
          (n.wbg.__wbg_deleteVertexArray_81346dd52e54eb57 = function (e, n) {
            f(e).deleteVertexArray(f(n));
          }),
          (n.wbg.__wbg_drawArraysInstanced_c375d32782ea8d30 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).drawArraysInstanced(n >>> 0, t, _, r);
          }),
          (n.wbg.__wbg_drawBuffers_2744e46ab7e02d91 = function (e, n) {
            f(e).drawBuffers(f(n));
          }),
          (n.wbg.__wbg_drawElementsInstanced_a416af0d12f00837 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).drawElementsInstanced(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_endQuery_7e240d815ced0387 = function (e, n) {
            f(e).endQuery(n >>> 0);
          }),
          (n.wbg.__wbg_fenceSync_0a54247555048537 = function (e, n, t) {
            const _ = f(e).fenceSync(n >>> 0, t >>> 0);
            return m(_) ? 0 : a(_);
          }),
          (n.wbg.__wbg_framebufferTextureLayer_1b5119ac136418d2 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).framebufferTextureLayer(n >>> 0, t >>> 0, f(_), r, b);
          }),
          (n.wbg.__wbg_getBufferSubData_5e2bbbbd18f18d52 = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).getBufferSubData(n >>> 0, t, f(_));
          }),
          (n.wbg.__wbg_getIndexedParameter_edda23e611d65abb = function () {
            return F(function (e, n, t) {
              return a(f(e).getIndexedParameter(n >>> 0, t >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getQueryParameter_ec854b270df79577 = function (e, n, t) {
            return a(f(e).getQueryParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getSyncParameter_cf9ca45e037f34f4 = function (e, n, t) {
            return a(f(e).getSyncParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getUniformBlockIndex_8eef3be68190327f = function (
            e,
            n,
            t,
            _,
          ) {
            return f(e).getUniformBlockIndex(f(n), x(t, _));
          }),
          (n.wbg.__wbg_invalidateFramebuffer_12eca43686968fe1 = function () {
            return F(function (e, n, t) {
              f(e).invalidateFramebuffer(n >>> 0, f(t));
            }, arguments);
          }),
          (n.wbg.__wbg_readBuffer_c6e1ba464c45ded1 = function (e, n) {
            f(e).readBuffer(n >>> 0);
          }),
          (n.wbg.__wbg_readPixels_f589cb77c7641fb2 = function () {
            return F(function (e, n, t, _, r, b, c, o) {
              f(e).readPixels(n, t, _, r, b >>> 0, c >>> 0, f(o));
            }, arguments);
          }),
          (n.wbg.__wbg_readPixels_74eff76a8a707954 = function () {
            return F(function (e, n, t, _, r, b, c, o) {
              f(e).readPixels(n, t, _, r, b >>> 0, c >>> 0, o);
            }, arguments);
          }),
          (n.wbg.__wbg_renderbufferStorageMultisample_1e0f794803ff8352 =
            function (e, n, t, _, r, b) {
              f(e).renderbufferStorageMultisample(n >>> 0, t, _ >>> 0, r, b);
            }),
          (n.wbg.__wbg_samplerParameterf_f58c4ac221503b11 = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).samplerParameterf(f(n), t >>> 0, _);
          }),
          (n.wbg.__wbg_samplerParameteri_97baec154acb369e = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).samplerParameteri(f(n), t >>> 0, _);
          }),
          (n.wbg.__wbg_texImage2D_75effcb59fe5da7e = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texImage2D(n >>> 0, t, _, r, b, c, o >>> 0, u >>> 0, f(a));
            }, arguments);
          }),
          (n.wbg.__wbg_texImage2D_06eb65b6cdf4b7ec = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i) {
              f(e).texImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                0 === a ? void 0 : O(a, i),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texImage3D_335fce191a5faae5 = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i) {
              f(e).texImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u >>> 0,
                a >>> 0,
                f(i),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texStorage2D_6143bf0d71e869ce = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).texStorage2D(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_texStorage3D_5d6b3c6bfa977000 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).texStorage3D(n >>> 0, t, _ >>> 0, r, b, c);
          }),
          (n.wbg.__wbg_texSubImage2D_be0166513e368886 = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                f(a),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_338d11db84a799ed = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(n >>> 0, t, _, r, b, c, o >>> 0, u >>> 0, a);
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_bdc1e6e8b1feae8f = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                f(a),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_edb828ed3708cfdd = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                f(a),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_fbb08177c318e3f2 = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                f(a),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_c571236e8e9908d5 = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i, g) {
              f(e).texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u,
                a >>> 0,
                i >>> 0,
                g,
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_d86e30d5f4ebc0e0 = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i, g) {
              f(e).texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u,
                a >>> 0,
                i >>> 0,
                f(g),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_b3526f28e3c2031e = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i, g) {
              f(e).texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u,
                a >>> 0,
                i >>> 0,
                f(g),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_7a0f4d63809a0f6e = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i, g) {
              f(e).texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u,
                a >>> 0,
                i >>> 0,
                f(g),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage3D_9ee350bf3d5e61ad = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i, g) {
              f(e).texSubImage3D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o,
                u,
                a >>> 0,
                i >>> 0,
                f(g),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_uniform1ui_010e62706e661170 = function (e, n, t) {
            f(e).uniform1ui(f(n), t >>> 0);
          }),
          (n.wbg.__wbg_uniform2fv_83048fbc79c7f362 = function (e, n, t, _) {
            f(e).uniform2fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform2iv_31ff5561a5c51159 = function (e, n, t, _) {
            f(e).uniform2iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniform2uiv_4b36f1c57b28c3c6 = function (e, n, t, _) {
            f(e).uniform2uiv(f(n), U(t, _));
          }),
          (n.wbg.__wbg_uniform3fv_0ddd3ca056ab3d1f = function (e, n, t, _) {
            f(e).uniform3fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform3iv_eb887b2a339dda97 = function (e, n, t, _) {
            f(e).uniform3iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniform3uiv_19cbb50d7afeb7d0 = function (e, n, t, _) {
            f(e).uniform3uiv(f(n), U(t, _));
          }),
          (n.wbg.__wbg_uniform4fv_cf977e0dd611bbdd = function (e, n, t, _) {
            f(e).uniform4fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform4iv_b3a606d0b1b87dc9 = function (e, n, t, _) {
            f(e).uniform4iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniform4uiv_cb256e285d564825 = function (e, n, t, _) {
            f(e).uniform4uiv(f(n), U(t, _));
          }),
          (n.wbg.__wbg_uniformBlockBinding_744b2ad6a5f2cace = function (
            e,
            n,
            t,
            _,
          ) {
            f(e).uniformBlockBinding(f(n), t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_uniformMatrix2fv_7e757aaedd0427cf = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix2fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix2x3fv_91be1a9373d7c5ce = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix2x3fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix2x4fv_b5ef5b5baced0e4f = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix2x4fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_5eec5885a8d5de8b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix3fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3x2fv_88709a0858bab333 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix3x2fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3x4fv_184c4f571cff1122 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix3x4fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_ae100fc474463355 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix4fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4x2fv_e931df9c7cb32d55 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix4x2fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4x3fv_f78c83b4908c3e27 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix4x3fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_vertexAttribDivisor_48f4c9ce15c07063 = function (
            e,
            n,
            t,
          ) {
            f(e).vertexAttribDivisor(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_vertexAttribIPointer_78250ec98da971a2 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).vertexAttribIPointer(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_activeTexture_067b93df6d1ed857 = function (e, n) {
            f(e).activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_396d529f1d7c9abc = function (e, n, t) {
            f(e).attachShader(f(n), f(t));
          }),
          (n.wbg.__wbg_bindAttribLocation_9e7dad25e51f58b1 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).bindAttribLocation(f(n), t >>> 0, x(_, r));
          }),
          (n.wbg.__wbg_bindBuffer_d6b05e0a99a752d4 = function (e, n, t) {
            f(e).bindBuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindFramebuffer_f5e959313c29a7c6 = function (e, n, t) {
            f(e).bindFramebuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindRenderbuffer_691cb14fc6248155 = function (e, n, t) {
            f(e).bindRenderbuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindTexture_840f7fcfd0298dc4 = function (e, n, t) {
            f(e).bindTexture(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_blendColor_4c1f00a2e4f1a80d = function (e, n, t, _, r) {
            f(e).blendColor(n, t, _, r);
          }),
          (n.wbg.__wbg_blendEquation_e7b91e8e062fa502 = function (e, n) {
            f(e).blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_272bfcd932055191 = function (
            e,
            n,
            t,
          ) {
            f(e).blendEquationSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_6a7b81c06098c023 = function (e, n, t) {
            f(e).blendFunc(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_f81dd232d266e735 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_clear_7a2a7ca897047e8d = function (e, n) {
            f(e).clear(n >>> 0);
          }),
          (n.wbg.__wbg_clearDepth_a65e67fdeb1f3ff9 = function (e, n) {
            f(e).clearDepth(n);
          }),
          (n.wbg.__wbg_clearStencil_1f24aec5432f38ba = function (e, n) {
            f(e).clearStencil(n);
          }),
          (n.wbg.__wbg_colorMask_7c2aafdec5441392 = function (e, n, t, _, r) {
            f(e).colorMask(0 !== n, 0 !== t, 0 !== _, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_77ef81728b1c03f6 = function (e, n) {
            f(e).compileShader(f(n));
          }),
          (n.wbg.__wbg_copyTexSubImage2D_d3b3d3b235c88d33 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
          ) {
            f(e).copyTexSubImage2D(n >>> 0, t, _, r, b, c, o, u);
          }),
          (n.wbg.__wbg_createBuffer_7b18852edffb3ab4 = function (e) {
            const n = f(e).createBuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createFramebuffer_a12847edac092647 = function (e) {
            const n = f(e).createFramebuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createProgram_73611dc7a72c4ee2 = function (e) {
            const n = f(e).createProgram();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_e7bd95fedc0bbcb5 = function (e) {
            const n = f(e).createRenderbuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createShader_f10ffabbfd8e2c8c = function (e, n) {
            const t = f(e).createShader(n >>> 0);
            return m(t) ? 0 : a(t);
          }),
          (n.wbg.__wbg_createTexture_2426b031baa26a82 = function (e) {
            const n = f(e).createTexture();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_cullFace_fbafcb7763a2d6aa = function (e, n) {
            f(e).cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_27b0fb5ed68afbe4 = function (e, n) {
            f(e).deleteBuffer(f(n));
          }),
          (n.wbg.__wbg_deleteFramebuffer_c0d511b2fc07620d = function (e, n) {
            f(e).deleteFramebuffer(f(n));
          }),
          (n.wbg.__wbg_deleteProgram_c3238b647d849334 = function (e, n) {
            f(e).deleteProgram(f(n));
          }),
          (n.wbg.__wbg_deleteRenderbuffer_325417b497c5ae27 = function (e, n) {
            f(e).deleteRenderbuffer(f(n));
          }),
          (n.wbg.__wbg_deleteShader_da06706168cf00dc = function (e, n) {
            f(e).deleteShader(f(n));
          }),
          (n.wbg.__wbg_deleteTexture_cdd844345a2559bb = function (e, n) {
            f(e).deleteTexture(f(n));
          }),
          (n.wbg.__wbg_depthFunc_2f1df7eb8339f5a3 = function (e, n) {
            f(e).depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_a301dd9951c6056c = function (e, n) {
            f(e).depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_85c249bf5c81856c = function (e, n, t) {
            f(e).depthRange(n, t);
          }),
          (n.wbg.__wbg_disable_8908871f2334e76b = function (e, n) {
            f(e).disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_79a5010f18eb84cb = function (
            e,
            n,
          ) {
            f(e).disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_7a8f5031b1fe80ff = function (e, n, t, _) {
            f(e).drawArrays(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_enable_541ed84c1e7d269d = function (e, n) {
            f(e).enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_06043f51b716ed9d = function (
            e,
            n,
          ) {
            f(e).enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_f7c592ad40667f89 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, f(r));
          }),
          (n.wbg.__wbg_framebufferTexture2D_5b524fe6135d5fe8 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, f(r), b);
          }),
          (n.wbg.__wbg_frontFace_54ccf43770ae1011 = function (e, n) {
            f(e).frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getError_deb0c909d3a7041a = function (e) {
            return f(e).getError();
          }),
          (n.wbg.__wbg_getExtension_095ef1e6c9d8d8ab = function () {
            return F(function (e, n, t) {
              const _ = f(e).getExtension(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_cfaed180705b9280 = function () {
            return F(function (e, n) {
              return a(f(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_fe796f3a9512a8e3 = function (e, n, t) {
            const _ = f(n).getProgramInfoLog(f(t));
            var r = m(_) ? 0 : l(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
          }),
          (n.wbg.__wbg_getProgramParameter_9df6cbbb1343b27d = function (
            e,
            n,
            t,
          ) {
            return a(f(e).getProgramParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getShaderInfoLog_a7ca51b89a4dafab = function (e, n, t) {
            const _ = f(n).getShaderInfoLog(f(t));
            var r = m(_) ? 0 : l(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
          }),
          (n.wbg.__wbg_getShaderParameter_806970126d526c29 = function (
            e,
            n,
            t,
          ) {
            return a(f(e).getShaderParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getSupportedExtensions_e1788ac835b7e81a = function (e) {
            const n = f(e).getSupportedExtensions();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_getUniformLocation_6a59ad54df3bba8e = function (
            e,
            n,
            t,
            _,
          ) {
            const r = f(e).getUniformLocation(f(n), x(t, _));
            return m(r) ? 0 : a(r);
          }),
          (n.wbg.__wbg_linkProgram_56a5d97f63b1f56d = function (e, n) {
            f(e).linkProgram(f(n));
          }),
          (n.wbg.__wbg_pixelStorei_3a600280eab03e3c = function (e, n, t) {
            f(e).pixelStorei(n >>> 0, t);
          }),
          (n.wbg.__wbg_polygonOffset_ebf1b1bd8db53e65 = function (e, n, t) {
            f(e).polygonOffset(n, t);
          }),
          (n.wbg.__wbg_renderbufferStorage_3c5e469d82dfe89b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).renderbufferStorage(n >>> 0, t >>> 0, _, r);
          }),
          (n.wbg.__wbg_scissor_2b172ca4e459dd16 = function (e, n, t, _, r) {
            f(e).scissor(n, t, _, r);
          }),
          (n.wbg.__wbg_shaderSource_b92b2b5c29126344 = function (e, n, t, _) {
            f(e).shaderSource(f(n), x(t, _));
          }),
          (n.wbg.__wbg_stencilFuncSeparate_25b5dd967d72b6e5 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).stencilFuncSeparate(n >>> 0, t >>> 0, _, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_702162181d88081f = function (e, n) {
            f(e).stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_1f803a440e789b81 = function (
            e,
            n,
            t,
          ) {
            f(e).stencilMaskSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_52b401966f916a0f = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_531d0268109950ba = function (e, n, t, _) {
            f(e).texParameteri(n >>> 0, t >>> 0, _);
          }),
          (n.wbg.__wbg_uniform1f_81b570bf6358ae6c = function (e, n, t) {
            f(e).uniform1f(f(n), t);
          }),
          (n.wbg.__wbg_uniform1i_ded3be13f5d8f11a = function (e, n, t) {
            f(e).uniform1i(f(n), t);
          }),
          (n.wbg.__wbg_uniform4f_bdbb7cf56fc94cbb = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).uniform4f(f(n), t, _, r, b);
          }),
          (n.wbg.__wbg_useProgram_001c6b9208b683d3 = function (e, n) {
            f(e).useProgram(f(n));
          }),
          (n.wbg.__wbg_vertexAttribPointer_b435a034ff758637 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).vertexAttribPointer(n >>> 0, t, _ >>> 0, 0 !== r, b, c);
          }),
          (n.wbg.__wbg_viewport_536c78dd69c44351 = function (e, n, t, _, r) {
            f(e).viewport(n, t, _, r);
          }),
          (n.wbg.__wbg_instanceof_Window_5012736c80a01584 = function (e) {
            let n;
            try {
              n = f(e) instanceof Window;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_document_8554450897a855b9 = function (e) {
            const n = f(e).document;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_location_af118da6c50d4c3f = function (e) {
            return a(f(e).location);
          }),
          (n.wbg.__wbg_navigator_6210380287bf8581 = function (e) {
            return a(f(e).navigator);
          }),
          (n.wbg.__wbg_devicePixelRatio_7ba8bc80d46340bd = function (e) {
            return f(e).devicePixelRatio;
          }),
          (n.wbg.__wbg_localStorage_90db5cb66e840248 = function () {
            return F(function (e) {
              const n = f(e).localStorage;
              return m(n) ? 0 : a(n);
            }, arguments);
          }),
          (n.wbg.__wbg_confirm_8c568ed39db7e399 = function () {
            return F(function (e, n, t) {
              return f(e).confirm(x(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_open_43b3c6577af2a808 = function () {
            return F(function (e, n, t, _, r) {
              const b = f(e).open(x(n, t), x(_, r));
              return m(b) ? 0 : a(b);
            }, arguments);
          }),
          (n.wbg.__wbg_cancelAnimationFrame_f80ecdad075d1d55 = function () {
            return F(function (e, n) {
              f(e).cancelAnimationFrame(n);
            }, arguments);
          }),
          (n.wbg.__wbg_requestAnimationFrame_b4b782250b9c2c88 = function () {
            return F(function (e, n) {
              return f(e).requestAnimationFrame(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_fetch_f3adf866d8944b41 = function (e, n) {
            return a(f(e).fetch(f(n)));
          }),
          (n.wbg.__wbg_setTimeout_2bb9dfe810e45e24 = function () {
            return F(function (e, n) {
              return f(e).setTimeout(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_body_b3bb488e8e54bf4b = function (e) {
            const n = f(e).body;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createElement_5921e9eb06b9ec89 = function () {
            return F(function (e, n, t) {
              return a(f(e).createElement(x(n, t)));
            }, arguments);
          }),
          (n.wbg.__wbg_createElementNS_78308ee7091c53f7 = function () {
            return F(function (e, n, t, _, r) {
              return a(
                f(e).createElementNS(0 === n ? void 0 : x(n, t), x(_, r)),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_querySelector_e21c39150aa72078 = function () {
            return F(function (e, n, t) {
              const _ = f(e).querySelector(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_querySelectorAll_52447cbab6df8bae = function () {
            return F(function (e, n, t) {
              return a(f(e).querySelectorAll(x(n, t)));
            }, arguments);
          }),
          (n.wbg.__wbg_setid_b43ed506c9b1e9c5 = function (e, n, t) {
            f(e).id = x(n, t);
          }),
          (n.wbg.__wbg_clientWidth_e73e836a6257fbe5 = function (e) {
            return f(e).clientWidth;
          }),
          (n.wbg.__wbg_clientHeight_9325ebe2318ce8af = function (e) {
            return f(e).clientHeight;
          }),
          (n.wbg.__wbg_setinnerHTML_ea7e3c6a3c4790c6 = function (e, n, t) {
            f(e).innerHTML = x(n, t);
          }),
          (n.wbg.__wbg_querySelector_99e02a226c303e87 = function () {
            return F(function (e, n, t) {
              const _ = f(e).querySelector(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_releasePointerCapture_8a46ed35042fc5e8 = function () {
            return F(function (e, n) {
              f(e).releasePointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_setAttribute_d5540a19be09f8dc = function () {
            return F(function (e, n, t, _, r) {
              f(e).setAttribute(x(n, t), x(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_setAttributeNS_23da7f4fcc5db2b5 = function () {
            return F(function (e, n, t, _, r, b, c) {
              f(e).setAttributeNS(0 === n ? void 0 : x(n, t), x(_, r), x(b, c));
            }, arguments);
          }),
          (n.wbg.__wbg_setPointerCapture_16fb4f004fe3aaae = function () {
            return F(function (e, n) {
              f(e).setPointerCapture(n);
            }, arguments);
          }),
          (n.wbg.__wbg_remove_5b68b70c39041e2a = function (e) {
            f(e).remove();
          }),
          (n.wbg.__wbg_setTransform_deb5f68e84088c0b = function (e, n) {
            f(e).setTransform(f(n));
          }),
          (n.wbg.__wbg_instanceof_HtmlCanvasElement_1a96a01603ec2d8b =
            function (e) {
              let n;
              try {
                n = f(e) instanceof HTMLCanvasElement;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_width_53a5bd0268e99485 = function (e) {
            return f(e).width;
          }),
          (n.wbg.__wbg_setwidth_e371a8d6b16ebe84 = function (e, n) {
            f(e).width = n >>> 0;
          }),
          (n.wbg.__wbg_height_6fb32e51e54037ae = function (e) {
            return f(e).height;
          }),
          (n.wbg.__wbg_setheight_ba99ad2df4295e89 = function (e, n) {
            f(e).height = n >>> 0;
          }),
          (n.wbg.__wbg_getContext_69ec873410cbba3c = function () {
            return F(function (e, n, t) {
              const _ = f(e).getContext(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getContext_70d493702d2b8f3e = function () {
            return F(function (e, n, t, _) {
              const r = f(e).getContext(x(n, t), f(_));
              return m(r) ? 0 : a(r);
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlDocument_2c1561dcd48decbc = function (e) {
            let n;
            try {
              n = f(e) instanceof HTMLDocument;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_execCommand_3997a230620e22d8 = function () {
            return F(function (e, n, t) {
              return f(e).execCommand(x(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_data_5c47a6985fefc490 = function (e) {
            return a(f(e).data);
          }),
          (n.wbg.__wbg_get_fe289e3950b3978a = function (e, n) {
            const t = f(e)[n >>> 0];
            return m(t) ? 0 : a(t);
          }),
          (n.wbg.__wbg_bindVertexArrayOES_37868a5a4265ea0a = function (e, n) {
            f(e).bindVertexArrayOES(f(n));
          }),
          (n.wbg.__wbg_createVertexArrayOES_84334a02da216381 = function (e) {
            const n = f(e).createVertexArrayOES();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_deleteVertexArrayOES_e22f7a6baedc5300 = function (e, n) {
            f(e).deleteVertexArrayOES(f(n));
          }),
          (n.wbg.__wbg_pointerId_37ae0c4682f85248 = function (e) {
            return f(e).pointerId;
          }),
          (n.wbg.__wbg_setonended_7583a658c572b663 = function (e, n) {
            f(e).onended = f(n);
          }),
          (n.wbg.__wbg_clipboard_0d7b5c390c14b0e6 = function (e) {
            return a(f(e).clipboard);
          }),
          (n.wbg.__wbg_platform_509d898d9dce4c23 = function () {
            return F(function (e, n) {
              const t = l(
                  f(n).platform,
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc,
                ),
                _ = i;
              h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_language_edd19d04246a8298 = function (e, n) {
            const t = f(n).language;
            var _ = m(t) ? 0 : l(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
              r = i;
            h().setInt32(e + 4, r, !0), h().setInt32(e + 0, _, !0);
          }),
          (n.wbg.__wbg_close_cef2400b120c9c73 = function () {
            return F(function (e) {
              f(e).close();
            }, arguments);
          }),
          (n.wbg.__wbg_enqueue_6f3d433b5e457aea = function () {
            return F(function (e, n) {
              f(e).enqueue(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_deltaY_606f12aa66daba69 = function (e) {
            return f(e).deltaY;
          }),
          (n.wbg.__wbg_deltaMode_d6b849e45efd0f5e = function (e) {
            return f(e).deltaMode;
          }),
          (n.wbg.__wbg_settype_b6ab7b74bd1908a1 = function (e, n, t) {
            f(e).type = x(n, t);
          }),
          (n.wbg.__wbg_length_f2469772b8ec9ea3 = function (e) {
            return f(e).length;
          }),
          (n.wbg.__wbg_get_6d8ff52d2078d871 = function (e, n) {
            const t = f(e)[n >>> 0];
            return m(t) ? 0 : a(t);
          }),
          (n.wbg.__wbg_instanceof_HtmlButtonElement_998267b26d794a1e =
            function (e) {
              let n;
              try {
                n = f(e) instanceof HTMLButtonElement;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_instanceof_HtmlTextAreaElement_75bfdd55ca1a4a97 =
            function (e) {
              let n;
              try {
                n = f(e) instanceof HTMLTextAreaElement;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_setvalue_5b6537234b7d08ee = function (e, n, t) {
            f(e).value = x(n, t);
          }),
          (n.wbg.__wbg_select_dc4e5bddba91a3f3 = function (e) {
            f(e).select();
          }),
          (n.wbg.__wbg_instanceof_Node_807587297afc161b = function (e) {
            let n;
            try {
              n = f(e) instanceof Node;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_baseURI_67b3d8d24bf864ed = function () {
            return F(function (e, n) {
              const t = f(n).baseURI;
              var _ = m(t)
                  ? 0
                  : l(t, b.__wbindgen_malloc, b.__wbindgen_realloc),
                r = i;
              h().setInt32(e + 4, r, !0), h().setInt32(e + 0, _, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_parentElement_fbf8d048e797326d = function (e) {
            const n = f(e).parentElement;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_appendChild_ac45d1abddf1b89b = function () {
            return F(function (e, n) {
              return a(f(e).appendChild(f(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_contains_4f87c5405416b4fd = function (e, n) {
            return f(e).contains(f(n));
          }),
          (n.wbg.__wbg_getRootNode_4d82eefe83459faf = function (e) {
            return a(f(e).getRootNode());
          }),
          (n.wbg.__wbg_removeChild_139b30d19f579e41 = function () {
            return F(function (e, n) {
              return a(f(e).removeChild(f(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_headers_7d46f181de2aa1dd = function (e) {
            return a(f(e).headers);
          }),
          (n.wbg.__wbg_newwithstrandinit_a31c69e4cc337183 = function () {
            return F(function (e, n, t) {
              return a(new Request(x(e, n), f(t)));
            }, arguments);
          }),
          (n.wbg.__wbg_get_6c1b9a97747e7f38 = function () {
            return F(function (e, n, t, _) {
              const r = f(n)[x(t, _)];
              var c = m(r)
                  ? 0
                  : l(r, b.__wbindgen_malloc, b.__wbindgen_realloc),
                o = i;
              h().setInt32(e + 4, o, !0), h().setInt32(e + 0, c, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_set_e94f65b9d83f54b0 = function () {
            return F(function (e, n, t, _, r) {
              f(e)[x(n, t)] = x(_, r);
            }, arguments);
          }),
          (n.wbg.__wbg_delete_0441826dbfb45509 = function () {
            return F(function (e, n, t) {
              delete f(e)[x(n, t)];
            }, arguments);
          }),
          (n.wbg.__wbg_length_4cbb1ceeb782b612 = function (e) {
            return f(e).length;
          }),
          (n.wbg.__wbg_result_3869032b57f861ac = function () {
            return F(function (e) {
              return a(f(e).result);
            }, arguments);
          }),
          (n.wbg.__wbg_setonload_71d51f79887a9257 = function (e, n) {
            f(e).onload = f(n);
          }),
          (n.wbg.__wbg_new_8515b7401632bd44 = function () {
            return F(function () {
              return a(new FileReader());
            }, arguments);
          }),
          (n.wbg.__wbg_readAsArrayBuffer_6475a86a924a8856 = function () {
            return F(function (e, n) {
              f(e).readAsArrayBuffer(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_width_151910f38d746773 = function (e) {
            return f(e).width;
          }),
          (n.wbg.__wbg_height_c1b4ecc1cfed30aa = function (e) {
            return f(e).height;
          }),
          (n.wbg.__wbg_navigator_db73b5b11a0c5c93 = function (e) {
            return a(f(e).navigator);
          }),
          (n.wbg.__wbg_readText_750b714826ea7840 = function (e) {
            return a(f(e).readText());
          }),
          (n.wbg.__wbg_addEventListener_e167f012cbedfa4e = function () {
            return F(function (e, n, t, _) {
              f(e).addEventListener(x(n, t), f(_));
            }, arguments);
          }),
          (n.wbg.__wbg_addEventListener_14b036ff7cb8747c = function () {
            return F(function (e, n, t, _, r) {
              f(e).addEventListener(x(n, t), f(_), f(r));
            }, arguments);
          }),
          (n.wbg.__wbg_dispatchEvent_190760297f28fb3d = function () {
            return F(function (e, n) {
              return f(e).dispatchEvent(f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_b6cef5ad085bea8f = function () {
            return F(function (e, n, t, _) {
              f(e).removeEventListener(x(n, t), f(_));
            }, arguments);
          }),
          (n.wbg.__wbg_removeEventListener_7878b86efe1ab901 = function () {
            return F(function (e, n, t, _, r) {
              f(e).removeEventListener(x(n, t), f(_), 0 !== r);
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlFormElement_f1c49500e9c5fd42 = function (
            e,
          ) {
            let n;
            try {
              n = f(e) instanceof HTMLFormElement;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_setaction_9a5644be61a1e23f = function (e, n, t) {
            f(e).action = x(n, t);
          }),
          (n.wbg.__wbg_setmethod_1fac19103be2d126 = function (e, n, t) {
            f(e).method = x(n, t);
          }),
          (n.wbg.__wbg_settarget_bd50c45038092dea = function (e, n, t) {
            f(e).target = x(n, t);
          }),
          (n.wbg.__wbg_submit_52053eceadf2f514 = function () {
            return F(function (e) {
              f(e).submit();
            }, arguments);
          }),
          (n.wbg.__wbg_width_a7c8cb533b26f0bf = function (e) {
            return f(e).width;
          }),
          (n.wbg.__wbg_setwidth_c20f1f8fcd5d93b4 = function (e, n) {
            f(e).width = n >>> 0;
          }),
          (n.wbg.__wbg_height_affa017f56a8fb96 = function (e) {
            return f(e).height;
          }),
          (n.wbg.__wbg_setheight_a5e39c9d97429299 = function (e, n) {
            f(e).height = n >>> 0;
          }),
          (n.wbg.__wbg_getContext_bd2ece8a59fd4732 = function () {
            return F(function (e, n, t) {
              const _ = f(e).getContext(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getContext_76f1b45238db4411 = function () {
            return F(function (e, n, t, _) {
              const r = f(e).getContext(x(n, t), f(_));
              return m(r) ? 0 : a(r);
            }, arguments);
          }),
          (n.wbg.__wbg_view_2a901bda0727aeb3 = function (e) {
            const n = f(e).view;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_respond_a799bab31a44f2d7 = function () {
            return F(function (e, n) {
              f(e).respond(n >>> 0);
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_ShadowRoot_72d8e783f8e0093c = function (e) {
            let n;
            try {
              n = f(e) instanceof ShadowRoot;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_host_fdfe1258b06fe937 = function (e) {
            return a(f(e).host);
          }),
          (n.wbg.__wbg_setcapture_4818ebe9ef88b2f6 = function (e, n) {
            f(e).capture = 0 !== n;
          }),
          (n.wbg.__wbg_setonce_06b35a72a3fafc15 = function (e, n) {
            f(e).once = 0 !== n;
          }),
          (n.wbg.__wbg_setpassive_70ce6704aec553f6 = function (e, n) {
            f(e).passive = 0 !== n;
          }),
          (n.wbg.__wbg_setbody_734cb3d7ee8e6e96 = function (e, n) {
            f(e).body = f(n);
          }),
          (n.wbg.__wbg_setcredentials_2b67800db3f7b621 = function (e, n) {
            f(e).credentials = ["omit", "same-origin", "include"][n];
          }),
          (n.wbg.__wbg_setmethod_dc68a742c2db5c6a = function (e, n, t) {
            f(e).method = x(n, t);
          }),
          (n.wbg.__wbg_addColorStop_2d996a72d8108847 = function () {
            return F(function (e, n, t, _) {
              f(e).addColorStop(n, x(t, _));
            }, arguments);
          }),
          (n.wbg.__wbg_inverse_7d680aaab9a88fbb = function (e) {
            return a(f(e).inverse());
          }),
          (n.wbg.__wbg_currentTarget_65f70ab932dfc57e = function (e) {
            const n = f(e).currentTarget;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_preventDefault_c55d86c27b2dfa6e = function (e) {
            f(e).preventDefault();
          }),
          (n.wbg.__wbg_relatedTarget_aec4e56dd3af2726 = function (e) {
            const n = f(e).relatedTarget;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_offsetX_e7047852d4b4b482 = function (e) {
            return f(e).offsetX;
          }),
          (n.wbg.__wbg_offsetY_76fc66e0e449645e = function (e) {
            return f(e).offsetY;
          }),
          (n.wbg.__wbg_button_460cdec9f2512a91 = function (e) {
            return f(e).button;
          }),
          (n.wbg.__wbg_byobRequest_b32c77640da946ac = function (e) {
            const n = f(e).byobRequest;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_close_aca7442e6619206b = function () {
            return F(function (e) {
              f(e).close();
            }, arguments);
          }),
          (n.wbg.__wbg_setcode_031a166e87b02684 = function (e, n) {
            f(e).code = n;
          }),
          (n.wbg.__wbg_setreason_e5db4c3ffeb5419e = function (e, n, t) {
            f(e).reason = x(n, t);
          }),
          (n.wbg.__wbg_drawArraysInstancedANGLE_7c668fc363789760 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).drawArraysInstancedANGLE(n >>> 0, t, _, r);
          }),
          (n.wbg.__wbg_drawElementsInstancedANGLE_7d0baa058556f76c = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).drawElementsInstancedANGLE(n >>> 0, t, _ >>> 0, r, b);
          }),
          (n.wbg.__wbg_vertexAttribDivisorANGLE_ff0ade84fc10084b = function (
            e,
            n,
            t,
          ) {
            f(e).vertexAttribDivisorANGLE(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_wasClean_e83dfad67198c1c4 = function (e) {
            return f(e).wasClean;
          }),
          (n.wbg.__wbg_code_eae09136895f8ffa = function (e) {
            return f(e).code;
          }),
          (n.wbg.__wbg_reason_8a32e6ed703d6382 = function (e, n) {
            const t = l(f(n).reason, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_newwitheventinitdict_f3607d9dd19c79bd = function () {
            return F(function (e, n, t) {
              return a(new CloseEvent(x(e, n), f(t)));
            }, arguments);
          }),
          (n.wbg.__wbg_setProperty_ff389e5a7fb9910e = function () {
            return F(function (e, n, t, _, r) {
              f(e).setProperty(x(n, t), x(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_getData_b768ea3ff59e2a13 = function () {
            return F(function (e, n, t, _) {
              const r = l(
                  f(n).getData(x(t, _)),
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc,
                ),
                c = i;
              h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_get_5069e42d7c221f57 = function () {
            return F(function (e, n, t, _) {
              const r = f(n).get(x(t, _));
              var c = m(r)
                  ? 0
                  : l(r, b.__wbindgen_malloc, b.__wbindgen_realloc),
                o = i;
              h().setInt32(e + 4, o, !0), h().setInt32(e + 0, c, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_set_b3c7c6d2e5e783d6 = function () {
            return F(function (e, n, t, _, r) {
              f(e).set(x(n, t), x(_, r));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlInputElement_88bf515ab1d9511d = function (
            e,
          ) {
            let n;
            try {
              n = f(e) instanceof HTMLInputElement;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_setaccept_ecbe2b14b78fc505 = function (e, n, t) {
            f(e).accept = x(n, t);
          }),
          (n.wbg.__wbg_files_b94d8f21e2b53924 = function (e) {
            const n = f(e).files;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_setmultiple_d67da734cbada979 = function (e, n) {
            f(e).multiple = 0 !== n;
          }),
          (n.wbg.__wbg_setname_b419abf12a116d4a = function (e, n, t) {
            f(e).name = x(n, t);
          }),
          (n.wbg.__wbg_settype_c348825948b36c71 = function (e, n, t) {
            f(e).type = x(n, t);
          }),
          (n.wbg.__wbg_setvalue_688819688274bec0 = function (e, n, t) {
            f(e).value = x(n, t);
          }),
          (n.wbg.__wbg_connect_9ef7bb6259c61b23 = function () {
            return F(function (e, n) {
              return a(f(e).connect(f(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_newwithu8arraysequence_c884fe8ac90e9ab6 = function () {
            return F(function (e) {
              return a(new Blob(f(e)));
            }, arguments);
          }),
          (n.wbg.__wbg_newwithbuffersourcesequenceandoptions_9355c5690c2713fc =
            function () {
              return F(function (e, n) {
                return a(new Blob(f(e), f(n)));
              }, arguments);
            }),
          (n.wbg.__wbg_newwithu8arraysequenceandoptions_c8bc456a23f02fca =
            function () {
              return F(function (e, n) {
                return a(new Blob(f(e), f(n)));
              }, arguments);
            }),
          (n.wbg.__wbg_instanceof_HtmlAnchorElement_7a88f0b97085fa30 =
            function (e) {
              let n;
              try {
                n = f(e) instanceof HTMLAnchorElement;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_setdownload_c4a56cf2790f498a = function (e, n, t) {
            f(e).download = x(n, t);
          }),
          (n.wbg.__wbg_sethref_e76addd808540f69 = function (e, n, t) {
            f(e).href = x(n, t);
          }),
          (n.wbg.__wbg_width_1c8a2180e4e8ed05 = function (e) {
            return f(e).width;
          }),
          (n.wbg.__wbg_height_25d41922e13ad767 = function (e) {
            return f(e).height;
          }),
          (n.wbg.__wbg_newwithsw_a3a5a2891706fd82 = function () {
            return F(function (e, n) {
              return a(new ImageData(e >>> 0, n >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_newwithu8clampedarray_6b29095634b7e758 = function () {
            return F(function (e, n, t) {
              return a(new ImageData(H(e, n), t >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_read_e48a676fb81ea800 = function (e) {
            return a(f(e).read());
          }),
          (n.wbg.__wbg_releaseLock_1d2d93e9dc8d76e2 = function (e) {
            f(e).releaseLock();
          }),
          (n.wbg.__wbg_instanceof_Response_e91b7eb7c611a9ae = function (e) {
            let n;
            try {
              n = f(e) instanceof Response;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_url_1bf85c8abeb8c92d = function (e, n) {
            const t = l(f(n).url, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_redirected_1cc4f189c19c7627 = function (e) {
            return f(e).redirected;
          }),
          (n.wbg.__wbg_status_ae8de515694c5c7c = function (e) {
            return f(e).status;
          }),
          (n.wbg.__wbg_ok_227b0624f5926a87 = function (e) {
            return f(e).ok;
          }),
          (n.wbg.__wbg_statusText_2c9a12f90531c8ed = function (e, n) {
            const t = l(
                f(n).statusText,
                b.__wbindgen_malloc,
                b.__wbindgen_realloc,
              ),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_headers_5e283e8345689121 = function (e) {
            return a(f(e).headers);
          }),
          (n.wbg.__wbg_body_40b0ed27714d00ce = function (e) {
            const n = f(e).body;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_arrayBuffer_a5fbad63cc7e663b = function () {
            return F(function (e) {
              return a(f(e).arrayBuffer());
            }, arguments);
          }),
          (n.wbg.__wbg_createObjectURL_ca544150f40fb1bf = function () {
            return F(function (e, n) {
              const t = l(
                  URL.createObjectURL(f(n)),
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc,
                ),
                _ = i;
              h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_revokeObjectURL_b9b370890a354a9f = function () {
            return F(function (e, n) {
              URL.revokeObjectURL(x(e, n));
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_HtmlElement_ee6cb55e6b90ae79 = function (e) {
            let n;
            try {
              n = f(e) instanceof HTMLElement;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_setinnerText_69255282a5d7ed93 = function (e, n, t) {
            f(e).innerText = x(n, t);
          }),
          (n.wbg.__wbg_settabIndex_f6fb98fef6cbb39b = function (e, n) {
            f(e).tabIndex = n;
          }),
          (n.wbg.__wbg_style_e06c9e03355741e9 = function (e) {
            return a(f(e).style);
          }),
          (n.wbg.__wbg_setonclick_cdd25d3e6e7636a0 = function (e, n) {
            f(e).onclick = f(n);
          }),
          (n.wbg.__wbg_click_025eb185eb16f006 = function (e) {
            f(e).click();
          }),
          (n.wbg.__wbg_focus_06621101cc79f5d8 = function () {
            return F(function (e) {
              f(e).focus();
            }, arguments);
          }),
          (n.wbg.__wbg_drawBuffersWEBGL_ff53a7c3360f5716 = function (e, n) {
            f(e).drawBuffersWEBGL(f(n));
          }),
          (n.wbg.__wbg_destination_02fda856cc855541 = function (e) {
            return a(f(e).destination);
          }),
          (n.wbg.__wbg_sampleRate_b240b05f20b112dd = function (e) {
            return f(e).sampleRate;
          }),
          (n.wbg.__wbg_currentTime_98c819a9b4fbc2dc = function (e) {
            return f(e).currentTime;
          }),
          (n.wbg.__wbg_new_4e9fd42b8fa0b088 = function () {
            return F(function () {
              return a(new r());
            }, arguments);
          }),
          (n.wbg.__wbg_close_b537dff1eedffabf = function () {
            return F(function (e) {
              return a(f(e).close());
            }, arguments);
          }),
          (n.wbg.__wbg_suspend_369392550c66792c = function () {
            return F(function (e) {
              return a(f(e).suspend());
            }, arguments);
          }),
          (n.wbg.__wbg_createBuffer_00504cdbe0ad0736 = function () {
            return F(function (e, n, t, _) {
              return a(f(e).createBuffer(n >>> 0, t >>> 0, _));
            }, arguments);
          }),
          (n.wbg.__wbg_createBufferSource_52fc5a451c2c7012 = function () {
            return F(function (e) {
              return a(f(e).createBufferSource());
            }, arguments);
          }),
          (n.wbg.__wbg_resume_4310b96dd2907dd3 = function () {
            return F(function (e) {
              return a(f(e).resume());
            }, arguments);
          }),
          (n.wbg.__wbg_instanceof_CanvasRenderingContext2d_a0c4f0da6392b8ca =
            function (e) {
              let n;
              try {
                n = f(e) instanceof CanvasRenderingContext2D;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_setglobalAlpha_9634eb9fde01bb01 = function (e, n) {
            f(e).globalAlpha = n;
          }),
          (n.wbg.__wbg_setglobalCompositeOperation_eee5aa940370a2f6 =
            function () {
              return F(function (e, n, t) {
                f(e).globalCompositeOperation = x(n, t);
              }, arguments);
            }),
          (n.wbg.__wbg_setstrokeStyle_8c584cd9fa6fe055 = function (e, n) {
            f(e).strokeStyle = f(n);
          }),
          (n.wbg.__wbg_setfillStyle_98060f7b257936ba = function (e, n) {
            f(e).fillStyle = f(n);
          }),
          (n.wbg.__wbg_setfilter_eda098f5d643bafa = function (e, n, t) {
            f(e).filter = x(n, t);
          }),
          (n.wbg.__wbg_setimageSmoothingEnabled_6e90dfbb519b2846 = function (
            e,
            n,
          ) {
            f(e).imageSmoothingEnabled = 0 !== n;
          }),
          (n.wbg.__wbg_setlineWidth_e98dce97a4e03908 = function (e, n) {
            f(e).lineWidth = n;
          }),
          (n.wbg.__wbg_setlineCap_d6edbcb272bc8855 = function (e, n, t) {
            f(e).lineCap = x(n, t);
          }),
          (n.wbg.__wbg_setlineJoin_de080258d2a93e8a = function (e, n, t) {
            f(e).lineJoin = x(n, t);
          }),
          (n.wbg.__wbg_setmiterLimit_59340aab1dc6e216 = function (e, n) {
            f(e).miterLimit = n;
          }),
          (n.wbg.__wbg_drawImage_d3f65383ba2fdc93 = function () {
            return F(function (e, n, t, _) {
              f(e).drawImage(f(n), t, _);
            }, arguments);
          }),
          (n.wbg.__wbg_clip_6d47ad230796b2c3 = function (e, n, t) {
            f(e).clip(f(n), ["nonzero", "evenodd"][t]);
          }),
          (n.wbg.__wbg_fill_e8de0f1e1734d02d = function (e, n, t) {
            f(e).fill(f(n), ["nonzero", "evenodd"][t]);
          }),
          (n.wbg.__wbg_stroke_bcc9b4ad29bcf369 = function (e, n) {
            f(e).stroke(f(n));
          }),
          (n.wbg.__wbg_createLinearGradient_e48d60b67efe0497 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            return a(f(e).createLinearGradient(n, t, _, r));
          }),
          (n.wbg.__wbg_createPattern_ed2ed354aec5dbc3 = function () {
            return F(function (e, n, t, _) {
              const r = f(e).createPattern(f(n), x(t, _));
              return m(r) ? 0 : a(r);
            }, arguments);
          }),
          (n.wbg.__wbg_createRadialGradient_640ab3e561f6d43c = function () {
            return F(function (e, n, t, _, r, b, c) {
              return a(f(e).createRadialGradient(n, t, _, r, b, c));
            }, arguments);
          }),
          (n.wbg.__wbg_putImageData_d8c261486f99879a = function () {
            return F(function (e, n, t, _) {
              f(e).putImageData(f(n), t, _);
            }, arguments);
          }),
          (n.wbg.__wbg_clearRect_384c24b287b30369 = function (e, n, t, _, r) {
            f(e).clearRect(n, t, _, r);
          }),
          (n.wbg.__wbg_fillRect_a5a5da573f0412b5 = function (e, n, t, _, r) {
            f(e).fillRect(n, t, _, r);
          }),
          (n.wbg.__wbg_restore_f1e60b7a6baea463 = function (e) {
            f(e).restore();
          }),
          (n.wbg.__wbg_save_3cc576b49ad4c50d = function (e) {
            f(e).save();
          }),
          (n.wbg.__wbg_resetTransform_177f9b65b3113d46 = function () {
            return F(function (e) {
              f(e).resetTransform();
            }, arguments);
          }),
          (n.wbg.__wbg_setTransform_559731a63dcc2473 = function () {
            return F(function (e, n, t, _, r, b, c) {
              f(e).setTransform(n, t, _, r, b, c);
            }, arguments);
          }),
          (n.wbg.__wbg_transform_ac547cdf74e7395b = function () {
            return F(function (e, n, t, _, r, b, c) {
              f(e).transform(n, t, _, r, b, c);
            }, arguments);
          }),
          (n.wbg.__wbg_clipboardData_93c130a72996456a = function (e) {
            const n = f(e).clipboardData;
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_name_ed3cda975cce080d = function (e, n) {
            const t = l(f(n).name, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_lastModified_74d26354812e6299 = function (e) {
            return f(e).lastModified;
          }),
          (n.wbg.__wbg_framebufferTextureMultiviewOVR_32295d56731dd362 =
            function (e, n, t, _, r, b, c) {
              f(e).framebufferTextureMultiviewOVR(
                n >>> 0,
                t >>> 0,
                f(_),
                r,
                b,
                c,
              );
            }),
          (n.wbg.__wbg_new_ffdf4b2456b566a7 = function () {
            return F(function () {
              return a(new Path2D());
            }, arguments);
          }),
          (n.wbg.__wbg_addPath_4b3fe10d63db4a83 = function (e, n, t) {
            f(e).addPath(f(n), f(t));
          }),
          (n.wbg.__wbg_bezierCurveTo_7349c362eb3d9306 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).bezierCurveTo(n, t, _, r, b, c);
          }),
          (n.wbg.__wbg_closePath_fc2191c3e1481f32 = function (e) {
            f(e).closePath();
          }),
          (n.wbg.__wbg_lineTo_8b505bac883ff282 = function (e, n, t) {
            f(e).lineTo(n, t);
          }),
          (n.wbg.__wbg_moveTo_e904a299e181c861 = function (e, n, t) {
            f(e).moveTo(n, t);
          }),
          (n.wbg.__wbg_quadraticCurveTo_3d6ffffd9dc4ef11 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).quadraticCurveTo(n, t, _, r);
          }),
          (n.wbg.__wbg_rect_6871ee44184cde3a = function (e, n, t, _, r) {
            f(e).rect(n, t, _, r);
          }),
          (n.wbg.__wbg_instanceof_WebGlRenderingContext_dbd3a2aad974aa98 =
            function (e) {
              let n;
              try {
                n = f(e) instanceof WebGLRenderingContext;
              } catch (e) {
                n = !1;
              }
              return n;
            }),
          (n.wbg.__wbg_drawingBufferWidth_c6264c6382296541 = function (e) {
            return f(e).drawingBufferWidth;
          }),
          (n.wbg.__wbg_drawingBufferHeight_90884350967c7a3d = function (e) {
            return f(e).drawingBufferHeight;
          }),
          (n.wbg.__wbg_bufferData_fc33089cf05a6c5a = function (e, n, t, _) {
            f(e).bufferData(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_0db2a74470353a96 = function (e, n, t, _) {
            f(e).bufferData(n >>> 0, f(t), _ >>> 0);
          }),
          (n.wbg.__wbg_bufferData_58361443512ce4c6 = function (e, n, t, _, r) {
            f(e).bufferData(n >>> 0, O(t, _), r >>> 0);
          }),
          (n.wbg.__wbg_bufferSubData_944883045753ee61 = function (e, n, t, _) {
            f(e).bufferSubData(n >>> 0, t, f(_));
          }),
          (n.wbg.__wbg_compressedTexSubImage2D_678be4671393a94b = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
          ) {
            f(e).compressedTexSubImage2D(n >>> 0, t, _, r, b, c, o >>> 0, f(u));
          }),
          (n.wbg.__wbg_readPixels_0c5ad23c72dbe1b8 = function () {
            return F(function (e, n, t, _, r, b, c, o) {
              f(e).readPixels(n, t, _, r, b >>> 0, c >>> 0, f(o));
            }, arguments);
          }),
          (n.wbg.__wbg_texImage2D_d704e7eee22d1e6b = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texImage2D(n >>> 0, t, _, r, b, c, o >>> 0, u >>> 0, f(a));
            }, arguments);
          }),
          (n.wbg.__wbg_texImage2D_393ba0d690372bab = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a, i) {
              f(e).texImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                0 === a ? void 0 : O(a, i),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_texSubImage2D_bed4633ee03b384d = function () {
            return F(function (e, n, t, _, r, b, c, o, u, a) {
              f(e).texSubImage2D(
                n >>> 0,
                t,
                _,
                r,
                b,
                c,
                o >>> 0,
                u >>> 0,
                f(a),
              );
            }, arguments);
          }),
          (n.wbg.__wbg_uniform1fv_218fa6dd6940465c = function (e, n, t, _) {
            f(e).uniform1fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform2fv_b73144e507d90a92 = function (e, n, t, _) {
            f(e).uniform2fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform2iv_27f3fc3aefa41fa7 = function (e, n, t, _) {
            f(e).uniform2iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniform3fv_5df1d945c0bbfe20 = function (e, n, t, _) {
            f(e).uniform3fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform3iv_03be54fcc4468fc4 = function (e, n, t, _) {
            f(e).uniform3iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniform4fv_d87e4ea9ef6cf6de = function (e, n, t, _) {
            f(e).uniform4fv(f(n), V(t, _));
          }),
          (n.wbg.__wbg_uniform4iv_965df9fa4c8ab47e = function (e, n, t, _) {
            f(e).uniform4iv(f(n), q(t, _));
          }),
          (n.wbg.__wbg_uniformMatrix2fv_8646addaa18ba00b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix2fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix3fv_917f07d03e8b1db5 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix3fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_uniformMatrix4fv_46c1f9033bbb1a5e = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).uniformMatrix4fv(f(n), 0 !== t, V(_, r));
          }),
          (n.wbg.__wbg_activeTexture_b967ed47a8083daa = function (e, n) {
            f(e).activeTexture(n >>> 0);
          }),
          (n.wbg.__wbg_attachShader_2b5810fc1d23ebe7 = function (e, n, t) {
            f(e).attachShader(f(n), f(t));
          }),
          (n.wbg.__wbg_bindAttribLocation_0018ec2a523f139f = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).bindAttribLocation(f(n), t >>> 0, x(_, r));
          }),
          (n.wbg.__wbg_bindBuffer_1f581c747176e7d7 = function (e, n, t) {
            f(e).bindBuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindFramebuffer_8cba9964befd2a6d = function (e, n, t) {
            f(e).bindFramebuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindRenderbuffer_297ae310683dc32b = function (e, n, t) {
            f(e).bindRenderbuffer(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_bindTexture_bffa89324927e23a = function (e, n, t) {
            f(e).bindTexture(n >>> 0, f(t));
          }),
          (n.wbg.__wbg_blendColor_c876d94aa784bef7 = function (e, n, t, _, r) {
            f(e).blendColor(n, t, _, r);
          }),
          (n.wbg.__wbg_blendEquation_4f3b8eb0b07cab21 = function (e, n) {
            f(e).blendEquation(n >>> 0);
          }),
          (n.wbg.__wbg_blendEquationSeparate_95241ffd0f6ab09e = function (
            e,
            n,
            t,
          ) {
            f(e).blendEquationSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFunc_f31d0f0d227137e0 = function (e, n, t) {
            f(e).blendFunc(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_blendFuncSeparate_2b607032f14b9381 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).blendFuncSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_clear_780c4e5384fe3fc6 = function (e, n) {
            f(e).clear(n >>> 0);
          }),
          (n.wbg.__wbg_clearColor_ac713fa6931cef3c = function (e, n, t, _, r) {
            f(e).clearColor(n, t, _, r);
          }),
          (n.wbg.__wbg_clearDepth_92f7c7d02e50df24 = function (e, n) {
            f(e).clearDepth(n);
          }),
          (n.wbg.__wbg_clearStencil_78b0b3c82001b542 = function (e, n) {
            f(e).clearStencil(n);
          }),
          (n.wbg.__wbg_colorMask_6a64eb75df60e2cf = function (e, n, t, _, r) {
            f(e).colorMask(0 !== n, 0 !== t, 0 !== _, 0 !== r);
          }),
          (n.wbg.__wbg_compileShader_043cc8b99c2efc21 = function (e, n) {
            f(e).compileShader(f(n));
          }),
          (n.wbg.__wbg_copyTexSubImage2D_8f6644e7df89a307 = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
            o,
            u,
          ) {
            f(e).copyTexSubImage2D(n >>> 0, t, _, r, b, c, o, u);
          }),
          (n.wbg.__wbg_createBuffer_9571c039ba6696c6 = function (e) {
            const n = f(e).createBuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createFramebuffer_20f79ec189ef2060 = function (e) {
            const n = f(e).createFramebuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createProgram_2c3a8969b5a76988 = function (e) {
            const n = f(e).createProgram();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createRenderbuffer_620bdfb7867926e8 = function (e) {
            const n = f(e).createRenderbuffer();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_createShader_af087106532661d9 = function (e, n) {
            const t = f(e).createShader(n >>> 0);
            return m(t) ? 0 : a(t);
          }),
          (n.wbg.__wbg_createTexture_e49c36c5f31925a3 = function (e) {
            const n = f(e).createTexture();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_cullFace_ccad99c645b704eb = function (e, n) {
            f(e).cullFace(n >>> 0);
          }),
          (n.wbg.__wbg_deleteBuffer_898974b9db136e43 = function (e, n) {
            f(e).deleteBuffer(f(n));
          }),
          (n.wbg.__wbg_deleteFramebuffer_d632dfba2c1f5c75 = function (e, n) {
            f(e).deleteFramebuffer(f(n));
          }),
          (n.wbg.__wbg_deleteProgram_5f938b0667141206 = function (e, n) {
            f(e).deleteProgram(f(n));
          }),
          (n.wbg.__wbg_deleteRenderbuffer_ccae7372581ae424 = function (e, n) {
            f(e).deleteRenderbuffer(f(n));
          }),
          (n.wbg.__wbg_deleteShader_b9bb71cfb1a65a0d = function (e, n) {
            f(e).deleteShader(f(n));
          }),
          (n.wbg.__wbg_deleteTexture_558c751a66bd2f16 = function (e, n) {
            f(e).deleteTexture(f(n));
          }),
          (n.wbg.__wbg_depthFunc_5398fbc3f56db827 = function (e, n) {
            f(e).depthFunc(n >>> 0);
          }),
          (n.wbg.__wbg_depthMask_9b58af067c6393e9 = function (e, n) {
            f(e).depthMask(0 !== n);
          }),
          (n.wbg.__wbg_depthRange_29f0e12388f0eacb = function (e, n, t) {
            f(e).depthRange(n, t);
          }),
          (n.wbg.__wbg_disable_d73e59fee5b5e973 = function (e, n) {
            f(e).disable(n >>> 0);
          }),
          (n.wbg.__wbg_disableVertexAttribArray_b9d8ae826c70526f = function (
            e,
            n,
          ) {
            f(e).disableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_drawArrays_532f4e0a4547dd1f = function (e, n, t, _) {
            f(e).drawArrays(n >>> 0, t, _);
          }),
          (n.wbg.__wbg_drawElements_5b776409d809de04 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).drawElements(n >>> 0, t, _ >>> 0, r);
          }),
          (n.wbg.__wbg_enable_68b3fa03a633259a = function (e, n) {
            f(e).enable(n >>> 0);
          }),
          (n.wbg.__wbg_enableVertexAttribArray_52c23a516be565c0 = function (
            e,
            n,
          ) {
            f(e).enableVertexAttribArray(n >>> 0);
          }),
          (n.wbg.__wbg_framebufferRenderbuffer_fee6ceb2330389b7 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).framebufferRenderbuffer(n >>> 0, t >>> 0, _ >>> 0, f(r));
          }),
          (n.wbg.__wbg_framebufferTexture2D_ae81a33228e46de6 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).framebufferTexture2D(n >>> 0, t >>> 0, _ >>> 0, f(r), b);
          }),
          (n.wbg.__wbg_frontFace_358bf8c6c5159d54 = function (e, n) {
            f(e).frontFace(n >>> 0);
          }),
          (n.wbg.__wbg_getAttribLocation_b47269b802d50c45 = function (
            e,
            n,
            t,
            _,
          ) {
            return f(e).getAttribLocation(f(n), x(t, _));
          }),
          (n.wbg.__wbg_getExtension_39f01d7a720d3a67 = function () {
            return F(function (e, n, t) {
              const _ = f(e).getExtension(x(n, t));
              return m(_) ? 0 : a(_);
            }, arguments);
          }),
          (n.wbg.__wbg_getParameter_8df84a84197f2148 = function () {
            return F(function (e, n) {
              return a(f(e).getParameter(n >>> 0));
            }, arguments);
          }),
          (n.wbg.__wbg_getProgramInfoLog_22296c36addf7a70 = function (e, n, t) {
            const _ = f(n).getProgramInfoLog(f(t));
            var r = m(_) ? 0 : l(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
          }),
          (n.wbg.__wbg_getProgramParameter_ab2954ca517d8589 = function (
            e,
            n,
            t,
          ) {
            return a(f(e).getProgramParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getShaderInfoLog_935361c52a919c15 = function (e, n, t) {
            const _ = f(n).getShaderInfoLog(f(t));
            var r = m(_) ? 0 : l(_, b.__wbindgen_malloc, b.__wbindgen_realloc),
              c = i;
            h().setInt32(e + 4, c, !0), h().setInt32(e + 0, r, !0);
          }),
          (n.wbg.__wbg_getShaderParameter_cedb1ec0d8052eff = function (
            e,
            n,
            t,
          ) {
            return a(f(e).getShaderParameter(f(n), t >>> 0));
          }),
          (n.wbg.__wbg_getUniformLocation_9cd213015cf8f29f = function (
            e,
            n,
            t,
            _,
          ) {
            const r = f(e).getUniformLocation(f(n), x(t, _));
            return m(r) ? 0 : a(r);
          }),
          (n.wbg.__wbg_linkProgram_1f18bca817bb6edb = function (e, n) {
            f(e).linkProgram(f(n));
          }),
          (n.wbg.__wbg_pixelStorei_2498331e094ff305 = function (e, n, t) {
            f(e).pixelStorei(n >>> 0, t);
          }),
          (n.wbg.__wbg_polygonOffset_6d8d69a8d60e5b82 = function (e, n, t) {
            f(e).polygonOffset(n, t);
          }),
          (n.wbg.__wbg_renderbufferStorage_8c3882aa73deada9 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).renderbufferStorage(n >>> 0, t >>> 0, _, r);
          }),
          (n.wbg.__wbg_scissor_d06b14c4966727fa = function (e, n, t, _, r) {
            f(e).scissor(n, t, _, r);
          }),
          (n.wbg.__wbg_shaderSource_d447b31057e4f64c = function (e, n, t, _) {
            f(e).shaderSource(f(n), x(t, _));
          }),
          (n.wbg.__wbg_stencilFunc_0e2a6d25bdcb678e = function (e, n, t, _) {
            f(e).stencilFunc(n >>> 0, t, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilFuncSeparate_55376d035e74caf1 = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).stencilFuncSeparate(n >>> 0, t >>> 0, _, r >>> 0);
          }),
          (n.wbg.__wbg_stencilMask_f55f160fc49b981a = function (e, n) {
            f(e).stencilMask(n >>> 0);
          }),
          (n.wbg.__wbg_stencilMaskSeparate_578fd1281f54081e = function (
            e,
            n,
            t,
          ) {
            f(e).stencilMaskSeparate(n >>> 0, t >>> 0);
          }),
          (n.wbg.__wbg_stencilOp_2418383669ca9228 = function (e, n, t, _) {
            f(e).stencilOp(n >>> 0, t >>> 0, _ >>> 0);
          }),
          (n.wbg.__wbg_stencilOpSeparate_ea6f96abd32aae5b = function (
            e,
            n,
            t,
            _,
            r,
          ) {
            f(e).stencilOpSeparate(n >>> 0, t >>> 0, _ >>> 0, r >>> 0);
          }),
          (n.wbg.__wbg_texParameteri_83ad7181b62f4997 = function (e, n, t, _) {
            f(e).texParameteri(n >>> 0, t >>> 0, _);
          }),
          (n.wbg.__wbg_uniform1f_509b4ba100d75456 = function (e, n, t) {
            f(e).uniform1f(f(n), t);
          }),
          (n.wbg.__wbg_uniform1i_7f6e60c975d21e0a = function (e, n, t) {
            f(e).uniform1i(f(n), t);
          }),
          (n.wbg.__wbg_uniform4f_f9a7809965964840 = function (
            e,
            n,
            t,
            _,
            r,
            b,
          ) {
            f(e).uniform4f(f(n), t, _, r, b);
          }),
          (n.wbg.__wbg_useProgram_d4616618ac6d0652 = function (e, n) {
            f(e).useProgram(f(n));
          }),
          (n.wbg.__wbg_vertexAttribPointer_fcbfe42523d724ca = function (
            e,
            n,
            t,
            _,
            r,
            b,
            c,
          ) {
            f(e).vertexAttribPointer(n >>> 0, t, _ >>> 0, 0 !== r, b, c);
          }),
          (n.wbg.__wbg_viewport_efc09c09d4f3cc48 = function (e, n, t, _, r) {
            f(e).viewport(n, t, _, r);
          }),
          (n.wbg.__wbg_getSupportedProfiles_13c2c2008a14070f = function (e) {
            const n = f(e).getSupportedProfiles();
            return m(n) ? 0 : a(n);
          }),
          (n.wbg.__wbg_setbuffer_1daf66dd2a0b05a1 = function (e, n) {
            f(e).buffer = f(n);
          }),
          (n.wbg.__wbg_start_63844dcf17db09ab = function () {
            return F(function (e, n) {
              f(e).start(n);
            }, arguments);
          }),
          (n.wbg.__wbg_a_b1bebb7cd309c46b = function (e) {
            return f(e).a;
          }),
          (n.wbg.__wbg_seta_9b1f6a430bfb5297 = function (e, n) {
            f(e).a = n;
          }),
          (n.wbg.__wbg_b_4c2ee4b50a8d4cfa = function (e) {
            return f(e).b;
          }),
          (n.wbg.__wbg_c_573c05624efe58cb = function (e) {
            return f(e).c;
          }),
          (n.wbg.__wbg_d_2398765da4b99feb = function (e) {
            return f(e).d;
          }),
          (n.wbg.__wbg_setd_dc4a72a9ed8f5041 = function (e, n) {
            f(e).d = n;
          }),
          (n.wbg.__wbg_e_33d9e747d56416c4 = function (e) {
            return f(e).e;
          }),
          (n.wbg.__wbg_f_8909b8bd7c8ceecc = function (e) {
            return f(e).f;
          }),
          (n.wbg.__wbg_new_647397489f26d140 = function () {
            return F(function () {
              return a(new DOMMatrix());
            }, arguments);
          }),
          (n.wbg.__wbg_newwitharray64_f1cc54d273247bbc = function () {
            return F(function (e, n) {
              return a(new DOMMatrix(Q(e, n)));
            }, arguments);
          }),
          (n.wbg.__wbg_videoWidth_5f4190ae93af0dd6 = function (e) {
            return f(e).videoWidth;
          }),
          (n.wbg.__wbg_videoHeight_4fb4bdd27e02263a = function (e) {
            return f(e).videoHeight;
          }),
          (n.wbg.__wbg_ctrlKey_319ff2374dc7f372 = function (e) {
            return f(e).ctrlKey;
          }),
          (n.wbg.__wbg_shiftKey_f38dee34420e0d62 = function (e) {
            return f(e).shiftKey;
          }),
          (n.wbg.__wbg_metaKey_00fdcfadf1968d45 = function (e) {
            return f(e).metaKey;
          }),
          (n.wbg.__wbg_key_a626396efbca2b95 = function (e, n) {
            const t = l(f(n).key, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_code_01dc6af887ca9ecb = function (e, n) {
            const t = l(f(n).code, b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbg_href_9c2fe204628af7a3 = function () {
            return F(function (e, n) {
              const t = l(f(n).href, b.__wbindgen_malloc, b.__wbindgen_realloc),
                _ = i;
              h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_protocol_787951293a197961 = function () {
            return F(function (e, n) {
              const t = l(
                  f(n).protocol,
                  b.__wbindgen_malloc,
                  b.__wbindgen_realloc,
                ),
                _ = i;
              h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
            }, arguments);
          }),
          (n.wbg.__wbg_assign_01c9de4343368001 = function () {
            return F(function (e, n, t) {
              f(e).assign(x(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_readyState_7237e2b1adac03a6 = function (e) {
            return f(e).readyState;
          }),
          (n.wbg.__wbg_setbinaryType_d164a0be4c212c9c = function (e, n) {
            f(e).binaryType = ["blob", "arraybuffer"][n];
          }),
          (n.wbg.__wbg_new_0bf4a5b0632517ed = function () {
            return F(function (e, n) {
              return a(new WebSocket(x(e, n)));
            }, arguments);
          }),
          (n.wbg.__wbg_close_99bb12a22f16f79c = function () {
            return F(function (e) {
              f(e).close();
            }, arguments);
          }),
          (n.wbg.__wbg_close_b0208f2b31351710 = function () {
            return F(function (e, n) {
              f(e).close(n);
            }, arguments);
          }),
          (n.wbg.__wbg_close_0a0cd79519b11318 = function () {
            return F(function (e, n, t, _) {
              f(e).close(n, x(t, _));
            }, arguments);
          }),
          (n.wbg.__wbg_send_82b52e2f9f8946d9 = function () {
            return F(function (e, n, t) {
              f(e).send(x(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_send_1b333b26681a902d = function () {
            return F(function (e, n, t) {
              f(e).send(O(n, t));
            }, arguments);
          }),
          (n.wbg.__wbg_get_3baa728f9d58d3f6 = function (e, n) {
            return a(f(e)[n >>> 0]);
          }),
          (n.wbg.__wbg_length_ae22078168b726f5 = function (e) {
            return f(e).length;
          }),
          (n.wbg.__wbg_new_a220cf903aa02ca2 = function () {
            return a(new Array());
          }),
          (n.wbg.__wbg_newnoargs_76313bd6ff35d0f2 = function (e, n) {
            return a(new Function(x(e, n)));
          }),
          (n.wbg.__wbg_next_f9cb570345655b9a = function () {
            return F(function (e) {
              return a(f(e).next());
            }, arguments);
          }),
          (n.wbg.__wbg_done_bfda7aa8f252b39f = function (e) {
            return f(e).done;
          }),
          (n.wbg.__wbg_value_6d39332ab4788d86 = function (e) {
            return a(f(e).value);
          }),
          (n.wbg.__wbg_get_224d16597dbbfd96 = function () {
            return F(function (e, n) {
              return a(Reflect.get(f(e), f(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_call_1084a111329e68ce = function () {
            return F(function (e, n) {
              return a(f(e).call(f(n)));
            }, arguments);
          }),
          (n.wbg.__wbg_new_525245e2b9901204 = function () {
            return a(new Object());
          }),
          (n.wbg.__wbg_self_3093d5d1f7bcb682 = function () {
            return F(function () {
              return a(self.self);
            }, arguments);
          }),
          (n.wbg.__wbg_window_3bcfc4d31bc012f8 = function () {
            return F(function () {
              return a(window.window);
            }, arguments);
          }),
          (n.wbg.__wbg_globalThis_86b222e13bdf32ed = function () {
            return F(function () {
              return a(globalThis.globalThis);
            }, arguments);
          }),
          (n.wbg.__wbg_global_e5a3fe56f8be9485 = function () {
            return F(function () {
              return a(t.g.global);
            }, arguments);
          }),
          (n.wbg.__wbg_set_673dda6c73d19609 = function (e, n, t) {
            f(e)[n >>> 0] = u(t);
          }),
          (n.wbg.__wbg_includes_7c12264f911567fe = function (e, n, t) {
            return f(e).includes(f(n), t);
          }),
          (n.wbg.__wbg_isArray_8364a5371e9737d8 = function (e) {
            return Array.isArray(f(e));
          }),
          (n.wbg.__wbg_of_4a1c869ef05b4b73 = function (e) {
            return a(Array.of(f(e)));
          }),
          (n.wbg.__wbg_of_99c2a118200b1e62 = function (e, n) {
            return a(Array.of(f(e), f(n)));
          }),
          (n.wbg.__wbg_push_37c89022f34c01ca = function (e, n) {
            return f(e).push(f(n));
          }),
          (n.wbg.__wbg_instanceof_ArrayBuffer_61dfc3198373c902 = function (e) {
            let n;
            try {
              n = f(e) instanceof ArrayBuffer;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_values_a182ed198dd79e93 = function (e) {
            return a(f(e).values());
          }),
          (n.wbg.__wbg_instanceof_Error_69bde193b0cc95e3 = function (e) {
            let n;
            try {
              n = f(e) instanceof Error;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_new_796382978dfd4fb0 = function (e, n) {
            return a(new Error(x(e, n)));
          }),
          (n.wbg.__wbg_message_e18bae0a0e2c097a = function (e) {
            return a(f(e).message);
          }),
          (n.wbg.__wbg_name_ac78212e803c7941 = function (e) {
            return a(f(e).name);
          }),
          (n.wbg.__wbg_toString_9d18e102ca933e68 = function (e) {
            return a(f(e).toString());
          }),
          (n.wbg.__wbg_call_89af060b4e1523f2 = function () {
            return F(function (e, n, t) {
              return a(f(e).call(f(n), f(t)));
            }, arguments);
          }),
          (n.wbg.__wbg_getTime_91058879093a1589 = function (e) {
            return f(e).getTime();
          }),
          (n.wbg.__wbg_getTimezoneOffset_c9929a3cc94500fe = function (e) {
            return f(e).getTimezoneOffset();
          }),
          (n.wbg.__wbg_new_7982fb43cfca37ae = function (e) {
            return a(new Date(f(e)));
          }),
          (n.wbg.__wbg_new0_65387337a95cf44d = function () {
            return a(new Date());
          }),
          (n.wbg.__wbg_instanceof_Object_b80213ae6cc9aafb = function (e) {
            let n;
            try {
              n = f(e) instanceof Object;
            } catch (e) {
              n = !1;
            }
            return n;
          }),
          (n.wbg.__wbg_entries_7a0e06255456ebcd = function (e) {
            return a(Object.entries(f(e)));
          }),
          (n.wbg.__wbg_fromEntries_623a5958a8dd4673 = function () {
            return F(function (e) {
              return a(Object.fromEntries(f(e)));
            }, arguments);
          }),
          (n.wbg.__wbg_is_009b1ef508712fda = function (e, n) {
            return Object.is(f(e), f(n));
          }),
          (n.wbg.__wbg_valueOf_d5ba0a54a2aa5615 = function (e) {
            return a(f(e).valueOf());
          }),
          (n.wbg.__wbg_new_b85e72ed1bfd57f9 = function (e, n) {
            try {
              var t = { a: e, b: n };
              const _ = new Promise((e, n) => {
                const _ = t.a;
                t.a = 0;
                try {
                  return (function (e, n, t, _) {
                    b.wasm_bindgen__convert__closures__invoke2_mut__h6cfd94f9547a091c(
                      e,
                      n,
                      a(t),
                      a(_),
                    );
                  })(_, t.b, e, n);
                } finally {
                  t.a = _;
                }
              });
              return a(_);
            } finally {
              t.a = t.b = 0;
            }
          }),
          (n.wbg.__wbg_resolve_570458cb99d56a43 = function (e) {
            return a(Promise.resolve(f(e)));
          }),
          (n.wbg.__wbg_then_95e6edc0f89b73b1 = function (e, n) {
            return a(f(e).then(f(n)));
          }),
          (n.wbg.__wbg_then_876bb3c633745cc6 = function (e, n, t) {
            return a(f(e).then(f(n), f(t)));
          }),
          (n.wbg.__wbg_buffer_b7b08af79b0b0974 = function (e) {
            return a(f(e).buffer);
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_634ada0fd17e2e96 = function (
            e,
            n,
            t,
          ) {
            return a(new Int8Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_b5293b0eedbac651 = function (
            e,
            n,
            t,
          ) {
            return a(new Int16Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_c89d62ca194b7f14 = function (
            e,
            n,
            t,
          ) {
            return a(new Int32Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_8a2cb9ca96b27ec9 = function (
            e,
            n,
            t,
          ) {
            return a(new Uint8Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_new_ea1883e1e5e86686 = function (e) {
            return a(new Uint8Array(f(e)));
          }),
          (n.wbg.__wbg_set_d1e79e2388520f18 = function (e, n, t) {
            f(e).set(f(n), t >>> 0);
          }),
          (n.wbg.__wbg_length_8339fcf5d8ecd12e = function (e) {
            return f(e).length;
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_bd3d5191e8925067 = function (
            e,
            n,
            t,
          ) {
            return a(new Uint16Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_874df3e29cb555f9 = function (
            e,
            n,
            t,
          ) {
            return a(new Uint32Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithbyteoffsetandlength_a69c63d7671a5dbf = function (
            e,
            n,
            t,
          ) {
            return a(new Float32Array(f(e), n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_newwithlength_ec548f448387c968 = function (e) {
            return a(new Uint8Array(e >>> 0));
          }),
          (n.wbg.__wbg_buffer_0710d1b9dbe2eea6 = function (e) {
            return a(f(e).buffer);
          }),
          (n.wbg.__wbg_subarray_7c2e3576afe181d1 = function (e, n, t) {
            return a(f(e).subarray(n >>> 0, t >>> 0));
          }),
          (n.wbg.__wbg_byteLength_850664ef28f3e42f = function (e) {
            return f(e).byteLength;
          }),
          (n.wbg.__wbg_byteOffset_ea14c35fa6de38cc = function (e) {
            return f(e).byteOffset;
          }),
          (n.wbg.__wbg_has_4bfbc01db38743f7 = function () {
            return F(function (e, n) {
              return Reflect.has(f(e), f(n));
            }, arguments);
          }),
          (n.wbg.__wbg_ownKeys_5d255271ee408d2c = function () {
            return F(function (e) {
              return a(Reflect.ownKeys(f(e)));
            }, arguments);
          }),
          (n.wbg.__wbg_set_eacc7d73fefaafdf = function () {
            return F(function (e, n, t) {
              return Reflect.set(f(e), f(n), f(t));
            }, arguments);
          }),
          (n.wbg.__wbindgen_debug_string = function (e, n) {
            const t = l(S(f(n)), b.__wbindgen_malloc, b.__wbindgen_realloc),
              _ = i;
            h().setInt32(e + 4, _, !0), h().setInt32(e + 0, t, !0);
          }),
          (n.wbg.__wbindgen_throw = function (e, n) {
            throw new Error(x(e, n));
          }),
          (n.wbg.__wbindgen_memory = function () {
            return a(b.memory);
          }),
          (n.wbg.__wbindgen_closure_wrapper1212 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1213 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1214 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1215 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1216 = function (e, n, t) {
            return a(I(e, n, 286, B));
          }),
          (n.wbg.__wbindgen_closure_wrapper1217 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1218 = function (e, n, t) {
            return a(I(e, n, 286, A));
          }),
          (n.wbg.__wbindgen_closure_wrapper1219 = function (e, n, t) {
            return a(I(e, n, 286, P));
          }),
          (n.wbg.__wbindgen_closure_wrapper2995 = function (e, n, t) {
            return a(I(e, n, 1351, T));
          }),
          (n.wbg.__wbindgen_closure_wrapper3136 = function (e, n, t) {
            return a(I(e, n, 1403, D));
          }),
          (n.wbg.__wbindgen_closure_wrapper3138 = function (e, n, t) {
            return a(I(e, n, 1403, C));
          }),
          (n.wbg.__wbindgen_closure_wrapper3140 = function (e, n, t) {
            return a(I(e, n, 1403, C));
          }),
          (n.wbg.__wbindgen_closure_wrapper3142 = function (e, n, t) {
            return a(I(e, n, 1403, C));
          }),
          (n.wbg.__wbindgen_closure_wrapper15872 = function (e, n, t) {
            return a(I(e, n, 7271, R));
          }),
          (n.wbg.__wbindgen_closure_wrapper15874 = function (e, n, t) {
            return a(I(e, n, 7271, R));
          }),
          (n.wbg.__wbindgen_closure_wrapper16297 = function (e, n, t) {
            return a(I(e, n, 7338, k));
          }),
          n
        );
      }
      function fe(e, n) {
        return (
          (b = e.exports),
          (ue.__wbindgen_wasm_module = n),
          (p = null),
          (W = null),
          (N = null),
          (z = null),
          (G = null),
          (g = null),
          (j = null),
          b.__wbindgen_start(),
          b
        );
      }
      function oe(e) {
        if (void 0 !== b) return b;
        void 0 !== e && Object.getPrototypeOf(e) === Object.prototype
          ? ({ module: e } = e)
          : console.warn(
              "using deprecated parameters for `initSync()`; pass a single object instead",
            );
        const n = ce();
        e instanceof WebAssembly.Module || (e = new WebAssembly.Module(e));
        return fe(new WebAssembly.Instance(e, n), e);
      }
      async function ue(e) {
        if (void 0 !== b) return b;
        void 0 !== e && Object.getPrototypeOf(e) === Object.prototype
          ? ({ module_or_path: e } = e)
          : console.warn(
              "using deprecated parameters for the initialization function; pass a single object instead",
            ),
          void 0 === e && (e = new URL(t(797), t.b));
        const n = ce();
        ("string" == typeof e ||
          ("function" == typeof Request && e instanceof Request) ||
          ("function" == typeof URL && e instanceof URL)) &&
          (e = fetch(e));
        const { instance: _, module: r } = await (async function (e, n) {
          if ("function" == typeof Response && e instanceof Response) {
            if ("function" == typeof WebAssembly.instantiateStreaming)
              try {
                return await WebAssembly.instantiateStreaming(e, n);
              } catch (n) {
                if ("application/wasm" == e.headers.get("Content-Type"))
                  throw n;
                console.warn(
                  "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                  n,
                );
              }
            const t = await e.arrayBuffer();
            return await WebAssembly.instantiate(t, n);
          }
          {
            const t = await WebAssembly.instantiate(e, n);
            return t instanceof WebAssembly.Instance
              ? { instance: t, module: e }
              : t;
          }
        })(await e, n);
        return fe(_, r);
      }
      const ae = ue;
    },
  },
]);
//# sourceMappingURL=core.ruffle.3334b93f92b5c7b428f2.js.map
