import React from "react";
// import ReactDOM from "react-dom";
import axios from "axios";

// import "./styles.css";

function App() {
 
  function login() {
    axios
      // logs in user, response should include some sort of token to set in memory.
      //first POST points to deployed URL, Second POST points to local server
      //.post("https://kidsflyapp.herokuapp.com/login", {
      .post("http://localhost:9966/login", {
        email: "Admin",
        password: "Admin"
      })
      .then(response => {
        const token = response.data.token;
        const returnData = JSON.stringify(response.data);
        alert(returnData)
        // JWT - JSON WEB TOKEN
        localStorage.setItem("token", token);
        // saves a token in the browsers local memory.
      })
      .catch(err => {
        console.log(err);
      });
  }

  function getTrips() {
    const token = localStorage.getItem("token");
    // grabs token form browsers memory.
    axios
      .get("https://kidsflyapp.herokuapp.com/trips", {
        headers: {
          Authorization: token
          // sets token on authorization headers using axios' syntax to determine that user is authorized
        }
      })
      .then(response => {
        console.log("RESPONSE FROM GET USERS", response);
        let trips = JSON.stringify(response.data);

        alert(` Trip list ${trips}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function addUser() {
    const token = localStorage.getItem("token");
    // grabs token form browsers memory.
    axios
      .post(
        "https://kidsflyapp.herokuapp.com/users",
        {
          first_name: "RLV3",
          last_name: "RLV3",
          email: "RLV4",
          phone: "555-555-5555",
          password: "RLV4",
          is_admin: 1,
          airport: "DFW"
        },
        {
          headers: {
            Authorization: token
            // sets token on authorization headers using axios' syntax to determine that user is authorized
          }
        }
      )
      .then(response => {
        console.log("RESPONSE FROM Add USERS", response);
        let userId = JSON.stringify(response.data);
        alert(`USER ID ${userId}`);
      })
      .catch(err => {
        console.log(err);
      });
  }

  function addTrips() {
    const token = localStorage.getItem("token");
    // grabs token form browsers memory.
    axios
      .post(
        "https://kidsflyapp.herokuapp.com/trips",
        {
          airport: "Love Field",
          airline: "SouthWest",
          departure_time: 1560728894419,
          kids: 5,
          is_arriving: 0
        },
        {
          headers: {
            Authorization: token
            // sets token on authorization headers using axios' syntax to determine that user is authorized
          }
        }
      )
      .then(response => {
        console.log("RESPONSE FROM Add USERS", response);
        let newTrip = JSON.stringify(response.data);
        alert(newTrip);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <h1>Hello Auth</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={login}>Login</button>
      <button onClick={getTrips}>get Trips</button>
      <button onClick={addTrips}>new Trip</button>
      <button onClick={addUser}>add User</button>
    </div>
  );
}

export default App

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);