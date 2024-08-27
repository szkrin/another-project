import noProjectImage from '../assets/no-projects.png';
export default function NoProject({onCreateProject}) {
    return (
        <>
            <img className='size-24 m-auto' src={noProjectImage} />
            <h2 className='font-bold text-3xl text-slate-800'>No Project Selected</h2>
            <p className='text-lg text-slate-800 font-semibold'>Select a project or get started with a new one</p>
            <button onClick={onCreateProject} className='text-slate-100 p-4 rounded-lg border-2 bg-slate-800'>Create new project</button>
        </>
    )
}