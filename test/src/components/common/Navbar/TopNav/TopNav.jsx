import React from 'react'
import styled from 'styled-components'
import GoBackButton from './GoBackButton'
import SearchButton from './SearchButton'
import MenuButton from '../../Button/MenuButton'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`

export default function TopNav() {
  return (
    <Header>
      <GoBackButton />
      <SearchButton />
      <MenuButton />
    </Header>
  )
}
