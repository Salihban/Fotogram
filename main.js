const imgSet = [
"./assets/img/pic1.jpg",
"./assets/img/pic2.jpg",
"./assets/img/pic3.jpg",
"./assets/img/pic4.jpg",
"./assets/img/pic5.jpg",
"./assets/img/pic6.jpg",
"./assets/img/pic7.png",
"./assets/img/pic8.jpg",
"./assets/img/pic9.jpg",
"./assets/img/pic10.jpg",
"./assets/img/pic11.jpg",
"./assets/img/pic12.jpg",
];

const dialogRef = document.getElementById("imgs-window");
const contentRef = document.getElementById('img-collectiv');
const ondialog = document.getElementById('dialogImg');
const counterRef = document.getElementById('counter');
const titelRef = document.getElementById('imgTitel');
const refList = document.getElementsByClassName('imgSet');
let currentNow = 0;



function render() {
    
    for(let i = 0; i < imgSet.length; i++) {
        contentRef.innerHTML += /*html*/ `
            <img onclick="openDialog(${i})" src="${imgSet[i]}" alt="">
        `;
    }
}

function imgTitel(){
for(let j = 0; j < refList.length; j++){
    titelRef.innerHTML += /*html*/ `
            <p></p>
        `;
}
}

function bRight() {
    currentNow++;
if (currentNow >= imgSet.length){
    currentNow = 0;
}

dialogImg.innerHTML = `<img src="${imgSet[currentNow]}">`;
}

function bLeft() {
    currentNow--;
if (currentNow < 0){
    currentNow = 11;
}

dialogImg.innerHTML = `<img src="${imgSet[currentNow]}">`;
}


function openDialog(k) {
    dialogImg.innerHTML = `<img src="${imgSet[k]}">`;
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}
