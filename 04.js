
function tahunKabisat (tahun1,tahun2){
for (tahun1;tahun1<=tahun2;tahun1++){
    if (tahun1 % 4 === 0  && tahun1 % 400 === 0){
        console.log(`${tahun1}`);
        }
        else if (tahun1 % 4 === 0  && tahun1 % 100 !== 0){
            console.log(`${tahun1}`);
            
        } else if (tahun1 % 4 === 0) {
            console.log(`${tahun1}`);
            
        }
    }
}

tahunKabisat (1996,2020);