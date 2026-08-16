import React, { useEffect, useRef, useState } from 'react';
import SmoothScrollingLink from '../Component/SmoothScrollingLink';

// landing page video
import video from '../images/smoke.mp4'

// Header
import 'animate.css';
import logo from '../images/911_logo.png'

// quality 
import quality from '../images/maintainance.svg'

// services
import brake from '../images/brake.png';
import engine from '../images/engine.png';
import wheel from '../images/wheel.png';
import oil from '../images/oil.png';
import battery from '../images/battery.png';
import service1 from '../images/service1.jpg';
import service2 from '../images/service2.jpg';
import painting from '../images/painting.jpg';
import wasing from '../images/bikeWash.jpg';
// import diwali from '../images/Happy diwali.jpg'


// booking or contact
import emailjs from '@emailjs/browser';


// slideshow
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import honda from '../images/honda.png';
import hero from '../images/hero.png';
import yamaha from '../images/yamaha.png';
import ktm from '../images/ktm.png';
import suzuki from '../images/suzuki.png';
import bajaj from '../images/bajaj.png';
import RE from '../images/RE.png';
import jawa from '../images/jawa.png';
import tvs from '../images/tvs.png';


// AOS Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

// react-tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// MUI imports
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Tooltip } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import moment from 'moment'
// import DateTimePicker from '@mui/lab/DateTimePicker';

// React-Datepicker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


// Modal style
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transform: 'translate(-50%, -50%)',
    width: '20rem',
    height: 'auto',
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

// Modal style Diwali offer
// const offerModalStyle = {

// };



const Home = () => {

    // 👇️ scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    // funtion to slide the navbar
    function slide() {
        document.getElementById('side-navbar').style.width = "20rem";
    }

    // funtion to close the nav bar
    function close() {
        document.getElementById('side-navbar').style.width = "0";
    }


    // booking
    const form = useRef();
    const [getName, setName] = React.useState('');
    const [getPhone, setPhone] = React.useState('');
    const [getModal, setModal] = React.useState('');
    const [getService, setService] = React.useState('');
    const [getQuery, setQuery] = React.useState('');
    const [fromDate, setFromDate] = React.useState('');
    const [getAddress, setAddress] = React.useState('');
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [showFields, setShowFields] = useState(false); // Initialize the checkbox state
    // const pickupDate = moment(fromDate).format('DD-MM-YYYY hh:mm A');

    // Function to send mail
    const sendEmail = (e) => {
        e.preventDefault();

        if (getName !== "" && getPhone !== "" && getModal !== "" && getService !== "") {
            if (showFields) {
                // Check if date and address fields are filled when the checkbox is checked
                if (fromDate !== "" && getAddress !== "") {
                    // Send email when date and address fields are filled
                    emailjs.sendForm('service_t7mpdet', 'template_9drd373', form.current, 'DTYHmwwee9kgpN9ZT')
                        .then((result) => {
                            toast("Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon.");
                            setTimeout(() => {
                                window.location.reload(false);
                            }, 5000);
                        })
                        .catch((error) => {
                            toast.error("Not able to book the service. Please check your connection or try again later.");
                            console.log(error.text);
                        });
                } else {
                    toast.error("Please fill in the date and address fields.");
                }
            } else {
                // Send email when the checkbox is unchecked
                emailjs.sendForm('service_t7mpdet', 'template_9drd373', form.current, 'DTYHmwwee9kgpN9ZT')
                    .then((result) => {
                        toast("Thank you for choosing 911 Car Detailing Studio.\n Give us some time, we will get back to you soon.");
                        setTimeout(() => {
                            window.location.reload(false);
                        }, 5000);
                    })
                    .catch((error) => {
                        toast.error("Not able to book the service. Please check your connection or try again later.");
                        console.log(error.text);
                    });
            }
        } else {
            toast.error("Please fill in all the fields.");
        }
    };

    //   init Aos animation
    useEffect(() => {
        AOS.init();
    }, [])


    // modal states
    // states for modal - 1
    const [open, setOpen] = React.useState(false);
    const handleOpen1 = () => setOpen(true);
    const handleClose1 = () => setOpen(false);

    // states for modal - 2
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    // states for modal - 3
    const [open3, setOpen3] = React.useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);


    // states for modal - 4 Diwali Offer
    // const [open4, setOpen4] = React.useState(false);
    // const handleOpen4 = () => setOpen4(true);
    // const handleClose4 = () => setOpen4(false);

    const handleFromDateChange = date => {
        setFromDate(date);
    };




    // for getting the currnt date and time
    useEffect(() => {
        setCurrentDate(new Date());

    }, []);

    // funtoion to toggle the fields after checking the checkbox
    const toggleFields = () => {
        setShowFields(!showFields);
    };



    // Landing page
    const [showFirstSection, setShowFirstSection] = useState(true);

    useEffect(() => {
        // Hide the first section after 10 seconds
        const timeoutId = setTimeout(() => {
            setShowFirstSection(false);
            // handleOpen4();
        }, 7000);

        return () => {
            clearTimeout(timeoutId);

        };
    }, []);


    return (
        <>

            {showFirstSection && (
                <section className="one">
                    <video src={video} autoPlay muted />
                    <h1 className='landing-h1'>
                        <span>911</span>
                        <span>&nbsp;CAR&nbsp;</span>
                        <span>&nbsp;DETAILING&nbsp;</span>
                        <span>&nbsp;STUDIO&nbsp;</span>
                    </h1>
                </section>
            )}



            {/* Main Container */}
            <section className='home-container'>




                {/* Header section */}
                <section id='header'>

                    <div className='header'>


                        {/* Open side - navbar button */}
                        <Tooltip title="Menu">
                            <div className='menu-btn'>
                                <span className='btn' id='open' onClick={slide}><i className="fa-solid fa-bars"></i></span>
                            </div>
                        </Tooltip>

                        {/* Logo section */}
                        <div className='logo'>

                            <SmoothScrollingLink to="home" >
                                <img src={logo} alt="911 Car Detailing Studio Logo" />
                            </SmoothScrollingLink>


                            <div className='title animate__animated animate__shakeX'>
                                <SmoothScrollingLink to="home" >
                                    <span> 911 <span className='half-title'>CAR DETAILING STUDIO</span></span>
                                </SmoothScrollingLink>
                            </div>

                        </div>


                        {/* Side - navbar section  */}
                        <div className='side-navbar' id='side-navbar'>

                            {/* title and close navbar */}
                            <div className='close-hamburger'>
                                <span style={{ marginLeft: '1rem' }}>911 CAR DETAILING STUDIO</span>

                                <button id='close' onClick={close}><i className="fa-solid fa-xmark"></i></button>

                            </div>

                            {/* Side - navItem section */}
                            <div className='side-navItems' id='side-navItems'>

                                <SmoothScrollingLink to="home" >
                                    <span className="subnavbtn"><i className="fa-solid fa-home"></i> Home</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="services" >
                                    <span className="subnavbtn"> <i className="fa-solid fa-gear"></i> Our Services</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="booking" >

                                    <span className="subnavbtn"> <i className="fa-solid fa-user-pen"></i> Book service</span>
                                </SmoothScrollingLink>

                                <SmoothScrollingLink to="contact">

                                    <span className="subnavbtn"> <i className="fa-solid fa-phone"></i> Contact Us</span>
                                </SmoothScrollingLink>

                            </div>


                            {/* Social Icons */}
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                position: 'absolute',
                                bottom: '6rem'

                            }}>
                                <span>
                                    <h2 id="social-head">Get In Touch With Us </h2>
                                </span>

                                <Box sx={{

                                }}>
                                    <ul style={{ padding: "0" }}>

                                        <li className="icons">
                                            <a href="https://www.facebook.com/profile.php?id=61550075405673&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
                                                <i className="fa-brands fa-facebook" ></i>
                                            </a>
                                        </li>

                                        <li className="icons">
                                            <a href="https://www.instagram.com/911_premiumcardetailing/" target="_blank" rel="noreferrer">
                                                <i className="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>

                                        <li className="icons">
                                            <a href="https://wa.me/message/FXCIZ4L4CNDJK1" target="_blank" rel="noreferrer">
                                                <i className="fa-brands fa-whatsapp"></i>
                                            </a>
                                        </li>

                                    </ul>
                                </Box>

                            </Box>


                            {/* Navbar Footer */}
                            <Box sx={{
                                width: '100%',
                                textAlign: 'center',
                                position: 'absolute',
                                bottom: '0'

                            }}>
                                <footer>
                                    <span>
                                        &copy;{new Date().getFullYear()}, 911 Car Detailing Studio
                                    </span>
                                </footer>

                                <div>
                                    <p className="footer-heart">
                                        Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                            <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" />
                                        </g-emoji> by <a href="https://itzzakib07.github.io/dopefolio/" target='_blank' rel='noreferrer'>Akib Mulla</a>
                                    </p>
                                </div>

                            </Box>

                        </div>

                    </div>


                </section>

                {/* body section */}
                <section className='home-sections'>

                    {/* Offer section modal */}
                    {/* <section className='offer' >
                        <Modal
                            open={open4}
                            onClose={handleClose4}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className='offerModalStyle' >

                                    <Box sx={{
                                        position: 'absolute',
                                        alignItems: 'center',
                                        color: 'white',
                                        left: '103%',
                                        top: '0',
                                        fontSize: '1.5rem',
                                        fontWeight: '900',
                                        cursor: 'pointer',
                                        padding:'0'
                                    }}
                                        onClick={handleClose4}
                                    >
                                        <i className="fa-solid fa-xmark"></i>
                                    </Box>

                                    <img src={diwali} style={{width:'100%', height:'100%'}}/>

                            </div>
                        </Modal>
                    </section> */}


                    {/* Hero section */}
                    <section id='home' className='hero' data-aos="zoom-in">

                        <SmoothScrollingLink to="quality" >
                            <div className='downArrow'>
                                <i className="fa-solid fa-arrow-down-long"></i>
                                <span style={{ color: "white" }}>SCROLL DOWN</span>
                            </div>
                        </SmoothScrollingLink>
                    </section>

                    {/* Quality Assured section */}
                    <section className='quality' id='quality'>

                        <div className='sec-1' data-aos="fade-up">

                            <span>Quality Assured</span>

                            <span>
                                Premium car detailing services with uncompromising quality, professional care, and long-lasting protection for your vehicle.
                            </span>

                            <ul className="circle-list">
                                <li>Expert Detailers</li>
                                <li>Premium-Grade Products</li>
                                <li>GLong-Lasting Protection</li>
                                <li>Professional Finish</li>
                            </ul>

                        </div>

                        <div className='sec-2' data-aos="fade-up">
                            <img src={quality} alt="Quality Assured"></img>
                        </div>

                    </section>

                    {/* Our sevices section */}
                    <section className='servicing-images' id='services'>

                        <h1 style={{ textAlign: 'center', marginTop: '3rem' }} data-aos="fade-down">Our Services</h1>

                        <div className='servicing'>

                            <div className='section-1' >

                                <div className='sub-1' data-aos="fade-right">
                                    <img src={service1} alt="Paint Protection Film Service" />
                                </div>

                                <div className='sub-2' data-aos="fade-left">
                                    <p>
                                        <h1>PAINT PROTECTION FILM (PPF)</h1>

                                        Protect your vehicle’s original paint with premium Paint Protection Film designed to defend against stone chips, scratches, road debris, and everyday wear. PPF provides a durable protective layer while maintaining the vehicle’s original finish and enhancing its long-term appearance.
                                    </p>
                                </div>
                            </div>

                            <div className='section-2'>

                                <div className='sub-3' data-aos="fade-right">
                                    <p>
                                        <h1>PAINT CORRECTION</h1>

                                        Restore your car’s paintwork and bring back its original gloss with professional paint correction. Our detailing specialists carefully remove swirl marks, oxidation, light scratches, and surface imperfections to deliver a smoother, deeper, and more refined finish.
                                    </p>
                                </div>

                                <div className='sub-4' data-aos="fade-left">
                                    <img src={service2} alt="Paint Correction Service" />
                                </div>
                            </div>

                            <div className='section-3'>

                                <div className='sub-5' data-aos="fade-right">
                                    <img src={wasing} alt="Ceramic Graphene Coatings" />
                                </div>

                                <div className='sub-6' data-aos="fade-left">

                                    <p>
                                        <h1>CERAMIC / GRAPHENE COATINGS</h1>

                                        Give your vehicle long-lasting protection with premium Ceramic and Graphene Coatings. These advanced coatings enhance gloss, provide a powerful hydrophobic effect, and offer resistance against UV rays, chemicals, contaminants, and everyday environmental exposure.
                                    </p>
                                </div>
                            </div>

                            <div className='section-4'>

                                <div className='sub-7' data-aos="fade-right">

                                    <p>
                                        <h1>EXTERIOR DETAILING & CAR SPA</h1>

                                        Give your vehicle a complete exterior refresh with professional detailing and car spa services. From deep cleaning and decontamination to finishing and polishing, we carefully restore the exterior to leave your car looking clean, glossy, and showroom-ready.
                                    </p>
                                </div>

                                <div className='sub-8' data-aos="fade-left">
                                    <img src={painting} alt="Exterior Detailing and Car Spa" />
                                </div>
                            </div>

                        </div>

                    </section>


                    {/* Service Information Section */}
                    <section className='service-container'>

                        <div className='service-details' id='service-details'>

                            <div className='service' id='service1' data-aos="fade-right">

                                <div className='img'>
                                    <img src={brake} alt="Brake Service" />
                                </div>

                                <h4>Brake Service</h4>

                                <div className='information'>

                                    <p id='p1'>

                                        Regular bike brake service is crucial for safety, longevity, performance, and comfort. Properly maintained brakes ensure your safety while riding, prolong the lifespan of components, enhance stopping power, and provide a more enjoyable riding experience.
                                    </p>

                                </div>
                            </div>

                            <div className='service' id='service2' data-aos="fade-left">
                                <div className='img'>
                                    <img src={engine} alt="Engine Service" />
                                </div>

                                <h4>Engine Service</h4>

                                <div className='information'>
                                    <p id='p2'>
                                        Regular bike engine service is essential for performance, safety, longevity, fuel efficiency, and resale value. Maintaining your engine ensures proper functionality, prevents issues, reduces the risk of accidents, prolongs its lifespan, saves fuel costs, and enhances resale prospects.
                                    </p>
                                </div>

                            </div>

                            <div className='service' id='service3' data-aos="fade-right">
                                <div className='img'>
                                    <img src={wheel} alt="Wheel Service" />
                                </div>

                                <h4>Wheel Service</h4>

                                <div className='information'>

                                    <p id='p3'>
                                        Regular bike wheel service ensures safety, performance, and longevity. It provides smoother rides, prevents accidents, and extends the lifespan of your bike components.it enhances comfort and aesthetics for an overall biking experience.

                                    </p>

                                </div>
                            </div>

                            <div className='service' id='service4' data-aos="fade-left">
                                <div className='img'>
                                    <img src={oil} alt="Oil Service" />
                                </div>

                                <h4>Oil Service</h4>

                                <div className='information'>

                                    <p id='p4'>
                                        Regular bike oil service ensures proper lubrication, cooling, and performance, extending engine life and preventing damage from contamination. Fresh oil reduces friction, increases horsepower, and improves fuel efficiency for a smooth ride.
                                    </p>
                                </div>

                            </div>

                            <div className='service' id='service5' data-aos="fade-right" >
                                <div className='img'>
                                    <img src={battery} alt="Battery Service" />
                                </div>

                                <h4>Battery Service</h4>

                                <div className='information'>

                                    <p id='p5'>
                                        Regular bike battery service ensures reliable starting, proper electrical component functioning, and enhanced battery lifespan. It also promotes safety by preventing electrical issues and potential engine stalling while providing long-term cost savings.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </section>


                    {/* pricing section */}
                    <section id='pricing'>

                        <div className='pricing-container'>

                            <h1 data-aos="fade-down">Pricing</h1>

                            <div className='listing' data-aos="fade-up">

                                <div className='pricing' >
                                    <h2>General Service <span>Without Oil</span></h2>

                                    <span>Rs 399/-</span>

                                    <span>Get to know more about this service </span>

                                    <p onClick={handleOpen1}>Click here</p>

                                    <SmoothScrollingLink to="booking" >
                                        <button>Book Service</button>
                                    </SmoothScrollingLink>

                                    <Modal
                                        open={open}
                                        onClose={handleClose1}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <Box sx={{
                                                position: 'relative',
                                                alignItems: 'center',
                                                color: 'white',
                                                left: '50%',
                                                top: '-1rem',
                                                fontSize: '1.5rem',
                                                fontWeight: '900',
                                                cursor: 'pointer'
                                            }}
                                                onClick={handleClose1}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </Box>

                                            <div className='modal-header'>
                                                <h2>General Service <span>Without Oil</span></h2>
                                            </div>

                                            <Box>
                                                <ul className='serviceList'>
                                                    <li> <span> Cleaning</span> </li>
                                                    <li> <span> Chain Cleaning </span> </li>
                                                    <li> <span> Chain Lubrication </span> </li>
                                                    <li> <span> Brake Adjustment </span> </li>
                                                    <li> <span> Brake Pad Inspection </span> </li>
                                                    <li> <span> Brake Caliper Alignment </span> </li>
                                                    <li> <span> Gear Shifting Adjustment </span> </li>
                                                    <li> <span> Tire Inspection </span> </li>
                                                    <li> <span> Headset Adjustment </span> </li>
                                                    <li> <span> Cable Inspection </span> </li>
                                                </ul>
                                            </Box>

                                        </Box>
                                    </Modal>

                                </div>

                                <div className='pricing'>
                                    <h2>General Service <span>With Oil</span></h2>

                                    <span>Rs 699/-</span>

                                    <span>Get to know more about this service </span>

                                    <p onClick={handleOpen2}>Click here</p>


                                    <SmoothScrollingLink to="booking" >
                                        <button>Book Service</button>
                                    </SmoothScrollingLink>

                                    <Modal
                                        open={open2}
                                        onClose={handleClose2}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <Box sx={{
                                                position: 'relative',
                                                alignItems: 'center',
                                                color: 'white',
                                                left: '50%',
                                                top: '-1rem',
                                                fontSize: '1.5rem',
                                                fontWeight: '900',
                                                cursor: 'pointer'
                                            }}
                                                onClick={handleClose2}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </Box>

                                            <div className='modal-header'>
                                                <h2>General Service <span>With Oil</span></h2>
                                            </div>

                                            <Box>
                                                <span style={{ color: 'rgb(189, 183, 183)' }}>
                                                    This service will cover all the tasks from general service without oil and adds oil-based component maintenance,such as
                                                </span>

                                                <ul className='serviceList'>
                                                    <li> <span> Checking oil levels</span> </li>
                                                    <li> <span> Draining and topping up the oil </span> </li>
                                                    <li> <span> Suspension forks </span> </li>
                                                    <li> <span> Shock absorbers </span> </li>
                                                    <li> <span> Internal gear hubs </span> </li>
                                                    <li> <span> Brake and Gear oil </span> </li>
                                                </ul>
                                            </Box>

                                        </Box>
                                    </Modal>
                                </div>

                                <div className='pricing'>
                                    <h2>Special Service <span className='h2-span'>Customizable</span></h2>

                                    <span>Rs 799/-</span>

                                    <span>Get to know more about this service</span>

                                    <p onClick={handleOpen3}>Click here</p>

                                    <SmoothScrollingLink to="booking" >
                                        <button>Book Service</button>
                                    </SmoothScrollingLink>

                                    <Modal
                                        open={open3}
                                        onClose={handleClose3}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>

                                            <Box sx={{
                                                position: 'relative',
                                                alignItems: 'center',
                                                color: 'white',
                                                left: '50%',
                                                top: '-1rem',
                                                fontSize: '1.5rem',
                                                fontWeight: '900',
                                                cursor: 'pointer'
                                            }}
                                                onClick={handleClose3}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </Box>

                                            <div className='modal-header'>
                                                <h2>Special Service <span>Customizable</span></h2>
                                            </div>

                                            <Box>
                                                <span style={{ color: 'rgb(189, 183, 183)' }}>
                                                    This comprehensive service encompasses a thorough check and maintenance of the entire bike, including cleaning, oil-based component servicing, and it goes further with <strong> bike polishing and painting to restore its aesthetics and make it look brand new.</strong>
                                                </span>
                                            </Box>

                                        </Box>
                                    </Modal>

                                </div>

                                <div className='pricing-information'>

                                    <h2>AFFORDABLE PRICING PLANS</h2>

                                    <p>We provide the best bike service, recommend the best products through an independent review process.</p>

                                    <ul>
                                        <li><span>SAME DAY SERVICE</span></li>
                                        <li><span>CONVENIENT LOCATION</span></li>
                                        <li><span>ONLINE APPOINTMENT</span></li>
                                    </ul>

                                </div>

                                <div className='pricing-information'>

                                    <h2>PICK-UP & DROP SERVICE</h2>

                                    <p>
                                        We provide a convenient service for both car and bike washing. You can choose either car or bike washing exclusively. We offer pickup and drop-off from any location beyond 5km with an <strong>additional charge of 100.</strong>
                                        <br />
                                        <ul>
                                            <li>
                                                <span>Enjoy a 7-10 day warranty on our services.</span>
                                            </li>
                                        </ul>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </section>

                    {/* booking Section */}
                    <section id='booking'>

                        <div className='booking-container' data-aos="flip-up">

                            <h1 id='book' data-aos="fade-down">Book Your Services</h1>

                            <form className='form' ref={form} onSubmit={sendEmail} >

                                <div className='input'>
                                    <i className="fa-solid fa-user"></i>
                                    {/* <input type='text' id='name' name='name' placeholder='Enter your name' autoFocus autoComplete='off' onChange={(e) => setName(e.target.value)} /> */}
                                    <TextField id='name' name='name' label="Name" value={getName} variant="standard" autoComplete='off' onChange={(e) => setName(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-phone"></i>
                                    {/* <input type='phone' id='phone' name='phone' placeholder='Enter your mobile number' autoComplete='off' onChange={(e) => setPhone(e.target.value)} /> */}
                                    <TextField id='phone' name='phone' label="Phone number" value={getPhone} variant="standard" autoComplete='off' onChange={(e) => setPhone(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-motorcycle"></i>
                                    {/* <input type='phone' id='phone' name='phone' placeholder='Enter your mobile number' autoComplete='off' onChange={(e) => setPhone(e.target.value)} /> */}
                                    <TextField id='modal' name='modal' label="Bike modal" value={getModal} variant="standard" autoComplete='off' onChange={(e) => setModal(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-screwdriver-wrench"></i>
                                    <FormControl variant='standard' sx={{ m: 1, minWidth: 120, width: '100%' }}>
                                        <InputLabel id="demo-simple-select-helper-label" sx={{ color: 'gray' }}>Select Service</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-helper-label"
                                            id="serviceType"
                                            name='serviceType'
                                            value={getService}
                                            label="Select Service"
                                            onChange={(e) => setService(e.target.value)}
                                            sx={{ color: 'wheat', width: '100%', borderBottom: '1px solid gray' }}
                                        >
                                            <MenuItem value={''}><em>None</em></MenuItem>
                                            <MenuItem value={'Periodic Service'}>Periodic Service</MenuItem>
                                            <MenuItem value={'Complete Service'}>Complete Service</MenuItem>
                                            <MenuItem value={'Washing & Polishing'}>Washing & Polishing </MenuItem>
                                            <MenuItem value={'Bike Wrapping or Painting'}>Bike Wrapping or Painting</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className='input'>
                                    <i className="fa-solid fa-note-sticky"></i>
                                    {/* <input type='text' id='details' name='details' placeholder='Tell us how we can help you?' autoComplete='off' onChange={(e) => setQuery(e.target.value)} /> */}
                                    <TextField id='details' name='details' label="Tell us how we can help you?" value={getQuery} variant="standard" autoComplete='off' onChange={(e) => setQuery(e.target.value)}
                                        sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                        InputLabelProps={{
                                            sx: {
                                                color: "gray",
                                            }
                                        }} />
                                </div>



                                <div className='booking-text' style={{
                                    width: '80%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}>

                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox checked={showFields} onChange={toggleFields} />} label="Want Pick-up & Drop service? Click here." />
                                    </FormGroup>

                                    <SmoothScrollingLink to="pricing" >
                                        <span className='serivce-link'>Check-out our plans here</span>
                                    </SmoothScrollingLink>

                                </div>



                                {showFields && ( // Conditionally render the elements when the checkbox is checked
                                    <>
                                        <span id='dateLabel' style={{ width: '75%', textAlign: 'left !important' }}>
                                            Please select the bike pick-up date and time
                                        </span>

                                        <div className='input' id='dateField'>
                                            <i className="fa-solid fa-calendar"></i>
                                            <DatePicker
                                                id='pickupDate'
                                                name='pickupDate'
                                                timeIntervals={30}
                                                selectsStart
                                                showTimeSelect
                                                dateFormat="yyyy-MM-dd HH:mm"
                                                value={fromDate}
                                                selected={fromDate}
                                                onChange={handleFromDateChange}
                                                minDate={currentDate}
                                                placeholderText='Please select date and time for pickup'
                                                isClearable
                                                wrapperClassName='date'
                                            />
                                        </div>

                                        <div className='input' id='addField'>
                                            <i className="fa-solid fa-location-dot"></i>
                                            <TextField
                                                id='address'
                                                name='address'
                                                label="Enter pickup address"
                                                value={getAddress}
                                                variant="standard"
                                                autoComplete='off'
                                                onChange={(e) => setAddress(e.target.value)}
                                                sx={{ color: 'gray', width: '100%', borderBottom: '1px solid gray' }}
                                                InputLabelProps={{
                                                    sx: {
                                                        color: "gray",
                                                    }
                                                }}
                                            />
                                        </div>
                                    </>
                                )}



                                <button className='booking-btn' id='btn' type='submit'></button>

                            </form>
                        </div>
                        <ToastContainer />

                    </section>

                    {/* contact Section */}
                    <section id='contact'>

                        <div className='form-container' data-aos="fade-up">

                            <h1 data-aos="fade-down">Contact Us</h1>

                            <div className='center-info' >

                                <div className='address'>

                                    <h2>Address</h2>

                                    <div className='details '>
                                        <span><a href='https://goo.gl/maps/D6UCGNWCpgEAThuC9' target="_blank" rel="noreferrer">Sr 231/2, New airport road, opp. Turtle wax car care studio, Clover Park, Viman Nagar, Pune, Maharashtra 411014</a></span>
                                    </div>

                                    <button className='address-btn'>
                                        <a href='https://goo.gl/maps/D6UCGNWCpgEAThuC9' target="_blank" rel="noreferrer">Get Directions <i className="fa-solid fa-road"></i></a>
                                    </button>

                                </div>

                                <div className='map'>

                                    <iframe title="911 Car Detailing Studio Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1430271143336!2d73.90498707473623!3d18.567589467737257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1747c575c1d%3A0xd51856b9cc9076e7!2sThe%20Piston%20Bike%20Lounge!5e0!3m2!1sen!2sin!4v1693466323046!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ height: '100%', width: '100%', border: 'none' }} />

                                </div>

                                <div className='hours'>

                                    <h2>Open Hours</h2>


                                    <div className='timing'>

                                        <div className='days'>
                                            <p>Monday - Friday</p>
                                            <p>Saturday</p>
                                            <p>Sunday</p>
                                        </div>

                                        <div className='time'>
                                            <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                                            <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                                            <p>: &nbsp;&nbsp; 9 AM - 9 PM</p>
                                        </div>

                                    </div>

                                    <p>Timings may warry</p>

                                </div>

                                <div className='support'>

                                    <h2>Customer Support</h2>

                                    <div className='info'>

                                        <div className='days'>
                                            <p><i className="fa-solid fa-envelope"></i></p>
                                            <p><i className="fa-solid fa-envelope"></i></p>
                                            <p><i className="fa-solid fa-phone"></i></p>
                                        </div>

                                        <div className='time'>
                                            <p>:&nbsp;&nbsp;<a href="mailto:admin@thepistonbikelounge.com">admin@911.com</a></p>
                                            <p>:&nbsp;&nbsp;<a href="mailto:tausifshaikh2505@gmail.com">tausifshaikh2505@gmail.com</a></p>
                                            <p>: &nbsp;&nbsp;8657445050</p>
                                        </div>

                                    </div>


                                </div>



                            </div>
                        </div>

                    </section>


                    {/* Brands Image slide show */}
                    <section id='slideshow' data-aos="zoom-in">

                        <h1>Brands we have serviced</h1>

                        <Splide options={{
                            type: 'loop',
                            rewind: true,
                            autoplay: true,
                            perMove: 1,
                            gap: '2rem',
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                pauseOnHover: true,
                                pauseOnFocus: false,
                                speed: 2
                            },
                        }}
                            extensions={{ AutoScroll }}>
                            <SplideSlide>
                                <div className='brands-container'>

                                    <div className='brands'>

                                        <div className='brand'>
                                            <img src={honda} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={yamaha} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={RE} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={jawa} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={suzuki} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={ktm} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={hero} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={tvs} alt="Our Partners"></img>
                                        </div>

                                        <div className='brand'>
                                            <img src={bajaj} alt="Our Partners"></img>
                                        </div>

                                    </div>
                                </div>
                            </SplideSlide>
                        </Splide>
                    </section>

                </section>

                {/* Footer section */}
                <section id='footer'>
                    <div className='footer'>

                        <footer>
                            <span>
                                &copy; {new Date().getFullYear()}, 911 Car Detailing Studio
                            </span>
                        </footer>

                        <div>
                            <p className="footer-heart">
                                Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                                    <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" />
                                </g-emoji> by <a href="https://itzzakib07.github.io/dopefolio/" target='_blank' rel="noreferrer">Akib Mulla</a>
                            </p>
                        </div>
                    </div>

                </section>

                {/* WhatsAPP Button */}
                <Tooltip title="Chat with us on Whatsapp" placement="right">
                    <span className='whatsapp'>
                        <button>
                            <a href="https://wa.me/message/FXCIZ4L4CNDJK1" target='_blank' rel="noreferrer">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </button>
                    </span>
                </Tooltip>

                {/* Scroll Top button */}
                <SmoothScrollingLink to="home" >
                    <Tooltip title="Scroll to Top" placement="left">
                        <span className='scroll'>
                            <button>
                                <i className="fa-solid fa-jet-fighter-up"></i>
                            </button>
                        </span>
                    </Tooltip>
                </SmoothScrollingLink>

            </section>

        </>
    )
}

export default Home
