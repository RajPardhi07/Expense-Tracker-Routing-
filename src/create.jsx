import { useContext, useState } from 'react'
import { ExpenseContext } from './Context'
import { useNavigate } from 'react-router-dom'
import './style.css' 


const create = () => {
    const navigate = useNavigate()
    const [ expense, setexpense ] = useContext(ExpenseContext)

     const [amount, setamount] = useState(0)
    const [remark, setremark] = useState("")
    const [category, setcategory] = useState("")
    const [payment, setpayment] = useState("cash")
    

    const submithandler = (e) => {
        e.preventDefault();

        navigate('/show')
        const newexpense = { amount, remark, category, payment }

        const copyexpense = [...expense]
        copyexpense.push(newexpense)
        setexpense(copyexpense)

         localStorage.setItem("expense", JSON.stringify(copyexpense))
        
        //    setexpense([...expense, newexpense])
        
    }
    

    return (
        <div className='head'>
            <h1>Added Expense</h1>
            <form onSubmit={submithandler}>
             <input onChange={(e) => setamount(e.target.value)} type="Number" placeholder='Amount' />
                <input onChange={(e) => setremark(e.target.value)} type="text" placeholder='remark' />
                {/* <input onChange={(e) => setcategory(e.target.value)} type="text" placeholder='categoty' /> */}
                <select name="cash" value={payment} onChange={(e) => setpayment(e.target.value)}>
                    <option value="cash">Cash</option>
                    <option value="online">Online</option>
                    <option value="card">Card</option>
                </select>
                {/* <input className='submit' type="submit" /> */}
                <button className='submit'>Submit</button>

            </form>
            
        </div>
    )
}

export default create