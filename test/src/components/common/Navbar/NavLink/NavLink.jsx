import React from 'react'
import styled from 'styled-components'
import LinkButton from './LinkButton'

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`

export default function NavLink() {
  return (
    <Nav>
      <LinkButton />
    </Nav>
  )
}
