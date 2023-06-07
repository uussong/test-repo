import React from 'react'
import { Button } from '../../Button/Button'
import search from '../../../../assets/icon/icon-search.png'

export default function SearchButton() {
  return (
    <Button>
      <img src={search} alt='계정 검색' />
    </Button>
  )
}
