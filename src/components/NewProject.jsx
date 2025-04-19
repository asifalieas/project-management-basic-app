import { useRef } from 'react'
import Button from './Button'
import Input from './Input'
import Modal from './Modal'

export default function NewProject({ onAddProject }) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  const modal = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enetedDueDate = dueDate.current.value

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enetedDueDate.trim() === ''
    ) {
      modal.current.open()
      console.log('invalid input')
      return
    }
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enetedDueDate,
    })
  }

  return (
    <>
      <Modal ref={modal} buttonCaption='close'>
        <h2>Invalid input</h2>
        <p>Oops...seems like you forgot to enter a value.</p>
        <p>
          Please make sure you provide a valid input value for all the fields.
        </p>
      </Modal>
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
    </>
  )
}
