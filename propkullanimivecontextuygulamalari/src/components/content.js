import React,{useContext} from 'react'
import {Tema} from '../App'
export default function Content() {
  return (
    <div style={useContext(Tema)}>
      <p>Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.</p>
      <p>Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.</p>
      <p>Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.</p>
      <p>Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.</p>
      <p>Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.Lorem ipsun dolor sit amet.</p>
    </div>
  )
}
