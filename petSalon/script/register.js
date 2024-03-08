let petSalon = {
    name:"The Fashion pet",
    phone:"999-999-9999",
    address:{
        country:"United States",
        city:"San Diego",
        zip:"12345"
    },
    pets:[
        {
            name:"Scooby",
            age:80,
            gender:"Male",
        },
        {
            name:"Scrappy",
            age:70,
            gender:"Male",
        },
        {
            name:"Tweety",
            age:85,
            gender:"Female",
        },
        {
            name:"Speedy",
            age:82,
            gender:"Male",
        },
    ]
}
function displayPetCount(){

}
function displayNames(){
    
    for(let i=0;i<petSalon.pets.length;i++){
        document.getElementById("petList").innerHTML+=`<li>${petSalon.pets[i].name}</li>`;
    }
}
displayNames();

function calculateAverageAge(){
    let total=0;
    for(let i=0;i<petSalon.pets.length;i++){
        total = total + petSalon.pets[i].age;
    }
    document.getElementById("petAverageAge").innerHTML+=`<p>${total}</p>`;
}
calculateAverageAge();