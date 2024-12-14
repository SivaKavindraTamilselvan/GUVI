const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let rooms = [];
let bookings = [];
let customers = [];
let roomId = 1; 
let bookingId = 1; 

app.post('/rooms', (req, res) => {
    const { roomName, seats, amenities, pricePerHour } = req.body;

    if (!roomName || !seats || !pricePerHour) {
        return res.status(400).send({ message: 'roomName, seats, and pricePerHour are required' });
    }

    const newRoom = {
        id: roomId++, 
        roomName,
        seats,
        amenities: amenities || [], 
        pricePerHour,
        bookings: [] 
    };

    rooms.push(newRoom);
    res.status(201).send({ message: 'Room created successfully', room: newRoom });
});

app.post("/rooms/book", (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    if (!customerName || !date || !startTime || !endTime || !roomId) {
        return res.status(400).send({ message: "customerName, date, startTime, endTime, and roomId are required" });
    }

    const room = rooms.find((room) => room.id === roomId);
    if (!room) {
        return res.status(404).send({ message: "Room not found" });
    }

    const booking = {
        id: bookingId++,
        customerName,
        date,
        startTime,
        endTime,
        roomId,
        roomName: room.roomName,
        status: "Booked",
    };

    bookings.push(booking);
    room.bookings.push(booking);

    const customer = customers.find(cust => cust.name === customerName);
    if (customer) {
        customer.bookingsCount += 1;  // Increment bookingsCount
    }

    res.status(201).send({ message: "Room booked successfully", booking });
});


app.get('/rooms', (req, res) => {
    res.status(200).send(rooms.map(room => ({
        ...room,
        bookings: room.bookings.map(booking => ({
            customerName: booking.customerName,
            date: booking.date,
            startTime: booking.startTime,
            endTime: booking.endTime
        }))
    })));
});

app.post('/customers', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send({ message: 'name and email are required' });
    }

    const newCustomer = {
        id: customers.length + 1,
        name,
        email,
        bookingsCount: 0
    };

    customers.push(newCustomer);
    res.status(201).send({ message: 'Customer added successfully', customer: newCustomer });
});

app.get('/customers', (req, res) => {
    res.status(200).send(customers);
});

app.get('/customers/:customerName/bookings', (req, res) => {
    const { customerName } = req.params;

    const customerBookings = bookings.filter(booking => booking.customerName === customerName);

    if (!customerBookings.length) {
        return res.status(404).send({ message: 'No bookings found for the customer' });
    }

    res.status(200).send(customerBookings);
});


app.get('/customers/:customerId/bookingsCount', (req, res) => {
    const customerId = parseInt(req.params.customerId);
    const customer = customers.find(cust => cust.id === customerId);

    if (!customer) {
        return res.status(404).send({ message: 'Customer not found' });
    }

    res.status(200).send({ bookingsCount: customer.bookingsCount });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
