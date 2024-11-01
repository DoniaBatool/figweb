
import Image from "next/image"

const Footer = () => {
  return (
    <>
    <footer className="footer">
        <ul className="icons-div">
           <li><Image
           src="/figma/fb.png" alt="social icons" width={30} height={30}
           /></li>
           <li><Image
           src="/figma/insta.png" alt="social icons" width={30} height={30}
           /></li>
           <li><Image
           src="/figma/twitter.png" alt="social icons" width={30} height={30}
           /></li> 
           <li><Image
           src="/figma/Linkedin.png " alt="social icons" width={30} height={30}
           /></li> 
        </ul>
        <p className="copyright">Copyright ©2020 All rights reserved</p>
    </footer>

    </>
  );
}

export default Footer