// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput==""){
        return "Empty"
    }
    else if(isNaN(testInput)) {
        return "Not a Number"
    }
   else{
    return "Is a Number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = `Co-pilot ${copilot} Ready`;

    let launchStatus = document.getElementById("launchStatus");
    launchStatus.innerHTML = "Shuttle ready for launch";
    launchStatus.style.color = "green";

    if(fuelLevel<10000){
      let fuelStatus = document.getElementById("fuelStatus") ;
      fuelStatus.innerHTML = "Not enough fuel for the journey";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
    } 

    if(cargoLevel>10000){
      let cargoStatus = document.getElementById("cargoStatus");
      cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   }
   document.getElementById("launchStatusCheck").style.visibility = "";

    
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
