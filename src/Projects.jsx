import Header from "./Header"
import carRental from'./assets/car rental.webp'
import restaurant from'./assets/resturant.webp'
import elipso from'./assets/elipso.webp'
import quiz from'./assets/Black and Orange Modern Welcome to My Channel Video.jpg'
import e_commerce from'./assets/e-commerce.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Projects = () => {

  return (
    <>
    <Header/>
    <div className="projects d-flex flex-column flex-sm-row flex-wrap  mb-5 mt-2  ">
    <div className="card  w-100 border-0 my-4">
        <img src={e_commerce} alt="" className="w-100" />
        <a href="https://e-commerce-lilac-five.vercel.app/" target="_blank" ><FontAwesomeIcon icon={faEye} fade style={{color:"#fff"}} className="icon"/></a>
        </div>     
        <div className="card  w-100 border-0 my-4">
        <img src={quiz} alt="" className="w-100 " />
        <a href="https://quiz-app-gilt-delta.vercel.app/" target="_blank" ><FontAwesomeIcon icon={faEye} fade style={{color:"#fff"}} className="icon"/></a>
        </div>    
      <div className="card  w-100   border- my-4">
        <img src={elipso} alt="" className="w-100" />
        <a href="https://elipso-project.vercel.app/" target="_blank" >  <FontAwesomeIcon icon={faEye} fade style={{color:"#fff"}} className="icon"/></a>
      </div>
      <div className="card  w-100 border-0 my-4">
      <img src={restaurant} alt="" className="w-100" />
        <a href="https://restaurant-kohl-tau.vercel.app/" target="_blank" > <FontAwesomeIcon icon={faEye} fade style={{color:"#fff"}} className="icon"/></a>
        </div>
        <div className="card  w-100 border-0 my-4">
        <img src={carRental} alt="" className="w-100" />
        <a href="https://car-rental-ashy.vercel.app/" target="_blank" ><FontAwesomeIcon icon={faEye} fade style={{color:"#fff"}} className="icon"/></a>
        </div>        
      
    </div>
    </>
  )
}

export default Projects
