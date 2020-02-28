class Str {
    
    static lower(x){
        console.log(x.toLowerCase());
    }

    static uppper(x){
        console.log(x.toUpperCase());
        
    }

    static capitalize(x){
        console.log(x.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' '));
           
    }

    static reverse(x){
        let splitstring = x.split('').reverse().join('');
        console.log(splitstring);
          
    }

    static contains(x,y){
        let obj = 'object';
        if (typeof(y) === obj){
            for (let i=0; i<= y.length-1; i++){
               if (x.includes(y[i]) === true){
                    console.log(true);
                    break;
               } else {
                   console.log(false);
                   
               }
                
            }
        }
        else {
            console.log(x.includes(y));
            
        }
        
    }

    static random(x=16){
        let result= '';
        let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let panjanghuruf = huruf.length;

        if (x !== null && typeof(x) === 'number'){
        for ( let i=0; i < x; i++) {
            result += huruf.charAt(Math.floor(Math.random() * panjanghuruf));

        }
        console.log(result);

    } else {
        console.log('Masukan angka slur');
        
        }
    }


    static count(x){
        console.log(x.length);
        
    }

    static countWords(x){
        console.log(x.split(' ').length);
        
    }

    static trim(text, length, ending){
        
    

        if(length == null){
            length = 100;
        }
        if (ending == null){
            ending= '...';
        }
        if (text.length > length){
            let result = text.substring(0, length - ending.length) + ending;
            console.log(result);
            
        }else {
            console.log(text);
        }
    }


}

 let text =`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;   


 
Str.lower('Makan');
Str.uppper('malam');
Str.capitalize('saya ingin makan');
Str.reverse('kasur');
Str.contains('Saya ingin makan sate', 'makan');
Str.contains('Saya ingin makan sate', 'rujak');
Str.contains('Saya ingin makan sate', ['sampah','rujak']);
Str.random();
Str.random(6);
Str.random(32);
Str.count('lorem ipsum');
Str.countWords('lorem ipsum');
Str.trim('Less than 100 character');
Str.trim(text);
Str.trim(text,20);
Str.trim(text,20,'----')









