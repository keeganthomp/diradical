import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.p<{ active?: boolean }>`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-weight: 200;
  margin: 0;
  border-radius: 5px;
  font-weight: ${(p) => (p.active ? 400 : 200)};
  width: 100%;
  text-align: center;
  padding: 0.5rem 0;
  &:hover {
    background: rgba(88, 88, 88, 0.2);
  }
  a {
    color: #fff;
    text-decoration: none;
    width: 100%;
    &:visited {
      color: #fff;
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
