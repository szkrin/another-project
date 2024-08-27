export default function Menu({ onCreateProject, projects, onProjectClick }) {
    return (
        <>
            <h2 className='font-bold text-3xl uppercase'>Your projects</h2>
            <button onClick={onCreateProject} className='p-4 rounded-lg border-2 uppercase'>+ Add project</button>
            <ul className='space-y-4 text-slate-300 ml-4'>
                {Object.entries(projects).map(([key, val], i) =>
                    <li key={i}><button onClick={() => onProjectClick(key)}>{key}</button></li>
                )}
            </ul>
        </>
    )
}