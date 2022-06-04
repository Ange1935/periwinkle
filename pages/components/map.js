import React from 'react'
import { useEffect } from 'react';
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2xvcnlhbmdlbGluYS0xOSIsImEiOiJjbDN3djU1aWEwZHNvM2pxdDcxb2loY2tpIn0.FyJO6hn93hwqX2CGkmwk5g';

const Map = (props) =>{
    useEffect(() => {
        const map = new mapboxgl.Map({
        container:'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.96288,20.593684],
        zoom: 3
        })
        if(props.pickupcoordinates){
          addToMap(map,props.pickupcoordinates)
        }
        
        if(props.dropoffcoordinates){
          addToMap(map,props.dropoffcoordinates)
        }

        if(props.pickupcoordinates && props.dropoffcoordinates){
          map.fitBounds([
              props.dropoffcoordinates,
              props.pickupcoordinates 
          ],{
            padding:60
          })
        }

        },[props.pickupcoordinates,props.dropoffcoordinates])
        const addToMap=(map,coordinates)=>{
          const marker1 = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .addTo(map);  
        }
  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper=tw.div`
flex-1 h-1/2
`