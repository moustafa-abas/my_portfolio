import Header from "./Header"

const Skills = () => {
return (
<>
  <Header/>  
  <div className="skills mt-5">
    <div className="one my-5 d-flex align-items-center  justify-content-between" >
      <p className="text-uppercase m-0">html5:</p>
<progress value='1'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">css3:</p>
<progress value='1'/>
</div>

    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">bootstrap:</p>
<progress value='1'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">javascript:</p>
<progress value='.9'/>
</div>
<div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">sass:</p>
<progress value='.8'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">react:</p>
<progress value='.9'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">dealing with apis:</p>
<progress value='.9'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">Redux:</p>
<progress value='.8'/>
</div>
    <div className="one my-5 d-flex align-items-center justify-content-between" >
      <p className="text-uppercase m-0">Redux Toolkit:</p>
<progress value='1'/>
</div>
  </div>
</>
)
}

export default Skills
