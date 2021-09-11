import React, { useState } from 'react'
import Symptoms from './Symptoms'
import Button from './Button'
import Card from './Card'
const Profile = () => {
  var [submitted, setSubmitted] = useState(false)

    return (
        <div className="profile">
            <h1>Hello John!</h1>
            <img src="/images/man.png"></img>
            <input className="input" type="text" placeholder="Search"></input>
            <Symptoms></Symptoms>
            <button className="select-btn"
            onClick={() => (setSubmitted(true))}
            >Submit</button>
            {/* <Card text="Check previous symptoms"></Card>
            <Card text="Book appointment with doctor"></Card>
            <Card text="Send message to doctor"></Card> */}
            {submitted && "Thank you for submitting"}
        </div>
    )
}

export default Profile
