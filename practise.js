const names = ['abul', 'kabul', 'sabul', 'babul', 'abul', 'dabul', 'sabul', 'kabul', 'babul'];
function removeDuplicate(names){
  const unique = [];
  for (const element of names){
    // console.log(element);
    if(unique.indexOf(element) == -1){
      unique.push(element);
    }
  }
  return unique;
}




const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);