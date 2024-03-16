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
        newServices.services.push(newService);
        displayServices();
        clearForm();
    }

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

    let service1 = new services("Grooming", 25);
    let service2 = new services("Vaccines", 50);
    let service3 = new services("Hotel", 100);
    newServices.services.push(service1, service2, service3);
    displayServices();

    inputDescription = document.getElementById("txtDescription");
    inputPrice = document.getElementById("txtPrice");
}
window.onload=init;