
import { useLocation } from 'react-router-dom';


// if we use the class compnent and we need to acces some react router and any hooks then we will be acces in this below type of way


export const withRouter = (Component) => {
    const Wrapper = (props) => {
        let location = useLocation();        

        return(
            <Component
                location={location}
                {...props}
            />
        )
    }
    return Wrapper;
}