function MergeSort(arr1,arr2){
    console.log('mergeSort');

    let results = [];
    let i = 0;
    let j = 0;

    while(i<arr1.length && j<arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j]);
        j++;
    }
    console.log('results',results);
    return results;
}
// MergeSort([1,15,13],[2,14,99,100]);

function MergeSortRecursive(arr){
    if(arr.length <=1) return arr; 
        let mid =Math.floor(arr.length/2);
        let left = MergeSortRecursive(arr.slice(0,mid));
        let right = MergeSortRecursive (arr.slice(mid));
        return  MergeSort(left,right);
}
MergeSortRecursive([10,24,76,73]);

//time complexity
// O(n log n)