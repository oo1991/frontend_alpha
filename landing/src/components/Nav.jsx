import { Button } from './ui/button'

export default function Nav({ onGetEarlyAccess }) {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-primary">BigGuys</span>
        <Button onClick={onGetEarlyAccess}>Get Early Access</Button>
      </div>
    </nav>
  )
}
