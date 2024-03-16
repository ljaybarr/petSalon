let text;
let list;
let card;
let row;

function displayNames(){
    list = document.getElementById("petList");
    text="";//clear the var
    for(let i=0;i<petSalon.pets.length;i++){
        text+=`<li>${petSalon.pets[i].name}</li>`;
        console.log("iteration"+ i +" "+ text);
    }
    list.innerHTML=text;
}

function displayCards(){
    const petsDiv = document.getElementById("pets");
    card="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        card+=`
        <div class="petCard ${pet.service.toLowerCase()}">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
            <p>${pet.gender}</p>
            <p>${pet.breed}</p>
            <p>${pet.service}</p>
            <p>${pet.type}</p>
        </div>
        `;
    }
    petsDiv.innerHTML=card;
}
function displayRows(){
    const TABLE = document.getElementById("petTable");
    row="";
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
    row+=`
    <tr id="${i}" class="">
        <td>${pet.name}</td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.type}</td>
        <td>${pet.breed}</td>
        <td>${pet.service}</td>
        <td><button class="action-btn" onclick="deletePet(${i});">x</button></td>
    </tr>
    `;
    }
    TABLE.innerHTML=row;
}
function displayTotalAmountPets(){
    document.getElementById("totalPets").innerHTML=petSalon.pets.length;
}
function displayPetType(){
    //declare variables
    let dog=0;
    let cat=0;
    let bird=0;
    let hamster=0;
    let other=0;

    for(let i=0;i<petSalon.pets.length;i++){
        //travel the array
        let pet = petSalon.pets[i]; // getting the current pet
        if(pet.type.toLowerCase() == "dog"){
            dog++;
            document.getElementById("totalDog").innerHTML=dog; // display the total grooming on HTML
        }else if(pet.type.toLowerCase() == "cat"){
            cat++;
            document.getElementById("totalCat").innerHTML=cat;
            //cat
        }else if(pet.type.toLowerCase() == "bird"){
            bird++;
            document.getElementById("totalBird").innerHTML=bird;
            //bird
        }else if(pet.type.toLowerCase() == "hamster"){
            hamster++;
            document.getElementById("totalHamster").innerHTML=hamster;
            //hamster
        }
        else if(pet.type.toLowerCase() == "other"){
            other++;
            document.getElementById("totalOther").innerHTML=other;
            //other
        }
    }
}
function displayServiceCount(){
    //declare variables
    let grooming=0;
    let vaccines=0;
    let hotel=0;

    for(let i=0;i<petSalon.pets.length;i++){
        //travel the array
        let pet = petSalon.pets[i]; // getting the current pet
        if(pet.service.toLowerCase() == "grooming"){
            grooming++;
            document.getElementById("totalGrooming").innerHTML=grooming; // display the total grooming on HTML
        }else if(pet.service.toLowerCase() == "vaccines"){
            vaccines++;
            document.getElementById("totalVaccines").innerHTML=vaccines;
            //vaccines
        }else{
            hotel++;
            document.getElementById("totalHotel").innerHTML=hotel;
            //hotel
        }
    }
}
function displayServices(){
    const TABLE = document.getElementById("servicesTable");
    row="";
    for(let i=0;i<newServices.services.length;i++){
        let services = newServices.services[i];
    row+=`
    <tr id="${i}" class="">
        <td>${services.description}</td>
        <td>$${services.price}</td>
    `;
    }
    TABLE.innerHTML=row;
}