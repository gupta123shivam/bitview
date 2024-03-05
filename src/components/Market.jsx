import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mockData from '../mock/_market.json'

function Market() {
  const [data, setData] = useState([]) // data that is being displayed
  const [currentPage, setCurrentPage] = useState(1)
  const [loadAPI, setLoadAPI] = useState(true) // for loading icon

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
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
        setLoadAPI(false)
      }
    }
    fetchData()
  }, [url])

  const scrollMarket = () => {
    window.scrollTo({
      top: window.scrollY - 950,
      behavior: 'smooth',
    })
  }

  const scrollTop = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' })
  }

  return (
    <>
      <section id='market' className='market-section'>
        <div className='container'>
          <div className='market-content'>
            <h2>Market Update</h2>
            <div className='market-content__coin-list'>
              <div className='market-content__coin-list__top'>
                <p>Coin</p>
                <p>Price</p>
                <p>24h Change</p>
                <p>Market Cap</p>
              </div>
              <div className='market-content__coin-list__row'>
                {loadAPI && <span className='loader'></span>}
                {data.map((item) => (
                  <Link
                    onClick={scrollTop}
                    to={`/coin/${item.id}`}
                    className='coin-row'
                    key={item.id}
                  >
                    <span>
                      <img src={item.image} alt={item.name} /> {item.name}
                    </span>
                    <p>{'$ ' + item.current_price.toFixed(2)}</p>
                    <p
                      className={
                        'slider-coin__price ' +
                        (item.price_change_percentage_24h >= 0
                          ? 'green-text'
                          : 'red-text')
                      }
                    >
                      {item.price_change_percentage_24h?.toFixed(2) + ' %'}
                    </p>
                    <p>{'$ ' + numberWithCommas(item.market_cap)}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div
              onClick={scrollMarket}
              className='market-content__coin-list__pagination'
            >
              {Array.from({ length: 5 }, (_, i) => {
                i++;
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={i === currentPage ? 'activePagi' : ''}
                  >
                    {i}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Market
