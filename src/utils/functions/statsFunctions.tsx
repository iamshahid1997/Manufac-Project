export function mean(arr: { data: number }[]) {
  // ex : mean of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
  let total = 0;
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].data;
  }
  return total/arr.length;
}

export function median(arr: { data: number }[]) {
  const middle = (arr.length + 1) / 2;
      
        // Avoid mutating when sorting
        const sorted = [...arr].sort((a, b) => a.data - b.data);
        const isEven = sorted.length % 2 === 0;
      
        return isEven ? (sorted[middle - 1.5].data  // is even , average of two middle numbers
            + sorted[middle - 0.5].data) / 2 :
            sorted[middle - 1].data;  // is odd ,middle number only

}

export function mode(arr: { data: number }[]) {
  // as result can be bimodal or multimodal,
  // the returned result is provided as an array
  // ex: mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
  var modes = [],
    count = [] as number[],
    i,
    number,
    maxIndex = 0;
  for (i = 0; i < arr.length; i += 1) {
    number = arr[i].data;
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }
  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }
  return modes;
}
