function Factorial(n){
  if(n>0){
  return n*Factorial(n-1);
  }
  else{
    return 1;
  }
}
let n=5;
console.log(Factorial(n));