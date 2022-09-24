import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Mice() {
  return (
    <div>
    <Head>
        <title>Keytrips | Mice</title>
        <meta name="description" content="Keytrips Mice page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/conference-hall.jpg)`}}>
          <h1>Mice</h1>
        </div>


        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <img className="img-fluid" src="/meeting.jpg" />
            </div>
            <div className="col-md-6">
              <div>
                <h5>MICE (Meetings, Incentive, Conference, Events)</h5>
                <p>Keytrips Pvt. Ltd has extensive experience in organizing Meeting, Incentive, conferences and Events. We can assist with every aspect of your MICE requirement anywhere in India and major Corporate sectors.</p>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}
