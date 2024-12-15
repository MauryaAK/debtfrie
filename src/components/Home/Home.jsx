// import React from 'react'

// const Home = () => {
//     return (
//         <>
//             <div>
//                 <div className='text-center'>
//                     <h1 className='text-4xl font-bold mt-10 md:w-1/3 mx-auto px-1'>Mastering React Router: Simplified Navigation</h1>
//                     <p className='md:w-1/4 text-xs mx-auto py-6 px-2'>React Router simplifies navigation in React apps, enabling dynamic routing, URL management, and component-based rendering. It enhances user experience effortlessly.</p>
//                     <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>Get Started</button>
//                 </div>
//                 <div className='md:w-3/4 px-1 h-80 flex mx-auto md:gap-6 gap-1 my-12 relative'>
//                     <div className='w-1/4 h-full'>
//                         <img className='rounded-xl' src="d.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full relative top-6'>
//                         <img className='rounded-xl' src="c.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full'>
//                         <img className='rounded-xl' src="b.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full relative top-6'>
//                         <img className='rounded-xl' src="a.png" alt="" />
//                     </div>
//                 </div>

//                 <div className='w-3/4 mx-auto md:mt-24 md:my-20'>
//                     <img src="e.png" alt="" />
//                 </div>

//                 <h2 className='font-bold text-3xl mx-auto w-3/4 text-center my-8'>Core concept of React-Router</h2>

//                 <div className="grid grid-cols-3 md:gap-14 gap-2 md:w-3/4 px-1 mx-auto text-center">
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="f.png" width={40} alt="img" />
//                         <h2 className='font-bold'>Routes</h2>
//                         <p className='text-xs px-2'>Define paths to render specific components dynamically based on URLs.</p>
//                     </div>
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="g.png" width={40} alt="img" />
//                         <h2 className='font-bold'>Links</h2>
//                         <p className='text-xs px-2'>Navigate seamlessly between pages using React Router's link components.</p>
//                     </div>
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="h.png" width={40} alt="img" />
//                         <h2 className='font-bold'>History</h2>
//                         <p className='text-xs px-2'>Manage session history efficiently for a smooth navigation experience.</p>
//                     </div>
//                 </div>

//                 <div className="md:flex h-fit md:w-3/4 p-1 mx-auto my-20 gap-12">
//                     <div className='md:w-1/2 flex flex-col gap-28'>
//                         <div>
//                             <h2 className='font-bold text-3xl'>Unlock Seamless Navigation with React Router</h2>
//                             <p className='text-sm mt-5'>React Router empowers developers to build dynamic, single-page applications with ease. Its intuitive tools like routes, links, and history management ensure smooth user experiences. Dive into the core concepts, learn their significance, and start mastering the art of navigation in modern web development.</p>
//                         </div>
//                         <div>
//                             <div className='flex justify-between'>
//                                 <div>
//                                     <div>Managing Route Structures</div>
//                                     <div>Team Collaboration with Router</div>
//                                     <div>Launching Apps with Navigation</div>
//                                 </div>
//                                 <div>
//                                     <div>Simplifying Navigation for Beginners</div>
//                                     <div>Advanced Techniques for Experts</div>
//                                 </div>
//                             </div>
//                             <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-4'>Contact us</button>
//                         </div>
//                     </div>
//                     <div className=' md:w-1/2 py-1 h-full'>
//                         <img className='rounded-lg' src="i.png" alt="" />
//                     </div>
//                 </div>

//                 <div className="md:flex h-fit md:w-3/4 mx-auto my-20 gap-12">
//                     <div className='md:w-1/2 px-1 h-full'>
//                         <img className='rounded-lg' src="j.png" alt="" />
//                     </div>
//                     <div className='md:w-1/2 p-1 flex flex-col gap-6'>
//                         <div>
//                             <h2 className='font-bold text-3xl'>We Empower Seamless Navigation Experiences</h2>
//                             <p className='text-sm mt-5'>React Router equips you with the tools to create dynamic, single-page applications. With features like route management, link components, and history handling, it ensures intuitive navigation. Whether you're a beginner or an experienced developer, React Router simplifies building user-friendly web apps.</p>
//                         </div>
//                         <div>
//                             <div className='flex justify-between'>
//                                 <div className='w-1/2 flex flex-col gap-1'>
//                                     <h2 className='text-2xl font-bold'>Project</h2>
//                                     <p>Explore how dynamic routes greatly enhance the overall app experience effectively.</p>
//                                     <p className='text-blue-700 underline'>Boost app navigation seamlessly.</p>
//                                 </div>
//                                 <div className='w-1/2 flex flex-col gap-1'>
//                                     <h2 className='text-2xl font-bold'>Contact</h2>
//                                     <p>Have questions or need further assistance with React Router? Connect with us!</p>
//                                     <p className='text-blue-700 underline'>We're here to help.</p>
//                                 </div>
//                             </div>
//                             <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-8'>Get Started</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Home







// import React from 'react';
// import Slider from 'react-slick';
// import './home.css'
// const Home = () => {
//     // Slick slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         easing: 'ease-in-out',
//         rtl: false,
//         backgroundColor: "#111827"
//     };

//     return (
//         <>
//             <div className="relative" style={{ backgroundColor: "#111827" }}>
//                 {/* Slideshow Section */}
//                 <Slider {...settings} className="w-full" ba>
//                     <div>
//                         <img src="c.png" alt="Slide 1" className="w-full h-[600px] object-cover" />
//                     </div>
//                     <div>
//                         <img src="a.png" alt="Slide 2" className="w-full h-[600px] object-cover" />
//                     </div>
//                     <div>
//                         <img src="b.png" alt="Slide 3" className="w-full h-[600px] object-cover" />
//                     </div>
//                 </Slider>
//             </div>

//             <div>
//                 <div className='text-center'>
//                     <div className="bg-gray-900 text-center mt-10 p-6">
//                         <h1 className="text-4xl font-bold md:w-1/3 mx-auto px-1 text-white animate-bounce">
//                             DOWN WITH DEBT?
//                             <span className="text-yellow-400 animate-pulse"> RELIEF IS HERE</span>
//                         </h1>
//                         <p className="text-lg font-medium mt-4 text-gray-300">
//                             <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
//                                 Apki Journey Humara Saath
//                             </span>
//                         </p>
//                         <button className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 shadow-lg">
//                             Know More
//                         </button>
//                     </div>


//                     <p className='md:w-1/4 text-xs mx-auto py-6 px-2'>React Router simplifies navigation in React apps, enabling dynamic routing, URL management, and component-based rendering. It enhances user experience effortlessly.</p>
//                     <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black'>Get Started</button>
//                 </div>

//                 <div className='md:w-3/4 px-1 h-80 flex mx-auto md:gap-6 gap-1 my-12 relative'>
//                     <div className='w-1/4 h-full'>
//                         <img className='rounded-xl' src="d.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full relative top-6'>
//                         <img className='rounded-xl' src="c.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full'>
//                         <img className='rounded-xl' src="b.png" alt="" />
//                     </div>
//                     <div className='w-1/4 h-full relative top-6'>
//                         <img className='rounded-xl' src="a.png" alt="" />
//                     </div>
//                 </div>

//                 <div className='w-3/4 mx-auto md:mt-24 md:my-20'>
//                     <img src="e.png" alt="" />
//                 </div>

//                 <h2 className='font-bold text-3xl mx-auto w-3/4 text-center my-8'>Core concept of React-Router</h2>

//                 <div className="grid grid-cols-3 md:gap-14 gap-2 md:w-3/4 px-1 mx-auto text-center">
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="f.png" width={40} alt="img" />
//                         <h2 className='font-bold'>Routes</h2>
//                         <p className='text-xs px-2'>Define paths to render specific components dynamically based on URLs.</p>
//                     </div>
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="g.png" width={40} alt="img" />
//                         <h2 className='font-bold'>Links</h2>
//                         <p className='text-xs px-2'>Navigate seamlessly between pages using React Router's link components.</p>
//                     </div>
//                     <div className='shadow-2xl py-6 flex flex-col gap-4'>
//                         <img className='mx-auto' src="h.png" width={40} alt="img" />
//                         <h2 className='font-bold'>History</h2>
//                         <p className='text-xs px-2'>Manage session history efficiently for a smooth navigation experience.</p>
//                     </div>
//                 </div>

//                 <div className="md:flex h-fit md:w-3/4 p-1 mx-auto my-20 gap-12">
//                     <div className='md:w-1/2 flex flex-col gap-28'>
//                         <div className="fade-in-left fade-hover">
//                             <h2 className='font-bold text-3xl'>Expert Legal Services for Every Need</h2>
//                             <p className='text-sm mt-5'>Our law firm provides expert legal services across a wide range of practice areas. Whether you're facing personal, business, or litigation challenges, we offer clear, effective, and reliable legal solutions tailored to your unique needs. Learn more about how our team of experienced attorneys can help you navigate the complexities of the law.</p>
//                         </div>
//                         <div className="fade-in-up fade-hover">
//                             <div className='flex justify-between'>
//                                 <div>
//                                     <div>Legal Consultation and Advice</div>
//                                     <div>Business and Corporate Law</div>
//                                     <div>Family Law and Estate Planning</div>
//                                 </div>
//                                 <div>
//                                     <div>Criminal Defense Services</div>
//                                     <div>Real Estate and Property Law</div>
//                                 </div>
//                             </div>
//                             <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-4 fade-hover'>Contact Us</button>
//                         </div>
//                     </div>
//                     <div className='md:w-1/2 py-1 h-full fade-in-right fade-hover'>
//                         <img className='rounded-lg' src="i.png" alt="Illustration" />
//                     </div>
//                 </div>

//                 <div className="md:flex h-fit md:w-3/4 mx-auto my-20 gap-12">
//                     <div className='md:w-1/2 py-1 h-full fade-in-right fade-hover'>
//                         <img className='rounded-lg' src="j.png" alt="" />
//                     </div>
//                     <div className='md:w-1/2 p-1 flex flex-col gap-6'>
//                         <div className="fade-in-left fade-hover">
//                             <h2 className='font-bold text-3xl'>Committed to Protecting Your Legal Rights</h2>
//                             <p className='text-sm mt-5'>At our law firm, we are committed to providing high-quality legal services to individuals and businesses. Our experienced attorneys offer legal representation in areas such as personal injury, criminal defense, corporate law, and family law. Whatever legal issue you're facing, we are here to guide you every step of the way.</p>
//                         </div>
//                         <div>
//                             <div className='flex justify-between'>
//                                 <div className='w-1/2 flex flex-col gap-1'>
//                                     <h2 className='text-2xl font-bold'>Our Services</h2>
//                                     <p>We provide expert legal representation for a wide range of legal issues, from personal injury cases to corporate legal services. Learn how we can help you today.</p>
//                                     <p className='text-blue-700 underline'>Get expert legal advice now.</p>
//                                 </div>
//                                 <div className='w-1/2 flex flex-col gap-1'>
//                                     <h2 className='text-2xl font-bold'>Contact Us</h2>
//                                     <p>If you need legal advice or representation, don’t hesitate to reach out. Our team is ready to assist you with any legal challenge you're facing.</p>
//                                     <p className='text-blue-700 underline'>Reach out to schedule a consultation.</p>
//                                 </div>
//                             </div>
//                             <button className='bg-[#F3E5F5] hover:bg-[#e8f0fe] py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-8'>Schedule Consultation</button>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// };

// export default Home;











import React from 'react';
import Slider from 'react-slick';
import './home.css';

const Home = () => {
    // Slick slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // easing: 'ease-in-out',
        rtl: false,
        // backgroundColor: "#111827"
    };

    return (
        <>
            <div className="relative" style={{ backgroundColor: "#111827", color: "#ffffff" }}>
                {/* Slideshow Section */}
                <Slider {...settings} className="w-full">
                    <div className="relative">
                        <img src="c.png" alt="Slide 1" className="w-full h-[600px] object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 fadeIn">
                            <h2 className="text-5xl font-extrabold leading-tight mb-4">Protecting Your Rights</h2>
                            <p className="text-xl mb-6">Experienced legal representation when you need it the most. Our expert lawyers provide personalized advice to ensure your best interests are represented.</p>
                            {/* <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300">Learn More</button> */}
                            <button className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-orange-400 via-yellow-500 to-yellow-600 hover:from-orange-500 hover:via-yellow-600 hover:to-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform hover:scale-105 shadow-lg">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="a.png" alt="Slide 2" className="w-full h-[600px] object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 fadeIn">
                            <h2 className="text-5xl font-extrabold leading-tight mb-4">Expert Legal Advice</h2>
                            <p className="text-xl mb-6">With decades of experience, we guide clients through complex legal challenges and provide tailored solutions for every case.</p>
                            {/* <button className="bg-gradient-to-r from-green-600 to-green-800 text-white py-2 px-6 rounded-lg hover:from-green-700 hover:to-green-900 transition-all duration-300">Get Consultation</button> */}
                            <button className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 shadow-lg">
                                Get Consultation
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="b.png" alt="Slide 3" className="w-full h-[600px] object-cover" />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white p-4 fadeIn">
                            <h2 className="text-5xl font-extrabold leading-tight mb-4">Committed to Justice</h2>
                            <p className="text-xl mb-6">Our team is dedicated to ensuring that justice is served. We fight for fairness and equality, giving a voice to the voiceless.</p>
                            {/* <button className="bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-6 rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300">Contact Us</button> */}
                            <button className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-green-400 via-lime-500 to-green-600 hover:from-green-500 hover:via-lime-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-lime-300 transition-transform transform hover:scale-105 shadow-lg">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>




            <div>
                <div className='text-center'>
                    <div className="bg-gray-900 text-center mt-10 p-6">
                        <h1 className="text-4xl font-bold md:w-1/3 mx-auto px-1 text-white animate-bounce">
                            DOWN WITH DEBT?
                            <span className="text-yellow-400 animate-pulse"> RELIEF IS HERE</span>
                        </h1>
                        <p className="text-lg font-medium mt-4 text-gray-300">
                            <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-transparent bg-clip-text">
                                Apki Journey Humara Saath
                            </span>
                        </p>
                        <button className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 hover:from-blue-600 hover:via-purple-700 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-transform transform hover:scale-105 shadow-lg">
                            Know More
                        </button>
                    </div>
                </div>

                {/* <div className="md:w-4/5 px-1 h-[400px] flex mx-auto md:gap-8 gap-4 my-16 relative">
                    <div className="w-1/4 h-full group relative">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105" src="d.png" alt="Legal Consultation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Legal Consultation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                            <p className="text-white text-lg font-semibold">Expert Legal Advice</p>
                            <p className="text-white text-sm mt-2">Receive personalized legal solutions from top-tier professionals with years of experience handling various legal matters.</p>
                        </div>
                    </div>
                    <div className="w-1/4 h-full relative group">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105" src="c.png" alt="Trustworthy Representation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Trustworthy Representation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                            <p className="text-white text-lg font-semibold">Dedicated Support</p>
                            <p className="text-white text-sm mt-2">We provide honest, reliable representation to safeguard your rights and interests in any legal scenario.</p>
                        </div>
                    </div>
                    <div className="w-1/4 h-full group relative">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105" src="b.png" alt="Legal Research" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">Legal Research</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                            <p className="text-white text-lg font-semibold">Comprehensive Insights</p>
                            <p className="text-white text-sm mt-2">Leverage our extensive research to fortify your case with credible evidence and strategic insights.</p>
                        </div>
                    </div>
                    <div className="w-1/4 h-full relative group">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105" src="a.png" alt="Case Preparation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Case Preparation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                            <p className="text-white text-lg font-semibold">Prepared for Success</p>
                            <p className="text-white text-sm mt-2">We meticulously prepare every aspect of your case to ensure the strongest possible representation in court.</p>
                        </div>
                    </div>
                </div>



                <h2 className='font-bold text-3xl mx-auto w-3/4 text-center my-8 text-white'>Key Features of Our Legal Services</h2>

                <div className="grid grid-cols-3 md:gap-14 gap-2 md:w-3/4 px-1 mx-auto text-center text-white">
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/What_Is_The_Minimum_Due_Amount_On_A_Credit_Card__1-blog-image-1733390902112-922672349.webp" width={120} alt="Legal Consultation" />
                        <h2 className='font-bold text-lg'>Legal Consultation</h2>
                        <p className='text-xs px-2'>Get expert legal advice tailored to your unique situation from experienced professionals.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/statics-for-blog---financial-tips-blog-image-1733124606011-883503527.webp" width={120} alt="Document Review" />
                        <h2 className='font-bold text-lg'>Document Review</h2>
                        <p className='text-xs px-2'>Ensure your legal documents are accurate, compliant, and in your best interest.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/mythvsfact-blog-image-1732105369954-475586051.webp" width={120} alt="Representation" />
                        <h2 className='font-bold text-lg'>Representation</h2>
                        <p className='text-xs px-2'>Receive dedicated representation in court or during legal proceedings.</p>
                    </div>
                </div> */}

                {/* <div className="w-full px-4 md:w-4/5 h-auto flex mx-auto md:gap-8 gap-4 my-16 relative flex-wrap justify-center">
                    <div className="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="d.png" alt="Legal Consultation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Legal Consultation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                            <p className="text-white text-md font-semibold">Expert Legal Advice</p>
                            <p className="text-white text-xs mt-2">Receive personalized legal solutions from top-tier professionals with years of experience handling various legal matters.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="c.png" alt="Trustworthy Representation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Trustworthy Representation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                            <p className="text-white text-md font-semibold">Dedicated Support</p>
                            <p className="text-white text-xs mt-2">We provide honest, reliable representation to safeguard your rights and interests in any legal scenario.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="b.png" alt="Legal Research" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">Legal Research</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                            <p className="text-white text-md font-semibold">Comprehensive Insights</p>
                            <p className="text-white text-xs mt-2">Leverage our extensive research to fortify your case with credible evidence and strategic insights.</p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0">
                        <img className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="a.png" alt="Case Preparation" />
                        <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                            <p className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Case Preparation</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
                            <p className="text-white text-md font-semibold">Prepared for Success</p>
                            <p className="text-white text-xs mt-2">We meticulously prepare every aspect of your case to ensure the strongest possible representation in court.</p>
                        </div>
                    </div>
                </div> */}



                <div class="w-full px-4 md:w-4/5 h-auto flex mx-auto md:gap-8 gap-4 my-16 relative flex-wrap justify-center">
                    <div class="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0 perspective">
                        <div class="card-inner w-full h-full relative transition-transform duration-300 transform-style-preserve-3d group-hover:rotate-y-180">
                            <div>
                                <img class="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="a.png" alt="Legal Consultation" />
                                <div class="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                                    <p class="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">Legal Consultation</p>
                                </div>
                            </div>
                            <div class="card-back absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4 transform rotate-y-180">
                                <p class="text-white text-md font-semibold">Expert Legal Advice</p>
                                <p class="text-white text-xs mt-2">Receive personalized legal solutions from top-tier professionals with years of experience handling various legal matters.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0 perspective">
                        <div class="card-inner w-full h-full relative transition-transform duration-300 transform-style-preserve-3d group-hover:rotate-y-180">
                            <div>
                                <img class="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="c.png" alt="Trustworthy Representation" />
                                <div class="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                                    <p class="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Trustworthy Representation</p>
                                </div>
                            </div>
                            <div class="card-back absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4 transform rotate-y-180">
                                <p class="text-white text-md font-semibold">Dedicated Support</p>
                                <p class="text-white text-xs mt-2">We provide honest, reliable representation to safeguard your rights and interests in any legal scenario.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0 perspective">
                        <div class="card-inner w-full h-full relative transition-transform duration-300 transform-style-preserve-3d group-hover:rotate-y-180">
                            <div>
                                <img class="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="b.png" alt="Legal Research" />
                                <div class="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                                    <p class="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">Legal Research</p>
                                </div>
                            </div>
                            <div class="card-back absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4 transform rotate-y-180">
                                <p class="text-white text-md font-semibold">Comprehensive Insights</p>
                                <p class="text-white text-xs mt-2">Leverage our extensive research to fortify your case with credible evidence and strategic insights.</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full sm:w-1/2 md:w-1/5 h-auto group relative mb-4 md:mb-0 perspective">
                        <div class="card-inner w-full h-full relative transition-transform duration-300 transform-style-preserve-3d group-hover:rotate-y-180">
                            <div>
                                <img class="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full" src="a.png" alt="Case Preparation" />
                                <div class="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black via-transparent rounded-2xl">
                                    <p class="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Case Preparation</p>
                                </div>
                            </div>
                            <div class="card-back absolute inset-0 bg-black bg-opacity-70 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4 transform rotate-y-180">
                                <p class="text-white text-md font-semibold">Prepared for Success</p>
                                <p class="text-white text-xs mt-2">We meticulously prepare every aspect of your case to ensure the strongest possible representation in court.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <h2 className='font-bold text-3xl mx-auto w-full sm:w-3/4 text-center my-8 text-white'>Key Features of Our Legal Services</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-14 gap-2 md:w-3/4 px-1 mx-auto text-center text-white">
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/What_Is_The_Minimum_Due_Amount_On_A_Credit_Card__1-blog-image-1733390902112-922672349.webp" width={120} alt="Legal Consultation" />
                        <h2 className='font-bold text-lg'>Legal Consultation</h2>
                        <p className='text-xs px-2'>Get expert legal advice tailored to your unique situation from experienced professionals.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/statics-for-blog---financial-tips-blog-image-1733124606011-883503527.webp" width={120} alt="Document Review" />
                        <h2 className='font-bold text-lg'>Document Review</h2>
                        <p className='text-xs px-2'>Ensure your legal documents are accurate, compliant, and in your best interest.</p>
                    </div>
                    <div className='shadow-2xl py-6 flex flex-col gap-4 border border-gray-300 rounded-lg hover:shadow-xl transition-shadow'>
                        <img className='mx-auto rounded-full border-2 border-gray-400 p-2' src="https://oasys-image.s3.amazonaws.com/public/images/mythvsfact-blog-image-1732105369954-475586051.webp" width={120} alt="Representation" />
                        <h2 className='font-bold text-lg'>Representation</h2>
                        <p className='text-xs px-2'>Receive dedicated representation in court or during legal proceedings.</p>
                    </div>
                </div>



                <div className="md:flex h-fit md:w-3/4 p-1 mx-auto my-20 gap-12">
                    <div className='md:w-1/2 flex flex-col gap-28'>
                        <div className="fade-in-left fade-hover">
                            <h2 className='font-bold text-3xl text-white'>Expert Legal Services for Every Need</h2>
                            <p className='text-sm mt-5 text-white'>Our law firm provides expert legal services across a wide range of practice areas. Whether you're facing personal, business, or litigation challenges, we offer clear, effective, and reliable legal solutions tailored to your unique needs. Learn more about how our team of experienced attorneys can help you navigate the complexities of the law.</p>
                        </div>
                        <div className="fade-in-up fade-hover">
                            <div className='flex justify-between'>
                                <div>
                                    <div>Legal Consultation and Advice</div>
                                    <div>Business and Corporate Law</div>
                                    <div>Family Law and Estate Planning</div>
                                </div>
                                <div>
                                    <div>Criminal Defense Services</div>
                                    <div>Real Estate and Property Law</div>
                                </div>
                            </div>
                            <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:to-red-600 py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-8'>Contact Us</button>
                        </div>
                    </div>
                    <div className='md:w-1/2 py-1 h-full fade-in-right fade-hover'>
                        <img className='rounded-lg' src="i.png" alt="Illustration" />
                    </div>
                </div>

                <div className="md:flex h-fit md:w-3/4 mx-auto my-20 gap-12">
                    <div className='md:w-1/2 py-1 h-full fade-in-right fade-hover'>
                        <img className='rounded-lg' src="j.png" alt="" />
                    </div>
                    <div className='md:w-1/2 p-1 flex flex-col gap-6'>
                        <div className="fade-in-left fade-hover">
                            <h2 className='font-bold text-3xl text-white'>Committed to Protecting Your Legal Rights</h2>
                            <p className='text-sm mt-5 text-white'>At our law firm, we are committed to providing high-quality legal services to individuals and businesses. Our experienced attorneys offer legal representation in areas such as personal injury, criminal defense, corporate law, and family law. Whatever legal issue you're facing, we are here to guide you every step of the way.</p>
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <div className='w-1/2 flex flex-col gap-1'>
                                    <h2 className='text-2xl font-bold text-white'>Our Services</h2>
                                    <p className='text-white'>We provide expert legal representation for a wide range of legal issues, from personal injury cases to corporate legal services. Learn how we can help you today.</p>
                                    <p className='text-blue-700 underline'>Get expert legal advice now.</p>
                                </div>
                                <div className='w-1/2 flex flex-col gap-1'>
                                    <h2 className='text-2xl font-bold text-white'>Contact Us</h2>
                                    <p className='text-white'>If you need legal advice or representation, don’t hesitate to reach out. Our team is ready to assist you with any legal challenge you're facing.</p>
                                    <p className='text-blue-700 underline'>Reach out to schedule a consultation.</p>
                                </div>
                            </div>
                            <button className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:to-red-600 py-1 px-2 rounded-lg font-bold ring-1 ring-black mt-8'>Schedule Consultation</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
