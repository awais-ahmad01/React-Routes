
import { BrowserRouter, Routes, Route, Link, HashRouter, MemoryRouter, NavLink, Navigate } from 'react-router-dom';

import Home from './components/home';

import Posts from './components/posts';

import Profile from './components/profile';
import PostItem from './components/postItem';

import Users from './components/users';
import Guests from './components/guests';
import Admins from './components/admins';

const App = ()=> {

  const user = true;

  return(
    
      <BrowserRouter>

      
      

         {/* <header>

          <Link to='/'>Home</Link><br/>

          <Link to='/posts'>Post</Link><br/> */}

          {/* <Link to='/profile'>Profile</Link> */}

          {/* <Link to={{
            pathname:'profile',
            hash:'#steve',
            search:'?hello=true'
          }}>Profile</Link>
        </header>  */}



        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
              <Link
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
              >
                <span className="fs-4">My app</span>
              </Link>

              <ul className="nav nav-pills">
                <li className="nav-item">
                  {/* <Link to="/" className="nav-link">
                    Home
                  </Link> */}

                    {/* NavLink give us access of isActive property  */}
                  <NavLink to="/" 
                    className={({isActive}) => isActive ? 'nav-link active':'nav-link'}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Link to="posts" className="nav-link">
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="users" className="nav-link">
                    Users
                  </Link>
                </li>
              </ul>
            </header>


            <Routes>

              <Route path='/' element = {<Home/>}/>

              <Route path='posts' element = {<Posts/>}/>

              <Route path='posts/:id' element = {<PostItem/>}/> 
              
              {/* :id or could be name or anything ..it is called Params and provide dynamic value */}

              {/* <Route path='profile' element = {<Profile/>}/> */}

              <Route path="profile" element={
                user ?<Profile />:<Navigate replace to="/" />}
              >
              </Route>

              {/* Navigate use to redirect */}


              <Route path="users" element={<Users/>}>
                  <Route path="guests" element={<Guests/>}></Route>
                  <Route path="admins" element={<Admins/>}></Route>
              </Route>

              
              {/* the below route will be used when route is not matched */}
              <Route path='*'
                  element={
                    <>
                      <h1>404: Not Found</h1>
                    </>
                  }
                />

            </Routes>

        </div>
      
      </BrowserRouter>
      
  
  )
}

export default App;
