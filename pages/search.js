import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

 const [pickup,setPickup]=useState("");
 const [dropoff,setDropOff]=useState("");

console.log(pickup)
console.log(dropoff)

  return (
    <Wrapper>
    {/*Button Container*/}
    <Link href="/">
    <ButtonContainer>
        <BackButton src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYAFkjxGT1kX9nVu88c4AktuMuABPX2kN1AA&usqp=CAU"/>
    </ButtonContainer>
    </Link>
    {/*Input Container*/}
    <InputContainer>
    <FromToIcons>
        <Circle src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRrCrvxRZadWAKpnvE_X33GRHOKH0haPTiJA&usqp=CAU" />
        <Line src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAElBMVEX///8AAAATExOvr68WFhasrKxf6U/oAAAA/0lEQVR4nO3PyQ3DMADAsPjo/is3E/RlwEJBTiA9DwCkfeZctxuOmGPs2w1HjNfthiOM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNQYqTFSY6TGSI2RGiM1RmqM1BipMVJjpMZIjZEaIzVGaozUGKkxUmOkxkiNkRojNUZqjNT8zcgcY99uOGLtvW43AMBvX8/lAvsAM/IuAAAAAElFTkSuQmCC"/>
        <Square src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIJtO3BF2GOeWw5B-dFnhD3qWOQ8F9j_S7A&usqp=CAU"/>

    </FromToIcons>
    <InputBoxes>
    <Input placeholder='Enter pickup Location'
    value={pickup}
    onChange={(e)=>setPickup(e.target.value)}
    />
    <Input placeholder='Where to?'
    value={dropoff}
    onChange={(e)=>setDropOff(e.target.value)}
    />
    </InputBoxes>
    <PlusIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJagcUqZaapsQZ3YqVhE2JXWePhGsxC4ssQ&usqp=CAU" />
    </InputContainer>
    {/*Saved Places*/}
    <SavedPlaces>
      <StarIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROxlZyOWgrMBh6PHZdMvjJT1v65Mr8U4E7w&usqp=CAU" />
      Saved Places
    </SavedPlaces>
    {/*Confirm Location*/}
    <Link href={{ pathname: '/confirm', query: { pickup: pickup,dropoff: dropoff} }}>
        <ConfirmLocation>
        Confirm Location
       </ConfirmLocation>
    </Link>
    </Wrapper>
  )
}

export default Search

const Wrapper=tw.div`
bg-gray-200 h-screen
`
const ButtonContainer=tw.div`
bg-white px-4
`
const BackButton=tw.img`
h-12 w-10 cursor-pointer
`
const InputContainer=tw.div`
bg-white flex items-center px-4 mb-2
`

const FromToIcons=tw.div`
w-10 flex flex-col mr-2 items-center
`
const Circle=tw.img`
h-2.5
`
const Line=tw.img`
h-10
`
const Square=tw.img`
h-3
`
const InputBoxes=tw.div`
flex flex-col flex-1 
`
const Input=tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`
const PlusIcon=tw.img`
w-12 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces=tw.div`
flex items-center bg-white px-4 
`
const StarIcon=tw.img`
bg-gray-100 w-10 h-10 p-2 rounded-full mr-2
`
const ConfirmLocation=tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-2 text-xl cursor-pointer
`
