import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search/search-box-component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    let searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHander={onSearchChange}
          placeholder="search monsters"
          className="monster search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
