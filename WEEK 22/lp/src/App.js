import './App.css';
import { useState } from 'react';
import phone from "./assets/phone.png";
import lap from "./assets/lap.png";
import code from "./assets/code.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import icon1 from "./assets/icon.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import person1 from "./assets/picture1.jpeg";
import person2 from "./assets/person2.jpeg";
import person3 from "./assets/person3.jpeg";

function App() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;



  const handleEmailChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);

    if (emailRegex.test(emailInput)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <header className="bg-gray-50 flex justify-between p-5">
        <h1 className='p-2 text-xl'>StartBootstrap</h1>
        <button className='p-2 bg-blue-700 text-white mr-5 rounded-lg'>SignUP</button>
      </header>
      <main>
        <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center w-full h-[90vh] flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-6xl text-center p-20">
            Generate more leads with a <br />
            professional landing page!
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email address"
              required
              className="p-5 rounded-lg text-black w-96 border-2 border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className={`p-5 rounded-lg ml-5 ${isValid ? 'bg-blue-500' : 'bg-blue-500 cursor-not-allowed'} text-white`}
              disabled={!isValid}
            >
              Submit
            </button>
          </form>
        </div>


        <div className="flex justify-center items-center gap-20 py-10 bg-gray-50">
          <div className="flex flex-col items-center text-center p-10 ml-20">
            <img src={icon1} alt="Fully Responsive Icon" className="w-16 h-16 mb-4" />
            <h2 className="font-bold text-2xl">Fully Responsive</h2>
            <p className="text-gray-600 mt-2 text-xl">
              This theme will look great on any device, no matter the size!
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-10">
            <img src={icon2} alt="Bootstrap 5 Ready Icon" className=" ml-32 w-52 h-18 mb-4" />
            <h2 className="font-bold text-2xl">Bootstrap 5 Ready</h2>
            <p className="text-gray-600 mt-2 text-xl">
              Featuring the latest build of the new Bootstrap 5 framework!
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-10 mr-20">
            <img src={icon3} alt="Easy to Use Icon" className="w-16 h-16 mb-4" />
            <h2 className="font-bold text-2xl">Easy to Use</h2>
            <p className="text-gray-600 mt-2 text-xl">
              Ready to use with your own content, or customize the source files!
            </p>
          </div>
        </div>

        <div className='flex'>
          <div className='p-20 flex flex-col justify-center text-justify'>
            <h1 className='font-semibold text-3xl text-justify'>Fully Responsive Design</h1>
            <p className='font-thin text-xl pt-2'>When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
          </div>
          <img src={phone} className='w-1/2' alt='phone' />
        </div>
        <div className='flex'>
          <img src={code} className='w-1/2' alt='phone' />
          <div className='p-20 flex flex-col justify-center text-justify'>
            <h1 className='font-semibold text-3xl text-justify'>Updated For Bootstrap 5</h1>
            <p className='font-thin text-xl pt-2'>Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!</p>
          </div>
        </div>
        <div className='flex'>
          <div className='p-20 flex flex-col justify-center text-justify'>
            <h1 className='font-semibold text-3xl text-justify'>Easy to Use & Customize</h1>
            <p className='font-thin text-xl pt-2'>Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
          </div>
          <img src={lap} className='w-1/2' alt='phone' />
        </div>
        <div className='bg-gray-100'>
          <h1 className='font-bold text-3xl px-20 pt-20 text-center'>What people are saying...</h1>
          <div className='flex justify-around items-center p-32'>
            <div className='flex flex-col justify-center items-center'>
              <img src={person1} className='w-52 h-52 rounded-full mb-5' alt='' />
              <h1 className='font-bold text-2xl'>Margaret E.</h1>
              <p className='text-center'>"This is fantastic! Thanks so much guys!"</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={person2} className='w-52 h-52 rounded-full mb-5' alt='' />
              <h1 className='font-semibold text-2xl'>Fred S.       </h1>
              <p className='text-center'>"Bootstrap is amazing. I've been using it <br></br>to create lots of super nice landing pages."</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={person3} className='w-52 h-52 rounded-full mb-5' alt=''/>
              <h1 className='font-semibold text-2xl'>Sarah W.              </h1>
              <p className='text-center'>"Thanks so much for making these free <br></br>resource available to us!"</p>
            </div>
          </div>
        </div>
        <div className="bg-[url('./assets/bg.jpg')] bg-cover bg-center w-full h-[40vh] flex flex-col justify-center items-center">
          <h1 className="font-bold text-white text-4xl text-center p-10">
            Ready to get started? Sign up now!
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter email address"
              required
              className="p-5 rounded-lg text-black w-96 border-2 border-gray-300 focus:ring-1 focus:ring-red-500 focus:border-red-500 focus:outline-none"
            />
            <button
              type="submit"
              className={`p-5 rounded-lg ml-5 ${isValid ? 'bg-blue-500' : 'bg-blue-500 cursor-not-allowed'} text-white`}
              disabled={!isValid}
            >
              Submit
            </button>
          </form>
        </div>
      </main>
      <footer>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col pl-8'>
            <ul className='flex pt-10 '>
              <li className='underline text-blue-700 pr-5 cursor-pointer'>About</li>
              <li className='underline text-blue-700 pr-5 cursor-pointer'>Contact</li>
              <li className='underline text-blue-700 pr-5 cursor-pointer'>Terms Of Use</li>
            </ul>
            <p className='pt-2 pb-10 font-light text-sm'>© SivaKavindra@2024. All Rights Reserved.</p>
          </div>
          <div className='flex justify-center items-center pr-8'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-4xl text-blue-700 p-5 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-4xl text-blue-700 p-5 hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-4xl text-blue-700 p-5 hover:text-pink-600 transition duration-300" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
