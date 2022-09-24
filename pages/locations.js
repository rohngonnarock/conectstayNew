import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Locations() {
  return (
    <div>
     <Head>
        <title>Keytrips | Locations</title>
        <meta name="description" content="Keytrips Locations page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/locations-banner.png)`}}>
          <h1>Locations</h1>
        </div>


        <div className='hotel_category'>
          <div className='container'>
            <div className='row'>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/maharashtra.jpg" />
                        <h3>Maharashtra</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/uttar-pradesh.jpg" />
                        <h3>Uttar Pradesh</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/karnataka.jpg" />
                        <h3>Karnataka</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/odisha.jpg" />
                        <h3>Odisha</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/tamil-nadu.jpg" />
                        <h3>Tamil Nadu</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/delhi.jpg" />
                        <h3>Delhi</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/goa.jpg" />
                        <h3>Goa</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/gujarat.jpg" />
                        <h3>Gujarat</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/gurugram.jpg" />
                        <h3>Gurugram</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/telangana.jpg" />
                        <h3>Telangana</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/rajasthan.jpg" />
                        <h3>Rajasthan</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/kerala.jpg" />
                        <h3>Kerala</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/kolkata.jpg" />
                        <h3>Kolkata</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/noida.jpg" />
                        <h3>Noida</h3>
                    </div>
                </div>
                <div className='col-lg-4 col-md-6'>
                    <div className='hotel_card'>
                        <img src="/punjab.jpg" />
                        <h3>Punjab</h3>
                    </div>
                </div>
                
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
