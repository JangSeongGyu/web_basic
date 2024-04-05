import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>React研修</h1>
            <button
                onClick={() => {
                    navigate('/practice/1');
                }}
            >
                1.Hooks
            </button>
            <button
                onClick={() => {
                    navigate('/practice/2');
                }}
            >
                2.ListAndKey
            </button>
            <button
                onClick={() => {
                    navigate('/practice/3');
                }}
            >
                3.Props
            </button>
        </div>
    );
}
export default Home;
