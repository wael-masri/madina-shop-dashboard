import React from 'react'
import { Container, SpanColor } from './Style'

const ReplyField = ({params}) => {

  return (
   
    <Container>
    {params.row.reply ? <SpanColor stts="done">Done</SpanColor> : <SpanColor>Waiting</SpanColor>}
    </Container>
  )
}

export default ReplyField