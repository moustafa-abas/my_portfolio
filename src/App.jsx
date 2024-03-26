import{BrowserRouter as Router ,Routes ,Route} from'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
function App() {

  return (
    <Router>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/projects' Component={Projects}/>
  <Route path='/skills' Component={Skills}/>
</Routes>
    </Router>
  )
}

export default App
