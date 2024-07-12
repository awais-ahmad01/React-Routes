import { useNavigate, useSearchParams } from 'react-router-dom'


const Profile = ()=> {

    let navigate = useNavigate();

    const [SearchParams] = useSearchParams();

    console.log(SearchParams.get('hello'))

    return(
      <>
        <div>Profile</div>

        <button onClick={()=> navigate('/')}>Back Home</button>
      </>
    )
  }
  
  export default Profile;