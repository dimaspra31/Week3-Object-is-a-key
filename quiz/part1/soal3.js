function cariMedian(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const length = sorted.length;

  if (length % 2 === 0) {
    return (sorted[length / 2 - 1] + sorted[length / 2]) / 2;
  } else {
    return sorted[Math.floor(length / 2)];
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
