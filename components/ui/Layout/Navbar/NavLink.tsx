import { useRouter } from 'next/router'
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
  margin-left: 1rem;
  &:hover {
    text-decoration: underline;
  }
`

export default function NavLink({ href, exact, children }: Props) {
  const { pathname } = useRouter()
  return (
    <StyledLink>
      <Link href={href}>{children}</Link>
    </StyledLink>
  )
}
