import Link from 'next/link'
import { useRouter } from 'next/router'
import { SidebarButton } from 'components/ui/Buttons'

type Props = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {
  const router = useRouter()
  const active = router.pathname === href
  return (
    <SidebarButton active={active}>
      <Link href={href}>{children}</Link>
    </SidebarButton>
  )
}
