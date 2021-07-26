import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import TwitterFeed from '../Components/Twitters/TwitterFeed';
const Twitter = () => {
    return (
        <div>
       <Header></Header>
        <TwitterFeed></TwitterFeed>
       <Footer></Footer>
       </div>
    );
}

export default Twitter;
