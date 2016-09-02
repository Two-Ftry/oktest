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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jQuery = __webpack_require__(1);

	var _jQuery2 = _interopRequireDefault(_jQuery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(2);
	__webpack_require__(6);
	__webpack_require__(8);
	__webpack_require__(10);

	var Validation = __webpack_require__(16);

	var _class = {
	  username: 'ev-username',
	  pwd: 'ev-pwd',
	  pwdConfirm: 'ev-pwd-confirm',
	  checkCode: 'ev-check-code'
	};

	function init() {
	  initEvent();
	}

	function initEvent() {
	  (0, _jQuery2.default)('.ev-reg-btn').click(function () {
	    var username = (0, _jQuery2.default)('.' + _class.username).val();
	    var pwd = (0, _jQuery2.default)('.' + _class.pwd).val();
	    var pwdConfirm = (0, _jQuery2.default)('.' + _class.pwdConfirm).val();
	    var checkCode = (0, _jQuery2.default)('.' + _class.checkCode).val();

	    var r = true;
	    //用户名
	    r = Validation.checkPhone(username);
	    if (!r) {
	      r = Validation.checkEmail(username);
	    }
	    if (!r) {
	      alert('用户名不正确!!!');
	      return;
	    }

	    //密码
	    r = Validation.checkNull(pwd);
	    if (!r) {
	      alert('密码不能为空');
	      return;
	    }

	    //密码确认
	    r = Validation.checkNull(pwdConfirm);
	    if (!r) {
	      alert('密码确认不能为空!!!');
	      return;
	    }
	    r = Validation.isSame(pwd, pwdConfirm);
	    if (!r) {
	      alert('密码和密码确认不相同!!!');
	      return;
	    }

	    // 验证码
	    r = Validation.checkNull(checkCode);
	    if (!r) {
	      alert('验证码不能为空!!!');
	      return;
	    }

	    window.location.href = 'index.html';
	  });

	  (0, _jQuery2.default)('.ev-reset-btn').click(function () {
	    (0, _jQuery2.default)('.' + _class.username).val('');
	    (0, _jQuery2.default)('.' + _class.pwd).val('');
	    (0, _jQuery2.default)('.' + _class.pwdConfirm).val('');
	    (0, _jQuery2.default)('.' + _class.checkCode).val('');
	  });
	}

	(0, _jQuery2.default)(function () {

	  init();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Prevent adjustments of font size after orientation changes in IE and iOS.\n */\n\nhtml {\n  font-family: '\\5FAE\\8F6F\\96C5\\9ED1', sans-serif; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n * 2. Add the correct display in IE.\n */\n\narticle,\naside,\ndetails, /* 1 */\nfigcaption,\nfigure,\nfooter,\nheader,\nmain, /* 2 */\nmenu,\nnav,\nsection,\nsummary { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Add the correct display in IE 10-.\n * 1. Add the correct display in IE.\n */\n\ntemplate, /* 1 */\n[hidden] {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change font properties to `inherit` in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n  font: inherit; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Restore the font weight unset by the previous rule.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Correct the text style of placeholders in Chrome, Edge, and Safari.\n */\n\n::-webkit-input-placeholder {\n  color: inherit;\n  opacity: 0.54;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/* jianfeng_huang add */\n*{\n  margin: 0;\n  padding: 0;\n}\nul, ol, li{\n  list-style: none;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./common.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./common.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".clearfix:before, .clearfix:after{\n  content: '.';\n  display: block;\n  visibility: hidden;\n  height: 0;\n  clear: both;\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./login.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./login.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".login-box{\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -100px 0 0 -200px;\n  padding: 20px 30px;\n  width: 400px;\n  height: 200px;\n  border: 1px solid red;\n  border-radius: 4px;\n}\n.login-list li{\n  margin-top: 10px;\n}\n.login-list li label{\n  display: inline-block;\n  width: 80px;\n  text-align: justify;\n}\n.login-btn-box, .login-tips-box{\n  margin-top: 10px;\n}\n.login-btn-box button{\n  padding: 0 20px;\n  line-height: 24px;\n}\n", ""]);

	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./iconfont.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./iconfont.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n@font-face {font-family: \"iconfont\";\n  src: url(" + __webpack_require__(12) + "); /* IE9*/\n  src: url(" + __webpack_require__(12) + "#iefix) format('embedded-opentype'), \n  url(" + __webpack_require__(13) + ") format('woff'), \n  url(" + __webpack_require__(14) + ") format('truetype'), \n  url(" + __webpack_require__(15) + "#iconfont) format('svg'); /* iOS 4.1- */\n}\n\n.iconfont {\n  font-family:\"iconfont\" !important;\n  font-size:16px;\n  font-style:normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-sousuo:before { content: \"\\E600\"; }\n.icon-4duoyun:before { content: \"\\E601\"; }\n.icon-code1:before { content: \"\\E602\"; }\n.icon-code2:before { content: \"\\E603\"; }\n.icon-code:before { content: \"\\E604\"; }\n.icon-docss:before { content: \"\\E605\"; }\n.icon-dohtml:before { content: \"\\E606\"; }\n.icon-youhuiquan1:before { content: \"\\E607\"; }\n.icon-youhuiquan2:before { content: \"\\E608\"; }\n.icon-youhuiquan3:before { content: \"\\E609\"; }\n.icon-youhuiquan4:before { content: \"\\E60A\"; }\n.icon-youhuiquan5:before { content: \"\\E60B\"; }\n.icon-youhuiquan:before { content: \"\\E60C\"; }\n.icon-yulanyingyong:before { content: \"\\E60D\"; }\n.icon-zairuhuiyuan:before { content: \"\\E60E\"; }\n.icon-zanting1:before { content: \"\\E60F\"; }\n.icon-zanting2:before { content: \"\\E610\"; }\n.icon-zanting3:before { content: \"\\E611\"; }\n.icon-zanting:before { content: \"\\E612\"; }\n.icon-zanyang:before { content: \"\\E613\"; }\n.icon-zhantie:before { content: \"\\E614\"; }\n.icon-zhantie1:before { content: \"\\E615\"; }\n.icon-zhantie1:before { content: \"\\E616\"; }\n.icon-zhaoshangyinxing:before { content: \"\\E617\"; }\n.icon-zhaoxiangji1:before { content: \"\\E618\"; }\n.icon-zhaoxiangji:before { content: \"\\E619\"; }\n.icon-zheshangyinxing:before { content: \"\\E61A\"; }\n.icon-zhengshu:before { content: \"\\E61B\"; }\n.icon-zhongguoguangdayinxing:before { content: \"\\E61C\"; }\n.icon-zhongguojiansheyinxing:before { content: \"\\E61D\"; }\n.icon-zhongguominshengyinxing:before { content: \"\\E61E\"; }\n.icon-zhongguonongyeyinxing:before { content: \"\\E61F\"; }\n.icon-zhongguorenminyinxing:before { content: \"\\E620\"; }\n.icon-zhongguoyinxing:before { content: \"\\E621\"; }\n.icon-zhongping:before { content: \"\\E622\"; }\n.icon-zhongxinyinxing:before { content: \"\\E623\"; }\n.icon-zhuanjia:before { content: \"\\E624\"; }\n.icon-zibu:before { content: \"\\E625\"; }\n.icon-zixingche:before { content: \"\\E626\"; }\n.icon-ziti:before { content: \"\\E627\"; }\n.icon-zujian:before { content: \"\\E628\"; }\n.icon-zuoduiqi1:before { content: \"\\E629\"; }\n.icon-zuoduiqi:before { content: \"\\E62A\"; }\n", ""]);

	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "data:application/vnd.ms-fontobject;base64,XFwAAEBbAAABAAIAAAAAAAIABgMAAAAAAAABAPQBAAAAAExQAQAAAAAAABAAAAAAAAAAAAEAAAAAAAAAuujUNgAAAAAAAAAAAAAAAAAAAAAAABAAaQBjAG8AbgBmAG8AbgB0AAAADABNAGUAZABpAHUAbQAAAIwAVgBlAHIAcwBpAG8AbgAgADEALgAwACAAOwAgAHQAdABmAGEAdQB0AG8AaABpAG4AdAAgACgAdgAwAC4AOQA0ACkAIAAtAGwAIAA4ACAALQByACAANQAwACAALQBHACAAMgAwADAAIAAtAHgAIAAxADQAIAAtAHcAIAAiAEcAIgAgAC0AZgAgAC0AcwAAABAAaQBjAG8AbgBmAG8AbgB0AAAAAAAAAQAAAA8AgAADAHBGRlRNdAttVgAAAPwAAAAcT1MvMleUXPUAAAEYAAAAYGNtYXDLxiGvAAABeAAAAUpjdnQgDWX+qgAAUOwAAAAkZnBnbTD3npUAAFEQAAAJlmdhc3AAAAAQAABQ5AAAAAhnbHlm1B4QYQAAAsQAAEiAaGVhZAy7Dl4AAEtEAAAANmhoZWEJrAXqAABLfAAAACRobXR4tJYLxwAAS6AAAAC6bG9jYaRTtn4AAExcAAAAYG1heHACKQriAABMvAAAACBuYW1lCoDeGgAATNwAAAIucG9zdPfG42MAAE8MAAAB2HByZXClub5mAABaqAAAAJUAAAABAAAAAMw9os8AAAAA0+blQwAAAADT5uVDAAQEHwH0AAUAAAKZAswAAACPApkCzAAAAesAMwEJAAACAAYDAAAAAAAAAAAAARAAAAAAAAAAAAAAAFBmRWQAwAB45ioDgP+AAFwDgAClAAAAAQAAAAADGAAAAAAAIAABAAAAAwAAAAMAAAAcAAEAAAAAAEQAAwABAAAAHAAEACgAAAAGAAQAAQACAHjmKv//AAAAeOYA////ixoEAAEAAAAAAAAAAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAiAAABMgKqAAMABwApQCYAAAADAgADVwACAQECSwACAgFPBAEBAgFDAAAHBgUEAAMAAxEFDyszESERJzMRIyIBEO7MzAKq/VYiAmYAAAAFACz/4QO8AxgAFgAwADoAUgBeAXdLsBNQWEBKAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKBgleEQEMBgQGDF4ACwQLaQ8BCAAGDAgGWAAKBwUCBAsKBFkSAQ4ODVEADQ0KDkIbS7AXUFhASwIBAA0ODQAOZgADDgEOA14AAQgIAVwQAQkICggJCmYRAQwGBAYMXgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtLsBhQWEBMAgEADQ4NAA5mAAMOAQ4DXgABCAgBXBABCQgKCAkKZhEBDAYEBgwEZgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQhtATgIBAA0ODQAOZgADDgEOAwFmAAEIDgEIZBABCQgKCAkKZhEBDAYEBgwEZgALBAtpDwEIAAYMCAZYAAoHBQIECwoEWRIBDg4NUQANDQoOQllZWUAoU1M7OzIxFxdTXlNeW1g7UjtSS0M3NTE6MjoXMBcwURExGBEoFUATFisBBisBIg4CHQEhNTQmNTQuAisBFSEFFRQWFA4CIwYmKwEnIQcrASInIi4CPQEXIgYUFjMyNjQmFwYHDgMeATsGMjYnLgEnJicBNTQ+AjsBMhYdAQEZGxpTEiUcEgOQAQoYJx6F/koCogEVHyMODh8OIC3+SSwdIhQZGSATCHcMEhIMDRISjAgGBQsEAgQPDiVDUVBAJBcWCQUJBQUG/qQFDxoVvB8pAh8BDBknGkwpEBwEDSAbEmGINBc6OiUXCQEBgIABExsgDqc/ERoRERoRfBoWEyQOEA0IGBoNIxETFAF35AsYEwwdJuMAAAMAM/9bA8wC+wALABwAHQAuQCsdDwwDAQABQA4NAgM9AAIAAAECAFkAAQMDAU0AAQEDUQADAQNFJRoVEwQSKzY0PgEyHgEUDgEiJgUXNyc2NTQuASIOARQeATMyN2dip8aoYmKoxqcCELw3vGRwv+O/cHC/cZRy98aoYmKoxqdiYjm8N7t1mXHAb2/A4sBvXAAAAAAIAAD/gAUXA4AAGQApADkARgBWAGYAdgCGAGZAYzwBAgUNAQcBQhQIAwAHA0AAAgUGBQIGZgAECgEDBQQDWQsBBQAGCAUGWQABBwABTQAIAAcACAdZAAEBAFIJAQABAEY7OiwqAwB1cm1qQD46RjtGNDEqOSw5EQ8MCgAZAxkMDisFISMiJjU0Njc+ATMyFz4BMzIeARceARUUBgEOAS8BLgE/AT4BHwEeAQ8BIyImPQE0NjsBMhYdARQGBzIXBgcjIgYHJjU0NicGJi8BJjY/ATYWHwEWBg8BDgEvAS4BPwE+AR8BHgEPARUUBisBIiY9ATQ2OwEyFgc2Fh8BFgYPAQYmLwEmNjcETP06AVR3TDwCYkUVFSyeXlubWwI8S3f96gcXCgEKBAcqBxcJAgoEB+sCCxAQCwILEBAMY0VMMg5QexAqiToKFwcqBgQJAgoXBykHBApxBhgMSQsJBgEFGQtJDAgFKhMOUw4TEw5TDhMBDBgGAQUIDEkLGQUBBgkLgHdTQmgVRV8FT19ZmVsVaEFUdwNQDAgFAQYYDEkLCQYBBRkLLhMOUw4TEw5TDhNKSCxHZU48SWCJIAUIDEkLGQUBBgkLSQwYBnEKBAcqBhgJAgkFByoHFwqZAgsQEAsCCxAQngcECgEKFwcqBwQKAgkXBwAAAAAOAED/wQPCA0EAAQADAB4AJABAAEYAUABaAHYAfACmAK4AtAC8AeJAIigdAgUCQQEEBSkcAgMEfV8CDw1+ARQPgwEQEbZeAgwOB0BLsBhQWEBZGgEBAwADAV4AAA0NAFwGAQILAQUEAgVZCgEECQgHAwMBBANZAA8UDQ9OFRMCDQAREA0RWgAUABAXFBBYGxkCFxcMTxgWEgMMDAtBAA4ODE8YFhIDDAwLDEIbS7AmUFhAVxoBAQMAAwFeAAANDQBcBgECCwEFBAIFWQoBBAkIBwMDAQQDWQAPFA0PThUTAg0AERANEVoAFAAQFxQQWBsZAhcODBdLAA4MDA5LAA4ODE8YFhIDDA4MQxtLsCpQWEBYGgEBAwADAV4AAA0DAA1kBgECCwEFBAIFWQoBBAkIBwMDAQQDWQAPFA0PThUTAg0AERANEVoAFAAQFxQQWBsZAhcODBdLAA4MDA5LAA4ODE8YFhIDDA4MQxtAWRoBAQMAAwEAZgAADQMADWQGAQILAQUEAgVZCgEECQgHAwMBBANZAA8UDQ9OFRMCDQAREA0RWgAUABAXFBBYGxkCFw4MF0sADgwMDksADg4MTxgWEgMMDgxDWVlZQD21tQAAtby1vLm4tLOwr6WjoJ+emoqJhoSCgXx6eXhpYlxbRkRDQjMyMS4tLCYlJCIhIBkSBQQAAQABEBwPKxMhAREFIR4DBh0BFBYUDgMmKwEiBi4CJxE2FxUhNSEiJSEWFxEGBw4BJisBIgYmJy4DNj0BNCY0PgEXFSE1ISIFNhYVFgYnLgE2JTYXFgcGJy4BNgEhJicRNjc+ARY7ATI2FhceAwYdARQWDgIBFSE1ISIlFQYWByE1JisBBhYHIy4CNDY9ATQmNjc+BDsDFTM2JjcyHgEFNhYHDgEmNgUjNCY3OwEVBgcjNTQ3QQOB/j/+WwFmCw0EAQEBAwoRIS4FvggnFBwOAghFAQP+/gEBsAFnFwUGFAofKQi4CCogCgkLAwEBAQUNPQEC/v8C/pUbJgE1GhQMFQH5LQ8MFRIhGRUU/vb+nRcGBxELHikIuQcpIAsKCwQBAgICBA/+wgED/v4BAzMCAQH/AAYhKAIBAS8LDgUBAgEDAQcLCBIEDw+vUAEBARUhFv1LHSULCjkqEQIxVwECVqsFGD4BAYL+PwOADQENHBIoBb8HJBIZDwcBAwIBBA0KAV0VSfj8SwgX/qwZBQMBAwMBAwIQGxUmB7IIKRQbDk34/EwEHRgfHg4JKycFCCUgGBUFBC4u/TQHFQFcFQQDAQICAQMCEBsUJga4BykTGw0BQ/n8LGEIWAk5ARO7FQIPGxUnCLMIKR8KBQgFAgKaDn8NAQ+HAy0cGgomQPgITAY7GAcuJgYAAAAAAgAAAFkEAAKlAA0AGgAItRkRDQkCJisBFhQPARcWFAcGJwkBNgUJAQYnJj8BJyY3NhcBhRER/PwRER8e/rgBSB4BVAFG/rogHyEh/v4hIR8gAqUOJQ3l5w0lDh8fAScBJR8f/tv+2R8fIR/n5R8hHx8AAAAFAAD/gAQAA4AADAAhADYATABiAF5AWxIPDgMLDQENCwFmCAEFAAQABQRmEQEMEAENCwwNWQABAgEABQEAWQkBBAMDBE0JAQQEA1EKBwYDAwQDRWJhXFlWU05NTEtGQ0A9ODc2NTIvFSEVFTMhEzMgExcrASEiJjQ2MyEyFhQGIwMjIiY0NjsBMjY9ATQ2MhYdARQGIyEjIiY9ATQ2MhYdARQWOwEyFhQGIwEiJj0BNDY7ATIWFAYrASIGHQEUBiMhIiY9ATQmKwEiJjQ2OwEyFh0BFAYjA9j8UBEXFxEDsBAXFxBO7BEXFxHsEBcXIRdFMf2xxTFFFyEXFxDFEBcXEP7sEBdFMcUQFxcQxRAXFxEDshEXFxDsERcXEewxRRcQAVkXIBcXIBf+JxchFxcQxRAXFxDFMUVFMcUQFxcQxRAXFyEXAp4XEMUxRRchFxcQxRAXFxDFEBcXIRdFMcUQFwAAAAQAjgBnBYIC3wAXAD0AdwC0AP1AEYaFSkksKxsHCQOvGgICCQJAS7ALUFhAOg4BCQMCAwkCZhABAAwHAgQGAARZCwEDDQECCAMCWQAGAAgFBghZDwoCBQEBBU0PCgIFBQFRAAEFAUUbS7AMUFhAOQ4BCQMCAwkCZhABAAwHAgQDAARZDQECCAMCTQsGAgMACAUDCFkPCgIFAQEFTQ8KAgUFAVEAAQUBRRtAOg4BCQMCAwkCZhABAAwHAgQGAARZCwEDDQECCAMCWQAGAAgFBghZDwoCBQEBBU0PCgIFBQFRAAEFAUVZWUAmAQCrqaWkoJ6MioF/b21paGRiUE5FQz07MS8pJx8dDQoAFwEWEQ4rATIeAhURFA4CIyEiLgI1ETQ+AjMBNjcnDgEjIi4CNTQ+AjMyFhc3JicmIyIHBgcGFRQXFhcWMzIlLgE1NDYzMh4CFzc0LgIjIg4CFRQeAhceAx0BFA4BIyIuAjUjFB4CMzI+AjU0LgIlLgM1NDYzMh4CFzc0LgIjIg4CFRQeAhceAxUUDgIjIi4CNSMUHgIzMj4CNTA1NC4BBQEaMCMUFCMwGvwPGy8kFBQkLxsBCCQOMgouJQMgJB4HFikjISENNw4iIzIsJiYTFRIRIyE4NQE3LCQkKhMXEAoGKgQYMCstMxoHHyknCBkfEQULGhsgIxACMgUbOjYPJR8WBBYtASwcHhADISkUFQsHBzMFFzArLDUZBx8oJwkdHgwBAwwYEyAhDgE4Bhs6NQ8lIBUULwLfFCMwG/6MHC4kFBQkLhwBdBswIxT+NR03ECsdAxYxLwUlJyAcHBAvGRoUFiYnNS8rKRcXyA0VEhUXBg0TDQQCISMeFh4fChwlFwsDBxAPDQUSCQwIDRMWChAnIxkFFCglBxgcHAsHCgwNChUVBQwTDQQCISMeFh4fChwoGg0CCA0MCwUKDgsGERQSAwQlKSEJFyYgEw0cGwAAAAUAkgCpBc4C7QAXACMAKwA4AD4A10ALNjMCAwkuAREGAkBLsApQWEBGCwEJAgMCCQNmAAMGAgNcAAYRBQZcABEFAhEFZBQBABINDAgEBQIJAAJXExAPDgoHBgUBAQVLExAPDgoHBgUFAVIAAQUBRhtASAsBCQIDAgkDZgADBgIDBmQABhECBhFkABEFAhEFZBQBABINDAgEBQIJAAJXExAPDgoHBgUBAQVLExAPDgoHBgUFAVIAAQUBRllALgEAPj08Ozo5ODc1NDIxMC8tLCsqKSgnJiUkIyIhIB8eHRwbGhkYDQoAFwEWFQ4rATIeAhURFA4CIyEiLgI1ETQ+AjMXIxUjNSMRMzUzFTMBIxUzETMRMyUjBycjETM1FzM3FTMlIxEjETMFVxgsIBMTICwY+7IZKyESEiErGe4shi0thiwBDN9ZLVkBZUZSWUYrVDVXLAENhyyzAu0TICsZ/qoZKiETEyEqGQFWGSsgE4GIiP7Eg4MBOi/+9AEML+fn/sXm5uLiLgEM/sYAAAIAEgAzA+4CzQAPACsBJkuwDFBYQEsSBQIBDg8OAV4ADw0ODw1kExECDQYODQZkBAECBwgJAl4KAQgJCQhcAAAQAQ4BAA5XDAEGCwEHAgYHVwAJAwMJSwAJCQNQAAMJA0QbS7AOUFhATRIFAgEODw4BD2YADw0ODw1kExECDQYODQZkBAECBwgHAghmCgEICQkIXAAAEAEOAQAOVwwBBgsBBwIGB1cACQMDCUsACQkDUAADCQNEG0BOEgUCAQ4PDgEPZgAPDQ4PDWQTEQINBg4NBmQEAQIHCAcCCGYKAQgJBwgJZAAAEAEOAQAOVwwBBgsBBwIGB1cACQMDCUsACQkDUAADCQNEWVlAKRAQAAAQKxArKikmJSIhIB8eHRwbGhkYFxYVFBMSEQAPAA8RERMRERQTKwE1IRUyFhQGIxUhNSImNDYFFSMVMxUjFSM1IzUzNSM1MyczFxYXMzY/ATMHA+78JDdOTjcD3DdOTv7Yb29vPXNzc2F2RVMHCAIGClNBeAICy8tMbEzLy0xsTG4wQjBfXzBCMNioDxURFKfYAAAAABEAAP+ABAADgAAxAFgAWQCZAJoAqACpALcAuADGAMcA1QDWAOIA4wDwAPECKEBU8fDkAx0fMS4CAwAsARUDqTMrAxYJOSUCFxa4AQoXQB4CGApBHQIFB8cBBAWaRxcDGgRIFgIbENZOEAMcG08PAgIRCwEBAg5A4wEdWQEDOiQCFwM/S7AfUFhAeCAkHgMdHwAfHQBmABUDCQMVXgsBCRYDCRZkAAoXGBcKGGYAHBsRAhxeACEAHx0hH1kAACIBAxUAA1kAFgAXChYXWQAYBwUYTQwIAgcZDQYDBQQHBVojFA8OBAQTEgIQGwQQWQAaABscGhtZAAIAAQIBVgAREQsRQhtLsCFQWEB5ICQeAx0fAB8dAGYAFQMJAxVeCwEJFgMJFmQAChcYFwoYZgAcGxEbHBFmACEAHx0hH1kAACIBAxUAA1kAFgAXChYXWQAYBwUYTQwIAgcZDQYDBQQHBVojFA8OBAQTEgIQGwQQWQAaABscGhtZAAIAAQIBVgAREQsRQhtAeiAkHgMdHwAfHQBmABUDCQMVCWYLAQkWAwkWZAAKFxgXChhmABwbERscEWYAIQAfHSEfWQAAIgEDFQADWQAWABcKFhdZABgHBRhNDAgCBxkNBgMFBAcFWiMUDw4EBBMSAhAbBBBZABoAGxwaG1kAAgABAgFWABERCxFCWVlAUNfXWloyMu7t6+rn5tfi1+Ld3NPRzMrEwr27tbOurKakn51amVqZlpWUk4+OioiFhIOCgX98enVzcXBta2ZlZGNgX15dXFsyWDJXUlAlICUQKwEhIgYVERQWMyEmNSY2PwE1JjU0Nj8BNSY1NDY/ATUmNTQ2PwE1JjU0Nj8BNSY1JjY3BxUGFRQWHwEVBhUUFh8BFQYVFBYfARUGFRQWHwEVByEiJjURPgEzIQE1IzUzMTI2NCYjMSM3NjU0JiMiBwYHIycmIyIGFRQfASMiBhQWOwEVIxUiBhQWOwEdARQWMjY9AjMxMjY0JiMTNDYzMhYdARQGIyImPQEVNDYzMhYdARQGIyImPQEVNDYzMhYdARQGIyImPQEVNDYzMhYdARQGIyImPQEBNz4BHwEzJSYGDwEzPwE+AR8CMyUmBg8BFwPu/JY3TU03A2wKAQ4GBxoNBgcaDQYHGg0GBxoNBgcaAQUCNBsNBwcbDQcHGw0HBxsNBwcJ/M0WKgEfEANM/lBoaAkNDQlZYQYRDBUHVAQBXAcUDBEFYVoKDQ0Ka2sKDQ0KaxAYEGgKDQ0JtxINDBMTDA0SEg0MExMMDRISDQwTEwwNEhINDBMTDA0S/hYaBiYQ77P+hDNiEh1I0y4LKA7KZSn+3SlpITVEAj5HMv41M0cZDgYWBwgrHA8GFQgHKx0OBxUHCCscDwYWBwgqHQ4HFQgHKx0OBgsBNTMcDwYWBwgqHQ4HFQgHKx0OBhYHCCscDwYVCAgsGDIgAcoPJP6BAT8NEw2zCAkMEROkC68TEQwJB7QNEw0/AQ0SDlsGCxERCwZbDhINAT4LDw8LJgoPDwomjAsPDwsmCg8PCiaMCg8PCiYLDw8LJowKDw8KJgsPDwsmAkREDQ8GWpATJy9NmzcKAguuJvkkBCY+GQAGAE4AOgOtAs0ALQA9AE0AXQBpAHUAgkB/GhkCCwMBQAAACAkIAAlmAAMKCwoDC2YAAQAFBgEFWQAGAAcMBgdZEQEMAA0IDA1ZAAgACQ4ICVkSAQ4ADwoOD1kQAQoACwQKC1kABAICBE0ABAQCUQACBAJFbGpgXlBOcm9qdWx1ZmNeaWBpWFVOXVBdS0g1NTc1RhU1NRATFysAMjY9ATQmIyEiBhURFBYzITI2PQE0JiIGFTEVFAYjKQEiJjURNDYzITIWHQEUJTQmKwEiBh0BFBY7ATI2NRU0JisBIgYdARQWOwEyNjUHIyIGHQEUFjsBMjY9ATQmJSEiBhQWMyEyNjQmByEiBhQWMyEyNjQmA48RDTAi/UUiMDAiArsiMA0RDRkS/k7+/xEaGhECsxIZ/ZsHBTkFBwcFOQUHBwU5BQcHBTkFBww5BQcHBTkFBwcCA/5CCQ0NCQG+CQ0NCf5CCQ0NCQG+CQ0NAXcMCe8iMDAi/hEiMDAiWwkMDAlXEhkZEgHnERoaEesJrgUHBwU5BQcHBVoFBgYFOgUGBgVOBwU6BAcHBDoFB8YMEg0NEgyRDBINDRIMAAQA0P/3AysDEwAhAD4ASQCAAKBADFpGREI2NDIHBgMBQEuwF1BYQDMACwoCCgsCZgcBBggBBQQGBVkJDgIEDAEKCwQKWQ0BAwMAUQAAAApBAAICAVEAAQELAUIbQDAACwoCCgsCZgcBBggBBQQGBVkJDgIEDAEKCwQKWQACAAECAVUNAQMDAFEAAAAKA0JZQCFLSkA/fXt2dXBua2loZmNhU1FOTEqAS4A/SUBIWl00DxErASYnLgEjISIGBwYHBhURFBcWFx4BOwEhMzI2NzY3NjURNAMGKwEhIyInJj0HHwE/AR0GFAMyFhcPAS8BPgEzASM1MzI2NCYrAT8BNiYPAi8BJgYfAiMiBhQWOwEVIyIGFBY7AR0CFBYyNj0DMzI2NCYDKgMGDj0m/pslPQ8GAgIHBQkQNiALAVIIIDYRCgUFPBskCP6uCyQaHmemp2lcHS8KomhnoAovHQEyb24HCQkHXjksCxYLQTAxQQsWCyw6WwYJCQZwbwYJCQZvCQ0JbwcJCQKrDw8hKSkiDhAJCf3ZFRMPDBkeHhkPEhERAicJ/Y0YGBsoHAXuX4A5ATpdXTsCOYBf7gUcKAKrIBpbOjpaGiH98kEJDQk6LAsVC0ExMUELFQssOgkNCUEJDQk1BRsGCQkGGwU1CQ0JAAAGAA7/jwPyA3MAEQAjACQAbAByAHMAnkCbY2JdXFhWVQcMBCQBFAlJRSsnBAcURzQpAwYHQD4yAwMGBUBzARQBPw8ODQMMBAsEDAtmAgEAAAQMAARZEAELEQEKCQsKVxMVEgMJFgEUBwkUVwgBBwAGAwcGWQUBAwEBA00FAQMDAVIAAQMBRm1tJSVtcm1ycG8lbCVsa2poZ2ZlYF9aWVNSUVBOTUxLREM7Ojc1FxcRFxcQFxQrASIOAhQeAjI+AjQuAiMRIi4CND4CMh4CFA4CIxMnFhcGByYnDgEHBgcGJyYnFjMyNzY3Iw4BByYnPgE3IzUGByYnNjcjNTM2NyM1MyYnNxYXBzM2NxcGBzM2NxcGBzMVIwYHIRUHJicjBgchAgBluYVPT4W5yrmFT0+FuWVapHdGRnektKR3RkZ3pFqWIkVvDxAwNAYPDg4cIjMBDSIsEQcRCZoOVl8KEVVMDWMrKQgWWkGJrhYUsWoSIiYmESJTFggyChNMJRgrHB1n9BMSAUSKLB6PIisBJgNzT4W5yrmFT0+Fucq5hU/8U0Z3pLSkd0ZGd6S0pHdGAY9KTB0MGw4hYVcODwMDBBcWBAYRgE1gGxkQFE0+FxwTFRInQisbJiomKBMsIxI1PAU3NS8wDi8iKigZK0wiKioiAAAAAAMAQAALA8AC9QAmAEIAfwBkQGFLPjUDBAMwJwIJCAJAAAkIAggJAmYAAAADBAADWQUNAgQMAQYHBAZZCwEHCgEICQcIWQACAQECTQACAgFRAAECAUVEQ3p4d3VwbmtoZWNeXFtZVFJDf0R/OzgtKhwZNg4PKwE+AT0BNCYjISIGHQEUFhceARUUBwYdARQWMyEyNj0BNCYnLgE0NhcVFAYjISImPQE+ATQmJzU0NjMhMhYdAQ4BFBYnIzc2LwEmDwEnJg8BBh8BIyIGHQEUFjsBFSMiBh0BFBY7ARUUFjsBMjY9ATMyNj0BNCYrATUzMjY9ATQmA6cRCCwf/RYfLAkQHyxJGywfAuofLAoPKSIhER0V/UgVHSw3NywdFQK4FR0sNzfZXmYICBAICHFxCAgQCAhmXgUHBwVwcAUHBwVwBwYYBgdwBQcHBXBwBQcHAeQLFBKWHiwsHpYTFggPMiNLGBEhlh4sLB6WExMLFitFK9mGFB0dFIYQTGBMEIYUHR0UhhBMYEyubQkJEQkJeXkJCREJCG4IBRkFBzIHBRkFCFcFBwcFVwgFGQUHMgcFGQUIAAADALkAOQNHAscAAwAHAAoAMUAuCgkIAwIDAUAEAQEAAwIBA1cAAgAAAksAAgIATwAAAgBDAAAHBgUEAAMAAxEFDysTESERAyERIQURN7kCjkH99AIM/pjlAsf9cgKO/bMCDGL+uKQAAAkAJ/+AA9kDgAAQABgAIAApADIAOwBEAEwATQBsQGlNAQwKAUAABgAEAAYEZgAHAQIBBwJmAAQABQEEBVkAAAABBwABWQAIAAkDCAlZAAIAAw4CA1kACgALDwoLWQAMAA0MDVUADg4PUgAPDwsPQkxLSEdDQj8+Ojk2NTEwFRMSExMTFhcUEBcrATQ+AjIeAhQOAiIuAgA0NjIWFAYiADQ2MhYUBiIlJiIGFBYyNjQBNDYyFhQGIiYDNDYyFhQGIiYFNDYyFhQGIiYkNDYyFhQGIicBihgsOj86LBgYLDo/OiwY/p1GYUZGYQK6DBAMDBD+OiVoSkpoSQH5FyEXFyEXiCMxIyMxI/7XLkEuLkEu/tg6UTo6UToC4iA6LBgYLDo/OiwYGCw6/mViRUViRgGCEAwMEAttJUppSkpp/rgQFxchFxf++xgjIzEjI1sgLy9BLi5uUjk5UjliAAQAAP+ABAADgAAPAB8ANAA+AD9APD47AgYEKAEFBgJAAAYEBQQGBWYAAAADBAADWQAEAAUCBAVZAAIBAQJNAAICAVEAAQIBRRkmKhcXFxAHFSsAIg4CFB4CMj4CNC4BAiIuAjQ+AjIeAhQOAQMlJyYjIgYVERceATMyNyU3PgInBQYjJjURNTYXBQJo0L6JUVGJvtC+iVFRicu2pnhHR3imtqZ4R0d4Gv7oBBcYHiMBBiEZEhMBFQMKDwQL/rgEAwEJDAEBA4BRib7QvolRUYm+0L6J/JFHeKa2pnhHR3imtqZ4AaGrAgolHv67BREfCp0CBxkjErsDAQEBOAMBBZ0AAAAAAQDzACEDDgM5ABMAF0AUAAABAQBNAAAAAVEAAQABRRkhAhArASYjIgcGBwYVEQYXFjI3ATY1NCcBMgsQDAkDAgoBCwseCgHTCwsDLA0HAgILFv1AFgsLCwFmCxAPCwAAAwB8//wDhAMEAAsADwATAFZLsBpQWEAWBwUGAwMAAQMBVQQBAgIAUQAAAAoCQhtAHwAABAECAwACVwcFBgMDAQEDSwcFBgMDAwFRAAEDAUVZQBMQEAwMEBMQExIRDA8MDxYVEAgRKwAiDgEUHgEyPgE0JgERMxEzETMRAmnSs2hos9KzaGj+LYRmhAMEaLPSs2hos9Kz/gYBvP5EAbz+RAAAAAAEAED/wAPAA0AADwAbAB8AIwA2QDMGAQQDBQMEBWYHAQUCAwUCZAAAAAMEAANZAAIBAQJNAAICAVIAAQIBRhERERUVFxcQCBYrACIOAhQeAjI+AjQuAQIiLgE0PgEyHgEUBgEzESMTMxEjAlu2pnhHR3imtqZ4R0d4kOLAb2/A4sBvb/5PYGCgYGADQEd4prameEdHeKa2pnj852/A4sBvb8DiwAGx/wABAP8AAAAAAAEAgf+AA54DeQBAAE1ASjgBCAcBQAAHCAdoAAMCBAIDBGYABAUCBAVkAAUGAgUGZAAGBmcACAAAAQgAWQABAgIBTQABAQJRAAIBAkU/PTY0RhAWECMQJAkVKwEUDgIrATIWFAYrATIWFRQOAiMyFhUUDgIrAiIuAjURND4CNz4FNT4DMzIWFxYHDgEHITIWA54OFR8QHiIwMCIfIzASICkVISoXJCkQt/YhOCoYAwwaFRU0OTUrGQEPFxwOJTILAggGHiABKSIwAa8QHhcNLUEwLyARHRYMMCEVHRQJFic4IwE5FCkkHgkIIS04P0MjHykaCy0zLDIqZDEsAAQAgQACA38DAAAVAC4ANAA6AVVACzYBDAkBQDkBCwE/S7ALUFhAQwACAQECXAYBBAEAAQQAZgAHCwoLBwpmAwEBDgEABQEAWgAFAAgJBQhYDw0CCQAMCwkMVwALBwoLSwALCwpQAAoLCkQbS7AWUFhAOgYBBAEAAQQAZgAHCwoLBwpmAwEBDgEABQEAWgAFAAgJBQhYDw0CCQAMCwkMVwALAAoLClQAAgIKAkIbS7AbUFhAQwACAQECXAYBBAEAAQQAZgAHCwoLBwpmAwEBDgEABQEAWgAFAAgJBQhYDw0CCQAMCwkMVwALBwoLSwALCwpQAAoLCkQbQEIAAgECaAYBBAEAAQQAZgAHCwoLBwpmAwEBDgEABQEAWgAFAAgJBQhYDw0CCQAMCwkMVwALBwoLSwALCwpQAAoLCkRZWVlAJjU1AgA1OjU6ODc0MzIxMC8uLSwqJSMgHRoYEA4MCwkHABUCFRAOKwEzMjY9ATQmKwE0JiIGFSMiBh0BFBYlNCYrARUUBiMhIiY9ASMiBhURFBYzIREzFyMRITUjNRcVMxc1AUDAFBwcFDAcKBwwFBwcAZQdEzAcFP7gFBwwExwcEwEg8C/vAX+QMDAwAkEcFDATHRMcHBMdEzAUHDAUHGAUHBwUYBwU/iEUHAFPMP6B75AwMDCQAAYAGP+AA+gDgAAwADcARgBhAGUAaQEPQApPAREGKAEHEQJAS7AlUFhAXwADAgIDXAATEhQSExRmABYVDxUWD2YAEA8GDxAGZgQBAgkBCAECCFgACgAMAAoMWQ4XAgAAEhMAElkAFAAVFhQVVxgBDwAGEQ8GWQARAAcRB1YNAQsLAVEFAQEBCgtCG0BeAAMCA2gAExIUEhMUZgAWFQ8VFg9mABAPBg8QBmYEAQIJAQgBAghYAAoADAAKDFkOFwIAABITABJZABQAFRYUFVcYAQ8ABhEPBlkAEQAHEQdWDQELCwFRBQEBAQoLQllAODg4AQBpaGdmZWRjYl9cV1VMSThGOEZDQUA/Pjs6OTc2NTQzMSQhHhwXFRMRDg0KCAYEADABMBkOKwEjNTQmKwE0JisBJicmIgcGByMiBhUjIgYVERQWOwEVFBYzITI2NzYHNjc+ATURNCYlMzcVMxUjAxEzFjsBMjczFSMiBhURBRQGKwEiBh0BMBUUDgEHISImNRE0NjMhMhYVBSEVIRUzFSMDgLs8K0QpHCsEBxM8EgcEKx0oRCs8PCvyPSwBPRMqJhkZCxwnID39XUQiZ82JThQnzScUToQsPQIuChVPChADCQb+6RUfHxUBfRYe/mIBWf6n7e0CPnUqPB0oCAcTEwcIKB08Kv25KjweKz0gJxoZCxsnKRMBhSs92wICRP2XAkcjI3U9LP6XARMHEAo5EgURCQIfFgG+Fh4eFl1LS0sABADZADkDJwLHAAUACAAOABQAU0BQBgEAAT8AAAYDBgADZgADAgYDAmQACAIFAggFZgAFAQIFAWQABwAJBAcJVwAEAAYABAZXAAIIAQJLAAICAVAAAQIBRBQTERERERESEREQChcrASERIREjNxUzJyERMxEhJyERMxEhAmL++gHLxSGk5v7aIQEFQf7ZIQEGAkT99QFHxKPl/fQB62L99QHrAAAIAAj/iQPvA28AGAAdACIAKQAuADMAOAA9AQtAFgcFAgEAPDkCBQEGAQYFPQsIAxEDBEBLsApQWEBdEgEAAQBoAAEFAWgABQYFaAAQDwMPEANmAAMRDwMRZAARAgIRXAAGAAcIBgdXAAgACQoICVcACgALDAoLVwAMAA0ODA1XAA4ADxAOD1cAAgQEAksAAgIEUgAEAgRGG0BeEgEAAQBoAAEFAWgABQYFaAAQDwMPEANmAAMRDwMRZAARAg8RAmQABgAHCAYHVwAIAAkKCAlXAAoACwwKC1cADAANDgwNVwAOAA8QDg9XAAIEBAJLAAICBFIABAIERllAKgEAOzo3NjU0MjEwLy0sKyomJSQjISAfHhwbGhkRDw0MCgkEAwAYARgTDisBMgQXIwsDFyU3JzMGBCMiLgI0PgIBIxczJhcjFzMmFyMXMz0BNAcjFzM2ByMXMzYHIxczNgEDJQsBAfynAQkv24GEmPlmAl5kEFA0/v6gZrmGT0+GuQJM1gjSAgbMC8QBArsJswGoC5sCBY4LfwIIbwhiA/1ekgJDlYcDb8mdAS/+qwE//YmSBZImlLlPhrnKuYZP/n0UCyIaDSQXAQIJIxoNJBkMIxQKAQb+qAMBXv6jAAAAAAUAAP/uBAADNwAHAA8AFwAvADsAoEuwJlBYQDYABwALBgcLVwgOAgYMAQoABgpZAAUDAAVNBAEAAAMCAANZAAIAAQ0CAVkPAQ0NCVEACQkLCUIbQDwABwALBgcLVwgOAgYMAQoABgpZAAUDAAVNBAEAAAMCAANZAAIAAQ0CAVkPAQ0JCQ1LDwENDQlRAAkNCUVZQCAwMBkYMDswOzo4NjUzMSonIiAeGxgvGS8TExMTExAQFCsAIgYUFjI2NAIiJjQ2MhYUEiIGFBYyNjQ3IycmIyEiDwEjIgYVERQWMyEyNjURNCYBETMyPwEzFxY7ARECatSWltSWvIhhYYhhsx4VFR4WScg+CxT+3BQLPsgeKyseA24eKyv8dNwTCz7+PgsT3AJbltSWltT+8mCIYWGIAUQVHhYWHoNeEBBeKx79tx4rKx4CSR4r/W4CSRBeXhD9twADAAH/+gP9AwsABwAfACcAcEuwJlBYQCQECAICAwcDAgdmAAAAAQYAAVkABgAFBgVWAAcHA1EAAwMKB0IbQCoECAICAwcDAgdmAAMABwADB1kAAAABBgABWQAGBQUGTQAGBgVSAAUGBUZZQBQJCCUkISAaFxIQDgsIHwkfExAJECsAIgYUFjI2NBMjNCYrASIGFSMiBhURFBYzITI2NRE0JgAiJjQ2MhYUAjRtTk5tTvaZTTe4N02ZN05ONwLyN05O/rHCiorCiQHFTm1OTm0BEDdNTTdON/59N05ONwGDN079z4nCiorCAAAAAAYAAP+ABAADgAAPABMAFwAnACsALwARQA4uLCooJiIWFBIQDQEGJisBByc3FzcBBxcHJzcXNwEHJSc3FwcnNxcHJwcBNyc3FwcnBwE3JzcfAgcnNxcHJwQAWONVSQ/+3A5LVfFYXVkBqVn+J/Bc8cjxXfHGTA4BJA5JW+NaXWP+V2NdWvD7413jyONc4wE1W9hZRg8BFw9IWeZbWV3+a10+5WDl0OZg5s1ID/7pD0Ze2V1ZZwGWZlld5RrYYNjQ2WDZAAAGAH//tgN7AzQACQATAE0AfgCGAI4Ag0CAbWllMy4FCAVxYQIJCHVdQj0lIAYKCXlZAgcKDg0HBgQGB31VUUwXExICAQkABgZAEQoDAAQBPQAFCAVoCwEGBwAHBgBmAAgACQoICVoACgAHBgoHWQMBAAEBAEsDAQAAAU8EAgIBAAFDT06Mi4iHhIOAf05+T34xMBQTEhMUDBMrBSc3Fz8BJzcXBwUvATcXBx8BNxcWIi8BBwYmLwImPwEnJjQ/AScmNj8CNh8BNzYyHwE3NhYfAh4BDwEXFhQPARcWBg8CDgEvAQcnMh8BNzYfATc2PwEnJj8BJyY/AScmLwEHBi8BBwYvAQcGDwEXFg8BFxYPARcWHwE3NiImNDYyFhQmIgYUFjI2NAKfdi5ILldILnGP/nVNj3MuSlcuSC4zFAhCWgoRBBlXFgQSPgYGPhICCgpXGQkTWkMHFAZCWgoQAhpXCQsCEj0GBj0SAgsJUBkEEQpaQl8KCDs7CQ5PFwUNTQ8ECTY2CgUPTwwEF08KDTs7CQ5PFwQMTw8ECTg2CQQQTQ8DF1CZimFhimFsdFNTdFNKxRl9SAV9GsUKdnYKxRp9BUh9GUgIPRQCCgpXGQkWWkIIFAZCWgkRAiFVFQMSPQYGPRIBCglVHAQQCFpCCBQGQloJEgMfVwoKAhQ9cwg4OAoEEkwPAxdQCg07OwkOTxoDDEoPBAk9NQoEEE0MAxpPCww+OwkOTxcFDU0SX2GKYmKK0lNzVFRzAAAAAAIAnP/BA2MDQABgAGEB/7NhAQA+S7AXUFhAjAAAAAECAAFXAAQABQYEBVcABgAHCAYHVwAIAAkKCAlXAAoACwwKC1cADAANDgwNVwAOAA8QDg9XABAAERIQEVcAEgATFBITVwAUABUWFBVXABYAFxgWF1cAGAAZGhgZVwAaABscGhtXABwAHR4cHVcAIAAhICFTAAMDAk8AAgIKQQAeHh9PAB8fCx9CG0uwIFBYQIoAAAABAgABVwAEAAUGBAVXAAYABwgGB1cACAAJCggJVwAKAAsMCgtXAAwADQ4MDVcADgAPEA4PVwAQABESEBFXABIAExQSE1cAFAAVFhQVVwAWABcYFhdXABgAGRoYGVcAGgAbHBobVwAcAB0eHB1XAB4AHyAeH1cAIAAhICFTAAMDAk8AAgIKA0IbQJAAAAABAgABVwACAAMEAgNXAAQABQYEBVcABgAHCAYHVwAIAAkKCAlXAAoACwwKC1cADAANDgwNVwAOAA8QDg9XABAAERIQEVcAEgATFBITVwAUABUWFBVXABYAFxgWF1cAGAAZGhgZVwAaABscGhtXABwAHR4cHVcAHgAfIB4fVwAgISEgSwAgICFPACEgIUNZWUA9XFhWVVRTUVBPTkxLSklFRENCQD8+PTs6OTg2NTQzMTAvLiwrKiknJiUkIiEgHx0cGxoREhESERIREkAiFysTOwEhMxYXIxUzFhcjFTMWFyEVIRYVIRUhFAchFSEGByEVIQYHIRUhBgcjFTMWFyMVMxYXIRUhFhchFSEWFSEVIRQHIRUhDgIHIRUhBgcjFTMGByMVMwYHIyErAT0CETWcWzIBTzEcE2CBFAecrgkF/fUCEwT96QIXBP3tAgsDCf4BAfALC/4mAcIJGIqsFwvO5QIT/e8CHwMK/dQCMwX9yAI6Af3HAjUBAwMB/dMCIgYMwa8SDZBwFhw+/rEkaQNADw4bEwoZDw4ZEgsZChMYDBIYEgwYChQYEQwZAxoZBRgZFgcZFAkaAwsKBBkMEhgUChgPD4r5fAEIeAAAAAIAK/+FA+UDbwCVAOUAUEBNlgEDBaalo6KhoJ+enZoKAAO2tZWUk00ABwIAko9QAwECBEAGAQUDBWgEAQMAA2gAAAIAaAACAQJoAAEBX9rX1tWcm5mYkZBvbCIfBw4rAS8eKwIPKh0BHx0zPyEjByc3FwEfATMfATMfGDcvHiMnKwIPCgNeEREREhEREREREREREhEREQcHBwgHCAgICAgJCQgJCQkKCQkKCgoJCwoKCgsKCwoLDQ0NDQwNDAwMCwwKCwoKCQgJBwcHBgYFBAMDAgIBBgcICQkLCwwNDQ8PDxERERITExQUFRUWFhYXFxgYGBgXFRUVFBQTEhISERAQDw4ODQ0LCwsJCQgIBgYFBAMDAf7s7Ofu/vELCwYFBQYFBgUFBgUFBgUFBQYFBQUFBQUFBQUFBQX2XwwMDA0MDAwMDQwMDAwMDQwJCQkJCgkJCgkKCgkKCgoJCgoKCgoKCwoKCgoLCgoLAecSERISERIREhIREhESEhESBwcGBgUFBAQDAwICAgEBAQIBAgMDAwQDBQQFBgUIBwgICQkJCgoKCwsMDQ0NDw8PEBESExMUFRUXFxkZGxwcGxkZFxcVFRMTEhAPDw0NDAoKCAgHBQUEAgIBAQIDBAUGBwgICgoMDA0NDw8QEBESEhMTFBQVFRUWFhcXF+zv5twB4AEBAQECAQEBAgIBAwICAgMDAwMDAwQEBAQEBQX+XwwMDAwMDQwMDAwNDAwMDA0HBgYGBQUEBAMEAgMCAQIBAQEBAgECAwIDAwQACABAABwDwALkAAYAFAA4ADkAWwBiAHAAcQCkQKEHAQQCX15ZWAQBBGJgXVY8LwYKAWE9AgcKGRgFAwYDUhcGBAQMBjY1AwIECAxxYwINCAhAOTMBAwwBPwAABQBoAAEECgQBCmYACgcECgdkAAwGCAYMCGYADQgJCA0JZgALCQtpAAUABAEFBFkAAgAHAwIHWQADAAYMAwZZAAgNCQhNAAgICVEACQgJRXBvbGtmZFVUS0oYLBkRGBgTFSgOFysBFwcVNycVETUzNh4DByMuAgcDNxc1JzQGLgY3PgE3NQ4DBwYdAR4BMwcXNzUHJzETBycVFzMyHgQHDgEHFT4DNzY9AS4BJzcnBxU3FwcnNzUHFzURFSMGLgM1Mx4CNzECBFNTz88DMG95YkABiApfgUpSTQUUFCIsMC8pHQ4EF6hmQ4CAXQ8DB7qPbcMMAlCeTQYTEAs+NkIsGgUXp2dEf4FcDwMHuZBtwg0DUFNSUs7OAy9vemJAigpegEsBKCwsNWhYMwGSKgEMITJQMj9VJAL+Qi8DMwkBAwUDDxEgJzoiP0sDKgIVK1E1DAMUR3NDZgU1AS0BBy0BMwcGDR4pRSs+TAIrAxUrUDYIBhNHcwFCaAgzAi8sLC0zZlkz/nArAQ0hMVExPlUkAgAAAgAJ/48D8QNvABgAygB7QHi7nDsFBAABqaCdNQQCDKhZKgMEAoZsVwMGBARAlUtJQgQDPQAGBAMEBgNmAAEOAQAMAQBZDQEMCwoCAgQMAlkIBwUDBAYDBE0IBwUDBAQDUQkBAwQDRQIAtbKxsKalpKKPiX56eXhramRjYl1OTTIuEQwAGAIYDw4rATMyNzY1NjQmPQI0KwMiHQEUBhQXFhMwHQEGFhQHDgEmBw4BFBYdAT4CFjMyFjI3NjUmNDY9Ah4BFRQOAQc9AjQmNDc2NTA1Mjc2FjYnJjQ2NTA1Fg4CJiMiJiIHIg4BFBYdASInLgE9AjQ2NCcuAiIGIyIGIicmNxUUBhQXHgIyNjsCMh4BFAYdAS4CNTQ2NxUwHQEWFzMyNjIWFzUwPQE0LgIjJgYjIi4CPQIOAhceAzc+AicmAgHZOBwEBAEBAissFQIBAgKwAQMDAikqDQcHAgMOChYCCSUeDBABAWh+WZ5fAQEBAgMJNjIHAgIBBg4JFAIJIxwMCAoEAREBBAEBAgEJEAwSAwgjHAwOAQEBAgcOChECIxEDBAEBX51af2gCE0IEGhATBAMFCgcELgMNDQYBcrNdCAdlmspofsxtBwnTAjwIBgcDCgwCJpZHI5YLLCMPEAEoSlIQPTIVDgYGBAISEBkDZQcGAQICAwMTAhAVAT/fMcZzYKtxDXc7HQEGBQIDAgEBAwYJEAQTFwNpCAoDAQEBAQcPChUBZQECAgcaNAUVEAYHCAMCAgMED3UEEQ4FBwgDAQIFAwgC0A1xq2B0xjD+JCQUAwMHCHIMDQMOBQYBAQQQCxCJiR2c2nZpuX48DhGY5n6iAP8AAAAAAwAA/8UEAAM7ABIALQBIAFFAThEBAgEASEdAPzc2LywlJBwbFBMNDAkIEgQBAkAuLQIEPQIBAAMBAwABZgAEAQRpBQEDAAEDSwUBAwMBTwABAwFDAAA0MwASABIUFhMGESsBFT4BHgIHEwc3IxcnNyYzFzUBNycuAjY/ARcHDgEeAj8BDwEOAS4BLwEHJScOAyYvATcXFj4CJi8BNxceAQ4BDwEXAlcECx0WEgEDegNsA3oDAjsa/ldbBwQOARQY3XiTDgcMFRwOkATaFyYVDgMCWwNSWwEDEBQmF98BkA4cFQwHDpN92BgVBAoGB1sDO2kBAwELIhv/AEWoqEr7SQRp/SI0BwQaGSAMg0dRCB4eGgcHVo57DgMQFQgJNAE1BAsZDgIOfoxXBwcbHR8HUkN/DR8bFgcGNQAAAAQAR//FA7UDNAATAD4AZABvAEtASBQBAQNKSS4DAAQCQAADAQNoAAIGBAYCBGYABAAGBABkBQEBAAcGAQdZAAYCAAZOAAYGAFEAAAYARW9uaWheXVBPPjwcHxkIESsBDgMWFx4DPgE3PgEuAwcwFRQGByIHDgEHFgYeAxcwMx4EHQEwFRQGJy4DPgE3PgE7ARceAwYHDgEvAjA1JjY3Mjc+BTc0LgMvAiY0NzYTFhQGIicmNDc2MgG1WZVeLRcuKHiGlYp/LTQeJF6DrkUJGwkFQygDAQIKDBsgGgYQDQ8EBA8vRWo+FhZHOR9lGAuYTXY9DjM3KX4gBwQBCRkGBBkhGg4KBAEGDBsmHicEAwMGNAkS0wYDAwbWAzQQYImfrk5EYzEFKFtDT7KgkGEquRQ4EwIBBTVWLEAuHREJAgICCAYXCSAPQxESFVlvgn14KxotCBZlhZOUOilDAwRKFDIRAgECBhEVKS4mMjwtFgwCBAwMnQMG/ukGmRIJBpwGAwAAAAADAET/pQPDA0MAMQA8AE4ARkBDJh4CAwFKQzIDBAICQA0BAT4FAQEDAWgABAIAAgQAZgAAAGcAAwICA00AAwMCUQACAwJFAABJSDw7NzYAMQAxIiEGDisBMDU0LgInJg4CDwEuAwcOBQcGFhcGBwYWHwEuAicWNjc+Ajc2LgIDFjc+AT8BPgEnJgUOAR4CFTYeAhcyNy4DAvEGCxgSEzE2LQ4PCiFINgYEIgoZDRAGFU9fBAICPBdPCRotAmzKVBcyGx0GP1VB1hwlJXReBwUBAvr95QQEAQIFL0xAKg0qHAEtTHoCYBMMPjIwCAcMHh8MDAofPxsOCk0XPCAuFXu6OggNMLEoAxE3hy8oSGodWzpEDBgQCf1pCgc+LgQSDAkNCAgFDRAKEQEJCiQqFwoVODUfAAUAAP+ABAADgAAeACUAPABZAGAAZEBhXkAiGgQBBUEdAgABVxQCAgNdW1guKiUjGQgEAgRABwEBBQAFAQBmBgEAAwUAA2QJAQMCBQMCZAgBAgQFAgRkAAUBBAVNAAUFBFEABAUERVVUUU9JR0RDODctKxMmIxAKEisBLgEnJiMiBwYVFBcWMzI3PgE3FhcGBw4BBxEeARcGJTQ2NxEGBxMOARURBiMiJxE0JicmNTQ3NjIXFhUUADQ2NxEGBy4BJyYjIgcGFRQXFjMyNz4BNxYXESYBAyYnER4BA94VIgcCBwUDHR0DBQcCByIVFwsBAQ9lTVFnCwv+lDYsLzNUQl0eHh4eXkIOEGflZxD9FWteCw0WIgYCBwYCHh4CBgcCBiIWDQteARABMy8sNwGeAR4XCAUmMDEmBQgXHgECGAsIY6s8Ayg/tWkXijVWEvzxGA4DkxlxRP0tBAQC00RxGQYPEQUwMAURD/3b9NVH/pQLAQEeFwgFJjAxJgUIFx4BAQv+k0gB+P1oDhgDDxJWAAAFAAD/gAQAA4AACwAlAC8ANwBDAYRLsAtQWEA+EAkCBw0PDQdeAAYRAQoDBgpZBAECBQEBAAIBVwALAAwNCwxXAA0ADw4ND1kADgAIDghTAAAAA08AAwMKAEIbS7AMUFhAOgAGEQEKAwYKWQALAAwHCwxXDRAJAwcADw4HD1kADgAIDghTBQEBAQJPBAECAgpBAAAAA08AAwMKAEIbS7AWUFhAQBAJAgcNDw0HXgAGEQEKAwYKWQALAAwNCwxXAA0ADw4ND1kADgAIDghTBQEBAQJPBAECAgpBAAAAA08AAwMKAEIbS7AkUFhAPhAJAgcNDw0HXgAGEQEKAwYKWQQBAgUBAQACAVcACwAMDQsMVwANAA8ODQ9ZAA4ACA4IUwAAAANPAAMDCgBCG0BEEAkCBw0PDQdeAAYRAQoDBgpZBAECBQEBAAIBVwADAAALAwBXAAsADA0LDFcADQAPDg0PWQAOCAgOSwAODghPAAgOCENZWVlZQCEoJgwMQD05ODY1MjEsKyYvKC8MJQwlFBY3EREREREQEhcrATM1MzUjNSMVIxUzEz4BPQE0JisBIgYdARQWFw4CHQEhNTQuAQEzMhYdASE1NDYDNSEVFAYiJgEhNTQ+ATsBMh4BFQHnMiUlMiUlsztEhl9oX4ZEO2OkXwQAX6T+z2hKaf4yaWkBzofAhwK1/GRam1v8W5taAqklMiYmMv6AKINLVl+Hh19WS4MoB2mrZE9PZKtpAgdqShkZSmr+9gsLZZCQ/dMdW5paWppbAAAAAAIAAP/4BAADAgBqAOEBAUBH4N/T0mwUEwcFABsBAQXCHgILAby7MCkECguko6GghIMGAgq1rk83BAkCOgEHCZWRAgYHfQEDBglAlwEHAT/cAQw+VD0CBD1LsBpQWEBHAAwADGgAAAUAaAAFAQVoAAELAWgACwoLaAAKAgpoAAYHAwcGA2YAAwQHA1wABARnAAIJBwJNAAkHBwlLAAkJB1IIAQcJB0YbQEgADAAMaAAABQBoAAUBBWgAAQsBaAALCgtoAAoCCmgABgcDBwYDZgADBAcDBGQABARnAAIJBwJNAAkHBwlLAAkJB1IIAQcJB0ZZQBvZ2MnGurmsq5uamZiTkmVkRUNBQDMyIiEYDQ8rASYnJicmBwYHBgcGBwYnJicuAScHHgQdARcWFyYnJiIOBA8BNz4BFhcWFwYHJgcGDwEXFhcGDwE3PgEWFxYzMjc2Nz4DNzY3BgcGDwE3Njc2Nz4ENz4DNzI3Nj0BNg8BFRQOAwcOBAcGBwYHNjc2NzY3JwcGDwIOBAcGBxUjJgc2NzYXFj4CNzY3JzQ3NQYHDgMnIyYnNjc+Ah8BNz4BNzM3Jw4BJicmJxYXFhczNzI3Njc+AxY3FycmPgE3Mzc2NxYPATc0A/QKEgQXGyceCXJpcUELER0vBS0tChAYCwcBDBsWEyoYLiQiFhMIAUNhEC49FRcfNEopTi4hEw8LHxIGEjcKJ3lWDQMLEC0vFywhEwcODQgFDFQeNZYjBggHBxMVJBcjNRsMAwEJLAFREwMNFSsdHCwZFggHCAUTSjoKBioDAi0EFT4KBQMEFhYhETs1AZNOAwUIGhE7PFIofAsqARFoI0g1NREeFxUXFCEwDQMOCiNVFAJLCwckQxUWHAoNaBECHwkGUXseQC4rEgQeBAEJCAIBAQsGBgICCgLDCwIlDRAaER8FZ24KAgQ4ICRACS0EEhMXCwINBxEdBQwHCREREgkDWzoJDAYSEwkeUAEzHhwPEgwIGRlFLQgJBhMCDywNBx8oHQ4FBhUPHnkrBxRnEyUcHjMhJg4VRU03GQMLGQMZGQMTBBw+OTwQES4oOyAdJQ86FlcZD3kHBg0LMhEDCgYJIxgaBRA1ASAJAgEBAQIECiQcWBgTAQEBF0kZIAkEAwIEEA4VFAIBBAsnSwQaLQIDDBISCAEDHgIBAQ14HSoQCgQBBB4IDgUBAQgBCRccAQEAAAAABAAAAEIECgOAAE4AagB/AIcAb0BsOzoCAAcUAQoAUhMCDgoDQAAICQEHAAgHVwQDEAMADQEKDgAKWQAOAA8LDg9ZEQwCCwIBAQsBVgAGBgVPAAUFCgZCbGsBAIWEgYB2c2t/bH9nZl9dTEtGRT08NzY1NCcmJSMcGwkIAE4BTRIOKwEyHgIUDgIiLgI1NDc+AT8BJR4BFRQOAiIuAjQ+AjMyFjM+Azc+AR4BBw4BBxcHJw4BBwU3IyYnJjY3PgIeAgcGByMHMwU0JicOAQcOAS4BNz4BNyMiDgIUHgIyPgIFMj4CNC4CKwEOAQ8BBhUUHgIkMhYUBiImNAM1LE46ISE6TlhNOSEHAgQCDv7DLjkhO01XTTshITtNKwUIBBEkHRYEBh4eFQQBCAdQAVgMHREBVCFnBwMCAgsLNT01FgIDBAgULFf+OCchEhoEBh8eEwYEGxMDIDcpGBgpN0E3KRgBySA3KhgYKjcgBi9IEQYGGSo3/vUzJCQzIwHrITtNWE45ISE5TiwdGQcMByw6HF87LE45ISE5TlhNOyEBOXlnSw0VEgUVEgYeFgEiASlmNjFkCwsJDwUECwUCEBUJCwx91ClFFD5XDBEMBhURC15AGCk4QDcqGRkqN3oZKjdAOCkYAjMoEhQWIDcqGfUkMyQkMwADASAAVwLgArAAEwAcACkAMUAuBwEFAgFAAAAAAwIAA1kAAgAFBAIFWQAEAQEETQAEBAFRAAEEAUUoISQhLyAGFCsBITIWFRQGBx4CFxYVFAcOASMhEzMyNjU0JisBETMyNjc2NTQnLgErAQEgAQdOXCgoERsOCxo4HT0s/v5dhjY8OTiHoB4gEiAkEyUhkwKwVEMpQhMGFA8PIzhNMhoYAVsvMist/jINEB4yMxkODAAAAAAGAET//APIAwQAEQAVABgAIAAkACoAVkBTKikoJxYVEhEQAwIBAA0APg0GBQQEAAAIAwAIVwkBAwAMCwMMVwALCgECBwsCVwAHAQEHSwAHBwFQAAEHAUQmJSQjIiEgHx4dERETFBIREhEUDhcrAScHJxUjESE9ATM1Iz0BIzUlBwUjJScFIQEhESEVIxUzNSM1MzUjNSU3BQGmYRmIYANBQ0Me/n6KAWtK/s6GAUD+wAKD/T0Cw+HhwcFg/uYoAVICniVlJX/9+LUNgQy5PsJqllIEVv45AYOBgSBB5RR3PKAAAAAEAF//wAOhA0AAAwAHAAsADwB3S7AKUFhALwACAAUAAgVmAAMEBgYDXgAAAgEASwAFAAQDBQRXAAYABwEGB1gAAAABTwABAAFDG0AwAAIABQACBWYAAwQGBAMGZgAAAgEASwAFAAQDBQRXAAYABwEGB1gAAAABTwABAAFDWUAKERERERERERAIFisTMxEjASERISchNSEBIREhX0BAAkP+QAHAQP7AAUD+fwLA/UADQPyAAz7+wEDA/oD+wAAAAAAEAEwATgOuArQAAwAHAAsADwA1QDIAAAABBAABVwAEAAUCBAVXAAIAAwYCA1cABgcHBksABgYHTwAHBgdDERERERERERAIFisTIRUhESEVITchFSEDIRUhTANi/J4DYvyeAgJb/aUCAlf9qQK0Pf7JPfc9/s49AAABAAAAAQAANtToul8PPPUACwQAAAAAANPm5UMAAAAA0+blQwAA/1sFzgOAAAAACAACAAAAAAAAAAEAAAOA/1sAXAZgAAAAAAXOAAEAAAAAAAAAAAAAAAAAAAAuAXYAIgAAAAABVQAAA+kALAQAADMFGAAABAAAQAQAAAAEAQAABgQAjgZgAJIEAAASBAEAAAQAAE4EAADQBAAADgQAAEAEAAC5BAAAJwQAAAAEAADzBAAAfAQAAEAEAACBBAAAgQQAABgEAADZBAAACAQAAAAEAAABBAEAAAQAAH8EAACcBAAAKwQAAEAEAgAJBAAAAAQAAEcEAABEBAEAAAQAAAAEAQAABAwAAAQAASAEBwBEBAAAXwBMAAAAAAAoACgAKAFkAa4CqgSwBOoFnAcKB9AIogr8C9gM0A3KDqQO2A+GEAgQOBCKEOIRYBJcE3QTxhS0FV4V1BY2F1QY2hn+GvQcMhzQHZIeLB70IBgh3iLYIzIjpCQEJEAAAQAAAC8A8gARAAAAAAACAEoAWABsAAABMgmWAAAAAAAAAAwAlgABAAAAAAABAAgAAAABAAAAAAACAAYACAABAAAAAAADACQADgABAAAAAAAEAAgAMgABAAAAAAAFAEYAOgABAAAAAAAGAAgAgAADAAEECQABABAAiAADAAEECQACAAwAmAADAAEECQADAEgApAADAAEECQAEABAA7AADAAEECQAFAIwA/AADAAEECQAGABABiGljb25mb250TWVkaXVtRm9udEZvcmdlIDIuMCA6IGljb25mb250IDogMjctOC0yMDE2aWNvbmZvbnRWZXJzaW9uIDEuMCA7IHR0ZmF1dG9oaW50ICh2MC45NCkgLWwgOCAtciA1MCAtRyAyMDAgLXggMTQgLXcgIkciIC1mIC1zaWNvbmZvbnQAaQBjAG8AbgBmAG8AbgB0AE0AZQBkAGkAdQBtAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAAaQBjAG8AbgBmAG8AbgB0ACAAOgAgADIANwAtADgALQAyADAAMQA2AGkAYwBvAG4AZgBvAG4AdABWAGUAcgBzAGkAbwBuACAAMQAuADAAIAA7ACAAdAB0AGYAYQB1AHQAbwBoAGkAbgB0ACAAKAB2ADAALgA5ADQAKQAgAC0AbAAgADgAIAAtAHIAIAA1ADAAIAAtAEcAIAAyADAAMAAgAC0AeAAgADEANAAgAC0AdwAgACIARwAiACAALQBmACAALQBzAGkAYwBvAG4AZgBvAG4AdAAAAAIAAAAAAAD/gwAyAAAAAAAAAAAAAAAAAAAAAAAAAAAALwAAAAEAAgBbAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREBEgETARQBFQEWARcBGAEZARoBGwEcAR0BHgEfASABIQEiASMBJAElASYBJwEoASkBKgErASwHdW5pRTYwMAd1bmlFNjAxB3VuaUU2MDIHdW5pRTYwMwd1bmlFNjA0B3VuaUU2MDUHdW5pRTYwNgd1bmlFNjA3B3VuaUU2MDgHdW5pRTYwOQd1bmlFNjBBB3VuaUU2MEIHdW5pRTYwQwd1bmlFNjBEB3VuaUU2MEUHdW5pRTYwRgd1bmlFNjEwB3VuaUU2MTEHdW5pRTYxMgd1bmlFNjEzB3VuaUU2MTQHdW5pRTYxNQd1bmlFNjE2B3VuaUU2MTcHdW5pRTYxOAd1bmlFNjE5B3VuaUU2MUEHdW5pRTYxQgd1bmlFNjFDB3VuaUU2MUQHdW5pRTYxRQd1bmlFNjFGB3VuaUU2MjAHdW5pRTYyMQd1bmlFNjIyB3VuaUU2MjMHdW5pRTYyNAd1bmlFNjI1B3VuaUU2MjYHdW5pRTYyNwd1bmlFNjI4B3VuaUU2MjkHdW5pRTYyQQABAAH//wAPAAAAAAAAAAAAAAAAAAAAAAAyADIDGP/hA4D/WwMY/+EDgP9bsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuwNCstsGEssDErsDUrLbBiLLAxK7A2Ky2wYyywMisusSQBFCstsGQssDIrsDQrLbBlLLAyK7A1Ky2wZiywMiuwNistsGcssDMrLrEkARQrLbBoLLAzK7A0Ky2waSywMyuwNSstsGossDMrsDYrLbBrLCuwCGWwAyRQeLABFTAtAABLuADIUlixAQGOWbkIAAgAYyCwASNEILADI3CwDkUgIEu4AA5RS7AGU1pYsDQbsChZYGYgilVYsAIlYbABRWMjYrACI0SzCgkFBCuzCgsFBCuzDg8FBCtZsgQoCUVSRLMKDQYEK7EGAUSxJAGIUViwQIhYsQYDRLEmAYhRWLgEAIhYsQYBRFlZWVm4Af+FsASNsQUARAAAAA=="

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "data:application/font-woff;base64,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"

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = "data:application/x-font-ttf;base64,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"

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiID4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgRm9udEZvcmdlIDIwMTIwNzMxIGF0IFNhdCBBdWcgMjcgMTQ6MzU6NDggMjAxNgogQnkgYWRtaW4KPC9tZXRhZGF0YT4KPGRlZnM+Cjxmb250IGlkPSJpY29uZm9udCIgaG9yaXotYWR2LXg9IjEwMjQiID4KICA8Zm9udC1mYWNlIAogICAgZm9udC1mYW1pbHk9Imljb25mb250IgogICAgZm9udC13ZWlnaHQ9IjUwMCIKICAgIGZvbnQtc3RyZXRjaD0ibm9ybWFsIgogICAgdW5pdHMtcGVyLWVtPSIxMDI0IgogICAgcGFub3NlLTE9IjIgMCA2IDMgMCAwIDAgMCAwIDAiCiAgICBhc2NlbnQ9Ijg5NiIKICAgIGRlc2NlbnQ9Ii0xMjgiCiAgICB4LWhlaWdodD0iNzkyIgogICAgYmJveD0iMCAtMTY1IDE0ODYgODk2LjEwNSIKICAgIHVuZGVybGluZS10aGlja25lc3M9IjUwIgogICAgdW5kZXJsaW5lLXBvc2l0aW9uPSItMTAwIgogICAgdW5pY29kZS1yYW5nZT0iVSswMDc4LUU2MkEiCiAgLz4KPG1pc3NpbmctZ2x5cGggaG9yaXotYWR2LXg9IjM3NCIgCmQ9Ik0zNCAwdjY4MmgyNzJ2LTY4MmgtMjcyek02OCAzNGgyMDR2NjE0aC0yMDR2LTYxNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iLm5vdGRlZiIgaG9yaXotYWR2LXg9IjM3NCIgCmQ9Ik0zNCAwdjY4MmgyNzJ2LTY4MmgtMjcyek02OCAzNGgyMDR2NjE0aC0yMDR2LTYxNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0iLm51bGwiIGhvcml6LWFkdi14PSIwIiAKIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0ibm9ubWFya2luZ3JldHVybiIgaG9yaXotYWR2LXg9IjM0MSIgCiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9IngiIHVuaWNvZGU9IngiIGhvcml6LWFkdi14PSIxMDAxIiAKZD0iTTI4MSA1NDNxLTI3IC0xIC01MyAtMWgtODNxLTE4IDAgLTM2LjUgLTZ0LTMyLjUgLTE4LjV0LTIzIC0zMnQtOSAtNDUuNXYtNzZoOTEydjQxcTAgMTYgLTAuNSAzMHQtMC41IDE4cTAgMTMgLTUgMjl0LTE3IDI5LjV0LTMxLjUgMjIuNXQtNDkuNSA5aC0xMzN2LTk3aC00Mzh2OTd6TTk1NSAzMTB2LTUycTAgLTIzIDAuNSAtNTJ0MC41IC01OHQtMTAuNSAtNDcuNXQtMjYgLTMwdC0zMyAtMTZ0LTMxLjUgLTQuNXEtMTQgLTEgLTI5LjUgLTAuNQp0LTI5LjUgMC41aC0zMmwtNDUgMTI4aC00MzlsLTQ0IC0xMjhoLTI5aC0zNHEtMjAgMCAtNDUgMXEtMjUgMCAtNDEgOS41dC0yNS41IDIzdC0xMy41IDI5LjV0LTQgMzB2MTY3aDkxMXpNMTYzIDI0N3EtMTIgMCAtMjEgLTguNXQtOSAtMjEuNXQ5IC0yMS41dDIxIC04LjVxMTMgMCAyMiA4LjV0OSAyMS41dC05IDIxLjV0LTIyIDguNXpNMzE2IDEyM3EtOCAtMjYgLTE0IC00OHEtNSAtMTkgLTEwLjUgLTM3dC03LjUgLTI1dC0zIC0xNXQxIC0xNC41CnQ5LjUgLTEwLjV0MjEuNSAtNGgzN2g2N2g4MWg4MGg2NGgzNnEyMyAwIDM0IDEydDIgMzhxLTUgMTMgLTkuNSAzMC41dC05LjUgMzQuNXEtNSAxOSAtMTEgMzloLTM2OHpNMzM2IDQ5OHYyMjhxMCAxMSAyLjUgMjN0MTAgMjEuNXQyMC41IDE1LjV0MzQgNmgxODhxMzEgMCA1MS41IC0xNC41dDIwLjUgLTUyLjV2LTIyN2gtMzI3eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjAwIiB1bmljb2RlPSImI3hlNjAwOyIgCmQ9Ik0xMDMgMzQ2cTAgOTkgNDkgMTgzdDEzMi41IDEzM3QxODIuNSA0OXQxODMgLTQ5dDEzMyAtMTMzdDQ5IC0xODN0LTQ5IC0xODIuNXQtMTMzIC0xMzIuNXQtMTgzIC00OXQtMTgyLjUgNDl0LTEzMi41IDEzMi41dC00OSAxODIuNXpNNzI5IDIzbDE4OCAtMTg4bDU1IDU1bC0xODggMTg3cTEwMCAxMTcgMTAwIDI3MHEwIDExMyAtNTYgMjA5dC0xNTEuNSAxNTEuNXQtMjA5IDU1LjV0LTIwOSAtNTUuNXQtMTUxLjUgLTE1MS41dC01NiAtMjA5CnQ1NiAtMjA5dDE1MS41IC0xNTEuNXQyMDguNSAtNTUuNXExNDggMCAyNjIgOTJ6TTcyOSAyM3oiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYwMSIgdW5pY29kZT0iJiN4ZTYwMTsiIGhvcml6LWFkdi14PSIxMzA0IiAKZD0iTTExMDAgLTEyOGgtNzEwaC0xcS04NCAwIC0xNDMuNSA1OS41dC01OS41IDE0Mi41cTAgNjYgMzggMTE4dDk4IDczcTIgNjkgNTEgMTE2LjV0MTE4IDQ3LjVxMjEgMCA0MiAtNXE0NCA3OSAxMjMgMTI2LjV0MTczIDQ3LjVxOTEgMCAxNjguNSAtNDQuNXQxMjMgLTEyMXQ0Ny41IC0xNjcuNXE2MCAtMjEgOTcuNSAtNzN0MzcuNSAtMTE3cTAgLTg0IC01OS41IC0xNDMuNXQtMTQzLjUgLTU5LjV6TTY1MCA3MjBxLTcgLTEyIC0xOC41IC0xNgp0LTIxLjUgMWwtMSAxcS0xMCA2IC0xMiAxOHQ1IDI0bDQyIDczcTcgMTEgMTguNSAxNS41dDIwLjUgLTEuNWwyIC0xcTEwIC01IDEyIC0xNy41dC01IC0yMy41ek00NTcgNzQ3aC0ycS0xMSAwIC0xOSA5LjV0LTggMjMuNXY4M3EwIDE0IDggMjMuNXQxOSA5LjVoMnExMSAwIDE5IC05LjV0OCAtMjMuNXYtODNxMCAtMTQgLTggLTIzLjV0LTE5IC05LjV6TTQ1NiA2NzNxOTkgMCAxNjggLTcycS03NiAtNDQgLTEyNiAtMTE1aC0xNApxLTgwIDAgLTE0MS41IC01MC41dC03Ny41IC0xMjguNXEtNDIgNjAgLTQyIDEzM3EwIDk2IDY4LjUgMTY0LjV0MTY0LjUgNjguNXpNMzAyIDcwNXEtMTAgLTUgLTIxLjUgLTF0LTE4LjUgMTZsLTQyIDczcS02IDExIC00IDIzLjV0MTEgMTcuNWwyIDFxMTAgNiAyMS41IDEuNXQxOC41IC0xNS41bDQxIC03M3E3IC0xMiA1IC0yNHQtMTIgLTE4ek0xOTAgNTkzcS02IC0xMCAtMTggLTEydC0yNCA1bC03MyA0MnEtMTEgNiAtMTUuNSAxOHQxLjUgMjEKbDEgMnE1IDkgMTcuNSAxMS41dDIzLjUgLTQuNWw3MyAtNDJxMTIgLTcgMTYgLTE4LjV0LTEgLTIxLjV6TTE0OSA0NDF2LTJxMCAtMTEgLTkuNSAtMTl0LTIzLjUgLThoLTgzcS0xNCAwIC0yMy41IDh0LTkuNSAxOXYycTAgMTEgOS41IDE5dDIzLjUgOGg4M3ExNCAwIDIzLjUgLTh0OS41IC0xOXpNMTQ4IDI5NHExMiA3IDI0IDV0MTggLTEybDEgLTFxNSAtMTAgMSAtMjEuNXQtMTYgLTE4LjVsLTczIC00MnEtMTEgLTcgLTIzLjUgLTV0LTE3LjUgMTIKbC0xIDJxLTYgOSAtMS41IDIwLjV0MTUuNSAxOC41eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjAyIiB1bmljb2RlPSImI3hlNjAyOyIgCmQ9Ik02NSAzODZoODk3aC04OTd6TTUxMyAtNjN2ODk2di04OTZ6TTkyIDgyMGgzNThxMTEgLTEgMTcuNSAtNy41dDguNSAtMjAuNXQyLjUgLTIzdDAgLTI5dC0wLjUgLTI1di0xOTFxMCAtNyAwLjUgLTI1dDAuNSAtMjd0LTEuNSAtMjEuNXQtNi41IC0yMHQtMTMuNSAtMTF0LTI1IC00dC0zOS41IDF0LTI4IDEuNWgtMTkwcS04IDAgLTI3LjUgLTF0LTI5LjUgLTAuNXQtMjQgMi41dC0yMSA4LjV0LTkgMTYuNXYzNDlxOCAyMSAyOCAyN3oKTTE0MSA3NDF2LTI0OGgyNTl2MjUyaC0yNThxLTEgMCAtMSAtNHpNNTczIDgyMGgzNTlxMjMgLTggMjggLTMxdi0zNDBxLTYgLTI1IC0yNiAtMzBxLTEwIC0zIC0yNS41IC0zLjV0LTM2IDF0LTI4LjUgMS41aC0xODRxLTggMCAtMjkgLTEuNXQtMzcgLTF0LTI2IDMuNXEtOSAyIC0xNC41IDEwdC03IDIxLjV0LTIgMjR0MCAyOS41dDAuNSAyNnYxNzhxMCA4IC0wLjUgMjguNXQtMC41IDMwLjV0Mi41IDIzLjV0OSAyMC41dDE3LjUgOXpNNjIzIDc0MQp2LTI0OGgyNTh2MjUyaC0yNTdxLTIgMCAtMSAtNHpNMjU5IDY2OXEyNyA0IDQ2IC0xMC41dDE5IC0zOC41cTEgLTMxIC0yNS41IC00NnQtNTIuNSAtMXEtMjAgOSAtMjYgMzAuNXQ0LjUgNDF0MzQuNSAyNC41ek03NDAgNjY5cTQ1IDggNjAgLTI5cTEyIC0zMiAtOSAtNTZxLTE4IC0yMSAtNTEgLTE2cS0yNSA0IC0zNS41IDI3dC0wLjUgNDZ0MzYgMjh6TTQ0OCAtNTJoLTM1NXEtMjMgNyAtMjkgMjh2MzQ4cTcgMjEgMjQgMjVxMTEgMyAyNiAzLjUKdDM1LjUgLTAuNXQyOC41IC0xaDE4NXE3IDAgMjcuNSAxdDM2LjUgMC41dDI3IC0zLjVxMTAgLTIgMTUuNSAtMTB0Ny41IC0yMS41dDIuNSAtMjMuNXQtMC41IC0yOXQtMSAtMjV2LTE4NHEwIC03IDEgLTI3LjV0MCAtMzB0LTMgLTIzdC05LjUgLTIwdC0xOC41IC03LjV6TTE0MSAyNzJ2LTI0OWgyNTl2MjUyaC0yNThxLTEgMCAtMSAtM3pNOTYwIDMxOXYtOTdxLTIgLTggLTEuNSAtNTJ0LTAuNSAtNTNoLTI1NnY1N3EtNiAxIC0zOSAxaC00MApxLTIgLTE5IC0xLjUgLTExMi41dC0wLjUgLTExNC41aC00N3EtMTEgMiAtMTggOS41dC05LjUgMjF0LTIuNSAyNHQwLjUgMzB0MC41IDI3LjV2MTc5cTAgOCAtMSAyOC41dC0wLjUgMzZ0My41IDI1LjVxMSA1IDQuNSA5dDkgNi41dDkuNSAzLjV0MTMgMnQxMyAxaDE1aDE1aDE3NXYtMTU0aDgwcTEgMTQgMC41IDc3LjV0MC41IDc2LjVxMjEgMCAzNy41IC0wLjV0MjcuNSAtOHQxMyAtMjMuNXpNMjY1IDIwMHEyOSAzIDQ3LjUgLTE5LjUKdDcuNSAtNTAuNXEtMTAgLTI2IC0zOC41IC0zMXQtNDkuNSAxNHQtMTIuNSA1MXQ0NS41IDM2ek03ODkgLTUyaC04N3EwIDggLTAuNSA0NnQxLjUgNDRoODZ2LTkwek05NjAgMzh2LTU5cS01IC0yNCAtMjkgLTMxaC02MnY0NnEwIDM4IDEgNDRoOTB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MDMiIHVuaWNvZGU9IiYjeGU2MDM7IiAKZD0iTTM4OSA2NzdxMTcgLTE0IDE3IC0zMi41dC0xNyAtMzEuNWwtMjUyIC0yMjlsMjUyIC0yMzFxMTcgLTEzIDE3IC0zMS41dC0xNyAtMzIuNXEtMzEgLTMxIC02MSAwbC0zMjggMjk1bDMyOCAyOTNxMzAgMzEgNjEgMHpNNjk4IDY3N2wzMjYgLTI5M2wtMzI2IC0yOTVxLTMyIC0zMSAtNjMgMHEtMzMgMzMgMCA2NGwyNTQgMjMxbC0yNTQgMjI5cS0zMyAzMSAwIDY0cTMxIDMxIDYzIDB2MHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYwNCIgdW5pY29kZT0iJiN4ZTYwNDsiIGhvcml6LWFkdi14PSIxMDI1IiAKZD0iTTk4NCAzNDVoLTk0NHEtMTcgMCAtMjguNSAxMS41dC0xMS41IDI3LjV0MTEuNSAyNy41dDI4LjUgMTEuNWg5NDRxMTYgMCAyNy41IC0xMS41dDExLjUgLTI3LjV0LTExLjUgLTI3LjV0LTI3LjUgLTExLjV2MHpNOTA2IC0xMjhoLTIzNnEtMTcgMCAtMjguNSAxMS41dC0xMS41IDI4dDExLjUgMjh0MjguNSAxMS41aDIzNnExNiAwIDI3LjUgMTEuNXQxMS41IDI3LjV2MTk3cTAgMTYgMTEuNSAyNy41dDI4IDExLjV0MjggLTExLjUKdDExLjUgLTI3LjV2LTE5N3EwIC00OSAtMzQuNSAtODMuNXQtODMuNSAtMzQuNXYwek0zMTUgLTEyOGgtMTk3cS00OSAwIC04My41IDM0LjV0LTM0LjUgODMuNXYxOTdxMCAxNiAxMS41IDI3LjV0MjggMTEuNXQyOCAtMTEuNXQxMS41IC0yNy41di0xOTdxMCAtMTYgMTEuNSAtMjcuNXQyNy41IC0xMS41aDE5N3ExNiAwIDI3LjUgLTExLjV0MTEuNSAtMjh0LTExLjUgLTI4dC0yNy41IC0xMS41djB6TTM5IDU0MnEtMTYgMCAtMjcuNSAxMS41CnQtMTEuNSAyNy41djE5N3EwIDQ5IDM0LjUgODMuNXQ4My41IDM0LjVoMTk3cTE2IDAgMjcuNSAtMTEuNXQxMS41IC0yOHQtMTEuNSAtMjh0LTI3LjUgLTExLjVoLTE5N3EtMTYgMCAtMjcuNSAtMTEuNXQtMTEuNSAtMjcuNXYtMTk3cTAgLTE2IC0xMS41IC0yNy41dC0yOC41IC0xMS41djB6TTk4NSA1NDJxLTE3IDAgLTI4LjUgMTEuNXQtMTEuNSAyNy41djE5N3EwIDE2IC0xMS41IDI3LjV0LTI3LjUgMTEuNWgtMjM2cS0xNyAwIC0yOC41IDExLjUKdC0xMS41IDI4dDExLjUgMjh0MjguNSAxMS41aDIzNnE0OSAwIDgzLjUgLTM0LjV0MzQuNSAtODMuNXYtMTk3cTAgLTE2IC0xMS41IC0yNy41dC0yNy41IC0xMS41djB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MDUiIHVuaWNvZGU9IiYjeGU2MDU7IiBob3Jpei1hZHYteD0iMTU0MCIgCmQ9Ik0xMjgxIDczNXEyNiAwIDUwIC0xMHQ0MS41IC0yNy41dDI3LjUgLTQxLjV0MTAgLTUxdi0zNzJxMCAtMjggLTEwIC01MXQtMjcuNSAtNDF0LTQxLjUgLTI4dC01MCAtMTBoLTEwMDlxLTI3IDAgLTUwLjUgMTB0LTQxLjUgMjh0LTI4IDQxdC0xMCA1MXYzNzJxMCAyNyAxMCA1MXQyOCA0MS41dDQxLjUgMjcuNXQ1MC41IDEwaDEwMDl6TTUzNiAyNzZxMzYgMjkgNTAgODRsLTUwIDE2cS0xMCAtNDMgLTMzIC01Ny41dC02MCAtMTQuNQpxLTMgMCAtMTkgMS41dC0zNCAxMi41dC0zMyAzNS41dC0xNSA3MS41cTAgNSAzLjUgMjMuNXQxNC41IDM4dDMxLjUgMzUuNXQ1NS41IDE2cTMzIDAgNDkuNSAtMTR0MjkuNSAtNDJsNTUgMTZxLTE0IDQ3IC00OCA3MnEtMzUgMjYgLTg1IDI2cS00NCAwIC04MiAtMjBxLTM4IC0yMiAtNTcgLTYwcS0yMSAtMzkgLTIxIC05MnEwIC00NyAxOCAtOTBxMTcgLTQxIDUyIC02NHEzMyAtMjMgODkgLTIzcTUzIDAgODkgMjl6TTgxMSA0NDcKcS00NCAxMyAtNjIgMjMuNXQtMTggMjguNXEwIDIxIDE4IDMyLjV0NjAgMTEuNXExOSAwIDMwLjUgLTN0MTkuNSAtOS41dDEzIC0xNnQxMSAtMjIuNWw0MiA0cTAgMiAtMiAxOC41dC0xNCAzNHQtMzYgMzIuNXQtNjcgMTVxLTQ1IDAgLTcwLjUgLTExdC0zOC41IC0yNnQtMTYuNSAtMzAuNXQtMy41IC0yNS41cTAgLTI4IDE1LjUgLTQ2LjV0MzYgLTMwdDQwIC0xN3QyNy41IC04LjVxMjUgLTcgNDAuNSAtMTV0MjQgLTE1LjV0MTEgLTE0CnQyLjUgLTExLjV2LTE4cTAgLTkgLTUuNSAtMTV0LTE4LjUgLTEwdC00MCAtNHEtMzIgMCAtNDkuNSA2LjV0LTI1LjUgMTZ0LTkgMjAuNXQtMSAyMWgtNTBxMCAtMTYgMi41IC0zNS41dDE2IC0zN3Q0Mi41IC0zMHQ4MyAtMTIuNXExNSAwIDMzLjUgMi41dDM0IDEyLjV0MjYuNSAzMHQxMSA1N3EwIDcgLTIgMTl0LTEzIDI2dC0zMy41IDI4dC02NC41IDI1ek0xMTUzIDQ0N3EtMjggNyAtNDMgMTJ0LTIzIDExdC05LjUgMTIuNXQtMS41IDE2LjUKcTAgMjEgMTYuNSAzMS41dDU3LjUgMTAuNXEyMCAwIDMwLjUgLTIuNXQxNiAtOC41dDkgLTE1LjV0MTAuNSAtMjIuNWw1MSA0cTAgMiAtMi41IDE4LjV0LTE0IDM0dC0zNS41IDMyLjV0LTY3IDE1cS00NCAwIC03MC41IC0xMXQtMzkgLTI2dC0xNiAtMzAuNXQtMy41IC0yNS41cTAgLTI4IDE1LjUgLTQ4dDM1LjUgLTMzdDM5LjUgLTE5LjV0MjguNSAtOC41cTI5IC04IDQ0IC0xNC41dDIxIC0xMi41dDYuNSAtMTEuNXQwLjUgLTEwLjUKcTAgLTEwIC0xLjUgLTE3dC03LjUgLTEyLjV0LTE4IC04LjV0LTMxIC0zcS0zMiAwIC00OC41IDguNXQtMjMuNSAxOC41dC03LjUgMTl0LTAuNSAxMmgtNTZxMCAtNCAzIC0yMi41dDE2LjUgLTM5dDQyLjUgLTM3dDgyIC0xNi41cTE1IDAgMzMuNSA0LjV0MzQuNSAxNnQyNi41IDMwLjV0MTAuNSA1MXYxOXEwIDEzIC0xMCAyN3QtMzMuNSAyNy41dC02OC41IDI0LjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MDYiIHVuaWNvZGU9IiYjeGU2MDY7IiBob3Jpei1hZHYteD0iMTYzMiIgCmQ9Ik0xMzY3IDc0OXEyNCAwIDQ2IC05LjV0MzggLTI1LjV0MjUuNSAtMzcuNXQ5LjUgLTQ2LjV2LTM0MnEwIC0yNSAtOS41IC00NnQtMjUuNSAtMzcuNXQtMzggLTI2dC00NiAtOS41aC0xMTAycS0yNSAwIC00Ni41IDkuNXQtMzggMjZ0LTI1LjUgMzcuNXQtOSA0NnYzNDJxMCAyNSA5IDQ2LjV0MjUuNSAzNy41dDM4IDI1LjV0NDYuNSA5LjVoMTEwMnpNNTAzIDYyMGgtNDR2LTEzNmgtMTM0djEzNmgtNDV2LTMxNmg0NXYxMzFoMTM0di0xMzFoNDQKdjMxNnpNNzcxIDYxOGgtMjIzdi00N2g4OXYtMjY4aDQ1djI2OGg4OXY0N3pNMTEyOCA2MThoLTcwbC04MiAtMjMxbC04OSAyMzFoLTcwdi0zMTVoNDN2MjMwbDg0IC0yMzBoNTNsODcgMjI2di0yMjZoNDR2MzE1ek0xMzk3IDM0OWgtMTM1djI2OGgtNDR2LTMxNGgxNzl2NDZ6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MDciIHVuaWNvZGU9IiYjeGU2MDc7IiAKZD0iTTEwMDYgNTE0djIwM2gtOTg4di0yMDNxNTUgMCA5NCAtMzh0MzkgLTkydC0zOSAtOTJ0LTk0IC0zOHYtMjAzaDk4OHYyMDNxLTU1IDAgLTk0IDM4dC0zOSA5MnQzOSA5MnQ5NCAzOHpNNjU1IDQwNHYtNDhoLTExMXYtNjZoMTExdi00OGgtMTExdi05NWgtNjF2OTVoLTExNXY0OGgxMTV2NjZoLTExNXY0OGg5N2wtMTE4IDIxNmg2OWw4MyAtMTY4cTcgLTE1IDE1IC0zNmgycTYgMTcgMTYgMzdsODMgMTY3aDY1bC0xMjAgLTIxNmg5NXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYwOCIgdW5pY29kZT0iJiN4ZTYwODsiIGhvcml6LWFkdi14PSIxMDI1IiAKZD0iTTEwMDYgNTc0aC04NzRxLTU1IDAgLTkzLjUgLTM1LjV0LTM4LjUgLTg1LjV2LTQ1OXEwIC01MSAzOC41IC04Ni41dDkzLjUgLTM1LjVoODc2cS0xMCAyNSAtMTAgMzlxLTEgNiA2IDE3dDEzIDE4bDcgOHY0M3EtMjYgMjggLTI2IDQzcTAgNiA2LjUgMTYuNXQxMi41IDE4LjVsNyA3djQzcS0yNiAyOSAtMjYgNDNxMCA3IDYuNSAxNy41dDEyLjUgMTcuNWw3IDh2NDNxLTI2IDI4IC0yNiA0M3EwIDYgNi41IDE3dDEyLjUgMThsNyA4djQyCnEtMjYgMjkgLTI2IDQzcTAgNyA2LjUgMTcuNXQxMi41IDE4LjVsNyA3djQzcS0yNiAyOSAtMjYgNDNxLTEgNiAxLjUgMTEuNXQ0LjUgNi41ek05NTIgNTE5di01MXEtMjcgLTI4IC0yNyAtNDNxMCAtNiA2LjUgLTE3dDEzLjUgLTE4bDcgLTh2LTQycS0yNyAtMjkgLTI3IC00M3EwIC03IDYuNSAtMTcuNXQxMy41IC0xOC41bDcgLTd2LTQzcS0yNyAtMjkgLTI3IC00M3EwIC02IDYuNSAtMTd0MTMuNSAtMThsNyAtOHYtNDNxLTI3IC0yOCAtMjcgLTQzCnEwIC02IDYuNSAtMTYuNXQxMy41IC0xOC41bDcgLTh2LTQ0bC05IC0yNGgtODE5cS0yMiAwIC00MyAyNXQtMjEgNTd2NDU4cTEgMTUgMTYuNSAzM3QzMS41IDE4aDg0NHpNOTUyIDUxOXpNNTIwIDEzNnYxaC0xMDR2NjNoMTA0djBxOSAwIDE1LjUgNi41dDYuNSAxNnQtNi41IDE2dC0xNS41IDYuNXYwaC04OWw5NyAxNzlxNiA4IDYgMTdxMCAxMiAtOC41IDIwLjV0LTIwLjUgOC41cS0yMSAwIC0yOCAtMTlxLTg0IC0xNjQgLTg4IC0xNzVoLTEKbC05MiAxNzVxLTcgMTkgLTI3IDE5cS0xMiAwIC0yMC41IC04LjV0LTguNSAtMjAuNXEwIC05IDUgLTE2bDk3IC0xODBoLTkwcS0xMCAwIC0xNi41IC02LjV0LTYuNSAtMTZ0Ni41IC0xNnQxNi41IC02LjVoMTA3di02M2gtMTA3di0xcS0xMCAwIC0xNi41IC02LjV0LTYuNSAtMTUuNXQ2LjUgLTE2dDE2LjUgLTdoMTA3di05MXYtNnEwIC0xMSA4IC0xOS41dDIwIC04LjV0MjAgOC41dDggMTkuNXY2djkxaDEwNHYwcTEwIDAgMTYuNSA3dDYuNSAxNgp0LTYuNSAxNS41dC0xNS41IDYuNXpNNTIwIDEzNnpNNzAzIDQ1NHEwIDExIDkgMTguNXQyMiA3LjVxMTIgMCAyMS41IC03LjV0OS41IC0xOC41di0zOHEwIC0xMCAtOS41IC0xNy41dC0yMS41IC03LjVxLTEzIDAgLTIyIDcuNXQtOSAxNy41djM4ek03MDMgNDU0ek03MDMgMzE0cTAgMTEgOSAxOC41dDIyIDcuNXExMiAwIDIxLjUgLTcuNXQ5LjUgLTE4LjV2LTM4cTAgLTEwIC05LjUgLTE3LjV0LTIxLjUgLTcuNXEtMTMgMCAtMjIgNy41CnQtOSAxNy41djM4ek03MDMgMzE0ek03MDMgMTc0cTAgMTAgOSAxNy41dDIyIDcuNXExMiAwIDIxLjUgLTcuNXQ5LjUgLTE3LjV2LTM4cTAgLTExIC05LjUgLTE4LjV0LTIxLjUgLTcuNXEtMTMgMCAtMjIgNy41dC05IDE4LjV2Mzh6TTcwMyAxNzR6TTcwMyAzNHEwIDEwIDkgMTcuNXQyMiA3LjVxMTIgMCAyMS41IC03LjV0OS41IC0xNy41di0zOHEwIC0xMSAtOS41IC0xOC41dC0yMS41IC03LjVxLTEzIDAgLTIyIDcuNXQtOSAxOC41djM4egpNNzAzIDM0ek0yMTMgNjE0bDI2IDY4cTYgMTMgMjUgMjAuNXQzNSAxLjVsMjM5IC05MGgxNzlsLTM4MCAxNDRxLTUxIDE5IC0xMDAgLTAuNXQtNjcgLTY2LjVsLTI5IC03N2g3MnpNMjEzIDYxNHpNNDI0IDc2OWw0NiA1NXExMSAxMCAzMSAxMXQzNCAtMTBsMjAyIC0xNzRsMTAxIC0zOGg0MWwtMjkxIDI0OXEtNDEgMzYgLTkzLjUgMzR0LTg1LjUgLTQwbC01MyAtNjJ6TTQyNCA3Njl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MDkiIHVuaWNvZGU9IiYjeGU2MDk7IiAKZD0iTTkxOS41IDM3NXE4LjUgMCAxNSA2dDYuNSAxNXYyMzlxMCAzNCAtMjQgNTh0LTU4IDI0aC02OTlxLTM0IDAgLTU4IC0yNHQtMjQgLTU4di00OTVxMCAtMzQgMjQgLTU4dDU4IC0yNGg2OTlxMzQgMCA1OCAyNHQyNCA1OHY5MXEwIDkgLTYuNSAxNXQtMTUgNnQtMTUgLTZ0LTYuNSAtMTV2MHYtODdxMCAtMTggLTEyLjUgLTMwLjV0LTMwLjUgLTEyLjVoLTQzNGgtMjU3cS0xNyAwIC0zMCAxMi41dC0xMyAzMC41djQ4N3EwIDE3IDEzIDMwCnQzMCAxM2g2OTFxMTggMCAzMC41IC0xM3QxMi41IC0zMHYtMjM1cTAgLTkgNi41IC0xNXQxNSAtNnpNMjg1IDU2MXEwIDUgLTMuNSA4LjV0LTguNSAzLjVoLTU3cS01IDAgLTguNSAtMy41dC0zLjUgLTguNXYtNTdxMCAtNSAzLjUgLTguNXQ4LjUgLTMuNWg1N3E1IDAgOC41IDMuNXQzLjUgOC41djU3ek0yODUgNDE0cTAgNSAtMy41IDh0LTguNSAzaC01N3EtNSAwIC04LjUgLTN0LTMuNSAtOHYtNThxMCAtNSAzLjUgLTh0OC41IC0zaDU3CnE1IDAgOC41IDN0My41IDh2NTh6TTI3MyAyNzhoLTU3cS01IDAgLTguNSAtMy41dC0zLjUgLTguNXYtNThxMCAtNCAzLjUgLTcuNXQ4LjUgLTMuNWg1N3E1IDAgOC41IDMuNXQzLjUgNy41djU4cTAgNSAtMy41IDguNXQtOC41IDMuNXpNNzkzIDQ3NmgtNDQ2cS05IDAgLTE1LjUgLTZ0LTYuNSAtMTV0Ni41IC0xNS41dDE1LjUgLTYuNWg0NDZxOSAwIDE1LjUgNi41dDYuNSAxNS41dC02LjUgMTV0LTE1LjUgNnpNNzkzIDMzMWgtNDQ2CnEtOSAwIC0xNS41IC02dC02LjUgLTE1dDYuNSAtMTUuNXQxNS41IC02LjVoNDQ2cTkgMCAxNS41IDYuNXQ2LjUgMTUuNXQtNi41IDE1dC0xNS41IDZ6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MEEiIHVuaWNvZGU9IiYjeGU2MGE7IiAKZD0iTTgxMCA2ODNxLTMgMTUgLTkgMzBxLTE0IDMzIC00NC41IDUzLjV0LTY4LjUgMjAuNWgtMzU3cS0zNyAwIC02Ny41IC0yMC41dC00NS41IC01NC41cS02IC0xNCAtOCAtMzBxLTIgLTkgLTIgLTE4di01NTFxMCAtMjEgNyAtNDBxNSAtMTUgMTQgLTI3cTE2IC0yNSA0MyAtNDB0NTkgLTE1aDExaDMzOGg4cTMyIDAgNTkgMTV0NDQgNDBxMTAgMTUgMTUgMzNxNSAxNyA1IDM0djU1MXEwIDkgLTEgMTl6TTc1MSA0NnEtMjcgLTI0IC02MyAtMjRoLTgKaC0zMzhoLTExcS0zNiAwIC02MiAyNHEtMzAgMjcgLTMwIDY3djI4djV2MjM4djk1djEyOHY1N3YxbDEwMyAtNThsMTY2IC05M2wxNjcgOTNsMTA1IDU5di0ydi01N3YtMTI4di05NXYtMjM4di01di0yOHEwIC00MCAtMjkgLTY3ek02ODggNzU2cTI5IDAgNTIuNSAtMTZ0MzMuNSAtNDJsLTE2MiAtOTFsLTEwNCAtNThsLTEwMyA1OGwtMTYwIDkwcTEwIDI2IDMzLjUgNDIuNXQ1Mi41IDE2LjVoMzU3ek02MzcgMjMwaC0xMTF2NjVoMTEwCnE3IDAgMTEuNSA0LjV0NC41IDExdC00LjUgMTF0LTExLjUgNC41aC05NGw1NyA1OGw0NCA0NHExMSAxMSAwIDIxLjV0LTIyIC0wLjVsLTY1IC02NWwtNDggLTQ5bC00OSA0OWwtNjUgNjVxLTExIDExIC0yMiAwLjV0MCAtMjEuNWw0NCAtNDRsNTggLTU4aC05MXEtNiAwIC0xMC41IC00LjV0LTQuNSAtMTF0NC41IC0xMXQxMC41IC00LjVoMTEydi02NWgtMTExcS02IDAgLTEwLjUgLTQuNXQtNC41IC0xMXQ0LjUgLTExdDEwLjUgLTQuNWgxMTF2LTUzCnYtNXYtMjdxMCAtNiA0LjUgLTEwLjV0MTEgLTQuNXQxMSA0LjV0NC41IDEwLjV2Mjd2NXY1M2gxMTFxNyAwIDExLjUgNC41dDQuNSAxMXQtNC41IDExdC0xMS41IDQuNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYwQiIgdW5pY29kZT0iJiN4ZTYwYjsiIApkPSJNNTEyIDg4M3EtMTAxIDAgLTE5My41IC0zOS41dC0xNTkgLTEwNnQtMTA2IC0xNTl0LTM5LjUgLTE5My41dDM5LjUgLTE5My41dDEwNiAtMTU5dDE1OSAtMTA2dDE5My41IC0zOS41dDE5My41IDM5LjV0MTU5IDEwNnQxMDYgMTU5dDM5LjUgMTkzLjV0LTM5LjUgMTkzLjV0LTEwNiAxNTl0LTE1OSAxMDZ0LTE5My41IDM5LjV2MHpNNTEyIC01OHEtOTAgMCAtMTcyIDM1dC0xNDEuNSA5NC41dC05NC41IDE0MS41dC0zNSAxNzJ0MzUgMTcyCnQ5NC41IDE0MS41dDE0MS41IDk0LjV0MTcyIDM1dDE3MiAtMzV0MTQxLjUgLTk0LjV0OTQuNSAtMTQxLjV0MzUgLTE3MnQtMzUgLTE3MnQtOTQuNSAtMTQxLjV0LTE0MS41IC05NC41dC0xNzIgLTM1djB6TTY2MiAzNDF6TTYyOCA0MTVxNjkgLTc2IDE4MCAtMTA1cS0xNSAtMTIgLTMxIC0zOXEtNDggMTQgLTEwMCA0N3EtNiAtOTcgLTEzLjUgLTE0MC41dC0yMS41IC01Ny41cS0xNCAtMTUgLTQyIC0xOHEtMzQgLTMgLTg1IDFxLTEgMjMgLTE0IDQ1CnEzNCAtNCA3OCAtNHExNyAwIDI0IDZxMTcgMTcgMjYgMTQ1aC0xNTRxLTE0IC03NyAtNTcgLTEyNXQtMTM4IC03NXEtMTAgMjUgLTI3IDQxcTg1IDIwIDEyMyA1OC41dDUxIDEwMC41aC05OXYyM3EtNDMgLTI4IC04NCAtNDdxLTggMjEgLTMwIDM5cTkwIDM5IDE1NSAxMDVoLTEzN3Y0M2gxNzRxMjIgMjcgNDIgNjVoLTE3N3Y0MmgxMDZxLTE4IDM4IC01MiA3OGwzOCAxOXEzOCAtNDQgNTUgLTc5bC0zNCAtMThoODNxMjIgNTMgMzAgMTEzbDUwIC01CnEtMTAgLTU1IC0yOSAtMTA4aDc2cTM3IDQ3IDYxIDk1bDQzIC0xNHEtMjggLTQ3IC01NyAtODFoMTAzdi00MmgtMjQ0cS0xOSAtNDAgLTM3IC02NWgzMjR2LTQzaC0xNTl6TTY0OSAzMzlxLTQ0IDM0IC03NCA3NmgtMTQzcS0zNCAtNDIgLTc3IC03NmgyOTR6TTY0OSAzMzl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MEMiIHVuaWNvZGU9IiYjeGU2MGM7IiAKZD0iTTkzNSA0ODRxMTcgMTEgMjEgMjF0NCAyOHYxNTBxMCAzMCAtMjIgNTJ0LTUzIDIyaC03NDZxLTMxIDAgLTUzIC0yMnQtMjIgLTUydi0xNTBxMCAtMTkgNC41IC0zMHQyMC41IC0xOXEzMSAtMTUgNTMgLTQwdDIyIC02MHEwIC03NSAtNzMgLTk5cS0yNyAtMTcgLTI3IC01MHYtMTUwcTAgLTMwIDIyIC01MnQ1MyAtMjJoNzQ2cTMxIDAgNTMgMjJ0MjIgNTJ2MTUwcTAgMTkgLTUgMjguNXQtMjAgMjAuNXEtNDEgMjIgLTU4IDQzLjV0LTE3IDU2CnQxNi41IDU2dDU4LjUgNDQuNXpNOTEwIDI0NHYtMTM0cTAgLTIwIC0xNC41IC0zNC41dC0zNS41IC0xNC41aC02OTZxLTIxIDAgLTM1LjUgMTQuNXQtMTQuNSAzNC41djEzNHE0NCAxNiA3MS41IDU0dDI3LjUgODZ0LTI3LjUgODZ0LTcxLjUgNTR2MTM0cTAgMjAgMTQuNSAzNC41dDM1LjUgMTQuNWg2OTZxMjEgMCAzNS41IC0xNC41dDE0LjUgLTM0LjV2LTEzNHEtNDQgLTE2IC03MS41IC01NHQtMjcuNSAtODZ0MjcuNSAtODZ0NzEuNSAtNTR6Ck02NDkgNDM0aC05NGwxMDIgMTA5cTggOSAwIDE4bC0xNiAxN3EtOCA5IC0xNiAwbC0xMTMgLTEyMWwtMTEzIDEyMXEtOCA5IC0xNiAwbC0xNiAtMTdxLTggLTkgMCAtMTdsMTAyIC0xMTBoLTk0cS01IDAgLTguNSAtNHQtMy41IC05di0yNXEwIC01IDMuNSAtOC41dDguNSAtMy41aDExMnYtNTBoLTExMnEtNSAwIC04LjUgLTMuNXQtMy41IC04LjV2LTI1cTAgLTUgMy41IC05dDguNSAtNGgxMTJ2LTg3cTAgLTUgMy41IC04LjV0OS41IC0zLjVoMjQKcTYgMCA5LjUgMy41dDMuNSA4LjV2ODdoMTEycTUgMCA4LjUgNHQzLjUgOXYyNXEwIDUgLTMuNSA4LjV0LTguNSAzLjVoLTExMnY1MGgxMTJxNSAwIDguNSAzLjV0My41IDguNXYyNXEwIDUgLTMuNSA5dC04LjUgNHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYwRCIgdW5pY29kZT0iJiN4ZTYwZDsiIApkPSJNMTg1IDcxMXYtNjU0aDY1NHY2NTRoLTY1NHpNNzc0IDEyMmgtNTI0djUyNGg1MjR2LTUyNHpNNDE0IDU0OHYtMzI4bDIyOSAxNjR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MEUiIHVuaWNvZGU9IiYjeGU2MGU7IiAKZD0iTTM5NCA3MzhxMCAzMiAxMiA2MXQzNCA1MXQ1MSAzNHQ2MC41IDEydDYwLjUgLTEydDUxIC0zNHQzNCAtNTF0MTIgLTYwLjV0LTEyIC02MC41dC0zNCAtNTF0LTUxIC0zNHQtNjAuNSAtMTJ0LTYwLjUgMTJ0LTUxIDM0dC0zNCA1MXQtMTIgNjB6TTM5IDM0NXEwIDQ5IDM1IDgzLjV0ODMuNSAzNC41dDgzLjUgLTM0LjV0MzUgLTgzLjV0LTM1IC04NHQtODMuNSAtMzV0LTgzLjUgMzV0LTM1IDg0ek04MDcgNjIwcTAgOCA2IDE0dDE0IDZ0MTQgLTYKdDYgLTE0dC02IC0xMy41dC0xNCAtNS41dC0xNCA1LjV0LTYgMTMuNXpNMzY1IDcxMHEtMzcgMzcgLTg5IDM3dC04OSAtMzd0LTM3IC04OS41dDM3IC04OS41dDg5IC0zN3Q4OC41IDM3dDM2LjUgODkuNXQtMzYgODkuNXpNOTA2IDM0NXEwIDE2IDExLjUgMjcuNXQyOCAxMS41dDI4IC0xMS41dDExLjUgLTI4dC0xMS41IC0yOHQtMjggLTExLjV0LTI4IDExLjV0LTExLjUgMjguNXpNNzcwIDY3cTAgMjQgMTcuNSA0MS41dDQyIDE3LjV0NDIgLTE3LjUKdDE3LjUgLTQydC0xNy41IC00MnQtNDIgLTE3LjV0LTQyIDE3LjV0LTE3LjUgNDIuNXpNNDczIC00OXEwIDMyIDIzIDU1LjV0NTUuNSAyMy41dDU1LjUgLTIzLjV0MjMgLTU2dC0yMyAtNTUuNXQtNTUuNSAtMjN0LTU1LjUgMjN0LTIzIDU2ek0xNzcgNjlxMCA0MSAyOSA2OS41dDY5LjUgMjguNXQ2OS41IC0yOC41dDI5IC02OS41dC0yOSAtNjkuNXQtNjkuNSAtMjguNXQtNjkuNSAyOC41dC0yOSA2OS41ek0xNzcgNjl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MEYiIHVuaWNvZGU9IiYjeGU2MGY7IiAKZD0iTTUxMiA4OTZxLTEwNCAwIC0xOTkgLTQwLjV0LTE2My41IC0xMDl0LTEwOSAtMTYzLjV0LTQwLjUgLTE5OXQ0MC41IC0xOTl0MTA5IC0xNjMuNXQxNjMuNSAtMTA5dDE5OSAtNDAuNXQxOTkgNDAuNXQxNjMuNSAxMDl0MTA5IDE2My41dDQwLjUgMTk5dC00MC41IDE5OXQtMTA5IDE2My41dC0xNjMuNSAxMDl0LTE5OSA0MC41ek01MTIgLTY0cS05MSAwIC0xNzQgMzUuNXQtMTQzIDk1LjV0LTk1LjUgMTQzdC0zNS41IDE3NHQzNS41IDE3NAp0OTUuNSAxNDN0MTQzIDk1LjV0MTc0IDM1LjV0MTc0IC0zNS41dDE0MyAtOTUuNXQ5NS41IC0xNDN0MzUuNSAtMTc0dC0zNS41IC0xNzR0LTk1LjUgLTE0M3QtMTQzIC05NS41dC0xNzQgLTM1LjV6TTc0MyA0MjRsLTI4MCAxNzFsLTQgMnEtMjMgMTAgLTQ3IDEwcS0zMCAwIC00Ny41IC0xOC41dC0xNy41IC00OC41di0zMjVsMSAtNXE2IC0xNyAyMi41IC0zMi41dDQxLjUgLTE1LjVxMTggMCAzNyAxMGwyNzcgMTU3bDMgMnExMCA3IDE3LjUgMTkuNQp0OS41IDMwdC05IDM1LjV6TTQxOSAyMjlxLTQgLTMgLTcgLTNxLTEgMSAtMSAydjMxMnYzcTkgMSAyMSAtNGwyNTcgLTE1N3oiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYxMCIgdW5pY29kZT0iJiN4ZTYxMDsiIApkPSJNMzA2IDgxMnEtMTEgMTMgLTI3IDEzcS0xMiAwIC0yMSAtN3EtMyAtMiAtNSAtNHEtMTAgLTExIC0xMCAtMzN2LTcwNHEtMSAtMjIgMTAgLTMzdDI2IC0xMXQyNSAxMWw0NjcgMzU4cTExIDExIDExIDI3cTAgMTUgLTExIDI2eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjExIiB1bmljb2RlPSImI3hlNjExOyIgCmQ9Ik01MTIgNzcycS0xMDUgMCAtMTk0LjUgLTUydC0xNDEuNSAtMTQxLjV0LTUyIC0xOTQuNXQ1MiAtMTk0LjV0MTQxLjUgLTE0MS41dDE5NC41IC01MnQxOTQuNSA1MnQxNDEuNSAxNDEuNXQ1MiAxOTQuNXQtNTIgMTk0LjV0LTE0MS41IDE0MS41dC0xOTQuNSA1MnpNMzI5IDE2MnY0NDRoMTMydi00NDRoLTEzMnpNNTYzIDE2MnY0NDRoMTMydi00NDRoLTEzMnoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYxMiIgdW5pY29kZT0iJiN4ZTYxMjsiIApkPSJNNTEyIDgzMnEtOTEgMCAtMTc0IC0zNS41dC0xNDMgLTk1LjV0LTk1LjUgLTE0M3QtMzUuNSAtMTc0dDM1LjUgLTE3NHQ5NS41IC0xNDN0MTQzIC05NS41dDE3NCAtMzUuNXQxNzQgMzUuNXQxNDMgOTUuNXQ5NS41IDE0M3QzNS41IDE3NHQtMzUuNSAxNzR0LTk1LjUgMTQzdC0xNDMgOTUuNXQtMTc0IDM1LjV6TTUxMiAtMzJxLTExMyAwIC0yMDkgNTUuNXQtMTUxLjUgMTUxLjV0LTU1LjUgMjA5dDU1LjUgMjA5dDE1MS41IDE1MS41CnQyMDkgNTUuNXQyMDkgLTU1LjV0MTUxLjUgLTE1MS41dDU1LjUgLTIwOXQtNTUuNSAtMjA5dC0xNTEuNSAtMTUxLjV0LTIwOSAtNTUuNXpNMzg0IDUxMmg5NnYtMjU2aC05NnYyNTZ6TTU0NCA1MTJoOTZ2LTI1NmgtOTZ2MjU2eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjEzIiB1bmljb2RlPSImI3hlNjEzOyIgCmQ9Ik05MjYgNDMxcTAgLTE2IC03IC0zMXQtMTcuNSAtMjYuNXQtMjYgLTE4dC0zMS41IC02LjVoLTMwcTM0IDAgNTggLTIyLjV0MjQgLTU1dC0yNCAtNTYuNXQtNTggLTI0aC0zMXEzNSAwIDU5IC0yMy41dDI0IC01NS41cTAgLTE3IC05IC0zMS41dC0yNSAtMjUuNXQtMzYuNSAtMTd0LTQxLjUgLTZxMzMgMCA1NCAtMjR0MjEgLTU3cTAgLTIxIC0xMS41IC0zNS41dC0yOS41IC0yNC41dC0zOC41IC0xNC41dC0zNi41IC00LjVoLTE4M2gtMjQ2CnEtMzMgMCAtNjEgMTF0LTQ5IDMwLjV0LTMzIDQ3LjV0LTEyIDYzdjMxM3EwIDIwIDEuNSA0MC41dDcuNSAzOC41dDE5IDMzdDM0IDI0cTIxIDggNDcgMjQuNXQ1NC41IDM5dDU1IDUwLjV0NDggNTkuNXQzNCA2NXQxMi41IDY4LjVxMSAzMSA4LjUgNTEuNXQxOSAzMy41dDI1LjUgMTguNXQyOCA1LjVxMzcgMCA2MiAtMjIuNXQzNiAtNzMuNXEyIC00NCAtNiAtOTRxLTYgLTQyIC0yMSAtOTJ0LTQ3IC05OWgyOTdxMzQgMCA1OCAtMjJ0MjQgLTU1egoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYxNCIgdW5pY29kZT0iJiN4ZTYxNDsiIApkPSJNMzIwIDU3N2gxOTJxMjAgMCAzNCAxNHQxNCAzNHY0OHEwIDE5IC0xNCAzMy41dC0zNCAxNC41aC00OHEwIDE5IC0xNCAzM3QtMzQgMTR0LTM0IC0xNHQtMTQgLTMzaC00OHEtMjAgMCAtMzQgLTE0LjV0LTE0IC0zMy41di00OHEwIC0yMCAxNCAtMzR0MzQgLTE0ek03MDQgNjI1cTAgMjAgLTE0LjUgMzR0LTMzLjUgMTRoLTQ4di05NnEwIC0yMCAtMTQgLTM0dC0zNCAtMTRoLTI4OHEtMjAgMCAtMzQgMTR0LTE0IDM0djk2aC00OApxLTE5IDAgLTMzIC0xNHQtMTQgLTM0di00NzlxMCAtMjAgMTQgLTM0dDMzIC0xNGgyODh2MzM1aDI0MHYxOTJ6TTc1MSAzODVoLTIzOXYtMzgzaDM4M3YyMzloLTE0NHYxNDR6TTc1MSAzODVsNDggLTQ4di00OGg0OGw0OCAtNDh2MTQ0aC0xNDR6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MTUiIHVuaWNvZGU9IiYjeGU2MTU7IiAKZD0iTTg5NiA1NzRoLTE4N3YxMTdxMCA0MiAtMzAgNzJ0LTczIDMwaC02OHEwIDI5IC0yMC41IDQ5dC00OC41IDIwaC00M3EtNCA4IC0xMSAxNXEtMTkgMTkgLTQ5IDE5dC00OCAtMTlxLTcgLTcgLTExIC0xNWgtNDNxLTI5IDAgLTQ5IC0yMHQtMjAgLTQ5aC02OHEtNDMgMCAtNzMgLTMwdC0zMCAtNzJ2LTU4M3EwIC00MiAzMCAtNzJ0NzMgLTMwaDI0MnYtMzBxMCAtNDMgMzAuNSAtNzMuNXQ3NC41IC0zMC41aDMxN3ExOSAwIDQwIDE2dDU5IDU1CnEyNSAyNiAwIDFxMTEgMTEgMzkgMzhxMzkgMzkgNTUgNTkuNXQxNiAzOS41djM4OXEwIDQzIC0zMC41IDczLjV0LTczLjUgMzAuNXpNMjY0IDc5M2g2OGwzNCAydi0yaDEwM3YtNjhoLTIwNXY2OHpNMTI3IDEwOHY1ODNoNzhxMjAgLTM1IDU5IC0zNWgyMDVxMzkgMCA1OSAzNWg3OHYtMTE3aC0xMzJxLTQ0IDAgLTc0LjUgLTMwLjV0LTMwLjUgLTc0LjV2LTM2MWgtMjQyek05MjcgMTA3cTAgLTE5IC01IC0yMi41dC0yNiAtMy41aC03OQpxLTEwIDAgLTE4IC04dC04IC0xOHYtNTd2LTE4cTAgLTUgLTEuNSAtMTMuNXQtNiAtMTN0LTEwLjUgLTYuNWgtMjc5cS0yMSAwIC0zNi41IDE1LjV0LTE1LjUgMzcuNXY0NDZxMCAyMiAxNS41IDM3dDM2LjUgMTVoMzgxcTIyIDAgMzcgLTE1dDE1IC0zN3YtMzM5ek01MTMgMzUzaDM0NXYtNzVoLTM0NXY3NXpNNTEzIDIwM2gyMzd2LTc1aC0yMzd2NzV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MTYiIHVuaWNvZGU9IiYjeGU2MTY7IiAKZD0iTTYxMCA1ODBoLTI2MnYtNTIzaDQ1OXYzMjdoLTE5N3YxOTZ6TTY0MyA1ODB2LTE2M2gxNjR6TTU3NyA2NDZoLTI5NHYtNTI0aDMzdjQ5MWgyNjF2MzN6TTUxMiA3MTFoLTI5NXYtNTIzaDMzdjQ5MWgyNjJ2MzJ6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MTciIHVuaWNvZGU9IiYjeGU2MTc7IiAKZD0iTTUwOCA4NzlxMTY3IDAgMjk5LjUgLTEwMC41dDE3OS41IC0yNTcuNWgtMjE5bC0xMjkgMzAzbC0xMzIgLTM0MWwtMTUyIDMxOWwtMjQ5IC02MzFsMTAyIC0xNDZsNjA2IDVsMTAwIDE0NmwtMTYgMzhoODBxLTUyIC0xNDggLTE4MSAtMjQwLjV0LTI4OSAtOTIuNXEtMTAyIDAgLTE5NC41IDM5LjV0LTE1OS41IDEwNi41dC0xMDYuNSAxNTkuNXQtMzkuNSAxOTMuNXQzOS41IDE5My41dDEwNi41IDE1OS41dDE1OS41IDEwNi41dDE5NC41IDM5LjUKek05OTQgNDkyaC0yMTRsOCAtMjBoMjEwcS0yIDExIC00IDIwek0xMDAyIDQ0OWgtMjA0bDExIC0yNmgxOTZxLTEgMTMgLTMgMjZ6TTEwMDYgNDAwaC0xODdsOSAtMjNoMTc5djF2MnEwIDkgLTEgMjB6TTEwMDYgMzU0aC0xNjhsMTEgLTI2aDE1NXEyIDEzIDIgMjZ6TTEwMDEgMzA1aC0xNDJsMTEgLTI1aDEyN3EyIDEyIDQgMjV6TTk5MSAyNTdoLTExMWw4IC0yMGg5OHEzIDEwIDUgMjB6TTMxNSA1MDlsLTE0NiAtMzQ0bDU3OSAzbC0xNDkgMzUwCmwtMTM1IC0zNDl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MTgiIHVuaWNvZGU9IiYjeGU2MTg7IiAKZD0iTTUxMiA2MDNxLTEwNiAwIC0xODEgLTc1dC03NSAtMTgxdDc1IC0xODF0MTgxIC03NXQxODEgNzV0NzUgMTgxdC03NSAxODF0LTE4MSA3NXpNNTEyIDE4M3EtNjggMCAtMTE2LjUgNDh0LTQ4LjUgMTE2dDQ4LjUgMTE2LjV0MTE2LjUgNDguNXQxMTYuNSAtNDguNXQ0OC41IC0xMTYuNXQtNDguNSAtMTE2dC0xMTYuNSAtNDh6TTg0MSA2MDNxLTE1IDAgLTI1LjUgLTEwLjV0LTEwLjUgLTI1LjV0MTAuNSAtMjZ0MjUuNSAtMTF0MjYgMTF0MTEgMjYKdC0xMSAyNS41dC0yNiAxMC41ek05NTEgNzEzaC0yMDBsLTYyIDk0cS0xMSAxNiAtMzEgMTZoLTI5MnEtMjAgMCAtMzEgLTE2bC02MiAtOTRoLTIwMHEtMzAgMCAtNTEuNSAtMjEuNXQtMjEuNSAtNTEuNXYtNTg1cTAgLTMwIDIxLjUgLTUxLjV0NTEuNSAtMjEuNWg4NzhxMzAgMCA1MS41IDIxLjV0MjEuNSA1MS41djU4NXEwIDMwIC0yMS41IDUxLjV0LTUxLjUgMjEuNXpNNzMgNTV2NTg1aDIyMHExOSAwIDMwIDE2bDYyIDk0aDI1NGw2MiAtOTQKcTExIC0xNiAzMCAtMTZoMjIwdi01ODVoLTg3OHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYxOSIgdW5pY29kZT0iJiN4ZTYxOTsiIApkPSJNNTA5LjUgNDUzcS01NC41IDAgLTkzLjUgLTM5dC0zOSAtOTMuNXQzOSAtOTMuNXQ5My41IC0zOXQ5My41IDM5dDM5IDkzLjV0LTM5IDkzLjV0LTkzLjUgMzl6TTg4OCA2NDdoLTE1M3EwIDU1IC0zOC41IDkzLjV0LTkzLjUgMzguNWgtMTg0cS01NSAwIC05My41IC0zOC41dC0zOC41IC05My41aC0xNTNxLTU1IDAgLTk0IC0zOXQtMzkgLTk0di0zODdxMCAtNTUgMzkgLTk0dDk0IC0zOWg3NTRxNTUgMCA5NCAzOXQzOSA5NHYzODcKcTAgNTUgLTM5IDk0dC05NCAzOXpNNTExIDg2cS05NyAwIC0xNjYgNjguNXQtNjkgMTY1LjV0NjkgMTY2dDE2NiA2OXQxNjUuNSAtNjl0NjguNSAtMTY2dC02OC41IC0xNjUuNXQtMTY1LjUgLTY4LjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MUEiIHVuaWNvZGU9IiYjeGU2MWE7IiBob3Jpei1hZHYteD0iMTAyNSIgCmQ9Ik0xMDI0IDMwOWwtODggLTkxbC0yMjcgMjE2bDg1IDg5bDczIC03MGwxNSAxNWwtMjkyIDI3OWwtMTQgLTE1bDc1IC03MmwtODUgLTg5bC0yNDEgMjMwbDg4IDkxbDkzIC04OWw4OSA5M2w0MjUgLTQwNWwtODkgLTkzek00NTggNDYwbC0yNDAgMjI5bDkyIDk2bDI0MSAtMjI5ek0zNTEgMzQ4bC0yNDEgMjMwbDkzIDk2bDI0MSAtMjMwek0yNDYgMjM5bC03NiA3MmwtMTQgLTE1bDI5MiAtMjc5bDE0IDE1bC03MyA3MGw5MSA5NGwyMjcgLTIxNwpsLTkwIC05M2wtOTMgODlsLTk5IC0xMDNsLTQyNSA0MDZsOTkgMTAybC05MyA4OWw5MCA5M2wyNDAgLTIyOXpNNTg3IDMwN2wyMjcgLTIxNmwtOTMgLTk2bC0yMjcgMjE2ek02OTQgNDE5bDIyNyAtMjE3bC05MiAtOTZsLTIyNyAyMTd6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MUIiIHVuaWNvZGU9IiYjeGU2MWI7IiAKZD0iTTY3MSAtNzRsLTExOCAxOTdsNDYgMjVsNzIgLTEyNWw0NiA3Mmw4NyA1bC03MiAxMjVsNDYgMjZsMTEzIC0xOTdsLTE0MyAtMTB6TTM1MyAtNzRsLTc3IDExOGwtMTQzIDEwbDExNSAxOTdsNDYgLTI2bC03NCAtMTI1bDg3IC01bDQ2IC03Mmw3MiAxMjVsNDYgLTI1ek01MTIgNTFxLTEwIDAgLTE4IDhsLTY2IDYxbC05MCAtMjBxLTEwIC0yIC0xOC41IDN0LTEyLjUgMTVsLTI1IDg3bC04NyAyNXEtMjIgOSAtMTggMzFsMTggOTBsLTYyIDY2CnEtNiA4IC02IDE4dDYgMTZsNjIgNjZsLTE4IDkwcS0yIDkgMyAxNy41dDE1IDEwLjVsODcgMzNsMjUgODVxOSAyMSAyOCAxOGw5MCAtMThsNjcgNjFxNyA2IDE3IDZ0MTYgLTZsNjYgLTYxbDkwIDE4cTEwIDEgMTggLTR0MTAgLTE0bDI2IC04NWw4NyAtMjhxOSAtNCAxNC41IC0xMnQzLjUgLTE2bC0xOCAtOTBsNjEgLTY2cTYgLTggNiAtMTh0LTYgLTE2bC02MSAtNjZsMTggLTkwcTIgLTkgLTMuNSAtMTh0LTE0LjUgLTEybC04MCAtMzEKbC0yNSAtODdxLTQgLTEwIC0xMi41IC0xNXQtMTguNSAtM2wtOTAgMjBsLTY2IC02MXEtOCAtOCAtMTggLTh6TTQzNSAxNzRxMTAgMCAxOCAtOGw1OSAtNTZsNTkgNTZxOSAxMCAyMyA2bDc5IC0xOGwyMyA3NnE1IDE1IDE4IDE4bDc3IDIzbC0xNSA4MHEtNCAxMCA1IDIzbDU0IDU5bC01NCA1OXEtMTAgOSAtNSAyM2wxNSA3OWwtNzkgMjZxLTEyIDMgLTE2IDE1bC0yMyA3NGwtNzkgLTE1cS0xMCAtNCAtMjMgNWwtNTkgNjFsLTU5IC01MwpxLTkgLTEwIC0yMyAtNmwtNzkgMTZsLTIzIC03N3EtNCAtMTIgLTE2IC0xNWwtNzkgLTI2bDE1IC03OXE0IC0xMSAtNSAtMjNsLTU2IC02Mmw1NCAtNTlxOSAtOSA1IC0yM2wtMTYgLTc5bDc3IC0yM3ExNSAtNSAxOCAtMThsMjMgLTc3bDgwIDE4aDd6TTUxMiAyNjlxLTY5IDAgLTExNy41IDQ4LjV0LTQ4LjUgMTE3LjV0NDguNSAxMTh0MTE3LjUgNDl0MTE3LjUgLTQ5dDQ4LjUgLTExOHQtNDguNSAtMTE3LjV0LTExNy41IC00OC41ek01MTIgNTc2CnEtNTggMCAtOTkuNSAtNDEuNXQtNDEuNSAtOTl0NDEuNSAtOTkuNXQ5OS41IC00MnQ5OS41IDQydDQxLjUgOTkuNXQtNDEuNSA5OXQtOTkuNSA0MS41eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjFDIiB1bmljb2RlPSImI3hlNjFjOyIgCmQ9Ik0xNTYgODMyaDkxaDUwaDMzNWg0OXEyOCAtMTUgNDcgLTI5aC05NnYtMjdoMTI5cTIwIC0xOSAyNyAtMjloLTE1NnYtMjVoMTc0cTkgLTE1IDE0IC0yOWgtNTIzdi0yNWg1MzFxNCAtMTggNCAtMjloLTUzNXYtMjVoNTM1cTAgLTEwIC00IC0yOWgtNTMxdi0yNGg1MjNxLTMgLTEyIC0xMiAtMzBoLTUxMXYtMjRoNDk2cS0xMSAtMTggLTIyIC0zMGgtNDc0di0yNGg0NTBxLTkgLTEwIC0zMyAtMzBoLTEzOHYtMjRoMTcycTIzIC0xNyAzNCAtMjkKaC0yMDZ2LTI1aDIyOXEyIC0zIDIxIC0yOWgtNTI5di0yNWg1NDNxMyAtNSAxMyAtMjloLTU1NnYtMjVoNTYzcTUgLTIyIDUgLTI5aC01Njh2LTI1aDU3MHEwIC0yMCAtMSAtMjloLTU2OXYtMjZoNTY1cS0xIC0zIC0yLjUgLTguNXQtMyAtMTAuNXQtMi41IC05aC01NTd2LTI1aDU0NnEtNiAtMTIgLTE4IC0zMGgtMTkzdi0yNGgxNzVxLTE4IC0yMCAtMzEgLTMwaC0xNDR2LTI0aDExMnEtMjIgLTE1IC01MCAtMzBoLTYyaC0zMzVoLTM2aC0xMDUKdjEzOHYyNDl2MTI0djI2NHYxMjB6TTE1NiA4MzJ6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MUQiIHVuaWNvZGU9IiYjeGU2MWQ7IiAKZD0iTTg2MiA0ODdsLTE3IDE4bC0xNyAxN2wtMTcgMThsLTE4IDE4bC0xNyAxN2wtMTcgMThsLTE3IDE3bC0xNyAxOGwtMTcgMThsLTE3IDE3bC0xNyAxOGwtMTcgMTdsLTE4IDE4bC0xNyAxOGwtMTcgMTdsLTE3IDE4bC03IDdsLTcgN2wtNyA2bC04IDZsLTcgNWwtOCA1bC04IDRsLTggNGwtOCAzbC04IDNsLTkgMmwtOSAybC04IDJsLTkgMWwtOSAxaC05aC0xMGgtOWwtOSAtMWwtMTAgLTJsLTEwIC0xbC0xMCAtMmwtOSAtM2wtMTEgLTMKbC0xMCAtM2wtMTAgLTRsLTEwIC0zbC0xMSAtNWwtMTAgLTRsLTExIC01bC0xMCAtNmwtMTEgLTVsLTEzIC04bC0xMyAtN2wtMTMgLThsLTEzIC04bC0xMiAtOWwtMTMgLTlsLTEyIC05bC0xMiAtMTBsLTEyIC0xMGwtMTEgLTEwbC0xMiAtMTFsLTEwIC0xMWwtMTEgLTEybC0xMCAtMTNsLTEwIC0xM2wtOSAtMTNsLTggLTE1bC05IC0xNWwtNyAtMTVsLTcgLTE2bC03IC0xN2wtNiAtMThsLTYgLTE5bC01IC0xOWwtNCAtMjBsLTMgLTIxbC0zIC0yMQpsLTIgLTIzbC0yIC0yM3YtMjV2LTI1bDEgLTI3bDYgLTI4bDcgLTI4bDggLTI3bDkgLTI1bDkgLTI1bDExIC0yM2wxMSAtMjNsMTIgLTIxbDEzIC0yMWwxMyAtMTlsMTUgLTE5bDE1IC0xOGwxNSAtMTZsMTcgLTE1bDE3IC0xNWwxNyAtMTNsMTggLTEzbDE5IC0xMmwxOSAtMTBsMjAgLTEwbDIwIC04bDIxIC04bDIxIC03bDIyIC01bDIyIC01bDIyIC00bDIzIC0ybDIzIC0ybDI0IC0xaDI0bDI0IDFsMjQgMmwyMyAzbDIxIDRsMjEgNWwyMSA2CmwyMCA3bDIwIDhsMTkgOGwxOCAxMGwxOCAxMGwxOCAxMmwxNyAxMmwxNiAxM2wxNiAxM2wxNSAxNWwxNCAxNWwxNCAxNmwxMyAxNmwxMyAxN2wxMSAxOGwxMSAxOGwxMSAxOWw5IDE5bDkgMjBsOCAyMGw4IDIxbDYgMjFsNiAyMWw1IDIybDQgMjJsMyAyM2wzIDIzbDEgMjNoLTI1NGwtMjM2IC0yMzZsLTIzNiAyMzlsMjMxIDIzMGwyMzggLTIyMHpNNDY5IDg1M2wxMSAtMWwxMSAtMWg2bDUgLTFsNSAtMWg2bDUgLTJsNiAtMWw1IC0xbDUgLTEKbDYgLTJsNSAtMmw1IC0xbDYgLTNsNSAtMmw1IC0ybDUgLTJsNiAtM2w1IC0zbDUgLTNsNSAtM2w1IC0zbDUgLTNsNSAtNGw1IC00bDUgLTRsNSAtNGw1IC00bDUgLTVsNSAtNWwyNDYgLTI1NGw5NSA5NWwtMTIgMTJsLTEyIDEybC0xMiAxMmwtMTMgMTJsLTEyIDEybC0xMiAxM2wtMTIgMTJsLTEyIDEybC0xMyAxMmwtMTIgMTJsLTEyIDEzbC0xMiAxMmwtMTIgMTJsLTEyIDEybC0xMyAxMmwtMTIgMTNsLTkgN2wtOSA2bC05IDZsLTkgNmwtMTAgNQpsLTkgNWwtOSA0bC0xMCA0bC05IDNsLTEwIDRsLTEwIDJsLTkgM2wtMTAgMmwtMTAgMWwtMTAgMmgtOWwtMTAgMWgtMTBoLTEwaC0xMGwtMTAgLTFsLTEwIC0xbC0xMSAtMWwtMTAgLTJsLTEwIC0xbC0xMCAtMmwtMTAgLTNsLTExIC0ybC0xMCAtM2wtMTAgLTNsLTExIC00eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjFFIiB1bmljb2RlPSImI3hlNjFlOyIgCmQ9Ik01MTYgMjk2bDgzIC00NGwtODMgLTQ0di01M2wyMDcgMTA0bC0yMDcgODh2LTUxdjB6TTUxNiA2OTh2NDJoM3E0OCAxIDEwMy41IC01dDExNiAtMjIuNXQxMDkuNSAtNDEuNXQ4MSAtNjV0MzEgLTkwaC0xMzZxLTEwIDYzIC01Ny41IDEwNS41dC0xMTIgNjAuNXQtMTM4LjUgMTZ2MHpNNDM0IDI1Mmw3NyA0N2w1IC0zdjUxbC0yMCA5cTAgMSAtMTAgLTAuNXQtMjcgMXQtMzkgNHQtNDYgOXQtNDcuNSAxNnQtNDQgMjQuNXQtMzUgMzUuNQp0LTIxLjUgNDguNXQtMyA2M3EyMyA2MyAxMDcgMTAwLjV0MTg2IDQwLjV2NDJxLTY3IC0yIC0xMzEgLTEyLjV0LTEyOCAtMzJ0LTExMC41IC02MnQtNjEuNSAtOTMuNXEtMyAtMTIgLTMgLTE1di0yMHE3IC03MSAxMDAgLTEyOC41dDIzNiAtNTcuNWwtMTA5IC02N2wxOTUgLTEwMmwxMiA1djUzbC0yIC0xbC04MCA0NXYwek00MzQgMjUyek01OTIgNTE1bC03NyAtNDVsLTYgMXYtNTFsMTkgLTdoMTZxMTEgMCA0MiAtM3Q1OCAtOS41dDYwIC0yMS41CnQ1NSAtMzUuNXQzNSAtNTV0OCAtNzcuNXEtMjMgLTYyIC0xMDYuNSAtMTAwdC0xODYuNSAtNDB2LTQzcTY4IDMgMTMxLjUgMTMuNXQxMjggMzJ0MTEwLjUgNjEuNXQ2MSA5NHEzIDggMyAxNHYxOXEtNyA3MSAtOTkuNSAxMjguNXQtMjM2LjUgNTguNWwxMDkgNjZsLTE5NCAxMDRsLTEzIC04di01MWwzIDJsODAgLTQ3djB6TTUwOSA0NzFsLTgyIDQ0bDgyIDQ1djUxbC0yMDYgLTEwMmwyMDYgLTg5djUxdjB6TTUwOSA3MXYtNDNoLTMKcS00NyAtMSAtMTAyLjUgNS41dC0xMTYuNSAyM3QtMTEwIDQxdC04MSA2NXQtMzIgODkuNWgxMzhxMTAgLTYyIDU3IC0xMDQuNXQxMTEgLTYwLjV0MTM5IC0xNnYwek01MDkgNzF6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MUYiIHVuaWNvZGU9IiYjeGU2MWY7IiBob3Jpei1hZHYteD0iMTAyNiIgCmQ9Ik00NzMgNTcyaDU2cTI4IDAgMzIgOHE0IDYgNCAxM3ExIDMgMSA4dC0wLjUgMTF0LTAuNSA4djM4djE1MHEwIDcxIC0yIDcxaC00M2gtNDRoLTIxcS0yIDAgLTIgLTM1di0xNTBxMCAtMTEgLTAuNSAtMzN0LTAuNSAtMzkuNXQyIC0zMi41cTIgLTE2IDE5IC0xN3pNNjMyIDg2OXYtNzR2LTgycS0xIC0xNiAwLjUgLTQ2LjV0MS41IC01NS41dC0zIC00NnEtMiAtMTQgLTIyLjUgLTE3dC00MS41IDB0LTM0IC0xcS03IC0yIC0xMC41IC0xMQp0LTMuNSAtMTd0MSAtMjAuNXQxIC0xNS41di0xMDFxMyA3IDEwIDEwdDEyIDMuNXQxNiAtMC41dDEzIC0xcTkgMCAyNy41IC0xdDMzLjUgLTF0MjcgM3ExNiAzIDE2IDIycS0xIDIgLTEgMTB0MC41IDE4LjV0MC41IDExLjV2NjN2MjIzcTEwNCAtNDkgMTY3IC0xNDh0NjMgLTIxNHEwIC05NiAtNDQuNSAtMTgxLjV0LTEyMy41IC0xNDJ0LTE3NCAtNjkuNXYxMTl2NTl2MjlxMCAxIC0wLjUgNHQtMC41IDUuNXQxIDQuNXExIDMgMSA1djFxMiAwIDUgMQpxOSAzIDM2IDB0NTIgMS41dDE4IDIwLjVxLTIgNCAtMiAxMy41dDEgMjF0MSAxNC41djEwNXExIC04IC0yIC0xM3QtMTAgLTYuNXQtMTEuNSAtMnQtMTQuNSAwdC0xMiAwLjVxLTkgMCAtMjYuNSAwLjV0LTMxLjUgMC41dC0yNiAtMXEtOCAwIC0xMyAtMy41dC03IC0xMXQtMiAtMTIuNXQwLjUgLTE1LjV0MC41IC0xMS41di0xMDFxLTE3IDAgLTE4IDFxLTQgMiAtNC41IDN0LTAuNSA4djI2djUycTAgNSAwLjUgMTUuNXQwLjUgMTguNXQtMiAxNApxLTEgNyAtNS41IDExdC0xMi41IDUuNXQtMTQgMS41dC0xNSAtMXQtMTIgLTFxLTggMCAtMjUuNSAtMXQtMzEuNSAtMXQtMjYgM3EtMTQgNCAtMTMgMTl2LTExN3EwIC00IC0wLjUgLTEyLjV0LTAuNSAtMTUuNXQxIC0xMnEyIC03IDUuNSAtMTF0MTAuNSAtNS41dDEyIC0xLjV0MTMuNSAwLjV0MTAuNSAwLjVoMzVoMTdxMyAwIDUgLTF0Mi41IC0zLjV0MC41IC00dC0wLjUgLTUuNXQtMC41IC02di0yMDhxLTk1IDEzIC0xNzMuNSA2OS41CnQtMTIzLjUgMTQydC00NSAxODEuNXEwIDExNiA2My41IDIxNXQxNjcuNSAxNDd2LTI1NHYtMzZ2LTM2cTIgLTIwIDIxIC0yM2g2NnE0IDAgMTcgMS41dDIxIDEuNXQxNy41IC0zLjV0MTMuNSAtMTEuNXYxMTR2MTJ2MTNxMCAzIC0xLjUgMTB0LTQgOS41dC03LjUgNS41dC0xMiAzcS00IDEgLTI3IDAuNXQtMjYgLTAuNXEtMTMgMCAtMTkuNSAydC05LjUgMTB0LTMuNSAxMy41dC0wLjUgMjEuNXYxMzd2MTM3cS0xMTQgLTI5IC0yMDMuNSAtMTA3CnQtMTM2IC0xODd0LTM4LjUgLTIyN3E3IC0xMDUgNTcuNSAtMTk3LjV0MTI3LjUgLTE1NS41dDE3OCAtOTN0MjA1IC0xNnExMjYgMTcgMjI4IDkzdDE1Ni41IDE5MXQ0Ny41IDI0MXEtOSAxNjIgLTExNC41IDI4OS41dC0yNjIuNSAxNjcuNXoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYyMCIgdW5pY29kZT0iJiN4ZTYyMDsiIApkPSJNNTk5IDgyN3YtMTA1cTQgMSA5LjUgMi41dDIwIDF0MjUuNSAtNnQyMCAtMjIuNXQ4IC00NGwzIC0yNTZsLTEyMiAtNjlsMyAxNjhoLTEwOGwzIC0xNjhsLTEyMiA3NGwzIDI1MXEtMiA3MyA1NyA3M2wyNiAtNHYxMDVoMTc0ek0wIDkzbDkxIDUybC03IDdxLTQgNCAtMTEgMTd0LTcuNSAyNS41dDkuNSAyOC41dDM0IDI4bDIyMSAxMzFsMTIwIC03MWwtMTQ3IC04MXEtMTQgLTggLTE3LjUgLTIzdDIuNSAtMzB0MTYuNSAtMjh0MjQuNSAtMTYuNQp0MjggMy41bDE0NCA4NmwtNCAtMTQybC0yMTggLTEyM3EtMjMgLTE0IC00MiAtMTUuNXQtMjkuNSA2LjV0LTE3LjUgMTguNXQtMTAgMTguNWwtMiA5bC05MSAtNTJ6TTkzNyAtNTdsLTkxIDUzcS0xIC00IC0yLjUgLTkuNXQtOS41IC0xOHQtMTggLTE5LjV0LTI5IC02dC00MiAxNWwtMjIzIDEyNmwxIDE0MGwxNDQgLTg3cTE0IC03IDI4IC0zLjV0MjQuNSAxN3QxNi41IDI4dDIuNSAzMHQtMTcuNSAyMi41bC0xNDcgODJsMTI1IDY3bDIxNiAtMTI3CnEyNCAtMTMgMzQuNSAtMjguNXQ4LjUgLTI5dC03IC0yNC41dC0xMSAtMThsLTcgLTZsOTEgLTUzeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjIxIiB1bmljb2RlPSImI3hlNjIxOyIgCmQ9Ik00MzcgODIwcS04OSAtMTYgLTE2My41IC02NHQtMTIxLjUgLTExNi41dC02OS41IC0xNDh0LTExIC0xNjYuNXQ1Ny41IC0xNjVxNDAgLTY4IDEwMCAtMTE3LjV0MTI3IC03NHQxNDEuNSAtMjd0MTQzLjUgMTcuNXQxMzIuNSA2NS41dDEwOC41IDExMi41cTUyIDc5IDY3IDE2OHQtMyAxNjl0LTY1IDE1MnQtMTEyLjUgMTIwLjV0LTE1Mi41IDY5LjV0LTE3OSA0ek00NjAgNjUydi0yMHEwIC01NiAtNC41IC02NS41dC0zMS41IC0xMS41CnEtOSAwIC0xNCAtMXEtNjcgLTUgLTg3IC0zMS41dC0yMyAtMTEyLjVxMSAtNDQgMCAtNzZ0NCAtNTV0MTEgLTM3LjV0MTkuNSAtMjN0MjkuNSAtMTN0NDIgLTYuNWg2cTE2IC0yIDIyLjUgLTN0MTQgLTV0OS41IC03dDQgLTE0LjV0MiAtMjAuNXYtMzJ2LTE1cTAgLTY3IC03LjUgLTc1LjV0LTU0LjUgOS41cS02OSAyMSAtMTIyIDY1LjV0LTg0IDEwMHQtNDIgMTIwLjV0MCAxMjcuNXQ0Ni41IDEyMi41dDkyLjUgMTAzcTMxIDI2IDgxLjUgNDguNQp0NzQuNSAyMi41aDExdi05NHpNNjEyIDczOHE3NyAtMjIgMTM2IC03Mi41dDg5LjUgLTExN3QzNy41IC0xNDB0LTE4LjUgLTE0Ny41dC04MC41IC0xMzJxLTQxIC00MSAtMTA0IC03NC41dC05NSAtMzAuNWwtNyA0bC00IDc0djIwcS0xIDUwIDMuNSA1OC41dDI5LjUgMTAuNXE2IDAgMTAgMXEyNSAyIDQxLjUgNXQyOS41IDExLjV0MjAgMTl0MTIgMzF0NyA0My41dDMgNjFxMCA1MCAtMyA4MHQtOSA1Mi41dC0xOS41IDMzLjV0LTMyLjUgMTcKdC00OSA4bC0zOSA0bC00IDEycS0zIDEyIC0zIDkwLjV0MyA4MS41cTYgNiA0NiAtNHpNNjI0IDQ2OXE5IC02IDkgLTgyLjV0LTkgLTg1LjV0LTExNC41IC05dC0xMTEuNSA5cS0zIDYgLTMgODR0MyA4NHE2IDMgMTEzIDN0MTEzIC0zeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjIyIiB1bmljb2RlPSImI3hlNjIyOyIgCmQ9Ik03NTMgNjA4djE5cTAgMTIgLTMgNDN0LTguNSA1NnQtMTcuNSA0OXQtMzAgMzJxLTE5IDcgLTQzLjUgMXQtNTEuNSAtMjF0LTQ5LjUgLTMwLjV0LTM2LjUgLTI3LjVsLTE1IC0xMnEtMTAgMTAgLTI2LjUgMjUuNXQtNTIuNSA0N3QtNjMgNDV0LTMzIC0wLjVxLTQgLTEwIC0yMSAtNDguNXQtMjIgLTUwdC0xNy41IC00MS41dC0xOSAtNDZ0LTE0LjUgLTM5dC0xNCAtNDRxLTIxIC0xMjMgMTguNSAtMjE2dDEzNC41IC0xNTFxLTQgLTggLTYgLTIxCnEtMiAtNDggMjggLTEzNi41dDUzIC0xMjguNWw3OSAtM3EtOSAxNyAtMjIgNDQuNXQtMzUuNSA5NXQtMjQuNSAxMTQuNXExMDggLTQwIDIwOSAtNHQxODUgMTQycTIzIDI5IDQ4IDc0LjV0MzguNSA3NC41dDQyLjUgOTdxNiAxMiAtMjUuNSAyNHQtNzQgMjB0LTc1IDEyLjV0LTM1LjUgNC41ek01NDIgLTU1cTI4IC0xMCA2NSAtM3EzNyA2MiA5NSA4NXQxNTIgMjdsNyAxOHE1IDEyIDUuNSAxNi41dC0xLjUgMTcuNXEtMjUwIDggLTMyMyAtMTYxegpNNzYgMTA2cS00IC01IC02IC0xMS41dC0xLjUgLTE0LjV0MS41IC0xM3QzLjUgLTEzLjV0Mi41IC05LjVxNDcgOSA4NSA0dDcwIC0yM3Q1MyAtMzl0MzQgLTQ0cTQyIDAgNzAgMTBxLTEgMjEgLTIzLjUgNDl0LTYwLjUgNTQuNXQtOTkgNDJ0LTEyOSA4LjV6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MjMiIHVuaWNvZGU9IiYjeGU2MjM7IiBob3Jpei1hZHYteD0iMTAyNSIgCmQ9Ik05OTAgNDE0cS0yMSAxIC0zOCAxNnQtMjQgMzhxLTIgOCAtOSA4cS01IDAgLTggLTVxLTI5IC0zOCAtMjkgLTg2cTAgLTQ5IDI5IC04N3EzIC01IDggLTVxNyAwIDkgOHE3IDIzIDI0IDM4dDM4IDE2cTIzIC0yIDM0IC0yNnEtMSAtMTEgLTIgLTE5cS0xNSAtOTkgLTY1LjUgLTE4NC41dC0xMjcuNSAtMTQ1LjV2ODA4cTgxIC02MyAxMzIuNSAtMTUzLjV0NjIuNSAtMTk1LjVxLTExIC0yMyAtMzQgLTI1ek02NDkgNTU0cTAgNTMgMjcgOTYKdDcxIDYxdi03ODNxLTQ3IC0yNCAtOTggLTM4djY2NHpNNzMzIDgwNXEtNjYgLTI1IC0xMTIuNSAtODEuNXQtNDYuNSAtMTI0LjV2LTcyM3EtMzAgLTQgLTYwIC00dC02MCA0djcyM3EwIDY4IC00NyAxMjQuNXQtMTEzIDgxLjVxLTE0IDYgLTE0IDIxcTAgMTcgMTYgMjJxMTAzIDQ4IDIxNy41IDQ4dDIxNy41IC00OHExNiAtNSAxNiAtMjJxMCAtMTUgLTE0IC0yMXpNMCAzODRxMCAxMjIgNTMuNSAyMjguNXQxNDcuNSAxNzcuNXYtMzY0CnEtMTEgLTExIC0yNCAtMTJxLTIyIDEgLTM5IDE2dC0yMyAzOHEtMiA4IC05IDhxLTYgMCAtOCAtNXEtMzAgLTM4IC0zMCAtODZxMCAtNDkgMzAgLTg3cTIgLTUgOCAtNXE3IDAgOSA4cTYgMjMgMjMgMzh0MzkgMTZxMTMgLTEgMjQgLTEydi0zNjVxLTk0IDcyIC0xNDcuNSAxNzh0LTUzLjUgMjI4ek0zNzkgNTU0bC0xIC02NjRxLTUxIDE0IC05OCAzOHY3ODNxNDQgLTE4IDcxLjUgLTYxdDI3LjUgLTk2eiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjI0IiB1bmljb2RlPSImI3hlNjI0OyIgCmQ9Ik00ODcgNjgxaDUwdjM3aDM3djUwaC0zN3YzOGgtNTB2LTM4aC0zN3YtNTBoMzd2LTM3ek02NjYgMzM0cTU5IDQwIDkzIDEwNS41dDM0IDE0MC41djg2cTAgOTUgLTY3IDE2Mi41dC0xNjIgNjcuNWgtMTA0cS05NSAwIC0xNjIgLTY3LjV0LTY3IC0xNjIuNXYtODZxMCAtNzUgMzQgLTE0MC41dDkzIC0xMDUuNXEtOTkgLTcgLTE4MSAtNTkuNXQtMTI5LjUgLTEzOHQtNDcuNSAtMTg1LjV2LTc5aDEwMjR2NzlxMCAxMDAgLTQ3LjUgMTg1LjUKdC0xMjkuNSAxMzh0LTE4MSA1OS41ek00NjAgODQ2aDEwNHE3NCAwIDEyNi41IC01M3Q1Mi41IC0xMjd2LTI1aC00NjJ2MjVxMCA3NCA1Mi41IDEyN3QxMjYuNSA1M3pNMjgxIDU4MHYxMWg0NjJ2LTExcTAgLTEwMSAtNjcuNSAtMTczdC0xNjMuNSAtNzJ0LTE2My41IDcydC02Ny41IDE3M3pNOTc0IC03OGgtOTI0djI5cTAgOTEgNDUgMTY4dDEyMi41IDEyMnQxNjguNSA0NWgyNTJxOTEgMCAxNjguNSAtNDV0MTIyLjUgLTEyMnQ0NSAtMTY4di0yOXoKIiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MjUiIHVuaWNvZGU9IiYjeGU2MjU7IiBob3Jpei1hZHYteD0iMTAyNSIgCmQ9Ik0xMDEyIDcwN3EtMTAgMTEgLTI4IDEzcS00IDM3IC0yNyA1MHEtMjcgMTYgLTY2IC0xMHEtMzAgLTE3IC0zOSAtNDhxLTExNCAtNSAtMjE5IC0xMDhxLTExMyAtMTEwIC0xNzggLTEyMHEtMTEgLTIgLTI4IDJxLTI5IDU2IC03NiA4OHEtNSAzNiAtMjcuNSA2OHQtNjcuNSA0MWwtMTAgLTQ1cTE2IC00IDI4IC0xM3QxNy41IC0xOC41dDkgLTIxdDQgLTE3dDAuNSAtNy41di0xM2wxMiAtN3EyNyAtMTcgNDkgLTQ2cS0xOSA1IC02MSAxNwpxLTI0IDcgLTQ3IDd0LTQxIC00LjV0LTM1IC0xM3QtMjggLTE3dC0yMC41IC0xNy41dC0xMy41IC0xMy41dC01IC03LjVsLTY3IC05MWw5NyA1OHExNiA5IDM5IDE1dDUzLjUgM3Q1MS41IC0yMXEyMyAtMTkgNTQgLTI4cS01MiAtMzAgLTEyNiAtMTEwcS00MSAxIC0xMTkgLTUwcS00NiAtMzAgLTc5IC01OGwtMTkgLTE1bDE1IC0xOHExMSAtMTIgNDIgLTIwcS0xOCAtMjUgLTI0IC01MGwtMTggLTY5bDU1IDQ1cTEwIDggMjkuNSAxMi41dDgwIDEuNQp0MTQ2LjUgLTIycTEzIC0yIDE2IC0ycTExIDAgMjcgMTVxNDUgNDQgOTIgNTdxMjMgNyA0NSAyMi41dDM4LjUgMzUuNXQyNiAzNC41dDE2LjUgMjguNXExNCA1IDI3IDExcS04IC0yMSAtMTMgLTM2cS0xMiAtMzAgLTk2IC0xNTFsLTMwIC00M2w1MyA3cTE1MCAyMCAxODUgMTIzcTYgMTkgMTQgNTZxNyAyOCAxMC41IDQzdDEzIDQwLjV0MjAgNDJ0MjguNSAzNS41dDQxIDMzcTM1IDIxIDYxLjUgNTUuNXQ0MCA3M3QxOS41IDY2dDkgNTIuNQpxMSAwIDEwIDNxNDQgMTEgNDQgMzZ2M3ExIDI1IC0xMiAzN3pNOTQ0IDY3MGwtMTkgLTN2LTE5cTAgLTQgLTEuNSAtMTh0LTggLTQ1dC0xNyAtNTkuNXQtMzIgLTU4LjV0LTUwLjUgLTQ2cS0yOCAtMTcgLTUwIC00MHQtMzQuNSAtNDN0LTIzLjUgLTQ5LjV0LTE1IC00NS41dC0xMSAtNDVxLTggLTM3IC0xMyAtNTJxLTE5IC01OCAtOTMgLTgwcTU4IDg3IDY4IDExMnE2IDE1IDQ4IDEzNnEzIDcgNSAxM2wtNDUgMTNsLTQgLTExCnEtMjEgLTUwIC04MyAtNjdsLTEwIC0zbC01IC0xMHEtMyAtNiAtNSAtMTAuNXQtMTMgLTIydC0yMiAtMjkuNXQtMjcuNSAtMjV0LTMzLjUgLTE4cS01OSAtMTYgLTExMiAtNjl2LTFoLTFxLTE0NyAzMiAtMjI1IDIzcTMgMiA4IDNxOCAxIDM0IDBxMTcgLTIgNDYuNSAwdDU5LjUgN3Q3MSAyM3Q4MSA0NnExMjQgODggMTM1IDExMmwtNDIgMTlxMCAxIDEgMnYxcS0xNyAtMjMgLTEyMSAtOTZxLTM1IC0yNSAtNzEgLTQxdC02Mi41IC0yMC41CnQtNTMgLTYuNXQtNDMuNSAxaC0zMHEtMjMgMiAtNDQgNnEyMyAxNiA0MyAzMHEzMyAyMSA1NyAzMXQzMC41IDExdDkuNSAwbDE0IC00bDEwIDExcTM1IDM5IDc3LjUgNzYuNXQ2Mi41IDQxLjVoMmw3NSAyNmwtMTEgNDVxLTcgLTIgLTI1IC0zLjV0LTUxLjUgNC41dC01NC41IDI0cS0yMiAxOCAtNTAgMjZxMTAgLTEgMjMgLTRxMTA0IC0zMCAxMjEgLTMyaDJsMzEgMXE5IDAgMTUgMXE4MSAxMyAyMDQgMTMzcTMwIDI5IDYyIDUwdDU1IDI5CnQ0NC41IDEzdDMwLjUgM3QxMyAtMWwzMCAtNGwtNCAzMHEtMSA4IDMuNSAxNXQ4LjUgOS41dDYgMy41aDFsMSAxcTExIDggMTcgOXE2IC05IDQgLTMybC0yIC0yOGwxMCAxcTAgMSAtMSAweiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjI2IiB1bmljb2RlPSImI3hlNjI2OyIgaG9yaXotYWR2LXg9IjEwMzYiIApkPSJNODIxIDQ5MXE0NCAwIDgzIC0xNi41dDY4IC00NnQ0NS41IC02OHQxNi41IC04Mi41dC0xNi41IC04M3QtNDUuNSAtNjcuNXQtNjggLTQ1dC04MyAtMTYuNXQtODIuNSAxNi41dC02NyA0NXQtNDUgNjcuNXQtMTYuNSA4M3EwIDI5IDcgNTRxMiA3IDQgMTN0NCAxM2wxNCA0NGwtMzE3IDU4cTQ2IC0yOCA3NC41IC03NS41dDI4LjUgLTEwNi41cTAgLTQ0IC0xNi41IC04M3QtNDYgLTY3LjV0LTY4IC00NXQtODIgLTE2LjV0LTgyIDE2LjUKdC02OCA0NXQtNDYgNjcuNXQtMTYuNSA4M3QxNi41IDgyLjV0NDYgNjh0NjggNDZ0ODEuNSAxNi41cTUgMCA5IC0wLjV0OCAtMC41cTE3IDU3IDM1IDExNy41dDMyLjUgMTEydDI1LjUgODl0MTUgNTAuNXE2IDIxIDIxIDMwdDMwIDYuNXQyNS41IC0xM3Q2LjUgLTI4LjVxLTEgLTYgLTUgLTIxdC0xMSAtMzdsODAgLTFsLTEgLTM0bC04OCAxcS0xMiAtNDEgLTI2LjUgLTkydC0zMS41IC0xMDVsMzQwIC00OWwzMyAxMDBoLTEwM3EtNyAxMSAtMTAgMjIKcS0yIDkgLTEgMTYuNXQxMiAxMi41cTExIDQgMzcuNSA5LjV0NTcgOHQ1NyAxLjV0MzcuNSAtOXQxMiAtMTguNXQtMiAtMTkuNXEtNCAtMTEgLTEyIC0yM2gtMjBsLTQ0IC0xMjVoODdoM3pNMzYyIDI3OXEwIDQxIC0xOS41IDc1LjV0LTUyLjUgNTQuNXEtMTggLTYyIC0zMSAtMTA1LjV0LTE3IC01NS41cS02IC0xNyAtMjEuNSAtMjN0LTMwLjUgLTN0LTI0LjUgMTMuNXQtMy41IDI3LjVxNCAxMSAxNy41IDU4dDMyLjUgMTExaC0zCnEtMzIgMCAtNTkuNSAtMTJ0LTQ4IC0zMi41dC0zMi41IC00OC41dC0xMiAtNjB0MTIgLTU5LjV0MzIuNSAtNDguNXQ0OCAtMzMuNXQ2MCAtMTIuNXQ2MCAxMi41dDQ4IDMzLjV0MzIuNSA0OC41dDEyIDU5LjV6TTgxOSAxMjVxMzIgMCA1OS41IDEyLjV0NDguNSAzMy41dDMzIDQ4LjV0MTIgNTkuNXQtMTIgNjB0LTMzIDQ4LjV0LTQ4LjUgMzIuNXQtNTkuNSAxMmgtNnEtNDcgLTIgLTgzIC0yNy41dC01MyAtNjUuNWwtNiAtMTgKcS02IC0yMCAtNiAtNDJxMCAtMzIgMTIuNSAtNTkuNXQzMy41IC00OC41dDQ4LjUgLTMzLjV0NTkuNSAtMTIuNXpNNTQ1LjUgMzcwcTI1LjUgMCA0My41IC0xOHQxOCAtNDMuNXQtMTggLTQzLjV0LTQzLjUgLTE4dC00MyAxOHQtMTcuNSA0My41dDE3LjUgNDMuNXQ0MyAxOHoiIC8+CiAgICA8Z2x5cGggZ2x5cGgtbmFtZT0idW5pRTYyNyIgdW5pY29kZT0iJiN4ZTYyNzsiIApkPSJNMjg4IDY4OGgyNjNxNzggMCAxMjQgLTQydDQ2IC0xMDlxMCAtNDEgLTIwIC03NHQtNjAgLTUycTE3IC02IDMwLjUgLTE2dDIwLjUgLTE3LjV0MTggLTIyLjVxMjYgLTM1IDI2IC05MXEwIC03NyAtNTYgLTEyN3EtMjkgLTI2IC01OS41IC0zOHQtNzQuNSAtMTJoLTI1OHY2MDF6TTM4MSA0MzRoMTM0cTU0IDAgODQgMjMuNXQzMCA3My41cTAgNDMgLTI4LjUgNjUuNXQtODQuNSAyMi41aC0xMzV2LTE4NXpNMzgxIDE1N2gxNjAKcTMwIDAgNDYgNi41dDM0IDIyLjVxMzIgMzAgMzIgODBxMCA1MSAtMzYgNzZxLTE5IDE0IC0zNy41IDIwdC01MS41IDZoLTE0N3YtMjExeiIgLz4KICAgIDxnbHlwaCBnbHlwaC1uYW1lPSJ1bmlFNjI4IiB1bmljb2RlPSImI3hlNjI4OyIgaG9yaXotYWR2LXg9IjEwMzEiIApkPSJNNDIyIDY3MGwtOTcgMzdsLTI1IC0xMDFsLTEzNiAzN3YtMTI3aC05NnYtNTIwaDgzM3YxODF2MTNoNjd2MTI5aC02N3YxMnYxODVoLTMwdjYybC0zODYgMTk0ek0zNDcgNjY2bDM2MyAtMTUwaC03NGwtMzA2IDgyek0xOTYgNjAybDMyMCAtODZoLTMyMHY4NnpNODM5IDYxaC03MDd2Mzg3aDcwN3YtMTI5aC0yMjV2LTEyOWgyMjV2LTEyOXpNODM5IDIyMmgtMTkzdjY1aDE5M3YtNjV6TTgzOSA1MTZoLTk2djIwbC0yODIgMTE5bDQwIDYwCmwzMzggLTE2MHYtMzl6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MjkiIHVuaWNvZGU9IiYjeGU2Mjk7IiAKZD0iTTk1IDgzMmg2NHYtODk2aC02NHY4OTZ6TTY3NCA3NjZoLTQ0OHYtMzIwaDQ0OHYzMjB6TTYxMCA1MTBoLTMyMHYxOTJoMzIwdi0xOTJ6TTIyNSAzMThoNzA0di0zMjBoLTcwNHYzMjB6IiAvPgogICAgPGdseXBoIGdseXBoLW5hbWU9InVuaUU2MkEiIHVuaWNvZGU9IiYjeGU2MmE7IiAKZD0iTTc2IDY5Mmg4NjZ2LTYxaC04NjZ2NjF6TTc2IDMyMGg4NjZ2LTYxaC04NjZ2NjF6TTc4IDUwNmg2MDN2LTYxaC02MDN2NjF6TTc2IDEzOWg1OTl2LTYxaC01OTl2NjF6IiAvPgogIDwvZm9udD4KPC9kZWZzPjwvc3ZnPgo="

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jQuery = __webpack_require__(1);

	var _jQuery2 = _interopRequireDefault(_jQuery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// (function($){
	var validation = {
	  checkNull: function checkNull(obj) {
	    var val = this.__getValue(obj);
	    return val ? true : false;
	  },
	  checkPhone: function checkPhone(obj) {
	    var val = this.__getValue(obj);
	    if (!val) {
	      return false;
	    }
	    // var regexp = new RegExp('/^[1-9][0-9]{10}$/', 'gi');
	    // var regExp = new RegExp('/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/', 'gi');
	    var phoneno = /^1[3|4|5|7|8]\d{9}$/;
	    var r = phoneno.test(val);
	    return r;
	  },
	  checkEmail: function checkEmail(obj) {
	    var val = this.__getValue(obj);
	    if (!val) {
	      return false;
	    }
	    // var regExp = new RegExp('/[0-9a-zA-Z]+@\w\d+\.\w+/', 'gi');
	    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    var r = re.test(val);
	    return r;
	  },
	  isSame: function isSame(obj1, obj2) {
	    var val1 = this.__getValue(obj1);
	    var val2 = this.__getValue(obj2);
	    return val1 == val2 ? true : false;
	  },
	  __getValue: function __getValue(obj) {
	    if (!obj) {
	      return '';
	    }
	    if (typeof obj == 'string') {
	      return _jQuery2.default.trim(obj);
	    } else if (obj instanceof _jQuery2.default) {
	      return _jQuery2.default.trim(obj.val());
	    } else {
	      var $obj = (0, _jQuery2.default)(obj);
	      if ($obj.length > 0) {
	        return _jQuery2.default.trim($obj.val());
	      }
	    }
	  }
	}; /*
	    * @desc 验证方法
	    */


	module.exports = validation;
	//   window.Validation = validation;
	// })(jQuery);

/***/ }
/******/ ]);