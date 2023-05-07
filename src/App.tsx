import './App.css'
import ExpenseList from "./expense-tracker/components/ExpenseList";
import {useState} from "react";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilters from "./expense-tracker/components/ExpenseFilters";
import categories from "./expense-tracker/categories";



function App() {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenses, setExpenses] = useState([
        {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
        {id: 2, description: 'bbb', amount: 25, category: 'Utilities'},
        {id: 3, description: 'ddd', amount: 15, category: 'Utilities'},
        {id: 4, description: 'ttt', amount: 40, category: 'Utilities'},
    ])


    const visibleExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses

    const deleteHandler = (id: number) => {
        setExpenses(expenses.filter(item => item.id !== id))
    }

    return (
        <div>
            <div className="mb-5">
                <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
            </div>
            <div className="mb-3">
                <ExpenseFilters onSelectCategory={category => setSelectedCategory(category)}/>

            </div>
            <ExpenseList expenses={visibleExpenses} onDelete={(id) => deleteHandler(id)}/>
        </div>
    )
}

export default App
