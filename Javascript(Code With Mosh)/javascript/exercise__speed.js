


// function checkSpeed(speed){
 
//     let point = 0;
//     if (speed <= 74)
//         console.log("Ok");

//     else{
//         for (let i = 75; i <= speed; i++){
//            if ( i % 5 === 0) point ++;
//         }
//         if 
//             (point >= 12) console.log("Licence Suspended");
//         else
//             console.log("Points : ", point );
        
//     }
// }

// Teacher Way

checkSpeed(80);
function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < (speedLimit + kmPerPoint)){
        console.log("Ok");
        return;
    }
    
    let points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log('Lincence Suspended.');
    else
        console.log("Points : ", points);
}

