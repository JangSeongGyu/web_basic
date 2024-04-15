const routeCode = `Route.jsx

    <BrowserRouter>
        <Routes>
            <Route path={"/home"} element={<Home />} />
            <Route path={"/practice/:number"} element={<PracticeMain />} />
        </Routes>
    </BrowserRouter>    
    `;

const ReactRouter = () => {
    return (
        <div>
            <blockquote>
                <h1>react-router-dom</h1>
                <pre>{routeCode}</pre>
            </blockquote>
        </div>
    );
};
export default ReactRouter;
