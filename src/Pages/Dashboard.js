
import React from 'react'
import styled from 'styled-components'
import { DashboardBadges } from '../Components'
export const Container = styled.div`
width: 100%;
`;
const Dashboard = () => {
  return (
    <Container>
    <DashboardBadges />
    </Container>
  )
}

export default Dashboard