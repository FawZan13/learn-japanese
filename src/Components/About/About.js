import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
// About Us page
const About = () => {
    return (
        <div>
            <Header></Header>
            <h1 className="text-center mb-3">About Us</h1>
            <div className="d-flex mx-5 my-5">
                <div className="mx-5 w-50">
                    <h2>Learn Japansese</h2>
                    <h4 className="my-3 lh-lg fw-normal">Learn Japanese provides the best resources for learning<br></br>
                        japanese.We also provide guidance for those who want<br></br> to go
                        Japan for study or job purposes.We also help preparing for JLPT.  </h4>
                </div>
                <div className="mx-5 w-50">
                    <img height="400px" width="400px" src="https://thumbs.dreamstime.com/z/learn-japanese-indicates-japan-language-speech-mountain-sun-symbols-130548046.jpg" alt=""></img>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About; <h1 className="text-center">About Us</h1>