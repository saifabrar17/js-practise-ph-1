const string = 'hello hpw are you';

function stringReverse(text){
  let reverse = '';
  for(const letter of text){
    console.log(letter);
    reverse = letter + reverse;
  }
return reverse;
}

const reversed = stringReverse(string);
console.log(reversed);