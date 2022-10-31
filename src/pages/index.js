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
            <main>
                <style dangerouslySetInnerHTML={{ __html: "\n        @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n        body {\n            font-family: 'Roboto', sans-serif !important;\n        }\n        \n        nav {\n            border-bottom: 1px solid #ACACC4;\n            background-color: rgb(242, 243, 245, .75);\n        }\n        \n        .nav-button {\n            font-weight: 700;\n            letter-spacing: .05em;\n            background-color: #5270FD;\n            color: white;\n            text-transform: uppercase;\n            padding: 12px 20px;\n            border-radius: 100px;\n        }\n        \n        main {\n            min-height: 110vh;\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n            background: rgb(220, 220, 249);\n            background: linear-gradient(0deg, rgba(220, 220, 249, 1) 0%, rgba(241, 242, 245, 1) 100%);\n            padding-top: calc(150px + 2vh);\n            overflow: hidden;\n            border-bottom: 1px solid #ACACC4;\n        }\n        \n        main .header {\n            max-width: 600px;\n            margin-right: auto;\n            margin-left: auto;\n            text-align: center;\n        }\n        \n        main h1 {\n            font-weight: bold;\n            line-height: 1.2;\n            margin-bottom: 10px;\n            font-size: 2.5em;\n        }\n        \n        main .image-container {\n            max-width: 1100px;\n            margin-left: auto;\n            margin-right: auto;\n            margin-bottom: -100px;\n            position: relative;\n        }\n        \n        @media (max-width:600px) {\n            main .image-container {\n                margin-top: 100px;\n                margin-bottom: 100px;\n            }\n            main {\n                min-height: auto;\n            }\n        }\n    " }} />
                <div className="container mx-auto md:px-0 px-5">
                    <div className="header">
                        <h1>Next-gen Gateway for hostings that boosts your workflow</h1>
                        <p>Paymenter is an open source gateway for hosting companies. It's developed to provide an more easy way to manage your hosting company.</p>
                    </div>
                </div>
                <div className="image-container px-5 pb-20 pt-10">
                    <img src="https://paymenter.org//img/laptop.svg" width="100%" />
                </div>
                <br />
                <div className="pt-10">
                    <div className="header">
                        <h1>Fully Customizable</h1>
                        <p>
                            We allow our users to modify the panel. This is also backed through our Marketplace where users are allowed to buy products which are easily importable.
                        </p>
                        <div className>
                            <img className="scale-150 pb-20 pt-28" src="/img/settings.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                    </div>
                </div>
                <div className="pt-20">
                    <div className="header">
                        <h1>Easy Interface</h1>
                        <p>
                            Access everything you need from billing to support.
                            <br /> We provide a easy to use interface.
                            <br /> where users are allowed to buy products which are easily importable.
                        </p>
                        <div className="pb-12">
                        </div>
                    </div>
                </div>
                <div className="pb-20">
                    <Slider {...settings}>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Recaptcha included</h2>
                            </div>
                            <img className="border-2 border-black rounded-md" src="/img/security.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Let Paymenter do the invoices</h2>
                            </div>
                            <img className="border-2 border-black rounded-md" src="/img/invoice.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">DarkMode included</h2>
                            </div>
                            <img className="border-2 border-black rounded-md" src="/img/darkmode.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">See everything in seconds</h2>
                            </div>
                            <img className="border-2 border-black rounded-md" src="/img/adminow.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                        <div className='pr-6'>
                            <div className="flex items-center justify-center">
                                <h2 className="text-xl">Edit clients easily</h2>
                            </div>
                            <img className="border-2 border-black rounded-md" src="/img/editclient.png" alt="Here you can see the settings tab on the finished installation" />
                        </div>
                    </Slider>
                </div>
            </main>
        </Layout>
    );
}