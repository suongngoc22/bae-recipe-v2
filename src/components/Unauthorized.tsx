import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
    const navigate = useNavigate();
    return (
        <div> <button onClick={() => navigate("/login")}>unauthorize</button></div>
    )
}

export default Unauthorized