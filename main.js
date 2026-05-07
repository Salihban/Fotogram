let imgSet = [
    'assets\img\ 3c416b08502bf2ed10a304bdce5c1c782b99c40d.jpg',
    'assets\img\ 4ac67c63bfc2b6a80cca4919df91a1e498ec4c07.jpg',
    'assets\img\ 8bc8dae8f655d7cac8d770f66d76f62367f5b5df.jpg',
    'assets\img\ 872f2a95ab48c88b865e4f11d2e061a802987c88.jpg',
    'assets\img\ 93265accae6c295655b8fd3cc1113f8c76b70797.jpg',
    'assets\img\ 714707b1ea80f159dacba47280dc1091bbebb9c7.jpg',
    'assets\img\ 0872285883cee475f9533508e645f19ef0939ae8.png',
    'assets\img\ bbd3479cb0c36ecd872f4526275e11a893e50107.jpg',
    'assets\img\ cc1d7f8870c4b98e849a8e36c6c397e0f71486f9.jpg',
    'assets\img\ dc4b11f7f36deb9409236c10ebcd6c849b00f447.jpg',
    'assets\img\ f1ba9135a20ea8343ad3d5732c6f8a541ec455b5.jpg',
    'assets\img\ f2b056a08d5edba809ca216fa6aa66a4bb612ea8.jpg',
];

function render() {
    let contentRef = document.getElementById('img-collectiv');
    for(let i = 0; i < imgSet.length; i++) {
        contentRef.innerHTML += imgSet
    }
}