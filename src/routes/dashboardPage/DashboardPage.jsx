import "./dashboardPage.css"

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>ABHI AI</h1>
          
        </div>
        <div className="options">
          <div className="option">
            <img src="/chat.png" />
            <span>Create New Chat</span>
          </div>
          <div className="option">
            <img src="/image.png" />
            <span>Analyze images</span>
          </div>
          <div className="option">
            <img src="/code.png" />
            <span>Help in code</span>
          </div>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" placeholder="Enter the prompt" />
          <button>
            <img src="/arrow.png" alt =""/>
          </button>
        </form>
      </div>
      
    </div>
  )
}

export default  DashboardPage
