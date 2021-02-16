/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
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

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
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

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
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

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
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
	if ( typeof target !== "object" && !isFunction( target ) ) {
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
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

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
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
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
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
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
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

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
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
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

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
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
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

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
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
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
		return ( cache[ key + " " ] = value );
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
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
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
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
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
		while ( ( cur = cur.nextSibling ) ) {
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
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
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
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
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
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
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
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
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

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

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
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

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
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
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
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
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

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
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
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
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
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
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
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
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
		while ( ( elem = results[ i++ ] ) ) {
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
		while ( ( node = elem[ i++ ] ) ) {

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
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
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
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
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

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
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
								while ( ( node = node[ dir ] ) ) {
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
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

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
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

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
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
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
			return !Expr.pseudos[ "empty" ]( elem );
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
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

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
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
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
		selector += tokens[ i ].value;
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
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
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
		if ( ( elem = unmatched[ i ] ) ) {
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
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

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
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
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
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
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
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
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
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
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
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
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
					if ( ( elem = !matcher && elem ) ) {
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
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
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
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

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
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

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
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



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



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
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
							if ( isFunction( this[ match ] ) ) {
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
		} else if ( isFunction( selector ) ) {
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
	parentsUntil: function( elem, _i, until ) {
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
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
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
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
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
			locked = locked || options.once;

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
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

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

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
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
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
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
									if ( isFunction( then ) ) {

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
								isFunction( onProgress ) ?
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
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
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

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
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
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

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
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
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
				fn = function( elem, _key, value ) {
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

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
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
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
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
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
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

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
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
								name = camelCase( name.slice( 5 ) );
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
				if ( !queue || Array.isArray( data ) ) {
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

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
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
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
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
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
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

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
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

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



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

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
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
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

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

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
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

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
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

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
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
			events = elemData.events = Object.create( null );
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
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

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
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

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

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
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
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
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
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

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

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
	this.timeStamp = src && src.timeStamp || Date.now();

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
	code: true,
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
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

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

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

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
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
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

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
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
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

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

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
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

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

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


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

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

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
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
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
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
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

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
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
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
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

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

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
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
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
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

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
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
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
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
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
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

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
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
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
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

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
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
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
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
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
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
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
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
		if ( clearQueue ) {
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

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
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

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
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
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
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
					nodeName( elem, "input" ) ) {
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

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

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

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
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

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
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
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

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




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
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

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

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
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
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

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
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
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

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
			if ( Array.isArray( value ) ) {
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


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

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
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

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
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
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
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

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

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
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

var nonce = { guid: Date.now() };

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

	if ( Array.isArray( obj ) ) {

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

	} else if ( !traditional && toType( obj ) === "object" ) {

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
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

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
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
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
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

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
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
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
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
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

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
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

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
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

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
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

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
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
		if ( isFunction( html ) ) {
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
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
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
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

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
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

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

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

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
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
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
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
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
			if ( responseContainer && isFunction( overwritten ) ) {
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
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

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




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




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

		if ( isFunction( options ) ) {

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
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
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

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

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
jQuery.each( [ "top", "left" ], function( _i, prop ) {
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

				if ( isWindow( elem ) ) {

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


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
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
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
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
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



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

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
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
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

/**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 30, 2020
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Swiper = factory());
}(this, (function () { 'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  /**
   * SSR Window 3.0.0-alpha.4
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: May 20, 2020
   */

  /* eslint-disable no-param-reassign */
  function isObject(obj) {
    return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
  }

  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }

    if (src === void 0) {
      src = {};
    }

    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }

  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };

  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }

  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }

      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }

      clearTimeout(id);
    }
  };

  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  /**
   * Dom7 3.0.0-alpha.7
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * https://framework7.io/docs/dom7.html
   *
   * Copyright 2020, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: July 14, 2020
   */

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }
  /* eslint-disable no-proto */


  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      }
    });
  }

  var Dom7 = /*#__PURE__*/function (_Array) {
    _inheritsLoose(Dom7, _Array);

    function Dom7(items) {
      var _this;

      _this = _Array.call.apply(_Array, [this].concat(items)) || this;
      makeReactive(_assertThisInitialized(_this));
      return _this;
    }

    return Dom7;
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }

    var res = [];
    arr.forEach(function (el) {
      if (Array.isArray(el)) {
        res.push.apply(res, arrayFlat(el));
      } else {
        res.push(el);
      }
    });
    return res;
  }

  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }

  function arrayUnique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    return uniqueArray;
  }

  function qsa(selector, context) {
    if (typeof selector !== 'string') {
      return [selector];
    }

    var a = [];
    var res = context.querySelectorAll(selector);

    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }

    return a;
  }

  function $(selector, context) {
    var window = getWindow();
    var document = getDocument();
    var arr = [];

    if (!context && selector instanceof Dom7) {
      return selector;
    }

    if (!selector) {
      return new Dom7(arr);
    }

    if (typeof selector === 'string') {
      var html = selector.trim();

      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (html.indexOf('<li') === 0) toCreate = 'ul';
        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
        if (html.indexOf('<tbody') === 0) toCreate = 'table';
        if (html.indexOf('<option') === 0) toCreate = 'select';
        var tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;

        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);

    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }

    return new Dom7(arrayUnique(arr));
  }

  $.fn = Dom7.prototype;

  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, classNames);
    });
    return this;
  }

  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
    });
    return this;
  }

  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      classNames.forEach(function (className) {
        el.classList.toggle(className);
      });
    });
  }

  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    return arrayFilter(this, function (el) {
      return classNames.filter(function (className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }

  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  }

  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }

    return this;
  }

  function transition(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transition = typeof duration !== 'string' ? duration + "ms" : duration;
    }

    return this;
  }

  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) return;
      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
        var _parents = $(target).parents(); // eslint-disable-line


        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

          el.dom7LiveListeners[_event].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });

          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;
    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function trigger() {
    var window = getWindow();

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];

        if (window.CustomEvent) {
          var evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }

    return this;
  }

  function transitionEnd(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionend', fireCallBack);
    }

    if (callback) {
      dom.on('transitionend', fireCallBack);
    }

    return this;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();

        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();

        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = document.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === window ? window.scrollY : el.scrollTop;
      var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }

    return null;
  }

  function styles() {
    var window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }

  function css(props, value) {
    var window = getWindow();
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        // .css('width')
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (var _prop in props) {
            this[i].style[_prop] = props[_prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  }

  function each(callback) {
    if (!callback) return this;
    this.forEach(function (el, index) {
      callback.apply(el, [el, index]);
    });
    return this;
  }

  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }

  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  }

  function text(text) {
    if (typeof text === 'undefined') {
      return this[0] ? this[0].textContent.trim() : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') return false;

    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    if (selector === document) {
      return el === document;
    }

    if (selector === window) {
      return el === window;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }

      return i;
    }

    return undefined;
  }

  function eq(index) {
    if (typeof index === 'undefined') return this;
    var length = this.length;

    if (index > length - 1) {
      return $([]);
    }

    if (index < 0) {
      var returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }

    return $([this[index]]);
  }

  function append() {
    var newChild;
    var document = getDocument();

    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function prepend(newChild) {
    var document = getDocument();
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }

        return $([]);
      }

      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.nextElementSibling) {
      var _next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_next).is(selector)) nextEls.push(_next);
      } else nextEls.push(_next);

      el = _next;
    }

    return $(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }

        return $([]);
      }

      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_prev).is(selector)) prevEls.push(_prev);
      } else prevEls.push(_prev);

      el = _prev;
    }

    return $(prevEls);
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(parents);
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode; // eslint-disable-line

      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector)) parents.push(_parent);
        } else {
          parents.push(_parent);
        }

        _parent = _parent.parentNode;
      }
    }

    return $(parents);
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return $([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return $(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return $(children);
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }

    return this;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    transform: transform,
    transition: transition,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    styles: styles,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove
  };
  Object.keys(Methods).forEach(function (methodName) {
    $.fn[methodName] = Methods[methodName];
  });

  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  }

  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setTimeout(callback, delay);
  }

  function now() {
    return Date.now();
  }

  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }

    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = window.getComputedStyle(el, null);

    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  }

  function isObject$1(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  }

  function extend$1() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
              extend$1(to[nextKey], nextSource[nextKey]);
            } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
              to[nextKey] = {};
              extend$1(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }

  function bindModuleMethods(instance, obj) {
    Object.keys(obj).forEach(function (key) {
      if (isObject$1(obj[key])) {
        Object.keys(obj[key]).forEach(function (subKey) {
          if (typeof obj[key][subKey] === 'function') {
            obj[key][subKey] = obj[key][subKey].bind(instance);
          }
        });
      }

      instance[key] = obj[key];
    });
  }

  var support;

  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
      observer: function checkObserver() {
        return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
      }(),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('testPassiveListener', null, opts);
        } catch (e) {// No support
        }

        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return 'ongesturestart' in window;
      }()
    };
  }

  function getSupport() {
    if (!support) {
      support = calcSupport();
    }

    return support;
  }

  var device;

  function calcDevice(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        userAgent = _ref.userAgent;

    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel'; // iPadOs 13 fix

    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

    if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    } // Android


    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }

    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    } // Export object


    return device;
  }

  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    if (!device) {
      device = calcDevice(overrides);
    }

    return device;
  }

  var browser;

  function calcBrowser() {
    var window = getWindow();

    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }

    return {
      isEdge: !!window.navigator.userAgent.match(/Edge/g),
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
  }

  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }

    return browser;
  }

  var Resize = {
    name: 'resize',
    create: function create() {
      var swiper = this;
      extend$1(swiper, {
        resize: {
          resizeHandler: function resizeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit('beforeResize');
            swiper.emit('resize');
          },
          orientationChangeHandler: function orientationChangeHandler() {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            swiper.emit('orientationchange');
          }
        }
      });
    },
    on: {
      init: function init(swiper) {
        var window = getWindow(); // Emit resize

        window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

        window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      },
      destroy: function destroy(swiper) {
        var window = getWindow();
        window.removeEventListener('resize', swiper.resize.resizeHandler);
        window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
      }
    }
  };

  var Observer = {
    attach: function attach(target, options) {
      if (options === void 0) {
        options = {};
      }

      var window = getWindow();
      var swiper = this;
      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          swiper.emit('observerUpdate', mutations[0]);
          return;
        }

        var observerUpdate = function observerUpdate() {
          swiper.emit('observerUpdate', mutations[0]);
        };

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      swiper.observer.observers.push(observer);
    },
    init: function init() {
      var swiper = this;
      if (!swiper.support.observer || !swiper.params.observer) return;

      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();

        for (var i = 0; i < containerParents.length; i += 1) {
          swiper.observer.attach(containerParents[i]);
        }
      } // Observe container


      swiper.observer.attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      }); // Observe wrapper

      swiper.observer.attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.observers.forEach(function (observer) {
        observer.disconnect();
      });
      swiper.observer.observers = [];
    }
  };
  var Observer$1 = {
    name: 'observer',
    params: {
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        observer: _extends(_extends({}, Observer), {}, {
          observers: []
        })
      });
    },
    on: {
      init: function init(swiper) {
        swiper.observer.init();
      },
      destroy: function destroy(swiper) {
        swiper.observer.destroy();
      }
    }
  };

  var modular = {
    useParams: function useParams(instanceParams) {
      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          extend$1(instanceParams, module.params);
        }
      });
    },
    useModules: function useModules(modulesParams) {
      if (modulesParams === void 0) {
        modulesParams = {};
      }

      var instance = this;
      if (!instance.modules) return;
      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Add event listeners

        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    }
  };

  /* eslint-disable no-underscore-dangle */
  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        self.off(events, onceHandler);

        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
      }

      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';

      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }

      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);

      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }

      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(data));
          });
        }

        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };

  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;

    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }

    if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }

    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    } // Subtract paddings


    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    extend$1(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  function updateSlides() {
    var swiper = this;
    var window = getWindow();
    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl,
        swiperSize = swiper.size,
        rtl = swiper.rtlTranslate,
        wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children("." + swiper.params.slideClass);
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];

    function slidesForMargin(slideEl, slideIndex) {
      if (!params.cssMode) return true;

      if (slideIndex === slides.length - 1) {
        return false;
      }

      return true;
    }

    var offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.snapGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;

    if (typeof swiperSize === 'undefined') {
      return;
    }

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    }

    swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl) slides.css({
      marginLeft: '',
      marginTop: ''
    });else slides.css({
      marginRight: '',
      marginBottom: ''
    });
    var slidesNumberEvenToRows;

    if (params.slidesPerColumn > 1) {
      if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
        slidesNumberEvenToRows = slidesLength;
      } else {
        slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
      }

      if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
        slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
      }
    } // Calc slides


    var slideSize;
    var slidesPerColumn = params.slidesPerColumn;
    var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
    var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;
      var slide = slides.eq(i);

      if (params.slidesPerColumn > 1) {
        // Set slides order
        var newSlideOrderIndex = void 0;
        var column = void 0;
        var row = void 0;

        if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
          var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
          var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
          var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
          slide.css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (params.slidesPerColumnFill === 'column') {
          column = Math.floor(i / slidesPerColumn);
          row = i - column * slidesPerColumn;

          if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
            row += 1;

            if (row >= slidesPerColumn) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
      }

      if (slide.css('display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        var slideStyles = window.getComputedStyle(slide[0], null);
        var currentTransform = slide[0].style.transform;
        var currentWebKitTransform = slide[0].style.webkitTransform;

        if (currentTransform) {
          slide[0].style.transform = 'none';
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = 'none';
        }

        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          if (swiper.isHorizontal()) {
            var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
            var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
            var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
            var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
            var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
            var boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              var _slide$ = slide[0],
                  clientWidth = _slide$.clientWidth,
                  offsetWidth = _slide$.offsetWidth;
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          } else {
            var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
            var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
            var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
            var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
            var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);

            var _boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (_boxSizing && _boxSizing === 'border-box') {
              slideSize = height + marginTop + marginBottom;
            } else {
              var _slide$2 = slide[0],
                  clientHeight = _slide$2.clientHeight,
                  offsetHeight = _slide$2.offsetHeight;
              slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom + (offsetHeight - clientHeight);
            }
          }
        }

        if (currentTransform) {
          slide[0].style.transform = currentTransform;
        }

        if (currentWebKitTransform) {
          slide[0].style.webkitTransform = currentWebKitTransform;
        }

        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);

        if (slides[i]) {
          if (swiper.isHorizontal()) {
            slides[i].style.width = slideSize + "px";
          } else {
            slides[i].style.height = slideSize + "px";
          }
        }
      }

      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    var newSlidesGrid;

    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });
    }

    if (params.setWrapperSize) {
      if (swiper.isHorizontal()) $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });else $wrapperEl.css({
        height: swiper.virtualSize + params.spaceBetween + "px"
      });
    }

    if (params.slidesPerColumn > 1) {
      swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
      swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
      if (swiper.isHorizontal()) $wrapperEl.css({
        width: swiper.virtualSize + params.spaceBetween + "px"
      });else $wrapperEl.css({
        height: swiper.virtualSize + params.spaceBetween + "px"
      });

      if (params.centeredSlides) {
        newSlidesGrid = [];

        for (var _i = 0; _i < snapGrid.length; _i += 1) {
          var slidesGridItem = snapGrid[_i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
          if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
        }

        snapGrid = newSlidesGrid;
      }
    } // Remove last grid elements depending on width


    if (!params.centeredSlides) {
      newSlidesGrid = [];

      for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
        var _slidesGridItem = snapGrid[_i2];
        if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);

        if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(_slidesGridItem);
        }
      }

      snapGrid = newSlidesGrid;

      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }

    if (snapGrid.length === 0) snapGrid = [0];

    if (params.spaceBetween !== 0) {
      if (swiper.isHorizontal()) {
        if (rtl) slides.filter(slidesForMargin).css({
          marginLeft: spaceBetween + "px"
        });else slides.filter(slidesForMargin).css({
          marginRight: spaceBetween + "px"
        });
      } else slides.filter(slidesForMargin).css({
        marginBottom: spaceBetween + "px"
      });
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;

      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    extend$1(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }

    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }

    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var newHeight = 0;
    var i;

    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    } // Find slides currently in view


    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var index = swiper.activeIndex + i;
          if (index > swiper.slides.length) break;
          activeSlides.push(swiper.slides.eq(index)[0]);
        }
      }
    } else {
      activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
    } // Find new height from highest slide in view


    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height


    if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
  }

  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }

    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides

    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var slide = slides[i];
      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

      if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
        var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
        var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }
      }

      slide.progress = rtl ? -slideProgress : slideProgress;
    }

    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress(translate) {
    var swiper = this;

    if (typeof translate === 'undefined') {
      var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }

    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress,
        isBeginning = swiper.isBeginning,
        isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;

    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }

    extend$1(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }

    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }

    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides,
        params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        activeIndex = swiper.activeIndex,
        realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
    var activeSlide;

    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes


    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide


    var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide


    var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }

    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
      }

      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
      }
    }

    swiper.emitSlidesClasses();
  }

  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid,
        snapGrid = swiper.snapGrid,
        params = swiper.params,
        previousIndex = swiper.activeIndex,
        previousRealIndex = swiper.realIndex,
        previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;

    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex


      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
    }

    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }

      return;
    } // Get real index


    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    extend$1(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');

    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }

    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e.target).closest("." + params.slideClass)[0];
    var slideFound = false;

    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) slideFound = true;
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;

      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = $(slide).index();
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }

    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };

  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }

    var swiper = this;
    var params = swiper.params,
        rtl = swiper.rtlTranslate,
        translate = swiper.translate,
        $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate,
        params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        wrapperEl = swiper.wrapperEl,
        progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
    }

    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (translateBounds === void 0) {
      translateBounds = true;
    }

    var swiper = this;
    var params = swiper.params,
        wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

    swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = swiper.isHorizontal();

      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        }
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;

            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };

  function setTransition(duration, byController) {
    var swiper = this;

    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }

    swiper.emit('setTransition', duration, byController);
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var activeIndex = swiper.activeIndex,
        params = swiper.params,
        previousIndex = swiper.previousIndex;
    if (params.cssMode) return;

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }

    swiper.emit('transitionStart');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionStart');
        return;
      }

      swiper.emit('slideChangeTransitionStart');

      if (dir === 'next') {
        swiper.emit('slideNextTransitionStart');
      } else {
        swiper.emit('slidePrevTransitionStart');
      }
    }
  }

  function transitionEnd$1(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var activeIndex = swiper.activeIndex,
        previousIndex = swiper.previousIndex,
        params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }

    swiper.emit('transitionEnd');

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit('slideResetTransitionEnd');
        return;
      }

      swiper.emit('slideChangeTransitionEnd');

      if (dir === 'next') {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }

  var transition$1 = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd$1
  };

  function slideTo(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (typeof index !== 'number' && typeof index !== 'string') {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
    }

    if (typeof index === 'string') {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      var indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      var isValidNumber = isFinite(indexAsNumber);

      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.


      index = indexAsNumber;
    }

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params,
        snapGrid = swiper.snapGrid,
        slidesGrid = swiper.slidesGrid,
        previousIndex = swiper.previousIndex,
        activeIndex = swiper.activeIndex,
        rtl = swiper.rtlTranslate,
        wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex]; // Update progress

    swiper.updateProgress(translate); // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
          slideIndex = i;
        }
      }
    } // Directions locks


    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }

      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }

    var direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      swiper.updateSlidesClasses();

      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }

      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }

      return false;
    }

    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = -translate;

      if (rtl) {
        t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
      }

      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
      } else {
        // eslint-disable-next-line
        if (wrapperEl.scrollTo) {
          var _wrapperEl$scrollTo;

          wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
        } else {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        }
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var newIndex = index;

    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params,
        animating = swiper.animating;
    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params,
        animating = swiper.animating,
        snapGrid = swiper.snapGrid,
        slidesGrid = swiper.slidesGrid,
        rtlTranslate = swiper.rtlTranslate;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    var translate = rtlTranslate ? swiper.translate : -swiper.translate;

    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }

    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

    if (typeof prevSnap === 'undefined' && params.cssMode) {
      snapGrid.forEach(function (snap) {
        if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
      });
    }

    var prevIndex;

    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
    }

    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }

  /* eslint no-unused-vars: "off" */
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (threshold === void 0) {
      threshold = 0.5;
    }

    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];

      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }

    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;

    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };

  function loopCreate() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
    var slides = $wrapperEl.children("." + params.slideClass);

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
          $wrapperEl.append(blankNode);
        }

        slides = $wrapperEl.children("." + params.slideClass);
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;

    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (el, index) {
      var slide = $(el);

      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }

      if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }

      slide.attr('data-swiper-slide-index', index);
    });

    for (var _i = 0; _i < appendSlides.length; _i += 1) {
      $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
    }

    for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
      $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix() {
    var swiper = this;
    swiper.emit('beforeLoopFix');
    var activeIndex = swiper.activeIndex,
        slides = swiper.slides,
        loopedSlides = swiper.loopedSlides,
        allowSlidePrev = swiper.allowSlidePrev,
        allowSlideNext = swiper.allowSlideNext,
        snapGrid = swiper.snapGrid,
        rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;

      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (_slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
  }

  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        params = swiper.params,
        slides = swiper.slides;
    $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };

  function setGrabCursor(moving) {
    var swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    var el = swiper.el;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor() {
    var swiper = this;

    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }

    swiper.el.style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  function appendSlide(slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        params = swiper.params;

    if (params.loop) {
      swiper.loopDestroy();
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.append(slides[i]);
      }
    } else {
      $wrapperEl.append(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }
  }

  function prependSlide(slides) {
    var swiper = this;
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        activeIndex = swiper.activeIndex;

    if (params.loop) {
      swiper.loopDestroy();
    }

    var newActiveIndex = activeIndex + 1;

    if (typeof slides === 'object' && 'length' in slides) {
      for (var i = 0; i < slides.length; i += 1) {
        if (slides[i]) $wrapperEl.prepend(slides[i]);
      }

      newActiveIndex = activeIndex + slides.length;
    } else {
      $wrapperEl.prepend(slides);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    swiper.slideTo(newActiveIndex, 0, false);
  }

  function addSlide(index, slides) {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        params = swiper.params,
        activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var baseLength = swiper.slides.length;

    if (index <= 0) {
      swiper.prependSlide(slides);
      return;
    }

    if (index >= baseLength) {
      swiper.appendSlide(slides);
      return;
    }

    var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
    var slidesBuffer = [];

    for (var i = baseLength - 1; i >= index; i -= 1) {
      var currentSlide = swiper.slides.eq(i);
      currentSlide.remove();
      slidesBuffer.unshift(currentSlide);
    }

    if (typeof slides === 'object' && 'length' in slides) {
      for (var _i = 0; _i < slides.length; _i += 1) {
        if (slides[_i]) $wrapperEl.append(slides[_i]);
      }

      newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
    } else {
      $wrapperEl.append(slides);
    }

    for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
      $wrapperEl.append(slidesBuffer[_i2]);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeSlide(slidesIndexes) {
    var swiper = this;
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        activeIndex = swiper.activeIndex;
    var activeIndexBuffer = activeIndex;

    if (params.loop) {
      activeIndexBuffer -= swiper.loopedSlides;
      swiper.loopDestroy();
      swiper.slides = $wrapperEl.children("." + params.slideClass);
    }

    var newActiveIndex = activeIndexBuffer;
    var indexToRemove;

    if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
      for (var i = 0; i < slidesIndexes.length; i += 1) {
        indexToRemove = slidesIndexes[i];
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      }

      newActiveIndex = Math.max(newActiveIndex, 0);
    } else {
      indexToRemove = slidesIndexes;
      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
      newActiveIndex = Math.max(newActiveIndex, 0);
    }

    if (params.loop) {
      swiper.loopCreate();
    }

    if (!(params.observer && swiper.support.observer)) {
      swiper.update();
    }

    if (params.loop) {
      swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
    } else {
      swiper.slideTo(newActiveIndex, 0, false);
    }
  }

  function removeAllSlides() {
    var swiper = this;
    var slidesIndexes = [];

    for (var i = 0; i < swiper.slides.length; i += 1) {
      slidesIndexes.push(i);
    }

    swiper.removeSlide(slidesIndexes);
  }

  var manipulation = {
    appendSlide: appendSlide,
    prependSlide: prependSlide,
    addSlide: addSlide,
    removeSlide: removeSlide,
    removeAllSlides: removeAllSlides
  };

  function onTouchStart(event) {
    var swiper = this;
    var document = getDocument();
    var window = getWindow();
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }

    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }

    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet

    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      $targetEl = $(event.path[0]);
    }

    if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
      swiper.allowClick = true;
      return;
    }

    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
      return;
    }

    extend$1(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;

    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($targetEl.is(data.formElements)) preventDefault = false;

      if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
        document.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

      if (params.touchStartForcePreventDefault || shouldPreventDefault) {
        e.preventDefault();
      }
    }

    swiper.emit('touchStart', e);
  }

  function onTouchMove(event) {
    var document = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches,
        rtl = swiper.rtlTranslate;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      return;
    }

    if (data.isTouchEvent && e.type !== 'touchmove') return;
    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }

    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;

      if (data.isTouched) {
        extend$1(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }

      return;
    }

    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }

    if (data.isTouchEvent && document.activeElement) {
      if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }

    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }

    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;

      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }

    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }

    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }

    if (!data.startMoving) {
      return;
    }

    swiper.allowClick = false;

    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }

    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop) {
        swiper.loopFix();
      }

      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);

      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }

      data.allowMomentumBounce = false; // Grab Cursor

      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }

      swiper.emit('sliderFirstMove', e);
    }

    swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }

    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    } // Directions locks


    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    } // Threshold


    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) return; // Update active index in free mode

    if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    if (params.freeMode) {
      // Velocity
      if (data.velocities.length === 0) {
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
          time: data.touchStartTime
        });
      }

      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
        time: now()
      });
    } // Update progress


    swiper.updateProgress(data.currentTranslate); // Update translate

    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches,
        rtl = swiper.rtlTranslate,
        $wrapperEl = swiper.$wrapperEl,
        slidesGrid = swiper.slidesGrid,
        snapGrid = swiper.snapGrid;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }

      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor


    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    } // Time diff


    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (swiper.allowClick) {
      swiper.updateClickedSlide(e);
      swiper.emit('tap click', e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }

    data.lastClickTime = now();
    nextTick(function () {
      if (!swiper.destroyed) swiper.allowClick = true;
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;

    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (params.freeMode) {
      if (currentPos < -swiper.minTranslate()) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (currentPos > -swiper.maxTranslate()) {
        if (swiper.slides.length < snapGrid.length) {
          swiper.slideTo(snapGrid.length - 1);
        } else {
          swiper.slideTo(swiper.slides.length - 1);
        }

        return;
      }

      if (params.freeModeMomentum) {
        if (data.velocities.length > 1) {
          var lastMoveEvent = data.velocities.pop();
          var velocityEvent = data.velocities.pop();
          var distance = lastMoveEvent.position - velocityEvent.position;
          var time = lastMoveEvent.time - velocityEvent.time;
          swiper.velocity = distance / time;
          swiper.velocity /= 2;

          if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
            swiper.velocity = 0;
          } // this implies that the user stopped moving a finger then released.
          // There would be no events with distance zero, so the last event is stale.


          if (time > 150 || now() - lastMoveEvent.time > 300) {
            swiper.velocity = 0;
          }
        } else {
          swiper.velocity = 0;
        }

        swiper.velocity *= params.freeModeMomentumVelocityRatio;
        data.velocities.length = 0;
        var momentumDuration = 1000 * params.freeModeMomentumRatio;
        var momentumDistance = swiper.velocity * momentumDuration;
        var newPosition = swiper.translate + momentumDistance;
        if (rtl) newPosition = -newPosition;
        var doBounce = false;
        var afterBouncePosition;
        var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
        var needsLoopFix;

        if (newPosition < swiper.maxTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition + swiper.maxTranslate() < -bounceAmount) {
              newPosition = swiper.maxTranslate() - bounceAmount;
            }

            afterBouncePosition = swiper.maxTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.maxTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (newPosition > swiper.minTranslate()) {
          if (params.freeModeMomentumBounce) {
            if (newPosition - swiper.minTranslate() > bounceAmount) {
              newPosition = swiper.minTranslate() + bounceAmount;
            }

            afterBouncePosition = swiper.minTranslate();
            doBounce = true;
            data.allowMomentumBounce = true;
          } else {
            newPosition = swiper.minTranslate();
          }

          if (params.loop && params.centeredSlides) needsLoopFix = true;
        } else if (params.freeModeSticky) {
          var nextSlide;

          for (var j = 0; j < snapGrid.length; j += 1) {
            if (snapGrid[j] > -newPosition) {
              nextSlide = j;
              break;
            }
          }

          if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
            newPosition = snapGrid[nextSlide];
          } else {
            newPosition = snapGrid[nextSlide - 1];
          }

          newPosition = -newPosition;
        }

        if (needsLoopFix) {
          swiper.once('transitionEnd', function () {
            swiper.loopFix();
          });
        } // Fix duration


        if (swiper.velocity !== 0) {
          if (rtl) {
            momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
          } else {
            momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
          }

          if (params.freeModeSticky) {
            // If freeModeSticky is active and the user ends a swipe with a slow-velocity
            // event, then durations can be 20+ seconds to slide one (or zero!) slides.
            // It's easy to see this when simulating touch with mouse events. To fix this,
            // limit single-slide swipes to the default slide duration. This also has the
            // nice side effect of matching slide speed if the user stopped moving before
            // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
            // For faster swipes, also apply limits (albeit higher ones).
            var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
            var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

            if (moveDistance < currentSlideSize) {
              momentumDuration = params.speed;
            } else if (moveDistance < 2 * currentSlideSize) {
              momentumDuration = params.speed * 1.5;
            } else {
              momentumDuration = params.speed * 2.5;
            }
          }
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (params.freeModeMomentumBounce && doBounce) {
          swiper.updateProgress(afterBouncePosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
            swiper.emit('momentumBounce');
            swiper.setTransition(params.speed);
            setTimeout(function () {
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }, 0);
          });
        } else if (swiper.velocity) {
          swiper.updateProgress(newPosition);
          swiper.setTransition(momentumDuration);
          swiper.setTranslate(newPosition);
          swiper.transitionStart(true, swiper.swipeDirection);

          if (!swiper.animating) {
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed) return;
              swiper.transitionEnd();
            });
          }
        } else {
          swiper.updateProgress(newPosition);
        }

        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      } else if (params.freeModeSticky) {
        swiper.slideToClosest();
        return;
      }

      if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
        swiper.updateProgress();
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      return;
    } // Find current slide


    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];

    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (typeof slidesGrid[i + _increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    } // Find current slide size


    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
      }

      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(stopIndex + increment);
        }

        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var swiper = this;
    var params = swiper.params,
        el = swiper.el;
    if (el && el.offsetWidth === 0) return; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    } // Save locks


    var allowSlideNext = swiper.allowSlideNext,
        allowSlidePrev = swiper.allowSlidePrev,
        snapGrid = swiper.snapGrid; // Disable locks on resize

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    } // Return locks after resize


    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var swiper = this;

    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();

      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl,
        rtlTranslate = swiper.rtlTranslate;
    swiper.previousTranslate = swiper.translate;

    if (swiper.isHorizontal()) {
      if (rtlTranslate) {
        swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollLeft;
      }
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    } // eslint-disable-next-line


    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }

    swiper.emit('setTranslate', swiper.translate, false);
  }

  var dummyEventAttached = false;

  function dummyEventListener() {}

  function attachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
        touchEvents = swiper.touchEvents,
        el = swiper.el,
        wrapperEl = swiper.wrapperEl,
        device = swiper.device,
        support = swiper.support;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);

    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
          passive: false,
          capture: capture
        } : capture);
        el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }

        if (!dummyEventAttached) {
          document.addEventListener('touchstart', dummyEventListener);
          dummyEventAttached = true;
        }
      }

      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
        el.addEventListener('mousedown', swiper.onTouchStart, false);
        document.addEventListener('mousemove', swiper.onTouchMove, capture);
        document.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      el.addEventListener('click', swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.addEventListener('scroll', swiper.onScroll);
    } // Resize handler


    if (params.updateOnWindowResize) {
      swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper.on('observerUpdate', onResize, true);
    }
  }

  function detachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
        touchEvents = swiper.touchEvents,
        el = swiper.el,
        wrapperEl = swiper.wrapperEl,
        device = swiper.device,
        support = swiper.support;
    var capture = !!params.nested; // Touch Events

    if (!support.touch && support.pointerEvents) {
      el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      }

      if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
        el.removeEventListener('mousedown', swiper.onTouchStart, false);
        document.removeEventListener('mousemove', swiper.onTouchMove, capture);
        document.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      el.removeEventListener('click', swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl.removeEventListener('scroll', swiper.onScroll);
    } // Resize handler


    swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
  }

  var events = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };

  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex,
        initialized = swiper.initialized,
        _swiper$loopedSlides = swiper.loopedSlides,
        loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
        params = swiper.params,
        $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

    var breakpoint = swiper.getBreakpoint(breakpoints);

    if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
      var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

      if (breakpointOnlyParams) {
        ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
          var paramValue = breakpointOnlyParams[param];
          if (typeof paramValue === 'undefined') return;

          if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
            breakpointOnlyParams[param] = 'auto';
          } else if (param === 'slidesPerView') {
            breakpointOnlyParams[param] = parseFloat(paramValue);
          } else {
            breakpointOnlyParams[param] = parseInt(paramValue, 10);
          }
        });
      }

      var breakpointParams = breakpointOnlyParams || swiper.originalParams;
      var wasMultiRow = params.slidesPerColumn > 1;
      var isMultiRow = breakpointParams.slidesPerColumn > 1;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(params.containerModifierClass + "multirow");

        if (breakpointParams.slidesPerColumnFill === 'column') {
          $el.addClass(params.containerModifierClass + "multirow-column");
        }

        swiper.emitContainerClasses();
      }

      var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      extend$1(swiper.params, breakpointParams);
      extend$1(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });
      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }
  }

  function getBreakpoints(breakpoints) {
    var window = getWindow(); // Get breakpoint for window width

    if (!breakpoints) return undefined;
    var breakpoint = false;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = window.innerHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }

      return {
        value: point,
        point: point
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });

    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
          point = _points$i.point,
          value = _points$i.value;

      if (value <= window.innerWidth) {
        breakpoint = point;
      }
    }

    return breakpoint || 'max';
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoints
  };

  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames,
        params = swiper.params,
        rtl = swiper.rtl,
        $el = swiper.$el,
        device = swiper.device;
    var suffixes = [];
    suffixes.push('initialized');
    suffixes.push(params.direction);

    if (params.freeMode) {
      suffixes.push('free-mode');
    }

    if (params.autoHeight) {
      suffixes.push('autoheight');
    }

    if (rtl) {
      suffixes.push('rtl');
    }

    if (params.slidesPerColumn > 1) {
      suffixes.push('multirow');

      if (params.slidesPerColumnFill === 'column') {
        suffixes.push('multirow-column');
      }
    }

    if (device.android) {
      suffixes.push('android');
    }

    if (device.ios) {
      suffixes.push('ios');
    }

    if (params.cssMode) {
      suffixes.push('css-mode');
    }

    suffixes.forEach(function (suffix) {
      classNames.push(params.containerModifierClass + suffix);
    });
    $el.addClass(classNames.join(' '));
    swiper.emitContainerClasses();
  }

  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el,
        classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
  }

  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window = getWindow();
    var image;

    function onReady() {
      if (callback) callback();
    }

    var isPicture = $(imageEl).parent('picture')[0];

    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window.Image();
        image.onload = onReady;
        image.onerror = onReady;

        if (sizes) {
          image.sizes = sizes;
        }

        if (srcset) {
          image.srcset = srcset;
        }

        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');

    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit('imagesReady');
      }
    }

    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages
  };

  function checkOverflow() {
    var swiper = this;
    var params = swiper.params;
    var wasLocked = swiper.isLocked;
    var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

    if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
      swiper.isLocked = lastSlidePosition <= swiper.size;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }

    swiper.allowSlideNext = !swiper.isLocked;
    swiper.allowSlidePrev = !swiper.isLocked; // events

    if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
      if (swiper.navigation) swiper.navigation.update();
    }
  }

  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };

  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'container',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    nested: false,
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Free mode
    freeMode: false,
    freeModeMomentum: true,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: true,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: false,
    freeModeMinimumVelocity: 0.02,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: 'column',
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: false,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    watchSlidesVisibility: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-container-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };

  var prototypes = {
    modular: modular,
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition$1,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    manipulation: manipulation,
    events: events,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images
  };
  var extendedDefaults = {};

  var Swiper = /*#__PURE__*/function () {
    function Swiper() {
      var el;
      var params;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }

      if (!params) params = {};
      params = extend$1({}, params);
      if (el && !params.el) params.el = el; // Swiper Instance

      var swiper = this;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];

      if (typeof swiper.modules === 'undefined') {
        swiper.modules = {};
      }

      Object.keys(swiper.modules).forEach(function (moduleName) {
        var module = swiper.modules[moduleName];

        if (module.params) {
          var moduleParamName = Object.keys(module.params)[0];
          var moduleParams = module.params[moduleParamName];
          if (typeof moduleParams !== 'object' || moduleParams === null) return;
          if (!(moduleParamName in params && 'enabled' in moduleParams)) return;

          if (params[moduleParamName] === true) {
            params[moduleParamName] = {
              enabled: true
            };
          }

          if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
            params[moduleParamName].enabled = true;
          }

          if (!params[moduleParamName]) params[moduleParamName] = {
            enabled: false
          };
        }
      }); // Extend defaults with modules params

      var swiperParams = extend$1({}, defaults);
      swiper.useParams(swiperParams); // Extend defaults with passed params

      swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend$1({}, swiper.params);
      swiper.passedParams = extend$1({}, params); // add event listeners

      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function (eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }

      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      } // Save Dom lib


      swiper.$ = $; // Find el

      var $el = $(swiper.params.el);
      el = $el[0];

      if (!el) {
        return undefined;
      }

      if ($el.length > 1) {
        var swipers = [];
        $el.each(function (containerEl) {
          var newParams = extend$1({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      }

      el.swiper = swiper; // Find Wrapper

      var $wrapperEl;

      if (el && el.shadowRoot && el.shadowRoot.querySelector) {
        $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

        $wrapperEl.children = function (options) {
          return $el.children(options);
        };
      } else {
        $wrapperEl = $el.children("." + swiper.params.wrapperClass);
      } // Extend Swiper


      extend$1(swiper, {
        $el: $el,
        el: el,
        $wrapperEl: $wrapperEl,
        wrapperEl: $wrapperEl[0],
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // RTL
        rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
        rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
        wrongRTL: $wrapperEl.css('display') === '-webkit-box',
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          var desktop = ['mousedown', 'mousemove', 'mouseup'];

          if (swiper.support.pointerEvents) {
            desktop = ['pointerdown', 'pointermove', 'pointerup'];
          }

          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          formElements: 'input, select, option, textarea, button, video, label',
          // Last click time
          lastClickTime: now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      }); // Install Modules

      swiper.useModules();
      swiper.emit('_swiper'); // Init

      if (swiper.params.init) {
        swiper.init();
      } // Return app instance


      return swiper;
    }

    var _proto = Swiper.prototype;

    _proto.emitContainerClasses = function emitContainerClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      var classes = swiper.el.className.split(' ').filter(function (className) {
        return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit('_containerClasses', classes.join(' '));
    };

    _proto.getSlideClasses = function getSlideClasses(slideEl) {
      var swiper = this;
      return slideEl.className.split(' ').filter(function (className) {
        return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(' ');
    };

    _proto.emitSlidesClasses = function emitSlidesClasses() {
      var swiper = this;
      if (!swiper.params._emitClasses || !swiper.el) return;
      swiper.slides.each(function (slideEl) {
        var classNames = swiper.getSlideClasses(slideEl);
        swiper.emit('_slideClass', slideEl, classNames);
      });
    };

    _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
      var swiper = this;
      var params = swiper.params,
          slides = swiper.slides,
          slidesGrid = swiper.slidesGrid,
          swiperSize = swiper.size,
          activeIndex = swiper.activeIndex;
      var spv = 1;

      if (params.centeredSlides) {
        var slideSize = slides[activeIndex].swiperSlideSize;
        var breakLoop;

        for (var i = activeIndex + 1; i < slides.length; i += 1) {
          if (slides[i] && !breakLoop) {
            slideSize += slides[i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }

        for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
          if (slides[_i] && !breakLoop) {
            slideSize += slides[_i].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize) breakLoop = true;
          }
        }
      } else {
        for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
          if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
            spv += 1;
          }
        }
      }

      return spv;
    };

    _proto.update = function update() {
      var swiper = this;
      if (!swiper || swiper.destroyed) return;
      var snapGrid = swiper.snapGrid,
          params = swiper.params; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      }

      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();

      function setTranslate() {
        var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      var translated;

      if (swiper.params.freeMode) {
        setTranslate();

        if (swiper.params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
          translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }

        if (!translated) {
          setTranslate();
        }
      }

      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }

      swiper.emit('update');
    };

    _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }

      var swiper = this;
      var currentDirection = swiper.params.direction;

      if (!newDirection) {
        // eslint-disable-next-line
        newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
      }

      if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
        return swiper;
      }

      swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.each(function (slideEl) {
        if (newDirection === 'vertical') {
          slideEl.style.width = '';
        } else {
          slideEl.style.height = '';
        }
      });
      swiper.emit('changeDirection');
      if (needUpdate) swiper.update();
      return swiper;
    };

    _proto.init = function init() {
      var swiper = this;
      if (swiper.initialized) return;
      swiper.emit('beforeInit'); // Set breakpoint

      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      } // Add Classes


      swiper.addClasses(); // Create loop

      if (swiper.params.loop) {
        swiper.loopCreate();
      } // Update size


      swiper.updateSize(); // Update slides

      swiper.updateSlides();

      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      } // Set Grab Cursor


      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }

      if (swiper.params.preloadImages) {
        swiper.preloadImages();
      } // Slide To Initial Slide


      if (swiper.params.loop) {
        swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
      } // Attach events


      swiper.attachEvents(); // Init Flag

      swiper.initialized = true; // Emit

      swiper.emit('init');
      swiper.emit('afterInit');
    };

    _proto.destroy = function destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }

      if (cleanStyles === void 0) {
        cleanStyles = true;
      }

      var swiper = this;
      var params = swiper.params,
          $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides;

      if (typeof swiper.params === 'undefined' || swiper.destroyed) {
        return null;
      }

      swiper.emit('beforeDestroy'); // Init Flag

      swiper.initialized = false; // Detach events

      swiper.detachEvents(); // Destroy loop

      if (params.loop) {
        swiper.loopDestroy();
      } // Cleanup styles


      if (cleanStyles) {
        swiper.removeClasses();
        $el.removeAttr('style');
        $wrapperEl.removeAttr('style');

        if (slides && slides.length) {
          slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
        }
      }

      swiper.emit('destroy'); // Detach emitter events

      Object.keys(swiper.eventsListeners).forEach(function (eventName) {
        swiper.off(eventName);
      });

      if (deleteInstance !== false) {
        swiper.$el[0].swiper = null;
        deleteProps(swiper);
      }

      swiper.destroyed = true;
      return null;
    };

    Swiper.extendDefaults = function extendDefaults(newDefaults) {
      extend$1(extendedDefaults, newDefaults);
    };

    Swiper.installModule = function installModule(module) {
      if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
      var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
      Swiper.prototype.modules[name] = module;
    };

    Swiper.use = function use(module) {
      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Swiper.installModule(m);
        });
        return Swiper;
      }

      Swiper.installModule(module);
      return Swiper;
    };

    _createClass(Swiper, null, [{
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults;
      }
    }]);

    return Swiper;
  }();

  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer$1]);

  var Virtual = {
    update: function update(force) {
      var swiper = this;
      var _swiper$params = swiper.params,
          slidesPerView = _swiper$params.slidesPerView,
          slidesPerGroup = _swiper$params.slidesPerGroup,
          centeredSlides = _swiper$params.centeredSlides;
      var _swiper$params$virtua = swiper.params.virtual,
          addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
          addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
      var _swiper$virtual = swiper.virtual,
          previousFrom = _swiper$virtual.from,
          previousTo = _swiper$virtual.to,
          slides = _swiper$virtual.slides,
          previousSlidesGrid = _swiper$virtual.slidesGrid,
          renderSlide = _swiper$virtual.renderSlide,
          previousOffset = _swiper$virtual.offset;
      swiper.updateActiveIndex();
      var activeIndex = swiper.activeIndex || 0;
      var offsetProp;
      if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
      var slidesAfter;
      var slidesBefore;

      if (centeredSlides) {
        slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
      } else {
        slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
        slidesBefore = slidesPerGroup + addSlidesBefore;
      }

      var from = Math.max((activeIndex || 0) - slidesBefore, 0);
      var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
      var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
      extend$1(swiper.virtual, {
        from: from,
        to: to,
        offset: offset,
        slidesGrid: swiper.slidesGrid
      });

      function onRendered() {
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        if (swiper.lazy && swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      }

      if (previousFrom === from && previousTo === to && !force) {
        if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
          swiper.slides.css(offsetProp, offset + "px");
        }

        swiper.updateProgress();
        return;
      }

      if (swiper.params.virtual.renderExternal) {
        swiper.params.virtual.renderExternal.call(swiper, {
          offset: offset,
          from: from,
          to: to,
          slides: function getSlides() {
            var slidesToRender = [];

            for (var i = from; i <= to; i += 1) {
              slidesToRender.push(slides[i]);
            }

            return slidesToRender;
          }()
        });

        if (swiper.params.virtual.renderExternalUpdate) {
          onRendered();
        }

        return;
      }

      var prependIndexes = [];
      var appendIndexes = [];

      if (force) {
        swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
      } else {
        for (var i = previousFrom; i <= previousTo; i += 1) {
          if (i < from || i > to) {
            swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
          }
        }
      }

      for (var _i = 0; _i < slides.length; _i += 1) {
        if (_i >= from && _i <= to) {
          if (typeof previousTo === 'undefined' || force) {
            appendIndexes.push(_i);
          } else {
            if (_i > previousTo) appendIndexes.push(_i);
            if (_i < previousFrom) prependIndexes.push(_i);
          }
        }
      }

      appendIndexes.forEach(function (index) {
        swiper.$wrapperEl.append(renderSlide(slides[index], index));
      });
      prependIndexes.sort(function (a, b) {
        return b - a;
      }).forEach(function (index) {
        swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
      });
      swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
      onRendered();
    },
    renderSlide: function renderSlide(slide, index) {
      var swiper = this;
      var params = swiper.params.virtual;

      if (params.cache && swiper.virtual.cache[index]) {
        return swiper.virtual.cache[index];
      }

      var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
      if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
      if (params.cache) swiper.virtual.cache[index] = $slideEl;
      return $slideEl;
    },
    appendSlide: function appendSlide(slides) {
      var swiper = this;

      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.push(slides[i]);
        }
      } else {
        swiper.virtual.slides.push(slides);
      }

      swiper.virtual.update(true);
    },
    prependSlide: function prependSlide(slides) {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var newActiveIndex = activeIndex + 1;
      var numberOfNewSlides = 1;

      if (Array.isArray(slides)) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
        numberOfNewSlides = slides.length;
      } else {
        swiper.virtual.slides.unshift(slides);
      }

      if (swiper.params.virtual.cache) {
        var cache = swiper.virtual.cache;
        var newCache = {};
        Object.keys(cache).forEach(function (cachedIndex) {
          var $cachedEl = cache[cachedIndex];
          var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

          if (cachedElIndex) {
            $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
          }

          newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
        });
        swiper.virtual.cache = newCache;
      }

      swiper.virtual.update(true);
      swiper.slideTo(newActiveIndex, 0);
    },
    removeSlide: function removeSlide(slidesIndexes) {
      var swiper = this;
      if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
      var activeIndex = swiper.activeIndex;

      if (Array.isArray(slidesIndexes)) {
        for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
          swiper.virtual.slides.splice(slidesIndexes[i], 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes[i]];
          }

          if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
      } else {
        swiper.virtual.slides.splice(slidesIndexes, 1);

        if (swiper.params.virtual.cache) {
          delete swiper.virtual.cache[slidesIndexes];
        }

        if (slidesIndexes < activeIndex) activeIndex -= 1;
        activeIndex = Math.max(activeIndex, 0);
      }

      swiper.virtual.update(true);
      swiper.slideTo(activeIndex, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var swiper = this;
      swiper.virtual.slides = [];

      if (swiper.params.virtual.cache) {
        swiper.virtual.cache = {};
      }

      swiper.virtual.update(true);
      swiper.slideTo(0, 0);
    }
  };
  var Virtual$1 = {
    name: 'virtual',
    params: {
      virtual: {
        enabled: false,
        slides: [],
        cache: true,
        renderSlide: null,
        renderExternal: null,
        renderExternalUpdate: true,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        virtual: _extends(_extends({}, Virtual), {}, {
          slides: swiper.params.virtual.slides,
          cache: {}
        })
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (!swiper.params.virtual.enabled) return;
        swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
        var overwriteParams = {
          watchSlidesProgress: true
        };
        extend$1(swiper.params, overwriteParams);
        extend$1(swiper.originalParams, overwriteParams);

        if (!swiper.params.initialSlide) {
          swiper.virtual.update();
        }
      },
      setTranslate: function setTranslate(swiper) {
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.update();
      }
    }
  };

  var Keyboard = {
    handle: function handle(event) {
      var swiper = this;
      var window = getWindow();
      var document = getDocument();
      var rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var kc = e.keyCode || e.charCode;
      var pageUpDown = swiper.params.keyboard.pageUpDown;
      var isPageUp = pageUpDown && kc === 33;
      var isPageDown = pageUpDown && kc === 34;
      var isArrowLeft = kc === 37;
      var isArrowRight = kc === 39;
      var isArrowUp = kc === 38;
      var isArrowDown = kc === 40; // Directions locks

      if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
        return false;
      }

      if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
        return false;
      }

      if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
        return undefined;
      }

      if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
        return undefined;
      }

      if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
        var inView = false; // Check that swiper should be inside of visible area of window

        if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
          return undefined;
        }

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var swiperOffset = swiper.$el.offset();
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

        for (var i = 0; i < swiperCoord.length; i += 1) {
          var point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
            inView = true;
          }
        }

        if (!inView) return undefined;
      }

      if (swiper.isHorizontal()) {
        if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
        if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
      } else {
        if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
          if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        }

        if (isPageDown || isArrowDown) swiper.slideNext();
        if (isPageUp || isArrowUp) swiper.slidePrev();
      }

      swiper.emit('keyPress', kc);
      return undefined;
    },
    enable: function enable() {
      var swiper = this;
      var document = getDocument();
      if (swiper.keyboard.enabled) return;
      $(document).on('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = true;
    },
    disable: function disable() {
      var swiper = this;
      var document = getDocument();
      if (!swiper.keyboard.enabled) return;
      $(document).off('keydown', swiper.keyboard.handle);
      swiper.keyboard.enabled = false;
    }
  };
  var Keyboard$1 = {
    name: 'keyboard',
    params: {
      keyboard: {
        enabled: false,
        onlyInViewport: true,
        pageUpDown: true
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        keyboard: _extends({
          enabled: false
        }, Keyboard)
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.keyboard.enabled) {
          swiper.keyboard.enable();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.keyboard.enabled) {
          swiper.keyboard.disable();
        }
      }
    }
  };

  function isEventSupported() {
    var document = getDocument();
    var eventName = 'onwheel';
    var isSupported = (eventName in document);

    if (!isSupported) {
      var element = document.createElement('div');
      element.setAttribute(eventName, 'return;');
      isSupported = typeof element[eventName] === 'function';
    }

    if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true) {
      // This is the only way to test support for the `wheel` event in IE9+.
      isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
    }

    return isSupported;
  }

  var Mousewheel = {
    lastScrollTime: now(),
    lastEventBeforeSnap: undefined,
    recentWheelEvents: [],
    event: function event() {
      var window = getWindow();
      if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
      return isEventSupported() ? 'wheel' : 'mousewheel';
    },
    normalize: function normalize(e) {
      // Reasonable defaults
      var PIXEL_STEP = 10;
      var LINE_HEIGHT = 40;
      var PAGE_HEIGHT = 800;
      var sX = 0;
      var sY = 0; // spinX, spinY

      var pX = 0;
      var pY = 0; // pixelX, pixelY
      // Legacy

      if ('detail' in e) {
        sY = e.detail;
      }

      if ('wheelDelta' in e) {
        sY = -e.wheelDelta / 120;
      }

      if ('wheelDeltaY' in e) {
        sY = -e.wheelDeltaY / 120;
      }

      if ('wheelDeltaX' in e) {
        sX = -e.wheelDeltaX / 120;
      } // side scrolling on FF with DOMMouseScroll


      if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
      }

      pX = sX * PIXEL_STEP;
      pY = sY * PIXEL_STEP;

      if ('deltaY' in e) {
        pY = e.deltaY;
      }

      if ('deltaX' in e) {
        pX = e.deltaX;
      }

      if (e.shiftKey && !pX) {
        // if user scrolls with shift he wants horizontal scroll
        pX = pY;
        pY = 0;
      }

      if ((pX || pY) && e.deltaMode) {
        if (e.deltaMode === 1) {
          // delta in LINE units
          pX *= LINE_HEIGHT;
          pY *= LINE_HEIGHT;
        } else {
          // delta in PAGE units
          pX *= PAGE_HEIGHT;
          pY *= PAGE_HEIGHT;
        }
      } // Fall-back if spin cannot be determined


      if (pX && !sX) {
        sX = pX < 1 ? -1 : 1;
      }

      if (pY && !sY) {
        sY = pY < 1 ? -1 : 1;
      }

      return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      var swiper = this;
      swiper.mouseEntered = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      var swiper = this;
      swiper.mouseEntered = false;
    },
    handle: function handle(event) {
      var e = event;
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (swiper.params.cssMode) {
        e.preventDefault();
      }

      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
      if (e.originalEvent) e = e.originalEvent; // jquery fix

      var delta = 0;
      var rtlFactor = swiper.rtlTranslate ? -1 : 1;
      var data = Mousewheel.normalize(e);

      if (params.forceToAxis) {
        if (swiper.isHorizontal()) {
          if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
        } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
      } else {
        delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
      }

      if (delta === 0) return true;
      if (params.invert) delta = -delta;

      if (!swiper.params.freeMode) {
        // Register the new event in a variable which stores the relevant data
        var newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta),
          raw: event
        }; // Keep the most recent events

        var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

        if (recentWheelEvents.length >= 2) {
          recentWheelEvents.shift(); // only store the last N events
        }

        var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
        recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
        //   If direction has changed or
        //   if the scroll is quicker than the previous one:
        //     Animate the slider.
        // Else (this is the first time the wheel is moved):
        //     Animate the slider.

        if (prevEvent) {
          if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
            swiper.mousewheel.animateSlider(newEvent);
          }
        } else {
          swiper.mousewheel.animateSlider(newEvent);
        } // If it's time to release the scroll:
        //   Return now so you don't hit the preventDefault.


        if (swiper.mousewheel.releaseScroll(newEvent)) {
          return true;
        }
      } else {
        // Freemode or scrollContainer:
        // If we recently snapped after a momentum scroll, then ignore wheel events
        // to give time for the deceleration to finish. Stop ignoring after 500 msecs
        // or if it's a new scroll (larger delta or inverse sign as last event before
        // an end-of-momentum snap).
        var _newEvent = {
          time: now(),
          delta: Math.abs(delta),
          direction: Math.sign(delta)
        };
        var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
        var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;

        if (!ignoreWheelEvents) {
          swiper.mousewheel.lastEventBeforeSnap = undefined;

          if (swiper.params.loop) {
            swiper.loopFix();
          }

          var position = swiper.getTranslate() + delta * params.sensitivity;
          var wasBeginning = swiper.isBeginning;
          var wasEnd = swiper.isEnd;
          if (position >= swiper.minTranslate()) position = swiper.minTranslate();
          if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
          swiper.setTransition(0);
          swiper.setTranslate(position);
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();

          if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
            swiper.updateSlidesClasses();
          }

          if (swiper.params.freeModeSticky) {
            // When wheel scrolling starts with sticky (aka snap) enabled, then detect
            // the end of a momentum scroll by storing recent (N=15?) wheel events.
            // 1. do all N events have decreasing or same (absolute value) delta?
            // 2. did all N events arrive in the last M (M=500?) msecs?
            // 3. does the earliest event have an (absolute value) delta that's
            //    at least P (P=1?) larger than the most recent event's delta?
            // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
            // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
            // Snap immediately and ignore remaining wheel events in this scroll.
            // See comment above for "remaining wheel events in this scroll" determination.
            // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
            clearTimeout(swiper.mousewheel.timeout);
            swiper.mousewheel.timeout = undefined;
            var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;

            if (_recentWheelEvents.length >= 15) {
              _recentWheelEvents.shift(); // only store the last N events

            }

            var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;

            var firstEvent = _recentWheelEvents[0];

            _recentWheelEvents.push(_newEvent);

            if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
              // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
              _recentWheelEvents.splice(0);
            } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
              // We're at the end of the deceleration of a momentum scroll, so there's no need
              // to wait for more events. Snap ASAP on the next tick.
              // Also, because there's some remaining momentum we'll bias the snap in the
              // direction of the ongoing scroll because it's better UX for the scroll to snap
              // in the same direction as the scroll instead of reversing to snap.  Therefore,
              // if it's already scrolled more than 20% in the current direction, keep going.
              var snapToThreshold = delta > 0 ? 0.8 : 0.2;
              swiper.mousewheel.lastEventBeforeSnap = _newEvent;

              _recentWheelEvents.splice(0);

              swiper.mousewheel.timeout = nextTick(function () {
                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 0); // no delay; move on next tick
            }

            if (!swiper.mousewheel.timeout) {
              // if we get here, then we haven't detected the end of a momentum scroll, so
              // we'll consider a scroll "complete" when there haven't been any wheel events
              // for 500ms.
              swiper.mousewheel.timeout = nextTick(function () {
                var snapToThreshold = 0.5;
                swiper.mousewheel.lastEventBeforeSnap = _newEvent;

                _recentWheelEvents.splice(0);

                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
              }, 500);
            }
          } // Emit event


          if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay

          if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

          if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
        }
      }

      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      return false;
    },
    animateSlider: function animateSlider(newEvent) {
      var swiper = this;
      var window = getWindow();

      if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
        // Prevent if delta of wheel scroll delta is below configured threshold
        return false;
      }

      if (this.params.mousewheel.thresholdTime && now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
        // Prevent if time between scrolls is below configured threshold
        return false;
      } // If the movement is NOT big enough and
      // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
      //   Don't go any further (avoid insignificant scroll movement).


      if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
        // Return false as a default
        return true;
      } // If user is scrolling towards the end:
      //   If the slider hasn't hit the latest slide or
      //   if the slider is a loop and
      //   if the slider isn't moving right now:
      //     Go to next slide and
      //     emit a scroll event.
      // Else (the user is scrolling towards the beginning) and
      // if the slider hasn't hit the first slide or
      // if the slider is a loop and
      // if the slider isn't moving right now:
      //   Go to prev slide and
      //   emit a scroll event.


      if (newEvent.direction < 0) {
        if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
          swiper.slideNext();
          swiper.emit('scroll', newEvent.raw);
        }
      } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
        swiper.slidePrev();
        swiper.emit('scroll', newEvent.raw);
      } // If you got here is because an animation has been triggered so store the current time


      swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default

      return false;
    },
    releaseScroll: function releaseScroll(newEvent) {
      var swiper = this;
      var params = swiper.params.mousewheel;

      if (newEvent.direction < 0) {
        if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
      } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
        // Return true to animate scroll on edges
        return true;
      }

      return false;
    },
    enable: function enable() {
      var swiper = this;
      var event = Mousewheel.event();

      if (swiper.params.cssMode) {
        swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (swiper.mousewheel.enabled) return false;
      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
      target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
      target.on(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = true;
      return true;
    },
    disable: function disable() {
      var swiper = this;
      var event = Mousewheel.event();

      if (swiper.params.cssMode) {
        swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
        return true;
      }

      if (!event) return false;
      if (!swiper.mousewheel.enabled) return false;
      var target = swiper.$el;

      if (swiper.params.mousewheel.eventsTarget !== 'container') {
        target = $(swiper.params.mousewheel.eventsTarget);
      }

      target.off(event, swiper.mousewheel.handle);
      swiper.mousewheel.enabled = false;
      return true;
    }
  };
  var Mousewheel$1 = {
    name: 'mousewheel',
    params: {
      mousewheel: {
        enabled: false,
        releaseOnEdges: false,
        invert: false,
        forceToAxis: false,
        sensitivity: 1,
        eventsTarget: 'container',
        thresholdDelta: null,
        thresholdTime: null
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        mousewheel: {
          enabled: false,
          lastScrollTime: now(),
          lastEventBeforeSnap: undefined,
          recentWheelEvents: [],
          enable: Mousewheel.enable,
          disable: Mousewheel.disable,
          handle: Mousewheel.handle,
          handleMouseEnter: Mousewheel.handleMouseEnter,
          handleMouseLeave: Mousewheel.handleMouseLeave,
          animateSlider: Mousewheel.animateSlider,
          releaseScroll: Mousewheel.releaseScroll
        }
      });
    },
    on: {
      init: function init(swiper) {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          swiper.mousewheel.disable();
        }

        if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
      },
      destroy: function destroy(swiper) {
        if (swiper.params.cssMode) {
          swiper.mousewheel.enable();
        }

        if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
      }
    }
  };

  var Navigation = {
    update: function update() {
      // Update Navigation Buttons
      var swiper = this;
      var params = swiper.params.navigation;
      if (swiper.params.loop) return;
      var _swiper$navigation = swiper.navigation,
          $nextEl = _swiper$navigation.$nextEl,
          $prevEl = _swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          $prevEl.addClass(params.disabledClass);
        } else {
          $prevEl.removeClass(params.disabledClass);
        }

        $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          $nextEl.addClass(params.disabledClass);
        } else {
          $nextEl.removeClass(params.disabledClass);
        }

        $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    },
    onPrevClick: function onPrevClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) return;
      swiper.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      var swiper = this;
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) return;
      swiper.slideNext();
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.navigation;
      if (!(params.nextEl || params.prevEl)) return;
      var $nextEl;
      var $prevEl;

      if (params.nextEl) {
        $nextEl = $(params.nextEl);

        if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
          $nextEl = swiper.$el.find(params.nextEl);
        }
      }

      if (params.prevEl) {
        $prevEl = $(params.prevEl);

        if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
          $prevEl = swiper.$el.find(params.prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', swiper.navigation.onNextClick);
      }

      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', swiper.navigation.onPrevClick);
      }

      extend$1(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var _swiper$navigation2 = swiper.navigation,
          $nextEl = _swiper$navigation2.$nextEl,
          $prevEl = _swiper$navigation2.$prevEl;

      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', swiper.navigation.onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }

      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', swiper.navigation.onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }
  };
  var Navigation$1 = {
    name: 'navigation',
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        navigation: _extends({}, Navigation)
      });
    },
    on: {
      init: function init(swiper) {
        swiper.navigation.init();
        swiper.navigation.update();
      },
      toEdge: function toEdge(swiper) {
        swiper.navigation.update();
      },
      fromEdge: function fromEdge(swiper) {
        swiper.navigation.update();
      },
      destroy: function destroy(swiper) {
        swiper.navigation.destroy();
      },
      click: function click(swiper, e) {
        var _swiper$navigation3 = swiper.navigation,
            $nextEl = _swiper$navigation3.$nextEl,
            $prevEl = _swiper$navigation3.$prevEl;

        if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
          var isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            swiper.emit('navigationShow');
          } else {
            swiper.emit('navigationHide');
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      }
    }
  };

  var Pagination = {
    update: function update() {
      // Render || Update Pagination bullets/items
      var swiper = this;
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el; // Current/Total

      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }

        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      } // Types


      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;

        if (params.dynamicBullets) {
          swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

            if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
              swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (swiper.pagination.dynamicBulletIndex < 0) {
              swiper.pagination.dynamicBulletIndex = 0;
            }
          }

          firstIndex = current - swiper.pagination.dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }

        bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

        if ($el.length > 1) {
          bullets.each(function (bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();

            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }

            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass(params.bulletActiveClass + "-main");
              }

              if (bulletIndex === firstIndex) {
                $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              }

              if (bulletIndex === lastIndex) {
                $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);

          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);

            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass(params.bulletActiveClass + "-main");
            }

            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                  bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                }

                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            } else {
              $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
              $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
            }
          }
        }

        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
        }
      }

      if (params.type === 'fraction') {
        $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
        $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
      }

      if (params.type === 'progressbar') {
        var progressbarDirection;

        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }

        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;

        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }

        $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
      }

      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        swiper.emit('paginationRender', $el[0]);
      } else {
        swiper.emit('paginationUpdate', $el[0]);
      }

      $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
    },
    render: function render() {
      // Render Container
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = '';

      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
          }
        }

        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find("." + params.bulletClass);
      }

      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
        }

        $el.html(paginationHTML);
      }

      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
        }

        $el.html(paginationHTML);
      }

      if (params.type !== 'custom') {
        swiper.emit('paginationRender', swiper.pagination.$el[0]);
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el) return;
      var $el = $(params.el);
      if ($el.length === 0) return;

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
        $el = swiper.$el.find(params.el);
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass("" + params.modifierClass + params.type + "-dynamic");
        swiper.pagination.dynamicBulletIndex = 0;

        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }

      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', "." + params.bulletClass, function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) index += swiper.loopedSlides;
          swiper.slideTo(index);
        });
      }

      extend$1(swiper.pagination, {
        $el: $el,
        el: $el[0]
      });
    },
    destroy: function destroy() {
      var swiper = this;
      var params = swiper.params.pagination;
      if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

      if (params.clickable) {
        $el.off('click', "." + params.bulletClass);
      }
    }
  };
  var Pagination$1 = {
    name: 'pagination',
    params: {
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active',
        modifierClass: 'swiper-pagination-',
        // NEW
        currentClass: 'swiper-pagination-current',
        totalClass: 'swiper-pagination-total',
        hiddenClass: 'swiper-pagination-hidden',
        progressbarFillClass: 'swiper-pagination-progressbar-fill',
        progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
        clickableClass: 'swiper-pagination-clickable',
        // NEW
        lockClass: 'swiper-pagination-lock'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        pagination: _extends({
          dynamicBulletIndex: 0
        }, Pagination)
      });
    },
    on: {
      init: function init(swiper) {
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      },
      activeIndexChange: function activeIndexChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          swiper.pagination.update();
        }
      },
      snapIndexChange: function snapIndexChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.update();
        }
      },
      slidesLengthChange: function slidesLengthChange(swiper) {
        if (swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      snapGridLengthChange: function snapGridLengthChange(swiper) {
        if (!swiper.params.loop) {
          swiper.pagination.render();
          swiper.pagination.update();
        }
      },
      destroy: function destroy(swiper) {
        swiper.pagination.destroy();
      },
      click: function click(swiper, e) {
        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
          var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

          if (isHidden === true) {
            swiper.emit('paginationShow');
          } else {
            swiper.emit('paginationHide');
          }

          swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      }
    }
  };

  var Scrollbar = {
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
          rtl = swiper.rtlTranslate,
          progress = swiper.progress;
      var dragSize = scrollbar.dragSize,
          trackSize = scrollbar.trackSize,
          $dragEl = scrollbar.$dragEl,
          $el = scrollbar.$el;
      var params = swiper.params.scrollbar;
      var newSize = dragSize;
      var newPos = (trackSize - dragSize) * progress;

      if (rtl) {
        newPos = -newPos;

        if (newPos > 0) {
          newSize = dragSize - newPos;
          newPos = 0;
        } else if (-newPos + dragSize > trackSize) {
          newSize = trackSize + newPos;
        }
      } else if (newPos < 0) {
        newSize = dragSize + newPos;
        newPos = 0;
      } else if (newPos + dragSize > trackSize) {
        newSize = trackSize - newPos;
      }

      if (swiper.isHorizontal()) {
        $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
        $dragEl[0].style.width = newSize + "px";
      } else {
        $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
        $dragEl[0].style.height = newSize + "px";
      }

      if (params.hide) {
        clearTimeout(swiper.scrollbar.timeout);
        $el[0].style.opacity = 1;
        swiper.scrollbar.timeout = setTimeout(function () {
          $el[0].style.opacity = 0;
          $el.transition(400);
        }, 1000);
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      swiper.scrollbar.$dragEl.transition(duration);
    },
    updateSize: function updateSize() {
      var swiper = this;
      if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
      var scrollbar = swiper.scrollbar;
      var $dragEl = scrollbar.$dragEl,
          $el = scrollbar.$el;
      $dragEl[0].style.width = '';
      $dragEl[0].style.height = '';
      var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
      var divider = swiper.size / swiper.virtualSize;
      var moveDivider = divider * (trackSize / swiper.size);
      var dragSize;

      if (swiper.params.scrollbar.dragSize === 'auto') {
        dragSize = trackSize * divider;
      } else {
        dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
      }

      if (swiper.isHorizontal()) {
        $dragEl[0].style.width = dragSize + "px";
      } else {
        $dragEl[0].style.height = dragSize + "px";
      }

      if (divider >= 1) {
        $el[0].style.display = 'none';
      } else {
        $el[0].style.display = '';
      }

      if (swiper.params.scrollbar.hide) {
        $el[0].style.opacity = 0;
      }

      extend$1(scrollbar, {
        trackSize: trackSize,
        divider: divider,
        moveDivider: moveDivider,
        dragSize: dragSize
      });
      scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
    },
    getPointerPosition: function getPointerPosition(e) {
      var swiper = this;

      if (swiper.isHorizontal()) {
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
      }

      return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
    },
    setDragPosition: function setDragPosition(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar,
          rtl = swiper.rtlTranslate;
      var $el = scrollbar.$el,
          dragSize = scrollbar.dragSize,
          trackSize = scrollbar.trackSize,
          dragStartPos = scrollbar.dragStartPos;
      var positionRatio;
      positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
      positionRatio = Math.max(Math.min(positionRatio, 1), 0);

      if (rtl) {
        positionRatio = 1 - positionRatio;
      }

      var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
      swiper.updateProgress(position);
      swiper.setTranslate(position);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
          $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el,
          $dragEl = scrollbar.$dragEl;
      swiper.scrollbar.isTouched = true;
      swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
      e.preventDefault();
      e.stopPropagation();
      $wrapperEl.transition(100);
      $dragEl.transition(100);
      scrollbar.setDragPosition(e);
      clearTimeout(swiper.scrollbar.dragTimeout);
      $el.transition(0);

      if (params.hide) {
        $el.css('opacity', 1);
      }

      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', 'none');
      }

      swiper.emit('scrollbarDragStart', e);
    },
    onDragMove: function onDragMove(e) {
      var swiper = this;
      var scrollbar = swiper.scrollbar,
          $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el,
          $dragEl = scrollbar.$dragEl;
      if (!swiper.scrollbar.isTouched) return;
      if (e.preventDefault) e.preventDefault();else e.returnValue = false;
      scrollbar.setDragPosition(e);
      $wrapperEl.transition(0);
      $el.transition(0);
      $dragEl.transition(0);
      swiper.emit('scrollbarDragMove', e);
    },
    onDragEnd: function onDragEnd(e) {
      var swiper = this;
      var params = swiper.params.scrollbar;
      var scrollbar = swiper.scrollbar,
          $wrapperEl = swiper.$wrapperEl;
      var $el = scrollbar.$el;
      if (!swiper.scrollbar.isTouched) return;
      swiper.scrollbar.isTouched = false;

      if (swiper.params.cssMode) {
        swiper.$wrapperEl.css('scroll-snap-type', '');
        $wrapperEl.transition('');
      }

      if (params.hide) {
        clearTimeout(swiper.scrollbar.dragTimeout);
        swiper.scrollbar.dragTimeout = nextTick(function () {
          $el.css('opacity', 0);
          $el.transition(400);
        }, 1000);
      }

      swiper.emit('scrollbarDragEnd', e);

      if (params.snapOnRelease) {
        swiper.slideToClosest();
      }
    },
    enableDraggable: function enableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = swiper.scrollbar,
          touchEventsTouch = swiper.touchEventsTouch,
          touchEventsDesktop = swiper.touchEventsDesktop,
          params = swiper.params,
          support = swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;

      if (!support.touch) {
        target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    disableDraggable: function disableDraggable() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var document = getDocument();
      var scrollbar = swiper.scrollbar,
          touchEventsTouch = swiper.touchEventsTouch,
          touchEventsDesktop = swiper.touchEventsDesktop,
          params = swiper.params,
          support = swiper.support;
      var $el = scrollbar.$el;
      var target = $el[0];
      var activeListener = support.passiveListener && params.passiveListeners ? {
        passive: false,
        capture: false
      } : false;
      var passiveListener = support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;

      if (!support.touch) {
        target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
        document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
        document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
      } else {
        target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
        target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
        target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
      }
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.scrollbar.el) return;
      var scrollbar = swiper.scrollbar,
          $swiperEl = swiper.$el;
      var params = swiper.params.scrollbar;
      var $el = $(params.el);

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
        $el = $swiperEl.find(params.el);
      }

      var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

      if ($dragEl.length === 0) {
        $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
        $el.append($dragEl);
      }

      extend$1(scrollbar, {
        $el: $el,
        el: $el[0],
        $dragEl: $dragEl,
        dragEl: $dragEl[0]
      });

      if (params.draggable) {
        scrollbar.enableDraggable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.disableDraggable();
    }
  };
  var Scrollbar$1 = {
    name: 'scrollbar',
    params: {
      scrollbar: {
        el: null,
        dragSize: 'auto',
        hide: false,
        draggable: false,
        snapOnRelease: true,
        lockClass: 'swiper-scrollbar-lock',
        dragClass: 'swiper-scrollbar-drag'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        scrollbar: _extends({
          isTouched: false,
          timeout: null,
          dragTimeout: null
        }, Scrollbar)
      });
    },
    on: {
      init: function init(swiper) {
        swiper.scrollbar.init();
        swiper.scrollbar.updateSize();
        swiper.scrollbar.setTranslate();
      },
      update: function update(swiper) {
        swiper.scrollbar.updateSize();
      },
      resize: function resize(swiper) {
        swiper.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate(swiper) {
        swiper.scrollbar.updateSize();
      },
      setTranslate: function setTranslate(swiper) {
        swiper.scrollbar.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        swiper.scrollbar.setTransition(duration);
      },
      destroy: function destroy(swiper) {
        swiper.scrollbar.destroy();
      }
    }
  };

  var Parallax = {
    setTransform: function setTransform(el, progress) {
      var swiper = this;
      var rtl = swiper.rtl;
      var $el = $(el);
      var rtlFactor = rtl ? -1 : 1;
      var p = $el.attr('data-swiper-parallax') || '0';
      var x = $el.attr('data-swiper-parallax-x');
      var y = $el.attr('data-swiper-parallax-y');
      var scale = $el.attr('data-swiper-parallax-scale');
      var opacity = $el.attr('data-swiper-parallax-opacity');

      if (x || y) {
        x = x || '0';
        y = y || '0';
      } else if (swiper.isHorizontal()) {
        x = p;
        y = '0';
      } else {
        y = p;
        x = '0';
      }

      if (x.indexOf('%') >= 0) {
        x = parseInt(x, 10) * progress * rtlFactor + "%";
      } else {
        x = x * progress * rtlFactor + "px";
      }

      if (y.indexOf('%') >= 0) {
        y = parseInt(y, 10) * progress + "%";
      } else {
        y = y * progress + "px";
      }

      if (typeof opacity !== 'undefined' && opacity !== null) {
        var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
        $el[0].style.opacity = currentOpacity;
      }

      if (typeof scale === 'undefined' || scale === null) {
        $el.transform("translate3d(" + x + ", " + y + ", 0px)");
      } else {
        var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
        $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
      }
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el,
          slides = swiper.slides,
          progress = swiper.progress,
          snapGrid = swiper.snapGrid;
      $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
        swiper.parallax.setTransform(el, progress);
      });
      slides.each(function (slideEl, slideIndex) {
        var slideProgress = slideEl.progress;

        if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
          slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
        }

        slideProgress = Math.min(Math.max(slideProgress, -1), 1);
        $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
          swiper.parallax.setTransform(el, slideProgress);
        });
      });
    },
    setTransition: function setTransition(duration) {
      if (duration === void 0) {
        duration = this.params.speed;
      }

      var swiper = this;
      var $el = swiper.$el;
      $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
        var $parallaxEl = $(parallaxEl);
        var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) parallaxDuration = 0;
        $parallaxEl.transition(parallaxDuration);
      });
    }
  };
  var Parallax$1 = {
    name: 'parallax',
    params: {
      parallax: {
        enabled: false
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        parallax: _extends({}, Parallax)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      init: function init(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTranslate: function setTranslate(swiper) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (!swiper.params.parallax.enabled) return;
        swiper.parallax.setTransition(duration);
      }
    }
  };

  var Zoom = {
    // Calc Scale From Multi-touches
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var x1 = e.targetTouches[0].pageX;
      var y1 = e.targetTouches[0].pageY;
      var x2 = e.targetTouches[1].pageX;
      var y2 = e.targetTouches[1].pageY;
      var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      return distance;
    },
    // Events
    onGestureStart: function onGestureStart(e) {
      var swiper = this;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;

      if (!support.gestures) {
        if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureTouched = true;
        gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$slideEl || !gesture.$slideEl.length) {
        gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
        if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (gesture.$imageWrapEl.length === 0) {
          gesture.$imageEl = undefined;
          return;
        }
      }

      if (gesture.$imageEl) {
        gesture.$imageEl.transition(0);
      }

      swiper.zoom.isScaling = true;
    },
    onGestureChange: function onGestureChange(e) {
      var swiper = this;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
          return;
        }

        zoom.fakeGestureMoved = true;
        gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
        if (e.type === 'gesturechange') zoom.onGestureStart(e);
        return;
      }

      if (support.gestures) {
        zoom.scale = e.scale * zoom.currentScale;
      } else {
        zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
      }

      if (zoom.scale > gesture.maxRatio) {
        zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
      }

      if (zoom.scale < params.minRatio) {
        zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
      }

      gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    onGestureEnd: function onGestureEnd(e) {
      var swiper = this;
      var device = swiper.device;
      var support = swiper.support;
      var params = swiper.params.zoom;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (!support.gestures) {
        if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
          return;
        }

        if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
          return;
        }

        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
      gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      zoom.currentScale = zoom.scale;
      zoom.isScaling = false;
      if (zoom.scale === 1) gesture.$slideEl = undefined;
    },
    onTouchStart: function onTouchStart(e) {
      var swiper = this;
      var device = swiper.device;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      if (image.isTouched) return;
      if (device.android && e.cancelable) e.preventDefault();
      image.isTouched = true;
      image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    },
    onTouchMove: function onTouchMove(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image,
          velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      swiper.allowClick = false;
      if (!image.isTouched || !gesture.$slideEl) return;

      if (!image.isMoved) {
        image.width = gesture.$imageEl[0].offsetWidth;
        image.height = gesture.$imageEl[0].offsetHeight;
        image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
        image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
        gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
        gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
        gesture.$imageWrapEl.transition(0);

        if (swiper.rtl) {
          image.startX = -image.startX;
          image.startY = -image.startY;
        }
      } // Define if we need image drag


      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
      image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

      if (!image.isMoved && !zoom.isScaling) {
        if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
          image.isTouched = false;
          return;
        }

        if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
          image.isTouched = false;
          return;
        }
      }

      if (e.cancelable) {
        e.preventDefault();
      }

      e.stopPropagation();
      image.isMoved = true;
      image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
      image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

      if (image.currentX < image.minX) {
        image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
      }

      if (image.currentX > image.maxX) {
        image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
      }

      if (image.currentY < image.minY) {
        image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
      }

      if (image.currentY > image.maxY) {
        image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
      } // Velocity


      if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
      if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
      if (!velocity.prevTime) velocity.prevTime = Date.now();
      velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
      velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
      if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
      if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
      velocity.prevPositionX = image.touchesCurrent.x;
      velocity.prevPositionY = image.touchesCurrent.y;
      velocity.prevTime = Date.now();
      gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTouchEnd: function onTouchEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture,
          image = zoom.image,
          velocity = zoom.velocity;
      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

      if (!image.isTouched || !image.isMoved) {
        image.isTouched = false;
        image.isMoved = false;
        return;
      }

      image.isTouched = false;
      image.isMoved = false;
      var momentumDurationX = 300;
      var momentumDurationY = 300;
      var momentumDistanceX = velocity.x * momentumDurationX;
      var newPositionX = image.currentX + momentumDistanceX;
      var momentumDistanceY = velocity.y * momentumDurationY;
      var newPositionY = image.currentY + momentumDistanceY; // Fix duration

      if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
      if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
      var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
      image.currentX = newPositionX;
      image.currentY = newPositionY; // Define if we need image drag

      var scaledWidth = image.width * zoom.scale;
      var scaledHeight = image.height * zoom.scale;
      image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
      image.maxX = -image.minX;
      image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
      image.maxY = -image.minY;
      image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
      image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
      gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
    },
    onTransitionEnd: function onTransitionEnd() {
      var swiper = this;
      var zoom = swiper.zoom;
      var gesture = zoom.gesture;

      if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
        if (gesture.$imageEl) {
          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
        }

        if (gesture.$imageWrapEl) {
          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
        }

        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$slideEl = undefined;
        gesture.$imageEl = undefined;
        gesture.$imageWrapEl = undefined;
      }
    },
    // Toggle Zoom
    toggle: function toggle(e) {
      var swiper = this;
      var zoom = swiper.zoom;

      if (zoom.scale && zoom.scale !== 1) {
        // Zoom Out
        zoom.out();
      } else {
        // Zoom In
        zoom.in(e);
      }
    },
    in: function _in(e) {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture,
          image = zoom.image;

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      gesture.$slideEl.addClass("" + params.zoomedSlideClass);
      var touchX;
      var touchY;
      var offsetX;
      var offsetY;
      var diffX;
      var diffY;
      var translateX;
      var translateY;
      var imageWidth;
      var imageHeight;
      var scaledWidth;
      var scaledHeight;
      var translateMinX;
      var translateMinY;
      var translateMaxX;
      var translateMaxY;
      var slideWidth;
      var slideHeight;

      if (typeof image.touchesStart.x === 'undefined' && e) {
        touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
        touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
      } else {
        touchX = image.touchesStart.x;
        touchY = image.touchesStart.y;
      }

      zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

      if (e) {
        slideWidth = gesture.$slideEl[0].offsetWidth;
        slideHeight = gesture.$slideEl[0].offsetHeight;
        offsetX = gesture.$slideEl.offset().left;
        offsetY = gesture.$slideEl.offset().top;
        diffX = offsetX + slideWidth / 2 - touchX;
        diffY = offsetY + slideHeight / 2 - touchY;
        imageWidth = gesture.$imageEl[0].offsetWidth;
        imageHeight = gesture.$imageEl[0].offsetHeight;
        scaledWidth = imageWidth * zoom.scale;
        scaledHeight = imageHeight * zoom.scale;
        translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
        translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
        translateMaxX = -translateMinX;
        translateMaxY = -translateMinY;
        translateX = diffX * zoom.scale;
        translateY = diffY * zoom.scale;

        if (translateX < translateMinX) {
          translateX = translateMinX;
        }

        if (translateX > translateMaxX) {
          translateX = translateMaxX;
        }

        if (translateY < translateMinY) {
          translateY = translateMinY;
        }

        if (translateY > translateMaxY) {
          translateY = translateMaxY;
        }
      } else {
        translateX = 0;
        translateY = 0;
      }

      gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
      gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
    },
    out: function out() {
      var swiper = this;
      var zoom = swiper.zoom;
      var params = swiper.params.zoom;
      var gesture = zoom.gesture;

      if (!gesture.$slideEl) {
        if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
          gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
        } else {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
        }

        gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
        gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
      }

      if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
      zoom.scale = 1;
      zoom.currentScale = 1;
      gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
      gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
      gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
      gesture.$slideEl = undefined;
    },
    toggleGestures: function toggleGestures(method) {
      var swiper = this;
      var zoom = swiper.zoom;
      var selector = zoom.slideSelector,
          passive = zoom.passiveListener;
      swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
      swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
      swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
    },
    enableGestures: function enableGestures() {
      if (this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = true;
      this.zoom.toggleGestures('on');
    },
    disableGestures: function disableGestures() {
      if (!this.zoom.gesturesEnabled) return;
      this.zoom.gesturesEnabled = false;
      this.zoom.toggleGestures('off');
    },
    // Attach/Detach Events
    enable: function enable() {
      var swiper = this;
      var support = swiper.support;
      var zoom = swiper.zoom;
      if (zoom.enabled) return;
      zoom.enabled = true;
      var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      var activeListenerWithCapture = support.passiveListener ? {
        passive: false,
        capture: true
      } : true;
      var slideSelector = "." + swiper.params.slideClass;
      swiper.zoom.passiveListener = passiveListener;
      swiper.zoom.slideSelector = slideSelector; // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      } // Move image


      swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    },
    disable: function disable() {
      var swiper = this;
      var zoom = swiper.zoom;
      if (!zoom.enabled) return;
      var support = swiper.support;
      swiper.zoom.enabled = false;
      var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      var activeListenerWithCapture = support.passiveListener ? {
        passive: false,
        capture: true
      } : true;
      var slideSelector = "." + swiper.params.slideClass; // Scale image

      if (support.gestures) {
        swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
      } else if (swiper.touchEvents.start === 'touchstart') {
        swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
        swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
        swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

        if (swiper.touchEvents.cancel) {
          swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
        }
      } // Move image


      swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
    }
  };
  var Zoom$1 = {
    name: 'zoom',
    params: {
      zoom: {
        enabled: false,
        maxRatio: 3,
        minRatio: 1,
        toggle: true,
        containerClass: 'swiper-zoom-container',
        zoomedSlideClass: 'swiper-slide-zoomed'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        zoom: _extends({
          enabled: false,
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          }
        }, Zoom)
      });
      var scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get: function get() {
          return scale;
        },
        set: function set(value) {
          if (scale !== value) {
            var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
            var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
            swiper.emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.zoom.enabled) {
          swiper.zoom.enable();
        }
      },
      destroy: function destroy(swiper) {
        swiper.zoom.disable();
      },
      touchStart: function touchStart(swiper, e) {
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(swiper, e) {
        if (!swiper.zoom.enabled) return;
        swiper.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(swiper, e) {
        if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          swiper.zoom.toggle(e);
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          swiper.zoom.onTransitionEnd();
        }
      },
      slideChange: function slideChange(swiper) {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          swiper.zoom.onTransitionEnd();
        }
      }
    }
  };

  var Lazy = {
    loadInSlide: function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }

      var swiper = this;
      var params = swiper.params.lazy;
      if (typeof index === 'undefined') return;
      if (swiper.slides.length === 0) return;
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
      var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images.push($slideEl[0]);
      }

      if ($images.length === 0) return;
      $images.each(function (imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');
        var $pictureEl = $imageEl.parent('picture');
        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

          if (background) {
            $imageEl.css('background-image', "url(\"" + background + "\")");
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }

            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }

            if ($pictureEl.length) {
              $pictureEl.children('source').each(function (sourceEl) {
                var $source = $(sourceEl);

                if ($source.attr('data-srcset')) {
                  $source.attr('srcset', $source.attr('data-srcset'));
                  $source.removeAttr('data-srcset');
                }
              });
            }

            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find("." + params.preloaderClass).remove();

          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
              swiper.lazy.loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
              swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
            }
          }

          swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        });
        swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    },
    load: function load() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          swiperParams = swiper.params,
          slides = swiper.slides,
          activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;
      var slidesPerView = swiperParams.slidesPerView;

      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
            return true;
          }
        } else if (slides[index]) return true;

        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }

        return $(slideEl).index();
      }

      if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;

      if (swiper.params.watchSlidesVisibility) {
        $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          swiper.lazy.loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) swiper.lazy.loadInSlide(i);
        }
      } else {
        swiper.lazy.loadInSlide(activeIndex);
      }

      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
            if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
          } // Prev Slides


          for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
            if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
          }
        } else {
          var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
          if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
          var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
          if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
        }
      }
    }
  };
  var Lazy$1 = {
    name: 'lazy',
    params: {
      lazy: {
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        lazy: _extends({
          initialImageLoaded: false
        }, Lazy)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      },
      init: function init(swiper) {
        if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
          swiper.lazy.load();
        }
      },
      scroll: function scroll(swiper) {
        if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
          swiper.lazy.load();
        }
      },
      resize: function resize(swiper) {
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      scrollbarDragMove: function scrollbarDragMove(swiper) {
        if (swiper.params.lazy.enabled) {
          swiper.lazy.load();
        }
      },
      transitionStart: function transitionStart(swiper) {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
            swiper.lazy.load();
          }
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          swiper.lazy.load();
        }
      },
      slideChange: function slideChange(swiper) {
        if (swiper.params.lazy.enabled && swiper.params.cssMode) {
          swiper.lazy.load();
        }
      }
    }
  };

  var Controller = {
    LinearSpline: function LinearSpline(x, y) {
      var binarySearch = function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;

            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }

          return maxIndex;
        };
      }();

      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };

      return this;
    },
    // xxx: for now i will just save one spline function to to
    getInterpolateFunction: function getInterpolateFunction(c) {
      var swiper = this;

      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    },
    setTranslate: function setTranslate(_setTranslate, byController) {
      var swiper = this;
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      var Swiper = swiper.constructor;

      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

        if (swiper.params.controller.by === 'slide') {
          swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }

        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }

      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      var Swiper = swiper.constructor;
      var controlled = swiper.controller.control;
      var i;

      function setControlledTransition(c) {
        c.setTransition(duration, swiper);

        if (duration !== 0) {
          c.transitionStart();

          if (c.params.autoHeight) {
            nextTick(function () {
              c.updateAutoHeight();
            });
          }

          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) return;

            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }

            c.transitionEnd();
          });
        }
      }

      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }
  };
  var Controller$1 = {
    name: 'controller',
    params: {
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'

      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        controller: _extends({
          control: swiper.params.controller.control
        }, Controller)
      });
    },
    on: {
      update: function update(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      resize: function resize(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      observerUpdate: function observerUpdate(swiper) {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      },
      setTranslate: function setTranslate(swiper, translate, byController) {
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      },
      setTransition: function setTransition(swiper, duration, byController) {
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      }
    }
  };

  var A11y = {
    getRandomNumber: function getRandomNumber(size) {
      if (size === void 0) {
        size = 16;
      }

      var randomChar = function randomChar() {
        return Math.round(16 * Math.random()).toString(16);
      };

      return 'x'.repeat(size).replace(/x/g, randomChar);
    },
    makeElFocusable: function makeElFocusable($el) {
      $el.attr('tabIndex', '0');
      return $el;
    },
    makeElNotFocusable: function makeElNotFocusable($el) {
      $el.attr('tabIndex', '-1');
      return $el;
    },
    addElRole: function addElRole($el, role) {
      $el.attr('role', role);
      return $el;
    },
    addElRoleDescription: function addElRoleDescription($el, description) {
      $el.attr('aria-role-description', description);
      return $el;
    },
    addElControls: function addElControls($el, controls) {
      $el.attr('aria-controls', controls);
      return $el;
    },
    addElLabel: function addElLabel($el, label) {
      $el.attr('aria-label', label);
      return $el;
    },
    addElId: function addElId($el, id) {
      $el.attr('id', id);
      return $el;
    },
    addElLive: function addElLive($el, live) {
      $el.attr('aria-live', live);
      return $el;
    },
    disableEl: function disableEl($el) {
      $el.attr('aria-disabled', true);
      return $el;
    },
    enableEl: function enableEl($el) {
      $el.attr('aria-disabled', false);
      return $el;
    },
    onEnterKey: function onEnterKey(e) {
      var swiper = this;
      var params = swiper.params.a11y;
      if (e.keyCode !== 13) return;
      var $targetEl = $(e.target);

      if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
        if (!(swiper.isEnd && !swiper.params.loop)) {
          swiper.slideNext();
        }

        if (swiper.isEnd) {
          swiper.a11y.notify(params.lastSlideMessage);
        } else {
          swiper.a11y.notify(params.nextSlideMessage);
        }
      }

      if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
        if (!(swiper.isBeginning && !swiper.params.loop)) {
          swiper.slidePrev();
        }

        if (swiper.isBeginning) {
          swiper.a11y.notify(params.firstSlideMessage);
        } else {
          swiper.a11y.notify(params.prevSlideMessage);
        }
      }

      if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
        $targetEl[0].click();
      }
    },
    notify: function notify(message) {
      var swiper = this;
      var notification = swiper.a11y.liveRegion;
      if (notification.length === 0) return;
      notification.html('');
      notification.html(message);
    },
    updateNavigation: function updateNavigation() {
      var swiper = this;
      if (swiper.params.loop || !swiper.navigation) return;
      var _swiper$navigation = swiper.navigation,
          $nextEl = _swiper$navigation.$nextEl,
          $prevEl = _swiper$navigation.$prevEl;

      if ($prevEl && $prevEl.length > 0) {
        if (swiper.isBeginning) {
          swiper.a11y.disableEl($prevEl);
          swiper.a11y.makeElNotFocusable($prevEl);
        } else {
          swiper.a11y.enableEl($prevEl);
          swiper.a11y.makeElFocusable($prevEl);
        }
      }

      if ($nextEl && $nextEl.length > 0) {
        if (swiper.isEnd) {
          swiper.a11y.disableEl($nextEl);
          swiper.a11y.makeElNotFocusable($nextEl);
        } else {
          swiper.a11y.enableEl($nextEl);
          swiper.a11y.makeElFocusable($nextEl);
        }
      }
    },
    updatePagination: function updatePagination() {
      var swiper = this;
      var params = swiper.params.a11y;

      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.bullets.each(function (bulletEl) {
          var $bulletEl = $(bulletEl);
          swiper.a11y.makeElFocusable($bulletEl);

          if (!swiper.params.pagination.renderBullet) {
            swiper.a11y.addElRole($bulletEl, 'button');
            swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
          }
        });
      }
    },
    init: function init() {
      var swiper = this;
      var params = swiper.params.a11y;
      swiper.$el.append(swiper.a11y.liveRegion); // Container

      var $containerEl = swiper.$el;

      if (params.containerRoleDescriptionMessage) {
        swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
      }

      if (params.containerMessage) {
        swiper.a11y.addElLabel($containerEl, params.containerMessage);
      } // Wrapper


      var $wrapperEl = swiper.$wrapperEl;
      var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
      var live;
      swiper.a11y.addElId($wrapperEl, wrapperId);

      if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
        live = 'off';
      } else {
        live = 'polite';
      }

      swiper.a11y.addElLive($wrapperEl, live); // Slide

      if (params.itemRoleDescriptionMessage) {
        swiper.a11y.addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
      }

      swiper.a11y.addElRole($(swiper.slides), 'group');
      swiper.slides.each(function (slideEl) {
        var $slideEl = $(slideEl);
        swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
      }); // Navigation

      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl && $nextEl.length) {
        swiper.a11y.makeElFocusable($nextEl);

        if ($nextEl[0].tagName !== 'BUTTON') {
          swiper.a11y.addElRole($nextEl, 'button');
          $nextEl.on('keydown', swiper.a11y.onEnterKey);
        }

        swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
        swiper.a11y.addElControls($nextEl, wrapperId);
      }

      if ($prevEl && $prevEl.length) {
        swiper.a11y.makeElFocusable($prevEl);

        if ($prevEl[0].tagName !== 'BUTTON') {
          swiper.a11y.addElRole($prevEl, 'button');
          $prevEl.on('keydown', swiper.a11y.onEnterKey);
        }

        swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
        swiper.a11y.addElControls($prevEl, wrapperId);
      } // Pagination


      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
      var $nextEl;
      var $prevEl;

      if (swiper.navigation && swiper.navigation.$nextEl) {
        $nextEl = swiper.navigation.$nextEl;
      }

      if (swiper.navigation && swiper.navigation.$prevEl) {
        $prevEl = swiper.navigation.$prevEl;
      }

      if ($nextEl) {
        $nextEl.off('keydown', swiper.a11y.onEnterKey);
      }

      if ($prevEl) {
        $prevEl.off('keydown', swiper.a11y.onEnterKey);
      } // Pagination


      if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
        swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
      }
    }
  };
  var A11y$1 = {
    name: 'a11y',
    params: {
      a11y: {
        enabled: true,
        notificationClass: 'swiper-notification',
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
        firstSlideMessage: 'This is the first slide',
        lastSlideMessage: 'This is the last slide',
        paginationBulletMessage: 'Go to slide {{index}}',
        containerMessage: null,
        containerRoleDescriptionMessage: null,
        itemRoleDescriptionMessage: null
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        a11y: _extends(_extends({}, A11y), {}, {
          liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
        })
      });
    },
    on: {
      afterInit: function afterInit(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.init();
        swiper.a11y.updateNavigation();
      },
      toEdge: function toEdge(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      fromEdge: function fromEdge(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.updatePagination();
      },
      destroy: function destroy(swiper) {
        if (!swiper.params.a11y.enabled) return;
        swiper.a11y.destroy();
      }
    }
  };

  var History = {
    init: function init() {
      var swiper = this;
      var window = getWindow();
      if (!swiper.params.history) return;

      if (!window.history || !window.history.pushState) {
        swiper.params.history.enabled = false;
        swiper.params.hashNavigation.enabled = true;
        return;
      }

      var history = swiper.history;
      history.initialized = true;
      history.paths = History.getPathValues(swiper.params.url);
      if (!history.paths.key && !history.paths.value) return;
      history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

      if (!swiper.params.history.replaceState) {
        window.addEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var window = getWindow();

      if (!swiper.params.history.replaceState) {
        window.removeEventListener('popstate', swiper.history.setHistoryPopState);
      }
    },
    setHistoryPopState: function setHistoryPopState() {
      var swiper = this;
      swiper.history.paths = History.getPathValues(swiper.params.url);
      swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
    },
    getPathValues: function getPathValues(urlOverride) {
      var window = getWindow();
      var location;

      if (urlOverride) {
        location = new URL(urlOverride);
      } else {
        location = window.location;
      }

      var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
        return part !== '';
      });
      var total = pathArray.length;
      var key = pathArray[total - 2];
      var value = pathArray[total - 1];
      return {
        key: key,
        value: value
      };
    },
    setHistory: function setHistory(key, index) {
      var swiper = this;
      var window = getWindow();
      if (!swiper.history.initialized || !swiper.params.history.enabled) return;
      var location;

      if (swiper.params.url) {
        location = new URL(swiper.params.url);
      } else {
        location = window.location;
      }

      var slide = swiper.slides.eq(index);
      var value = History.slugify(slide.attr('data-history'));

      if (!location.pathname.includes(key)) {
        value = key + "/" + value;
      }

      var currentState = window.history.state;

      if (currentState && currentState.value === value) {
        return;
      }

      if (swiper.params.history.replaceState) {
        window.history.replaceState({
          value: value
        }, null, value);
      } else {
        window.history.pushState({
          value: value
        }, null, value);
      }
    },
    slugify: function slugify(text) {
      return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
    },
    scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
      var swiper = this;

      if (value) {
        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHistory = History.slugify(slide.attr('data-history'));

          if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, runCallbacks);
          }
        }
      } else {
        swiper.slideTo(0, speed, runCallbacks);
      }
    }
  };
  var History$1 = {
    name: 'history',
    params: {
      history: {
        enabled: false,
        replaceState: false,
        key: 'slides'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        history: _extends({}, History)
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.history.enabled) {
          swiper.history.init();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.params.history.enabled) {
          swiper.history.destroy();
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (swiper.history.initialized) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      },
      slideChange: function slideChange(swiper) {
        if (swiper.history.initialized && swiper.params.cssMode) {
          swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      }
    }
  };

  var HashNavigation = {
    onHashCange: function onHashCange() {
      var swiper = this;
      var document = getDocument();
      swiper.emit('hashChange');
      var newHash = document.location.hash.replace('#', '');
      var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

      if (newHash !== activeSlideHash) {
        var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
        if (typeof newIndex === 'undefined') return;
        swiper.slideTo(newIndex);
      }
    },
    setHash: function setHash() {
      var swiper = this;
      var window = getWindow();
      var document = getDocument();
      if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;

      if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
        window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
        swiper.emit('hashSet');
      } else {
        var slide = swiper.slides.eq(swiper.activeIndex);
        var hash = slide.attr('data-hash') || slide.attr('data-history');
        document.location.hash = hash || '';
        swiper.emit('hashSet');
      }
    },
    init: function init() {
      var swiper = this;
      var document = getDocument();
      var window = getWindow();
      if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
      swiper.hashNavigation.initialized = true;
      var hash = document.location.hash.replace('#', '');

      if (hash) {
        var speed = 0;

        for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
          var slide = swiper.slides.eq(i);
          var slideHash = slide.attr('data-hash') || slide.attr('data-history');

          if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
            var index = slide.index();
            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
          }
        }
      }

      if (swiper.params.hashNavigation.watchState) {
        $(window).on('hashchange', swiper.hashNavigation.onHashCange);
      }
    },
    destroy: function destroy() {
      var swiper = this;
      var window = getWindow();

      if (swiper.params.hashNavigation.watchState) {
        $(window).off('hashchange', swiper.hashNavigation.onHashCange);
      }
    }
  };
  var HashNavigation$1 = {
    name: 'hash-navigation',
    params: {
      hashNavigation: {
        enabled: false,
        replaceState: false,
        watchState: false
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        hashNavigation: _extends({
          initialized: false
        }, HashNavigation)
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.init();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.params.hashNavigation.enabled) {
          swiper.hashNavigation.destroy();
        }
      },
      transitionEnd: function transitionEnd(swiper) {
        if (swiper.hashNavigation.initialized) {
          swiper.hashNavigation.setHash();
        }
      },
      slideChange: function slideChange(swiper) {
        if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
          swiper.hashNavigation.setHash();
        }
      }
    }
  };

  var Autoplay = {
    run: function run() {
      var swiper = this;
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;

      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }

      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = nextTick(function () {
        var autoplayResult;

        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          swiper.emit('autoplay');
        } else {
          swiper.autoplay.stop();
        }

        if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
          swiper.autoplay.run();
        }
      }, delay);
    },
    start: function start() {
      var swiper = this;
      if (typeof swiper.autoplay.timeout !== 'undefined') return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      swiper.emit('autoplayStart');
      swiper.autoplay.run();
      return true;
    },
    stop: function stop() {
      var swiper = this;
      if (!swiper.autoplay.running) return false;
      if (typeof swiper.autoplay.timeout === 'undefined') return false;

      if (swiper.autoplay.timeout) {
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = undefined;
      }

      swiper.autoplay.running = false;
      swiper.emit('autoplayStop');
      return true;
    },
    pause: function pause(speed) {
      var swiper = this;
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.paused = true;

      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        swiper.autoplay.run();
      } else {
        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      }
    },
    onVisibilityChange: function onVisibilityChange() {
      var swiper = this;
      var document = getDocument();

      if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
        swiper.autoplay.pause();
      }

      if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
        swiper.autoplay.run();
        swiper.autoplay.paused = false;
      }
    },
    onTransitionEnd: function onTransitionEnd(e) {
      var swiper = this;
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
      if (e.target !== swiper.$wrapperEl[0]) return;
      swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
      swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
      swiper.autoplay.paused = false;

      if (!swiper.autoplay.running) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.run();
      }
    }
  };
  var Autoplay$1 = {
    name: 'autoplay',
    params: {
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        autoplay: _extends(_extends({}, Autoplay), {}, {
          running: false,
          paused: false
        })
      });
    },
    on: {
      init: function init(swiper) {
        if (swiper.params.autoplay.enabled) {
          swiper.autoplay.start();
          var document = getDocument();
          document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      },
      beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      sliderFirstMove: function sliderFirstMove(swiper) {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.stop();
          } else {
            swiper.autoplay.pause();
          }
        }
      },
      touchEnd: function touchEnd(swiper) {
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.run();
        }
      },
      destroy: function destroy(swiper) {
        if (swiper.autoplay.running) {
          swiper.autoplay.stop();
        }

        var document = getDocument();
        document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
      }
    }
  };

  var Fade = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = swiper.slides.eq(i);
        var offset = $slideEl[0].swiperSlideOffset;
        var tx = -offset;
        if (!swiper.params.virtualTranslate) tx -= swiper.translate;
        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }

        var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
        $slideEl.css({
          opacity: slideOpacity
        }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides,
          $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false;
        slides.transitionEnd(function () {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFade = {
    name: 'effect-fade',
    params: {
      fadeEffect: {
        crossFade: false
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        fadeEffect: _extends({}, Fade)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== 'fade') return;
        swiper.classNames.push(swiper.params.containerModifierClass + "fade");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        extend$1(swiper.params, overwriteParams);
        extend$1(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== 'fade') return;
        swiper.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== 'fade') return;
        swiper.fadeEffect.setTransition(duration);
      }
    }
  };

  var Cube = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var $el = swiper.$el,
          $wrapperEl = swiper.$wrapperEl,
          slides = swiper.slides,
          swiperWidth = swiper.width,
          swiperHeight = swiper.height,
          rtl = swiper.rtlTranslate,
          swiperSize = swiper.size,
          browser = swiper.browser;
      var params = swiper.params.cubeEffect;
      var isHorizontal = swiper.isHorizontal();
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var wrapperRotate = 0;
      var $cubeShadowEl;

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }

          $cubeShadowEl.css({
            height: swiperWidth + "px"
          });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');

          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideIndex = i;

        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }

        var slideAngle = slideIndex * 90;
        var round = Math.floor(slideAngle / 360);

        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }

        var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        var tx = 0;
        var ty = 0;
        var tz = 0;

        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + round * 4 * swiperSize;
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = 3 * swiperSize + swiperSize * 4 * round;
        }

        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

        if (progress <= 1 && progress > -1) {
          wrapperRotate = slideIndex * 90 + progress * 90;
          if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
        }

        $slideEl.transform(transform);

        if (params.slideShadows) {
          // Set shadows
          var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }

      $wrapperEl.css({
        '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
        'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
        } else {
          var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
          var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
          var scale1 = params.shadowScale;
          var scale2 = params.shadowScale / multiplier;
          var offset = params.shadowOffset;
          $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
        }
      }

      var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
      $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var $el = swiper.$el,
          slides = swiper.slides;
      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    }
  };
  var EffectCube = {
    name: 'effect-cube',
    params: {
      cubeEffect: {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        cubeEffect: _extends({}, Cube)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== 'cube') return;
        swiper.classNames.push(swiper.params.containerModifierClass + "cube");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        };
        extend$1(swiper.params, overwriteParams);
        extend$1(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== 'cube') return;
        swiper.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== 'cube') return;
        swiper.cubeEffect.setTransition(duration);
      }
    }
  };

  var Flip = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var slides = swiper.slides,
          rtl = swiper.rtlTranslate;

      for (var i = 0; i < slides.length; i += 1) {
        var $slideEl = slides.eq(i);
        var progress = $slideEl[0].progress;

        if (swiper.params.flipEffect.limitRotation) {
          progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        }

        var offset = $slideEl[0].swiperSlideOffset;
        var rotate = -180 * progress;
        var rotateY = rotate;
        var rotateX = 0;
        var tx = -offset;
        var ty = 0;

        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
          rotateX = -rotateY;
          rotateY = 0;
        } else if (rtl) {
          rotateY = -rotateY;
        }

        $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

        if (swiper.params.flipEffect.slideShadows) {
          // Set shadows
          var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if (shadowBefore.length === 0) {
            shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
            $slideEl.append(shadowBefore);
          }

          if (shadowAfter.length === 0) {
            shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append(shadowAfter);
          }

          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }

        $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      var slides = swiper.slides,
          activeIndex = swiper.activeIndex,
          $wrapperEl = swiper.$wrapperEl;
      slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

      if (swiper.params.virtualTranslate && duration !== 0) {
        var eventTriggered = false; // eslint-disable-next-line

        slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;

          eventTriggered = true;
          swiper.animating = false;
          var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (var i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }
  };
  var EffectFlip = {
    name: 'effect-flip',
    params: {
      flipEffect: {
        slideShadows: true,
        limitRotation: true
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        flipEffect: _extends({}, Flip)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== 'flip') return;
        swiper.classNames.push(swiper.params.containerModifierClass + "flip");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        var overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: true
        };
        extend$1(swiper.params, overwriteParams);
        extend$1(swiper.originalParams, overwriteParams);
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== 'flip') return;
        swiper.flipEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== 'flip') return;
        swiper.flipEffect.setTransition(duration);
      }
    }
  };

  var Coverflow = {
    setTranslate: function setTranslate() {
      var swiper = this;
      var swiperWidth = swiper.width,
          swiperHeight = swiper.height,
          slides = swiper.slides,
          slidesSizesGrid = swiper.slidesSizesGrid;
      var params = swiper.params.coverflowEffect;
      var isHorizontal = swiper.isHorizontal();
      var transform = swiper.translate;
      var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
      var rotate = isHorizontal ? params.rotate : -params.rotate;
      var translate = params.depth; // Each slide offset from center

      for (var i = 0, length = slides.length; i < length; i += 1) {
        var $slideEl = slides.eq(i);
        var slideSize = slidesSizesGrid[i];
        var slideOffset = $slideEl[0].swiperSlideOffset;
        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
        var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

        var translateZ = -translate * Math.abs(offsetMultiplier);
        var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

        if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
          stretch = parseFloat(params.stretch) / 100 * slideSize;
        }

        var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
        var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
        var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;
        if (Math.abs(scale) < 0.001) scale = 0;
        var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

        if (params.slideShadows) {
          // Set shadows
          var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

          if ($shadowBeforeEl.length === 0) {
            $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
            $slideEl.append($shadowBeforeEl);
          }

          if ($shadowAfterEl.length === 0) {
            $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
            $slideEl.append($shadowAfterEl);
          }

          if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
          if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
        }
      }
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
    }
  };
  var EffectCoverflow = {
    name: 'effect-coverflow',
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        scale: 1,
        modifier: 1,
        slideShadows: true
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        coverflowEffect: _extends({}, Coverflow)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        if (swiper.params.effect !== 'coverflow') return;
        swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
        swiper.classNames.push(swiper.params.containerModifierClass + "3d");
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      },
      setTranslate: function setTranslate(swiper) {
        if (swiper.params.effect !== 'coverflow') return;
        swiper.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(swiper, duration) {
        if (swiper.params.effect !== 'coverflow') return;
        swiper.coverflowEffect.setTransition(duration);
      }
    }
  };

  var Thumbs = {
    init: function init() {
      var swiper = this;
      var thumbsParams = swiper.params.thumbs;
      if (swiper.thumbs.initialized) return false;
      swiper.thumbs.initialized = true;
      var SwiperClass = swiper.constructor;

      if (thumbsParams.swiper instanceof SwiperClass) {
        swiper.thumbs.swiper = thumbsParams.swiper;
        extend$1(swiper.thumbs.swiper.originalParams, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
        extend$1(swiper.thumbs.swiper.params, {
          watchSlidesProgress: true,
          slideToClickedSlide: false
        });
      } else if (isObject$1(thumbsParams.swiper)) {
        swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
          slideToClickedSlide: false
        }));
        swiper.thumbs.swiperCreated = true;
      }

      swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
      swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
      return true;
    },
    onThumbClick: function onThumbClick() {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      var clickedIndex = thumbsSwiper.clickedIndex;
      var clickedSlide = thumbsSwiper.clickedSlide;
      if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
      if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
      var slideToIndex;

      if (thumbsSwiper.params.loop) {
        slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
      } else {
        slideToIndex = clickedIndex;
      }

      if (swiper.params.loop) {
        var currentIndex = swiper.activeIndex;

        if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
          swiper.loopFix(); // eslint-disable-next-line

          swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
          currentIndex = swiper.activeIndex;
        }

        var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
        var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
        if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
      }

      swiper.slideTo(slideToIndex);
    },
    update: function update(initial) {
      var swiper = this;
      var thumbsSwiper = swiper.thumbs.swiper;
      if (!thumbsSwiper) return;
      var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
      var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
      var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

      if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
        var currentThumbsIndex = thumbsSwiper.activeIndex;
        var newThumbsIndex;
        var direction;

        if (thumbsSwiper.params.loop) {
          if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
            thumbsSwiper.loopFix(); // eslint-disable-next-line

            thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
            currentThumbsIndex = thumbsSwiper.activeIndex;
          } // Find actual thumbs index to slide to


          var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
          var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
          if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
          direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
        } else {
          newThumbsIndex = swiper.realIndex;
          direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
        }

        if (useOffset) {
          newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
        }

        if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
          if (thumbsSwiper.params.centeredSlides) {
            if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
            } else {
              newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
            }
          } else if (newThumbsIndex > currentThumbsIndex) {
            newThumbsIndex = newThumbsIndex - slidesPerView + 1;
          }

          thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
        }
      } // Activate thumbs


      var thumbsToActivate = 1;
      var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

      if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
        thumbsToActivate = swiper.params.slidesPerView;
      }

      if (!swiper.params.thumbs.multipleActiveThumbs) {
        thumbsToActivate = 1;
      }

      thumbsToActivate = Math.floor(thumbsToActivate);
      thumbsSwiper.slides.removeClass(thumbActiveClass);

      if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
        for (var i = 0; i < thumbsToActivate; i += 1) {
          thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
        }
      } else {
        for (var _i = 0; _i < thumbsToActivate; _i += 1) {
          thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
        }
      }
    }
  };
  var Thumbs$1 = {
    name: 'thumbs',
    params: {
      thumbs: {
        swiper: null,
        multipleActiveThumbs: true,
        autoScrollOffset: 0,
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs'
      }
    },
    create: function create() {
      var swiper = this;
      bindModuleMethods(swiper, {
        thumbs: _extends({
          swiper: null,
          initialized: false
        }, Thumbs)
      });
    },
    on: {
      beforeInit: function beforeInit(swiper) {
        var thumbs = swiper.params.thumbs;
        if (!thumbs || !thumbs.swiper) return;
        swiper.thumbs.init();
        swiper.thumbs.update(true);
      },
      slideChange: function slideChange(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      update: function update(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      resize: function resize(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      observerUpdate: function observerUpdate(swiper) {
        if (!swiper.thumbs.swiper) return;
        swiper.thumbs.update();
      },
      setTransition: function setTransition(swiper, duration) {
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        thumbsSwiper.setTransition(duration);
      },
      beforeDestroy: function beforeDestroy(swiper) {
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;

        if (swiper.thumbs.swiperCreated && thumbsSwiper) {
          thumbsSwiper.destroy();
        }
      }
    }
  };

  // Swiper Class
  var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
  Swiper.use(components);

  return Swiper;

})));
//# sourceMappingURL=swiper-bundle.js.map
