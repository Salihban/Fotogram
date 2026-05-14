const imgSet = [
"pic1.jpg",
"pic2.jpg",
"pic3.jpg",
"pic4.jpg",
"pic5.jpg",
"pic6.jpg",
"pic7.png",
"pic8.jpg",
"pic9.jpg",
"pic10.jpg",
"pic11.jpg",
"pic12.jpg",
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
            <img onclick="openDialog(${i})" src="./assets/img/${imgSet[i]}" alt="">
        `;
    }
}

function dialogContent(index){
    dialogImg.innerHTML = `<img src="./assets/img/${imgSet[index]}">`;
    titelRef.innerHTML = `<p>${imgSet[index]}</p>`;
    counterRef.innerHTML =`<p>${index+1}/${imgSet.length}</p>`;
}

function bRight() {
    currentNow++;
if (currentNow >= imgSet.length){
    currentNow = 0;
}
    dialogContent(currentNow); 
}

function bLeft() {
    currentNow--;
if (currentNow < 0){
    currentNow = 11;
}
    dialogContent(currentNow); 
}



function openDialog(k) {
    dialogContent(k); 
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}
