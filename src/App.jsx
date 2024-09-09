import AddProject from './components/AddProject';
import NoProject from './components/NoProjects';
import Project from './components/Project';
import Menu from './components/Menu';
import { useState } from 'react';


function App() {

  const [content, setContent] = useState('NoProject');
  const [projects, setProjects] = useState({});


  function onCreateProjectHandler() {
    setContent('AddProject');
  }

  function onCancelHandler() {
    setContent('NoProject');
  }
  
  function onMenuClickHandler(){
    setContent('NoProject');
  }

  function addNewProjectHandler(title, description, date) {
    setProjects({
      ...projects,
      [title]: {
        description: description,
        dueDate: date,
        tasks: []
      }
    });
    setContent('NoProject');
  }

  function viewProjectHandler(clickedProject) {
    setContent(clickedProject);
  }

  function onDeleteProjectHandler(project) {
    const projectsCopy = { ...projects };
    delete projectsCopy[project];
    setProjects(projectsCopy);
    setContent('NoProject');
  }

  function addTaskToProjectHandler(project, task) {
    setProjects({
      ...projects,
      [project]: {
        ...projects[project],
        tasks: [
          ...projects[project].tasks,
          task
        ]
      }
    })
  }

  function removeTaskFromProjectHandler(project, task) {
    setProjects({
      ...projects,
      [project]: {
        ...projects[project],
        tasks: projects[project].tasks.filter(v => v !== task)
      }
    })
  }

  return (
    <>
      <main className='lg:flex'>
        <div className='lg:flex-[0.15] p-12 bg-slate-800 lg:h-[calc(100vh-3rem)] text-slate-100 space-y-8 lg:rounded-tr-2xl lg:mt-12 text-center lg:text-left'>
          <Menu onCreateProject={onCreateProjectHandler} projects={projects} onProjectClick={viewProjectHandler} onMenuClick={onMenuClickHandler} />
        </div>
        <div className='lg:flex-[0.85] flex-col lg:content-center text-center lg:h-[calc(100vh-3rem)] space-y-8 mt-12'>
          {
            content == 'NoProject' ? <NoProject onCreateProject={onCreateProjectHandler} /> :
              content == 'AddProject' ? <AddProject onCancel={onCancelHandler} onSave={addNewProjectHandler} projects={projects} /> :
                <Project onDelete={() => onDeleteProjectHandler(content)} title={content} project={projects[content]} onAddTask={addTaskToProjectHandler} onRemoveTask={removeTaskFromProjectHandler} />
          }
        </div>
      </main>
    </>
  );
}

export default App;
