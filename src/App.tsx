// import { useState } from 'react'
import { ThemeProvider } from "@/components/theme-provider"
import Hero from '@/components/Hero'
import {ModeToggle} from '@/components/mode-toggle'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
<div className="App max-w-7xl mx-auto bg-slate-200">
  <ModeToggle></ModeToggle>
  <h1>Hello Portfolio</h1>
  <Hero />
</div>
</ThemeProvider>
  )
}

export default App




