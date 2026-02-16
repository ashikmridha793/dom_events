console.log('added extaranl file')
// option 2 click event
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}

function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option 3 getEliemntById and then set onclick
const btnMakeBlue = document.getElementById('btn-blue') ;
// console.log(btnMakeBlue)

btnMakeBlue.onclick = function makeBlue (){
    document.body.style.backgroundColor = 'skyBlue'
}


// option 4 diffarent method
const btnMakePurple = document.getElementById('btn-make-purple');
// console.log('make purple', btnMakePurple)
btnMakePurple.onclick = makePurple;

function makePurple (){
    document.body.style.backgroundColor = 'purple'
}
// 

document.getElementById('btn-green').addEventListener('click', function makeGreen(){
    // console.log()
    document.body.style.backgroundColor = 'green'
})

document.getElementById('btn-gold').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})