// calculator

// variables

const body = document.body
const keys = document.querySelectorAll('.key')
const imgs = document.querySelectorAll('.key-img')
const equalsKey = document.querySelector('#key-equals')
const clearKey = document.querySelector('#key-clear')
let displayValue = document.querySelector('.screen-operation')
let answerBox = document.querySelector('.screen-result')




// text outpur

keys.forEach(key => key.addEventListener('click', () =>{
    if(displayValue.innerText.length < 12){
        displayValue.append(key.dataset.value)
    }
})
)



// operation

function operate(){
    let sol = eval(displayValue.innerText)
    if (sol == Infinity){
        answerBox.innerText = 'lmao'
        displayValue.innerText = ''
    }else if(sol % 1 != 0){
        answerBox.innerText = sol.toFixed(3)
        displayValue.innerText = ''
        console.log(sol)
    }
    else{
        answerBox.innerText = sol
        displayValue.innerText = ''
        console.log(sol)
    }
console.log('length: ' + displayValue.innerText.length)
}


equalsKey.addEventListener('click', () => operate())


// clear

function clear(){
    answerBox.innerText = '0'
    displayValue.innerText = ''
}

clearKey.addEventListener('click', () => clear())


// animation

keys.forEach(key => key.addEventListener('click', () => key.classList.add("chosen")))

// (creating a function which emoves that class)
function removeTransition(e) {

    if (e.propertyName !== 'transform') return 
    this.classList.remove('chosen')
}

// removing the transition once it has transitioned

keys.forEach(key => key.addEventListener('transitionend' , removeTransition))

