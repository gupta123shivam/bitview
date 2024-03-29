import { useEffect, useState } from 'react'
import Btc from '../images/bitcoin.png'
import Eth from '../images/ethereum.png'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa6'
import mockData from '../mock/_market.json'

function Hero() {
  const [data, setData] = useState([])
  const [coinsLoad, setCoinsLoad] = useState(true)

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Error!')
        }
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setData(mockData)
        console.error(error)
      } finally { 
        setCoinsLoad(false)
      }
    }

    fetchData()
  }, [url])

  return (
    <>
      <section id='hero' className='hero-section'>
        <div className='hero-content'>
          {/* Title text */}
          <div className='hero-content__text'>
            <img className='btc-float' src={Btc} alt='floating-el' />
            <h1>
              Track Trade
              <br /> <span>Crypto currencies</span>
            </h1>
            <img className='eth-float' src={Eth} alt='floating-el' />
          </div>

          {/* mobile btn */}
          <a className='mobile-btn-hero' href='#market'>
            See Prices <FaChevronDown />
          </a>

          {/* Crypto coins */}
          <div className='coin-slider'>
            {coinsLoad && <span className='loader'></span>}
            {data.slice(0, 4).map((item) => (
              <Link
                to={`/coin/${item.id}`}
                key={item.id}
                className='slider-coin'
              >
                <img src={item?.image} alt={item?.name} />
                <p className='slider-coin__name'>
                  {item?.name}{' '}
                  <span
                    className={
                      'slider-coin__price ' +
                      (item.price_change_percentage_24h <= 0
                        ? 'red-text'
                        : 'green-text')
                    }
                  >
                    {item?.price_change_percentage_24h?.toFixed(2) + '%'}
                  </span>
                </p>
                <p className='slider-coin__price'>
                  {'$ ' + numberWithCommas(item.current_price?.toFixed(2))}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
