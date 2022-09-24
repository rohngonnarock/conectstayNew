import Head from 'next/head';
import BannerSlider from '../components/BannerSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function AboutUs() {
  return (
    <div>
    <Head>
        <title>Keytrips | Corporate Catering</title>
        <meta name="description" content="Keytrips Corporate Catering page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <div className='cm_banner' style={{backgroundImage: `url(/corporate-catering.jpg)`}}>
          <h1>Corporate Catering</h1>
        </div>


        <div className="container mt-5 pt-5 mb-5 pb-5">
          <h2 class="text-center mb-4">Corporate Catering</h2>
          <p><b>Are you looking for Corporate Catering in Delhi NCR ?</b>
          Keytrips Pvt Ltd is an experienced and professional corporate caterers providing corporate catering services in Delhi, Gurugram and Noida. We are used to providing the best catering solutions for any corporate catering from breakfast, lunch and dinner.</p>
          <p>Our corporate catering service is famous for delivering the most diverse and creative food options using quality, nutritious and seasonal produce, at the same time working to your set budgets.</p>
          <p>We have an impressive portfolio of companies that have enjoyed their delicious meals. We provide our corporate clients with a wide array of menu, format, and scheduling options.</p>
          <p><b>Why We?:</b><br />Breakfast, lunch and dinner options<br />Variety of food, salads, seasonality<br />Building relationship – we know your needs and wants to make your life easier<br />We work to create new healthy 'Nourish' menus so you don’t get bored</p>
          <p><b>Note:</b> We provide corporate catering service on monthly basis.</p>
        </div>

      </main>

      <Footer />
    </div>
  )
}
