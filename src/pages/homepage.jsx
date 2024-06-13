import "./homepage.scss"

function App() {
  return (
    <div className='homepage'>
       <div className="textcontainer">
        <div className="wrapper">
            <h1 className="title">
                One Stop Solution For Your Real Estate Search
            </h1>
            <p>
                description dalna hai yha 
            </p>
            <searchbar/>
            <div className="boxes">
                <div className="box">
                    <h1>11+</h1>
                    <h2>Years Of Experience</h2>
                </div>
                <div className="box">
                    <h1>111+</h1>
                    <h2>Award Gained</h2>
                </div>
                <div className="box">
                    <h1>1111+</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>

        </div>
       </div>
       <div className="imagecontainer">
        <img src="/pic1.jpeg" alt="" />
        </div> 
    </div>
  )
}

export default homepage