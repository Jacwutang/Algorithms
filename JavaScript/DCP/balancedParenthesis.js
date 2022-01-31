//Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced.


function isBalanced(string) {
  let stack = [];
  let hash = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for(let char of string) {
      if (['(', '[', '{'].includes(char)) {
        stack,push(char);
      }
      else if ([')', '}', ']'].includes(char)){
        if(stack.length === 0){
          return false;
        }

        if (hash[stack.pop()] !== char ) {
          return false;
        }
      }
  }

  if (stack.length > 0) {
    return false;
  } else{
    return true;
  }

}
