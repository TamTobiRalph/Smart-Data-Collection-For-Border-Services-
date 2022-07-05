const express = require("express");
const app = express();
const mysql = require("mysql")
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection ({
    user: 'root',
    host: 'localhost',
    password: 'Bloomcare20.',
    database: 'border_management',
});

app.post('/create', (req, res) =>{
    const title = req.body.title
    const firstName = req.body.firstName
    const otherName = req.body.otherName
    const lastName = req.body.lastName
    const email = req.body.email
    const gender = req.body.gender
    const nationality = req.body.nationality
    const countrycode = req.body.countrycode
    const dateofbirth = req.body.dateofbirth
    const passportnumber = req.body.passportnumber
    const passportdateofissue = req.body.passportdateofissue
    const passportdateofexpiry = req.body.passportdateofexpiry
    const dateoftravel = req.body.dateoftravel
    const dateofarrival = req.body.dateofarrival
    const purposeoftravel = req.body.purposeoftravel
    const visatype = req.body.visatype
    const cityoftravel = req.body.cityoftravel
    const dateofvisaissue = req.body.dateofvisaissue
    const dateofvisaexpiry = req.body.dateofvisaexpiry
    const flightname = req.body.flightname
    const flightnumber = req.body.flightnumber
    const tickettype = req.body.tickettype
    const dualnaltionality = req.body.dualnaltionality
    const covidvacination = req.body.covidvacination
    const secondcovidvacination = req.body.secondcovidvacination
    const vaccination = req.body.vaccination
    const destinationaddress = req.body.destinationaddress
    const occupation = req.body.occupation
    const homeaddress = req.body.homeaddress
    const arrivalairport = req.body.arrivalairport
    const transitingcountry = req.body.transitingcountry
    const destinationcountry = req.body.destinationcountry
    const minors = req.body.minors
    const numberofminors = req.body.numberofminors
    const isolationaddress = req.body.isolationaddress

    db.query(
        "INSERT INTO border (title, firstName, otherName, lastName, email, gender, nationality, countrycode, dateofbirth, passportnumber, passportdateofissue, passportdateofexpiry, dateoftravel, dateofarrival, purposeoftravel, visatype, cityoftravel, dateofvisaissue, dateofvisaexpiry, flightname, flightnumber, tickettype, dualnaltionality, covidvacination, secondcovidvacination, vaccination, destinationaddress, occupation, homeaddress, arrivalairport, transitingcountry, destinationcountry, minors, numberofminors, issolationaddress) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [title, firstName, otherName, lastName, email, gender, nationality, countrycode, dateofbirth, passportnumber, passportdateofissue, passportdateofexpiry, dateoftravel, dateofarrival, purposeoftravel, visatype, cityoftravel, dateofvisaissue, dateofvisaexpiry, flightname, flightnumber, tickettype, dualnaltionality, covidvacination, secondcovidvacination, vaccination, destinationaddress, occupation, homeaddress, arrivalairport, transitingcountry, destinationcountry, minors, numberofminors, isolationaddress], 
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
            res.send ("Values Inserted");
        } 
        }
    );

});


app.get('/data', (req, res) => {
    db.query("SELECT * FROM border_management.border",(err, result) => {
        if (err) {
            console.log(err);
        } else {
        res.send (result);
        }
    });
});

app.listen(3001, () => {
    console.log("It Works");
});

