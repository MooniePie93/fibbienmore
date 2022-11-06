function fib(num) {
    let fibRay = [0,1];
   for(let i = 2; i <= num; i++){    
    fibRay[i] = fibRay[i-1] + fibRay[i-2];
 } 
  console.log(fibRay);
     return fibRay[num];
 }
 let fibNum = fib(6);
 console.log(fibNum);
 