import Header from "./Header"
import me from'./assets/my photo.webp'
import whatsApp from'./assets/WhatsApp_icon.png'
import linkedIn from'./assets/circle-linkedin-512.webp'
import facebook from'./assets/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
const Home = () => {
return (
<home>

    
<Header/>
<landing className="landing d-flex flex-sm-row flex-column flex-wrap flex-md-nowrap   ">
    <aside className="d-flex d-sm-block justify-content-between">
        <div className="info ">
<h1>hello,<span>i&apos; am</span> </h1>
<h1 className="name"> <span>|</span></h1> 
<h1 className="mb-5"><span> front end developer</span></h1>
</div>
<div className="dl mb-3  d-flex align-items-center ">
<FontAwesomeIcon icon={faDownload}   className="icon download py-2 fs-3 px-2"/>
<a href="./assets/mostafa_abas_cv.pdf" download='mostafa_abas_cv.pdf' className="dl text-decoration-none fs-5 py-2  px-3 text-capitalize"> download cv</a>
</div>
    </aside>
    <main className=" position-relative me-">
        <div className="circle">
<img src={me} alt=""  className="me  w-100  rounded-circle "/>
<a target='_blank' href =  "https://www.linkedin.com/in/moustafa-3bas-36a316267?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bmq5Ca5WKTtuXSHPGmSZw6g%3D%3D" className="link1" > <img src={linkedIn} alt="" className="icon1 " /></a>
<a target='_blank' href =  "https://www.facebook.com/mostafa.abas8?mibextid=ZbWKwL" className="link2"> <img src={facebook} alt="" className="icon2 "/></a>
<a target='_blank'  href =  "https://wa.me/+201280163605? " className="link3"> <img src={whatsApp} alt=""  className="icon3 "/></a>
</div>
    </main>
    <aside className="  d-none  d-md-block">
        <h2 className="fs-4 p-2 ms-4 ">4 projects</h2>
        <h2 className="fs-4 p-2 ms-4 ex">1 year experience</h2>
    </aside>
</landing>
</home>
)
}

export default Home
