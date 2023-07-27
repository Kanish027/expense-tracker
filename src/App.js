import 'bootstrap/dist/css/bootstrap.min.css';
import AddExpense from './components/Modals';
import ExpenseItem from './components/ExpenseItem';
import { AppProvider } from './context/AddContext';
function App() {
  return (
    <AppProvider>
    <div className="container">
      <div className='d-flex mt-3 justify-content-between mb-4'>
        <div>
          <h1>My Expense Manager</h1>
        </div>
        <div className='d-flex mt-3'>
          <div className='ms-3 me-3'>
            {/* <button >New Expense</button> */}
            <AddExpense/>
          </div>
        </div>
      </div>
      <ExpenseItem/>
    </div>
    </AppProvider>
  );
}

export default App;
