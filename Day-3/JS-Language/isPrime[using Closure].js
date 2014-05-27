function getPrimeFinder(){
  var cache = {};
  function isPrime(n){
     if (typeof cache[n] !== "undefined"){
         console.log("from cache....");
         return cache[n];
     }
     cache[n] = true;
     for(var i=2;i<=Math.sqrt(n);i++)
         if (n % i === 0){
              cache[n] = false;
              break;
         }
     console.log("Freshly brewed....");
     return cache[n];
  }
  return isPrime;
}