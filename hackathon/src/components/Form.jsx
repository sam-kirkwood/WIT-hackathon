import {useState} from 'react'

const Form = () => {

    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [symptoms, setSymptoms] = useState(false)


    return (
        <form className='add-form' 
        // onSubmit={onSubmit}
        >
            <div className='form-control'>
                <label>Patient Name</label>
                <input
                    type='text'
                    placeholder='Name'
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Description of Symptoms</label>
                <input
                    type='text'
                    placeholder='Description of Symptoms'
                    value = {text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Symptoms?</label>
                <input
                type='checkbox'
                checked={symptoms}
                value={symptoms}
                onChange={(e) => setSymptoms(e.currentTarget.value)}
                />
                <input type='submit' value='Save Task' className='btn btn-block' />
            </div>
        </form>
    )

}



export default Form
