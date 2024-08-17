import { useEffect, useState } from 'react';
import img2 from "../src/assets/img2.jpg";
import Eimg from "../src/assets/no-dp_16.jpg";
import PD from "../src/assets/PD.png"
import VE from "../src/assets/VE.png"
import WD from "../src/assets/WD.png"
import GD from "../src/assets/GD.png"
import DM from "../src/assets/DM.png"




const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full flex justify-between items-center font-serif px-16 md:py-4 py-2.5 ${scrolled ? 'bg-custom-color' : 'bg-transparent'} transition z-10`}>
        <ul className='hidden md:flex gap-10'>
          <li><a href="#home" >Home</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <h1 className="text-xl md:text-2xl">Sáàryal</h1>

        <ul className='hidden md:flex'>
          <li><a href="#footer">Social Media</a></li>
        </ul>

        <ul className='md:border-2 border-2 rounded-full border-cyan-50 md:px-5 px-3 md:p-1 hover:bg-cyan-50 hover:text-black'>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id='home'>
      <hr className=''/> 

      <div className="relative">
        <img src={img2} alt="Image Description" className="mx-auto max-w-full h-auto" />

        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div>
            <h1 className='text-2xl md:text-6xl'>Always</h1>
            <h1 className='text-3xl md:text-8xl font-bold md:pt-4'>Be Unique</h1>
          </div>

          <div className='flex gap-4 md:pt-6'>
            <h1 className='text-2xl md:text-4xl'>We make <b>that you</b></h1>
            <h1 className='text-xl md:text-4xl rounded-lg px-3 p-1 font-bold bg-white text-black'>Want</h1>
          </div>
        </div>
      </div>
      </section>

        <section id='work' className='text-5xl  text-center pt-20'>
        <h1 className='font-serif '>WORK</h1>
        <h1 className='text-2xl  text-neutral-600'>WITH US</h1>

      <div className='flex flex-wrap justify-center md:gap-80 gap-20 pt-20'>
        <div className='h-80 w-60  hover:shadow hover:shadow-red-800 flex flex-col items-center justify-center object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'><img className='h-40 w-40 object-cover' src={GD} alt="Graphic Designing" /><h1 className='text-center text-lg pt-5 font-bold font-serif'>GRAPHIC DESIGNING</h1>
        <div className='absolute inset-0 flex rounded-lg flex-col items-center  bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
        <h1 className='text-center text-lg pt-3 font-bold font-serif'>GRAPHIC DESIGNING</h1>
        <h1 className=' text-base text-center pt-3 text-neutral-600'>Our graphic design services are crafted to elevate your brand's visual identity, ensuring your message is communicated effectively through compelling and innovative designs.</h1>
        </div>
      </div>
      <div className='h-80 w-60  hover:shadow hover:shadow-red-800 flex flex-col items-center justify-center object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'><img className='h-40 w-40 object-cover' src={PD} alt="Graphic Designing" /><h1 className='text-center text-lg pt-5 font-bold font-serif'>PRINTING DESIGNING</h1>
        <div className='absolute inset-0 flex rounded-lg flex-col items-center  bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
        <h1 className='text-center text-lg pt-3 font-bold font-serif'>PRINTING DESIGNING</h1>
        <h1 className=' text-base text-center pt-3 text-neutral-600'>Printing designers creating visual content that will be produced through their ideas and  designs in the simplest form to make you shine brighter in your business.</h1>
      </div>
      </div>
      </div>

      <div className='flex flex-wrap justify-center md:gap-80 gap-20 pt-20'>
        <div className='h-80 w-60  hover:shadow hover:shadow-red-800 flex flex-col items-center justify-center object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'><img className='h-40 w-40 object-cover' src={VE} alt="Graphic Designing" /><h1 className='text-center text-lg pt-5 font-bold font-serif'>VEDIO EDITING</h1>
        <div className='absolute inset-0 flex rounded-lg flex-col items-center  bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
        <h1 className='text-center text-lg pt-3 font-bold font-serif'>VEDIO EDITING</h1>
        <h1 className=' text-base text-center pt-3 text-neutral-600'>We have experience of working with 2d, 3d, Character Designing. We have also team of mobile app marketing and they have ample amount of experience working on mobile UI/UX  & complete mobile app marketing & development.</h1>
      </div>
      </div>
      <div className='h-80 w-60  hover:shadow hover:shadow-red-800 flex flex-col items-center justify-center object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'><img className='h-40 w-40 object-cover' src={WD} alt="Graphic Designing" /><h1 className='text-center text-lg pt-5 font-bold font-serif'>WEB DEVELOPMENT</h1>
        <div className='absolute inset-0 flex rounded-lg flex-col items-center  bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
        <h1 className='text-center text-lg pt-3 font-bold font-serif'>WEB DEVELOPMENT</h1>
        <h1 className=' text-base text-center pt-3 text-neutral-600'>Saaryal with its years of experience has become one of the leading Web Development Company in Jaipur, India. With the team of highly expertise and accomplished professionals, we have served multiple businesses in crafting their powerful position across the web.</h1>
      </div>
      </div>
      </div>

      <div className='flex flex-wrap justify-center md:gap-80 gap-20 pt-20'>
      <div className='h-80 w-60  hover:shadow hover:shadow-red-800 flex flex-col items-center justify-center object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'><img className='h-40 w-40 object-cover' src={DM} alt="Graphic Designing" /><h1 className='text-center text-lg pt-5 font-bold font-serif'>DIGITAL MARKETING</h1>
        <div className='absolute inset-0 flex rounded-lg flex-col items-center  bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
        <h1 className='text-center text-lg pt-3 font-bold font-serif'>DIGITAL MARKETING</h1>
        <h1 className='text-base text-center pt-3 text-neutral-600'>Grow Your Business With Digital Marketing Agency You Need A Brand Partner Like Us Who Can Deeply Dive Into Your Business Needs And Make Your Product Or Service More Discoverable. We Can Help Your Brand Stand Out With Our SEO, SMM, PPC, And ASO Strategies. Become A Brand In A Sparkle/Twinkle With Saaryal.</h1>
      </div>
      </div>
      </div>
      
      </section>

      <div className="vtline" ></div>

      <section id='team'>

      <h1 className='teamhead text-8xl md:text-8xl lg:text-[20rem] font-serif pt-5'>Team</h1>

      <div className='flex flex-wrap justify-center pt-10'>
  <div className='flex flex-col items-center h-full w-full max-w-3xl rounded-lg hover:shadow-lg'>
    <img src={Eimg} alt="" className='w-80 h-96 object-cover rounded-lg mb-8'/>
    <div className='w-3/4 text-center'>
      <h1 className='text-2xl font-bold font-serif mb-2'>SAHIL TANK</h1>
      <h2 className='text-xl text-neutral-600 mb-4'>Founder and Creative Director </h2>
      <p className='text-base text-neutral-600'>
        Meet the mastermind behind Saaryal's stunning designs! Our co-founder's passion for innovation and style is redefining the industry. <br /><br />
        - "From concept to reality, our co-founder's design journey is an inspiration to us all. Stay tuned for a sneak peek into their creative process!<br /><br />
        - "The brain behind the beauty! Our co-founder's designs are a perfect blend of art and functionality.<br /><br />
        - "Get ready to be amazed by the creative genius of our co-founder! Their designs are a testimonial to innovation and excellence.
      </p>
    </div>
  </div>
</div>




<h1 className='text-center text-2xl text-neutral-600 pt-24'>OUR CREATIVE MINDS</h1>


<div className='flex flex-wrap justify-center md:gap-x-80 md:gap-40 gap-24 pt-20'>

<div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>GRAPHIC DESIGNING</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>He has 7 years of experience with Adobe photoshop & Adobe illustrator they create all types of social media posts, posters, logo's, pemplate, template and all types of desiging related works and also know about social media strategy brand strategy & social media management</h1>
    </div>
  </div>

  <div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>PHOTOGRAPHER</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>He has 11 years of experience as a photographer and also does product and model photoshoots.</h1>
    </div>
  </div>
  
  <div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>WEB DEVELOPER</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>He has 2 years of experience as a web developer. He has knowledge of HTML CSS JavaScript and react Fronthand and firebase backhand</h1>
    </div>
  </div>

  <div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>VEDIO EDITOR</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>She has 2 year experience as a video editor into premier pro after effect and filmora. Her expertise includes brand identity video clip shoots reels etc.</h1>
    </div>
  </div>

  <div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>PRINT DESIGNER</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>She has 2.5 years experience as a printer designer. Her skill is in corel draw and She works in catalogues printing services magazines custom stationary business card designs etc</h1>
    </div>
  </div>

  <div className='relative h-80 w-72 rounded-lg overflow-hidden hover:shadow-lg'>
    <img src={Eimg} alt="" className='h-full w-full object-cover rounded-lg transition-transform duration-500 transform hover:rotate-y-180'/>
    <div className='absolute inset-0 flex flex-col items-center bg-gray-800 text-white opacity-0 transition-opacity duration-500 hover:opacity-100'>
      <h1 className='text-lg pt-5'>DIGITAL MARKETER</h1>
      <h1 className=' text-center pt-3 text-neutral-600'>She is a digital marketer and has 2 years of experience. Her skills is in data analysis content creator Seo & Sem communication skills content marketing etc</h1>
    </div>
  </div>
  
</div>

</section>

      <div className="valine" ></div>

      <section id='about'>
        
        <h1 className='abouthead text-8xl md:text-8xl lg:text-[20rem] font-serif pt-5'>ABOUT</h1>
         
        <div className="aboutpara pt-5" >
        <p className='text-neutral-600'>
          
        Welcome to Saaryal Designing Hub where creativity meets innovation and passion meets purpose. We're a team of dedicated designers, driven by a shared vision to craft exceptional experiences that inspire and elevate. <br /><br />

Our journey began with a simple yet bold idea: to redefine the boundaries of design and bring imagination to life. Today, we're proud to be a leading force in the industry, known for our commitment to excellence, sustainability, and community. <br /><br />

Explore our website to discover our story, our values, and our portfolio of transformative designs. Join us in our pursuit of innovation and let's create a better tomorrow, together.
        </p>
        <h1 className='text-center md:text-5xl pt-14 text-3xl' > <span className="bg-gradient-to-r from-transparent to-neutral-600 bg-clip-text text-transparent bg-neutral-600 px-4 font-serif">Vision</span></h1>
        <p className='pt-5 text-neutral-600'>We strive to provide the best quality at a reasonable price. <br /><br /> Our business is thriving with the sole objective of fulfilling our clients' demands through our organized and ethical services.</p>
        <h1 className='text-center md:text-5xl pt-14 text-3xl' > <span className="bg-gradient-to-r from-transparent to-neutral-600 bg-clip-text text-transparent bg-neutral-600 px-4 font-serif">Mission</span></h1>
        <p className='pt-5 text-neutral-600'>To achieve better results through market surveys and investment in new technologies.<br /><br /> To provide our clients with the best marketing outcomes. <br /><br />To ensure your website ranks at the top of search engine results.</p>
        </div>

    </section>
    <div className="vrline" ></div>

    
    <section id='contact'>
        <div>
        <div className="contactheadandline" >
            <h1 className="contacthead font-serif " >contact</h1>
            <div className="contactline"></div>
        </div>
        <div className='contact-bucket'>
            <div className="contact-form" >
                <form >
                    <div className="txt_field">
                        <input type="text" required id="name" name="name"/>
                        <span></span>
                        <label>Name</label>
                    </div>
                    <div className="txt_field">
                        <input type="text" required id="email" name="email" />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <textarea  required id="msg" name="message" ></textarea>
                        <span></span>
                        <label>Message</label>
                    </div>
                    <input type="submit" value="Send" id="send"></input>
                </form>
            </div>

            <div className="spacecon"></div>

            <div className="contact-info">
                <h1 className="info">Info</h1>
                <div className="info-box">
                    <h1 className="info-head">Email: </h1>
                    <h2 className="info-base">saaryal.jaipur@gmail.com</h2>
                </div>
                <div className="info-box">
                    <h1 className="info-head">Phone: </h1>
                    <h2 className="info-base">+91 8005773954</h2>
                </div>
                <div className="info-box">
                    <h1 className="info-head">Address: </h1>
                    <h2 className="info-base">Jaipur, India.</h2>
                </div>
                <div className="info-box">
                    <h1 className="info-head"> </h1>
                    <h2 className="info-base"></h2>
                </div>
            </div>
            </div>
        </div>
    </section>

    <footer id="footer">
        <div className="foot">
            <div className="footbox">
                <div className="line" ></div>
                <div className="linksbox">
                    <p className="footlinks"><a href="">Privacy Policy</a></p>
                    <p className="footlinks"><a href=""></a></p>
                    <p className="footlinks"><a href=""></a></p>
                </div>
            </div>
            <div className="footbox">
                <div className="footlogodiv">
                  
                </div>
                <h1 className="footlogosub ">Sáàryal</h1>
                <div className="footsm">
                <a href="https://www.instagram.com/saaryal.jaipur?utm_source=qr&igsh=MWluMXg2djVyMTFzbA==" className="fab fa-instagram"></a>
              <a href="https://www.youtube.com/yourchannel" className="fab fa-youtube"></a>
              <a href="https://www.facebook.com/yourpage" className="fab fa-facebook"></a>
              <a href="https://whatsapp.com/channel/0029VahrFVIG3R3f8BDbfc42" className="fab fa-whatsapp"></a>
                </div>
                <div className="vline" ></div>
            </div>
            <div className="footbox">
                <div className="lineb" ></div>
                <div className="linksbox">
                    <p className="footlinks"><a href="">Terms and Conditions</a></p>
                    <p className="footlinks"><a href=""></a></p>
                    <p className="footlinks"><a href=""></a></p>
                </div>
            </div>
        </div>
        <p className="copy">Copyright © 2024.❤ saaryal.in</p>
    </footer>

    </>
  );
}

export default App;