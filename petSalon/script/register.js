let petSalon = {
    name:"The Fashion pet",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"San Diego",
        zip:"12345"
    },
    pets:[]
}
let inputName;
let inputAge;
let inputGender;
let inputType;
let inputBreed;
let inputService;

function pet(name, age, gender, type, breed, service){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type = type;
    this.breed = breed;
    this.service = service;
}
function calculateAverageAge(){

    let total=0;
    for(let i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("petAverageAge").innerHTML+=`<p>${total}</p>`;
}
function register(){
    let newPet = new pet(inputName.value,inputAge.value,inputGender.value,inputType.value,inputBreed.value,inputService.value);
    if(isValid(newPet)){
    petSalon.pets.push(newPet);
    //displayCards();
    displayRows();
    clearForm();
    displayTotalAmountPets();
    displayPetType();
    displayServiceCount();
    showNotification("New pet registered","alert-success");
    };
}
function isValid(pet){
    inputName.classList.remove("alert-error");
    inputService.classList.remove("alert-error");
    if(!pet.name || !pet.service){
        if(!pet.name) inputName.classList.add("alert-error");
        if(!pet.serivce) inputService.classList.add("alert-error");
        return false;
    }

    return true;
}
function clearForm(){
    inputName.value=" ";
    inputAge.value=" ";
    inputGender.value=" ";
    inputType.value=" ";
    inputBreed.value=" ";
    inputService.value=" ";
}
function deletePet(deleteIndex){
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(deleteIndex).remove();
    displayRows();
    displayTotalAmountPets();
    displayPetType();
    displayServiceCount();
    showNotification("Pet has been removed","alert-danger");
}

function showNotification(msg,style){
    $("#notificationText").text(msg);
    $("#notification").css("display","block");
    $("#notification").removeClass("alert-danger");
    $("#notification").removeClass("alert-success");
    $("#notification").addClass(style);
    setTimeout(hideNotification,3000);
}

function hideNotification(){
    $("#notification").hide();
}

function getServices(){
    let serviceList = readItem();
    for(let i=0; i<serviceList.length; i++){
        let service = serviceList[i];
        $("#txtService").append(
            `<option value="${service.description}">${service.description}</option>`
        );
    }
}

function init(){

    $("#closeNotification").click(hideNotification);

    
    
    let pet1 = new pet("Scooby", 60, "Male", "Dog", "Great Dane", "Grooming");
    let pet2 = new pet("Scrappy", 50, "Male", "Dog", "Great Dane", "Vaccines");
    let pet3 = new pet("Tweety",70,"Female", "Bird", "Yellow Canary", "Hotel");
    petSalon.pets.push(pet1, pet2, pet3);
    //displayCards();
    displayRows();
    displayTotalAmountPets();
    displayPetType();
    displayServiceCount();
    getServices();

    inputName = document.getElementById("txtName");
    inputAge = document.getElementById("txtAge");
    inputGender = document.getElementById("txtGender");
    inputType = document.getElementById("txtType");
    inputBreed = document.getElementById("txtBreed");
    inputService = document.getElementById("txtService");
}

window.onload=init;