import AddForm from "../../Components/Add-Form/AddForm"
import TopFold from "../../Components/TopFold/TopFold"
import './AddExpense.css'

const AddExpense = () => {
    return (
        <div className='AddExpense'>
            <TopFold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense