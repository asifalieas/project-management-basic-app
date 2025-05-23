export default function SideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600  hover:text-stone-100'>
        <button onClick={onStartAddProject}>+ Add Projects</button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-small my-1 hover:text-stone-200 hover:bg-stone-800'

          if (project.id === selectedProjectId) {
            console.log(true, project.id, selectedProjectId)
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
            console.log(false, project.id, selectedProjectId)
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}
