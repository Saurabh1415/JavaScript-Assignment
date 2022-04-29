function Months(n){
  var a=[31,28,31,30,31,30,31,31,30,31,30,31];
  if(n<=12)
  {
    return a[n-1];
  }
  else{
    console.log("ERROR");
  }
}
n=window.prompt("enter a month number:");
console.log(Months(n));