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
const contentRef = document.getElementById('img-collectiv');

function render() {
    
    for(let i = 0; i < imgSet.length; i++) {
        contentRef.innerHTML += /*html*/ `
            <img src="${imgSet[i]}" alt="">
        `;
    }
}


const dialogRef = document.getElementById("imgs-window");

function openDialog() {
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}


