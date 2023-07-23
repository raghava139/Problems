// Write a function called collectStrings which accepts an Object
// and returns an array of all the values in the object that have a
// typeof string

function collectStrings(obj) {
  console.log("collection strings", obj);

  let MyStrings = [];
    function gatherStrings(obj){

        for(let key in obj){
            console.log(obj[key])
            if(typeof obj[key] === "string"){
                MyStrings.push(obj[key]);
            }
            else if(typeof obj[key] === "object" && obj[key] !== null){
                gatherStrings(obj[key]);
            }
        }
    }
    gatherStrings(obj);
    return MyStrings;

}
const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

collectStrings(obj);
