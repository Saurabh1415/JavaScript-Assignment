function Series(n){
  let sum =2;
    for (i=2;i<=n;i++)
    {
      sum=sum+(2*i);
    }
  return sum;
}
console.log(Series(5));