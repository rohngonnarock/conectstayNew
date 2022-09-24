import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Hotels() {
  return (
    <div>
     <Head>
        <title>Keytrips | Hotels</title>
        <meta name="description" content="Keytrips Hotels page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/hotels-banner.jpg)`}}>
          <h1>Hotels</h1>
        </div>




          



          <div className="container mt-5 pt-5">
            <h2>5 Stars</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/taj-hotel.jpg" />
                  <h3>Taj Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/itc.jpg" />
                  <h3>ITC Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/leela-hotel.jpg" />
                  <h3>Leela Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/ihg.jpg" />
                  <h3>IHG Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/accor.jpg" />
                  <h3>Accor Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/marriott.jpg" />
                  <h3>Marriott Group of Hotels</h3>
                </div>
              </div>

            </div>
          </div>






          <div className="container mt-5 pt-5">
            <h2>4 Stars</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/lemon-tree-hotel.jpg" />
                  <h3>Lemontree Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/contreen.jpg" />
                  <h3>countri Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/park-inn.jpg" />
                  <h3>Park Inn Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/Sarovar-Hotel.jpg" />
                  <h3>Sarovar Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/Fern-Hotel.png" />
                  <h3>The Fern Group of Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/ginger.jpg" />
                  <h3>Ginger Group of Hotels</h3>
                </div>
              </div>

            </div>
          </div>






          <div className="container mt-5 pt-5">
            <h2>Budget Hotels</h2>
            <div className="row">

              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/Fabhotels_Logo.png" />
                  <h3>Fab Hotel</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/oyo-logo.png" />
                  <h3>Oyo Rooms</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/Treebo-hotels.jpg" />
                  <h3>Treebo Hotels</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/gust-house.jpg" />
                  <h3>Gust Houses Chains</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/individual-hotel.jpg" />
                  <h3>Individual Hotels Chains</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="hotel_card">
                  <img src="/standalone-hotels.jpg" />
                  <h3>Standalone hotels</h3>
                </div>
              </div>

            </div>
          </div>




      </main>

      <Footer />
    </div>
  )
}
