
import styles from './App.module.css'
import { Navbar } from './components/NavBar/Navbar'
import { UsePageTracking } from './components/UsePageTracking/UsePageTracking'

function App() {
  UsePageTracking()
  
  return (
    <div className={styles.App}>
        <Navbar/>
    </div>
  )
}

export default App
