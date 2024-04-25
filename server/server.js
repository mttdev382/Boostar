const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
const path = require('path');
const JWT_SECRET = 'mysecretkey'

const { agents, attachments, bookings, customers, otas, structures, users, balanceData } = require('./data');

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
  let userStructures = structures.filter(structure => structure.userId == req.user.id);

  // Inizializza gli accumulatori per i dati totali
  let totalMonthlyRevenue = 0;
  let totalYearlyRevenue = 0;
  let totalFutureBookingsRevenue = 0;

  // Itera su tutte le strutture dell'utente
  userStructures.forEach(selectedStructure => {
    // Trova le prenotazioni per la struttura selezionata
    let structureBookings = bookings.filter(booking => booking.structureId == selectedStructure.id);

    // Calcola il fatturato mensile per questa struttura
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    let currentYear = currentDate.getFullYear();
    let monthlyRevenue = structureBookings.reduce((total, booking) => {
      let bookingDate = new Date(booking.from);
      if (bookingDate.getMonth() + 1 === currentMonth && bookingDate.getFullYear() === currentYear) {
        return total + booking.amount;
      } else {
        return total;
      }
    }, 0);
    totalMonthlyRevenue += monthlyRevenue;

    // Calcola il fatturato annuale per questa struttura
    let yearlyRevenue = structureBookings.reduce((total, booking) => {
      let bookingDate = new Date(booking.from);
      if (bookingDate.getFullYear() === currentYear) {
        return total + booking.amount;
      } else {
        return total;
      }
    }, 0);
    totalYearlyRevenue += yearlyRevenue;

    // Calcola il fatturato delle prenotazioni future per questa struttura
    let futureBookingsRevenue = structureBookings.filter(booking => {
      let bookingDate = new Date(booking.from);
      return bookingDate > currentDate;
    }).reduce((total, booking) => {
      return total + booking.amount;
    }, 0);
    totalFutureBookingsRevenue += futureBookingsRevenue;
  });



  // Invia i dati al client
  res.json({
    occupancyRate: (Math.random() * 100).toFixed(2),
    monthlyRevenue: totalMonthlyRevenue.toFixed(2),
    yearlyRevenue: totalYearlyRevenue.toFixed(2),
    futureBookingsRevenue: totalFutureBookingsRevenue.toFixed(2)
  });
});



app.get("/api/home-data/:structureId", verifyToken, (req, res) => {
  // Trova la struttura selezionata dall'utente
  let userStructures = structures.filter(structure => structure.userId == req.user.id);
  let selectedStructure = userStructures.find(structure => structure.id == req.params.structureId);

  // Trova le prenotazioni per la struttura selezionata
  let structureBookings = bookings.filter(booking => booking.structureId == selectedStructure.id);

  // Calcola il fatturato del mese corrente
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();
  let monthlyRevenue = structureBookings.reduce((total, booking) => {
    let bookingDate = new Date(booking.from);
    if (bookingDate.getMonth() + 1 === currentMonth && bookingDate.getFullYear() === currentYear) {
      return total + booking.amount;
    } else {
      return total;
    }
  }, 0);

  // Calcola il fatturato da inizio anno
  let yearlyRevenue = structureBookings.reduce((total, booking) => {
    let bookingDate = new Date(booking.from);
    if (bookingDate.getFullYear() === currentYear) {
      return total + booking.amount;
    } else {
      return total;
    }
  }, 0);

  // Calcola il fatturato delle prenotazioni future
  let futureBookingsRevenue = structureBookings.filter(booking => {
    let bookingDate = new Date(booking.from);
    return bookingDate > currentDate;
  }).reduce((total, booking) => {
    return total + booking.amount;
  }, 0);

  // Invia i dati al client
  res.json({
    occupancyRate: (Math.random() * 100).toFixed(2),
    monthlyRevenue: monthlyRevenue.toFixed(2),
    yearlyRevenue: yearlyRevenue.toFixed(2),
    futureBookingsRevenue: futureBookingsRevenue.toFixed(2)
  });
});



app.get('/api/profile-data', verifyToken, (req, res) => {
  let data = {};
  data["user"] = users.find(user => user.id === req.user.id);
  data["agent"] = agents.find(agent => agent.id === req.user.agentId);
  data["attachments"] = attachments.filter(att => att.userId === req.user.id);

  return res.status(200).json(data);
});

app.get('/api/structures-data', verifyToken, (req, res) => {
  let data = {};
  data["user"] = users.find(user => user.id === req.user.id);
  data["structures"] = structures.filter(structure => structure.userId === req.user.id);
  return res.status(200).json(data);
});

app.get('/api/bookings-data', verifyToken, (req, res) => {
  let userStructures = structures.filter(structure => structure.userId == req.user.id);
  let userBookings = [];

  userStructures.forEach(structure => {
    userBookings.push(...bookings.filter(booking => booking.structureId == structure.id));
  })

  userBookings = userBookings.map(userBooking => {
    return { ...userBooking, ota: otas.find(ota => ota.id == userBooking.otaId), customer: customers.find(customer => customer.id == userBooking.customerId), structure: structures.find(structure => structure.id == userBooking.structureId) }
  })

  return res.status(200).json(userBookings);
});

app.get('/api/balance-data', verifyToken, (req, res) => {
  // let data = {};
  // data["balance"] = balanceData;
  // data["user"] = req.user;
  return res.status(200).json(balanceData);
});





app.get('/api/check-token', verifyToken, (req, res) => {
  if (req.user) return res.status(200).json({ isValid: true })
  else return res.status(200).json({ isValid: false });
});

app.get('/download/:attachmentId', verifyToken, (req, res) => {
  const { attachmentId } = req.params;
  let attachment = attachments.find(att => att.id == attachmentId);
  console.log("attachment: ", attachment);
  if (!attachment) return res.status(404).send("Allegato non trovato");

  if (attachment.userId != req.user.id) {
    return res.status(404).send("Allegato non appartenente all'utente corrente.");
  }

  const filePath = path.join(__dirname, 'attachments', attachment.filename);
  return res.download(filePath, (err) => {
    if (err) {
      // Gestisci eventuali errori
      return res.status(500).send(err);
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
