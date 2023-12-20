let count = 0;
function getData() {
    console.log('debouncing------------------->',count++);
}

const debounce = function (fn, d) {
    let timer;
    return function () {
        console.log('previous-timer<<<',timer)
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData()
        }, d);
        console.log('current-timer>>>',timer)
    }
}

const betterfunction = debounce(getData, 1000)