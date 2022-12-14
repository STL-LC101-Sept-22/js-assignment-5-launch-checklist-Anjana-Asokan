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
   
});
