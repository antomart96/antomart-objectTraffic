
//  * FOR CLONING

const template = document.querySelector('#cards article ');
for (const patientData of patientArray) {
     // 1. Create a clone of the model
    const cardClone = template.cloneNode(true);
     // 2. Put the clone where I want (usually the same parent)
    document.querySelector('#cards').append(cardClone);
     // 3. Customize
    const backgroundpictureUrl = patientData.pictureUrl;
    // here i show that i can do the background-image but i can't fiw the visual effect with my .harvest so i put in comment i do with image
    // cardClone.querySelector(".victims").style.backgroundImage = "url('" +backgroundpictureUrl + "' )";
    cardClone.querySelector('img').src = patientData.pictureUrl;
    cardClone.querySelector('.harvests').style.display = "block";
    if (patientData.quantity >0 ) {
        cardClone.querySelector('.harvests').innerText = "IN STOCK";
        cardClone.querySelector('.harvests').style.background = "#FA6980";
    }else{
        cardClone.querySelector('.harvests').innerText = "SOON";
        cardClone.querySelector('.harvests').style.background = "#A6ADB4";
    }
} 
//remove the mother element
template.remove();