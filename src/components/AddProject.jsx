export default function AddProject() {
    return (
        <form className='text-left p-10 w-1/2 m-auto text-slate-800 space-y-6'>
            <div className='text-right space-x-6'>
                <button className='text-lg'>Cancel</button>
                <button className='text-lg px-7 py-2 bg-slate-800 text-slate-100 rounded-lg'>Save</button>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Title</label>
                <input className='w-full border-2 bg-slate-300 p-2' type='text'></input>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Description</label>
                <textarea className='w-full h-24 border-2 bg-slate-300 p-2'></textarea>
            </div>
            <div className='space-y-2'>
                <label className='uppercase text-lg font-semibold'>Due date</label>
                <input className='w-full border-2 p-2 bg-slate-300' type='date'></input>
            </div>
        </form>
    )
}