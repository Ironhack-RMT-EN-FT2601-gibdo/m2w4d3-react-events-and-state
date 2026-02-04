import { useState } from "react"

function Counter() {

  // let counterValue = 0;
  // a State is an object inside components that record ALL values that will change. After the changes, react will cause a re-render of the component.
  const [counterValue, setCounterValue] = useState(0)
  // const [recordedValue, setRecordedValue] = useState(0)
  //1. value of the state
  //2. function used to update the state
  console.log(counterValue)

  const handleIncreaseCounter = () => {
    // counterValue = counterValue + 1
    // console.log("trying to increase counter", counterValue)

    //! in react states, there is a rule that states: WE SHOULD NEVER DIRECTLY CHANGE THE VALUE OF THE STATE
    // counterValue = counterValue + 1
    setCounterValue( counterValue + 1 )
    // set functions will ALWAYS cause a re-render of the component when the state changes.
  }

  const handleDivideByTwo = () => {
    setCounterValue( counterValue / 2 ) 
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