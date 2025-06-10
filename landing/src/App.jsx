import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import Nav from './components/Nav'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'

function App() {
  const screenshots = [
    {
      src: '/images/buy_sell.png',
      caption: 'Buy/Sell Volume Distribution Over Time',
    },
    {
      src: '/images/imbalance.png',
      caption: 'Buyer/Seller Imbalance Zones',
    },
    {
      src: '/images/trade_size.png',
      caption: 'Trade Size Histograms',
    },
    {
      src: '/images/top_traders.png',
      caption: 'Top Buy/Sell Trade Tables',
    },
  ]

  const [current, setCurrent] = useState(0)
  const [message, setMessage] = useState('')

  const nextSlide = () => setCurrent((current + 1) % screenshots.length)
  const prevSlide = () => setCurrent((current - 1 + screenshots.length) % screenshots.length)

  // Smoothly scroll to the end of the page
  const scrollToBottom = () => {
    document.getElementById('page-end')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value

    try {
      const statusRes = await fetch('http://127.0.0.1:38291/status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      
      if (statusRes.ok) {
        const statusData = await statusRes.json()
        if (statusData.status === 'subscribed') {
          setMessage('You are already subscribed.')
          return
        }
        // If status is 'unsubscribed', continue with the subscription process
      }
    } catch (err) {
      console.error('Status check failed:', err)
    }

    try {
      const subscribeRes = await fetch('http://127.0.0.1:38291/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (subscribeRes.ok) {
        setMessage('Subscription successful!')
        e.target.reset()
      } else {
        const data = await subscribeRes.json().catch(() => ({}))
        setMessage(data.error || 'Failed to subscribe')
      }
    } catch (err) {
      console.error('Subscribe failed:', err)
      setMessage('Failed to subscribe')
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Nav onGetEarlyAccess={scrollToBottom} />
      <header className="text-center py-16 bg-gradient-to-r from-primary to-indigo-600">
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
          className="text-gray-600 dark:text-gray-400"
        >
          Track Big Player Activity in BTC and ETH Markets
        </Motion.p>
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-400 mt-2"
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
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          BigGuys is a smart volume analytics module built for crypto markets. It
          allows you to analyze who’s buying, who’s selling, how much, and when.
        </p>
        <ul className="list-disc space-y-2 ml-6 text-gray-600 dark:text-gray-400">
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
            <p className="text-gray-600 dark:text-gray-400 mt-2">
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
        <ul className="list-disc ml-6 space-y-2 text-gray-600 dark:text-gray-400">
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
        className="max-w-3xl mx-auto py-12 px-4"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">FAQ</h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          <div>
            <h3 className="font-semibold text-lg">What is BigGuys?</h3>
            <p>
              It’s a smart volume analytics tool that helps identify large buyer
              and seller activity across multiple timeframes on BTC and ETH.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">
              How is this different from TradingView volume?
            </h3>
            <p>
              BigGuys separates buy/sell volume, highlights imbalances, and lets
              you filter by trade size. It goes far beyond simple volume bars.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Is it free to use?</h3>
            <p>
              Yes, during the private alpha phase it’s completely free. Later
              there will be a free tier and premium plans.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Do I need to connect my wallet?</h3>
            <p>
              No. BigGuys is a read-only analytics tool. No wallet, login, or
              KYC is required.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Which markets are supported?</h3>
            <p>
              Currently BTCUSDT and ETHUSDT from Binance. More assets and
              exchanges coming soon.
            </p>
          </div>
        </div>
      </Motion.section>

      <Motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto py-12 px-4 text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Be First to Try BigGuys</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
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
        {message && (
          <p className="mt-2 text-primary dark:text-indigo-300">{message}</p>
        )}
      </Motion.section>

      <footer id="page-end" className="bg-gray-100 dark:bg-gray-800 text-center py-8 mt-12">
        <p className="dark:text-gray-400">
          Contact: <a href="mailto:support@flowglow.ai">support@flowglow.ai</a>
        </p>
        <p className="mt-2 dark:text-gray-400">
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
        <p className="mt-2 dark:text-gray-400">&copy; FlowGlow Analytics, 2025</p>
      </footer>
    </div>
  )
}

export default App
