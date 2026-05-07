let imgSet = [
""
];

function render() {
    let contentRef = document.getElementById('img-collectiv');
    for(let i = 0; i < imgSet.length; i++) {
        contentRef.innerHTML += imgSet
    }
}