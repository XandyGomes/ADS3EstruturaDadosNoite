let person = {
    'building  no': 1928,
    firstName: 'Alexandre',
    lastName: 'Gomes',
    age: 35,
    greet() {
        console.log("Olá Pessoal")
    },
    getFullName: function () {
        return this.firstName + ' ' + this.lastName
    }
}

console.log(person.getFullName())

// person.greet()

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person);
// console.log(person["building  no"]);
// console.log(person.age);
// console.log('firstName' in person);
// for( const key in person ){
//     console.log(person[key]);
// } 