
let email = "shubhamvuma@gmail.com"
function EmailValidation(email) {
    return regex.test(email)
}
// let regex = /[^\s@]+@[^\s@]+\.[^\s@]+$/
let regex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
EmailValidation(email)?console.log("Valid Email"):console.log("Invalid Email")