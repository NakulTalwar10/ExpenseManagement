import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../Incomeitem/IncomeItem';

function Expenses() {
  const {  expenses, getExpenses, deleteExpense, totalExpenses } =
    useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <ExpenseStyled>
      <InnerLayout>
        <h1 className='font-bold'>Expenses</h1>
        <h2 className="total-income">
          Total Expense: <span>${totalExpenses()}</span>
        </h2>
        <div className="income-content">
          <div className="form-container">
            <ExpenseForm />
          </div>
          <div className="incomes">
            {expenses.map((income) => {
              const { _id, title, amount, date, category, description, type } =
                income;

              return (
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  type={type}
                  category={category}
                  indicatorColor="var(--color-green)"
                  deleteItem={deleteExpense}
                />
              );
            })}
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
}

const ExpenseStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin-top: 3rem;
    margin-bottom: 2rem;
    text-align: center;
    color: var(--color-text);
  }

  .total-income {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-background-secondary);
    border: 2px solid var(--color-background-tertiary);
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1.5rem;
    margin: 2rem 0;
    font-size: 2.5rem;
    gap: 1rem;

    span:first-of-type {
      font-weight: 800;
      color: var(--color-green);
    }
  }

  .income-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-container {
      width: 100%;
      max-width: 500px;
      margin-bottom: 2rem;
    }

    .incomes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      width: 100%;
      max-width: 1200px;
    }
  }
`;

export default Expenses