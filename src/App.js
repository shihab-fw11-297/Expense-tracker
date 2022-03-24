import './App.css';
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import { Switch, Route } from 'react-router-dom'
import AddExpense from './Pages/Add-Expense/AddExpense';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/add-expense">
          <AddExpense />
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
