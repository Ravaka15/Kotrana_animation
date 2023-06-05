import React, { useEffect, useState } from 'react';
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import "../../assets/styles/Home.css";

const Home: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(image1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => prevImage === image1 ? image2 : image1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id='home'>
            <div className='container__home'>
                <img src={currentImage} alt='Image' />
                <div className='home__content'>
                    <h1>chytgcjytgfjytcg</h1>
                    <p>home__contenthome__contentho--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-size--big-font-sizeme__contenthome__contenthome__content</p>
                </div>
            </div>
        </section>
    );
};

export default Home;
