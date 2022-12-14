// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   console.log(`Going to :: ${name}, ${diameter}, ${star}, ${distance}, ${moons}, ${imageUrl}`)

   console.log("My Document : \n"+document)
    let myDestination = document.getElementById ("missionTarget");
   myDestination.innerHTML = `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">`
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
   document.getElementById("launchStatusCheck").style.visibility = "visible";  
}

async function myFetch() {
    //console.log("Entered Here")
    let planetsReturned;

    //console.log("Going to fetch Planets")
    /*
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {    
        
    response.text().then( function(dataStr) {
            console.log("Checking on data")
            //console.log(dataStr);
            return  dataStr;
         });
        
        });
        */

    const response = await fetch('https://handlers.education.launchcode.org/static/planets.json')
    planetsReturned = await response.text()
    //console.log("PlanetsReturned = "+planetsReturned)
    return JSON.parse(planetsReturned);
}

function pickPlanet(planets) {
    console.log("Type of my planets = "+typeof (planets));
    
    //console.log("My planets list = "+(planets));
    let count = 0;
    for(const values in planets)
    {
        count++;
    }
    console.log("Length of my planets list = "+count);
    let randomNum = Math.floor(Math.random() * count);
    console.log("randomNum = "+randomNum)

    return planets[randomNum];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
