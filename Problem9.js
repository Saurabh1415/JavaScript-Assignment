function Quad(a,b,c){
  let x=(Math.sqrt((b*b)-4*a*c));
  console.log((-b+x)/2*a);
  console.log((-b-x)/2*a);
}
console.log(Quad(1,5,6));
