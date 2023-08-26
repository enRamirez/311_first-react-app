import React from 'react';
import './App.css';

class App extends React.Component { // extend to use the methods of the parent components
  constructor(props) {
    super(props); // access the parent properties

    // concept of state - keeping track of the data
    this.state = {
      // set the key/values i want to track
      todos: [],
      text: "",
      isClicked: false
    };

    this.handleClick = this.handleClick.bind(this);

  } // end of constuctor

  // add a button that fires handleClick method when clicked
  // add an h1 or p with ternary operator to confirm the toggle works

  // remember this and bind? 
  // we've lost the bind bc we're rendering outside of the scope of the constructor
  // use arrow function to solve the bind problem
  // bc arrow functions do not get thier own "this" keyword - they inherit from the parent
  handleClick() {
    this.setState({
      // isClicked: true // this works ont time
      isClicked: !this.state.isClicked   // to toggle, we negate the state every time the button is clicked
    })
  }

  // now let's add an text input to render/return and a function that handles the state changle of the input
  // capture the changes in the text input field
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
// handle submit button that adds a todo to the todo array 

handleSubmit = () => {
  this.setState({
    // todos: [this.state.text] // at this point it doesn't clear the text field and it overwrites previous todo

    // use spread (...) to get all the existing todos first
    // then add the next todo to the end
    todos: [...this.state.todos, this.state.text],
    text: ""

  })
}


  render() { // in classes, you have to wrap the return in a render method
    return(
      <div className='App'>
        Enter a Todo: <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <button onClick={this.handleSubmit}>Add Todos</button>

        <ul>
          {this.state.todos.map( (todo) => {
            return <li>{todo}</li>
          })}
        </ul>



        {/* <h1>{this.state.isClicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me</button> */}
      </div>
    );
  }

} // end of class

export default App;
