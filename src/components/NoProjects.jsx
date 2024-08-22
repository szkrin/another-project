import noProjectImage from '../assets/no-projects.png';
export default function NoProject() {
    return (
        <div className='basis-4/5 flex flex-col items-center mt-40'>
            <img className='size-20' src={noProjectImage} />
            <p className='text-2xl font-bold text-slate-950 p-6'>No Project Selected</p>
            <p className='text-xl font-semibold text-slate-500'>Select a project or get started with a new one</p>
            <button className='rounded-lg text-xl p-4 bg-slate-950 text-slate-500 mt-6 hover:bg-slate-400 hover:text-slate-800'>Create new project</button>
        </div>
    )
}