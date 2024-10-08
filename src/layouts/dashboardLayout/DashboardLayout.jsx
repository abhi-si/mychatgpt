import { Outlet , useNavigate} from "react-router-dom"
import "./dashboardLayout.css"
import {useEffect} from "react"
import {useAuth} from "@clerk/clerk-react"

const DashboardLayout = () => {
  // for securing routes
  const {userId, isLoaded} =  useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoaded && !userId){
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);
  // Run Only on Mount: The effect will only run once, after the component mounts, and never again. This means that any code inside the effect will be executed just once, when the component is first rendered.if dependency array is empty

  // If still loading, show a loading indicator
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
      <div className="dashboardLayout">
          <div className="menu">Menu</div>
          <div className="content">
              <Outlet/>
          </div>
      
    </div>
  )
}

export default DashboardLayout
