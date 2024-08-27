import TasksList from "./TasksList";


export default function Project({ title, project, onDelete }) {
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
                    <input type='text' className='w-full border-2 p-2 bg-slate-300'></input>
                </div>
                <div>
                    <button className='p-2 font-semibold'>Add Task</button>
                </div>
                <div className='col-span-3 font-semibold'>
                    This project does not have any tasks yet.
                </div>
            </div>
            <TasksList />
        </>
    )
}