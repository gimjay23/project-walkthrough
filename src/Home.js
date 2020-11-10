import React, { useState, useEffect } from "react";

export default function Home({ setUserLoggedIn }) {
  //just want to creat a space

  //setting a state to keep track and later display the data from console
  const [starWarsCharater, setStarWarsCharacter] = useState("");
  //set loading to give the api some time to successfully run
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://swapi.dev/api/people/8")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        let characterDetails = {
          person: data.name,
          creation: data.created,
          color: data.eye_color,
          height: data.height,
          weight: data.mass,
          yearOfBirth: data.birth_year,
          location: data.homeworld,
        };
        setStarWarsCharacter(characterDetails);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(true);
      });
  }, []);

  //setUserLoggedIn above, is used the destructured way, instead of using props directly
  function handleLogout() {
    setUserLoggedIn(false);
  }

  return (
    <div>
      {loading ? (
        <p>Your mission statement is loading</p>
      ) : (
        <span>
          <h4>Welcome to the Homepage</h4>
          <br />
          <br />
          <p>You are now successfully logged In</p>
          <hr />
          <h4>Below are the details you require:</h4>
          <ul>
            <li>{starWarsCharater.person}</li>
            <li>{starWarsCharater.creation}</li>
            <li>{starWarsCharater.color}</li>
            <li>{starWarsCharater.height}</li>
            <li>{starWarsCharater.weight}</li>
            <li>{starWarsCharater.yearOfBirth}</li>
            <li>{starWarsCharater.location}</li>
          </ul>
        </span>
      )}

      <button type="button" className="btn btn-primary" onClick={handleLogout}>
        LogOut
      </button>
    </div>
  );
}
