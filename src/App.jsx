import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import Homepage from "./pages/homepage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="content">
        <Homepage/>
      </div>
    </div>
  )
}

export default App