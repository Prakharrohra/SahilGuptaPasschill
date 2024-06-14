import "./searchbar.scss"

function Searchbar() {
  return (
    <div className='searchbar'>
      <div className="type"></div>
      <form>
        <input type="text" name="location" placeholder='City Location'/>
        <input type="number"
         name="minPice"
         
          placeholder='Min Price'/>
        <input type="number" name="maxPice" placeholder='Max Price'/>
      </form>
    </div>
  )
}

export default App