import React, { Component } from 'react';
import QuizForm from './QuizForm';

class App extends Component {
  
  showResults = (values) =>{
  	window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }

  render() {
    return (
      <div className="App">
       	<QuizForm onSubmit={this.showResults} />
      </div>
    );
  }
}

export default App;