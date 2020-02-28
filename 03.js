let csvToJson = require('convert-csv-to-json');
let a = [];
let json = csvToJson.formatValueByType().getJsonFromCsv('data.csv');
for (let i=0; i<json.length;i++){
    
    a.push(json[i]);
}

console.log(a);


function sortByproperty(property){
    return function (a,b) {
        if (a[property] > b[property])
        return 1;
        else if(a[property] < b[property])
        return -1;

        return 0;
    }
}
a.sort(sortByproperty('Price'));

let getAngka = a.map((el) => {

    const angka = el.Price;
    
    let rupiah = '';
    let angkaModif = angka.toString().split('').reverse().join('');
        for(var i = 0; i < angkaModif.length; i++)
            if(i%3== 0) rupiah += angkaModif.substr(i,3) + '.';
            
            return `Rp.${rupiah.split('',rupiah.length-1).reverse().join('')}`;

        });
        

    a.forEach((el,i) => {
        el.Price = getAngka[i];
    
        
    });


console.log(a);


