import AddProject from './components/AddProject';
import NoProject from './components/NoProjects';
import Task from './components/Task';
import Menu from './components/Menu';
function App() {
  return (
    <>
      <main className='flex'>
        <div className='flex-[0.15] p-12 bg-slate-800 h-[calc(100vh-3rem)] text-slate-100 space-y-8 rounded-tr-2xl mt-12'>
          <Menu />
        </div>
        <div className='flex-[0.85] flex-col content-center text-center h-[calc(100vh-3rem)] space-y-8 mt-12'>
          <Task />
        </div>
      </main>
    </>
  );
}

export default App;
