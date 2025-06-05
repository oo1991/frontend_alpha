import { useState } from 'react'
import './App.css'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    console.log('Request access for:', email)
    e.target.reset()
  }

  return (
    <div className="page">
      <header className="hero">
        <h1>BigGuys Volume Insights</h1>
        <p>Track Big Player Activity in BTC and ETH Markets</p>
        <button className="cta">Get Early Access</button>
      </header>

      <section className="about">
        <h2>What is BigGuys?</h2>
        <p>
          BigGuys is a smart volume analytics module built for crypto markets. It
          allows you to analyze who’s buying, who’s selling, how much, and when.
        </p>
        <ul>
          <li>Filter by deal size, pair, timeframe and volume clusters.</li>
          <li>Detect liquidity imbalances and validate open interest.</li>
          <li>Strengthen entry/exit signals with smarter volume strategies.</li>
        </ul>
      </section>

      <section className="gallery">
        <h2>Screenshots</h2>
        <div className="slider">
          <button onClick={prevSlide}>&lt;</button>
          <div className="slide">
            <img
              src={screenshots[current].src}
              alt={screenshots[current].caption}
            />
            <p>{screenshots[current].caption}</p>
          </div>
          <button onClick={nextSlide}>&gt;</button>
        </div>
      </section>

      <section className="audience">
        <h2>Who is it for?</h2>
        <ul>
          <li>Crypto Traders</li>
          <li>Algo Strategy Developers</li>
          <li>Bot Builders</li>
          <li>On-chain &amp; Volume Analysts</li>
        </ul>
      </section>

      <section className="signup">
        <h2>Be First to Try BigGuys</h2>
        <p>
          We’re launching a private alpha soon. Enter your email to get early
          access.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
          <button type="submit">Request Access</button>
        </form>
      </section>

      <footer>
        <p>
          Contact: <a href="mailto:support@flowglow.ai">support@flowglow.ai</a>
        </p>
        <p>
          <a href="#">Telegram</a> | <a href="#">Discord</a> |{' '}
          <a href="#">LinkedIn</a>
        </p>
        <p>&copy; FlowGlow Analytics, 2025</p>
      </footer>
    </div>
  )
}

export default App
