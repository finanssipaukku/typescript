/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/***/ (() => {

eval("fn(\"hallo\");\r\nfunction fn(text) {\r\n    console.log(text);\r\n}\r\nfunction component() {\r\n    var element = document.createElement('div');\r\n    // Lodash, currently included via a script, is required for this line to work\r\n    element.innerHTML = \"hello world\";\r\n    return element;\r\n}\r\ndocument.body.appendChild(component());\r\n\n\n//# sourceURL=webpack:///./src/test.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/test.ts"]();
/******/ 	
/******/ })()
;