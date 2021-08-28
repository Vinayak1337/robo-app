import { Component } from "react";
import CardList from "./Components/Card-List/CardList";
import SearchBox from "./Components/SearchBox/SearchBox";
import './App.css';

class App extends Component {
  state: AppState;
  constructor() {
    super({});
    this.state = {
      robots: [],
      input: '',
    }
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    switch (res.status) {
      case 200: {
        const robots = await res.json();
        this.setState({ robots });
      }
    }
  }

  setInput = (event: Event) => {
    this.setState({ input: (event.target as HTMLInputElement)?.value});
  }

  get robots() {
    return this.state.robots.filter(robots => robots.name.toLowerCase().includes(this.state.input.toLowerCase()))
  }

  render() {
    return (
      <div className="app">
        {
          this.robots?
          <div>
            <h1> Monsters Rolodex</h1>
            <SearchBox setInput={this.setInput}/>
            <CardList robots={this.robots}/>
          </div>
          : <h1>Loading...</h1>
        }
      </div>
    )
  }
}

export default App;