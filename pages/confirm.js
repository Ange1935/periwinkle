import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useRouter } from 'next/router'
import Rideselector from './components/Rideselector'
import Link from 'next/link'


const Confirm = () => {
  const router = useRouter()
  const {pickup,dropoff} = router.query
  

    const [pickupcoordinates,setpickupcoordinates]=useState([0,0])
    const [dropoffcoordinates,setdropoffcoordinates]=useState([0,0])

  const getPickUpCoordinates=(pickup)=>{
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
      new URLSearchParams({
          access_token:"pk.eyJ1IjoiZ2xvcnlhbmdlbGluYS0xOSIsImEiOiJjbDN3djU1aWEwZHNvM2pxdDcxb2loY2tpIn0.FyJO6hn93hwqX2CGkmwk5g",
          limit:1
      })
      )
      .then(response=>response.json())
      .then(data=>{
        setdropoffcoordinates(data.features[0].center)
      })
  }

  const getDropOffCoordinates=(dropoff)=>{
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
    new URLSearchParams({
        access_token:"pk.eyJ1IjoiZ2xvcnlhbmdlbGluYS0xOSIsImEiOiJjbDN3djU1aWEwZHNvM2pxdDcxb2loY2tpIn0.FyJO6hn93hwqX2CGkmwk5g",
        limit:1
    })
    )
    .then(response=>response.json())
    .then(data=>{
        setpickupcoordinates(data.features[0].center)
    })    
  }

  useEffect(()=>{
    getPickUpCoordinates(pickup);
    getDropOffCoordinates(dropoff);
  },[pickup,dropoff])

  return (
    <Wrapper>
        {/*Button Container*/}
    <Link href="/search">
        <BackButton src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAFkjxGT1kX9nVu88c4AktuMuABPX2kN1AA&usqp=CAU"/>
    </Link>
       {/*Button Container*/}
        <Map 
            pickupcoordinates={pickupcoordinates}
            dropoffcoordinates={dropoffcoordinates}
        />
        {/*ridecontainer*/}
        <RideContainer>
        <Rideselector 
        pickupcoordinates={pickupcoordinates}
        dropoffcoordinates={dropoffcoordinates}
        />
        <Confirmbuttoncontainer>
          <ConfirmButton>
          Confirm PWinkle Ride 
          </ConfirmButton>
        </Confirmbuttoncontainer>
        </RideContainer>
    </Wrapper>
  )
}

export default Confirm

const Confirmbuttoncontainer=tw.div`
border-t-2
`


const Wrapper=tw.div`
flex h-screen flex-col
`
const RideContainer=tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButton=tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ButtonContainer=tw.div`
bg-white px-4
`

const BackButton=tw.img`
h-12 w-10 cursor-pointer rounded-full
`