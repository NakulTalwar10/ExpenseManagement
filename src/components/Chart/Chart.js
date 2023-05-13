import React from 'react'
import { Chart as ChartJs, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js'

import {Line} from 'react-chartjs-2'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext'
import { dateFormat } from '../../utils/dateFormat'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
)

function Chart() {
    const {incomes, expenses} = useGlobalContext()

    const data = {
        labels: incomes.map((inc) =>{
            const {date} = inc
            return dateFormat(date)
        }),
        datasets: [
            {
                label: 'Income',
                data: [
                    ...incomes.map((income) => {
                        const {amount} = income
                        return amount
                    })
                ],
                backgroundColor: '#42AD00',
                tension: .2
            },
            {
                label: 'Expenses',
                data: [
                    ...expenses.map((expense) => {
                        const {amount} = expense
                        return amount
                    })
                ],
                backgroundColor: '#F56692',
                tension: .2
            }
        ]
    }

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Monthly Income and Expenses'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `$${context.parsed.y}`
                    }
                }
            },
            legend: {
                labels: {
                    color: 'rgba(34, 34, 96, .6)',
                    boxWidth: 10,
                    padding: 20,
                    usePointStyle: true,
                    pointStyle: 'circle',
                }
            }
        }
    }

    return (
        <ChartStyled >
            <Line data={data} options={options} />
        </ChartStyled>
    )
}

const ChartStyled = styled.div`
  background: linear-gradient(180deg, #FFFFFF 0%, #E7E7E7 100%);
  border: 2px solid #FFFFFF;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
  padding: 1rem;
  border-radius: 20px;
  height: 100%;
  width: 100%;
  margin: 2rem 0;

  @media only screen and (min-width: 768px) {
    max-width: 600px;
    margin: 2rem auto;
  }
  
  @media only screen and (min-width: 992px) {
    max-width: 800px;
    margin: 3rem auto;
    padding: 2rem;
  }
`;


export default Chart;
