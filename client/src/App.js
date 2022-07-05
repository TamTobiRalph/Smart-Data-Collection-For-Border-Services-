import './App.css';
import { useState } from "react"; 
import Axios from 'axios'

function App() {
const [title, setTitle] = useState("");
const [firstName, setFirstName] = useState("");
const [otherName, setOtherName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [gender, setGender] = useState("");
const [nationality, setNationality] = useState("");
const [countrycode, setCountryCode] = useState("");
const [dateofbirth, setDateOfBirth] = useState("");
const [passportnumber, setPassportNumber] = useState("");
const [passportdateofissue, setPassportDateOfIssue] = useState("");
const [passportdateofexpiry, setPassporDateOfExpiry] = useState("");
const [dateoftravel, setDateOfTravel] = useState("");
const [dateofarrival, setDateOfArrival] = useState("");
const [purposeoftravel, setPurposeOfTravel] = useState("");
const [visatype, setVisaType] = useState("");
const [cityoftravel, setCityOfTravel] = useState("");
const [dateofvisaissue, setDateOfVisaIssue] = useState("");
const [dateofvisaexpiry, setDateOfVisaExpiry] = useState("");
const [flightname, setFlightName] = useState("");
const [flightnumber, setFlightNumber] = useState("");
const [tickettype, setTicketType] = useState("");
const [dualnaltionality, setDualNationality] = useState("");
const [covidvacination, setCovidVacination] = useState("");
const [secondcovidvacination, setSecondCovidVacination] = useState("");
const [vaccination, setVaccination] = useState("");
const [destinationaddress, setDestinationAddress] = useState("");
const [occupation, setOccupation] = useState("");
const [homeaddress, setHomeAddress] = useState("");
const [arrivalairport, setArrivalAirport] = useState("");
const [transitingcountry, setTransitingCountry] = useState("");
const [destinationcountry, setDestinationCountry] = useState("");
const [minors, setMinors] = useState("");
const [numberofminors, setNumberOfMinors] = useState("");
const [isolationaddress, setIsolationAddress] = useState("");


const [datalist, setDatalist] = useState([])

const Submit = () => {  
  Axios.post("http://localhost:3001/create",{
    title: title, firstName: firstName, otherName: otherName, lastName: lastName, email: email,
    gender: gender, nationality: nationality, countrycode: countrycode, dateofbirth: dateofbirth, 
    passportnumber: passportnumber, passportdateofissue: passportdateofissue,
    passportdateofexpiry: passportdateofexpiry, 
    dateoftravel: dateoftravel, dateofarrival: dateofarrival, purposeoftravel: purposeoftravel, 
    visatype: visatype, cityoftravel: cityoftravel, dateofvisaissue: dateofvisaissue,
    dateofvisaexpiry: dateofvisaexpiry, flightname: flightname, flightnumber: flightnumber,
    tickettype: tickettype, dualnaltionality: dualnaltionality, covidvacination: covidvacination, 
    secondcovidvacination: secondcovidvacination, vaccination: vaccination,
    destinationaddress: destinationaddress, occupation: occupation, 
    homeaddress: homeaddress, arrivalairport: arrivalairport, transitingcountry: transitingcountry, 
    destinationcountry: destinationcountry, minors:minors,
    numberofminors: numberofminors, isolationaddress: isolationaddress
  }).then(() => {
    console.log("success");

  });
};

const getData = () => {
  Axios.get("http://localhost:3001/data").then((response) => { 
    setDatalist(response.data);
  });
};

  return (
    <div className="App">
      <div className="information">
        Smart Border Management Systems
        <label>Title:</label>
        <input type="text" 
          onChange={(event) =>{setTitle (event.target.value);
          }} 
        />
        <label>First Name:</label> 
        <input type="text" 
          onChange={(event) =>{setFirstName (event.target.value);
          }}
        />
        <label>Other Names:</label> 
        <input type="text"
          onChange={(event) =>{setOtherName (event.target.value);
          }}
         />
        <label>Last Name:</label> 
        <input type="text"
          onChange={(event) =>{setLastName (event.target.value);
          }}    
        />
        <label>Email:</label>
        <input type="text"
          onChange={(event) =>{setEmail (event.target.value);
          }}
        />
        <label>Gender:</label>
        <input type="text" 
          onChange={(event) =>{setGender (event.target.value);
          }}
        />
        <label>Nationality:</label> 
        <input type="text"
          onChange={(event) =>{setNationality (event.target.value);
          }}
        />
        <label>Country Code:</label> 
        <input type="text" 
          onChange={(event) =>{setCountryCode (event.target.value);
          }}  
        />
        <label> Date Of Birth:</label> 
        <input type="text"
          onChange={(event) =>{setDateOfBirth (event.target.value);
          }} 
        />
        <label> Passport Number:</label> 
        <input type="text"
          onChange={(event) =>{setPassportNumber (event.target.value);
          }} 
        />
        <label> Passport Date Of Issue:</label>
        <input type="text"
          onChange={(event) =>{setPassportDateOfIssue (event.target.value);
          }} 
        />
        <label>Passport Date Of Expiry:</label> 
        <input type="text" 
          onChange={(event) =>{setPassporDateOfExpiry (event.target.value);
          }}  
        />
        <label>Date Of Travel:</label> 
        <input type="text"
          onChange={(event) =>{setDateOfTravel (event.target.value);
          }} 
        />
        <label>Date Of Arrival:</label> 
        <input type="text" 
          onChange={(event) =>{setDateOfArrival (event.target.value);
          }}  
        />
        <label>Purpose Of Travel:</label>
        <input type="text"
          onChange={(event) =>{setPurposeOfTravel (event.target.value);
          }}
        />
        <label>Visa Type:</label>
        <input type="text"
          onChange={(event) =>{setVisaType (event.target.value);
          }}  
        />
        <label>City Of Travel:</label> 
        <input type="text"
          onChange={(event) =>{setCityOfTravel (event.target.value);
          }} 
        />
        <label>Date Of Visa Issue:</label> 
        <input type="text" 
          onChange={(event) =>{setDateOfVisaIssue (event.target.value);
          }}
        />
        <label> Date Of Visa Expiry:</label> 
        <input type="text" 
          onChange={(event) =>{setDateOfVisaExpiry (event.target.value);
          }}
        />
        <label> Flight Name:</label> 
        <input type="text"
          onChange={(event) =>{setFlightName (event.target.value);
          }} />
        <label> Flight Number:</label>
        <input type="text"
          onChange={(event) =>{setFlightNumber (event.target.value);
          }}
        />
        <label>Ticket Type:</label>
        <input type="text"
          onChange={(event) =>{setTicketType (event.target.value);
          }}
        />
        <label>Dual Nationality:</label> 
        <input type="text" 
          onChange={(event) =>{setDualNationality (event.target.value);
          }}
        />
        <label>Covid Vacination:</label> 
        <input type="text" 
          onChange={(event) =>{setCovidVacination (event.target.value);
          }}
        />
        <label>Second Covid Vacination:</label> 
        <input type="text"
          onChange={(event) =>{setSecondCovidVacination (event.target.value);
          }}
        />
        <label>Vacination:</label>
        <input type="text"
          onChange={(event) =>{setVaccination (event.target.value);
          }} />
        <label>Destination Address:</label>
        <input type="text"
          onChange={(event) =>{setDestinationAddress (event.target.value);
          }}
        />
        <label>Occupation:</label> 
        <input type="text"
          onChange={(event) =>{setOccupation (event.target.value);
          }}
        />
        <label>Home Address:</label> 
        <input type="text"
          onChange={(event) =>{setHomeAddress (event.target.value);
          }}
        />
        <label> Arrival Airport:</label> 
        <input type="text"
         onChange={(event) =>{setArrivalAirport (event.target.value);
         }}
        />
        <label> Transiting Country:</label> 
        <input type="text"
          onChange={(event) =>{setTransitingCountry (event.target.value);
          }}
        />
        <label> Destination Country:</label>
        <input type="text" 
          onChange={(event) =>{setDestinationCountry (event.target.value);
          }}
        />
        <label>Minors:</label> 
        <input type="text" 
          onChange={(event) =>{setMinors (event.target.value);
          }}
        />
        <label>Number Of Minors:</label> 
        <input type="number" 
          onChange={(event) =>{setNumberOfMinors (event.target.value);
          }}
        />
        <label>Isolation Address:</label> 
        <input type="text" 
          onChange={(event) =>{setIsolationAddress (event.target.value);
          }}
        />
        <button onClick={Submit}>Submit</button>
      </div>
      <div className ="datalist">
        <button onClick={getData}>Show Data</button>

        {datalist.map((val, key) => {

          return <div>{val.firstName}</div>;

        })}
      </div>
          
    </div>
    
  );
}

export default App;
