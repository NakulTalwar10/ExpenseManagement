import React,{useEffect} from 'react'
import styled from "styled-components";
import { MainLayout } from '../../styles/Layouts';
import bg from '../../img/bg.png'
import Orb from '../../components/Orb/Orb';
import Navigation from '../../components/Navigation/Navigation';

import { useGlobalContext } from '../../context/globalContext';
import { useMemo, useState } from 'react';
import Income from '../../components/Income/Income';
import Expenses from '../../components/Expenses/Expenses';
import Dashboard from '../../components/Dashboard/Dashboard';



const Home = () => {
    const [active, setActive] = useState(1)
    
    const [userName, setUserName] = useState('');

    const global = useGlobalContext()
    console.log(global);
  
    const displayData = () => {
      switch(active){
        case 1:
          return <Dashboard/>
        case 2:
          return <Dashboard />
        case 3:
          return <Income/>
        case 4: 
          return <Expenses/>
        default: 
          return <Dashboard />
      }
    }
  
    const orbMemo = useMemo(() => {
      return <Orb />
    },[])
  


    useEffect(() => {
      const userName = localStorage.getItem('userName');
      if (userName) {
          setUserName(userName);
      }
  }, []);
  
  return (
    <div>
 <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} userName={userName} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
    </div>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;
  
  main{
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    padding: 2rem;
    max-width: 1200px;
    
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;
export default Home