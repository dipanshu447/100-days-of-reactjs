import { useNavigate } from "react-router-dom";

export default function Login({login}){
    const navigate = useNavigate();
    function handleLogin(e) {
        e.preventDefault();
        const formdata = new FormData(e.target);
        if(formdata.get("username") == "user" && formdata.get("password") == "pass"){
            login();
            navigate('/dashboard');
        }
    }

    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <label>
                    username:
                    <input type="text" name="username"/>
                </label>
                <label>
                    password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Log In</button>
            </form>
        </>
    )
}