// function closures() {

//   var a = 10;
//   console.log('out',a);
//   function y() {
//     var z =20;
//     console.log('f-a',a);
//   }
//   return y
  
// }
// var test = closures();

// console.log(test());

// corners

// function z(){
//     var a=20;
//     function inside(){
//         console.log(a);
//     }
//     a=499
//     return inside;
// }
// var test = z();
// console.log(test())
function Long(){
    function z(){
        var a=20;
        function inside(){
            var b=100;

            function insideanother(){       
                console.log(a,b);
            }
            insideanother();
        }
        inside();
    }
    z();
    
}
var test = Long()
