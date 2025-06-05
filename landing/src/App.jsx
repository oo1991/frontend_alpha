import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import Nav from './components/Nav'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const screenshots = [
    {
      src: 'https://via.placeholder.com/600x350?text=Screenshot+1',
      caption: 'Buy/Sell Volume Distribution Over Time',
    },
    {
      src: 'https://via.placeholder.com/600x350?text=Screenshot+2',
      caption: 'Buyer/Seller Imbalance Zones',
    },
    {
      src: 'https://via.placeholder.com/600x350?text=Screenshot+3',
      caption: 'Trade Size Histograms',
    },
    {
      src: 'https://via.placeholder.com/600x350?text=Screenshot+4',
      caption: 'Top Buy/Sell Trade Tables',
    },
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((current + 1) % screenshots.length)
  const prevSlide = () => setCurrent((current - 1 + screenshots.length) % screenshots.length)

  // Smoothly scroll to the end of the page
  const scrollToBottom = () => {
    document.getElementById('page-end')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    console.log('Request access for:', email)
    e.target.reset()
  }

  return (
    <div>
      <Nav onGetEarlyAccess={scrollToBottom} />
      <header className="text-center py-16 bg-gradient-to-r from-primary to-indigo-600 text-white">
        <Motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-semibold mb-2"
        >
          BigGuys Volume Insights
        </Motion.h1>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600"
        >
          Track Big Player Activity in BTC and ETH Markets
        </Motion.p>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-2"
        >
          Detect real-time buy/sell pressure across multiple timeframes.
          Understand when large traders move.
        </Motion.p>
        <Button
          className="mt-4 bg-white text-primary hover:bg-white/90"
          onClick={scrollToBottom}
        >
          🔍 Get Early Access
        </Button>
      </header>

      <Motion.section
        id="early-access"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4">What is BigGuys?</h2>
        <p className="mb-4 text-gray-600">
          BigGuys is a smart volume analytics module built for crypto markets. It
          allows you to analyze who’s buying, who’s selling, how much, and when.
        </p>
        <ul className="list-disc space-y-2 ml-6 text-gray-600">
          <li>Filter by deal size, pair, timeframe and volume clusters.</li>
          <li>Detect liquidity imbalances and validate open interest.</li>
          <li>Strengthen entry/exit signals with smarter volume strategies.</li>
        </ul>
      </Motion.section>

      <Motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Screenshots</h2>
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon" onClick={prevSlide}>
            &lt;
          </Button>
          <div className="text-center">
            <img
              className="rounded-md max-w-full"
              src={screenshots[current].src}
              alt={screenshots[current].caption}
            />
            <p className="text-gray-600 mt-2">
              {screenshots[current].caption}
            </p>
          </div>
          <Button variant="outline" size="icon" onClick={nextSlide}>
            &gt;
          </Button>
        </div>
      </Motion.section>

      <Motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4">Who is it for?</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-600">
          <li>Crypto Traders</li>
          <li>Algo Strategy Developers</li>
          <li>Bot Builders</li>
          <li>On-chain &amp; Volume Analysts</li>
        </ul>
      </Motion.section>

      <Motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto py-12 px-4 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Be First to Try BigGuys</h2>
        <p className="mb-4 text-gray-600">
          We’re launching a private alpha soon. Enter your email to get early
          access.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-2"
        >
          <Input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-64"
          />
          <Button type="submit">Request Access</Button>
        </form>
      </Motion.section>

      <footer id="page-end" className="bg-gray-100 text-center py-8 mt-12">
        <p>
          Contact: <a href="mailto:support@flowglow.ai">support@flowglow.ai</a>
        </p>
        <p className="mt-2">
          <a href="#" className="text-primary hover:underline">
            Telegram
          </a>{' '}
          |{' '}
          <a href="#" className="text-primary hover:underline">
            Discord
          </a>{' '}
          |{' '}
          <a href="#" className="text-primary hover:underline">
            LinkedIn
          </a>
        </p>
        <p className="mt-2">&copy; FlowGlow Analytics, 2025</p>
      </footer>
    </div>
  )
}

export default App
