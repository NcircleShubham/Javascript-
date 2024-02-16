function emailValidation(email) {

  const requiredWord = 'gmail.com'; // Replace with the word you want to check for
  const atIndex = email.indexOf('@');
    const domain = email.slice(atIndex + 1);
    for(let i =0; i < email.length; i++) {
        if(email[i] === " " || !email.includes("@")  || !email.includes(".") || domain !== requiredWord) {
          console.log("Invalid Email");
          return;
        } 
    }
     console.log("Valid Email");
}
 var email = "shubhamvuma@gmail.com"
 emailValidation(email)