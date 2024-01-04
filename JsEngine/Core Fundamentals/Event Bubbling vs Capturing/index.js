
//bubbling ---> Up
//capture trickling default false
// document.getElementById('grandparent').addEventListener('click',function(){
//     console.log('grandparent');
// })
// document.getElementById('parent').addEventListener('click',function(){
//     console.log('parent');
// })
// document.getElementById('child').addEventListener('click',function(){
//     console.log('child');
// })

//capturing --> down
// document.getElementById('grandparent').addEventListener('click',function(){
//     console.log('grandparent');
// },true)
// document.getElementById('parent').addEventListener('click',function(){
//     console.log('parent');
// },true)
// document.getElementById('child').addEventListener('click',function(){
//     console.log('child');
// },true)

// bubbling and capturing
// document.getElementById('grandparent').addEventListener('click',function(){
//     console.log('grandparent');
// },false)
// document.getElementById('parent').addEventListener('click',function(){
//     console.log('parent');
// },true)
// document.getElementById('child').addEventListener('click',function(){
//     console.log('child');
// },false)


// Performance Issues can be resolve using e.stopPropagation();
// e.stopPropagation() will prevent all capturing and bubbling phases
// e.stopPropogation();
document.getElementById('grandparent').addEventListener('click',function(e){
    console.log('grandparent');
    e.stopPropagation();
},false)
document.getElementById('parent').addEventListener('click',function(e){
    console.log('parent');
    e.stopPropagation();
},false)
document.getElementById('child').addEventListener('click',function(e){
    console.log('child');
    e.stopPropagation();
},false)