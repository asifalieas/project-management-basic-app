import Button from './Button'
import Input from './Input'

export default function NewProject() {
  return (
    <div className='w-[65rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <Button>Cancel</Button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>
      <div>
        <Input label='Title' />
        <Input label='Desccription' textArea />
        <Input label='Due Date' />
      </div>
    </div>
  )
}
