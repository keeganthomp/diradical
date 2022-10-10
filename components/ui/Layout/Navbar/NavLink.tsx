import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
  href: string
  exact?: boolean
  children: React.ReactNode
}

const StyledLink = styled.a<{ active?: boolean }>`
  background: ${(props) =>
    props.active ? props.theme.colors.main : 'transparent'};
  padding: 5px 1rem;
  font-size: 14px;
  border-radius: 16px;
  color: ${(props) => (props.active ? 'black' : 'white')};
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
