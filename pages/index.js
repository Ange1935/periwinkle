import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
import Map from './components/Map'
import Link from 'next/link'

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <Actionitems>
      {/*Header*/}
      <Header>
        <PWLogo src="https://i.pinimg.com/564x/44/f7/6f/44f76fff00352daab6ff67385e5f3b9d.jpg" />
        <Profile>
          <Name>Glory Angelina</Name>
          <UserImage 
          src="https://i.pinimg.com/236x/49/ce/d2/49ced2e29b6d4945a13be722bac54642.jpg"
          />
        </Profile>
         </Header>
      {/*ActionButtons*/}
      <ActionButtons>
        <Link href="/search">
        <ActionButton>
          <ActionButtonImage src="https://i.pinimg.com/236x/80/c3/d3/80c3d3fac38f968a9d81aa4c1cfa9984.jpg"/>
          By Road</ActionButton>
          </Link>
        <ActionButton>
        <ActionButtonImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5vEfXSvyiG3LK4Rq0CvYkQpgN-FYbTQfAg&usqp=CAU"/>
          By Air</ActionButton>
        <ActionButton>
        <ActionButtonImage src="https://i.pinimg.com/236x/1c/e2/3f/1ce23fb201e15a4a0201b19263c5ec54.jpg"/>
          Reserve</ActionButton>
      </ActionButtons>
      {/*InputButton*/}
      <InputButton>
      Where to?
      </InputButton>
      </Actionitems>
    </Wrapper>
  )
}
const Wrapper=tw.div`
flex flex-col h-screen
`
const Actionitems=tw.div`
flex-1 p-4
`
const Header=tw.div`
flex justify-between items-center
`

const PWLogo=tw.img`
h-28 rounded-full
`
const Profile=tw.div`
flex items-center
`
const Name=tw.div`
mr-4 w-20  
`
const UserImage=tw.img`
h-16 w-16 rounded-full border border-gray-200 p-px
`
const ActionButtons=tw.div`
flex
`
const ActionButton=tw.div`
flex bg-gray-50 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-l
`
const ActionButtonImage=tw.img`
h-3/5 rounded-full
`
const InputButton=tw.div`
h-20 bg-gray-100 text-xl p-4 flex items-center mt-8
`