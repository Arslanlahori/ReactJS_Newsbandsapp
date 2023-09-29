import React from 'react'
import arslanImage from './arslanpic.jpg';

export default function About() {

    return (
        <>
            <body>
                <main>
                    <section className="hero">
                        <h1><b>About the Developer</b></h1>
                    </section>

                    <section className="set">
                        <h2> Greetings! I am Muhammad Arslan Arshad, a dedicated Computer Science student at UET Lahore New Campus. My passion for technology and my commitment to making a positive impact on the world have led me to create "News Bang." As a tech enthusiast and a firm believer in the power of information, I've developed this platform with the aim of providing a valuable resource to people who love staying informed.</h2>
                        <br />

                        <div className="gallery-image">
                            <div className="Icon my-4">
                                <br />
                                <br />

                                <img src={arslanImage} id="zoom-image" alt="Muhammad Arslan Arshad" />

                            </div>
                        </div>
                    </section>
                </main>

            </body>
        </>
    )
}
