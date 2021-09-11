import {useState} from 'react'

const Form = () => {

    const [text, setField] = useState('')
    const [day, setName] = useState('')
    const [symptoms, setSymptoms] = useState(false)


    return (
        <div>
            <label>Task</label>
            <input
            type='text'
            placeholder='Field'
            value = {text}
            />
            <input
            type='checkbox'
            checked={symptoms}
            value={symptoms}
            onChange={(e) => setSymptoms(e.currentTarget.checked)}
            />
        </div>
    )

}



export default Form
