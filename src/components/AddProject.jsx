export default function AddProject() {
    return (
        <div className='basis-4/5 mt-40 pl-40'>
            <div className='w-1/2 uppercase text-lg font-bold text-slate-950'>
                <div className='text-right font-semibold'>
                    <button className='p-6'>Cancel</button>
                    <button className='px-6 py-2 bg-slate-950 text-white rounded-lg'>Save</button>
                </div>
                <label>Title</label>
                <input className='w-full bg-slate-400 p-1 border-b-2 mb-4' type='text'></input>
                <label>Description</label>
                <textarea className='w-full h-24 bg-slate-400 p-1 border-b-2 mb-4'></textarea>
                <label>Due Date</label>
                <input className='w-full bg-slate-400 p-1 border-b-2' type='date'></input>
            </div>
        </div>
    )
}