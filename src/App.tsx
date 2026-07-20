import Keyboard from './components/Keyboard'
import TabPanel from './components/TabPanel'
import { useState } from 'react'
import type { Section } from './types'

function App() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  
  function handleSectionChange(section: Section) {
      setActiveSection(section);
      document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div id="hero" className="bg-board">
      <section className="min-h-screen flex flex-col items-center justify-center gap-8 font-mono">
        <h1 className="text-center text-4xl sm:text-6xl text-cream-text">
          {"zainab siddiqui" }     
          <span className="inline-block w-0.5 h-12 bg-accent ml-1 animate-pulse" />
        </h1>
        <span className="text-muted-text">full stack software engineer - java, angular, react</span>
        <Keyboard onSectionChange={handleSectionChange}/>
      </section>

      <section id="content" className="pb-16 scroll-mt-8">
        <TabPanel activeSection={activeSection} onTabClick={handleSectionChange}/>
      </section>
    </div>
  )
}

export default App
