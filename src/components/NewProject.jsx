import { useRef } from 'react'
import Button from './Button'
import Input from './Input'

export default function NewProject({ onAddProject }) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enetedDueDate = dueDate.current.value

    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enetedDueDate,
    })
  }

  return (
    <div className='w-[65rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <Button>Cancel</Button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>
      <div>
        <Input type='text' ref={title} label='Title' />
        <Input ref={description} label='Desccription' textArea />
        <Input type='date' ref={dueDate} label='Due Date' />
      </div>
    </div>
  )
}
