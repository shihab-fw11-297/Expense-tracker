import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import './ExpenseList.css'
import { toast, ToastContainer } from "react-toastify";

const ExpenseList = () => {

    const { expenseList: list, query } = useSelector((state) => state.expenses);
    const notifySuccess = () => toast.success("Expense Deleted!");
    const filteredList = list.filter((item) => item.title.includes(query));

    return (
        <div className="expense-list">
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
            />

            {filteredList.length ? (
                filteredList.map((item) => (
                    <Card item={item} notifySuccess={notifySuccess} />
                ))
            ) : (
                <div className="empty-state">
                    <img
                        src={require("../../constant/images/empty.png")}
                        alt="No Expenses"
                        className="empty-image"
                    />
                    <label>Uh Oh! Your expense list is empty.</label>
                </div>
            )}
        </div>
    )
}

export default ExpenseList