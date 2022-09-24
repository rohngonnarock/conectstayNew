import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <div>
    <Head>
        <title>Keytrips | About Us</title>
        <meta name="description" content="Keytrips About Us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/about-banner.jpg)`}}>
          <h1>About Us</h1>
        </div>


        <div className='hotel_category'>
          <div className='container'>
            <h2>Welcome to Keytrips</h2>
            <p>Keytrips Pvt Ltd provides the Corporate Travel management solutions in which we manage a company’s strategic approach to travel ,cost benefits for client company, maximum satisfaction to travellers while fulfilling their requirement with prompt revert and providing them preferred solutions at within corporate travel policies, Round the clock support. Additionally we assist in obtaining maximum benefits from using Hotels and vendors. We ensure excellent management for day to day operation of the corporate travel program, traveller’s convenience, prompt information on various updates/changes information. </p>
            <ul className="mt-5">
                <li>Cost Competitive Travel Services</li>
                <li>24 Hours Support round the year.</li>
                <li>Strong Relationship with individual and chain of Hotels</li>
                <li>Pioneer in corporate travel solutions</li>
                <li>One stop for all travel related needs</li>
            </ul>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
