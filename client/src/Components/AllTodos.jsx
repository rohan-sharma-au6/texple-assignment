import React, { Component } from 'react';

class AllTodos extends Component {
    state = {
        all: null,
        new: ""
    }
    componentDidMount() {
        fetch("http://localhost:8080/all",
            {
                method: "get"
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({ all: json.result })
                console.log(this.state.all.todo)

            }).catch(err => {
                console.log(err, "djchjcehjd")
            });
    }
    delete = (id) => {
        fetch(`http://localhost:8080/delete/${id}`,
            {
                method: "delete"
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json)

            }).catch(err => {
                console.log(err, "djchjcehjd")
            });

    }
    updateTodo = (id) => {
        fetch(`http://localhost:8080/update/${id}`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: this.state.new
                })
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json)

            }).catch(err => {
                console.log(err)
            });
    }
    render() {
        return (
            <div>{this.state.all === null ? null : this.state.all.reverse().map(todo => (
                <div key={todo._id} className="todo-all">
                    <h4 style={{marginTop:"20px"}}>{todo.title}</h4>
                    <form onSubmit={(e) => { e.preventDefault(); this.updateTodo(todo._id); e.target[0].value = "" ;window.location.reload()}} >
                    <input style={{height:"50px"}} placeholder="Edit Todo" type="text"  onChange={(e) => this.setState({ new: e.target.value })} required />
                    <input style={{margin:"20px"}} type ="submit" value="Edit" className="btn2" />

                    <button className="btn" onClick={(e) => { e.preventDefault(); this.delete(todo._id); window.location.reload() }}>Delete</button>
                    </form>
                    
                </div>
            ))}

            </div>
        );
    }
}

export default AllTodos;