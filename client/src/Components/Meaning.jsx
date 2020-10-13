import React from 'react';
import {
    Card,
    CardTitle, CardText
} from 'reactstrap';

const Meaning = ({ mean }) => {
    return (
        <div>
            <h1 style={{marginLeft:"30px",color:"blueviolet",fontFamily:"serif",fontWeight:"bolder"}}>{mean.word}</h1>
            <div>{mean===""?null:!mean.definitions ? <h1>No match Found :(</h1> : mean.definitions.map(all => (
                <div style={{marginLeft:"30px",width:"450px",marginTop:"20px"}} key={all.example}>
                    <Card style={{marginLeft:"10px"}} body inverse color="info">
                        <CardTitle><b>Type</b>: {all.type}</CardTitle>
                        <CardText><b>Meaning</b>: {all.definition}</CardText>
                        <CardText><b>ex.</b>: {all.example}</CardText>
                    </Card></div>
            ))}</div>

        </div>
    );
};

export default Meaning;