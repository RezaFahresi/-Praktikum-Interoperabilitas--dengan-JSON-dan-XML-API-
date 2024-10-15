const express = require('express'); 
const app = express(); 
const port = 3000; 

// Middleware untuk parsing JSON
app.use(express.json()); 

// Data contoh
let persons = [ 
    { 
        "id": 1, 
        "nama": "John Doe", 
        "umur": 30, 
        "alamat": { 
            "jalan": "Jalan ABC", 
            "kota": "Jakarta"     
        }, 
        "hobi": ["membaca", "bersepeda"] 
    } 
]; 

// Endpoint GET untuk mendapatkan semua data persons
app.get('/person', (req, res) => { 
    res.json(persons); 
}); 
 
// Endpoint POST untuk menambahkan person baru
app.post('/person', (req, res) => { 
    const newPerson = req.body; 
    newPerson.id = persons.length + 1; 
    persons.push(newPerson); 
    res.status(201).json(newPerson); 
}); 
 
// Endpoint DELETE untuk menghapus person berdasarkan ID
app.delete('/person/:id', (req, res) => { 
    const id = parseInt(req.params.id); 
    persons = persons.filter(person => person.id !== id); 
    res.status(204).send(); 
}); 
 
// Menjalankan server
app.listen(port, () => { 
    console.log(`Server berjalan di http://localhost:${port}`); 
});
