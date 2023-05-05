import React from 'react'
import { Badge, WrapperActive, WrapperBadge } from './Style'

const CustomActive = ({params}) => {
  return (
  <WrapperActive>
    <WrapperBadge>
        <Badge active={params.row.active}></Badge>
    </WrapperBadge>
  </WrapperActive>
  )
}

export default CustomActive