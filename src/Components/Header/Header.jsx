import bank from '../images/bank.svg'
import Github from '../images/github.svg';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
           <div className="header">
                <div className="header-logo">
                    Expenser <img src={bank} alt=""/>
                </div>
                <div className="header-button">
                    
                     <img src={Github} alt=""/> Star
                    
                </div>
           </div>
        </div>
    )
}

export default Header