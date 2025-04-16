import noProjectsImage from '../assets/no-projects.png'
import Button from './Button'

export default function NoProjectSelected() {
  return (
    <div className='mt-24 text-center w-3/4'>
      <img
        src={noProjectsImage}
        alt='Empty Task List Image'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold my-4 text-stone-500'>
        No Project Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with an
      </p>
      <p className='mt-8'>
        <Button>Save</Button>
      </p>
    </div>
  )
}
