import React from 'react';
import {Container,Wrapper,WrapperIcons,Title,SubTitle,Pourcentage} from './Style';

const CardCounterDashboard = ({data}) => {
  return (
    <Container>
     <Wrapper>
        <WrapperIcons back={data.backgroundIcon}>{data.icon}</WrapperIcons>
        <Title>{data.counter}<Pourcentage color={data.percent}>{data.percent}%</Pourcentage></Title>
        <SubTitle>{data.title}</SubTitle>
        
     </Wrapper>
    </Container>
  )
}

export default CardCounterDashboard