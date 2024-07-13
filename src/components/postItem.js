
import { useParams, useLocation } from 'react-router-dom';


const PostItem = ()=> {

    let params = useParams();

    let location = useLocation();  //tells about all details of route

    console.log(params);

    console.log(location);

    return(
      <>
        Post12345
      </>
    )
  }
  
  export default PostItem;