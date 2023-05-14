import React, { useContext, useState } from "react"
import axios from 'axios'

const INCOME_URL="https://expensebackend-n7i7.onrender.com/api/income/"
const EXPENSE_URL="https://expensebackend-n7i7.onrender.com/api/expense/"


const GlobalContext = React.createContext()
 
export const GlobalProvider = ({children}) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    //calculate incomes

        //calculate incomes
        const addIncome = async (income) => {
            try {
                const response = await axios.post(`${INCOME_URL}add-income`, income, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                console.log(response.data)
                setIncomes([...incomes, response.data]) // update state here
            } catch (err) {
                console.log(err)
                setError(err.response.data.message)
            }
            getIncomes() // call getIncomes() after state has been updated
        }
    
        const getIncomes = async () => {
            try {
                const response = await axios.get(`${INCOME_URL}get-income`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                setIncomes(response.data)
                console.log(response.data)
            } catch (err) {
                console.log(err)
                setError(err.response.data.message)
            }
        }
    
        const deleteIncome = async (id) => {
            try {
                const res  = await axios.delete(`${INCOME_URL}delete-income/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
                console.log(res.data)
                getIncomes()
            } catch (err) {
                console.log(err)
                setError(err.response.data.message)
            }
        }
    
        const totalIncome = () => {
            let totalIncome = 0;
            incomes.forEach((income) =>{
                totalIncome = totalIncome + income.amount
            })
    
            return totalIncome;
        }

    //calculate incomes
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${EXPENSE_URL}add-expense`, expense, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            console.log(response.data)
            setExpenses([...expenses, response.data]) // update state here
        } catch (err) {
            console.log(err)
            setError(err.response.data.message)
        }
        getExpenses() // call getExpenses() after state has been updated
    }
    

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${EXPENSE_URL}get-expense`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            setExpenses(response.data)
            console.log(response.data)
        } catch (err) {
            console.log(err)
            setError(err.response.data.message)
        }
    }

    const deleteExpense = async (id) => {
        try {
            const res  = await axios.delete(`${EXPENSE_URL}delete-expense/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })
            console.log(res.data)
            getExpenses()
        } catch (err) {
            console.log(err)
            setError(err.response.data.message)
        }
    }

    const totalExpenses = () => {
        let totalExpenses = 0;
        expenses.forEach((expense) => {
            totalExpenses = totalExpenses + expense.amount
        })
        
        return totalExpenses;
    }
    


    const totalBalance = () => {
        return totalIncome() - totalExpenses()
    }

    const transactionHistory = () => {
        const history = [...incomes, ...expenses]
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt)
        })

        return history.slice(0, 3)
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}