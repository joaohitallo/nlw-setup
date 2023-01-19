import "./styles/global.css"
import 'tailwindcss/tailwind.css';

import { Habit } from "./components/Habit"

function App() {
  return (
    <div>
      <Habit completed={5}/>
      <Habit completed={10}/>
    </div>
  )
}

export default App
