


const form = document.querySelector('form');
form.addEventListener("submit", submission);
function submission(event) {
    // block the form submission
    event.preventDefault();
    validateForm(); // call function from the oder file
    if(dateValid && nameSpace){
        form.style.display = "none";
        const newText = document.createElement('p');
        newText.textContent = "Thanks for your trust, you can carry on now...";
        document.querySelector("#botMain").append(newText);
    }else{
        alert("An error occured.");
    }

}



