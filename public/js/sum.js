function sum()
{
	var retSum = 0;
	//confirm(arguments.length + ',' + new Array(arguments).toString());
	for(var i = 0; i < arguments.length; i++)
	{
		var arg = arguments[i];
		if(typeof arg === 'number')
		{
			retSum += arg;
		}
	}
	return retSum;
}
