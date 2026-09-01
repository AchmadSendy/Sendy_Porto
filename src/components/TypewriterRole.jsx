import { useTypewriter } from '../hooks/useTypewriter'

export default function TypewriterRole({ roles }) {
  const role = useTypewriter(roles)

  return (
    <>
      {role}
      <span className="animate-pulse">|</span>
    </>
  )
}
