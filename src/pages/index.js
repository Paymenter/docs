import React from 'react';
import Slider from 'react-slick';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function Home() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    };
    return (
        <Layout
            title={`Home`}>
            <Head>
                <link type="application/json+oembed" href="https://paymenter.org/home.json" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" integrity="sha512-wR4oNhLBHf7smjy0K4oqzdWumd+r5/+6QO/vDda76MW5iug4PT7v86FoEkySIJft3XA0Ae6axhIvHrqwm793Nw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            </Head>
            <main className='flex flex-col justify-between overflow-hidden relative'>
                <div className="container mx-auto md:px-0 px-5">
                    <div className="header text-center mt-4">
                        <h1 className="text-4xl">Next-gen Gateway for hostings that boosts your workflow</h1>
                        <p>Paymenter is an open source gateway for hosting companies. It's developed to provide an more easy way to manage your hosting company.</p>
                    </div>
                </div>
                <div className="image-container px-5 pb-20 pt-10 max-w-[1100px] sm:m-auto mt-24 mb-24">
                    <img src="https://paymenter.org//img/laptop.svg" width="100%" />
                </div>
                <div className="w-full h-screen absolute left-0 right-0 top-0 bg-gradient-to-b blur-wrapper border-accent border-b dark:from-black from-white hero-background to-transparent" style={{ zIndex: -1 }}>
                    <div className='test h-full w-full blur-1'>
                    </div>
                </div>

                <br />
                <br />
                <div className="pt-10">
                    <div className="max-w-xl mx-auto text-center">
                        <h1>Fully Customizable</h1>
                        <p>
                            We allow our users to modify the panel. This is also backed through our Marketplace where users are allowed to buy products which are easily importable.
                        </p>
                        <div className>
                            <img className="scale-150 pb-20 pt-28 dark:!hidden !block" src="/img/slick/light/settings.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="scale-150 pb-20 pt-28 dark:!block !hidden" src="/img/slick/dark/settings.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div className="max-w-xl mx-auto text-center">
                        <h1>Easy Interface</h1>
                        <p>
                            Access everything you need from billing to support.
                            <br /> We provide a easy to use interface.
                            <br /> where users are allowed to buy products which are easily importable.
                        </p>
                        <p className='text-sm max-h-1'>
                            ProTip: switch to <span className='dark:hidden inline'> darkmode</span><span className='hidden dark:inline'> lightmode</span> to see the <span className='dark:hidden inline'> darkmode</span><span className='hidden dark:inline'> lightmode</span> version of the panel.
                        </p>
                        <div className="pb-12">
                        </div>
                    </div>
                </div>
                <div className="pb-20">
                    <Slider {...settings}>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Fancy homepage</h2>
                            </div>
                            <img className="border-2 border-black rounded-md dark:!hidden !block" src="/img/slick/light/homepage.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="border-2 border-black rounded-md !hidden dark:!block" src="/img/slick/dark/homepage.png" alt="Here you can see the settings tab on the finished installation" />                        
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Let Paymenter do the invoices</h2>
                            </div>
                            <img className="border-2 border-black rounded-md dark:!hidden !block" src="/img/slick/light/invoice.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="border-2 border-black rounded-md !hidden dark:!block" src="/img/slick/dark/invoice.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Advanced settings</h2>
                            </div>
                            <img className="border-2 border-black rounded-md dark:!hidden !block" src="/img/slick/light/settings.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="border-2 border-black rounded-md !hidden dark:!block" src="/img/slick/dark/settings.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">See everything in seconds</h2>
                            </div>
                            <img className="border-2 border-black rounded-md dark:!hidden !block" src="/img/slick/light/admin.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="border-2 border-black rounded-md !hidden dark:!block" src="/img/slick/dark/admin.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Edit clients easily</h2>
                            </div>
                            <img className="border-2 border-black rounded-md dark:!hidden !block" src="/img/slick/light/clients.png" alt="Here you can see the settings tab on the finished installation" />
                            <img className="border-2 border-black rounded-md !hidden dark:!block" src="/img/slick/dark/clients.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                    </Slider>
                </div>
            </main>
        </Layout>
    );
}