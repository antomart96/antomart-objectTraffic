
// * FOR


const nameInput = document.querySelector('#name');
const dateInput = document.querySelector('#date');
let nameSpace = false; 
let dateValid = false;

function validateForm(){
    // block the form submission
    // Name
    const nameValue = nameInput.value;
    nameSpace = nameValue.indexOf(' ') > 0; //check if there is a space after the first 
    if(nameSpace){
        nameInput.style.borderColor="green";
    }else{
        nameInput.style.borderColor="red";
    }

    //date
    const dateValue= dateInput.value;
    dateValid = dateValue.length>=4; //check if the name has at least 4 characters 
    if(dateValid){
        dateInput.style.borderColor="green"
    }else{
        dateInput.style.borderColor="red"
    }
} 

