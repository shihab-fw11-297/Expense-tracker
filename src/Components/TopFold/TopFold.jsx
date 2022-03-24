import './TopFold.css'
import search from '../images/search.svg';
import plus from '../images/plus.svg';
import cross from '../images/cross.svg';
import back from '../images/back.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { searchExpense } from "../../Redux/action/action";

const TopFold = () => {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch();

    const handleQuery = (e) => {
        setQuery(e.target.value)
        dispatch(searchExpense(e.target.value));
    }

    return (
        <div className="TopFold">
            {window.location.pathname === '/' ?
                <div className="home-topfold">
                    <div className="search-bar">
                        <img src={search} alt="" />
                        <input type="text" placeholder='Serch for Expenses' value={query} onChange={(e) => handleQuery(e)} />
                    </div>

                    <Link to="/add-expense">
                        <div className="add-btn">
                            <img src={plus} alt="" />
                            <label>Add</label>
                        </div>
                    </Link>
                </div>
                :

                <div className="add-topfold">
                    <Link to="/">
                        <div className="add-topfold-button">
                            <img src={back} alt="" />
                            <lable>Back</lable>
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="add-topfold-button">
                            <img src={cross} alt="" />
                            <lable>Cancel</lable>
                        </div>
                    </Link>
                </div>
            }

        </div>
    )
}

export default TopFold