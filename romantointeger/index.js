function romanToInteger(argRoman) {
  const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result=0;
  let previousValue = 0;
  for(let i=argRoman.length-1; i>=0; i--){
    let currentValue=romanNumeral[argRoman[i]];
    if(currentValue>=previousValue){
        result+=currentValue;
    }else{
        result-=currentValue;
    }
    previousValue=currentValue;
  }
  return result;
}
console.log (romanToInteger('IX'));
