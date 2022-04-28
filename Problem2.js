function Cube(n){
  let c=1;
  for(i=3;i>=1;i--)
    {
      c=c*n;
    }
  return c;
}
n=2;
c=Cube(n);
console.log(c);