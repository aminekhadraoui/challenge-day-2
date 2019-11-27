/*
Implement a way to limit the number of guesses that can be made so that a player loses after exceeding the limit
*/
function guessMyNumber (x){
nb = 0;
if ((Math.floor(Math.random() * 6)) == x){
   return "you guess the number";
}else {
  nb++;

}
 return nb >= 5 ? "true" : "false";
}
/*
convert euro to dinar
*/

function convert(euro){
    return euro * 1.75;
}
/*

*/
function find(str){
   x = 0;
   nb = 1 ;
    for(var i = 1 ; i < str.length;i++){
        if(str[x]==str[i]){
         nb++;
        }if(nb === 1){
            x++;
            console.log("test out !");
        }
       
    }

    return nb;
}
/*

*/
function upp (str){
  return str.charCodeAt(0) < 97 ? str = str[0].toUpperCase(): ""; 
}
/*

*/
function permute (a,b){
 console.log("a : "+a+" b : "+b);
    aux = a ;
    a   = b ;
    b   = aux;
   return a+" : "+b;
}
/*

*/
function permute (a,b){
    /*5+6 = 11 / b = 11 - b / a = a - b */
    console.log("a : "+a+" b : "+b);
    a = a + b;
    b = a - b;
    a = a - b;
    return a+"  "+b;

}         
/*

*/
function inverse(x){
   nb = "";
   nb = (x%100).toString();
   x  = Math.floor(x/10);
   nb = nb + (Math.floor(x/100)).toString();
   nb = nb + (Math.floor(x/10)).toString();

  return nb;
}
/*

*/