"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-email";
exports.ids = ["vendor-chunks/@react-email"];
exports.modules = {

/***/ "(rsc)/./node_modules/@react-email/render/dist/node/index.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-email/render/dist/node/index.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   plainTextSelectors: () => (/* binding */ plainTextSelectors),\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   renderAsync: () => (/* binding */ renderAsync)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"(rsc)/./node_modules/next/dist/compiled/react-dom/server.js\");\n/* harmony import */ var html_to_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-to-text */ \"(rsc)/./node_modules/html-to-text/lib/html-to-text.mjs\");\n/* harmony import */ var js_beautify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-beautify */ \"(rsc)/./node_modules/js-beautify/js/index.js\");\n/* harmony import */ var node_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:stream */ \"node:stream\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __async = (__this, __arguments, generator) => {\n  return new Promise((resolve, reject) => {\n    var fulfilled = (value) => {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var rejected = (value) => {\n      try {\n        step(generator.throw(value));\n      } catch (e) {\n        reject(e);\n      }\n    };\n    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);\n    step((generator = generator.apply(__this, __arguments)).next());\n  });\n};\n\n// src/shared/render.ts\n\n\n\n// src/shared/utils/pretty.ts\n\nvar defaults = {\n  unformatted: [\"code\", \"pre\", \"em\", \"strong\", \"span\"],\n  indent_inner_html: true,\n  indent_char: \" \",\n  indent_size: 2,\n  sep: \"\\n\"\n};\nvar pretty = (str, options = {}) => {\n  return js_beautify__WEBPACK_IMPORTED_MODULE_2__.html(str, __spreadValues(__spreadValues({}, defaults), options));\n};\n\n// src/shared/plain-text-selectors.ts\nvar plainTextSelectors = [\n  { selector: \"img\", format: \"skip\" },\n  { selector: \"#__react-email-preview\", format: \"skip\" },\n  {\n    selector: \"a\",\n    options: { linkBrackets: false }\n  }\n];\n\n// src/shared/render.ts\nvar render = (component, options) => {\n  if (options == null ? void 0 : options.plainText) {\n    return renderAsPlainText(component, options);\n  }\n  const doctype = '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">';\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToStaticMarkup(component);\n  const document = `${doctype}${markup}`;\n  if (options && options.pretty) {\n    return pretty(document);\n  }\n  return document;\n};\nvar renderAsPlainText = (component, options) => {\n  return (0,html_to_text__WEBPACK_IMPORTED_MODULE_1__.convert)(react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToStaticMarkup(component), __spreadValues({\n    selectors: plainTextSelectors\n  }, (options == null ? void 0 : options.plainText) === true ? options.htmlToTextOptions : {}));\n};\n\n// src/node/render-async.ts\n\n\nvar decoder = new TextDecoder(\"utf-8\");\nvar readStream = (stream) => __async(void 0, null, function* () {\n  let result = \"\";\n  if (\"pipeTo\" in stream) {\n    const writableStream = new WritableStream({\n      write(chunk) {\n        result += decoder.decode(chunk);\n      }\n    });\n    yield stream.pipeTo(writableStream);\n  } else {\n    const writable = new node_stream__WEBPACK_IMPORTED_MODULE_3__.Writable({\n      write(chunk, _encoding, callback) {\n        result += decoder.decode(chunk);\n        callback();\n      }\n    });\n    stream.pipe(writable);\n    return new Promise((resolve, reject) => {\n      writable.on(\"error\", reject);\n      writable.on(\"close\", () => {\n        resolve(result);\n      });\n    });\n  }\n  return result;\n});\nvar renderAsync = (component, options) => __async(void 0, null, function* () {\n  const { default: reactDOMServer } = yield Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! react-dom/server */ \"(rsc)/./node_modules/next/dist/compiled/react-dom/server.js\", 19));\n  let html;\n  if (Object.hasOwn(reactDOMServer, \"renderToReadableStream\")) {\n    html = yield readStream(\n      yield reactDOMServer.renderToReadableStream(component)\n    );\n  } else {\n    yield new Promise((resolve, reject) => {\n      const stream = reactDOMServer.renderToPipeableStream(component, {\n        onAllReady() {\n          return __async(this, null, function* () {\n            html = yield readStream(stream);\n            resolve();\n          });\n        },\n        onError(error) {\n          reject(error);\n        }\n      });\n    });\n  }\n  if (options == null ? void 0 : options.plainText) {\n    return (0,html_to_text__WEBPACK_IMPORTED_MODULE_1__.convert)(html, __spreadValues({\n      selectors: plainTextSelectors\n    }, options.htmlToTextOptions));\n  }\n  const doctype = '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">';\n  const document = `${doctype}${html.replace(/<!DOCTYPE.*?>/, \"\")}`;\n  if (options == null ? void 0 : options.pretty) {\n    return pretty(document);\n  }\n  return document;\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQHJlYWN0LWVtYWlsL3JlbmRlci9kaXN0L25vZGUvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSw2REFBNkQ7QUFDM0k7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNtRDtBQUNaOztBQUV2QztBQUNxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixTQUFTLDZDQUFlLHNDQUFzQztBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpQ0FBaUM7QUFDckMsSUFBSSxvREFBb0Q7QUFDeEQ7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixrRUFBbUM7QUFDcEQsc0JBQXNCLFFBQVEsRUFBRSxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMscURBQU8sQ0FBQyxrRUFBbUM7QUFDcEQ7QUFDQSxHQUFHLDBGQUEwRjtBQUM3Rjs7QUFFQTtBQUN1QztBQUNZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJO0FBQ0oseUJBQXlCLGlEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxVQUFVLDBCQUEwQixRQUFRLGlMQUEwQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsV0FBVyxxREFBUTtBQUNuQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esc0JBQXNCLFFBQVEsRUFBRSxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBS0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXctcG9ydGZvbGlvLy4vbm9kZV9tb2R1bGVzL0ByZWFjdC1lbWFpbC9yZW5kZXIvZGlzdC9ub2RlL2luZGV4Lm1qcz84Y2U4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wU3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX3Byb3BJc0VudW0gPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xudmFyIF9fZGVmTm9ybWFsUHJvcCA9IChvYmosIGtleSwgdmFsdWUpID0+IGtleSBpbiBvYmogPyBfX2RlZlByb3Aob2JqLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSwgdmFsdWUgfSkgOiBvYmpba2V5XSA9IHZhbHVlO1xudmFyIF9fc3ByZWFkVmFsdWVzID0gKGEsIGIpID0+IHtcbiAgZm9yICh2YXIgcHJvcCBpbiBiIHx8IChiID0ge30pKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChiLCBwcm9wKSlcbiAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgaWYgKF9fZ2V0T3duUHJvcFN5bWJvbHMpXG4gICAgZm9yICh2YXIgcHJvcCBvZiBfX2dldE93blByb3BTeW1ib2xzKGIpKSB7XG4gICAgICBpZiAoX19wcm9wSXNFbnVtLmNhbGwoYiwgcHJvcCkpXG4gICAgICAgIF9fZGVmTm9ybWFsUHJvcChhLCBwcm9wLCBiW3Byb3BdKTtcbiAgICB9XG4gIHJldHVybiBhO1xufTtcbnZhciBfX2FzeW5jID0gKF9fdGhpcywgX19hcmd1bWVudHMsIGdlbmVyYXRvcikgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHZhciBmdWxmaWxsZWQgPSAodmFsdWUpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdmFyIHJlamVjdGVkID0gKHZhbHVlKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzdGVwKGdlbmVyYXRvci50aHJvdyh2YWx1ZSkpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB2YXIgc3RlcCA9ICh4KSA9PiB4LmRvbmUgPyByZXNvbHZlKHgudmFsdWUpIDogUHJvbWlzZS5yZXNvbHZlKHgudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7XG4gICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KF9fdGhpcywgX19hcmd1bWVudHMpKS5uZXh0KCkpO1xuICB9KTtcbn07XG5cbi8vIHNyYy9zaGFyZWQvcmVuZGVyLnRzXG5pbXBvcnQgKiBhcyBSZWFjdERvbVNlcnZlciBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgY29udmVydCB9IGZyb20gXCJodG1sLXRvLXRleHRcIjtcblxuLy8gc3JjL3NoYXJlZC91dGlscy9wcmV0dHkudHNcbmltcG9ydCBqc0JlYXV0aWZ5IGZyb20gXCJqcy1iZWF1dGlmeVwiO1xudmFyIGRlZmF1bHRzID0ge1xuICB1bmZvcm1hdHRlZDogW1wiY29kZVwiLCBcInByZVwiLCBcImVtXCIsIFwic3Ryb25nXCIsIFwic3BhblwiXSxcbiAgaW5kZW50X2lubmVyX2h0bWw6IHRydWUsXG4gIGluZGVudF9jaGFyOiBcIiBcIixcbiAgaW5kZW50X3NpemU6IDIsXG4gIHNlcDogXCJcXG5cIlxufTtcbnZhciBwcmV0dHkgPSAoc3RyLCBvcHRpb25zID0ge30pID0+IHtcbiAgcmV0dXJuIGpzQmVhdXRpZnkuaHRtbChzdHIsIF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBkZWZhdWx0cyksIG9wdGlvbnMpKTtcbn07XG5cbi8vIHNyYy9zaGFyZWQvcGxhaW4tdGV4dC1zZWxlY3RvcnMudHNcbnZhciBwbGFpblRleHRTZWxlY3RvcnMgPSBbXG4gIHsgc2VsZWN0b3I6IFwiaW1nXCIsIGZvcm1hdDogXCJza2lwXCIgfSxcbiAgeyBzZWxlY3RvcjogXCIjX19yZWFjdC1lbWFpbC1wcmV2aWV3XCIsIGZvcm1hdDogXCJza2lwXCIgfSxcbiAge1xuICAgIHNlbGVjdG9yOiBcImFcIixcbiAgICBvcHRpb25zOiB7IGxpbmtCcmFja2V0czogZmFsc2UgfVxuICB9XG5dO1xuXG4vLyBzcmMvc2hhcmVkL3JlbmRlci50c1xudmFyIHJlbmRlciA9IChjb21wb25lbnQsIG9wdGlvbnMpID0+IHtcbiAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMucGxhaW5UZXh0KSB7XG4gICAgcmV0dXJuIHJlbmRlckFzUGxhaW5UZXh0KGNvbXBvbmVudCwgb3B0aW9ucyk7XG4gIH1cbiAgY29uc3QgZG9jdHlwZSA9ICc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPic7XG4gIGNvbnN0IG1hcmt1cCA9IFJlYWN0RG9tU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGNvbXBvbmVudCk7XG4gIGNvbnN0IGRvY3VtZW50ID0gYCR7ZG9jdHlwZX0ke21hcmt1cH1gO1xuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLnByZXR0eSkge1xuICAgIHJldHVybiBwcmV0dHkoZG9jdW1lbnQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudDtcbn07XG52YXIgcmVuZGVyQXNQbGFpblRleHQgPSAoY29tcG9uZW50LCBvcHRpb25zKSA9PiB7XG4gIHJldHVybiBjb252ZXJ0KFJlYWN0RG9tU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKGNvbXBvbmVudCksIF9fc3ByZWFkVmFsdWVzKHtcbiAgICBzZWxlY3RvcnM6IHBsYWluVGV4dFNlbGVjdG9yc1xuICB9LCAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wbGFpblRleHQpID09PSB0cnVlID8gb3B0aW9ucy5odG1sVG9UZXh0T3B0aW9ucyA6IHt9KSk7XG59O1xuXG4vLyBzcmMvbm9kZS9yZW5kZXItYXN5bmMudHNcbmltcG9ydCB7IFdyaXRhYmxlIH0gZnJvbSBcIm5vZGU6c3RyZWFtXCI7XG5pbXBvcnQgeyBjb252ZXJ0IGFzIGNvbnZlcnQyIH0gZnJvbSBcImh0bWwtdG8tdGV4dFwiO1xudmFyIGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoXCJ1dGYtOFwiKTtcbnZhciByZWFkU3RyZWFtID0gKHN0cmVhbSkgPT4gX19hc3luYyh2b2lkIDAsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBpZiAoXCJwaXBlVG9cIiBpbiBzdHJlYW0pIHtcbiAgICBjb25zdCB3cml0YWJsZVN0cmVhbSA9IG5ldyBXcml0YWJsZVN0cmVhbSh7XG4gICAgICB3cml0ZShjaHVuaykge1xuICAgICAgICByZXN1bHQgKz0gZGVjb2Rlci5kZWNvZGUoY2h1bmspO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHlpZWxkIHN0cmVhbS5waXBlVG8od3JpdGFibGVTdHJlYW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHdyaXRhYmxlID0gbmV3IFdyaXRhYmxlKHtcbiAgICAgIHdyaXRlKGNodW5rLCBfZW5jb2RpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJlc3VsdCArPSBkZWNvZGVyLmRlY29kZShjaHVuayk7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgc3RyZWFtLnBpcGUod3JpdGFibGUpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB3cml0YWJsZS5vbihcImVycm9yXCIsIHJlamVjdCk7XG4gICAgICB3cml0YWJsZS5vbihcImNsb3NlXCIsICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xudmFyIHJlbmRlckFzeW5jID0gKGNvbXBvbmVudCwgb3B0aW9ucykgPT4gX19hc3luYyh2b2lkIDAsIG51bGwsIGZ1bmN0aW9uKiAoKSB7XG4gIGNvbnN0IHsgZGVmYXVsdDogcmVhY3RET01TZXJ2ZXIgfSA9IHlpZWxkIGltcG9ydChcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG4gIGxldCBodG1sO1xuICBpZiAoT2JqZWN0Lmhhc093bihyZWFjdERPTVNlcnZlciwgXCJyZW5kZXJUb1JlYWRhYmxlU3RyZWFtXCIpKSB7XG4gICAgaHRtbCA9IHlpZWxkIHJlYWRTdHJlYW0oXG4gICAgICB5aWVsZCByZWFjdERPTVNlcnZlci5yZW5kZXJUb1JlYWRhYmxlU3RyZWFtKGNvbXBvbmVudClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHlpZWxkIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN0cmVhbSA9IHJlYWN0RE9NU2VydmVyLnJlbmRlclRvUGlwZWFibGVTdHJlYW0oY29tcG9uZW50LCB7XG4gICAgICAgIG9uQWxsUmVhZHkoKSB7XG4gICAgICAgICAgcmV0dXJuIF9fYXN5bmModGhpcywgbnVsbCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGh0bWwgPSB5aWVsZCByZWFkU3RyZWFtKHN0cmVhbSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5wbGFpblRleHQpIHtcbiAgICByZXR1cm4gY29udmVydDIoaHRtbCwgX19zcHJlYWRWYWx1ZXMoe1xuICAgICAgc2VsZWN0b3JzOiBwbGFpblRleHRTZWxlY3RvcnNcbiAgICB9LCBvcHRpb25zLmh0bWxUb1RleHRPcHRpb25zKSk7XG4gIH1cbiAgY29uc3QgZG9jdHlwZSA9ICc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiaHR0cDovL3d3dy53My5vcmcvVFIveGh0bWwxL0RURC94aHRtbDEtdHJhbnNpdGlvbmFsLmR0ZFwiPic7XG4gIGNvbnN0IGRvY3VtZW50ID0gYCR7ZG9jdHlwZX0ke2h0bWwucmVwbGFjZSgvPCFET0NUWVBFLio/Pi8sIFwiXCIpfWA7XG4gIGlmIChvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLnByZXR0eSkge1xuICAgIHJldHVybiBwcmV0dHkoZG9jdW1lbnQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudDtcbn0pO1xuZXhwb3J0IHtcbiAgcGxhaW5UZXh0U2VsZWN0b3JzLFxuICByZW5kZXIsXG4gIHJlbmRlckFzeW5jXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@react-email/render/dist/node/index.mjs\n");

/***/ })

};
;