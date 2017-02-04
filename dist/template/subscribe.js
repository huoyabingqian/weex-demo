/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(133)
	var __weex_style__ = __webpack_require__(134)
	var __weex_script__ = __webpack_require__(135)

	__weex_define__('@weex-component/ef1d0fe815d620a5b3811a31368c7644', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/ef1d0fe815d620a5b3811a31368c7644',undefined,undefined)

/***/ },

/***/ 133:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "wraper"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "subscribe-menu-wraper"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "sport-container"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/images/ic_order_sport.png",
	                "resize": "contain"
	              },
	              "classList": [
	                "sport-icon"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "sport-text"
	              ],
	              "attr": {
	                "value": "自由健"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "sport-container"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/images/ic_order_lesson.png",
	                "resize": "contain"
	              },
	              "classList": [
	                "sport-icon"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "sport-text"
	              ],
	              "attr": {
	                "value": "课程预约"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "sport-container"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": "/images/ic_health_assessment.png",
	                "resize": "contain"
	              },
	              "classList": [
	                "sport-icon"
	              ]
	            },
	            {
	              "type": "text",
	              "classList": [
	                "sport-text"
	              ],
	              "attr": {
	                "value": "功能测评"
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "close-wraper"
	      ],
	      "events": {
	        "click": "closeOrderMenu"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "/images/ic_order_close.png"
	          },
	          "classList": [
	            "close-icon"
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = {
	  "wraper": {
	    "flex": 1
	  },
	  "subscribe-menu-wraper": {
	    "alignItems": "center",
	    "position": "absolute",
	    "bottom": 100,
	    "left": 0,
	    "right": 0
	  },
	  "close-wraper": {
	    "position": "absolute",
	    "bottom": 0,
	    "width": 750,
	    "height": 100,
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "close-icon": {
	    "width": 35,
	    "height": 35
	  },
	  "sport-container": {
	    "marginBottom": 110,
	    "alignItems": "center"
	  },
	  "sport-text": {
	    "color": "#222222",
	    "fontSize": 25,
	    "marginTop": 21
	  },
	  "sport-icon": {
	    "width": 151,
	    "height": 151
	  }
	}

/***/ },

/***/ 135:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	    data: function () {return {}},
	    methods: {
	        closeOrderMenu: function closeOrderMenu() {
	            var self = this;
	            var params = {
	                'url': 'dist/template/circle.js',
	                'animated': 'true'
	            };
	            navigator.push(params, function (e) {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });