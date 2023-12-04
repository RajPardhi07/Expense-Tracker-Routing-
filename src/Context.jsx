import { createContext,useState } from 'react'



// init create context
export const ExpenseContext = createContext()
const Context = (props) => {
    const [Expenses, setExpenses] = useState(
        JSON.parse(localStorage.getItem("expense")) || []
    )
  return (<ExpenseContext.Provider value={[Expenses, setExpenses]}>
     {props.children}
     </ExpenseContext.Provider>
  )
  
}


export default Context;