function Bubblesort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length; i++) {
        let x=arr[i]
        let y=arr[i+1]
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        let CheckDUp=arr[i+1];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        let check=arr[i+1]
        swapped = true;
      }
    }
  } while (swapped);
}
const arr = [8, 20, -2, 4, -6];
Bubblesort(arr);
console.log(arr);

// timecomplexity
// Big-0= 0(n^2)

