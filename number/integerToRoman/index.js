/**
 * Method to convert given number value to equivalent Roman number
 * @param {*} num : number
 * @returns : string
 */
function integerToRoman(num) {
  /**
   * validattion check. Check if the given number is in range else return error
   * Roman number only supports numbers from 1-3999
   */
  if (num <= 0 || num > 3999) {
    return "Invalid input. Roman numerals are in the range of 1-3999.";
  }
  /**
   * create a list of standard values starting from 1-1000 and corrsponding roman symbol
   */
  const romanNumeral = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  // Consider initial result as ""
  let result = "";
  /**
   * Loop through the standard values list
   */
  for (let i = 0; i < romanNumeral.length; i++) {
    // check if the num is greater or equal to the current roman value
    while (num >= romanNumeral[i].value) {
      // add the current roman symbol to the result
      result = result + romanNumeral[i].symbol;
      // Subtract the current value from the given number
      num = num - romanNumeral[i].value;
    }
  }
  return result;
}
console.log(integerToRoman(1999));
