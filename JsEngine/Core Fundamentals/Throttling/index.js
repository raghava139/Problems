console.log('throttling')


// Throttling
// Throttling is a technique that limits how often a function can be called in a given period of time. 
// It is useful for improving the performance and responsiveness of web pages that have event listeners that trigger heavy or expensive operations, 
// such as animations, scrolling, resizing, fetching data, etc.


// example for performance issue
// window.addEventListener('resize',expensive)

// function expensive(){
//     console.log('great')
// }

// solving by using throttling
window.addEventListener('resize', betterExpensive())

function betterExpensive() {
    let flag = true;
    return function (){
        if(flag){
            testfunct()
            flag = false;
            setTimeout(()=>{
                console.log('timeout')
                flag =true;
            },1000)
        }
    }

}

function testfunct(){
    console.log("testing")
}
