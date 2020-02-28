const lagu = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei... baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'
const hapus = /[\W_]/g;
const low = lagu.toLowerCase().split(' ');

let a = [];
let b = [];
let c = [];

for (let i=0; i<= low.length; i++){
    if (low[i] === 'aku'){
       a.push(low[i]);
    }
    if (low[i] === 'ingin'){
        b.push(low[i]);  
    }

    if (low[i] === 'dapat'){
        c.push(low[i]);
    }
}

console.log(`aku = ${a.length}`);
console.log(`ingin = ${b.length}`);
console.log(`dapat = ${c.length}`);



