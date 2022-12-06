import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.p<{ active?: boolean }>`
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  border-radius: 30px;
  width: 75%;
  text-align: center;
  font-size: 14px;
  padding: 5px 0;
  margin: 3px 0;
  &:hover {
    background: rgba(88, 88, 88, 0.133);
  }
  a {
    color: #000;
    text-decoration: none;
    width: 100%;
    &:visited {
      color: #000;
    }
  }
`

export default function NavLink({ href, exact, children }: Props) {
  const router = useRouter()
  const active = router.pathname === href
  return (
    <StyledLink active={active}>
      <Link href={href}>{children}</Link>
    </StyledLink>
  )
}
