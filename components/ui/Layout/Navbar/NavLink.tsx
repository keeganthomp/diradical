import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.a<{ active?: boolean }>`
  text-decoration: ${(p) => (p.active ? 'underline' : 'none')};
  background: transparent;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  color: #fff;
  transition: all 0.1s ease-in-out;
  &:hover {
    background: #fff;
    color: #000;
  }
`

export default function NavLink({ href, exact, children }: Props) {
  const { pathname } = useRouter()
  const isActive = exact ? pathname === href : pathname.startsWith(href)

  return (
    <Link href={href}>
      <StyledLink active={isActive}>{children}</StyledLink>
    </Link>
  )
}
