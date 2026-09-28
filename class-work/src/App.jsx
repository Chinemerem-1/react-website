
import './App.css'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {

  // const description = "I am a react developer"
  // const description2 = "I am a react developer"
  // const description3 = "I am a react developer"
  // const description4 = "I am a react developer"
  // const description5 = "I am a react developer"


  // const styles = {
  //   backgroundColor: "red",
  //   width: 400
  // }

  // const styles2 = {
  //   backgroundColor: "green",
  //   width: 400
  // }

  // const styles3 = {
  //   backgroundColor: "purple",
  //   width: 400
  // }

  // const styles4 = {
  //   backgroundColor: "blue",
  //   width: 400
  // }

  // const styles5 = {
  //   backgroundColor: "orange",
  //   width: 400
  // }

  // const text1 = "I am "
  // const text2 = 30
  // const text3 = " years old."

  // const styleN = {
  //   backgroundColor: "green",
  //   width: 200,
  //   color: "white"
  // }

  return (
    <>
      {/* <div className='bg-image'>
        <h1 style={styles} >{description}</h1>
        <p style={styles2}>{description2}</p>
        <p style={styles3}>{description3}</p>
        <p style={styles4}>{description4}</p>
        <p style={styles5}>{description5}</p>

        <p style={styleN}>{text1 + text2 + text3}</p>
      </div> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Blog" element={<Blog />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
