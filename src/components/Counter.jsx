import { useState } from "react"

function Counter() {

  // A State is an object inside components that record ALL values that will change based on events. 
  // After any change, react will cause a re-render of the component to reflect the new values.
  const [counterValue, setCounterValue] = useState(0) // initial stata value inside parenthesis.
  //1. counterValue => the state
  //2. setCounterValue => function used to update the state

  const handleIncreaseCounter = () => {
    
    // Using set functions will ALWAYS cause a re-render of the component when the state changes, reflecting the new values
    setCounterValue( counterValue + 1 ) // pass the new value inside the parenthesis

    //! Rule: WE SHOULD NEVER DIRECTLY CHANGE OR MUTATE THE STATE. ALWAYS USE the set function.
  }

  const handleDivideByTwo = () => {

    let divisionValue = counterValue / 2

    setCounterValue( divisionValue ) 
  }

  return (
    <div>
      
        <h2>Counter!</h2>

        <h1>{counterValue}</h1>

        <button onClick={handleIncreaseCounter}>Increase!</button>
        <button onClick={handleDivideByTwo}>Divide by 2</button>

        <p>Recorded Time: 0</p>

    </div>
  )
}
export default Counter
