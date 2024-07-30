// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Feature from './components/Feature/Feature';
import AOS from 'aos';
import "aos/dist/aos.css";
import Category from './components/Category/Category';
import Footer from './components/Footer/Footer';
import Product from './components/Products/Product';
import Features from './components/Feature/Features';
import Video from './components/Video/Video';

const App = () => {
    React.useEffect(() => {
        AOS.init({offset: 100, duration: 800, easing: 'ease', delay: 100});
        AOS.refresh();
    }, []);
    return (
    <div>
        <Navbar />
        <Hero />
        <Feature />
        <Category />
        <Product />
        <Features />
        <Video />
        <Footer />
    </div>
    );
};

export default App