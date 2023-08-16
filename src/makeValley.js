function makeValley(arr) {

  if (!Array.isArray(arr)) throw new Error('Please provide an Array as an input')

  // Find the bottom
  let bottom = Math.min(...arr)
  // console.log('Bottom: ' ,bottom)

  // Sort an array from max to min
  arr.sort((a,b) => b - a );
  console.log('Sorted: ', arr)

  // First value goest to lwing[0] second to rwing[last]
  let result = [];
  let leftIndex = 0;
  let rightIndex = arr.length-1;

  for (let i = 0; i < arr.length; i += 2){
    result[leftIndex] = arr[i];
    result[rightIndex] = arr[i+1];
    leftIndex++;
    rightIndex--;
    console.log('i: ', i, 'Result: ', result)
  }

  console.log('Result: ', result)

  if (result.length % 2 !== 0){
    let middle = Math.floor(result.length / 2);
    result[middle] = bottom;
  }

  return result;

}

module.exports = makeValley;
