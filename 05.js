let number = [];
for (let i=0; i<=1000; i++ ){
    number.push(i);
}

let ganjil =[];
let genap =[];
let kelipatan = [];
let temprima =[];
let prima100 = [];
var i=0;

function ganjilgenap(){
    
    for (i=0; i<number.length; i++){
        if(number[i] % 2 === 0){
            genap.push(number[i]);
        } else {
            ganjil.push(number[i]);
        }
    }
};

function kelipatan5(){
    for (i=0; i<number.length; i++){
        if(number[i] % 5 === 0){
            kelipatan.push(number[i]);
    }
}
};



function prima(num) {
    for (i = 2; i < num; i++) if (num % i === 0) return false;
    return num >1;
}

function primaok() {
    number.forEach(e => {
        if(prima(e)) {
            temprima.push(e);
        }
        
    });
}




function primas100(){
     for (i=0; i<temprima.length; i++){
     if (temprima[i] <= 100){
         prima100.push(temprima[i]);
         }
     }
 }

ganjilgenap();
kelipatan5();
primaok();
primas100();



console.log(`Bilangan ganjil : ${ganjil}`);
console.log(`Bilangan genap : ${genap}`);
console.log(`Kelipatan 5 : ${kelipatan}`);
console.log(`Prima : ${temprima}`);
console.log(`Bilangan Prima dibawah 100 : ${prima100}`)



