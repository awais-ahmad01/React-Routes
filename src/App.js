
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/home';

import Posts from './components/posts';

import Profile from './components/profile';

const App = ()=> {

  return(
    



      <BrowserRouter>

        <header>

          <Link to='/'>Home</Link><br/>

          <Link to='/posts'>Post</Link><br/>

          {/* <Link to='/profile'>Profile</Link> */}

          <Link to={{
            pathname:'profile',
            hash:'#steve',
            search:'?hello=true'
          }}>Profile</Link>
        </header>


        <Routes>

          <Route path='/' element = {<Home/>}/>

          <Route path='posts' element = {<Posts/>}/>

          <Route path='profile' element = {<Profile/>}/>

        </Routes>

      
      </BrowserRouter>
  
  )
}

export default App;
