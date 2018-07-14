
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
	return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
		_elm_lang$core$Json_Decode$succeed(_p0));
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: decoder,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(fallback),
						_1: {ctor: '[]'}
					}
				});
		};
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				var _p2 = A2(
					_elm_lang$core$Json_Decode$decodeValue,
					nullOr(valDecoder),
					_p1._0);
				if (_p2.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p2._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p2._0);
				}
			} else {
				return _elm_lang$core$Json_Decode$succeed(fallback);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
			decoder);
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

var _elm_community$json_extra$Json_Decode_Extra$when = F3(
	function (checkDecoder, check, passDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (checkVal) {
				return check(checkVal) ? passDecoder : _elm_lang$core$Json_Decode$fail(
					A2(
						_elm_lang$core$Basics_ops['++'],
						'Check failed with input `',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(checkVal),
							'`')));
			},
			checkDecoder);
	});
var _elm_community$json_extra$Json_Decode_Extra$combine = A2(
	_elm_lang$core$List$foldr,
	_elm_lang$core$Json_Decode$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_elm_lang$core$Json_Decode$succeed(
		{ctor: '[]'}));
var _elm_community$json_extra$Json_Decode_Extra$collection = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (length) {
			return _elm_community$json_extra$Json_Decode_Extra$combine(
				A2(
					_elm_lang$core$List$map,
					function (index) {
						return A2(
							_elm_lang$core$Json_Decode$field,
							_elm_lang$core$Basics$toString(index),
							decoder);
					},
					A2(_elm_lang$core$List$range, 0, length - 1)));
		},
		A2(_elm_lang$core$Json_Decode$field, 'length', _elm_lang$core$Json_Decode$int));
};
var _elm_community$json_extra$Json_Decode_Extra$fromResult = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p0._0);
	}
};
var _elm_community$json_extra$Json_Decode_Extra$parseInt = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p1) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toInt(_p1));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$parseFloat = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p2) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toFloat(_p2));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$doubleEncoded = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (_p3) {
			return _elm_community$json_extra$Json_Decode_Extra$fromResult(
				A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p3));
		},
		_elm_lang$core$Json_Decode$string);
};
var _elm_community$json_extra$Json_Decode_Extra$keys = A2(
	_elm_lang$core$Json_Decode$map,
	A2(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, acc) {
				var _p5 = _p4;
				return {ctor: '::', _0: _p5._0, _1: acc};
			}),
		{ctor: '[]'}),
	_elm_lang$core$Json_Decode$keyValuePairs(
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'})));
var _elm_community$json_extra$Json_Decode_Extra$sequenceHelp = F2(
	function (decoders, jsonValues) {
		return (!_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(jsonValues),
			_elm_lang$core$List$length(decoders))) ? _elm_lang$core$Json_Decode$fail('Number of decoders does not match number of values') : _elm_community$json_extra$Json_Decode_Extra$fromResult(
			A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$Result$map2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})),
				_elm_lang$core$Result$Ok(
					{ctor: '[]'}),
				A3(_elm_lang$core$List$map2, _elm_lang$core$Json_Decode$decodeValue, decoders, jsonValues)));
	});
var _elm_community$json_extra$Json_Decode_Extra$sequence = function (decoders) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_community$json_extra$Json_Decode_Extra$sequenceHelp(decoders),
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$indexedList = function (indexedDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (values) {
			return _elm_community$json_extra$Json_Decode_Extra$sequence(
				A2(
					_elm_lang$core$List$map,
					indexedDecoder,
					A2(
						_elm_lang$core$List$range,
						0,
						_elm_lang$core$List$length(values) - 1)));
		},
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _p6 = A2(
				_elm_lang$core$Json_Decode$decodeValue,
				A2(_elm_lang$core$Json_Decode$field, fieldName, _elm_lang$core$Json_Decode$value),
				json);
			if (_p6.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(_elm_lang$core$Json_Decode$field, fieldName, decoder));
			} else {
				return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, finishDecoding, _elm_lang$core$Json_Decode$value);
	});
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Maybe$withDefault(fallback),
			_elm_lang$core$Json_Decode$maybe(decoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p7 = tuples;
		if (_p7.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p8 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p7._0._0);
			if (_p8.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p9) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p8._0, _p7._0._1, _p9));
					},
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p7._1));
			} else {
				return _elm_lang$core$Json_Decode$fail(_p8._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples(keyDecoder),
			_elm_lang$core$Json_Decode$keyValuePairs(valueDecoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Set$fromList,
		_elm_lang$core$Json_Decode$list(decoder));
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p10) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$Date$fromString(_p10));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$andMap = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_lang$core$Basics$flip(_elm_community$json_extra$Json_Decode_Extra$andMap);

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _elm_lang$navigation$Native_Navigation = function() {


// FAKE NAVIGATION

function go(n)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		if (n !== 0)
		{
			history.go(n);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function pushState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.pushState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}

function replaceState(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		history.replaceState({}, '', url);
		callback(_elm_lang$core$Native_Scheduler.succeed(getLocation()));
	});
}


// REAL NAVIGATION

function reloadPage(skipCache)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		document.location.reload(skipCache);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function setLocation(url)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		try
		{
			window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			document.location.reload(false);
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


// GET LOCATION

function getLocation()
{
	var location = document.location;

	return {
		href: location.href,
		host: location.host,
		hostname: location.hostname,
		protocol: location.protocol,
		origin: location.origin,
		port_: location.port,
		pathname: location.pathname,
		search: location.search,
		hash: location.hash,
		username: location.username,
		password: location.password
	};
}


// DETECT IE11 PROBLEMS

function isInternetExplorer11()
{
	return window.navigator.userAgent.indexOf('Trident') !== -1;
}


return {
	go: go,
	setLocation: setLocation,
	reloadPage: reloadPage,
	pushState: pushState,
	replaceState: replaceState,
	getLocation: getLocation,
	isInternetExplorer11: isInternetExplorer11
};

}();

var _elm_lang$navigation$Navigation$replaceState = _elm_lang$navigation$Native_Navigation.replaceState;
var _elm_lang$navigation$Navigation$pushState = _elm_lang$navigation$Native_Navigation.pushState;
var _elm_lang$navigation$Navigation$go = _elm_lang$navigation$Native_Navigation.go;
var _elm_lang$navigation$Navigation$reloadPage = _elm_lang$navigation$Native_Navigation.reloadPage;
var _elm_lang$navigation$Navigation$setLocation = _elm_lang$navigation$Native_Navigation.setLocation;
var _elm_lang$navigation$Navigation_ops = _elm_lang$navigation$Navigation_ops || {};
_elm_lang$navigation$Navigation_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$navigation$Navigation$notify = F3(
	function (router, subs, location) {
		var send = function (_p1) {
			var _p2 = _p1;
			return A2(
				_elm_lang$core$Platform$sendToApp,
				router,
				_p2._0(location));
		};
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(_elm_lang$core$List$map, send, subs)),
			_elm_lang$core$Task$succeed(
				{ctor: '_Tuple0'}));
	});
var _elm_lang$navigation$Navigation$cmdHelp = F3(
	function (router, subs, cmd) {
		var _p3 = cmd;
		switch (_p3.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$go(_p3._0);
			case 'New':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$pushState(_p3._0));
			case 'Modify':
				return A2(
					_elm_lang$core$Task$andThen,
					A2(_elm_lang$navigation$Navigation$notify, router, subs),
					_elm_lang$navigation$Navigation$replaceState(_p3._0));
			case 'Visit':
				return _elm_lang$navigation$Navigation$setLocation(_p3._0);
			default:
				return _elm_lang$navigation$Navigation$reloadPage(_p3._0);
		}
	});
var _elm_lang$navigation$Navigation$killPopWatcher = function (popWatcher) {
	var _p4 = popWatcher;
	if (_p4.ctor === 'Normal') {
		return _elm_lang$core$Process$kill(_p4._0);
	} else {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Process$kill(_p4._0),
			_elm_lang$core$Process$kill(_p4._1));
	}
};
var _elm_lang$navigation$Navigation$onSelfMsg = F3(
	function (router, location, state) {
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			A3(_elm_lang$navigation$Navigation$notify, router, state.subs, location),
			_elm_lang$core$Task$succeed(state));
	});
var _elm_lang$navigation$Navigation$subscription = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$command = _elm_lang$core$Native_Platform.leaf('Navigation');
var _elm_lang$navigation$Navigation$Location = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {href: a, host: b, hostname: c, protocol: d, origin: e, port_: f, pathname: g, search: h, hash: i, username: j, password: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$navigation$Navigation$State = F2(
	function (a, b) {
		return {subs: a, popWatcher: b};
	});
var _elm_lang$navigation$Navigation$init = _elm_lang$core$Task$succeed(
	A2(
		_elm_lang$navigation$Navigation$State,
		{ctor: '[]'},
		_elm_lang$core$Maybe$Nothing));
var _elm_lang$navigation$Navigation$Reload = function (a) {
	return {ctor: 'Reload', _0: a};
};
var _elm_lang$navigation$Navigation$reload = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(false));
var _elm_lang$navigation$Navigation$reloadAndSkipCache = _elm_lang$navigation$Navigation$command(
	_elm_lang$navigation$Navigation$Reload(true));
var _elm_lang$navigation$Navigation$Visit = function (a) {
	return {ctor: 'Visit', _0: a};
};
var _elm_lang$navigation$Navigation$load = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Visit(url));
};
var _elm_lang$navigation$Navigation$Modify = function (a) {
	return {ctor: 'Modify', _0: a};
};
var _elm_lang$navigation$Navigation$modifyUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Modify(url));
};
var _elm_lang$navigation$Navigation$New = function (a) {
	return {ctor: 'New', _0: a};
};
var _elm_lang$navigation$Navigation$newUrl = function (url) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$New(url));
};
var _elm_lang$navigation$Navigation$Jump = function (a) {
	return {ctor: 'Jump', _0: a};
};
var _elm_lang$navigation$Navigation$back = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(0 - n));
};
var _elm_lang$navigation$Navigation$forward = function (n) {
	return _elm_lang$navigation$Navigation$command(
		_elm_lang$navigation$Navigation$Jump(n));
};
var _elm_lang$navigation$Navigation$cmdMap = F2(
	function (_p5, myCmd) {
		var _p6 = myCmd;
		switch (_p6.ctor) {
			case 'Jump':
				return _elm_lang$navigation$Navigation$Jump(_p6._0);
			case 'New':
				return _elm_lang$navigation$Navigation$New(_p6._0);
			case 'Modify':
				return _elm_lang$navigation$Navigation$Modify(_p6._0);
			case 'Visit':
				return _elm_lang$navigation$Navigation$Visit(_p6._0);
			default:
				return _elm_lang$navigation$Navigation$Reload(_p6._0);
		}
	});
var _elm_lang$navigation$Navigation$Monitor = function (a) {
	return {ctor: 'Monitor', _0: a};
};
var _elm_lang$navigation$Navigation$program = F2(
	function (locationToMessage, stuff) {
		var init = stuff.init(
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$program(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$programWithFlags = F2(
	function (locationToMessage, stuff) {
		var init = function (flags) {
			return A2(
				stuff.init,
				flags,
				_elm_lang$navigation$Native_Navigation.getLocation(
					{ctor: '_Tuple0'}));
		};
		var subs = function (model) {
			return _elm_lang$core$Platform_Sub$batch(
				{
					ctor: '::',
					_0: _elm_lang$navigation$Navigation$subscription(
						_elm_lang$navigation$Navigation$Monitor(locationToMessage)),
					_1: {
						ctor: '::',
						_0: stuff.subscriptions(model),
						_1: {ctor: '[]'}
					}
				});
		};
		return _elm_lang$html$Html$programWithFlags(
			{init: init, view: stuff.view, update: stuff.update, subscriptions: subs});
	});
var _elm_lang$navigation$Navigation$subMap = F2(
	function (func, _p7) {
		var _p8 = _p7;
		return _elm_lang$navigation$Navigation$Monitor(
			function (_p9) {
				return func(
					_p8._0(_p9));
			});
	});
var _elm_lang$navigation$Navigation$InternetExplorer = F2(
	function (a, b) {
		return {ctor: 'InternetExplorer', _0: a, _1: b};
	});
var _elm_lang$navigation$Navigation$Normal = function (a) {
	return {ctor: 'Normal', _0: a};
};
var _elm_lang$navigation$Navigation$spawnPopWatcher = function (router) {
	var reportLocation = function (_p10) {
		return A2(
			_elm_lang$core$Platform$sendToSelf,
			router,
			_elm_lang$navigation$Native_Navigation.getLocation(
				{ctor: '_Tuple0'}));
	};
	return _elm_lang$navigation$Native_Navigation.isInternetExplorer11(
		{ctor: '_Tuple0'}) ? A3(
		_elm_lang$core$Task$map2,
		_elm_lang$navigation$Navigation$InternetExplorer,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)),
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'hashchange', _elm_lang$core$Json_Decode$value, reportLocation))) : A2(
		_elm_lang$core$Task$map,
		_elm_lang$navigation$Navigation$Normal,
		_elm_lang$core$Process$spawn(
			A3(_elm_lang$dom$Dom_LowLevel$onWindow, 'popstate', _elm_lang$core$Json_Decode$value, reportLocation)));
};
var _elm_lang$navigation$Navigation$onEffects = F4(
	function (router, cmds, subs, _p11) {
		var _p12 = _p11;
		var _p15 = _p12.popWatcher;
		var stepState = function () {
			var _p13 = {ctor: '_Tuple2', _0: subs, _1: _p15};
			_v6_2:
			do {
				if (_p13._0.ctor === '[]') {
					if (_p13._1.ctor === 'Just') {
						return A2(
							_elm_lang$navigation$Navigation_ops['&>'],
							_elm_lang$navigation$Navigation$killPopWatcher(_p13._1._0),
							_elm_lang$core$Task$succeed(
								A2(_elm_lang$navigation$Navigation$State, subs, _elm_lang$core$Maybe$Nothing)));
					} else {
						break _v6_2;
					}
				} else {
					if (_p13._1.ctor === 'Nothing') {
						return A2(
							_elm_lang$core$Task$map,
							function (_p14) {
								return A2(
									_elm_lang$navigation$Navigation$State,
									subs,
									_elm_lang$core$Maybe$Just(_p14));
							},
							_elm_lang$navigation$Navigation$spawnPopWatcher(router));
					} else {
						break _v6_2;
					}
				}
			} while(false);
			return _elm_lang$core$Task$succeed(
				A2(_elm_lang$navigation$Navigation$State, subs, _p15));
		}();
		return A2(
			_elm_lang$navigation$Navigation_ops['&>'],
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					A2(_elm_lang$navigation$Navigation$cmdHelp, router, subs),
					cmds)),
			stepState);
	});
_elm_lang$core$Native_Platform.effectManagers['Navigation'] = {pkg: 'elm-lang/navigation', init: _elm_lang$navigation$Navigation$init, onEffects: _elm_lang$navigation$Navigation$onEffects, onSelfMsg: _elm_lang$navigation$Navigation$onSelfMsg, tag: 'fx', cmdMap: _elm_lang$navigation$Navigation$cmdMap, subMap: _elm_lang$navigation$Navigation$subMap};

var _user$project$Answer_Model$generate_answer = function (i) {
	return {
		id: _elm_lang$core$Maybe$Nothing,
		question_id: _elm_lang$core$Maybe$Nothing,
		text: A2(
			_elm_lang$core$String$join,
			' ',
			{
				ctor: '::',
				_0: 'Click to write choice',
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(i + 1),
					_1: {ctor: '[]'}
				}
			}),
		correct: false,
		order: i,
		feedback: ''
	};
};
var _user$project$Answer_Model$generate_answers = function (n) {
	return _elm_lang$core$Array$fromList(
		A2(
			_elm_lang$core$List$map,
			_user$project$Answer_Model$generate_answer,
			A2(_elm_lang$core$List$range, 0, n - 1)));
};
var _user$project$Answer_Model$Answer = F6(
	function (a, b, c, d, e, f) {
		return {id: a, question_id: b, text: c, correct: d, order: e, feedback: f};
	});

var _user$project$Answer_Decode$answerDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'feedback',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'order',
		_elm_lang$core$Json_Decode$int,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'correct',
			_elm_lang$core$Json_Decode$bool,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'text',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'question_id',
					_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'id',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Answer_Model$Answer)))))));
var _user$project$Answer_Decode$answersDecoder = _elm_lang$core$Json_Decode$array(_user$project$Answer_Decode$answerDecoder);

var _user$project$Answer_Encode$answerEncoder = function (answer) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'text',
				_1: _elm_lang$core$Json_Encode$string(answer.text)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'correct',
					_1: _elm_lang$core$Json_Encode$bool(answer.correct)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'order',
						_1: _elm_lang$core$Json_Encode$int(answer.order)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'feedback',
							_1: _elm_lang$core$Json_Encode$string(answer.feedback)
						},
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Answer_Encode$answersEncoder = function (answers) {
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Array$toList(
			A2(
				_elm_lang$core$Array$map,
				function (answer) {
					return _user$project$Answer_Encode$answerEncoder(answer);
				},
				answers)));
};

var _user$project$Field$fieldIDDecoder = _elm_lang$core$Json_Decode$int;

var _user$project$Answer_Field$get_answer_field = F2(
	function (answer_fields, index) {
		return A2(_elm_lang$core$Array$get, index, answer_fields);
	});
var _user$project$Answer_Field$answer = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _user$project$Answer_Field$attributes = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _user$project$Answer_Field$name = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.name;
};
var _user$project$Answer_Field$id = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.id;
};
var _user$project$Answer_Field$error = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.error;
};
var _user$project$Answer_Field$index = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.index;
};
var _user$project$Answer_Field$editable = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.editable;
};
var _user$project$Answer_Field$question_index = function (answer_field) {
	var attrs = _user$project$Answer_Field$attributes(answer_field);
	return attrs.question_index;
};
var _user$project$Answer_Field$feedback_field = function (_p4) {
	var _p5 = _p4;
	return _p5._2;
};
var _user$project$Answer_Field$toAnswers = function (answer_fields) {
	return A2(_elm_lang$core$Array$map, _user$project$Answer_Field$answer, answer_fields);
};
var _user$project$Answer_Field$generate_answer_feedback_field = function (id) {
	return {id: id, editable: false, error_string: '', error: false};
};
var _user$project$Answer_Field$AnswerFeedbackField = F4(
	function (a, b, c, d) {
		return {id: a, editable: b, error_string: c, error: d};
	});
var _user$project$Answer_Field$AnswerFieldAttributes = F7(
	function (a, b, c, d, e, f, g) {
		return {id: a, name: b, editable: c, error: d, error_string: e, question_index: f, index: g};
	});
var _user$project$Answer_Field$AnswerField = F3(
	function (a, b, c) {
		return {ctor: 'AnswerField', _0: a, _1: b, _2: c};
	});
var _user$project$Answer_Field$update_question_index = F2(
	function (_p6, i) {
		var _p7 = _p6;
		return A3(
			_user$project$Answer_Field$AnswerField,
			_p7._0,
			_elm_lang$core$Native_Utils.update(
				_p7._1,
				{question_index: i}),
			_p7._2);
	});
var _user$project$Answer_Field$generate_answer_field = F4(
	function (i, j, k, answer) {
		var answer_name = A2(
			_elm_lang$core$String$join,
			'_',
			{
				ctor: '::',
				_0: 'text',
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(i),
					_1: {
						ctor: '::',
						_0: 'question',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(j),
							_1: {
								ctor: '::',
								_0: 'correct_answer',
								_1: {ctor: '[]'}
							}
						}
					}
				}
			});
		var answer_id = A2(
			_elm_lang$core$String$join,
			'_',
			{
				ctor: '::',
				_0: 'text',
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(i),
					_1: {
						ctor: '::',
						_0: 'question',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(j),
							_1: {
								ctor: '::',
								_0: 'answer',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(k),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
		return A3(
			_user$project$Answer_Field$AnswerField,
			answer,
			{id: answer_id, name: answer_name, editable: false, error: false, error_string: '', question_index: j, index: k},
			_user$project$Answer_Field$generate_answer_feedback_field(
				A2(
					_elm_lang$core$String$join,
					'_',
					{
						ctor: '::',
						_0: answer_id,
						_1: {
							ctor: '::',
							_0: 'feedback',
							_1: {ctor: '[]'}
						}
					})));
	});
var _user$project$Answer_Field$switch_editable = function (_p8) {
	var _p9 = _p8;
	var _p10 = _p9._1;
	return A3(
		_user$project$Answer_Field$AnswerField,
		_p9._0,
		_elm_lang$core$Native_Utils.update(
			_p10,
			{
				editable: _p10.editable ? false : true
			}),
		_p9._2);
};
var _user$project$Answer_Field$set_answer_text = F2(
	function (_p11, text) {
		var _p12 = _p11;
		return A3(
			_user$project$Answer_Field$AnswerField,
			_elm_lang$core$Native_Utils.update(
				_p12._0,
				{text: text}),
			_p12._1,
			_p12._2);
	});
var _user$project$Answer_Field$set_answer_correct = F2(
	function (_p13, correct) {
		var _p14 = _p13;
		return A3(
			_user$project$Answer_Field$AnswerField,
			_elm_lang$core$Native_Utils.update(
				_p14._0,
				{correct: correct}),
			_p14._1,
			_p14._2);
	});
var _user$project$Answer_Field$set_answer_feedback = F2(
	function (_p15, new_feedback) {
		var _p16 = _p15;
		return A3(
			_user$project$Answer_Field$AnswerField,
			_elm_lang$core$Native_Utils.update(
				_p16._0,
				{feedback: new_feedback}),
			_p16._1,
			_p16._2);
	});
var _user$project$Answer_Field$update_error = F2(
	function (_p17, error_string) {
		var _p18 = _p17;
		return A3(
			_user$project$Answer_Field$AnswerField,
			_p18._0,
			_elm_lang$core$Native_Utils.update(
				_p18._1,
				{error: true, error_string: error_string}),
			_p18._2);
	});
var _user$project$Answer_Field$update_feedback_error = F2(
	function (_p19, error_string) {
		var _p20 = _p19;
		return _user$project$Answer_Field$switch_editable(
			A3(
				_user$project$Answer_Field$AnswerField,
				_p20._0,
				_p20._1,
				_elm_lang$core$Native_Utils.update(
					_p20._2,
					{error: true, error_string: error_string})));
	});

var _user$project$Question_Model$new_question = function (i) {
	return {
		id: _elm_lang$core$Maybe$Nothing,
		text_id: _elm_lang$core$Maybe$Nothing,
		created_dt: _elm_lang$core$Maybe$Nothing,
		modified_dt: _elm_lang$core$Maybe$Nothing,
		body: '',
		order: i,
		answers: _user$project$Answer_Model$generate_answers(4),
		question_type: 'main_idea'
	};
};
var _user$project$Question_Model$initial_questions = _elm_lang$core$Array$fromList(
	{
		ctor: '::',
		_0: _user$project$Question_Model$new_question(0),
		_1: {ctor: '[]'}
	});
var _user$project$Question_Model$Question = F8(
	function (a, b, c, d, e, f, g, h) {
		return {id: a, text_id: b, created_dt: c, modified_dt: d, body: e, order: f, answers: g, question_type: h};
	});

var _user$project$Question_Field$answers = function (_p0) {
	var _p1 = _p0;
	return _p1._2;
};
var _user$project$Question_Field$attributes = function (_p2) {
	var _p3 = _p2;
	return _p3._1;
};
var _user$project$Question_Field$index = function (question_field) {
	var attrs = _user$project$Question_Field$attributes(question_field);
	return attrs.index;
};
var _user$project$Question_Field$id = function (question_field) {
	var attrs = _user$project$Question_Field$attributes(question_field);
	return attrs.id;
};
var _user$project$Question_Field$editable = function (question_field) {
	var attrs = _user$project$Question_Field$attributes(question_field);
	return attrs.editable;
};
var _user$project$Question_Field$delete_selected = function (question_fields) {
	return A2(
		_elm_lang$core$Array$filter,
		function (q) {
			var q_attrs = _user$project$Question_Field$attributes(q);
			return !q_attrs.selected;
		},
		question_fields);
};
var _user$project$Question_Field$menu_visible = function (question_field) {
	var attrs = _user$project$Question_Field$attributes(question_field);
	return attrs.menu_visible;
};
var _user$project$Question_Field$error = function (question_field) {
	var attrs = _user$project$Question_Field$attributes(question_field);
	return attrs.error;
};
var _user$project$Question_Field$question = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _user$project$Question_Field$question_index = function (_p6) {
	var _p7 = _p6;
	return _p7._1.index;
};
var _user$project$Question_Field$update_question_field = F2(
	function (new_question_field, question_fields) {
		return A3(
			_elm_lang$core$Array$set,
			_user$project$Question_Field$question_index(new_question_field),
			new_question_field,
			question_fields);
	});
var _user$project$Question_Field$question_field_for_answer = F2(
	function (question_fields, answer_field) {
		var question_index = _user$project$Answer_Field$question_index(answer_field);
		return A2(_elm_lang$core$Array$get, question_index, question_fields);
	});
var _user$project$Question_Field$get_question_field = F2(
	function (question_fields, index) {
		return A2(_elm_lang$core$Array$get, index, question_fields);
	});
var _user$project$Question_Field$toQuestion = function (question_field) {
	var new_answers = _user$project$Answer_Field$toAnswers(
		_user$project$Question_Field$answers(question_field));
	var new_question = _user$project$Question_Field$question(question_field);
	return _elm_lang$core$Native_Utils.update(
		new_question,
		{answers: new_answers});
};
var _user$project$Question_Field$toQuestions = function (question_fields) {
	return A2(_elm_lang$core$Array$map, _user$project$Question_Field$toQuestion, question_fields);
};
var _user$project$Question_Field$Detail = {ctor: 'Detail'};
var _user$project$Question_Field$MainIdea = {ctor: 'MainIdea'};
var _user$project$Question_Field$QuestionField = F3(
	function (a, b, c) {
		return {ctor: 'QuestionField', _0: a, _1: b, _2: c};
	});
var _user$project$Question_Field$generate_question_field = F3(
	function (text_index, question_index, question) {
		return A3(
			_user$project$Question_Field$QuestionField,
			question,
			{
				id: A2(
					_elm_lang$core$String$join,
					'_',
					{
						ctor: '::',
						_0: 'text',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(text_index),
							_1: {
								ctor: '::',
								_0: 'question',
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(question_index),
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				editable: false,
				menu_visible: false,
				selected: false,
				error_string: '',
				error: false,
				index: question_index
			},
			A2(
				_elm_lang$core$Array$indexedMap,
				A2(_user$project$Answer_Field$generate_answer_field, text_index, question_index),
				question.answers));
	});
var _user$project$Question_Field$fromQuestions = F2(
	function (text_index, questions) {
		return A2(
			_elm_lang$core$Array$indexedMap,
			_user$project$Question_Field$generate_question_field(text_index),
			questions);
	});
var _user$project$Question_Field$add_new_question = F2(
	function (text_index, fields) {
		var new_question_index = _elm_lang$core$Array$length(fields);
		return A2(
			_elm_lang$core$Array$push,
			A3(
				_user$project$Question_Field$generate_question_field,
				text_index,
				new_question_index,
				_user$project$Question_Model$new_question(new_question_index)),
			fields);
	});
var _user$project$Question_Field$initial_question_fields = function (text_index) {
	return A2(
		_elm_lang$core$Array$indexedMap,
		_user$project$Question_Field$generate_question_field(text_index),
		_user$project$Question_Model$initial_questions);
};
var _user$project$Question_Field$set_answer_field = F2(
	function (question_fields, answer_field) {
		var answer_index = _user$project$Answer_Field$index(answer_field);
		var question_index = _user$project$Answer_Field$question_index(answer_field);
		var _p8 = A2(_elm_lang$core$Array$get, question_index, question_fields);
		if (_p8.ctor === 'Just') {
			return A3(
				_elm_lang$core$Array$set,
				question_index,
				A3(
					_user$project$Question_Field$QuestionField,
					_p8._0._0,
					_p8._0._1,
					A3(_elm_lang$core$Array$set, answer_index, answer_field, _p8._0._2)),
				question_fields);
		} else {
			return question_fields;
		}
	});
var _user$project$Question_Field$update_errors = F2(
	function (question_fields, _p9) {
		var _p10 = _p9;
		var _p17 = _p10._1;
		var error_key = A2(_elm_lang$core$String$split, '_', _p10._0);
		var _p11 = error_key;
		if ((((((_p11.ctor === '::') && (_p11._0 === 'question')) && (_p11._1.ctor === '::')) && (_p11._1._1.ctor === '::')) && (_p11._1._1._0 === 'answer')) && (_p11._1._1._1.ctor === '::')) {
			var _p12 = _elm_lang$core$String$toInt(_p11._1._0);
			if (_p12.ctor === 'Ok') {
				var _p13 = _elm_lang$core$String$toInt(_p11._1._1._1._0);
				if (_p13.ctor === 'Ok') {
					var _p14 = A2(_user$project$Question_Field$get_question_field, question_fields, _p12._0);
					if (_p14.ctor === 'Just') {
						var _p15 = A2(
							_user$project$Answer_Field$get_answer_field,
							_user$project$Question_Field$answers(_p14._0),
							_p13._0);
						if (_p15.ctor === 'Just') {
							var _p16 = _p15._0;
							return A2(
								_user$project$Question_Field$set_answer_field,
								question_fields,
								_elm_lang$core$List$isEmpty(_p11._1._1._1._1) ? A2(_user$project$Answer_Field$update_error, _p16, _p17) : A2(_user$project$Answer_Field$update_feedback_error, _p16, _p17));
						} else {
							return question_fields;
						}
					} else {
						return question_fields;
					}
				} else {
					return question_fields;
				}
			} else {
				return question_fields;
			}
		} else {
			return question_fields;
		}
	});
var _user$project$Question_Field$set_answer_feedback = F3(
	function (_p18, answer_field, feedback) {
		var _p19 = _p18;
		var new_answer_field = A2(_user$project$Answer_Field$set_answer_feedback, answer_field, feedback);
		var index = _user$project$Answer_Field$index(answer_field);
		return A3(
			_user$project$Question_Field$QuestionField,
			_p19._0,
			_p19._1,
			A3(_elm_lang$core$Array$set, index, new_answer_field, _p19._2));
	});
var _user$project$Question_Field$set_answer_correct = F2(
	function (_p20, answer_field) {
		var _p21 = _p20;
		var index = _user$project$Answer_Field$index;
		var correct = _user$project$Answer_Field$set_answer_correct;
		var answer_index = _user$project$Answer_Field$index(answer_field);
		return A3(
			_user$project$Question_Field$QuestionField,
			_p21._0,
			_p21._1,
			A2(
				_elm_lang$core$Array$map,
				function (a) {
					return _elm_lang$core$Native_Utils.eq(
						index(a),
						answer_index) ? A2(correct, a, true) : A2(correct, a, false);
				},
				_p21._2));
	});
var _user$project$Question_Field$update_question = F2(
	function (_p22, new_question) {
		var _p23 = _p22;
		return A3(_user$project$Question_Field$QuestionField, new_question, _p23._1, _p23._2);
	});
var _user$project$Question_Field$delete_question = F2(
	function (index, fields) {
		return A2(
			_elm_lang$core$Array$indexedMap,
			F2(
				function (i, _p24) {
					var _p25 = _p24;
					return A3(
						_user$project$Question_Field$QuestionField,
						_p25._0,
						_elm_lang$core$Native_Utils.update(
							_p25._1,
							{index: i}),
						A2(
							_elm_lang$core$Array$map,
							function (answer_field) {
								return A2(_user$project$Answer_Field$update_question_index, answer_field, i);
							},
							_p25._2));
				}),
			A2(
				_elm_lang$core$Array$filter,
				function (field) {
					return !_elm_lang$core$Native_Utils.eq(
						_user$project$Question_Field$question_index(field),
						index);
				},
				fields));
	});
var _user$project$Question_Field$delete_question_field = F2(
	function (question_field, question_fields) {
		return A2(
			function (_p26) {
				return _user$project$Question_Field$delete_question(
					_user$project$Question_Field$index(_p26));
			},
			question_field,
			question_fields);
	});
var _user$project$Question_Field$set_question_type = F2(
	function (_p27, question_type) {
		var _p28 = _p27;
		var q_type = function () {
			var _p29 = question_type;
			if (_p29.ctor === 'MainIdea') {
				return 'main_idea';
			} else {
				return 'detail';
			}
		}();
		return A3(
			_user$project$Question_Field$QuestionField,
			_elm_lang$core$Native_Utils.update(
				_p28._0,
				{question_type: q_type}),
			_p28._1,
			_p28._2);
	});
var _user$project$Question_Field$switch_editable = function (_p30) {
	var _p31 = _p30;
	var _p32 = _p31._1;
	return A3(
		_user$project$Question_Field$QuestionField,
		_p31._0,
		_elm_lang$core$Native_Utils.update(
			_p32,
			{
				editable: _p32.editable ? false : true
			}),
		_p31._2);
};
var _user$project$Question_Field$set_question_body = F2(
	function (_p33, value) {
		var _p34 = _p33;
		return A3(
			_user$project$Question_Field$QuestionField,
			_elm_lang$core$Native_Utils.update(
				_p34._0,
				{body: value}),
			_p34._1,
			_p34._2);
	});
var _user$project$Question_Field$set_menu_visible = F2(
	function (_p35, visible) {
		var _p36 = _p35;
		return A3(
			_user$project$Question_Field$QuestionField,
			_p36._0,
			_elm_lang$core$Native_Utils.update(
				_p36._1,
				{menu_visible: visible}),
			_p36._2);
	});
var _user$project$Question_Field$set_selected = F2(
	function (_p37, selected) {
		var _p38 = _p37;
		return A3(
			_user$project$Question_Field$QuestionField,
			_p38._0,
			_elm_lang$core$Native_Utils.update(
				_p38._1,
				{selected: selected}),
			_p38._2);
	});

var _user$project$Text_Section_Model$emptyTextSection = {order: 0, question_count: 0, questions: _user$project$Question_Model$initial_questions, body: ''};
var _user$project$Text_Section_Model$TextSection = F4(
	function (a, b, c, d) {
		return {order: a, body: b, question_count: c, questions: d};
	});

var _user$project$Text_Model$set_tags = F2(
	function (text, tags) {
		return _elm_lang$core$Native_Utils.update(
			text,
			{tags: tags});
	});
var _user$project$Text_Model$set_sections = F2(
	function (text, text_sections) {
		return _elm_lang$core$Native_Utils.update(
			text,
			{sections: text_sections});
	});
var _user$project$Text_Model$new_text = {
	id: _elm_lang$core$Maybe$Nothing,
	title: '',
	author: '',
	source: '',
	difficulty: '',
	introduction: '',
	tags: _elm_lang$core$Maybe$Nothing,
	created_by: _elm_lang$core$Maybe$Nothing,
	last_modified_by: _elm_lang$core$Maybe$Nothing,
	created_dt: _elm_lang$core$Maybe$Nothing,
	modified_dt: _elm_lang$core$Maybe$Nothing,
	sections: _elm_lang$core$Array$fromList(
		{
			ctor: '::',
			_0: _user$project$Text_Section_Model$emptyTextSection,
			_1: {ctor: '[]'}
		}),
	write_locker: _elm_lang$core$Maybe$Nothing
};
var _user$project$Text_Model$Text = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return function (m) {
													return {id: a, title: b, introduction: c, author: d, source: e, difficulty: f, created_by: g, last_modified_by: h, tags: i, created_dt: j, modified_dt: k, sections: l, write_locker: m};
												};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _user$project$Text_Model$TextListItem = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return {id: a, title: b, author: c, difficulty: d, created_by: e, last_modified_by: f, tags: g, created_dt: h, modified_dt: i, text_count: j, write_locker: k};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};

var _user$project$Ports$selectAllInputText = _elm_lang$core$Native_Platform.outgoingPort(
	'selectAllInputText',
	function (v) {
		return v;
	});
var _user$project$Ports$clearInputText = _elm_lang$core$Native_Platform.outgoingPort(
	'clearInputText',
	function (v) {
		return v;
	});
var _user$project$Ports$ckEditor = _elm_lang$core$Native_Platform.outgoingPort(
	'ckEditor',
	function (v) {
		return v;
	});
var _user$project$Ports$ckEditorUpdate = _elm_lang$core$Native_Platform.incomingPort(
	'ckEditorUpdate',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (x0) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (x1) {
					return _elm_lang$core$Json_Decode$succeed(
						{ctor: '_Tuple2', _0: x0, _1: x1});
				},
				A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$string));
		},
		A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$string)));
var _user$project$Ports$ckEditorSetHtml = _elm_lang$core$Native_Platform.outgoingPort(
	'ckEditorSetHtml',
	function (v) {
		return [v._0, v._1];
	});
var _user$project$Ports$addClassToCKEditor = _elm_lang$core$Native_Platform.outgoingPort(
	'addClassToCKEditor',
	function (v) {
		return [v._0, v._1];
	});
var _user$project$Ports$confirm = _elm_lang$core$Native_Platform.outgoingPort(
	'confirm',
	function (v) {
		return v;
	});
var _user$project$Ports$confirmation = _elm_lang$core$Native_Platform.incomingPort('confirmation', _elm_lang$core$Json_Decode$bool);

var _user$project$Text_Field$post_toggle_source = function (_p0) {
	var _p1 = _p0;
	return _user$project$Ports$selectAllInputText(_p1._0.id);
};
var _user$project$Text_Field$post_toggle_author = function (_p2) {
	var _p3 = _p2;
	var _p4 = _p3._0;
	return _p4.editable ? _user$project$Ports$selectAllInputText(_p4.id) : _elm_lang$core$Platform_Cmd$none;
};
var _user$project$Text_Field$post_toggle_title = function (_p5) {
	var _p6 = _p5;
	return _user$project$Ports$selectAllInputText(_p6._0.id);
};
var _user$project$Text_Field$post_toggle_intro = function (_p7) {
	var _p8 = _p7;
	var _p9 = _p8._0;
	return _elm_lang$core$Platform_Cmd$batch(
		{
			ctor: '::',
			_0: _user$project$Ports$ckEditor(_p9.id),
			_1: {
				ctor: '::',
				_0: _user$project$Ports$addClassToCKEditor(
					{ctor: '_Tuple2', _0: _p9.id, _1: 'text_introduction'}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Text_Field$source_editable = function (_p10) {
	var _p11 = _p10;
	return _p11._0.editable;
};
var _user$project$Text_Field$source_error = function (_p12) {
	var _p13 = _p12;
	return _p13._0.error;
};
var _user$project$Text_Field$source_id = function (_p14) {
	var _p15 = _p14;
	return _p15._0.id;
};
var _user$project$Text_Field$author_editable = function (_p16) {
	var _p17 = _p16;
	return _p17._0.editable;
};
var _user$project$Text_Field$author_error = function (_p18) {
	var _p19 = _p18;
	return _p19._0.error;
};
var _user$project$Text_Field$author_id = function (_p20) {
	var _p21 = _p20;
	return _p21._0.id;
};
var _user$project$Text_Field$tag_error = function (_p22) {
	var _p23 = _p22;
	return _p23._0.error;
};
var _user$project$Text_Field$title_error_string = function (_p24) {
	var _p25 = _p24;
	return _p25._0.error_string;
};
var _user$project$Text_Field$title_error = function (_p26) {
	var _p27 = _p26;
	return _p27._0.error;
};
var _user$project$Text_Field$title_id = function (_p28) {
	var _p29 = _p28;
	return _p29._0.id;
};
var _user$project$Text_Field$title_editable = function (_p30) {
	var _p31 = _p30;
	return _p31._0.editable;
};
var _user$project$Text_Field$intro_id = function (_p32) {
	var _p33 = _p32;
	return _p33._0.id;
};
var _user$project$Text_Field$intro_editable = function (_p34) {
	var _p35 = _p34;
	return _p35._0.editable;
};
var _user$project$Text_Field$intro_error_string = function (_p36) {
	var _p37 = _p36;
	return _p37._0.error_string;
};
var _user$project$Text_Field$intro_error = function (_p38) {
	var _p39 = _p38;
	return _p39._0.error;
};
var _user$project$Text_Field$difficulty = function (_p40) {
	var _p41 = _p40;
	return _p41._5;
};
var _user$project$Text_Field$source = function (_p42) {
	var _p43 = _p42;
	return _p43._4;
};
var _user$project$Text_Field$author = function (_p44) {
	var _p45 = _p44;
	return _p45._3;
};
var _user$project$Text_Field$tags = function (_p46) {
	var _p47 = _p46;
	return _p47._2;
};
var _user$project$Text_Field$intro = function (_p48) {
	var _p49 = _p48;
	return _p49._1;
};
var _user$project$Text_Field$title = function (_p50) {
	var _p51 = _p50;
	return _p51._0;
};
var _user$project$Text_Field$TextTitle = function (a) {
	return {ctor: 'TextTitle', _0: a};
};
var _user$project$Text_Field$TextIntro = function (a) {
	return {ctor: 'TextIntro', _0: a};
};
var _user$project$Text_Field$TextTags = function (a) {
	return {ctor: 'TextTags', _0: a};
};
var _user$project$Text_Field$TextAuthor = function (a) {
	return {ctor: 'TextAuthor', _0: a};
};
var _user$project$Text_Field$TextSource = function (a) {
	return {ctor: 'TextSource', _0: a};
};
var _user$project$Text_Field$TextDifficulty = function (a) {
	return {ctor: 'TextDifficulty', _0: a};
};
var _user$project$Text_Field$TextFields = F6(
	function (a, b, c, d, e, f) {
		return {ctor: 'TextFields', _0: a, _1: b, _2: c, _3: d, _4: e, _5: f};
	});
var _user$project$Text_Field$set_intro = F2(
	function (_p52, field_attrs) {
		var _p53 = _p52;
		return A6(
			_user$project$Text_Field$TextFields,
			_p53._0,
			_user$project$Text_Field$TextIntro(field_attrs),
			_p53._2,
			_p53._3,
			_p53._4,
			_p53._5);
	});
var _user$project$Text_Field$set_title = F2(
	function (_p54, field_attrs) {
		var _p55 = _p54;
		return A6(
			_user$project$Text_Field$TextFields,
			_user$project$Text_Field$TextTitle(field_attrs),
			_p55._1,
			_p55._2,
			_p55._3,
			_p55._4,
			_p55._5);
	});
var _user$project$Text_Field$set_author = F2(
	function (_p56, field_attrs) {
		var _p57 = _p56;
		return A6(
			_user$project$Text_Field$TextFields,
			_p57._0,
			_p57._1,
			_p57._2,
			_user$project$Text_Field$TextAuthor(field_attrs),
			_p57._4,
			_p57._5);
	});
var _user$project$Text_Field$set_source = F2(
	function (_p58, field_attrs) {
		var _p59 = _p58;
		return A6(
			_user$project$Text_Field$TextFields,
			_p59._0,
			_p59._1,
			_p59._2,
			_p59._3,
			_user$project$Text_Field$TextSource(field_attrs),
			_p59._5);
	});
var _user$project$Text_Field$update_error = F2(
	function (_p61, _p60) {
		var _p62 = _p61;
		var _p67 = _p62._1;
		var _p63 = _p60;
		var _p66 = _p63;
		var error_key = A2(_elm_lang$core$String$split, '_', _p62._0);
		var _p64 = error_key;
		if ((((_p64.ctor === '::') && (_p64._0 === 'text')) && (_p64._1.ctor === '::')) && (_p64._1._1.ctor === '[]')) {
			var _p65 = _p64._1._0;
			switch (_p65) {
				case 'introduction':
					return A2(
						_user$project$Text_Field$set_intro,
						_p66,
						_elm_lang$core$Native_Utils.update(
							_p63._1._0,
							{error_string: _p67, editable: true, error: true}));
				case 'title':
					return A2(
						_user$project$Text_Field$set_title,
						_p66,
						_elm_lang$core$Native_Utils.update(
							_p63._0._0,
							{error_string: _p67, editable: true, error: true}));
				case 'author':
					return A2(
						_user$project$Text_Field$set_author,
						_p66,
						_elm_lang$core$Native_Utils.update(
							_p63._3._0,
							{error_string: _p67, editable: true, error: true}));
				case 'source':
					return A2(
						_user$project$Text_Field$set_source,
						_p66,
						_elm_lang$core$Native_Utils.update(
							_p63._4._0,
							{error_string: _p67, editable: true, error: true}));
				default:
					return _p66;
			}
		} else {
			return _p66;
		}
	});
var _user$project$Text_Field$set_difficulty = F2(
	function (_p68, field_attrs) {
		var _p69 = _p68;
		return A6(
			_user$project$Text_Field$TextFields,
			_p69._0,
			_p69._1,
			_p69._2,
			_p69._3,
			_p69._4,
			_user$project$Text_Field$TextDifficulty(field_attrs));
	});
var _user$project$Text_Field$init_text_fields = A6(
	_user$project$Text_Field$TextFields,
	_user$project$Text_Field$TextTitle(
		{id: 'text_title', editable: false, error_string: '', error: false, name: 'title', index: 0}),
	_user$project$Text_Field$TextIntro(
		{id: 'text_introduction', editable: false, error_string: '', error: false, name: 'introduction', index: 2}),
	_user$project$Text_Field$TextTags(
		{id: 'text_tags', editable: false, error_string: '', error: false, name: 'tags', index: 1}),
	_user$project$Text_Field$TextAuthor(
		{id: 'text_author', editable: false, error_string: '', error: false, name: 'author', index: 3}),
	_user$project$Text_Field$TextSource(
		{id: 'text_source', editable: false, error_string: '', error: false, name: 'source', index: 4}),
	_user$project$Text_Field$TextDifficulty(
		{id: 'text_difficulty', editable: false, error_string: '', error: false, name: 'difficulty', index: 5}));

var _user$project$Text_Section_Component$question_fields = function (_p0) {
	var _p1 = _p0;
	return _p1._3;
};
var _user$project$Text_Section_Component$get_field = F2(
	function (_p2, field_name) {
		var _p3 = _p2;
		var _p4 = field_name;
		if (_p4 === 'body') {
			return _elm_lang$core$Maybe$Just(_p3._2.body);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _user$project$Text_Section_Component$update_field_error = F2(
	function (text_field, error_string) {
		return _elm_lang$core$Native_Utils.update(
			text_field,
			{editable: true, error: true, error_string: error_string});
	});
var _user$project$Text_Section_Component$attributes = function (_p5) {
	var _p6 = _p5;
	return _p6._1;
};
var _user$project$Text_Section_Component$index = function (text_section) {
	var attrs = _user$project$Text_Section_Component$attributes(text_section);
	return attrs.index;
};
var _user$project$Text_Section_Component$text_section = function (_p7) {
	var _p8 = _p7;
	return _p8._0;
};
var _user$project$Text_Section_Component$toTextSection = function (text_section_component) {
	var questions = _user$project$Question_Field$toQuestions(
		_user$project$Text_Section_Component$question_fields(text_section_component));
	var new_text_section = _user$project$Text_Section_Component$text_section(text_section_component);
	return _elm_lang$core$Native_Utils.update(
		new_text_section,
		{questions: questions});
};
var _user$project$Text_Section_Component$body = function (_p9) {
	var _p10 = _p9;
	return _p10._2.body;
};
var _user$project$Text_Section_Component$post_toggle_commands = function (text_field) {
	var _p11 = text_field.name;
	if (_p11 === 'body') {
		return {
			ctor: '::',
			_0: _user$project$Ports$ckEditor(text_field.id),
			_1: {ctor: '[]'}
		};
	} else {
		return {
			ctor: '::',
			_0: _elm_lang$core$Platform_Cmd$none,
			_1: {ctor: '[]'}
		};
	}
};
var _user$project$Text_Section_Component$editable = function (text_field) {
	return text_field.editable;
};
var _user$project$Text_Section_Component$text_field_id = function (text_field) {
	return text_field.id;
};
var _user$project$Text_Section_Component$switch_editable = function (text_field) {
	var $switch = function (field) {
		return _elm_lang$core$Native_Utils.update(
			field,
			{
				editable: field.editable ? false : true
			});
	};
	return $switch(text_field);
};
var _user$project$Text_Section_Component$reinitialize_ck_editor = function (text_section_component) {
	var body_field = _user$project$Text_Section_Component$body(text_section_component);
	var t = _user$project$Text_Section_Component$text_section(text_section_component);
	return _elm_lang$core$Platform_Cmd$batch(
		{
			ctor: '::',
			_0: _user$project$Ports$ckEditor(body_field.id),
			_1: {
				ctor: '::',
				_0: _user$project$Ports$ckEditorSetHtml(
					{ctor: '_Tuple2', _0: body_field.id, _1: t.body}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Text_Section_Component$generate_text_section_field_params = F2(
	function (i, attr) {
		return {
			id: A2(
				_elm_lang$core$String$join,
				'_',
				{
					ctor: '::',
					_0: 'text',
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Basics$toString(i),
						_1: {
							ctor: '::',
							_0: attr,
							_1: {ctor: '[]'}
						}
					}
				}),
			editable: false,
			error_string: '',
			error: false,
			name: attr,
			index: i
		};
	});
var _user$project$Text_Section_Component$generate_text_section_fields = function (i) {
	return {
		body: A2(_user$project$Text_Section_Component$generate_text_section_field_params, i, 'body')
	};
};
var _user$project$Text_Section_Component$TextSectionFields = function (a) {
	return {body: a};
};
var _user$project$Text_Section_Component$TextSectionComponentAttributes = function (a) {
	return {index: a};
};
var _user$project$Text_Section_Component$TextSectionComponent = F4(
	function (a, b, c, d) {
		return {ctor: 'TextSectionComponent', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Text_Section_Component$fromTextSection = F2(
	function (i, text) {
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			text,
			{index: i},
			_user$project$Text_Section_Component$generate_text_section_fields(i),
			A2(_user$project$Question_Field$fromQuestions, i, text.questions));
	});
var _user$project$Text_Section_Component$emptyTextSectionComponent = function (i) {
	return A4(
		_user$project$Text_Section_Component$TextSectionComponent,
		_user$project$Text_Section_Model$emptyTextSection,
		{index: i},
		_user$project$Text_Section_Component$generate_text_section_fields(i),
		_user$project$Question_Field$initial_question_fields(i));
};
var _user$project$Text_Section_Component$update_body = F2(
	function (_p12, body) {
		var _p13 = _p12;
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_elm_lang$core$Native_Utils.update(
				_p13._0,
				{body: body}),
			_p13._1,
			_p13._2,
			_p13._3);
	});
var _user$project$Text_Section_Component$set_index = F2(
	function (_p14, index) {
		var _p15 = _p14;
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_p15._0,
			_elm_lang$core$Native_Utils.update(
				_p15._1,
				{index: index}),
			_p15._2,
			_p15._3);
	});
var _user$project$Text_Section_Component$set_question = F2(
	function (_p16, question_field) {
		var _p17 = _p16;
		var question_index = _user$project$Question_Field$index(question_field);
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_p17._0,
			_p17._1,
			_p17._2,
			A3(_elm_lang$core$Array$set, question_index, question_field, _p17._3));
	});
var _user$project$Text_Section_Component$set_answer_correct = F2(
	function (text_section, answer_field) {
		var _p18 = A2(
			_user$project$Question_Field$question_field_for_answer,
			_user$project$Text_Section_Component$question_fields(text_section),
			answer_field);
		if (_p18.ctor === 'Just') {
			return A2(
				_user$project$Text_Section_Component$set_question,
				text_section,
				A2(_user$project$Question_Field$set_answer_correct, _p18._0, answer_field));
		} else {
			return text_section;
		}
	});
var _user$project$Text_Section_Component$set_answer_feedback = F3(
	function (text_section, answer_field, feedback) {
		var _p19 = A2(
			_user$project$Question_Field$question_field_for_answer,
			_user$project$Text_Section_Component$question_fields(text_section),
			answer_field);
		if (_p19.ctor === 'Just') {
			return A2(
				_user$project$Text_Section_Component$set_question,
				text_section,
				A3(_user$project$Question_Field$set_answer_feedback, _p19._0, answer_field, feedback));
		} else {
			return text_section;
		}
	});
var _user$project$Text_Section_Component$toggle_question_menu = F2(
	function (text_section, question_field) {
		var visible = _user$project$Question_Field$menu_visible(question_field) ? false : true;
		return A2(
			_user$project$Text_Section_Component$set_question,
			text_section,
			A2(_user$project$Question_Field$set_menu_visible, question_field, visible));
	});
var _user$project$Text_Section_Component$set_answer = F2(
	function (_p20, answer_field) {
		var _p21 = _p20;
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_p21._0,
			_p21._1,
			_p21._2,
			A2(_user$project$Question_Field$set_answer_field, _p21._3, answer_field));
	});
var _user$project$Text_Section_Component$set_answer_text = F3(
	function (text_section, answer_field, answer_text) {
		return A2(
			_user$project$Text_Section_Component$set_answer,
			text_section,
			A2(_user$project$Answer_Field$set_answer_text, answer_field, answer_text));
	});
var _user$project$Text_Section_Component$set_field_value = F3(
	function (_p22, field_name, value) {
		var _p23 = _p22;
		var _p28 = _p23._0;
		var _p27 = _p23._3;
		var _p26 = _p23._2;
		var _p25 = _p23._1;
		var _p24 = field_name;
		if (_p24 === 'body') {
			return A4(
				_user$project$Text_Section_Component$TextSectionComponent,
				_elm_lang$core$Native_Utils.update(
					_p28,
					{body: value}),
				_p25,
				_p26,
				_p27);
		} else {
			return A4(_user$project$Text_Section_Component$TextSectionComponent, _p28, _p25, _p26, _p27);
		}
	});
var _user$project$Text_Section_Component$set_field = F2(
	function (_p29, new_text_field) {
		var _p30 = _p29;
		var _p31 = new_text_field.name;
		if (_p31 === 'body') {
			return A4(
				_user$project$Text_Section_Component$TextSectionComponent,
				_p30._0,
				_p30._1,
				_elm_lang$core$Native_Utils.update(
					_p30._2,
					{body: new_text_field}),
				_p30._3);
		} else {
			return _p30;
		}
	});
var _user$project$Text_Section_Component$update_errors = F2(
	function (_p33, _p32) {
		var _p34 = _p33;
		var _p41 = _p34;
		var _p35 = _p32;
		var _p40 = _p35._0;
		var _p39 = _p35._1;
		var error_key = A2(_elm_lang$core$String$split, '_', _p40);
		var first_key = _elm_lang$core$List$head(error_key);
		var _p36 = first_key;
		if (_p36.ctor === 'Just') {
			var _p38 = _p36._0;
			if (A2(
				_elm_lang$core$List$member,
				_p38,
				{
					ctor: '::',
					_0: 'body',
					_1: {ctor: '[]'}
				})) {
				var _p37 = A2(_user$project$Text_Section_Component$get_field, _p41, _p38);
				if (_p37.ctor === 'Just') {
					return A2(
						_user$project$Text_Section_Component$set_field,
						_p41,
						A2(_user$project$Text_Section_Component$update_field_error, _p37._0, _p39));
				} else {
					return _p41;
				}
			} else {
				return A4(
					_user$project$Text_Section_Component$TextSectionComponent,
					_p34._0,
					_p34._1,
					_p34._2,
					A2(
						_user$project$Question_Field$update_errors,
						_p34._3,
						{ctor: '_Tuple2', _0: _p40, _1: _p39}));
			}
		} else {
			return _p41;
		}
	});
var _user$project$Text_Section_Component$update_question_field = F2(
	function (_p42, question_field) {
		var _p43 = _p42;
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_p43._0,
			_p43._1,
			_p43._2,
			A2(_user$project$Question_Field$update_question_field, question_field, _p43._3));
	});
var _user$project$Text_Section_Component$delete_question_field = F2(
	function (_p44, question_field) {
		var _p45 = _p44;
		return A4(
			_user$project$Text_Section_Component$TextSectionComponent,
			_p45._0,
			_p45._1,
			_p45._2,
			A2(_user$project$Question_Field$delete_question_field, question_field, _p45._3));
	});
var _user$project$Text_Section_Component$delete_selected_question_fields = function (_p46) {
	var _p47 = _p46;
	return A4(
		_user$project$Text_Section_Component$TextSectionComponent,
		_p47._0,
		_p47._1,
		_p47._2,
		_user$project$Question_Field$delete_selected(_p47._3));
};
var _user$project$Text_Section_Component$add_new_question = function (_p48) {
	var _p49 = _p48;
	var _p50 = _p49._1;
	return A4(
		_user$project$Text_Section_Component$TextSectionComponent,
		_p49._0,
		_p50,
		_p49._2,
		A2(_user$project$Question_Field$add_new_question, _p50.index, _p49._3));
};

var _user$project$Text_Section_Component_Group$text_section_component = F2(
	function (_p0, index) {
		var _p1 = _p0;
		return A2(_elm_lang$core$Array$get, index, _p1._0);
	});
var _user$project$Text_Section_Component_Group$toArray = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _user$project$Text_Section_Component_Group$toTextSections = function (text_components) {
	return A2(
		_elm_lang$core$Array$map,
		_user$project$Text_Section_Component$toTextSection,
		_user$project$Text_Section_Component_Group$toArray(text_components));
};
var _user$project$Text_Section_Component_Group$reinitialize_ck_editors = function (text_component_group) {
	var text_components = _user$project$Text_Section_Component_Group$toArray(text_component_group);
	return _elm_lang$core$Platform_Cmd$batch(
		_elm_lang$core$Array$toList(
			A2(_elm_lang$core$Array$map, _user$project$Text_Section_Component$reinitialize_ck_editor, text_components)));
};
var _user$project$Text_Section_Component_Group$update_error = F2(
	function (_p4, text_section_components) {
		var _p5 = _p4;
		var error_key = A2(_elm_lang$core$String$split, '_', _p5._0);
		var _p6 = error_key;
		if (((_p6.ctor === '::') && (_p6._0 === 'textsection')) && (_p6._1.ctor === '::')) {
			var _p7 = _elm_lang$core$String$toInt(_p6._1._0);
			if (_p7.ctor === 'Ok') {
				var _p9 = _p7._0;
				var _p8 = A2(_elm_lang$core$Array$get, _p9, text_section_components);
				if (_p8.ctor === 'Just') {
					var text_component_error = A2(
						_elm_lang$core$String$join,
						'_',
						A2(_elm_lang$core$List$drop, 2, error_key));
					var new_text_component_with_errors = A2(
						_user$project$Text_Section_Component$update_errors,
						_p8._0,
						{ctor: '_Tuple2', _0: text_component_error, _1: _p5._1});
					return A3(_elm_lang$core$Array$set, _p9, new_text_component_with_errors, text_section_components);
				} else {
					return text_section_components;
				}
			} else {
				return text_section_components;
			}
		} else {
			return text_section_components;
		}
	});
var _user$project$Text_Section_Component_Group$TextSectionComponentGroup = function (a) {
	return {ctor: 'TextSectionComponentGroup', _0: a};
};
var _user$project$Text_Section_Component_Group$new_group = _user$project$Text_Section_Component_Group$TextSectionComponentGroup(
	_elm_lang$core$Array$fromList(
		{
			ctor: '::',
			_0: _user$project$Text_Section_Component$emptyTextSectionComponent(0),
			_1: {ctor: '[]'}
		}));
var _user$project$Text_Section_Component_Group$update_errors = F2(
	function (_p10, errors) {
		var _p11 = _p10;
		return _user$project$Text_Section_Component_Group$TextSectionComponentGroup(
			A3(
				_elm_lang$core$Array$foldr,
				_user$project$Text_Section_Component_Group$update_error,
				_user$project$Text_Section_Component_Group$toArray(_p11),
				_elm_lang$core$Array$fromList(
					_elm_lang$core$Dict$toList(errors))));
	});
var _user$project$Text_Section_Component_Group$update_components = F2(
	function (_p12, text_component) {
		var _p13 = _p12;
		return _user$project$Text_Section_Component_Group$TextSectionComponentGroup(
			A3(
				_elm_lang$core$Array$set,
				_user$project$Text_Section_Component$index(text_component),
				text_component,
				_p13._0));
	});
var _user$project$Text_Section_Component_Group$update_body_for_id = F3(
	function (text_sections, ckeditor_id, ckeditor_text) {
		var _p14 = A2(_elm_lang$core$String$split, '_', ckeditor_id);
		if ((((((_p14.ctor === '::') && (_p14._0 === 'text')) && (_p14._1.ctor === '::')) && (_p14._1._1.ctor === '::')) && (_p14._1._1._0 === 'body')) && (_p14._1._1._1.ctor === '[]')) {
			var _p15 = _elm_lang$core$String$toInt(_p14._1._0);
			if (_p15.ctor === 'Ok') {
				var _p16 = A2(_user$project$Text_Section_Component_Group$text_section_component, text_sections, _p15._0);
				if (_p16.ctor === 'Just') {
					return A2(
						_user$project$Text_Section_Component_Group$update_components,
						text_sections,
						A2(_user$project$Text_Section_Component$update_body, _p16._0, ckeditor_text));
				} else {
					return text_sections;
				}
			} else {
				return text_sections;
			}
		} else {
			return text_sections;
		}
	});
var _user$project$Text_Section_Component_Group$add_new_text_section = function (_p17) {
	var _p18 = _p17;
	var _p19 = _p18._0;
	var arr_len = _elm_lang$core$Array$length(_p19);
	return _user$project$Text_Section_Component_Group$TextSectionComponentGroup(
		A2(
			_elm_lang$core$Array$push,
			_user$project$Text_Section_Component$emptyTextSectionComponent(arr_len),
			_p19));
};
var _user$project$Text_Section_Component_Group$delete_text_section = F2(
	function (_p20, text_section_component) {
		var _p21 = _p20;
		var _p22 = _p21._0;
		var arr_len = _elm_lang$core$Array$length(_p22);
		var index = _user$project$Text_Section_Component$index;
		var component_index = index(text_section_component);
		var new_text_components = A2(
			_elm_lang$core$Array$indexedMap,
			F2(
				function (i, text_component) {
					return A2(_user$project$Text_Section_Component$set_index, text_component, i);
				}),
			A2(
				_elm_lang$core$Array$filter,
				function (text_component) {
					return !_elm_lang$core$Native_Utils.eq(
						index(text_component),
						component_index);
				},
				_p22));
		return _user$project$Text_Section_Component_Group$TextSectionComponentGroup(new_text_components);
	});
var _user$project$Text_Section_Component_Group$fromTextSections = function (text_sections) {
	return _user$project$Text_Section_Component_Group$TextSectionComponentGroup(
		A2(_elm_lang$core$Array$indexedMap, _user$project$Text_Section_Component$fromTextSection, text_sections));
};

var _user$project$Text_Component$post_toggle_source = function (_p0) {
	var _p1 = _p0;
	return _user$project$Text_Field$post_toggle_source(
		_user$project$Text_Field$source(_p1._1));
};
var _user$project$Text_Component$post_toggle_author = function (_p2) {
	var _p3 = _p2;
	return _user$project$Text_Field$post_toggle_author(
		_user$project$Text_Field$author(_p3._1));
};
var _user$project$Text_Component$post_toggle_intro = function (_p4) {
	var _p5 = _p4;
	return _user$project$Text_Field$post_toggle_intro(
		_user$project$Text_Field$intro(_p5._1));
};
var _user$project$Text_Component$post_toggle_title = function (_p6) {
	var _p7 = _p6;
	return _user$project$Text_Field$post_toggle_title(
		_user$project$Text_Field$title(_p7._1));
};
var _user$project$Text_Component$tags = function (_p8) {
	var _p9 = _p8;
	return _p9._2;
};
var _user$project$Text_Component$tags_to_dict = function (tags) {
	var _p10 = tags;
	if (_p10.ctor === 'Just') {
		return _elm_lang$core$Dict$fromList(
			A2(
				_elm_lang$core$List$map,
				function (tag) {
					return {ctor: '_Tuple2', _0: tag, _1: tag};
				},
				_p10._0));
	} else {
		return _elm_lang$core$Dict$fromList(
			{ctor: '[]'});
	}
};
var _user$project$Text_Component$text_section_components = function (_p11) {
	var _p12 = _p11;
	return _p12._3;
};
var _user$project$Text_Component$reinitialize_ck_editors = function (_p13) {
	var _p14 = _p13;
	var intro_field_id = _user$project$Text_Field$intro_id(
		_user$project$Text_Field$intro(_p14._1));
	var text_component_group = _user$project$Text_Component$text_section_components(_p14);
	return _elm_lang$core$Platform_Cmd$batch(
		{
			ctor: '::',
			_0: _elm_lang$core$Platform_Cmd$batch(
				{
					ctor: '::',
					_0: _user$project$Ports$ckEditor(intro_field_id),
					_1: {
						ctor: '::',
						_0: _user$project$Ports$ckEditorSetHtml(
							{ctor: '_Tuple2', _0: intro_field_id, _1: _p14._0.introduction}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$Text_Section_Component_Group$reinitialize_ck_editors(text_component_group),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Text_Component$set_text_fields = F2(
	function (text_component, text_fields) {
		return text_component;
	});
var _user$project$Text_Component$text_fields = function (_p15) {
	var _p16 = _p15;
	return _p16._1;
};
var _user$project$Text_Component$text = function (_p17) {
	var _p18 = _p17;
	return A2(
		_user$project$Text_Model$set_tags,
		A2(
			_user$project$Text_Model$set_sections,
			_p18._0,
			_user$project$Text_Section_Component_Group$toTextSections(_p18._3)),
		_elm_lang$core$Maybe$Just(
			_elm_lang$core$Dict$keys(_p18._2)));
};
var _user$project$Text_Component$TextComponent = F4(
	function (a, b, c, d) {
		return {ctor: 'TextComponent', _0: a, _1: b, _2: c, _3: d};
	});
var _user$project$Text_Component$init = function (text) {
	return A4(
		_user$project$Text_Component$TextComponent,
		text,
		_user$project$Text_Field$init_text_fields,
		_user$project$Text_Component$tags_to_dict(text.tags),
		_user$project$Text_Section_Component_Group$fromTextSections(text.sections));
};
var _user$project$Text_Component$set_intro_editable = F2(
	function (_p19, editable) {
		var _p20 = _p19;
		var _p22 = _p20._1;
		var _p21 = _user$project$Text_Field$intro(_p22);
		var intro_field_attrs = _p21._0;
		var new_text_fields = A2(
			_user$project$Text_Field$set_intro,
			_p22,
			_elm_lang$core$Native_Utils.update(
				intro_field_attrs,
				{editable: editable}));
		return A4(_user$project$Text_Component$TextComponent, _p20._0, new_text_fields, _p20._2, _p20._3);
	});
var _user$project$Text_Component$set_title_editable = F2(
	function (_p23, editable) {
		var _p24 = _p23;
		var _p26 = _p24._1;
		var _p25 = _user$project$Text_Field$title(_p26);
		var title_field_attrs = _p25._0;
		var new_text_fields = A2(
			_user$project$Text_Field$set_title,
			_p26,
			_elm_lang$core$Native_Utils.update(
				title_field_attrs,
				{editable: editable}));
		return A4(_user$project$Text_Component$TextComponent, _p24._0, new_text_fields, _p24._2, _p24._3);
	});
var _user$project$Text_Component$set_author_editable = F2(
	function (_p27, editable) {
		var _p28 = _p27;
		var _p30 = _p28._1;
		var _p29 = _user$project$Text_Field$author(_p30);
		var text_author_attrs = _p29._0;
		var new_text_fields = A2(
			_user$project$Text_Field$set_author,
			_p30,
			_elm_lang$core$Native_Utils.update(
				text_author_attrs,
				{editable: editable}));
		return A4(_user$project$Text_Component$TextComponent, _p28._0, new_text_fields, _p28._2, _p28._3);
	});
var _user$project$Text_Component$set_source_editable = F2(
	function (_p31, editable) {
		var _p32 = _p31;
		var _p34 = _p32._1;
		var _p33 = _user$project$Text_Field$source(_p34);
		var text_source_attrs = _p33._0;
		var new_text_fields = A2(
			_user$project$Text_Field$set_source,
			_p34,
			_elm_lang$core$Native_Utils.update(
				text_source_attrs,
				{editable: editable}));
		return A4(_user$project$Text_Component$TextComponent, _p32._0, new_text_fields, _p32._2, _p32._3);
	});
var _user$project$Text_Component$set_text_section_components = F2(
	function (_p35, new_components) {
		var _p36 = _p35;
		return A4(_user$project$Text_Component$TextComponent, _p36._0, _p36._1, _p36._2, new_components);
	});
var _user$project$Text_Component$set_text_attribute = F3(
	function (_p37, attr_name, value) {
		var _p38 = _p37;
		var _p43 = _p38._2;
		var _p42 = _p38._0;
		var _p41 = _p38._1;
		var _p40 = _p38._3;
		var _p39 = attr_name;
		switch (_p39) {
			case 'title':
				return A4(
					_user$project$Text_Component$TextComponent,
					_elm_lang$core$Native_Utils.update(
						_p42,
						{title: value}),
					_p41,
					_p43,
					_p40);
			case 'introduction':
				return A4(
					_user$project$Text_Component$TextComponent,
					_elm_lang$core$Native_Utils.update(
						_p42,
						{introduction: value}),
					_p41,
					_p43,
					_p40);
			case 'author':
				return A4(
					_user$project$Text_Component$TextComponent,
					_elm_lang$core$Native_Utils.update(
						_p42,
						{author: value}),
					_p41,
					_p43,
					_p40);
			case 'source':
				return A4(
					_user$project$Text_Component$TextComponent,
					_elm_lang$core$Native_Utils.update(
						_p42,
						{source: value}),
					_p41,
					_p43,
					_p40);
			case 'difficulty':
				return A4(
					_user$project$Text_Component$TextComponent,
					_elm_lang$core$Native_Utils.update(
						_p42,
						{difficulty: value}),
					_p41,
					_p43,
					_p40);
			default:
				return _p38;
		}
	});
var _user$project$Text_Component$emptyTextComponent = A4(
	_user$project$Text_Component$TextComponent,
	_user$project$Text_Model$new_text,
	_user$project$Text_Field$init_text_fields,
	_elm_lang$core$Dict$fromList(
		{ctor: '[]'}),
	_user$project$Text_Section_Component_Group$new_group);
var _user$project$Text_Component$update_text_errors = F2(
	function (_p44, errors) {
		var _p45 = _p44;
		var new_text_component = A4(
			_user$project$Text_Component$TextComponent,
			_p45._0,
			A3(
				_elm_lang$core$Array$foldr,
				_user$project$Text_Field$update_error,
				_p45._1,
				_elm_lang$core$Array$fromList(
					_elm_lang$core$Dict$toList(errors))),
			_p45._2,
			_p45._3);
		var text_sections = A2(
			_user$project$Text_Section_Component_Group$update_errors,
			_user$project$Text_Component$text_section_components(new_text_component),
			errors);
		var _p46 = A2(_elm_lang$core$Debug$log, 'text errors', errors);
		return A2(_user$project$Text_Component$set_text_section_components, new_text_component, text_sections);
	});
var _user$project$Text_Component$add_tag = F2(
	function (_p47, tag) {
		var _p48 = _p47;
		return A4(
			_user$project$Text_Component$TextComponent,
			_p48._0,
			_p48._1,
			A3(_elm_lang$core$Dict$insert, tag, tag, _p48._2),
			_p48._3);
	});
var _user$project$Text_Component$remove_tag = F2(
	function (_p49, tag) {
		var _p50 = _p49;
		return A4(
			_user$project$Text_Component$TextComponent,
			_p50._0,
			_p50._1,
			A2(_elm_lang$core$Dict$remove, tag, _p50._2),
			_p50._3);
	});

var _user$project$Text_Update$post_toggle_field = function (field) {
	var _p0 = function () {
		var _p1 = field;
		switch (_p1.ctor) {
			case 'Text':
				var _p2 = _p1._0;
				return {
					ctor: '_Tuple2',
					_0: _user$project$Text_Section_Component$editable(_p2),
					_1: _user$project$Text_Section_Component$text_field_id(_p2)
				};
			case 'Question':
				var _p3 = _p1._0;
				return {
					ctor: '_Tuple2',
					_0: _user$project$Question_Field$editable(_p3),
					_1: _user$project$Question_Field$id(_p3)
				};
			default:
				var _p4 = _p1._0;
				return {
					ctor: '_Tuple2',
					_0: _user$project$Answer_Field$editable(_p4),
					_1: _user$project$Answer_Field$id(_p4)
				};
		}
	}();
	var field_editable = _p0._0;
	var field_id = _p0._1;
	return (!field_editable) ? _user$project$Ports$selectAllInputText(field_id) : _elm_lang$core$Platform_Cmd$none;
};
var _user$project$Text_Update$update = F2(
	function (msg, model) {
		var text_section_group = _user$project$Text_Component$text_section_components(model.text_component);
		var update = function (_p5) {
			return A2(
				_user$project$Text_Component$set_text_section_components,
				model.text_component,
				A2(_user$project$Text_Section_Component_Group$update_components, text_section_group, _p5));
		};
		var _p6 = msg;
		switch (_p6.ctor) {
			case 'AddText':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: A2(
								_user$project$Text_Component$set_text_section_components,
								model.text_component,
								_user$project$Text_Section_Component_Group$add_new_text_section(text_section_group))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DeleteTextSection':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: A2(
								_user$project$Text_Component$set_text_section_components,
								model.text_component,
								A2(_user$project$Text_Section_Component_Group$delete_text_section, text_section_group, _p6._0))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateTextValue':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A3(_user$project$Text_Section_Component$set_field_value, _p6._0, _p6._1, _p6._2))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateTextBody':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: A2(
								_user$project$Text_Component$set_text_section_components,
								model.text_component,
								A3(_user$project$Text_Section_Component_Group$update_body_for_id, text_section_group, _p6._0._0, _p6._0._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'AddQuestion':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								_user$project$Text_Section_Component$add_new_question(_p6._0))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateQuestionField':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$update_question_field, _p6._0, _p6._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateQuestionFieldValue':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(
									_user$project$Text_Section_Component$update_question_field,
									_p6._0,
									A2(_user$project$Question_Field$set_question_body, _p6._1, _p6._2)))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DeleteQuestion':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$delete_question_field, _p6._0, _p6._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'SelectQuestion':
				var new_question_field = A2(_user$project$Question_Field$set_selected, _p6._1, _p6._2);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$update_question_field, _p6._0, new_question_field))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DeleteSelectedQuestions':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								_user$project$Text_Section_Component$delete_selected_question_fields(_p6._0))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ToggleQuestionMenu':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$toggle_question_menu, _p6._0, _p6._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateAnswerField':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$set_answer, _p6._0, _p6._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateAnswerFieldValue':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A3(_user$project$Text_Section_Component$set_answer_text, _p6._0, _p6._1, _p6._2))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateAnswerFeedbackValue':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A3(_user$project$Text_Section_Component$set_answer_feedback, _p6._0, _p6._1, _p6._2))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateAnswerFieldCorrect':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(
								A2(_user$project$Text_Section_Component$set_answer_correct, _p6._0, _p6._1))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				var _p10 = _p6._0;
				var _p9 = _p6._1;
				var new_text_component = function () {
					var _p7 = _p9;
					switch (_p7.ctor) {
						case 'Text':
							return A2(
								_user$project$Text_Section_Component$set_field,
								_p10,
								_user$project$Text_Section_Component$switch_editable(_p7._0));
						case 'Question':
							return A2(
								_user$project$Text_Section_Component$set_question,
								_p10,
								_user$project$Question_Field$switch_editable(_p7._0));
						default:
							return A2(
								_user$project$Text_Section_Component$set_answer,
								_p10,
								_user$project$Answer_Field$switch_editable(_p7._0));
					}
				}();
				var extra_cmds = function () {
					var _p8 = _p9;
					if (_p8.ctor === 'Text') {
						return _user$project$Text_Section_Component$post_toggle_commands(_p8._0);
					} else {
						return {
							ctor: '::',
							_0: _elm_lang$core$Platform_Cmd$none,
							_1: {ctor: '[]'}
						};
					}
				}();
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: update(new_text_component)
						}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						A2(
							_elm_lang$core$Basics_ops['++'],
							extra_cmds,
							{
								ctor: '::',
								_0: _user$project$Text_Update$post_toggle_field(_p9),
								_1: {ctor: '[]'}
							}))
				};
		}
	});
var _user$project$Text_Update$Answer = function (a) {
	return {ctor: 'Answer', _0: a};
};
var _user$project$Text_Update$Question = function (a) {
	return {ctor: 'Question', _0: a};
};
var _user$project$Text_Update$Text = function (a) {
	return {ctor: 'Text', _0: a};
};
var _user$project$Text_Update$ToggleEditable = F2(
	function (a, b) {
		return {ctor: 'ToggleEditable', _0: a, _1: b};
	});
var _user$project$Text_Update$UpdateAnswerFieldCorrect = F3(
	function (a, b, c) {
		return {ctor: 'UpdateAnswerFieldCorrect', _0: a, _1: b, _2: c};
	});
var _user$project$Text_Update$UpdateAnswerFeedbackValue = F3(
	function (a, b, c) {
		return {ctor: 'UpdateAnswerFeedbackValue', _0: a, _1: b, _2: c};
	});
var _user$project$Text_Update$UpdateAnswerFieldValue = F3(
	function (a, b, c) {
		return {ctor: 'UpdateAnswerFieldValue', _0: a, _1: b, _2: c};
	});
var _user$project$Text_Update$UpdateAnswerField = F2(
	function (a, b) {
		return {ctor: 'UpdateAnswerField', _0: a, _1: b};
	});
var _user$project$Text_Update$AddQuestion = function (a) {
	return {ctor: 'AddQuestion', _0: a};
};
var _user$project$Text_Update$DeleteSelectedQuestions = function (a) {
	return {ctor: 'DeleteSelectedQuestions', _0: a};
};
var _user$project$Text_Update$SelectQuestion = F3(
	function (a, b, c) {
		return {ctor: 'SelectQuestion', _0: a, _1: b, _2: c};
	});
var _user$project$Text_Update$DeleteQuestion = F2(
	function (a, b) {
		return {ctor: 'DeleteQuestion', _0: a, _1: b};
	});
var _user$project$Text_Update$ToggleQuestionMenu = F2(
	function (a, b) {
		return {ctor: 'ToggleQuestionMenu', _0: a, _1: b};
	});
var _user$project$Text_Update$UpdateQuestionFieldValue = F3(
	function (a, b, c) {
		return {ctor: 'UpdateQuestionFieldValue', _0: a, _1: b, _2: c};
	});
var _user$project$Text_Update$UpdateQuestionField = F2(
	function (a, b) {
		return {ctor: 'UpdateQuestionField', _0: a, _1: b};
	});
var _user$project$Text_Update$UpdateTextBody = function (a) {
	return {ctor: 'UpdateTextBody', _0: a};
};
var _user$project$Text_Update$DeleteTextSection = function (a) {
	return {ctor: 'DeleteTextSection', _0: a};
};
var _user$project$Text_Update$AddText = {ctor: 'AddText'};
var _user$project$Text_Update$UpdateTextValue = F3(
	function (a, b, c) {
		return {ctor: 'UpdateTextValue', _0: a, _1: b, _2: c};
	});

var _user$project$Config$answer_feedback_limit = 2048;
var _user$project$Config$student_api_endpoint = '/api/student/';
var _user$project$Config$student_login_api_endpoint = '/api/student/login/';
var _user$project$Config$student_signup_api_endpoint = '/api/student/signup/';
var _user$project$Config$instructor_login_api_endpoint = '/api/instructor/login/';
var _user$project$Config$instructor_signup_api_endpoint = '/api/instructor/signup/';
var _user$project$Config$question_api_endpoint = '/api/question/';
var _user$project$Config$text_api_endpoint = '/api/text/';

var _user$project$Answer_View$edit_answer_feedback = F2(
	function (params, answer_field) {
		var answer = _user$project$Answer_Field$answer(answer_field);
		var feedback_field = _user$project$Answer_Field$feedback_field(answer_field);
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$textarea,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', feedback_field.id),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'rows', '5'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'cols', '75'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onBlur(
										params.msg(
											A2(
												_user$project$Text_Update$ToggleEditable,
												params.text_component,
												_user$project$Text_Update$Answer(answer_field)))),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Events$onInput(
											function (_p0) {
												return params.msg(
													A3(_user$project$Text_Update$UpdateAnswerFeedbackValue, params.text_component, answer_field, _p0));
											}),
										_1: {
											ctor: '::',
											_0: A2(_elm_lang$html$Html_Attributes$attribute, 'placeholder', 'Give some feedback.'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$classList(
													{
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'answer_feedback', _1: true},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'input_error', _1: feedback_field.error},
															_1: {ctor: '[]'}
														}
													}),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(answer.feedback),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'chars_remaining', _1: true},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'error',
											_1: _elm_lang$core$Native_Utils.cmp(
												_user$project$Config$answer_feedback_limit - _elm_lang$core$String$length(answer.feedback),
												0) < 0
										},
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Characters remaining ',
									A2(
										_elm_lang$core$Basics_ops['++'],
										_elm_lang$core$Basics$toString(
											_user$project$Config$answer_feedback_limit - _elm_lang$core$String$length(answer.feedback)),
										'.'))),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text(feedback_field.error_string),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Answer_View$edit_answer = F2(
	function (params, answer_field) {
		var answer = _user$project$Answer_Field$answer(answer_field);
		return A2(
			_elm_lang$html$Html$span,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'text'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', answer.text),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html_Attributes$attribute,
									'id',
									_user$project$Answer_Field$id(answer_field)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (_p1) {
											return params.msg(
												A3(_user$project$Text_Update$UpdateAnswerFieldValue, params.text_component, answer_field, _p1));
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$classList(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'input_error',
													_1: _user$project$Answer_Field$error(answer_field)
												},
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Answer_View$edit_answer_feedback, params, answer_field),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Answer_View$view_answer_feedback = F2(
	function (params, answer_field) {
		var answer = _user$project$Answer_Field$answer(answer_field);
		return (!_elm_lang$core$String$isEmpty(answer.feedback)) ? {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'answer_feedback', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'grey_bg', _1: true},
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(answer.feedback),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		} : {ctor: '[]'};
	});
var _user$project$Answer_View$view_answer = F2(
	function (params, answer_field) {
		var answer = _user$project$Answer_Field$answer(answer_field);
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					params.msg(
						A2(
							_user$project$Text_Update$ToggleEditable,
							params.text_component,
							_user$project$Text_Update$Answer(answer_field)))),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
					_1: {ctor: '[]'}
				}
			},
			A2(
				_elm_lang$core$Basics_ops['++'],
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(answer.text),
					_1: {ctor: '[]'}
				},
				A2(_user$project$Answer_View$view_answer_feedback, params, answer_field)));
	});
var _user$project$Answer_View$view_editable_answer = F2(
	function (params, answer_field) {
		var answer = _user$project$Answer_Field$answer(answer_field);
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'answer_item', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					A2(
						_elm_lang$core$Basics_ops['++'],
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'radio'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html_Attributes$attribute,
									'name',
									_user$project$Answer_Field$name(answer_field)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onCheck(
										function (_p2) {
											return params.msg(
												A3(_user$project$Text_Update$UpdateAnswerFieldCorrect, params.text_component, answer_field, _p2));
										}),
									_1: {ctor: '[]'}
								}
							}
						},
						answer.correct ? {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'checked', 'checked'),
							_1: {ctor: '[]'}
						} : {ctor: '[]'}),
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p3 = _user$project$Answer_Field$editable(answer_field);
						if (_p3 === true) {
							return A2(_user$project$Answer_View$edit_answer, params, answer_field);
						} else {
							return A2(_user$project$Answer_View$view_answer, params, answer_field);
						}
					}(),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Answer_View$AnswerFieldParams = F3(
	function (a, b, c) {
		return {text_component: a, question: b, msg: c};
	});

var _user$project$Date_Utils$am_pm_fmt = function (date) {
	var _p0 = _elm_lang$core$Native_Utils.cmp(
		_elm_lang$core$Date$hour(date),
		12) < 0;
	if (_p0 === true) {
		return 'AM';
	} else {
		return 'PM';
	}
};
var _user$project$Date_Utils$pad_zero = F2(
	function (zeros, num) {
		var _p1 = _elm_lang$core$String$toInt(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'1',
				A2(_elm_lang$core$String$repeat, zeros - 1, '0')));
		if (_p1.ctor === 'Ok') {
			var _p2 = _elm_lang$core$Native_Utils.cmp(num, _p1._0) > 0;
			if (_p2 === true) {
				return _elm_lang$core$Basics$toString(num);
			} else {
				return A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_elm_lang$core$String$repeat, zeros, '0'),
					_elm_lang$core$Basics$toString(num));
			}
		} else {
			return _elm_lang$core$Basics$toString(num);
		}
	});
var _user$project$Date_Utils$hour_min_sec_fmt = function (date) {
	return A2(
		_elm_lang$core$String$join,
		' ',
		{
			ctor: '::',
			_0: A2(
				_elm_lang$core$String$join,
				':',
				{
					ctor: '::',
					_0: A2(
						_user$project$Date_Utils$pad_zero,
						1,
						_elm_lang$core$Date$hour(date) - 12),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$Date_Utils$pad_zero,
							1,
							_elm_lang$core$Date$minute(date)),
						_1: {
							ctor: '::',
							_0: A2(
								_user$project$Date_Utils$pad_zero,
								1,
								_elm_lang$core$Date$second(date)),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: _user$project$Date_Utils$am_pm_fmt(date),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Date_Utils$month_day_year_fmt = function (date) {
	return A3(
		_elm_lang$core$List$foldr,
		F2(
			function (x, y) {
				return A2(_elm_lang$core$Basics_ops['++'], x, y);
			}),
		'',
		A2(
			_elm_lang$core$List$map,
			function (s) {
				return A2(_elm_lang$core$Basics_ops['++'], s, '  ');
			},
			{
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(
					_elm_lang$core$Date$month(date)),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(
							_elm_lang$core$Date$day(date)),
						','),
					_1: {
						ctor: '::',
						_0: _user$project$Date_Utils$hour_min_sec_fmt(date),
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(
								_elm_lang$core$Date$year(date)),
							_1: {ctor: '[]'}
						}
					}
				}
			}));
};

var _user$project$Instructor_Profile$view_instructor_profile_header = function (_p0) {
	var _p1 = _p0;
	return {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'href', '/profile/instructor/'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p1._0.username),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	};
};
var _user$project$Instructor_Profile$username = function (_p2) {
	var _p3 = _p2;
	return _p3._0.username;
};
var _user$project$Instructor_Profile$InstructorProfileParams = F2(
	function (a, b) {
		return {id: a, username: b};
	});
var _user$project$Instructor_Profile$InstructorProfile = function (a) {
	return {ctor: 'InstructorProfile', _0: a};
};
var _user$project$Instructor_Profile$init_profile = function (params) {
	return _user$project$Instructor_Profile$InstructorProfile(params);
};

var _user$project$Profile$tupleDecoder = A3(
	_elm_lang$core$Json_Decode$map2,
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}),
	A2(_elm_lang$core$Json_Decode$index, 0, _elm_lang$core$Json_Decode$string),
	A2(_elm_lang$core$Json_Decode$index, 1, _elm_lang$core$Json_Decode$string));
var _user$project$Profile$view_student_profile_header = function (_p0) {
	var _p1 = _p0;
	return {
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'href', '/profile/student/'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p1._0.username),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	};
};
var _user$project$Profile$view_profile_header = function (profile) {
	var _p2 = profile;
	switch (_p2.ctor) {
		case 'Instructor':
			return _elm_lang$core$Maybe$Just(
				_user$project$Instructor_Profile$view_instructor_profile_header(_p2._0));
		case 'Student':
			return _elm_lang$core$Maybe$Just(
				_user$project$Profile$view_student_profile_header(_p2._0));
		default:
			return _elm_lang$core$Maybe$Nothing;
	}
};
var _user$project$Profile$studentUserName = function (_p3) {
	var _p4 = _p3;
	return _p4._0.username;
};
var _user$project$Profile$studentDifficulties = function (_p5) {
	var _p6 = _p5;
	return _p6._0.difficulties;
};
var _user$project$Profile$studentDifficultyPreference = function (_p7) {
	var _p8 = _p7;
	return _p8._0.difficulty_preference;
};
var _user$project$Profile$StudentProfileParams = F4(
	function (a, b, c, d) {
		return {id: a, username: b, difficulty_preference: c, difficulties: d};
	});
var _user$project$Profile$studentProfileParamsDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'difficulties',
	_elm_lang$core$Json_Decode$list(_user$project$Profile$tupleDecoder),
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'difficulty_preference',
		_elm_lang$core$Json_Decode$nullable(_user$project$Profile$tupleDecoder),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'username',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'id',
				_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Profile$StudentProfileParams)))));
var _user$project$Profile$StudentProfile = function (a) {
	return {ctor: 'StudentProfile', _0: a};
};
var _user$project$Profile$studentProfile = function (params) {
	return _user$project$Profile$StudentProfile(params);
};
var _user$project$Profile$emptyStudentProfile = _user$project$Profile$StudentProfile(
	{
		id: _elm_lang$core$Maybe$Nothing,
		username: '',
		difficulty_preference: _elm_lang$core$Maybe$Nothing,
		difficulties: {ctor: '[]'}
	});
var _user$project$Profile$studentProfileDecoder = A2(_elm_lang$core$Json_Decode$map, _user$project$Profile$StudentProfile, _user$project$Profile$studentProfileParamsDecoder);
var _user$project$Profile$retrieve_student_profile = F2(
	function (msg, profile_id) {
		var request = A2(
			_elm_lang$http$Http$get,
			A2(
				_elm_lang$core$String$join,
				'',
				{
					ctor: '::',
					_0: _user$project$Config$student_api_endpoint,
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$Basics_ops['++'],
							_elm_lang$core$Basics$toString(profile_id),
							'/'),
						_1: {ctor: '[]'}
					}
				}),
			_user$project$Profile$studentProfileDecoder);
		return A2(_elm_lang$http$Http$send, msg, request);
	});
var _user$project$Profile$EmptyProfile = {ctor: 'EmptyProfile'};
var _user$project$Profile$emptyProfile = _user$project$Profile$EmptyProfile;
var _user$project$Profile$Instructor = function (a) {
	return {ctor: 'Instructor', _0: a};
};
var _user$project$Profile$fromInstructorProfile = function (instructor_profile) {
	return _user$project$Profile$Instructor(instructor_profile);
};
var _user$project$Profile$Student = function (a) {
	return {ctor: 'Student', _0: a};
};
var _user$project$Profile$fromStudentProfile = function (student_profile) {
	return _user$project$Profile$Student(student_profile);
};
var _user$project$Profile$init_profile = function (flags) {
	var _p9 = flags.instructor_profile;
	if (_p9.ctor === 'Just') {
		return _user$project$Profile$Instructor(
			_user$project$Instructor_Profile$init_profile(_p9._0));
	} else {
		var _p10 = flags.student_profile;
		if (_p10.ctor === 'Just') {
			return _user$project$Profile$Student(
				_user$project$Profile$StudentProfile(_p10._0));
		} else {
			return _user$project$Profile$EmptyProfile;
		}
	}
};

var _user$project$Flags$UnAuthedFlags = function (a) {
	return {csrftoken: a};
};

var _user$project$HttpHelpers$delete_with_headers = F4(
	function (url, headers, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'DELETE',
				headers: headers,
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _user$project$HttpHelpers$post_with_headers = F4(
	function (url, headers, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: headers,
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _user$project$HttpHelpers$put_with_headers = F4(
	function (url, headers, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'PUT',
				headers: headers,
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});

var _user$project$Question_Encode$questionEncoder = function (question) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'body',
				_1: _elm_lang$core$Json_Encode$string(question.body)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'order',
					_1: _elm_lang$core$Json_Encode$int(question.order)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'answers',
						_1: _user$project$Answer_Encode$answersEncoder(question.answers)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'question_type',
							_1: _elm_lang$core$Json_Encode$string(question.question_type)
						},
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Question_Encode$questionsEncoder = function (questions) {
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Array$toList(
			A2(
				_elm_lang$core$Array$map,
				function (question) {
					return _user$project$Question_Encode$questionEncoder(question);
				},
				questions)));
};

var _user$project$Text_Section_Encode$textSectionEncoder = function (text) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'body',
				_1: _elm_lang$core$Json_Encode$string(text.body)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'questions',
					_1: _user$project$Question_Encode$questionsEncoder(text.questions)
				},
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Text_Section_Encode$textSectionsEncoder = function (texts) {
	return _elm_lang$core$Json_Encode$list(
		_elm_lang$core$Array$toList(
			A2(
				_elm_lang$core$Array$map,
				function (text) {
					return _user$project$Text_Section_Encode$textSectionEncoder(text);
				},
				texts)));
};

var _user$project$Text_Encode$textEncoder = function (text) {
	return _elm_lang$core$Json_Encode$object(
		{
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'introduction',
				_1: _elm_lang$core$Json_Encode$string(text.introduction)
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'title',
					_1: _elm_lang$core$Json_Encode$string(text.title)
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'source',
						_1: _elm_lang$core$Json_Encode$string(text.source)
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'author',
							_1: _elm_lang$core$Json_Encode$string(text.author)
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'difficulty',
								_1: _elm_lang$core$Json_Encode$string(text.difficulty)
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'text_sections',
									_1: _user$project$Text_Section_Encode$textSectionsEncoder(text.sections)
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'tags',
										_1: _elm_lang$core$Json_Encode$list(
											function () {
												var _p0 = text.tags;
												if (_p0.ctor === 'Just') {
													return A2(
														_elm_lang$core$List$map,
														function (tag) {
															return _elm_lang$core$Json_Encode$string(tag);
														},
														_p0._0);
												} else {
													return {ctor: '[]'};
												}
											}())
									},
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			}
		});
};

var _user$project$Views$view_preview = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$classList(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'preview', _1: true},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'preview_menu', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'menu_item', _1: true},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'placeholder', 'Search texts..'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	});
var _user$project$Views$view_footer = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$classList(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'footer_items', _1: true},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'footer', _1: true},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'message', _1: true},
							_1: {ctor: '[]'}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(''),
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	});
var _user$project$Views$view_filter = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$classList(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'filter_items', _1: true},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'filter', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'placeholder', 'Search texts..'),
						_1: {ctor: '[]'}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'href', '/admin/text/'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Create A Text'),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			}),
		_1: {ctor: '[]'}
	});
var _user$project$Views$view_user_profile_menu_item = function (view) {
	var _p0 = view;
	if (_p0.ctor === 'Just') {
		return {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$span,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'menu_item', _1: true},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				},
				_p0._0),
			_1: {ctor: '[]'}
		};
	} else {
		return {ctor: '[]'};
	}
};
var _user$project$Views$view_menu_item = function (_p1) {
	var _p2 = _p1;
	return A2(
		_elm_lang$html$Html$span,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$classList(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'menu_item', _1: true},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'menu_item_selected', _1: _p2._2},
						_1: {ctor: '[]'}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$a,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'href', _p2._0),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(_p2._1),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Views$view_menu = F2(
	function (_p3, profile) {
		var _p4 = _p3;
		return A2(
			_elm_lang$core$Basics_ops['++'],
			_elm_lang$core$Array$toList(
				A2(_elm_lang$core$Array$map, _user$project$Views$view_menu_item, _p4._0)),
			_user$project$Views$view_user_profile_menu_item(
				_user$project$Profile$view_profile_header(profile)));
	});
var _user$project$Views$MenuItem = F3(
	function (a, b, c) {
		return {ctor: 'MenuItem', _0: a, _1: b, _2: c};
	});
var _user$project$Views$set_selected_menu_item = F2(
	function (_p5, select) {
		var _p6 = _p5;
		return A3(_user$project$Views$MenuItem, _p6._0, _p6._1, select);
	});
var _user$project$Views$MenuItems = function (a) {
	return {ctor: 'MenuItems', _0: a};
};
var _user$project$Views$menu_items = _user$project$Views$MenuItems(
	_elm_lang$core$Array$fromList(
		{
			ctor: '::',
			_0: A3(_user$project$Views$MenuItem, '/admin/texts/', 'Texts', false),
			_1: {
				ctor: '::',
				_0: A3(_user$project$Views$MenuItem, '/login/student/', 'Student Login', false),
				_1: {
					ctor: '::',
					_0: A3(_user$project$Views$MenuItem, '/login/instructor/', 'Instructor Login', false),
					_1: {ctor: '[]'}
				}
			}
		}));
var _user$project$Views$set_selected = F3(
	function (_p7, index, select) {
		var _p8 = _p7;
		var _p10 = _p8._0;
		var _p9 = A2(_elm_lang$core$Array$get, index, _p10);
		if (_p9.ctor === 'Just') {
			return _user$project$Views$MenuItems(
				A3(
					_elm_lang$core$Array$set,
					index,
					A2(_user$project$Views$set_selected_menu_item, _p9._0, select),
					_p10));
		} else {
			return _user$project$Views$MenuItems(_p10);
		}
	});
var _user$project$Views$view_header = F2(
	function (profile, selected_menu_item) {
		var m_items = function () {
			var _p11 = selected_menu_item;
			if (_p11.ctor === 'Just') {
				return A3(_user$project$Views$set_selected, _user$project$Views$menu_items, _p11._0, true);
			} else {
				return _user$project$Views$menu_items;
			}
		}();
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'header', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('E-Reader'),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'menu', _1: true},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						A2(_user$project$Views$view_menu, m_items, profile)),
					_1: {ctor: '[]'}
				}
			});
	});

var _user$project$Question_Decode$questionDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'question_type',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'answers',
		_user$project$Answer_Decode$answersDecoder,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'order',
			_elm_lang$core$Json_Decode$int,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'body',
				_elm_lang$core$Json_Decode$string,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'modified_dt',
					_elm_lang$core$Json_Decode$nullable(_elm_community$json_extra$Json_Decode_Extra$date),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'created_dt',
						_elm_lang$core$Json_Decode$nullable(_elm_community$json_extra$Json_Decode_Extra$date),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'text_id',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'id',
								_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Question_Model$Question)))))))));
var _user$project$Question_Decode$questionsDecoder = _elm_lang$core$Json_Decode$array(_user$project$Question_Decode$questionDecoder);

var _user$project$Text_Section_Decode$textSectionDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'questions',
	_user$project$Question_Decode$questionsDecoder,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'question_count',
		_elm_lang$core$Json_Decode$int,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'body',
			_elm_lang$core$Json_Decode$string,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'order',
				_elm_lang$core$Json_Decode$int,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Section_Model$TextSection)))));
var _user$project$Text_Section_Decode$textSectionsDecoder = _elm_lang$core$Json_Decode$list(_user$project$Text_Section_Decode$textSectionDecoder);
var _user$project$Text_Section_Decode$TextCreateResp = function (a) {
	return {id: a};
};

var _user$project$Text_Decode$decodeRespErrors = function (str) {
	return A2(
		_elm_lang$core$Json_Decode$decodeString,
		A2(
			_elm_lang$core$Json_Decode$field,
			'errors',
			_elm_lang$core$Json_Decode$dict(_elm_lang$core$Json_Decode$string)),
		str);
};
var _user$project$Text_Decode$textListItemDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'write_locker',
	_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'text_count',
		_elm_lang$core$Json_Decode$int,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'modified_dt',
			_elm_community$json_extra$Json_Decode_Extra$date,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'created_dt',
				_elm_community$json_extra$Json_Decode_Extra$date,
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'tags',
					_elm_lang$core$Json_Decode$nullable(
						_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'last_modified_by',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'created_by',
							_elm_lang$core$Json_Decode$string,
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'difficulty',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'author',
									_elm_lang$core$Json_Decode$string,
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'title',
										_elm_lang$core$Json_Decode$string,
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'id',
											_elm_lang$core$Json_Decode$int,
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Model$TextListItem))))))))))));
var _user$project$Text_Decode$textListDecoder = _elm_lang$core$Json_Decode$list(_user$project$Text_Decode$textListItemDecoder);
var _user$project$Text_Decode$textDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'write_locker',
	_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'sections',
		A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Array$fromList, _user$project$Text_Section_Decode$textSectionsDecoder),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'modified_dt',
			_elm_lang$core$Json_Decode$nullable(_elm_community$json_extra$Json_Decode_Extra$date),
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
				'created_dt',
				_elm_lang$core$Json_Decode$nullable(_elm_community$json_extra$Json_Decode_Extra$date),
				A3(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
					'tags',
					_elm_lang$core$Json_Decode$nullable(
						_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)),
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
						'last_modified_by',
						_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
						A3(
							_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
							'created_by',
							_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$string),
							A3(
								_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
								'difficulty',
								_elm_lang$core$Json_Decode$string,
								A3(
									_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
									'source',
									_elm_lang$core$Json_Decode$string,
									A3(
										_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
										'author',
										_elm_lang$core$Json_Decode$string,
										A3(
											_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
											'introduction',
											_elm_lang$core$Json_Decode$string,
											A3(
												_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
												'title',
												_elm_lang$core$Json_Decode$string,
												A3(
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
													'id',
													_elm_lang$core$Json_Decode$nullable(_elm_lang$core$Json_Decode$int),
													_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Model$Text))))))))))))));
var _user$project$Text_Decode$TextCreateResp = F2(
	function (a, b) {
		return {id: a, redirect: b};
	});
var _user$project$Text_Decode$textCreateRespDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'redirect',
	_elm_lang$core$Json_Decode$string,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'id',
		_elm_lang$core$Json_Decode$int,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Decode$TextCreateResp)));
var _user$project$Text_Decode$TextUpdateResp = F2(
	function (a, b) {
		return {id: a, updated: b};
	});
var _user$project$Text_Decode$textUpdateRespDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'updated',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'id',
		_elm_lang$core$Json_Decode$int,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Decode$TextUpdateResp)));
var _user$project$Text_Decode$TextDeleteResp = F3(
	function (a, b, c) {
		return {id: a, redirect: b, deleted: c};
	});
var _user$project$Text_Decode$textDeleteRespDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'deleted',
	_elm_lang$core$Json_Decode$bool,
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'redirect',
		_elm_lang$core$Json_Decode$string,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'id',
			_elm_lang$core$Json_Decode$int,
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Decode$TextDeleteResp))));
var _user$project$Text_Decode$TextLockResp = function (a) {
	return {locked: a};
};
var _user$project$Text_Decode$textLockRespDecoder = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'locked',
	_elm_lang$core$Json_Decode$bool,
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_user$project$Text_Decode$TextLockResp));

var _user$project$Text_Create$Flags = F4(
	function (a, b, c, d) {
		return {instructor_profile: a, csrftoken: b, text: c, tags: d};
	});
var _user$project$Text_Create$Model = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {flags: a, mode: b, profile: c, success_msg: d, error_msg: e, text_component: f, text_difficulties: g, tags: h, write_locked: i};
	});
var _user$project$Text_Create$TextViewParams = F8(
	function (a, b, c, d, e, f, g, h) {
		return {text: a, text_component: b, text_fields: c, profile: d, tags: e, write_locked: f, mode: g, text_difficulties: h};
	});
var _user$project$Text_Create$ReadOnlyMode = function (a) {
	return {ctor: 'ReadOnlyMode', _0: a};
};
var _user$project$Text_Create$CreateMode = {ctor: 'CreateMode'};
var _user$project$Text_Create$EditMode = {ctor: 'EditMode'};
var _user$project$Text_Create$Difficulty = function (a) {
	return {ctor: 'Difficulty', _0: a};
};
var _user$project$Text_Create$Source = function (a) {
	return {ctor: 'Source', _0: a};
};
var _user$project$Text_Create$Author = function (a) {
	return {ctor: 'Author', _0: a};
};
var _user$project$Text_Create$Tags = function (a) {
	return {ctor: 'Tags', _0: a};
};
var _user$project$Text_Create$Intro = function (a) {
	return {ctor: 'Intro', _0: a};
};
var _user$project$Text_Create$Title = function (a) {
	return {ctor: 'Title', _0: a};
};
var _user$project$Text_Create$TextDelete = function (a) {
	return {ctor: 'TextDelete', _0: a};
};
var _user$project$Text_Create$ConfirmTextDelete = function (a) {
	return {ctor: 'ConfirmTextDelete', _0: a};
};
var _user$project$Text_Create$DeleteText = {ctor: 'DeleteText'};
var _user$project$Text_Create$TextUnlocked = function (a) {
	return {ctor: 'TextUnlocked', _0: a};
};
var _user$project$Text_Create$TextLocked = function (a) {
	return {ctor: 'TextLocked', _0: a};
};
var _user$project$Text_Create$ToggleLock = {ctor: 'ToggleLock'};
var _user$project$Text_Create$DeleteTag = function (a) {
	return {ctor: 'DeleteTag', _0: a};
};
var _user$project$Text_Create$AddTagInput = F2(
	function (a, b) {
		return {ctor: 'AddTagInput', _0: a, _1: b};
	});
var _user$project$Text_Create$ClearMessages = function (a) {
	return {ctor: 'ClearMessages', _0: a};
};
var _user$project$Text_Create$TextTagsDecode = function (a) {
	return {ctor: 'TextTagsDecode', _0: a};
};
var _user$project$Text_Create$TextJSONDecode = function (a) {
	return {ctor: 'TextJSONDecode', _0: a};
};
var _user$project$Text_Create$UpdateTextIntro = function (a) {
	return {ctor: 'UpdateTextIntro', _0: a};
};
var _user$project$Text_Create$UpdateTextAttributes = F2(
	function (a, b) {
		return {ctor: 'UpdateTextAttributes', _0: a, _1: b};
	});
var _user$project$Text_Create$ToggleEditable = F2(
	function (a, b) {
		return {ctor: 'ToggleEditable', _0: a, _1: b};
	});
var _user$project$Text_Create$TextComponentMsg = function (a) {
	return {ctor: 'TextComponentMsg', _0: a};
};
var _user$project$Text_Create$Updated = function (a) {
	return {ctor: 'Updated', _0: a};
};
var _user$project$Text_Create$Submitted = function (a) {
	return {ctor: 'Submitted', _0: a};
};
var _user$project$Text_Create$SubmitText = {ctor: 'SubmitText'};
var _user$project$Text_Create$UpdateTextDifficultyOptions = function (a) {
	return {ctor: 'UpdateTextDifficultyOptions', _0: a};
};

var _user$project$Question_View$view_delete_selected = F2(
	function (msg, text_component) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'delete_question', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						msg(
							_user$project$Text_Update$DeleteSelectedQuestions(text_component))),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$img,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/delete_question.svg'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '20px'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '20px'),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Delete Selected'),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Question_View$view_add_question = F2(
	function (msg, text_component) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'add_question', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						msg(
							_user$project$Text_Update$AddQuestion(text_component))),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$img,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/add_question.svg'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '20px'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '20px'),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Add Question'),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Question_View$view_question_buttons = F2(
	function (msg, text_component) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'question_buttons', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(_user$project$Question_View$view_add_question, msg, text_component),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Question_View$view_delete_selected, msg, text_component),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Question_View$view_question_type_menu_item = F2(
	function (params, field) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.eq(params.question.question_type, 'main_idea') ? A2(
					_elm_lang$html$Html$strong,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Main Idea'),
						_1: {ctor: '[]'}
					}) : A2(
					_elm_lang$html$Html$span,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							params.msg(
								A2(
									_user$project$Text_Update$UpdateQuestionField,
									params.text_component,
									A2(_user$project$Question_Field$set_question_type, field, _user$project$Question_Field$MainIdea)))),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Main Idea'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text(' | '),
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Native_Utils.eq(params.question.question_type, 'detail') ? A2(
							_elm_lang$html$Html$strong,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Detail'),
								_1: {ctor: '[]'}
							}) : A2(
							_elm_lang$html$Html$span,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(
									params.msg(
										A2(
											_user$project$Text_Update$UpdateQuestionField,
											params.text_component,
											A2(_user$project$Question_Field$set_question_type, field, _user$project$Question_Field$Detail)))),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Detail'),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Question_View$view_delete_menu_item = F2(
	function (params, field) {
		return A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					params.msg(
						A2(_user$project$Text_Update$DeleteQuestion, params.text_component, field))),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Delete'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Question_View$view_menu_items = F2(
	function (params, field) {
		return A2(
			_elm_lang$core$List$map,
			function (html) {
				return A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'question_menu_item'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: html,
						_1: {ctor: '[]'}
					});
			},
			{
				ctor: '::',
				_0: A2(_user$project$Question_View$view_delete_menu_item, params, field),
				_1: {
					ctor: '::',
					_0: A2(_user$project$Question_View$view_question_type_menu_item, params, field),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Question_View$view_question_menu = F2(
	function (params, field) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'question_menu', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$img,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/action_arrow.svg'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onClick(
										params.msg(
											A2(_user$project$Text_Update$ToggleQuestionMenu, params.text_component, field))),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'question_menu_overlay', _1: true},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'hidden',
											_1: !_user$project$Question_Field$menu_visible(field)
										},
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						},
						A2(_user$project$Question_View$view_menu_items, params, field)),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Question_View$toggle_editable = F3(
	function (event, params, field) {
		return event(
			params.msg(
				A2(
					_user$project$Text_Update$ToggleEditable,
					params.text_component,
					_user$project$Text_Update$Question(field))));
	});
var _user$project$Question_View$edit_question = F2(
	function (params, field) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'question_item', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$textarea,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'rows', '2'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'cols', '100'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html_Attributes$attribute,
									'id',
									_user$project$Question_Field$id(field)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (_p0) {
											return params.msg(
												A3(_user$project$Text_Update$UpdateQuestionFieldValue, params.text_component, field, _p0));
										}),
									_1: {
										ctor: '::',
										_0: A3(_user$project$Question_View$toggle_editable, _elm_lang$html$Html_Events$onBlur, params, field),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(params.question.body),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Question_View$view_question = F2(
	function (params, question_field) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html_Attributes$attribute,
					'id',
					_user$project$Question_Field$id(question_field)),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'question_item', _1: true},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'input_error',
									_1: _user$project$Question_Field$error(question_field)
								},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'editable', _1: true},
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {
						ctor: '::',
						_0: A3(_user$project$Question_View$toggle_editable, _elm_lang$html$Html_Events$onClick, params, question_field),
						_1: {ctor: '[]'}
					}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(
					_elm_lang$core$String$isEmpty(params.question.body) ? 'Click to write the question text.' : params.question.body),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Question_View$view_editable_question = F3(
	function (msg, text_component, field) {
		var params = {
			text_component: text_component,
			question: _user$project$Question_Field$question(field),
			msg: msg
		};
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'question_parts', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$input,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'checkbox'),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onCheck(
										function (_p1) {
											return msg(
												A3(_user$project$Text_Update$SelectQuestion, text_component, field, _p1));
										}),
									_1: {ctor: '[]'}
								}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'question', _1: true},
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						},
						A2(
							_elm_lang$core$Basics_ops['++'],
							{
								ctor: '::',
								_0: function () {
									var _p2 = _user$project$Question_Field$editable(field);
									if (_p2 === true) {
										return A2(_user$project$Question_View$edit_question, params, field);
									} else {
										return A2(_user$project$Question_View$view_question, params, field);
									}
								}(),
								_1: {ctor: '[]'}
							},
							_elm_lang$core$Array$toList(
								A2(
									_elm_lang$core$Array$map,
									_user$project$Answer_View$view_editable_answer(params),
									_user$project$Question_Field$answers(field))))),
					_1: {
						ctor: '::',
						_0: A2(_user$project$Question_View$view_question_menu, params, field),
						_1: {ctor: '[]'}
					}
				}
			});
	});
var _user$project$Question_View$view_questions = F3(
	function (msg, text_component, fields) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'question_section', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			_elm_lang$core$Array$toList(
				A2(
					_elm_lang$core$Array$map,
					A2(_user$project$Question_View$view_editable_question, msg, text_component),
					fields)));
	});
var _user$project$Question_View$QuestionFieldParams = F3(
	function (a, b, c) {
		return {text_component: a, question: b, msg: c};
	});

var _user$project$Text_Section_View$toggle_editable = F2(
	function (event, params) {
		return event(
			params.msg(
				A2(
					_user$project$Text_Update$ToggleEditable,
					params.text_section_component,
					_user$project$Text_Update$Text(params.field))));
	});
var _user$project$Text_Section_View$edit_body = function (params) {
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$textarea,
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html_Attributes$attribute,
						'id',
						_user$project$Text_Section_Component$text_field_id(params.field)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'input_error', _1: params.field.error},
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(
								function (_p0) {
									return params.msg(
										A3(_user$project$Text_Update$UpdateTextValue, params.text_section_component, 'body', _p0));
								}),
							_1: {ctor: '[]'}
						}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(params.text_section.body),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Text_Section_View$view_body = function (params) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html_Attributes$attribute,
				'id',
				_user$project$Text_Section_Component$text_field_id(params.field)),
			_1: {
				ctor: '::',
				_0: A2(_user$project$Text_Section_View$toggle_editable, _elm_lang$html$Html_Events$onClick, params),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_property'),
					_1: {ctor: '[]'}
				}
			}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(params.text_section.body),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _user$project$Text_Section_View$view_editable = F3(
	function (params, view, edit) {
		var _p1 = _user$project$Text_Section_Component$editable(params.field);
		if (_p1 === true) {
			return edit(params);
		} else {
			return view(params);
		}
	});
var _user$project$Text_Section_View$view_text_section_component = F3(
	function (msg, text_difficulties, text_section_component) {
		var body_field = _user$project$Text_Section_Component$body(text_section_component);
		var text_section = _user$project$Text_Section_Component$text_section(text_section_component);
		var params = function (field) {
			return {text_section_component: text_section_component, text_section: text_section, msg: msg, difficulties: text_difficulties, field: field};
		};
		return {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$Basics_ops['++'],
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$classList(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'text_properties', _1: true},
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$classList(
											{
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'body', _1: true},
												_1: {ctor: '[]'}
											}),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$div,
											{ctor: '[]'},
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(
													A2(
														_elm_lang$core$Basics_ops['++'],
														'Text Section ',
														_elm_lang$core$Basics$toString(text_section.order + 1))),
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: A3(
												_user$project$Text_Section_View$view_editable,
												params(body_field),
												_user$project$Text_Section_View$view_body,
												_user$project$Text_Section_View$edit_body),
											_1: {ctor: '[]'}
										}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: A3(
							_user$project$Question_View$view_questions,
							msg,
							text_section_component,
							_user$project$Text_Section_Component$question_fields(text_section_component)),
						_1: {
							ctor: '::',
							_0: A2(_user$project$Question_View$view_question_buttons, msg, text_section_component),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('cursor'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												msg(
													_user$project$Text_Update$DeleteTextSection(text_section_component))),
											_1: {ctor: '[]'}
										}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text('Delete Text Section'),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					})),
			_1: {ctor: '[]'}
		};
	});
var _user$project$Text_Section_View$view_text_section_components = F3(
	function (msg, text_components, text_difficulties) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'texts'),
				_1: {ctor: '[]'}
			},
			A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return A2(_elm_lang$core$Basics_ops['++'], x, y);
					}),
				{ctor: '[]'},
				_elm_lang$core$Array$toList(
					A2(
						_elm_lang$core$Array$map,
						A2(_user$project$Text_Section_View$view_text_section_component, msg, text_difficulties),
						_user$project$Text_Section_Component_Group$toArray(text_components)))));
	});
var _user$project$Text_Section_View$TextField = F5(
	function (a, b, c, d, e) {
		return {text_section_component: a, msg: b, text_section: c, difficulties: d, field: e};
	});

var _user$project$Text_View$view_submit = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$classList(
			{
				ctor: '::',
				_0: {ctor: '_Tuple2', _0: 'submit_section', _1: true},
				_1: {ctor: '[]'}
			}),
		_1: {ctor: '[]'}
	},
	{
		ctor: '::',
		_0: A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'submit'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_user$project$Text_Create$TextComponentMsg(_user$project$Text_Update$AddText)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$img,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/add_text.svg'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '20px'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '20px'),
								_1: {ctor: '[]'}
							}
						}
					},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html$text('Add Text'),
					_1: {ctor: '[]'}
				}
			}),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'submit'),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(_user$project$Text_Create$DeleteText),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Delete Text'),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$img,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/delete_text.svg'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '18px'),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '18px'),
										_1: {ctor: '[]'}
									}
								}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{ctor: '[]'}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'submit'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Text_Create$SubmitText),
								_1: {ctor: '[]'}
							}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$img,
								{
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/save_disk.svg'),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '20px'),
										_1: {
											ctor: '::',
											_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '20px'),
											_1: {ctor: '[]'}
										}
									}
								},
								{ctor: '[]'}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html$text('Save Text'),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				}
			}
		}
	});
var _user$project$Text_View$edit_source = F2(
	function (params, text_source) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$classList(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'text_property', _1: true},
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Source'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$input,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html_Attributes$attribute,
								'id',
								_user$project$Text_Field$source_id(text_source)),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'text'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', params.text.source),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$classList(
											{
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'input_error',
													_1: _user$project$Text_Field$source_error(text_source)
												},
												_1: {ctor: '[]'}
											}),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onInput(
												_user$project$Text_Create$UpdateTextAttributes('source')),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Events$onBlur(
													A2(
														_user$project$Text_Create$ToggleEditable,
														_user$project$Text_Create$Source(text_source),
														false)),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Text_View$view_source = F3(
	function (params, edit_view, text_source) {
		var _p0 = _user$project$Text_Field$source_editable(text_source);
		if (_p0 === false) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(
							_user$project$Text_Create$ToggleEditable,
							_user$project$Text_Create$Source(text_source),
							true)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'text_property', _1: true},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html_Attributes$attribute,
								'id',
								_user$project$Text_Field$source_id(text_source)),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Text Source'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(params.text.source),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				});
		} else {
			return A2(edit_view, params, text_source);
		}
	});
var _user$project$Text_View$edit_difficulty = F2(
	function (params, text_difficulty) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_property'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Difficulty'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$select,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onInput(
								_user$project$Text_Create$UpdateTextAttributes('difficulty')),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$optgroup,
								{ctor: '[]'},
								A2(
									_elm_lang$core$List$map,
									function (_p1) {
										var _p2 = _p1;
										var _p3 = _p2._0;
										return A2(
											_elm_lang$html$Html$option,
											A2(
												_elm_lang$core$Basics_ops['++'],
												{
													ctor: '::',
													_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', _p3),
													_1: {ctor: '[]'}
												},
												_elm_lang$core$Native_Utils.eq(_p3, params.text.difficulty) ? {
													ctor: '::',
													_0: A2(_elm_lang$html$Html_Attributes$attribute, 'selected', ''),
													_1: {ctor: '[]'}
												} : {ctor: '[]'}),
											{
												ctor: '::',
												_0: _elm_lang$html$Html$text(_p2._1),
												_1: {ctor: '[]'}
											});
									},
									params.text_difficulties)),
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Text_View$edit_author = F2(
	function (params, text_author) {
		return A2(
			_elm_lang$html$Html$input,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'text'),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', params.text.author),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html_Attributes$attribute,
							'id',
							_user$project$Text_Field$author_id(text_author)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'input_error',
										_1: _user$project$Text_Field$author_error(text_author)
									},
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onInput(
									_user$project$Text_Create$UpdateTextAttributes('author')),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onBlur(
										A2(
											_user$project$Text_Create$ToggleEditable,
											_user$project$Text_Create$Author(text_author),
											false)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('stuff'),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Text_View$view_author = F3(
	function (params, edit_author, text_author) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_author_view'),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_property'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Author'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p4 = _user$project$Text_Field$author_editable(text_author);
						if (_p4 === false) {
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html_Attributes$attribute,
										'id',
										_user$project$Text_Field$author_id(text_author)),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												A2(
													_user$project$Text_Create$ToggleEditable,
													_user$project$Text_Create$Author(text_author),
													true)),
											_1: {ctor: '[]'}
										}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{ctor: '[]'},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(params.text.author),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								});
						} else {
							return A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(edit_author, params, text_author),
									_1: {ctor: '[]'}
								});
						}
					}(),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Text_View$view_edit_text_lock = function (params) {
	var write_locked = params.write_locked;
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_lock'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						write_locked ? 'Text Locked' : 'Text Unlocked'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'lock_box'),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'dimgray_bg', _1: write_locked},
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onClick(_user$project$Text_Create$ToggleLock),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html_Attributes$attribute,
									'id',
									write_locked ? 'lock_right' : 'lock_left'),
								_1: {ctor: '[]'}
							},
							{ctor: '[]'}),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Text_View$view_text_lock = function (params) {
	var _p5 = params.mode;
	switch (_p5.ctor) {
		case 'EditMode':
			return _user$project$Text_View$view_edit_text_lock(params);
		case 'ReadOnlyMode':
			var _p6 = _elm_lang$core$Native_Utils.eq(
				_p5._0,
				_user$project$Instructor_Profile$username(params.profile));
			if (_p6 === true) {
				return _user$project$Text_View$view_edit_text_lock(params);
			} else {
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{ctor: '[]'});
			}
		default:
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{ctor: '[]'});
	}
};
var _user$project$Text_View$view_edit_text_tags = F2(
	function (params, text_tags) {
		var view_tag = function (tag) {
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_tag'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$img,
						{
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'src', '/static/img/cancel.svg'),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'height', '13px'),
								_1: {
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'width', '13px'),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'tag_delete_btn'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Events$onClick(
												_user$project$Text_Create$DeleteTag(tag)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						},
						{ctor: '[]'}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html$text(tag),
						_1: {ctor: '[]'}
					}
				});
		};
		var tags = _user$project$Text_Component$tags(params.text_component);
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_tags_view'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'input_error',
								_1: _user$project$Text_Field$tag_error(text_tags)
							},
							_1: {ctor: '[]'}
						}),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$datalist,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'tag_list'),
						_1: {
							ctor: '::',
							_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'text'),
							_1: {ctor: '[]'}
						}
					},
					A2(
						_elm_lang$core$List$map,
						function (tag) {
							return A2(
								_elm_lang$html$Html$option,
								{
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', tag),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(tag),
									_1: {ctor: '[]'}
								});
						},
						_elm_lang$core$Dict$keys(params.tags))),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('Text Tags'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_tags'),
								_1: {ctor: '[]'}
							},
							A2(
								_elm_lang$core$List$map,
								view_tag,
								_elm_lang$core$Dict$keys(tags))),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$input,
										{
											ctor: '::',
											_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'add_tag'),
											_1: {
												ctor: '::',
												_0: A2(_elm_lang$html$Html_Attributes$attribute, 'placeholder', 'add tags..'),
												_1: {
													ctor: '::',
													_0: A2(_elm_lang$html$Html_Attributes$attribute, 'list', 'tag_list'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Events$onInput(
															_user$project$Text_Create$AddTagInput('add_tag')),
														_1: {ctor: '[]'}
													}
												}
											}
										},
										{ctor: '[]'}),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			});
	});
var _user$project$Text_View$edit_text_introduction = F2(
	function (params, text_intro) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$textarea,
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html_Attributes$attribute,
							'id',
							_user$project$Text_Field$intro_id(text_intro)),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'text_introduction', _1: true},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'input_error',
											_1: _user$project$Text_Field$intro_error(text_intro)
										},
										_1: {ctor: '[]'}
									}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onInput(
									_user$project$Text_Create$UpdateTextAttributes('introduction')),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(params.text.introduction),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});
var _user$project$Text_View$view_text_introduction = F3(
	function (params, edit_view, text_intro) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_intro_view'),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						A2(
							_user$project$Text_Create$ToggleEditable,
							_user$project$Text_Create$Intro(text_intro),
							true)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Introduction'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p7 = _user$project$Text_Field$intro_editable(text_intro);
						if (_p7 === true) {
							return A2(edit_view, params, text_intro);
						} else {
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html_Attributes$attribute,
										'id',
										_user$project$Text_Field$intro_id(text_intro)),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
										_1: {ctor: '[]'}
									}
								},
								A2(
									_elm_lang$core$Basics_ops['++'],
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(params.text.introduction),
										_1: {ctor: '[]'}
									},
									_user$project$Text_Field$intro_error(text_intro) ? {ctor: '[]'} : {ctor: '[]'}));
						}
					}(),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Text_View$edit_text_title = F2(
	function (params, text_title) {
		return A2(
			_elm_lang$html$Html$input,
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html_Attributes$attribute,
					'id',
					_user$project$Text_Field$title_id(text_title)),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'type', 'text'),
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'value', params.text.title),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$classList(
								{
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'input_error',
										_1: _user$project$Text_Field$title_error(text_title)
									},
									_1: {ctor: '[]'}
								}),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onInput(
									_user$project$Text_Create$UpdateTextAttributes('title')),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onBlur(
										A2(
											_user$project$Text_Create$ToggleEditable,
											_user$project$Text_Create$Title(text_title),
											false)),
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			},
			{ctor: '[]'});
	});
var _user$project$Text_View$view_text_title = F3(
	function (params, edit_view, text_title) {
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Events$onClick(
					A2(
						_user$project$Text_Create$ToggleEditable,
						_user$project$Text_Create$Title(text_title),
						true)),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_title_view'),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Text Title'),
						_1: {ctor: '[]'}
					}),
				_1: {
					ctor: '::',
					_0: function () {
						var _p8 = _user$project$Text_Field$title_editable(text_title);
						if (_p8 === false) {
							return A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'editable'),
									_1: {ctor: '[]'}
								},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(params.text.title),
									_1: {ctor: '[]'}
								});
						} else {
							return A2(
								_elm_lang$html$Html$div,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(edit_view, params, text_title),
									_1: {ctor: '[]'}
								});
						}
					}(),
					_1: {ctor: '[]'}
				}
			});
	});
var _user$project$Text_View$view_text_date = function (params) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'text_dates'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			function () {
				var _p9 = params.text.modified_dt;
				if (_p9.ctor === 'Just') {
					var _p10 = params.text.last_modified_by;
					if (_p10.ctor === 'Just') {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(
											_elm_lang$core$Basics_ops['++'],
											'Last Modified by ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p10._0,
												A2(
													_elm_lang$core$Basics_ops['++'],
													' on ',
													_user$project$Date_Utils$month_day_year_fmt(_p9._0))))),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				} else {
					return {ctor: '[]'};
				}
			}(),
			function () {
				var _p11 = params.text.created_dt;
				if (_p11.ctor === 'Just') {
					var _p12 = params.text.created_by;
					if (_p12.ctor === 'Just') {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$span,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: _elm_lang$html$Html$text(
										A2(
											_elm_lang$core$Basics_ops['++'],
											'Created by ',
											A2(
												_elm_lang$core$Basics_ops['++'],
												_p12._0,
												A2(
													_elm_lang$core$Basics_ops['++'],
													' on ',
													_user$project$Date_Utils$month_day_year_fmt(_p11._0))))),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						};
					} else {
						return {ctor: '[]'};
					}
				} else {
					return {ctor: '[]'};
				}
			}()));
};
var _user$project$Text_View$view_text_attributes = function (params) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text_attributes'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A3(
				_user$project$Text_View$view_text_title,
				params,
				_user$project$Text_View$edit_text_title,
				_user$project$Text_Field$title(params.text_fields)),
			_1: {
				ctor: '::',
				_0: A3(
					_user$project$Text_View$view_text_introduction,
					params,
					_user$project$Text_View$edit_text_introduction,
					_user$project$Text_Field$intro(params.text_fields)),
				_1: {
					ctor: '::',
					_0: A3(
						_user$project$Text_View$view_author,
						params,
						_user$project$Text_View$edit_author,
						_user$project$Text_Field$author(params.text_fields)),
					_1: {
						ctor: '::',
						_0: A2(
							_user$project$Text_View$edit_difficulty,
							params,
							_user$project$Text_Field$difficulty(params.text_fields)),
						_1: {
							ctor: '::',
							_0: A3(
								_user$project$Text_View$view_source,
								params,
								_user$project$Text_View$edit_source,
								_user$project$Text_Field$source(params.text_fields)),
							_1: {
								ctor: '::',
								_0: _user$project$Text_View$view_text_lock(params),
								_1: {
									ctor: '::',
									_0: _user$project$Text_View$view_text_date(params),
									_1: {
										ctor: '::',
										_0: A2(
											_user$project$Text_View$view_edit_text_tags,
											params,
											_user$project$Text_Field$tags(params.text_fields)),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		});
};
var _user$project$Text_View$view_text = function (params) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'id', 'text'),
			_1: {ctor: '[]'}
		},
		A2(
			_elm_lang$core$Basics_ops['++'],
			{
				ctor: '::',
				_0: _user$project$Text_View$view_text_attributes(params),
				_1: {
					ctor: '::',
					_0: A3(
						_user$project$Text_Section_View$view_text_section_components,
						_user$project$Text_Create$TextComponentMsg,
						_user$project$Text_Component$text_section_components(params.text_component),
						params.text_difficulties),
					_1: {ctor: '[]'}
				}
			},
			function () {
				var _p13 = params.mode;
				if (_p13.ctor === 'ReadOnlyMode') {
					return {ctor: '[]'};
				} else {
					return {
						ctor: '::',
						_0: _user$project$Text_View$view_submit,
						_1: {ctor: '[]'}
					};
				}
			}()));
};

var _user$project$Text_Subscriptions$subscriptions = F2(
	function (msg, model) {
		return _user$project$Ports$ckEditorUpdate(
			function (_p0) {
				return msg(
					_user$project$Text_Update$UpdateTextBody(_p0));
			});
	});

var _user$project$Main$view_msg = function (msg) {
	var msg_str = function () {
		var _p0 = msg;
		if (_p0.ctor === 'Just') {
			return A2(
				_elm_lang$core$String$join,
				' ',
				{
					ctor: '::',
					_0: ' ',
					_1: {
						ctor: '::',
						_0: _p0._0,
						_1: {ctor: '[]'}
					}
				});
		} else {
			return '';
		}
	}();
	return _elm_lang$html$Html$text(msg_str);
};
var _user$project$Main$view_msgs = function (model) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'msgs'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'error_msg'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: _user$project$Main$view_msg(model.error_msg),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$div,
					{
						ctor: '::',
						_0: A2(_elm_lang$html$Html_Attributes$attribute, 'class', 'success_msg'),
						_1: {ctor: '[]'}
					},
					{
						ctor: '::',
						_0: _user$project$Main$view_msg(model.success_msg),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _user$project$Main$view = function (model) {
	var text_view_params = {
		text: _user$project$Text_Component$text(model.text_component),
		text_component: model.text_component,
		text_fields: _user$project$Text_Component$text_fields(model.text_component),
		tags: model.tags,
		profile: model.profile,
		write_locked: model.write_locked,
		mode: model.mode,
		text_difficulties: model.text_difficulties
	};
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_user$project$Views$view_header,
				_user$project$Profile$fromInstructorProfile(model.profile),
				_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: _user$project$Main$view_msgs(model),
				_1: {
					ctor: '::',
					_0: _user$project$Views$view_preview,
					_1: {
						ctor: '::',
						_0: _user$project$Text_View$view_text(text_view_params),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Main$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: A2(_user$project$Text_Subscriptions$subscriptions, _user$project$Text_Create$TextComponentMsg, model),
			_1: {
				ctor: '::',
				_0: function () {
					var _p1 = model.success_msg;
					if (_p1.ctor === 'Just') {
						return A2(_elm_lang$core$Time$every, _elm_lang$core$Time$second * 3, _user$project$Text_Create$ClearMessages);
					} else {
						return _elm_lang$core$Platform_Sub$none;
					}
				}(),
				_1: {
					ctor: '::',
					_0: _user$project$Ports$ckEditorUpdate(_user$project$Text_Create$UpdateTextIntro),
					_1: {
						ctor: '::',
						_0: _user$project$Ports$confirmation(_user$project$Text_Create$ConfirmTextDelete),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _user$project$Main$delete_text = F2(
	function (csrftoken, text) {
		var _p2 = text.id;
		if (_p2.ctor === 'Just') {
			var req = A4(
				_user$project$HttpHelpers$delete_with_headers,
				A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _user$project$Config$text_api_endpoint,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p2._0),
							_1: {
								ctor: '::',
								_0: '/',
								_1: {ctor: '[]'}
							}
						}
					}),
				{
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, 'X-CSRFToken', csrftoken),
					_1: {ctor: '[]'}
				},
				_elm_lang$http$Http$emptyBody,
				_user$project$Text_Decode$textDeleteRespDecoder);
			return A2(_elm_lang$http$Http$send, _user$project$Text_Create$TextDelete, req);
		} else {
			return _elm_lang$core$Platform_Cmd$none;
		}
	});
var _user$project$Main$update_text = F2(
	function (csrftoken, text) {
		var _p3 = text.id;
		if (_p3.ctor === 'Just') {
			var encoded_text = _user$project$Text_Encode$textEncoder(text);
			var req = A4(
				_user$project$HttpHelpers$put_with_headers,
				A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _user$project$Config$text_api_endpoint,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p3._0),
							_1: {
								ctor: '::',
								_0: '/',
								_1: {ctor: '[]'}
							}
						}
					}),
				{
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, 'X-CSRFToken', csrftoken),
					_1: {ctor: '[]'}
				},
				_elm_lang$http$Http$jsonBody(encoded_text),
				_user$project$Text_Decode$textUpdateRespDecoder);
			return A2(_elm_lang$http$Http$send, _user$project$Text_Create$Updated, req);
		} else {
			return _elm_lang$core$Platform_Cmd$none;
		}
	});
var _user$project$Main$post_text = F2(
	function (csrftoken, text) {
		var encoded_text = _user$project$Text_Encode$textEncoder(text);
		var req = A4(
			_user$project$HttpHelpers$post_with_headers,
			_user$project$Config$text_api_endpoint,
			{
				ctor: '::',
				_0: A2(_elm_lang$http$Http$header, 'X-CSRFToken', csrftoken),
				_1: {ctor: '[]'}
			},
			_elm_lang$http$Http$jsonBody(encoded_text),
			_user$project$Text_Decode$textCreateRespDecoder);
		return A2(_elm_lang$http$Http$send, _user$project$Text_Create$Submitted, req);
	});
var _user$project$Main$delete_lock = F2(
	function (csrftoken, text) {
		var _p4 = text.id;
		if (_p4.ctor === 'Just') {
			var req = A4(
				_user$project$HttpHelpers$delete_with_headers,
				A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _user$project$Config$text_api_endpoint,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p4._0),
							_1: {
								ctor: '::',
								_0: '/',
								_1: {
									ctor: '::',
									_0: 'lock/',
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				{
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, 'X-CSRFToken', csrftoken),
					_1: {ctor: '[]'}
				},
				_elm_lang$http$Http$emptyBody,
				_user$project$Text_Decode$textLockRespDecoder);
			return A2(_elm_lang$http$Http$send, _user$project$Text_Create$TextUnlocked, req);
		} else {
			return _elm_lang$core$Platform_Cmd$none;
		}
	});
var _user$project$Main$post_lock = F2(
	function (csrftoken, text) {
		var _p5 = text.id;
		if (_p5.ctor === 'Just') {
			var req = A4(
				_user$project$HttpHelpers$post_with_headers,
				A2(
					_elm_lang$core$String$join,
					'',
					{
						ctor: '::',
						_0: _user$project$Config$text_api_endpoint,
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(_p5._0),
							_1: {
								ctor: '::',
								_0: '/',
								_1: {
									ctor: '::',
									_0: 'lock/',
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				{
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, 'X-CSRFToken', csrftoken),
					_1: {ctor: '[]'}
				},
				_elm_lang$http$Http$emptyBody,
				_user$project$Text_Decode$textLockRespDecoder);
			return A2(_elm_lang$http$Http$send, _user$project$Text_Create$TextLocked, req);
		} else {
			return _elm_lang$core$Platform_Cmd$none;
		}
	});
var _user$project$Main$update = F2(
	function (msg, model) {
		var _p6 = msg;
		switch (_p6.ctor) {
			case 'TextComponentMsg':
				return A2(_user$project$Text_Update$update, _p6._0, model);
			case 'SubmitText':
				var text = _user$project$Text_Component$text(model.text_component);
				var _p7 = model.mode;
				switch (_p7.ctor) {
					case 'ReadOnlyMode':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									success_msg: _elm_lang$core$Maybe$Just(
										A2(_elm_lang$core$Basics_ops['++'], 'Text is locked by ', _p7._0))
								}),
							_1: _elm_lang$core$Platform_Cmd$none
						};
					case 'EditMode':
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{error_msg: _elm_lang$core$Maybe$Nothing, success_msg: _elm_lang$core$Maybe$Nothing}),
							_1: A2(_user$project$Main$update_text, model.flags.csrftoken, text)
						};
					default:
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{error_msg: _elm_lang$core$Maybe$Nothing, success_msg: _elm_lang$core$Maybe$Nothing}),
							_1: A2(_user$project$Main$post_text, model.flags.csrftoken, text)
						};
				}
			case 'TextJSONDecode':
				var _p8 = _p6._0;
				if (_p8.ctor === 'Ok') {
					var text_component = A2(_user$project$Text_Component$set_intro_editable, _p8._0, true);
					var text = _user$project$Text_Component$text(text_component);
					var _p9 = text.write_locker;
					if (_p9.ctor === 'Just') {
						var _p11 = _p9._0;
						var _p10 = !_elm_lang$core$Native_Utils.eq(
							_p11,
							_user$project$Instructor_Profile$username(model.profile));
						if (_p10 === true) {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										text_component: text_component,
										mode: _user$project$Text_Create$ReadOnlyMode(_p11),
										error_msg: _elm_lang$core$Maybe$Just(
											A2(_elm_lang$core$Basics_ops['++'], 'READONLY: text is currently being edited by ', _p11)),
										write_locked: true
									}),
								_1: _user$project$Text_Component$reinitialize_ck_editors(text_component)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Native_Utils.update(
									model,
									{
										text_component: text_component,
										mode: _user$project$Text_Create$EditMode,
										success_msg: _elm_lang$core$Maybe$Just(
											A2(
												_elm_lang$core$Basics_ops['++'],
												'editing \'',
												A2(_elm_lang$core$Basics_ops['++'], text.title, '\' text'))),
										write_locked: true
									}),
								_1: _user$project$Text_Component$reinitialize_ck_editors(text_component)
							};
						}
					} else {
						return {
							ctor: '_Tuple2',
							_0: _elm_lang$core$Native_Utils.update(
								model,
								{
									text_component: text_component,
									mode: _user$project$Text_Create$EditMode,
									success_msg: _elm_lang$core$Maybe$Just(
										A2(
											_elm_lang$core$Basics_ops['++'],
											'editing \'',
											A2(_elm_lang$core$Basics_ops['++'], text.title, '\' text')))
								}),
							_1: _user$project$Text_Component$reinitialize_ck_editors(text_component)
						};
					}
				} else {
					var _p12 = A2(_elm_lang$core$Debug$log, 'text decode error', _p8._0);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								error_msg: _elm_lang$core$Maybe$Just('Something went wrong loading the text from the server.'),
								success_msg: _elm_lang$core$Maybe$Just('Editing a new text')
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				}
			case 'TextTagsDecode':
				var _p13 = _p6._0;
				if (_p13.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{tags: _p13._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'ClearMessages':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{success_msg: _elm_lang$core$Maybe$Nothing}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Submitted':
				if (_p6._0.ctor === 'Ok') {
					var text = _user$project$Text_Component$text(model.text_component);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								success_msg: _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$String$join,
										' ',
										{
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												' created \'',
												A2(_elm_lang$core$Basics_ops['++'], text.title, '\'')),
											_1: {ctor: '[]'}
										})),
								mode: _user$project$Text_Create$EditMode
							}),
						_1: _elm_lang$navigation$Navigation$load(_p6._0._0.redirect)
					};
				} else {
					var _p14 = _p6._0._0;
					switch (_p14.ctor) {
						case 'BadStatus':
							var _p15 = _user$project$Text_Decode$decodeRespErrors(_p14._0.body);
							if (_p15.ctor === 'Ok') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											text_component: A2(_user$project$Text_Component$update_text_errors, model.text_component, _p15._0)
										}),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							} else {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							}
						case 'BadPayload':
							var _p16 = A2(_elm_lang$core$Debug$log, 'submit text bad payload error', _p14._1.body);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				}
			case 'Updated':
				if (_p6._0.ctor === 'Ok') {
					var text = _user$project$Text_Component$text(model.text_component);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								success_msg: _elm_lang$core$Maybe$Just(
									A2(
										_elm_lang$core$String$join,
										' ',
										{
											ctor: '::',
											_0: A2(
												_elm_lang$core$Basics_ops['++'],
												' saved \'',
												A2(_elm_lang$core$Basics_ops['++'], text.title, '\'')),
											_1: {ctor: '[]'}
										}))
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					var _p17 = _p6._0._0;
					switch (_p17.ctor) {
						case 'BadStatus':
							var _p20 = _p17._0;
							var _p18 = A2(_elm_lang$core$Debug$log, 'update error bad status', _p20);
							var _p19 = _user$project$Text_Decode$decodeRespErrors(_p20.body);
							if (_p19.ctor === 'Ok') {
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											text_component: A2(_user$project$Text_Component$update_text_errors, model.text_component, _p19._0)
										}),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							} else {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							}
						case 'BadPayload':
							var _p21 = A2(_elm_lang$core$Debug$log, 'update error bad payload', _p17._1);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				}
			case 'UpdateTextDifficultyOptions':
				if (_p6._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{text_difficulties: _p6._0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'ToggleEditable':
				var _p25 = _p6._1;
				var _p22 = function () {
					var _p23 = _p6._0;
					switch (_p23.ctor) {
						case 'Title':
							return {
								ctor: '_Tuple2',
								_0: A2(_user$project$Text_Component$set_title_editable, model.text_component, _p25),
								_1: _user$project$Text_Component$post_toggle_title
							};
						case 'Intro':
							return {
								ctor: '_Tuple2',
								_0: A2(_user$project$Text_Component$set_intro_editable, model.text_component, _p25),
								_1: _user$project$Text_Component$post_toggle_intro
							};
						case 'Author':
							return {
								ctor: '_Tuple2',
								_0: A2(_user$project$Text_Component$set_author_editable, model.text_component, _p25),
								_1: _user$project$Text_Component$post_toggle_author
							};
						case 'Source':
							return {
								ctor: '_Tuple2',
								_0: A2(_user$project$Text_Component$set_source_editable, model.text_component, _p25),
								_1: _user$project$Text_Component$post_toggle_source
							};
						default:
							return {
								ctor: '_Tuple2',
								_0: model.text_component,
								_1: function (_p24) {
									return _elm_lang$core$Platform_Cmd$none;
								}
							};
					}
				}();
				var text_component = _p22._0;
				var post_toggle_cmds = _p22._1;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{text_component: text_component}),
					_1: post_toggle_cmds(text_component)
				};
			case 'ToggleLock':
				var text = _user$project$Text_Component$text(model.text_component);
				var lock = A2(_user$project$Main$post_lock, model.flags.csrftoken, text);
				var unlock = A2(_user$project$Main$delete_lock, model.flags.csrftoken, text);
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: (!model.write_locked) ? lock : unlock
				};
			case 'TextUnlocked':
				if (_p6._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								write_locked: _p6._0._0.locked ? true : false,
								success_msg: _elm_lang$core$Maybe$Just('text is unlocked for editing, other instructors can now edit the text.')
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					var _p26 = _p6._0._0;
					switch (_p26.ctor) {
						case 'BadStatus':
							var _p29 = _p26._0;
							var _p27 = A2(_elm_lang$core$Debug$log, 'update error bad status', _p29);
							var _p28 = _user$project$Text_Decode$decodeRespErrors(_p29.body);
							if (_p28.ctor === 'Ok') {
								var errors_str = A2(
									_elm_lang$core$String$join,
									' and ',
									_elm_lang$core$Dict$values(_p28._0));
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											success_msg: _elm_lang$core$Maybe$Just(
												A2(_elm_lang$core$Basics_ops['++'], 'Error trying to unlock the text: ', errors_str))
										}),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							} else {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							}
						case 'BadPayload':
							var _p30 = A2(_elm_lang$core$Debug$log, 'update error bad payload', _p26._1);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				}
			case 'TextLocked':
				if (_p6._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								write_locked: _p6._0._0.locked ? true : false,
								success_msg: _elm_lang$core$Maybe$Just('text is locked for editing, other instructors can only view the text while it is locked.')
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					var _p31 = _p6._0._0;
					switch (_p31.ctor) {
						case 'BadStatus':
							var _p34 = _p31._0;
							var _p32 = A2(_elm_lang$core$Debug$log, 'update error bad status', _p34);
							var _p33 = _user$project$Text_Decode$decodeRespErrors(_p34.body);
							if (_p33.ctor === 'Ok') {
								var errors_str = A2(
									_elm_lang$core$String$join,
									' and ',
									_elm_lang$core$Dict$values(_p33._0));
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											success_msg: _elm_lang$core$Maybe$Just(
												A2(_elm_lang$core$Basics_ops['++'], 'Error trying to lock the text: ', errors_str))
										}),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							} else {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							}
						case 'BadPayload':
							var _p35 = A2(_elm_lang$core$Debug$log, 'update error bad payload', _p31._1);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				}
			case 'UpdateTextAttributes':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: A3(_user$project$Text_Component$set_text_attribute, model.text_component, _p6._0, _p6._1)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'UpdateTextIntro':
				var _p36 = _p6._0._0;
				if (_p36 === 'text_introduction') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								text_component: A3(_user$project$Text_Component$set_text_attribute, model.text_component, 'introduction', _p6._0._1)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'AddTagInput':
				var _p38 = _p6._1;
				var _p37 = A2(_elm_lang$core$Dict$member, _p38, model.tags);
				if (_p37 === true) {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								text_component: A2(_user$project$Text_Component$add_tag, model.text_component, _p38)
							}),
						_1: _user$project$Ports$clearInputText(_p6._0)
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			case 'DeleteTag':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							text_component: A2(_user$project$Text_Component$remove_tag, model.text_component, _p6._0)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'DeleteText':
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: _user$project$Ports$confirm('Are you sure you want to delete this text?')
				};
			case 'ConfirmTextDelete':
				var _p39 = _p6._0;
				if (_p39 === true) {
					var text = _user$project$Text_Component$text(model.text_component);
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: A2(_user$project$Main$delete_text, model.flags.csrftoken, text)
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
			default:
				if (_p6._0.ctor === 'Ok') {
					var _p41 = _p6._0._0;
					var _p40 = A2(_elm_lang$core$Debug$log, 'text delete', _p41);
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: _elm_lang$navigation$Navigation$load(_p41.redirect)
					};
				} else {
					var _p48 = _p6._0._0;
					var _p42 = _p48;
					switch (_p42.ctor) {
						case 'BadStatus':
							var _p45 = _p42._0;
							var _p43 = A2(_elm_lang$core$Debug$log, 'delete text error bad status', _p45);
							var _p44 = _user$project$Text_Decode$decodeRespErrors(_p45.body);
							if (_p44.ctor === 'Ok') {
								var errors_str = A2(
									_elm_lang$core$String$join,
									' and ',
									_elm_lang$core$Dict$values(_p44._0));
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Native_Utils.update(
										model,
										{
											success_msg: _elm_lang$core$Maybe$Just(
												A2(_elm_lang$core$Basics_ops['++'], 'Error trying to delete the text: ', errors_str))
										}),
									_1: _elm_lang$core$Platform_Cmd$none
								};
							} else {
								return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
							}
						case 'BadPayload':
							var _p46 = A2(_elm_lang$core$Debug$log, 'delete text error bad payload', _p42._1);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
						default:
							var _p47 = A2(_elm_lang$core$Debug$log, 'delete text error bad payload', _p48);
							return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
					}
				}
		}
	});
var _user$project$Main$textJSONtoComponent = function (text) {
	var _p49 = text;
	if (_p49.ctor === 'Just') {
		return A2(
			_elm_lang$core$Task$attempt,
			_user$project$Text_Create$TextJSONDecode,
			function () {
				var _p50 = A2(_elm_lang$core$Json_Decode$decodeValue, _user$project$Text_Decode$textDecoder, _p49._0);
				if (_p50.ctor === 'Ok') {
					return _elm_lang$core$Task$succeed(
						_user$project$Text_Component$init(_p50._0));
				} else {
					return _elm_lang$core$Task$fail(_p50._0);
				}
			}());
	} else {
		return _elm_lang$core$Platform_Cmd$none;
	}
};
var _user$project$Main$tagsToDict = function (tag_list) {
	return A2(
		_elm_lang$core$Task$attempt,
		_user$project$Text_Create$TextTagsDecode,
		_elm_lang$core$Task$succeed(
			_elm_lang$core$Dict$fromList(
				A2(
					_elm_lang$core$List$map,
					function (tag) {
						return {ctor: '_Tuple2', _0: tag, _1: tag};
					},
					tag_list))));
};
var _user$project$Main$textDifficultyDecoder = _elm_lang$core$Json_Decode$keyValuePairs(_elm_lang$core$Json_Decode$string);
var _user$project$Main$retrieveTextDifficultyOptions = function () {
	var request = A2(
		_elm_lang$http$Http$get,
		A2(
			_elm_lang$core$String$join,
			'?',
			{
				ctor: '::',
				_0: _user$project$Config$text_api_endpoint,
				_1: {
					ctor: '::',
					_0: 'difficulties=list',
					_1: {ctor: '[]'}
				}
			}),
		_user$project$Main$textDifficultyDecoder);
	return A2(_elm_lang$http$Http$send, _user$project$Text_Create$UpdateTextDifficultyOptions, request);
}();
var _user$project$Main$init = function (flags) {
	return {
		ctor: '_Tuple2',
		_0: {
			flags: flags,
			mode: _user$project$Text_Create$CreateMode,
			success_msg: _elm_lang$core$Maybe$Nothing,
			error_msg: _elm_lang$core$Maybe$Nothing,
			profile: _user$project$Instructor_Profile$init_profile(flags.instructor_profile),
			text_component: _user$project$Text_Component$emptyTextComponent,
			text_difficulties: {ctor: '[]'},
			tags: _elm_lang$core$Dict$fromList(
				{ctor: '[]'}),
			write_locked: false
		},
		_1: _elm_lang$core$Platform_Cmd$batch(
			{
				ctor: '::',
				_0: _user$project$Main$retrieveTextDifficultyOptions,
				_1: {
					ctor: '::',
					_0: _user$project$Main$textJSONtoComponent(flags.text),
					_1: {
						ctor: '::',
						_0: _user$project$Main$tagsToDict(flags.tags),
						_1: {ctor: '[]'}
					}
				}
			})
	};
};
var _user$project$Main$main = _elm_lang$html$Html$programWithFlags(
	{init: _user$project$Main$init, view: _user$project$Main$view, subscriptions: _user$project$Main$subscriptions, update: _user$project$Main$update})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (csrftoken) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (instructor_profile) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (tags) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (text) {
									return _elm_lang$core$Json_Decode$succeed(
										{csrftoken: csrftoken, instructor_profile: instructor_profile, tags: tags, text: text});
								},
								A2(
									_elm_lang$core$Json_Decode$field,
									'text',
									_elm_lang$core$Json_Decode$oneOf(
										{
											ctor: '::',
											_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
											_1: {
												ctor: '::',
												_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$value),
												_1: {ctor: '[]'}
											}
										})));
						},
						A2(
							_elm_lang$core$Json_Decode$field,
							'tags',
							_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$string)));
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'instructor_profile',
					A2(
						_elm_lang$core$Json_Decode$andThen,
						function (id) {
							return A2(
								_elm_lang$core$Json_Decode$andThen,
								function (username) {
									return _elm_lang$core$Json_Decode$succeed(
										{id: id, username: username});
								},
								A2(_elm_lang$core$Json_Decode$field, 'username', _elm_lang$core$Json_Decode$string));
						},
						A2(
							_elm_lang$core$Json_Decode$field,
							'id',
							_elm_lang$core$Json_Decode$oneOf(
								{
									ctor: '::',
									_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
									_1: {
										ctor: '::',
										_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$int),
										_1: {ctor: '[]'}
									}
								})))));
		},
		A2(_elm_lang$core$Json_Decode$field, 'csrftoken', _elm_lang$core$Json_Decode$string)));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _user$project$Main$main !== 'undefined') {
    _user$project$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);
