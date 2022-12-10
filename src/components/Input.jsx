import React from 'react';
import { useState } from 'react';

function Input(){
    const[job, setJob]= useState([]);
    const[inputHazardText, setInputHazardText] = useState('');
    const[inputJob, setInputJob]= useState('');
   
    const addJob = async () => {
        setJob([ ...job, {txt: inputHazardText}])
        setInputHazardText('')
    }
    const onInputHazardText = async (ev) => {
        console.log(ev.currentTarget.value)
        setInputHazardText(ev.currentTarget.value);
    }
    const onInputJob = async (ev) => {
        console.log(ev.currentTarget.value)
        setInputJob(ev.currentTarget.value)
    }
    
    return(
        <>
        <div>
            <form>
            <input value={inputJob} onChange={onInputJob} type="text" className="form-control my-2" placeholder="Enter Job"/>
            <input value={inputHazardText} onChange={onInputHazardText} type="text" className="form-control my-2" placeholder="Enter Job Hazard"/>
            <button type="submit" className="btn btn-primary" onClick={addJob}>Submit</button>
            </form>
        </div>
        </>
    );
    
}
export default Input;