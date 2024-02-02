
import styles from './App.module.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing } from './components/Landing/Landing'
import { Navbar } from './components/NavBar/Navbar'
import { About } from './components/About/About'
import { Experience } from './components/Experience/Experience'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
        <Navbar/>
        <Landing/>
    </div>
  )
}

export default App
