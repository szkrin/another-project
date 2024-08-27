import AddProject from './components/AddProject';
import NoProject from './components/NoProjects';
import Project from './components/Project';
import Menu from './components/Menu';
import { useState } from 'react';

const projects = {};

function App() {


  const [content, setContent] = useState('NoProject');


  function onCreateProjectHandler() {
    setContent('AddProject');
  }

  function onCancelHandler() {
    setContent('NoProject');
  }

  function addNewProjectHandler(title, description, date) {
    projects[title] = {
      description: description,
      dueDate: date,
      tasks: []
    };
    setContent('NoProject');
  }

  function viewProjectHandler(clickedProject) {
    setContent(clickedProject);
  }

  function onDeleteProjectHandler(project) {
    delete projects[project];
    setContent('NoProject');
  }

  return (
    <>
      <main className='flex'>
        <div className='flex-[0.15] p-12 bg-slate-800 h-[calc(100vh-3rem)] text-slate-100 space-y-8 rounded-tr-2xl mt-12'>
          <Menu onCreateProject={onCreateProjectHandler} projects={projects} onProjectClick={viewProjectHandler} />
        </div>
        <div className='flex-[0.85] flex-col content-center text-center h-[calc(100vh-3rem)] space-y-8 mt-12'>
          {
            content == 'NoProject' ? <NoProject onCreateProject={onCreateProjectHandler} /> :
              content == 'AddProject' ? <AddProject onCancel={onCancelHandler} onSave={addNewProjectHandler} projects={projects} /> :
                <Project onDelete={() => onDeleteProjectHandler(content)} title={content} project={projects[content]} />
          }
        </div>
      </main>
    </>
  );
}

export default App;
