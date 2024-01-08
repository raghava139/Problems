//Event Delegation in Js 
//Involves attaching a single event listener to a common ancestor (usually a parent element),
// instead of individual child elements.

// This allows for efficient handling of events on multiple elements, reducing the need for numerous(many) evenet listeners
// document.querySelector('#category').addEventListener('click',(e)=>{
//     console.log('event-->',e)
//     // console.log('event-->',e.target.id)
//     // console.log('event-->',e.target.tagName)
//     window.location.href =  '/' + e.target.id;
// })


//using data attribute
// In the context of event delegation,
// data attributes are commonly use to store info about the elements that can be retrived later when handling an event.

document.querySelector('#form').addEventListener('keyup',(e)=>{
    // console.log('keyup--->',e.target)
    // console.log('keyup--->',e)
    // console.log('keyup--->',e.target.id)
    // console.log('keyup--->',e.target.dataset?.uppercase)

    if(e.target.dataset?.uppercase != undefined){
        e.target.value= e.target.value.toUpperCase();
        console.log('keyup--->',e.target.value)
        console.log('keyup--->',e.target.dataset)
    }
})