//Crie um verificador de idade

function validAge (age){
    if (typeof age !== "number" || isNaN(age)){
        return "Invalid age";
    }

    if(age < 0){
        return "Invalid age";
    }

    if (age >= 18){
    return ("Você é maior de idade");
    } else{
    return ("Você é menor de idade");
    } 
}

console.log(validAge(19));