function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this,n);
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments,1));
}

/*function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array) return add.apply(this,n);
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}*/

/*function add(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (n instanceof Array){
			var result = 0;
			for(var i=0;i<n.length;i++)
				result += parseArg(n[i]);
			return result;
		}
		return isNaN(n) ? 0 : parseInt(n,10);
	}
	var result = 0;
	for(var i=0;i<arguments.length;i++)
		result += parseArg(arguments[i]);
	return result;
}
*/