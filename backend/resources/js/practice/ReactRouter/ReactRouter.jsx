import { Link, useNavigate } from 'react-router-dom';

const routeCode = `route.jsx

    <BrowserRouter>
        <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/practice/:number"} element={<PracticeMain />} />
        </Routes>
    </BrowserRouter>    
    `;

const parameterCode = `route.jsx
    
    {/* Practiceの後に来るURLはNumberとしてもらう */}
    <Route path={"/practice/:number"} element={<PracticeMain />} />  
    `;

const parameterCode2 = `PracticeMain.jsx
    
    {/* 設定したnumberでもらう */}
    const { number } = useParams();
    `;

const linkCode = `
    <Link to={'/home'}>戻る</Link>
    `;

const navCode = `
    const navigate = useNavigate();
    
    <button onClick={() => { navigate('/home'); }}>
        戻る
    </button>
    `;

const ReactRouter = () => {
    const navigate = useNavigate();
    return (
        <div>
            <blockquote>
                <h1>react-router-dom</h1>
                <h2>Routing</h2>
                routerでURLごとに表示させるコンポーネントを設定する。
                <pre>{routeCode}</pre>
                <h2>Parameter取得</h2>
                URLのParameterを設定し、取得する方法
                <pre>{parameterCode}</pre>
                <pre>{parameterCode2}</pre>
                <hr />
                <h2>URLの移動</h2>
                DOM Elementとして移動したい場合
                <pre>{linkCode}</pre>
                <Link to={'/home'}>戻る</Link>
                <br />
                コールバック関数として移動したい場合
                <pre>{navCode}</pre>
                <button
                    onClick={() => {
                        navigate('/home');
                    }}
                >
                    戻る
                </button>
            </blockquote>
        </div>
    );
};
export default ReactRouter;
