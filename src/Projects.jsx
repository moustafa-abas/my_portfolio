import Header from "./Header"
import carRental from'./assets/car rental.webp'
import restaurant from'./assets/resturant.webp'
import elipso from'./assets/elipso.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const Projects = () => {

  return (
    <>
    <Header/>
    <div className="projects d-flex flex-column flex-sm-row flex-wrap   mt-2  ">
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
