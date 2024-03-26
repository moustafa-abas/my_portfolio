import Header from "./Header"
import carRental from'./assets/car rental.png'
import restaurant from'./assets/resturant.png'
import elipso from'./assets/elipso.png'
const Projects = () => {

  return (
    <>
    <Header/>
    <div className="projects d-flex flex-column flex-sm-row flex-wrap mt-2  ">
      <div className="card position-relative w-100 - border-0 my-4">
        <a href="https://elipso-project.vercel.app/" target="_blank" ><img src={elipso} alt="" className="w-100" /></a>
      </div>
      <div className="card position-relative w-100 border-0 my-4">
        <a href="https://restaurant-kohl-tau.vercel.app/" target="_blank" ><img src={restaurant} alt="" className="w-100" /></a>
        </div>
        <div className="card position-relative w-100 border-0 my-4">
        <a href="https://car-rental-ashy.vercel.app/" target="_blank" ><img src={carRental} alt="" className="w-100" /></a>
        </div>        
    </div>
    </>
  )
}

export default Projects
