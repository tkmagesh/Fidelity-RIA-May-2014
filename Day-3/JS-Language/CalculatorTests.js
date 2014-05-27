$(function(){
	test("Should be able to add two numbers",function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//act
		var actualResult = add(number1,number2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add two numbers in string format",function(){
		//arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//act
		var actualResult = add(number1,number2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should treat non numeric convertibles as zero",function(){
		//arrange
		var number1 = "abc",
			number2 = "20",
			expectedResult = 20;

		//act
		var actualResult = add(number1,number2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should accept functions returing number as arguments",function(){
		//arrange
		var f1 = function(){ return 10},
			f2 = function(){ return 20},
			expectedResult = 30;

		//act
		var actualResult = add(f1,f2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should accept functions returing number in string format as arguments",function(){
		//arrange
		var f1 = function(){ return "10"},
			f2 = function(){ return "20"},
			expectedResult = 30;

		//act
		var actualResult = add(f1,f2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should accept only one argument",function(){
		//arrange
		var number1 = 10,
			expectedResult = 10;

		//act
		var actualResult = add(number1);

		//assert
		return actualResult === expectedResult;
	});
	test("Should return 0 when invoked with no argumens",function(){
		//arrange
		var expectedResult = 0;

		//act
		var actualResult = add();

		//assert
		return actualResult === expectedResult;
	});
	test("Should accept varying length of arguments",function(){
		//arrange
		var expectedResult = 100;

		//act
		var actualResult = add(10,20,30,40);

		//assert
		return actualResult === expectedResult;
	});

	test("Should be able to add an array of numbers",function(){
		//arrange
		var numbers = [10,20,30,40],
			expectedResult = 100;

		//act
		var actualResult = add(numbers);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add functions returning an array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20]; },
			f2 = function(){ return [30,40]; },
			expectedResult = 100;

		//act
		var actualResult = add(f1,f2);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add array of functions returning an array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20]; },
			f2 = function(){ return [30,40]; },
			fns = [f1,f2],
			expectedResult = 100;

		//act
		var actualResult = add(fns);

		//assert
		return actualResult === expectedResult;
	});
	test("Should be able to add a nested array of numbers",function(){
		//arrange
		var numbers = [10,[20,[30,[40]]]];
			expectedResult = 100;

		//act
		var actualResult = add(numbers);

		//assert
		return actualResult === expectedResult;
	});

});