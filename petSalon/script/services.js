let newServices = {
    services:[]
}
let inputDescription;
let inputPrice;

function services(description,price){
    this.description = description;
    this.price = price;
}

function register(){
    let newService = new services(inputDescription.value, inputPrice.value);
    if(isValid(newService)){
        saveItem(newService);
        newServices.services.push(newService);
        displayServices();
        readItem();
        clearForm();
    }

}
function displayItem(){
    let item = readItems();
}

function isValid(services){
    inputDescription.classList.remove("alert-error");
    inputPrice.classList.remove("alert-error");
    if(!services.description || !services.price){
        if(!services.description) inputDescription.classList.add("alert-error");
        if(!services.price) inputPrice.classList.add("alert-error");
        return false;
    }

    return true;
}

function clearForm(){
    inputDescription.value=" ";
    inputPrice.value=" ";
}

function init(){

    displayServices();
    readItem();

    inputDescription = document.getElementById("txtDescription");
    inputPrice = document.getElementById("txtPrice");
}
window.onload=init;