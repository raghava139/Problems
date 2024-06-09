let Fruits = ['banana', 'apple', 'manago', 'apple'];
function removeDuplicates(arr) {
    console.log('Remove Duplicates');

    let uniques = [];

    arr.forEach((Somefru) => {
        if (!uniques.includes(Somefru)) {
            uniques.push(Somefru)
        }
    })
    console.log('RemoveDup', uniques);
    return uniques;

}
removeDuplicates(Fruits);