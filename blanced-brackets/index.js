function blancedBrackets(brString) {
  let stack = [];
  const bracketMapping = { "{": "}", "[": "]", "(": ")" };
  for (let i = 0; i < brString.length; i++) {
    if (bracketMapping[brString[i]]) {
      stack.push(bracketMapping[brString[i]]);
    } else {
      if (brString[i] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return stack[stack.length - 1];
      }
    }
  }
  return true;
}
console.log(blancedBrackets("{[(]}"));
