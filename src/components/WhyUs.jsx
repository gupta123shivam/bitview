import Card from './Card'
import BitHand from '../images/choose.png'
import { GoChecklist } from 'react-icons/go'
import { TbDeviceMobileMessage } from 'react-icons/tb'
import { TbMoneybag } from 'react-icons/tb'
import { GoPencil } from 'react-icons/go'
import { GoStack } from 'react-icons/go'
import { LuWallet2 } from 'react-icons/lu'

function WhyUs() {
  return (
    <>
      <section id='choose-us' className='why-section'>
        <div className='container'>
          <div className='choose-container'>
            <h2>
              why <span>choose us</span>
            </h2>
            <div className='choose-container__content'>
              <div className='choose-container__content__1'>
                <Card
                  img={<GoPencil />}
                  title='SELECT YOUR QUANTITY'
                  text='Upload your crypto and set a title, description and price.'
                />
                <Card
                  img={<LuWallet2 />}
                  title='CONNECT YOUR WALLET'
                  text='Use Trust Wallet, Metamask or to connect to the app.'
                />
                <Card
                  img={<GoChecklist />}
                  title='CONFIRM TRANSACTION'
                  text='Earn by selling your crypto on our marketplace.'
                />
              </div>
              <div className='choose-container__content__2'>
                <img src={BitHand} alt='hand_img' />
              </div>
              <div className='choose-container__content__3'>
                <Card
                  img={<TbDeviceMobileMessage />}
                  title='RECEIVE YOUR OWN NFTS'
                  text='Invest all your crypto at one place on one platform.'
                />
                <Card
                  img={<TbMoneybag />}
                  title='TAKE A MARKET
                  TO SELL'
                  text='Discover, collect the right crypto collections to buy or sell.'
                />
                <Card
                  img={<GoStack />}
                  title='DRIVE YOUR COLLECTION'
                  text='We make it easy to Discover, Invest and manage.'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyUs
