import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
    let { state } = useLocation();
    let navigation = useNavigate(); 

    const handleClick = () => {
        navigation(-1);
    }

    return (
        <div>
            <h1>Welcome {state.email}!</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Home;
