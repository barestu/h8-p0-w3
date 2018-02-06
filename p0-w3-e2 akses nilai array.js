function balikString(input) {
  var output = '';
  
  for(var i = input.length - 1; i >= 0; i--) {
    output += input[i];
  }
  
  return output;
}

var input = 'Hello world!';

console.log(balikString(input));