import React,{useEffect} from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import {auth,provider} from '../firebase'

const Login = () => {
   const router=useRouter()
   useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            router.push('/')
        }
    })
   },[])
  return (
    <Wrapper>
        <PWLogo src="https://i.pinimg.com/236x/97/51/00/975100e8db266dc997ee76c0289b4676.jpg" />
        <Title>Login to access your account</Title>
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}>Sign In With Google</SignInButton>
    </Wrapper>
  )
}

export default Login

const Wrapper=tw.div`
flex flex-col h-screen bg-gray-200 p-4
`
const SignInButton=tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`
const PWLogo=tw.img`
h-20 w-auto object-contain self-start
`
const Title=tw.div`
text-5xl pt-4 text-gray-500
`