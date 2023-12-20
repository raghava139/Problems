var btnThroattling = document.getElementById('btnThroat')

window.addEventListener('resize',throattlingfunct())

function resizefunct() {
    console.log("resized-->")
}
function throattlingfunct() {

    let flag = true;
    return function () {
        if (flag) {
            resizefunct();
            flag = false;
            setTimeout(()=>{
                flag = true;
            },1000)
        }
    }
}