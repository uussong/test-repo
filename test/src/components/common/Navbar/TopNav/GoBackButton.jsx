import React from 'react'
import { Button } from '../../Button/Button'
import goBack from '../../../../assets/icon/icon-arrow-left.png'

export default function GoBackButton() {
  return (
    <Button>
      <img src={goBack} alt='뒤로가기' />
    </Button>
  )
}
