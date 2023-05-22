let contactList = [
    {
        id: 1234,
        name: "Cristian",
        lastName: "Vargas Parra",
        phoneNumber: "318-472-2627",
        location:[
        {
            city: "Barranquilla",
            direction:"Carrera 43B#90-23"
            }
        ]
    }
    ]
    function addNewContact(id, name, lastName, phoneNumber, [city, direction]) {
        const newContact = {
          id: id,
          name: name,
          lastName: lastName,
          phoneNumber: phoneNumber,
          location: [
            {
              city: city,
              direction: direction
            }
          ]
        };
      
        contactList.push(newContact);
      }
    addNewContact(12345, "John David", "Barbosa", 322980786, ["barranquilla", "carrera 43#79-120"])
    addNewContact(123456, "Javier", "Roncallo", 3245678965, ["barranquilla", "carrera 47#100-120"])
    
    console.log(contactList)
    
    
    function deleteContact(name) {
        contactList = contactList.filter(contact => contact.name !== name);
      }  
    deleteContact("Javier");
    
    
console.log(contactList);
console.log(JSON.stringify(contactList));
    
    