// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
 return streetNumber>=42? (streetNumber-42) : 42-streetNumber
}

function distanceFromHqInFeet(streetNumber){
      return streetNumber>=42?(streetNumber-42)*264:(42-streetNumber)*264
}

function distanceTravelledInFeet(start,destination){
    return start>destination? (start-destination)*264: (destination-start)*264
}

function calculatesFarePrice(start,destination) {
    function distanceTravelledInFeet(start,destination)
    {
    if (start>destination) {
       return (start-destination)*264
    }
    else {
        return (destination-start)*264
    }
    }
    const lengthInFeet = distanceTravelledInFeet(start,destination)
    
     if (lengthInFeet<=400){
        return 0
     }
     else if (lengthInFeet<=2000){
        return (0.02*(lengthInFeet-400))
     }
     else if(lengthInFeet<=2500){
        return 25
     }
     else{
        return 'cannot travel that far'
     }
    }



