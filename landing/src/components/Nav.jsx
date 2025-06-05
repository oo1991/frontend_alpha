import { Button } from './ui/button'

export default function Nav({ onGetEarlyAccess }) {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-primary">BigGuys</span>
        <Button onClick={onGetEarlyAccess}>Get Early Access</Button>
      </div>
    </nav>
  )
}
