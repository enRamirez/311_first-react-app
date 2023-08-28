import React from 'react';
import { nanoid } from 'nanoid';
import './App.css';

class App extends React.Component { // extend to use the methods of the parent components
  constructor(props) {
    super(props); // access the parent properties

    // concept of state - keeping track of the data
    this.state = {
      // set the key/values i want to track
      todos: [{'id': 1, 'text': 'Walk the fish'}, {'id': 2, 'text': 'Feed my rock'}], // this is an array of strings, i need an array of ? to add an id 
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
    todos: [...this.state.todos, {id: nanoid(), text: this.state.text}],
    text: ""

  })
}

/**
 * deleting a todo is a little different bc we need to know which todo to remove
 * so each todo needs an id 
 * so if a todo now an id and text, what do i do
 * 
 */

handleDelete = (id) => {
  // console.log(id); // checking for right id 

  const index = this.state.todos.findIndex(todo => todo.id === id);
  console.log(index)

  // make a copy of the array to work with (dont mutate directly)
  const copy = [...this.state.todos];

  // splice out the 1 todo at that index
  copy.splice(index, 1)

  // update state of todos with the copy
  this.setState({
    todos: copy
  })
}


  render() { // in classes, you have to wrap the return in a render method
    return(
      <div className='App'>
        Enter a Todo: <input type='text' onChange={this.handleChange} value={this.state.text}/>
        <button onClick={this.handleSubmit}>Add Todos</button>

        <ul>
          {this.state.todos.map( (todo) => {
            return <li key={todo.id}>{todo.text}
            <button onClick={() => this.handleDelete(todo.id) }>X</button>
            </li>
          })}
        </ul>



        {/* <h1>{this.state.isClicked ? "Clicked" : "Not Clicked"}</h1>
        <button onClick={this.handleClick}>Click Me</button> */}
      </div>
    );
  }

} // end of class

export default App;
