import Header from "./Header"

const Skills = () => {
return (
<>
  <Header/>  
  <div className="skills mt-5 d-flex flex-wrap flex-md-wrap flex-column flex-md-row">
    <div className="one  my-4 text-center  a" >
      <p className="text-uppercase  mb-2">Html5 :</p>
<progress value='1'/>
</div>
    <div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Css3 :</p>
<progress value='1'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Javascript :</p>
<progress value='.9'/>
</div>
    <div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Bootstrap :</p>
<progress value='1'/>
</div>
    <div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Type Script :</p>
<progress value='.7'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">React :</p>
<progress value='.9'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Tailwind :</p>
<progress value='.9'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Next :</p>
<progress value='.7'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Sass :</p>
<progress value='.8'/>
</div>
<div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Redux :</p>
<progress value='.8'/>
</div>



    <div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Dealing with apis :</p>
<progress value='.9'/>
</div>

    <div className="one my-4 text-center " >
      <p className="text-uppercase mb-2">Redux Toolkit :</p>
<progress value='1'/>
</div>


  </div>
</>
)
}

export default Skills
