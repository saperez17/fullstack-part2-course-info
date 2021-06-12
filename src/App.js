import { useState } from "react";
import "./styles.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newContact, setNewContact] = useState({ name: "", number: "" });
  const [filter, setFilter] = useState("");
  const inputHandler = (e) => {
    setNewContact((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let userSearch = persons.find((person) => person.name === newContact.name);
    if (!userSearch) {
      setPersons((prevState) => [...persons, { name: newContact.name }]);
      setNewContact({ name: "", number: "" });
    } else alert(`${newContact.name} is already added to phonebook`);
  };

  const onChangeSearch = (e) => {
    setFilter(e.target.value);
  };

  const fileredContacts = persons.filter((person) =>
    person.name.includes(filter)
  );
  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        filter shown with <input onChange={onChangeSearch} value={filter} />
      </div>

      <h2>add a new</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          name:{" "}
          <input name="name" onChange={inputHandler} value={newContact.name} />
        </div>
        <div>
          number:{" "}
          <input
            name="number"
            onChange={inputHandler}
            value={newContact.number}
          />
        </div>
        <div>debug name: {newContact.name}</div>
        <div>debug number: {newContact.number}</div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {fileredContacts.map((person, key) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
};

export default App;
