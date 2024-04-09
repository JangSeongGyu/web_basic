import { useNavigate } from 'react-router-dom';

function Home() {
    const navigationData = [
        { id: 1, title: '1.Render' },
        { id: 2, title: '2.ListAndKey' },
        { id: 3, title: '3.Props' },
        { id: 4, title: '4.Events' },
        { id: 5, title: '5.Hooks' },
    ];

    const navigate = useNavigate();
    return (
        <div>
            <h1>React研修</h1>
            {navigationData.map(({ id, title }) => {
                return (
                    <button
                        onClick={() => {
                            navigate(`/practice/${id}`);
                        }}
                    >
                        {title}
                    </button>
                );
            })}
        </div>
    );
}
export default Home;
