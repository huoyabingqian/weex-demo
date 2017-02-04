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

	var __weex_template__ = __webpack_require__(125)
	var __weex_style__ = __webpack_require__(126)
	var __weex_script__ = __webpack_require__(127)

	__weex_define__('@weex-component/a77d314f38e76ee6fec1ec5b519ea6e9', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/a77d314f38e76ee6fec1ec5b519ea6e9',undefined,undefined)

/***/ },

/***/ 99:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "style": {
	    "height": function () {return this.height},
	    "backgroundColor": function () {return this.backgroundColor}
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "right-text"
	      ],
	      "style": {
	        "color": function () {return this.rightItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "right",
	        "value": function () {return this.rightItemTitle}
	      },
	      "shown": function () {return !this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "right-image"
	      ],
	      "attr": {
	        "naviItemPosition": "right",
	        "src": function () {return this.rightItemSrc}
	      },
	      "shown": function () {return this.rightItemSrc},
	      "events": {
	        "click": "onclickrightitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "left-text"
	      ],
	      "style": {
	        "color": function () {return this.leftItemColor}
	      },
	      "attr": {
	        "naviItemPosition": "left",
	        "value": function () {return this.leftItemTitle}
	      },
	      "shown": function () {return !this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "left-image"
	      ],
	      "attr": {
	        "naviItemPosition": "left",
	        "src": function () {return this.leftItemSrc}
	      },
	      "shown": function () {return this.leftItemSrc},
	      "events": {
	        "click": "onclickleftitem"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "center-text"
	      ],
	      "style": {
	        "color": function () {return this.titleColor},
	        "fontSize": function () {return this.titleSize}
	      },
	      "attr": {
	        "naviItemPosition": "center",
	        "value": function () {return this.title}
	      }
	    }
	  ]
	}

/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "flexDirection": "row",
	    "position": "fixed",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "width": 750
	  },
	  "right-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "right": 32,
	    "textAlign": "right",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "left-text": {
	    "position": "absolute",
	    "bottom": 28,
	    "left": 32,
	    "textAlign": "left",
	    "fontSize": 32,
	    "fontFamily": "'Open Sans', sans-serif"
	  },
	  "center-text": {
	    "position": "absolute",
	    "bottom": 25,
	    "left": 172,
	    "right": 172,
	    "textAlign": "center",
	    "fontSize": 36,
	    "fontWeight": "bold"
	  },
	  "left-image": {
	    "position": "absolute",
	    "bottom": 20,
	    "left": 28,
	    "width": 50,
	    "height": 50
	  },
	  "right-image": {
	    "position": "absolute",
	    "bottom": 35,
	    "right": 35,
	    "width": 38,
	    "height": 30
	  },
	  "divider-line": {
	    "position": "absolute",
	    "top": 100,
	    "width": 750,
	    "height": 1,
	    "backgroundColor": "#ff0000"
	  }
	}

/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	    data: function () {return {
	        backgroundColor: '#f7f7f7',
	        height: 100,
	        title: "",
	        titleColor: '#2d2d2d',
	        titleSize: 32,
	        rightItemSrc: '',
	        rightItemTitle: '',
	        rightItemColor: 'black',
	        leftItemSrc: '',
	        leftItemTitle: '',
	        leftItemColor: 'black'
	    }},
	    created: function created() {}
	};}
	/* generated by weex-loader */


/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(99)
	var __weex_style__ = __webpack_require__(100)
	var __weex_script__ = __webpack_require__(101)

	__weex_define__('@weex-component/title-bar', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})


/***/ },

/***/ 125:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "style": {
	    "backgroundColor": "#f2f2f2"
	  },
	  "children": [
	    {
	      "type": "title-bar",
	      "attr": {
	        "height": function () {return this.height},
	        "backgroundColor": function () {return this.backgroundColor},
	        "title": function () {return this.title},
	        "titleColor": function () {return this.titleColor},
	        "titleSize": function () {return this.titleSize}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "order-title"
	      ],
	      "style": {
	        "marginTop": function () {return this.height}
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": function () {return [this.currentIndex==0?'order-title-text-sel':'order-title-text']},
	          "events": {
	            "click": function ($event) {this.orderTitleChange(0,$event)}
	          },
	          "attr": {
	            "value": "全部"
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return [this.currentIndex==1?'order-title-text-sel':'order-title-text']},
	          "events": {
	            "click": function ($event) {this.orderTitleChange(1,$event)}
	          },
	          "attr": {
	            "value": "待付款"
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return [this.currentIndex==2?'order-title-text-sel':'order-title-text']},
	          "events": {
	            "click": function ($event) {this.orderTitleChange(2,$event)}
	          },
	          "attr": {
	            "value": "未消费"
	          }
	        },
	        {
	          "type": "text",
	          "classList": function () {return [this.currentIndex==3?'order-title-text-sel':'order-title-text']},
	          "events": {
	            "click": function ($event) {this.orderTitleChange(3,$event)}
	          },
	          "attr": {
	            "value": "已消费"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "style": {
	        "paddingRight": 34,
	        "paddingLeft": 34
	      },
	      "children": [
	        {
	          "type": "div",
	          "id": "tabIndicator",
	          "classList": [
	            "tab-indicator"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "order-content"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "style": {
	            "fontSize": 40
	          },
	          "attr": {
	            "value": function () {return this.orderList[this.currentIndex]}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 126:
/***/ function(module, exports) {

	module.exports = {
	  "order-title": {
	    "flexDirection": "row",
	    "height": 84,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "order-title-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#989898",
	    "fontSize": 30
	  },
	  "order-title-text-sel": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#00D0C6",
	    "fontSize": 30
	  },
	  "tab-indicator": {
	    "height": 3,
	    "width": 120,
	    "backgroundColor": "#00D0C6"
	  },
	  "order-content": {
	    "width": 750,
	    "height": 1048,
	    "justifyContent": "center",
	    "alignItems": "center"
	  }
	}

/***/ },

/***/ 127:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var animation = __weex_require__('@weex-module/animation');
	__webpack_require__(108);
	module.exports = {
	    data: function () {return {
	        height: 100,
	        backgroundColor: "#f7f7f7",
	        title: "我的订单",
	        titleColor: "#2d2d2d",
	        titleSize: 32,
	        orderList: ['全部', '待付款', '未消费', '已消费'],
	        currentIndex: 0
	    }},
	    created: function created() {},
	    methods: {
	        slideChange: function slideChange(e) {
	            this.currentIndex = e.index;
	            this.orderTitleChange(this.currentIndex);
	        },
	        orderTitleChange: function orderTitleChange(index) {
	            this.currentIndex = index;
	            var tabIndicatior = this.$el('tabIndicator');
	            var offset = 187.5 * index;
	            animation.transition(tabIndicatior, {
	                styles: {
	                    transform: 'translate(' + offset + ', 0)'
	                },
	                duration: 200,
	                timingFunction: 'ease',
	                'transform-origin': 'center center' }, function () {});
	        }
	    }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });