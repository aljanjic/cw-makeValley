function makeValley(arr) {

  if (!Array.isArray(arr)) throw new Error('Please provide an Array as an input')

  // // Find the bottom
  // let bottom = Math.min(...arr)
  // // console.log('Bottom: ' ,bottom)

  // // Sort an array from max to min
  // arr.sort((a,b) => b - a );

  // // First value goest to lwing[0] second to rwing[last]
  // let result = [];
  // let leftIndex = 0;
  // let rightIndex = arr.length-1;

  // for (let i = 0; i < arr.length; i += 2){
  //   result[leftIndex] = arr[i];
  //   result[rightIndex] = arr[i+1];
  //   leftIndex++;
  //   rightIndex--;
  // }

  // if (result.length % 2 !== 0){
  //   let middle = Math.floor(result.length / 2);
  //   result[middle] = bottom;
  // }

  // return result;


  // Sort array 
  arr.sort((a,b) => b - a);

  // Create a leftWing and rightWing
  let leftWing = [];
  let rightWing = [];

  // Loop the sorted array and allocate respective values
  for (let i = 0; i < arr.length; i++){
    i % 2 !== 0 ? rightWing.push(arr[i]) : leftWing.push(arr[i]);
  }

  // Reverse right array
  rightWing.reverse()

  // Concat the arrays and return them
  return leftWing.concat(rightWing)

}

module.exports = makeValley;
