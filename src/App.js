// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value });
  }

  // when ever setState is called and the properties change 
  // react re-renders our component it recalls the render method
  render() {
    const { monsters, searchFeild } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );

    // console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          // Passing whole function through handlechange to child component
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div >
    );
  }
}

export default App;
