import React, { Component } from 'react';

class createTodos extends Component {
    state={
        todo:""
    }
    create=()=>{
        fetch("http://localhost:8080/create",
        {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:this.state.todo
            })
        }
    ).then(res => res.json())
        .then(json => {
            console.log(json)
           
        }).catch(err => {
            console.log(err, "djchjcehjd")
        });

    }
    render() {
        return (
            <div>
                <form className="ab" onSubmit={(e) => { e.preventDefault(); this.create(this.state.word); e.target[0].value = "";window.location.reload() }}>
                    <input style={{height:"50px"}} type="text" placeholder="Create new todo" value={this.state.todo} onChange={(e) => { e.preventDefault(); this.setState({ todo: e.target.value }) }} required/>
                    <input  className="btn3" type="submit" value="create"/>
                </form>
                
            </div>
        );
    }
}

export default createTodos;