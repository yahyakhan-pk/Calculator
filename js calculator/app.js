
function btnClick(f) {
   var getInput = document.getElementById('input')
   getInput.value += f
}

function equalsTo() {
    var getInput = document.getElementById('input')
    getInput.value = eval(getInput.value)
}

function allClr() {
    var getInput = document.getElementById('input')
    getInput.value = ''
}

function clr() {
    var getInput = document.getElementById('input')
    getInput.value = getInput.value.slice(0, -1)
}