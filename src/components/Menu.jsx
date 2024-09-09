export default function Menu({content, onCreateProject, projects, onProjectClick, onMenuClick }) {
    return (
        <>
            <button onClick={onMenuClick} className='font-bold text-3xl uppercase'>Your projects</button>
            <button onClick={onCreateProject} className='p-4 rounded-lg border-2 uppercase'>+ Add project</button>
            <ul className='space-y-4 text-slate-300 ml-4'>
                {Object.entries(projects).map(([key, val], i) =>
                    <li key={i}><button className={`w-full px-2 py-1 text-left ${content === key ? "bg-slate-600" : ''}`} onClick={() => onProjectClick(key)}>{key}</button></li>
                )}
            </ul>
        </>
    )
}