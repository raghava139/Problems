function Insertion(arr){
    console.log('insertion',arr);

    for (var i=1;i<arr.length;i++){
            var currentVal = arr[i];
            for(var j = i-1; j>=0 && arr[j]>currentVal; j-- ){
                arr[j+1] = arr[j];
            }
            arr[j+1] = currentVal;
            console.log('array',arr);
        }
        return arr;
}
Insertion([2,1,9,76,4]);

// Time Complexity 
// big ---> O(n^2)