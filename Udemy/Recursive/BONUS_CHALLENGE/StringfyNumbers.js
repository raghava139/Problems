// write a function called stringifyNumbers which takes in an object 
// and finds all the values which are numbers and converts them to strings.
// Recursion would be a great way to solve this!

function stringifyNumbers(obj){
    console.log('stringify Numbers',obj);
        const result = {};

        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                const value = obj[key];

                console.log('obj',obj);
                console.log('key',key);
                console.log('value',value);
            // Check if the value is a number
                if(typeof value === 'number'){
            // If it's a number, convert it to a string and store it in the result object
                    result[key] = value.toString();
                }
                else if(typeof value === 'object' && !Array.isArray(value)){
            // If the value is an object (but not an array), make a recursive call
                    result[key] = stringifyNumbers(value);
                }
                else{
            // For all other cases, simply copy the value to the result object
                    result[key] = value;
                }
            }
        }
        console.log('result',result);
        return result;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
stringifyNumbers(obj);