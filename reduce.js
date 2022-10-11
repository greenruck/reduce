const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

function vowelCount(str){
    const vowels = "aeiou";
    return str.split('').reduce(function(acc,next){
        let lowerCased = next.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(acc[lowerCased]){
                acc[lowerCased]++;
            } else {
                acc[lowerCased] = 1;
            }
        }
        return acc;
    }, {});
}
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc, next, idx){
        arr[idx][key] = value;
        return acc;
    }, arr);
};

let scores = [27, 44, 64, 70, 75, 86, 91];

const splitScores = scores.reduce(function(accumulator, nextValue){
  const fail=(nextValue < 70);
  const pass=(nextValue >=70);
  if(fail){
    accumulator[0].push(nextValue);
  }else{
    accumulator[1].push(nextValue);
  }
  return accumulator;
  
},[[],[]]);