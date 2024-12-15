import React from 'react';

const Contact = () => {
    return (
        <>
            <div>
                <div
                    className="md:w-1/5 bg-transparent mx-auto text-center rounded-lg p-1">
                    <div className="bg-transparent rounded-lg text-center">
                        <h1 className="text-3xl font-bold p-3 my-4">Contact us</h1>
                    </div>
                </div>

                <div className='md:w-3/4 md:h-96 mx-auto md:flex justify-between items-center gap-12 p-2'>
                    <div className='md:w-1/2 flex flex-col gap-4 px-8'>
                        <div>
                            <h2 className='text-sm font-bold'>Jankpuri,Delhi, New Delhi, (110055) (INDIA)</h2>
                            <p className='text-xs'>Present Address (Home) </p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>IIT, Delhi (INDIA)</h2>
                            <p className='text-xs'>University Address</p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Bareilly, Uttar Pradesh (INDIA)</h2>
                            <p className='text-xs'>Previous Work Address</p>
                        </div>
                        <div>
                            <h2 className='text-sm font-bold'>Follow me</h2>
                            <div className='flex gap-2'>
                                <img className='w-4 h-4 rounded-full' src="facebook.png" alt="IMG" />
                                <img className='w-4 h-4 ' src="insta.png" alt="IMG" />
                                <img className='w-4 h-4 rounded-full' src="twitter.png" alt="IMG" />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/2 shadow-2xl rounded-lg p-4'>
                        <form className='flex flex-col gap-4 p-4' action="">
                            <div className='flex flex-col'>
                                <label htmlFor="name">Name</label>
                                <input
                                    className='outline-none rounded-lg w-full h-10 bg-transparent p-2 text-sm border-2 border-transparent focus:border-gradient focus:ring-0 transition-all'
                                    type="text"
                                    style={{
                                        borderImageSource: 'linear-gradient(to right, #FF5733, #FFBD33)',
                                        borderImageSlice: 1,
                                    }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="email">Email</label>
                                <input
                                    className='outline-none rounded-lg w-full h-10 bg-transparent p-2 text-sm border-2 border-transparent focus:border-gradient focus:ring-0 transition-all'
                                    type="text"
                                    style={{
                                        borderImageSource: 'linear-gradient(to right, #FF5733, #FFBD33)',
                                        borderImageSlice: 1,
                                    }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    className='outline-none rounded-lg w-full h-10 bg-transparent p-2 text-sm border-2 border-transparent focus:border-gradient focus:ring-0 transition-all'
                                    type="text"
                                    style={{
                                        borderImageSource: 'linear-gradient(to right, #FF5733, #FFBD33)',
                                        borderImageSlice: 1,
                                    }}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className='outline-none rounded-lg w-full h-24 bg-transparent p-2 text-sm border-2 border-transparent focus:border-gradient focus:ring-0 transition-all'
                                    rows="3"
                                    type="text"
                                    style={{
                                        borderImageSource: 'linear-gradient(to right, #FF5733, #FFBD33)',
                                        borderImageSlice: 1,
                                    }}
                                />
                            </div>
                            <div>
                                <button
                                    className='bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold py-2 px-4 rounded-lg mt-4 ring-2 ring-black transition-all hover:from-purple-600 hover:to-pink-600 hover:scale-105 shadow-lg'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
            <div style={{ height: 50, }}></div>
            <div style={{ height: 50, }}></div>
            <div style={{ height: 50, }}></div>
        </>
    )
}

export default Contact
