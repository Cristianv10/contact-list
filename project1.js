let contactList = ["Cristian Vargas", "José Vargas", "Judith Parra", "Javier Roncallo"];
console.log(contactList);

function addNewContact(name) {
  contactList.push(name);
  console.log('Element created');}

addNewContact("John Barbosa");
let newContactList = contactList;
console.log("My contacts are:", newContactList);


function deleteContact(name) {
  const index = newContactList.findIndex(contact => contact === name);
  if (index !== -1) {
    newContactList.splice(index, 1);
    console.log(`Contact "${name}" removed successfully.`);
  }
}

deleteContact("José Vargas");

let deletedContactList = newContactList;
console.log("The new contacts after delete one are", deletedContactList); 

function updateContact(oldName, newName) {
  const index = newContactList.findIndex(contact => contact === oldName);
  if (index !== -1) {
    newContactList[index] = newName;
    console.log(`Contact "${oldName}" updated to "${newName}" successfully.`);
  } else {
    console.log(`Contact "${oldName}" not found.`);
  }
}

updateContact("Cristian Vargas", "Carlos García");

console.log("The updated contacts are", newContactList)


