import "./App.css";
import { puppyList } from "./data";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // console[(featPupId, setFeatPupId)] = useState(null);
  function handleClick(id) {
    setFeatPupId(id);
  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  return (
    /* map over the students array, sending each individual student to the Profile component */
    <>
      <div>
        {puppies.map((puppy) => (
          <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
          </p>
        ))}

        {featPupId && (
          <div className="selected">
            <h2>{featuredPup.name}</h2>
            <ul className="list">
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
