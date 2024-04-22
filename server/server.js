const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const JWT_SECRET = 'mysecretkey';

const users = [
  { id: 1, username: 'admin', password: 'admin', firstName: "Admin", lastName: "Admin", email: "admin@admin.it", agent: "admin" },
  { id: 2, username: 'test', password: 'test', firstName: "Test", lastName: "Test", email: "test@test.it", agent: "test" }
];

const customers = [
  { id: 1, username: 'mariorossi', firstName: "Mario", lastName: "Rossi", email: "mario@rossi.it" },
  { id: 2, username: 'mariorossi', firstName: "Mario", lastName: "Rossi", email: "mario@rossi.it" },
  { id: 3, username: 'mariorossi', firstName: "Mario", lastName: "Rossi", email: "mario@rossi.it" },
  { id: 4, username: 'mariorossi', firstName: "Mario", lastName: "Rossi", email: "mario@rossi.it" },
]

const attachments = [{
  id: 1, userId: 1, name: "carta di identità", filename: "cartaidentita"
}]

const bookings = [{
  id: 1,
  structureId: 1,
  ota: "booking",
  customerId: 1,
  from: new Date(),
  to: new Date(),
  amount: 100,
  guests: 5
},
{
  id: 2,
  structureId: 1,
  ota: "booking",
  customerId: 2,
  from: new Date(),
  to: new Date(),
  amount: 100,
  guests: 5
},
{
  id: 3,
  structureId: 1,
  ota: "booking",
  customerId: 3,
  from: new Date(),
  to: new Date(),
  amount: 100,
  guests: 5
},
{
  id: 4,
  structureId: 1,
  ota: "booking",
  customerId: 4,
  from: new Date(),
  to: new Date(),
  amount: 100,
  guests: 5
}]

const structures = [
  { id: 1, userId: 1, imageUrl: "", name: "Residenza degli Admin", address: "Via Melo 13, 70128, Bari", fromDate: new Date() },
  { id: 2, userId: 1, imageUrl: "", name: "Corte Amministrativa", address: "Via Admin 15, 70128, Bari", fromDate: new Date() },
  { id: 3, userId: 1, imageUrl: "", name: "Villa Augusta", address: "Via delle Vie 1, 70128, Bari", fromDate: new Date() },

  { id: 4, userId: 2, imageUrl: "", name: "Residenza Test", address: "Via Nazionale 1, 70128, Bari", fromDate: new Date() },
  { id: 5, userId: 2, imageUrl: "", name: "Corte di Testing", address: "Via Regionale 2, 70128, Bari", fromDate: new Date() },
  { id: 6, userId: 2, imageUrl: "", name: "Villa Testarda", address: "Contrada del Granduca 5, 70128, Bari", fromDate: new Date() },
]


// ENDPOINTS

app.post('/api/login', (req, res) => {
  console.log("Trying to login . . .");
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Credenziali non valide' });
  }
  const token = jwt.sign({ user: user }, JWT_SECRET);
  console.log("Login successful");
  return res.json({ message: 'Login successful', token });
});

app.get('/api/home-data', verifyToken, (req, res) => {
  let currentUser = users.find(user => user.id === req.user.id);
  console.log(currentUser)
  const data = {
    occupancy: currentUser.occupancy,
    monthlyRevenue: currentUser.monthlyRevenue
  }
  return res.status(200).json(data);
});

app.get('/download/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'attachments', filename);

  return res.download(filePath, (err) => {
    if (err) {
      // Gestisci eventuali errori
      res.status(404).send("File non trovato");
    }
  });
});


// Middleware per la verifica del token JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization']; // Prendiamo il token JWT dall'header Authorization
  if (!token) {
    return res.status(401).json({ message: 'Token non fornito' });
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token non valido' });
    }
    req.user = decoded.user;
    return next(); // Passa al prossimo middleware
  });
}

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
