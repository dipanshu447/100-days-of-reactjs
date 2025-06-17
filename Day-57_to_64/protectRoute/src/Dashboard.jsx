import { useNavigate } from "react-router-dom";
export default function Dashboard({logout}){
    const navigate = useNavigate();
    return (
        <div className="box">
            <h2>Dashboard</h2>
            <p>damn I am protected </p>
            <button onClick={() => {logout(); navigate('/')}}>Logout</button>
        </div>
        
    )
}