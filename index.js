let btn = document.querySelector('[data-c]')

let display = document.getElementById('result')

const trueandfalse = [true, false, true, false, true, true, false, false,true];


const trueCount = trueandfalse.filter(value => value === true).length;

btn.addEventListener('click',function(){
    display.innerText = `Number of true values: ${trueCount}`
})