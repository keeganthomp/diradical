import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.p<{ active?: boolean }>`
  color: #fff;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-weight: 200;
  width: 4rem;
  &:hover {
    span {
      font-weight: 300;
    }
  }
`

export default function NavLink({ href, exact, children }: Props) {
  return (
    <StyledLink>
      <Link href={href}>{children}</Link>
    </StyledLink>
  )
}
