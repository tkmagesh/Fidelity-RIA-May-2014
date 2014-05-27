function isPrime(n){
   if (typeof isPrime[n] !== "undefined"){
       console.log("from cache....");
       return isPrime[n];
   }
   isPrime[n] = true;
   for(var i=2;i<=Math.sqrt(n);i++)
       if (n % i === 0){
            isPrime[n] = false;
            break;
       }
   console.log("Freshly brewed....");
   return isPrime[n];
}