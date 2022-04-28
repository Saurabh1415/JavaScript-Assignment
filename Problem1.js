function Factorial(n){
 let f=1;
  for(i=n;i>=1;i--)
  {
    f*=i;
  }
  return f;
}
let n=5;
f= Factorial(n);
console.log(f);