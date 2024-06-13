import "./layout.scss"
import Navbar from "./components/Navbar/Navbar.jsx"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
        <homepage/>
      </div>
    </div>
  )
}

export default App