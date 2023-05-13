import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, rupee, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}) {

    const categoryIcon = () =>{
        switch(category) {
            case 'salary':
                return money;
            case 'freelancing':
                return freelance
            case 'investments':
                return stocks;
            case 'stocks':
                return users;
            case 'bitcoin':
                return bitcoin;
            case 'bank':
                return card;
            case 'youtube':
                return yt;
            case 'other':
                return piggy;
            default:
                return ''
        }
    }

    const expenseCatIcon = () => {
        switch (category) {
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'takeaways':
                return takeaway;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return ''
        }
    }

    console.log('type', type)

    return (
        <IncomeItemStyled indicator={indicatorColor}>
            <div className="icon">
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}
            </div>
            <div className="content">
                <h5>{title}</h5>
                <div className="inner-content">
                    <div className="text">
                        <p>{rupee} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                        </p>
                    </div>
                    <div className="btn-con">
                        <Button 
                            icon={trash}
                            bPad={'1rem'}
                            bRad={'50%'}
                            bg={'var(--primary-color'}
                            color={'#fff'}
                            iColor={'#fff'}
                            hColor={'var(--color-green)'}
                            onClick={() => deleteItem(id)}
                        />
                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  max-width: 100%;
  overflow: hidden;
  padding: 1rem;
  transition: box-shadow 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.1);
  }

  .icon {
    align-items: center;
    background-color: #F5F5F5;
    border-radius: 20px;
    border: 2px solid #FFFFFF;
    display: flex;
    height: 80px;
    justify-content: center;
    width: 80px;
    
    i {
      font-size: 2.6rem;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
    padding: 1rem;
    position: relative;
    
    h5 {
      color: #222260;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
      padding-left: 2.5rem;
      position: relative;
      
      &::before {
        background-color: ${props => props.indicator};
        border-radius: 50%;
        content: '';
        height: 0.8rem;
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 0.8rem;
      }
    }

    .inner-content {
      align-items: center;
      display: flex;
      justify-content: space-between;
      
      .text {
        align-items: center;
        display: flex;
        gap: 1rem;

        p {
          align-items: center;
          color: #777;
          display: flex;
          gap: 0.5rem;
          opacity: 0.8;
        }
      }
    }
    
    @media (min-width: 768px) {
      flex-direction: row;
      padding: 1.5rem;
    }
  }
`;



export default IncomeItem