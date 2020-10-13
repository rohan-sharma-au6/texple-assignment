import React, { Component } from 'react';
import Meaning from "../Components/Meaning"
class Dictionary extends Component {
    state = {
        word: "",
        meaning: "",
        error:""
    }
    getMeaning = (word) => {
        fetch(`https://owlbot.info/api/v4/dictionary/${word}`,
            {
                method: "get",
                headers: {
                    "Authorization": "Token c62dc7100d4b7641a231ac73142365779c1c3e00"
                },
            }
        ).then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({ meaning: json })
                this.setState({ word: "" })
            }).catch(err => {
                console.log(err)
            });
    }

    render() {
        return (
            <div  >
                <h1 className="header">Dictionary</h1>
                <form className="head" onSubmit={(e) => { e.preventDefault(); this.getMeaning(this.state.word); e.target[0].value = "" }}>
                    <input style={{height:"47px"}} type="text" placeholder="Enter Word" value={this.state.word} onChange={(e) => { e.preventDefault(); this.setState({ word: e.target.value }) }} />
                    <input type="submit" className="btn2" value="Search" />
                </form>

                <Meaning mean={this.state.meaning} />

            </div>
        );
    }
}

export default Dictionary;