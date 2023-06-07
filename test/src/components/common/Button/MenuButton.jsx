import React from 'react'
import { Button } from './Button'
import menu from '../../../assets/icon/icon-more-vertical.png'

export default function MenuButton() {
  return (
    <Button>
      <img src={menu} alt='메뉴' />
    </Button>
  )
}
