import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cart = useSelector(store => store.cart.value)
  return (
    <div>Cart({cart})</div>
  )
}
