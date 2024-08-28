import { useRef, useState } from "react";
import TasksList from "./TasksList";

export default function Project({ title, project, onDelete, onAddTask, onRemoveTask }) {

    const ref = useRef();

    const [validationErrors, setValidationErrors] = useState(null);

    function validateInput(title, task) {
        if (task !== '') {
            ref.current.value = '';
            onAddTask(title, task);
        } else {
            setValidationErrors('Please enter task name');
        }
    }

    return (
        <>
            <div className='text-left m-auto p-10 w-3/4 grid grid-cols-3 text-slate-800 gap-6 text-lg'>
                <div className='col-span-2'>
                    <h2 className='font-bold text-3xl'>{title}</h2>
                </div>
                <div className='text-right'>
                    <button onClick={onDelete} className='font-semibold'>Delete</button>
                </div>
                <div className='col-span-3'>
                    <span className='text-slate-500'>{project.dueDate}</span>
                </div>
                <div className='col-span-3 border-b-2 border-slate-600 pb-10'>
                    {project.description}
                </div>
                <div className='col-span-3'>
                    <h2 className='font-bold text-3xl mt-4'>Tasks</h2>
                </div>
                <div className='col-span-2'>
                    <input ref={ref} type='text' className='w-full border-2 p-2 bg-slate-300'></input>
                </div>
                <div>
                    <button onClick={() => validateInput(title, ref.current.value)} className='p-2 font-semibold'>Add Task</button>
                </div>
                {validationErrors && <div className="text-2xl text-red-500 text-center p-2 font-bold uppercase col-span-3">{validationErrors}</div>}
                {project.tasks.length == 0 && <div className='col-span-3 font-semibold'>This project does not have any tasks yet.</div>}
            </div>
            {project.tasks.length > 0 && <TasksList tasks={project.tasks} onRemoveTask={onRemoveTask} project={title} />}
        </>
    )
}