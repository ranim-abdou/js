var myNome= prompt('nome');
var surname =prompt('cognome');
var age =prompt (eta);
var city =prompt ('citta');
var email =prompt('email');




/*window.prompt('Nome');
window.prompt('Cognome');
window.prompt('Età');
window.prompt('Città');
window.prompt('Email'); */

/*console.log(myNome +' '+ surname + ' '+ age+' ' +city+' '+(email));

document.write(myNome +' '+ surname + ' '+ age+' ' +city+' '+(email));*/

var fullName=myNome +' '+ surname + ' '+ age+' ' +city+' ' +('+ email +');
window.alert(fullName);
document.write(fullName);
console.log(fullName);
document.getElementById('nome').innerHTML = myName;
document.getElementById('cognome').innerHTML = surname;
document.getElementById('eta').innerHTML = age;
document.getElementById('citta').innerHTML = city;
document.getElementById('email').innerHTML = email;