debugger
let firstName = prompt('Enter your first name');
let lastName = prompt('Enter your last name');
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName =  lastName.charAt(0).toUpperCase() + lastName.slice(1);
regexpName = /[a-zA-Z]/
if (regexpName.test(firstName) && regexpName.test(lastName)){
    alert(`Hello, ${firstName} ${lastName}`);
    console.log(`Hello, ${firstName} ${lastName}`);
}else {alert('Wrong input!');
console.log('Wrong input!');}


