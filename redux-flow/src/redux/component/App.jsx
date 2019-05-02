import React, { Component } from 'react';
import List from "./List"
import Form from "./Form"
class App extends Component {
    state = {  }
    render() { 
        return ( <div>
            <h1>Notes:</h1>
            <List />
            <h2 >Add a Note:</h2>
            <Form />
        </div> );
    }
}
 
export default App;