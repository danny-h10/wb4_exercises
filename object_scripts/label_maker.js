"use strict"

/*
name
address
city
state
zip
*/

//create our person with some properties that describe the person
let person = {
    name:"daniel",
    address: "12334 your mom st",
    city: "dallas",
    state: "texas",
    zip: "78904"
};

//create a function that formats and prints an address for a contact to the console
function printContact(contact){

    console.log(`
    ${contact.name}
    ${contact.address}
    ${contact.city}, ${contact.state}, ${contact.zip}
    `);

}

printContact(person);


