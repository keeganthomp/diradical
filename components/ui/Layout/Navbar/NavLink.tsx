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
  padding: 5px 1rem;
  font-size: 16px;
  color: white;
  cursor: pointer;
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
