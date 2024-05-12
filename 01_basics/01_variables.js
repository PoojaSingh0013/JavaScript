const accountId = 11345
let accountEmail="poojaSingh8710013@gmail.com"
var accountPassword="Rani"
accountCity="Noida"
let accountState;

//accountId=117 --Not Allowed to change the value of const variable.
accountEmail="ranimrt01@gmail.com"

//prefer not to use var because of issue in block scope{} functional scope
accountPassword="Pooja"
accountCity="Gkp"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])