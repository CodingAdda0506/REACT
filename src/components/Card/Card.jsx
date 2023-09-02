import React from 'react'
import "./style.css";
import { useContext } from 'react';
import UseContext from "../../context/useContext";

const Card = () => {

    const con = useContext(UseContext);

    return (
        <div className="card-container">
            <div className="inner-container">
                <p className="para">
                    Name : { con.Name }
                </p>
                <p className="para">
                    Channel Age : {con.Channel_Age } Years
                </p>
                <p className="para">
                    Member-1 : {con.Member1 }
                </p>
                <p className="para">
                    Member-2 : { con.Member2 }
                </p>
            </div>
        </div>
    )
}

export default Card;