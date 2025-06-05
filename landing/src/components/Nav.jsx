import { Button } from './ui/button'

export default function Nav() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-primary">BigGuys</span>
        <Button>Get Early Access</Button>
      </div>
    </nav>
  )
}
