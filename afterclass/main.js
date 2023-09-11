const MIN_POWER = 10;
const MAX_POWER = 30



let energiaGoku=100;
let energiaSuperman=100;

let round = 0;

while((energiaGoku > 0) && (energiaSuperman > 0)){
    round = round + 1;

let golpeGoku = Math.ceil( Math.random()*(MAX_POWER-MIN_POWER) + MIN_POWER);
let golpeSuperman = Math.ceil( Math.random()*(MAX_POWER -MIN_POWER) + 10);

//let golpe = Math.ceil( Math.random()*100);
//console.log(golpe)

console.log('----- round ' + round + '-----');
console.log("goku golpea con fuerza de " + golpeGoku);
console.log("superman golpea con fuerza de " + golpeSuperman);
if(golpeGoku === golpeSuperman){
    console.log("siga siga")
} else if(golpeGoku>golpeSuperman){
    //energiaSuperman = energiaSuperman - golpeGoku
    energiaSuperman-=golpeGoku;
    
    
    if(energiaSuperman<0){
        energiaSuperman = 0;
    }
    console.log("superman con energia de " + energiaSuperman)
    console.log("goku con energia de " + energiaGoku)
}else{
    energiaGoku-=golpeSuperman;
    
    if(energiaGoku<0){
        energiaGoku = 0;
    }
    console.log("goku con energia de " + energiaGoku);
    console.log("superman con energia de " + energiaSuperman);
}
console.log("---------------------------------------");
}
console.log('---------- GANADOR ------------');

if(energiaGoku>0){
    console.log("gana Goku")
}
else{
    console.log("gano Superman");
}