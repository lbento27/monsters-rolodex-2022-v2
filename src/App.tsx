import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
//import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { getData } from "./utils/data.utils";

export type Monsters ={
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [monsters, setMonsters] = useState<Monsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); // initial state as monsters value
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    /*fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));*/
    
      const fetchUsers = async () => {
        const users = await getData<Monsters[]>("https://jsonplaceholder.typicode.com/users");
        setMonsters(users);
      }
      fetchUsers()
  }, []); //only runs at the beginning

  useEffect(() => {
    const NewFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(NewFilteredMonsters);
  }, [monsters, searchField]); // this code only runs ate beginning and when the monsters or searchField value changes

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = { monsters: [], searchField: "" };
//   }

//   componentDidMount() {
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) =>
//     this.setState(
//       () => {
//         return { monsters: users };
//       },
//       () => {
//         console.log(this.state);
//       }
//     )
//   );
//   }

//   onSearchChange = (event) => {
//     //console.log(event);
//     const searchField = event.target.value.toLowerCase();

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//           className="monsters-search-box"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
