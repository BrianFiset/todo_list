/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM/task.js":
/*!*************************!*\
  !*** ./src/DOM/task.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeTask: () => (/* binding */ removeTask),\n/* harmony export */   start: () => (/* binding */ start)\n/* harmony export */ });\n/* harmony import */ var _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/todoItem */ \"./src/logic/todoItem.js\");\n\n\nconst title = document.querySelector('#title');\nconst dueDate = document.querySelector('#due-date');\nconst priority = document.querySelector('#priority');\nconst description = document.querySelector('#description');\nconst addTaskBtn = document.querySelector('.add-task-btn');\nconst deleteTaskBtn = document.querySelector('.delete-task-btn');\n\ntitle.required = true;\ndueDate.required = true;\npriority.required = true;\n\nfunction clearForm() {\n    title.value = '';\n    dueDate.value = '';\n    priority.value = '';\n    description.value = '';\n};\n\nfunction missingValues(items) {\n    let missing = 0;\n    for (let item of items){\n        if(item === '' || item === null) missing += 1;\n    };\n    return missing\n};\n\nfunction addTask(e) {   \n    let missing = missingValues([title.value,dueDate.value,priority.value]);\n    if(missing === 0) {\n        e.preventDefault();\n        _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItems.push(new _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.TodoItem(title.value,dueDate.value,priority.value,description.value));\n        console.log(_logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItems);\n        clearForm();\n    };\n};\n\nfunction removeTask(){\n    const taskNumber = document.querySelector('.task-number');\n    _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItems.splice(taskNumber.value,1)\n    console.log(_logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItems);\n}\n\nfunction start(){\n    addTaskBtn.addEventListener('click',addTask);\n    deleteTaskBtn.addEventListener('click', removeTask)\n};\n\n//# sourceURL=webpack://todo_list/./src/DOM/task.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/todoItem */ \"./src/logic/todoItem.js\");\n/* harmony import */ var _DOM_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM/task */ \"./src/DOM/task.js\");\n\n\n\n_logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.todoItems.push(new _logic_todoItem__WEBPACK_IMPORTED_MODULE_0__.TodoItem('code','3hours','37','red'));\n\n(0,_DOM_task__WEBPACK_IMPORTED_MODULE_1__.start)();\n\n//# sourceURL=webpack://todo_list/./src/index.js?");

/***/ }),

/***/ "./src/logic/todoItem.js":
/*!*******************************!*\
  !*** ./src/logic/todoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoItem: () => (/* binding */ TodoItem),\n/* harmony export */   todoItems: () => (/* binding */ todoItems)\n/* harmony export */ });\nconst todoItems = []\n\nclass TodoItem{\n    constructor(title,dueDate,priority,description,group){\n        this.title = title;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.description = description;\n        if(group === undefined) {\n            this.group = '';\n        }\n        this.group = group;\n    };\n};\n\n//# sourceURL=webpack://todo_list/./src/logic/todoItem.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;