



                // * Filter Section
//all
document.querySelector('#all').addEventListener('click', function(){
         //The currently "selected" button is in the accent colo
    document.querySelector('.selected').classList.remove('selected');   
    this.classList.add('selected');
showAll();
})

function showAll(){
    const allArticle = document.querySelectorAll('#cards article')
    for (const el of allArticle) {
        el.style.display="block";
    }
}
//IN STOCK
document.querySelector('#inStock').addEventListener("click", showInStock);
function showInStock() {
     //The currently "selected" button is in the accent color
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');

    const inStockArticle = document.querySelectorAll('#cards article');
    for (const inStock of inStockArticle) {
        const inStockElement = inStock.querySelector('.harvests');
        if (inStockElement.innerText === "IN STOCK") {
            inStock.style.display = 'block';
        } else {
            inStock.style.display = 'none';
        }
    }
}

//Soon
document.querySelector('#soon').addEventListener("click", showSoon);
function showSoon() {
     //The currently "selected" button is in the accent colo
    document.querySelector('.selected').classList.remove('selected');
    this.classList.add('selected');

    const soonArticle = document.querySelectorAll('#cards article');
    for (const soon of soonArticle) {
        const soonElement = soon.querySelector('.harvests');
        if (soonElement.innerText === "SOON") {
            soon.style.display = 'block';
        } else {
            soon.style.display = 'none';
        }
    }
}