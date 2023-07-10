export function mean(arr: { data: number }[]) {
  // ex : mean of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].data;
  }
  return total;
}

export function median(arr: { data: number }[]) {
  // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
  var median = 0,
    numsLen = arr.length;
  arr.sort();
  if (numsLen % 2 === 0) {
    // is even
    // average of two middle numbers
    median =
      (arr[numsLen / 2 - 1].data + arr[numsLen / 2].data) / 2;
  } else {
    // is odd
    // middle number only
    median = arr[(numsLen - 1) / 2].data;
  }
  return median;
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
