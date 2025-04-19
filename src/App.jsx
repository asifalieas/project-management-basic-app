import { useState } from 'react'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SideBar from './components/SideBar'

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  })

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

  console.log('App State : ', projectState)

  let content

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
      />
      {/* <NewProject />
      <NoProjectSelected onStartAddProject={handleStartAddProject} /> */}
      {content}
    </main>
  )
}

export default App
