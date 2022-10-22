import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.a<{ active?: boolean }>`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.1s ease-in-out;
  &:hover {
    text-decoration: underline;
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
