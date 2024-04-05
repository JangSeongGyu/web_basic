import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <button
                onClick={() => {
                    navigate('/home');
                }}
                style={{ height: 30 }}
            >
                Homeに戻る
            </button>
        </div>
    );
};
export default Header;
