import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function ContactUs() {
  return (
    <div>
     <Head>
        <title>Keytrips | Contact Us</title>
        <meta name="description" content="Keytrips Contact Us page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/contact-us-bg.jpg)`}}>
          <h1>Contact Us</h1>
        </div>


        <div className="container mt-5 pt-5 mb-5 pb-5">
          <div className="contact_card">
            <div className="row no-gutters">
              <div className="col-md-7">
                <div className="p-4">
                  <h3>Get In Touch With Us</h3>
                  <br />
                  <div className="contact_item">
                    <i className="fa fa-phone" />
                    <p><a href="#">+91 9654 377 137</a></p>
                  </div>
                <div className="contact_item">
                  <i className="fa fa-envelope" />
                  <p><a href="mailto:bookings@keytrips.in">bookings@keytrips.in</a></p>
                </div>
                <div className="contact_item">
                  <i className="fa fa-map-marker" />
                  <p>C-301, Gurgaon Rd, Spaze Park, Sector 47, Gurugram, Haryana 122002</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-5">
              <form>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control rounded-0" required="" />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea className="form-control rounded-0" />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-light rounded-0 px-5 mt-4">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      </main>

      <Footer />
    </div>
  )
}
