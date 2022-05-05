function Whitespace(n){
  let c= n.replace(/ /g, "");
  return c.length;
}
console.log(Whitespace(" !  Lorem Ipsum  ! "));