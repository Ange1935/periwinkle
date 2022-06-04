import React from 'react'
import tw from "tailwind-styled-components"
import { Amblist } from '../data/Amblist'

const rideselector = () => {
  return (
    <Wrapper>
      <Title>Choose a ride,or Swipe up for more</Title>
      <AmbulanceList>
         {Amblist.map((car,index)=>(
          <Amb key={index}>
          <AmbImage src={car.imgUrl} />
          <AmbDetails>
              <ServiceSection>{car.service}</ServiceSection>
              <TimeSection>5 min away</TimeSection>
          </AmbDetails>
          <Price>Rs.20</Price>
       </Amb>   
         ))}
      </AmbulanceList>
    </Wrapper>
  )
}

export default rideselector
const Wrapper=tw.div`
flex-1 overflow-y-scroll flex flex-col
`

const AmbulanceList=tw.div`
overflow-y-scroll
`
const Title=tw.div`
text-gray-500 text-center text-xs py-2 border-b
`
const Amb=tw.div`
flex p-4 items-center
`
const AmbImage=tw.img`
h-14 mr-4
`
const AmbDetails=tw.div`
flex-1
`
const ServiceSection=tw.div`
font-medium
`
const TimeSection=tw.div`
text-xs text-blue-500
`
const Price=tw.div`
text-sm
`