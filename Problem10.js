function Loki(n,arr){
  let evenVal = [];
  for(let i=0;i<n;i++){
    if(i%2==0)
    {
      evenVal.push(arr[i]);
    }
    else{
      continue;
    }
  }
  evenVal.sort((a,b)=> a-b);
  for(let i=0;i<n;i++)
  {
    if(i%2==0)
    {
      arr[i] = evenVal.shift();
    }
    else{
      continue;
    }
  }
  return arr; 
}
console.log(Loki(5,[3, 9, 1, 44, 6]));