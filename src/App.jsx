import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SideBar from './components/SideBar'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  })

  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancleAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      }
    })
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const newTask = {
        text: text,
        id: Math.random(),
        projectId: prevState.selectedProjectId,
      }

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      }
    })
  }

  function handleDeleteTask() {}

  console.log('App State : ', projectState)

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  )

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  )

  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCancleAddProject}
      />
    )
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {/* <NewProject />
      <NoProjectSelected onStartAddProject={handleStartAddProject} /> */}
      {content}
    </main>
  )
}

export default App
