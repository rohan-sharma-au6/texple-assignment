import React, { Component } from 'react';
import CreateTodos from "../Components/createTodos"
import AllTodos from "../Components/AllTodos"
class Todos extends Component {
    render() {
        return (
            <div className="toodo">
                <h1>TO-DO List</h1>
                <CreateTodos/>
                <br/>
                <br/>
                <AllTodos/>
                
            </div>
        );
    }
}

export default Todos;