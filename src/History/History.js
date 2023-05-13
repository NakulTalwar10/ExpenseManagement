import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/globalContext';

function History() {
    const {transactionHistory} = useGlobalContext()

    const [...history] = transactionHistory()

    return (
        <HistoryStyled>
            <h2>Recent History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    
    .history-item{
        background: #F7D0E8;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1.5rem;
        margin: 0.5rem 0;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.2rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        
        &:hover{
            background: #FCF6F9;
            transform: translateY(-3px);
            box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
        }
    }
`;


export default History