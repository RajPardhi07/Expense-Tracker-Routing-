import { useContext } from 'react'
import './style.css'
import { ExpenseContext } from './Context'
import { Link } from 'react-router-dom'

const show = () => {
    // const { expense, setexpense } = props;
    const [expense, setexpense] = useContext(ExpenseContext)

    const deletehandler = (index) => {
        const copyexpense = [...expense]
        copyexpense.splice(index, 1)
        setexpense(copyexpense)
        localStorage.setItem("expense", JSON.stringify(copyexpense))
    }



    return (
        <>
        
                <Link className='filter' to='/filter'>Filter</Link>
        <div className='main'>

            
            <h2>
                Total Spent = Rs
                {expense.length === 0 ? "No Amount" : expense.reduce((ac, cv) => ac + +cv.amount, 0)}{" "}
            </h2>
            


            <ol className='over'>
                {expense.length === 0 ? "No Data Pesent" : expense.map((e, index) => (
                    <li className='row' key={index}>{e.remark} ({e.payment})-{e.category} {" "} ₹{e.amount}
                        <button onClick={() => (deletehandler(index))} className='btn'>Delete</button>
                    </li>
                ))}
            </ol>

        </div>
            <Link className='back' to='/create'>Go back</Link>
        </>
    )
}

export default show