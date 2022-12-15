// Write your JavaScript code here!
window.addEventListener("load", function() {
   //const helperFunc = require ('./scriptHelper.js');
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   
   //let listedPlanetsResponse = helperFunc.myFetch();
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
      // console.log("Fetching All Planets: "+listedPlanets);
   }).then(function () {
       //console.log("In final function - "+listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       //let selectedPlanet = helperFunc.pickPlanet(listedPlanets);
       let selectedPlanet = pickPlanet(listedPlanets);
       //console.log("Selected Planet Name - "+selectedPlanet.name)
       addDestinationInfo(document,selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
   })

   let form = document.querySelector("form");
   form.addEventListener("submit",function(event){

        console.log("Entered EventListener for Submit")
       let pilot = document.querySelector("input[name=pilotName]");
       let copilot = document.querySelector("input[name=copilotName]")
       let fuel = document.querySelector("input[name=fuelLevel]")
       let cargo = document.querySelector("input[name=cargoMass]")
    //let alerts = []   
       let pilotAvailability = validateInput(pilot.value)
       let copilotAvailability = validateInput(copilot.value)
       let fuelAvailability = validateInput(fuel.value)
       let cargoAvailability = validateInput(cargo.value)

       let emptyCheck = false;
       if(pilotAvailability == "Empty" || copilotAvailability == "Empty"  || fuelAvailability == "Empty" || cargoAvailability == "Empty"){
        alert("All fields are required!");
        emptyCheck = true;
       }

       let nameCheck = false;
       if(pilotAvailability == "Is a Number" || copilotAvailability == "Is a Number"){
        alert("Please Enter valid name for Pilot & Copilot");
        nameCheck = true;
       }

    let numCheck = false;
       if(fuelAvailability == "Not a Number" || cargoAvailability == "Not a Number"){
        alert("Fuel Level and Cargo Mass must be a valid number");
        numCheck = true;
       }
       
       if(!emptyCheck && !nameCheck && !numCheck){

        let divElem = document.getElementById("faultyItems")
        let divChild = divElem.children
        // for(let i=0; i<divChild.length; i++)
        // {
        //     console.log(divChild[i].innerHTML)
        // }
        formSubmission(document, divChild, pilot.value, copilot.value, fuel.value, cargo.value)
       }

       event.preventDefault();
   })
   
});
