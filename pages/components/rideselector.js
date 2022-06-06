import { data } from 'autoprefixer'
import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import { Amblist } from '../data/Amblist'

const rideselector = ({pickupcoordinates,dropoffcoordinates}) => {
  const [rideduration,setrideduration]=useState(0)

  useEffect(()=>{
      rideduration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupcoordinates[0]},${pickupcoordinates[1]};${dropoffcoordinates[0]},${dropoffcoordinates[1]}?access_token=pk.eyJ1IjoiZ2xvcnlhbmdlbGluYS0xOSIsImEiOiJjbDN3djU1aWEwZHNvM2pxdDcxb2loY2tpIn0.FyJO6hn93hwqX2CGkmwk5g`
      ).then(res=>res.json())
      .then(data=>{
        setrideduration(data.routes[0].duration/100);
      })
      .catch((e)=>console.log(e));

  },[pickupcoordinates,dropoffcoordinates])


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
          <Price>{'Rs'+(rideduration*car.multiplier).toFixed(2)}</Price>
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