function palindrome(kalimat) {
    const hapus = /[\W_]/g;
    let hurufKecil = kalimat.toLowerCase().replace(hapus, '');
    let kalimatBaru = hurufKecil.split('').reverse().join(''); 
    
    if (hurufKecil === kalimatBaru){
        console.log('Palingdrome');    
    } else {
        console.log('Bukan Palingdrome');
    }

  }

  palindrome('ibu ratna antar ubi');
  palindrome('kasur ini rusak');
  palindrome('A nut for a jar of tuna.');
  palindrome('Borrow or rob?');
  palindrome('Was it a car or a cat I saw?');
  palindrome('Yo, banana boy!');
  palindrome('UFO tofu?');
  
