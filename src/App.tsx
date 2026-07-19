import Keyboard from './components/Keyboard'
import TabPanel from './components/TabPanel'

function App() {

  return (
    <div className="bg-board">
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 font-mono">
        <h1 className="text-center text-4xl sm:text-6xl text-cream-text">zainab siddiqui</h1>
        <span className="text-muted-text">full stack software engineer - java, angular, react</span>
        <Keyboard />
      </section>

      <section id="content">
        <TabPanel />
      </section>
    </div>
  )
}

export default App
