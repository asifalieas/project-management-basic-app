import NewProject from './components/NewProject'
import SideBar from './components/SideBar'

function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <SideBar />
      <NewProject />
    </main>
  )
}

export default App
