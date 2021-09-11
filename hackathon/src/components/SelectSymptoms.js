import React, { useEffect, useState } from 'react'
import Selections from './Selections'
import Select from 'react-select'

const SelectSymtoms = ({onSubmit}) => {

    // const [symptoms, setSymptoms] = useState([])

    // symptoms = ["Heart Burn", "Cold", "Fracture", "Flu"]
    var symptoms = [
        {value: 'heart burn', label: 'Heart Burn'},
        {value: 'cold', label: 'Cold'},
        {value: 'fracture', label: 'Fracture'}
    ]

    const [selectedOption, setSelectedOption] = useState(null);

    // useEffect(
    //     () => {
    //         function setSymptoms () {
              
    //         }
        
    //         getTasks()
    //     },
    //     [selectedOption]
    // )

    return (
        <div className="select-symptoms"> 
            <Select 
                isMulti={true}
                options={symptoms} 
                defaultValue={selectedOption}
                onChange={setSelectedOption}
            />
            {/* <Selections selection="Heart Burn"></Selections>
            <Selections selection="Cold"></Selections>
            <Selections selection="Fracture"></Selections>
            <Selections selection="Flu"></Selections> */}
            {/* <Selections selection="Flu"></Selections> */}
            <label>selected options are:</label>
            {selectedOption && selectedOption.map((option) => (<label>{option.label}</label>))}
        </div>

    )
}

export default SelectSymtoms
