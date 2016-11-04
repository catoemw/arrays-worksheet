var arr = [10, 3, 6, 12];

for (var i = 0; i < arr.length - 1; i++) {
	arr[i] = arr[i] * arr[i + 1];
}

console.log(arr);