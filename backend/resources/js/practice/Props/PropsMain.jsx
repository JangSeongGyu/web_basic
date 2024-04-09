import PropsSub from './PropsSub';

const main_code = `propsMain.jsx

    <div>
        <p>MAIN BOX CONTENT</p>
        <PropsSub name={'String!'} number={20} element={<p>Element</p>} />
    </div>
    `;

const sub_code = `propsSub.jsx

    const PropsSub = (props) => {
        return (
            <div>
                <p>SUB BOX CONTENT</p>
                <p>{props.name}</p>
                <p>{props.number}</p>
                {props.element}
            </div>
        );
    };
    export default PropsSub;
    `;

const PropsMain = () => {
    return (
        <div>
            <blockquote>
                <h1>Props</h1>
                <p>
                    親コンポーネントから子コンポーネントへ値を渡すための仕組み
                </p>
                <pre>{main_code}</pre>
                <pre>{sub_code}</pre>
                <h1>結果</h1>

                <p>MAIN BOX CONTENT</p>

                <PropsSub
                    name={'String!'}
                    number={20}
                    element={<p>Element</p>}
                />
            </blockquote>
        </div>
    );
};
export default PropsMain;
