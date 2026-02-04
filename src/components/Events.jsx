
function Events() {
  
  const handleClickH1 = () => {
    console.log("clicking!")
  }

  const handleMouseEnter = () => {
    console.log("mouse entered!")
  }

  const handleMouseLeave = () => {
    console.log("mouse left!")
  }

  return (
    <div>
      
      <button onClick={handleClickH1}>Some Button</button>

      <h2 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Another Title!</h2>

    </div>
  )
}
export default Events