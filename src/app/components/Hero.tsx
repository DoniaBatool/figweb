import Image from "next/image"

const Hero = () => {
  return (
    <div className="hero-section">
     <div className="container">
        <div className="main">
         <div className="text-container">
            <h1 className="heading">Hi, I am John,<br/>Creative Technologist</h1>
            <p className="main-para">
            Amet minim mollit non deserunt ullamco est sit aliqua
            dolor do amet<br/> sint. Velit officia consequat duis enim
            velit mollit. Exercitation veniam<br/> consequat sunt
            nostrud amet.
            </p>
            <button className="resume-btn">Download Resume</button>
         </div>
         <div>
             <div>
             
                <div className="ellipse">
                <Image src="/figma/heroImage.png" alt="hero-image" width={290} height={290} className="image" />
                     </div>
             </div>
         </div>
        </div>

     </div>
    </div>
  )
}

export default Hero