import { useRef, useState } from "react"

export default function AddProject({ onCancel, onSave, projects }) {
    const titleRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();

    const [validationErrors, setValidationErrors] = useState(null);

    function checkValidation(title, desc, date) {
        if (title !== '' && desc !== '' && date !== '' && !projects[title]) {
            onSave(title, desc, date);
        } else if (title !== '' && desc !== '' && date !== '') {
            setValidationErrors("Project with that name already exists");
        } else {
            setValidationErrors("Please fill entire form");
        }
    }

    return (
        <div className='text-left p-10 w-1/2 m-auto text-slate-800 space-y-6'>
            <div className='text-right space-x-6'>
                <button onClick={onCancel} className='text-lg'>Cancel</button>
                <button onClick={() => checkValidation(titleRef.current.value, descRef.current.value, dateRef.current.value)} className='text-lg px-7 py-2 bg-slate-800 text-slate-100 rounded-lg'>Save</button>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Title</label>
                <input ref={titleRef} className='w-full border-2 bg-slate-300 p-2' type='text'></input>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Description</label>
                <textarea ref={descRef} className='w-full h-24 border-2 bg-slate-300 p-2'></textarea>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Due date</label>
                <input ref={dateRef} className='w-full border-2 p-2 bg-slate-300' type='date'></input>
            </div>
            {validationErrors && <div className="text-2xl text-red-500 text-center p-2 font-bold uppercase">{validationErrors}</div>}

        </div>
    )
}