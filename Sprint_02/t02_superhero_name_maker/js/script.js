function getSuperheroName(){
let animal = prompt('What animal is the superhero most similar to?', 'bat');
let gender = prompt('Is the superhero male or female? Leave blank if unknown or other.', 'male');
let age = prompt('How old is the superhero?', 25);
let regexpAnimal =/[a-zA-Z]{1,20}/;
let regexpGender =/(male|female|)/i;
let regexpAge =/[1-9][0-9]{1,5}/;
let description;
console.log(regexpAnimal.test(animal));
console.log(regexpGender.test(gender));
console.log(regexpAge.test(age));
if(!regexpAnimal.test(animal) || !regexpGender.test(gender) 
|| !regexpAge.test(age)){
    alert('Error input, try again!')
    return;
} 
if(age>=18 && gender =='male'){
    description = 'man';
}else if(age<18 && gender =='male'){
    description = 'boy';
}else if(age>=18 && gender == 'female'){
    description = 'woman';
}else if(age<18 && gender == 'female'){
    description = 'girl';
}else if(age>=18 && gender == ''){
    description = 'hero';
}else if(age<18 && gender == ''){
    description = 'kid';
}

alert(`The superhero name is: ${animal}-${description}`);}
getSuperheroName();