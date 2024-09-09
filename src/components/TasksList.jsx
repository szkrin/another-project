export default function TasksList({ tasks, onRemoveTask, project }) {
    return (
        <div className='text-left m-auto py-4 px-10 lg:p-10 lg:w-3/4  text-slate-800 gap-6 text-lg font-semibold'>
            <div className='grid grid-cols-3 bg-slate-300 p-8 pl-6 gap-4 rounded-lg'>
                {tasks.map((task) => {
                    return (
                        <>
                            <div className='col-span-2'>
                                {task}
                            </div>
                            <div className='text-right'>
                                <button onClick={() => onRemoveTask(project, task)}>Clear</button>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}