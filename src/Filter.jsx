import { useContext, useState } from 'react'
import { ExpenseContext } from './Context';
import { Link } from 'react-router-dom';

const Filter = () => {

  const [expense] = useContext(ExpenseContext);

  const [key, setkey] = useState("")
  const [value, setvalue] = useState("")

  const [filterexpenses, setfilterexpenses] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
    const filterexpenses = expense.filter((e) => e[key] == value);
    setfilterexpenses(filterexpenses);
  }


  return (
    <div className='find'>

<h1>Filter Expenses</h1>
      <form onSubmit={submithandler}>
        <select onChange={(e) => setkey(e.target.value)} value={key}>
          <option value="amount">Amount</option>
          <option value="remark">Remark</option>
          <option value="payment">Payment</option>
        </select>
        <input value={value} onChange={(e) => setvalue(e.target.value)} type="text" placeholder='Find Expense' />
        <button>Filter</button>

      </form>
      {filterexpenses.length === 0
        ? ""
        : filterexpenses.map((e, index) => (
          <li key={index}>
            {e.remark}({e.payment}) - {e.amount}{" "}
          </li>



        ))}


<Link className='go' to='/show'>Go Back</Link>
    </div>
  )
}

export default Filter