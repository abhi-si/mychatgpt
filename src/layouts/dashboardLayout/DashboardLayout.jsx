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
  } ,[isLoaded, userId, navigate]);
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
