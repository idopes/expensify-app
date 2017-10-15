class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Action/>
        <Options/>
        <AddOption/>
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (<div>
      <button>What should i do?</button>
    </div>)
  }
}

class Options extends React.Component {
  render() {
    return (<div>
      <h3>Options Component</h3>
      <ol>
        <Option/>
        <Option/>
        <Option/>
      </ol>
    </div>)
  }
}

class Option extends React.Component {
  render() {
    return <li>this is a option</li>
  }
}

class AddOption extends React.Component {
    render() {
      return <p>this is the AddOption Component</p>
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
