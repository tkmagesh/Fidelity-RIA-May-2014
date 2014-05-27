function getSpinner(){
	var count = 0;
	var obj = {
	   up : function(){
	      count++;
	      return count;
	   },
	   down : function(){
	       count--;
	       return count;
	   }
	}
	return obj;
}