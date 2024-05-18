// 1 уровень сложности: 1. В бд homeworks создать коллекцию employees1 и заполнить документами со следующими свойствами: _id, firstname, lastname, position, salary. Используйте следующие данные:

// use homeworks

db.createCollection("emploees1");

// 1 Петр Сергеев CEO 7000
// 2 Виктор Семенов Web-developer 5000
// 3 Никита Петров Assistant 4500
// 4 Инна Орлова Accountant 4500
// 5 Максим Максимов Assistant 2500
// 6 Инна Сидрова Accountant 4000

db.employees1.insertMany([
    {   
        _id: 1, 
        firstname: "Петр", 
        lastname: "Сергеев", 
        position: "CEO", 
        salary: 7000 
    },
    { 
        _id: 2, 
        firstname: "Виктор", 
        lastname: "Семенов", 
        position: "Web-developer", 
        salary: 5000 
    },
    { 
        _id: 3, 
        firstname: "Никита", 
        lastname: "Петров", 
        position: "Assistant", 
        salary: 4500 
    },
    { 
        _id: 4, 
        firstname: "Инна", 
        lastname: "Орлова", 
        position: "Accountant", 
        salary: 4500 
    },
    { 
        _id: 5, 
        firstname: "Максим", 
        lastname: "Максимов", 
        position: "Assistant", 
        salary: 2500
     },
    { 
        _id: 6, 
        firstname: "Инна", 
        lastname: "Сидрова", 
        position: "Accountant", 
        salary: 4000 }
])


// Вывести из этой коллекции сотрудников у которых зарплата выше 4000.
db.employees1.find({salary: {$gt: 4000}})

// Вывести сотрудников, у которых имя входит в список ('Инна', 'Максим', 'Петр')
db.employees1.find({firstname: {$in: ['Инна', 'Максим','Петр']}})

// Вывести сотрудников из отделов Accountant и Assistant, которые зарабатывают меньше 4500.
db.employees1.find({position: {$in:['Assistant', 'Accountant']}, salary: {$lt: 4500}})
  
// Из коллекции удалить сотрудников с именем Инна.
db.employees1.deleteMany({firstname:'Инна'})

 // Вывести сотрудников, которые из отдела Accountant и зарабатывают больше 3000.
 db.employees1.find({position:'Accountant', salary: {$gt: 3000}})