import AddProject from './components/AddProject';
import NoProject from './components/NoProjects';
function App() {
  return (
    <>
      <div className='flex flex-row h-screen mt-10'>
        <div className='basis-1/5 bg-slate-950 text-white pt-14 rounded-tr-2xl text-xl'>
          <h1 className='text-2xl font-bold p-10 uppercase'>Your projects</h1>
          <button className='rounded-lg p-4 bg-slate-800 ml-10 hover:bg-slate-400 hover:text-slate-800 uppercase'>+ Add Project</button>
          <p className='ml-12 mt-12 bg-slate-700 w-2/3 p-2'>Learning React</p>
        </div>
        <AddProject />
        
      </div>
    </>
  );
}

export default App;
