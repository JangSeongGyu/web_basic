import PropsSub from './PropsSub';

const first_code = `
    <子コンポーネント名 key={value} />
    `;

const main_code = `propsMain.jsx

    const TestFunction = () => {
        console.log('Function Props!');
    };
    <div>
        <p>MAIN BOX CONTENT</p>
        <PropsSub name={'String!'} number={20} element={<p>Element</p>} execute={TestFunction} />
    </div>
    `;

const sub_code = `propsSub.jsx

    props.execute();
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
    const TestFunction = () => {
        console.log('Function Props!');
    };
    return (
        <div>
            <blockquote>
                <h1>Props</h1>
                <p>
                    親コンポーネントから子コンポーネントへ「Value、関数」などを送る方法
                </p>

                <h2>書き方</h2>
                <p>
                    親コンポーネントのプロパティにkey、Valueを指定し、子コンポーネントでは指定したProps.keyで指定されたデータをもらえる。
                </p>
                <pre>{first_code}</pre>

                <h2>実習</h2>
                <pre>{main_code}</pre>
                <pre>{sub_code}</pre>
                <p>
                    変数、関数、データなどのあらゆるデータを子コンポーネントに渡せる。
                </p>
                <h1>結果</h1>

                <p>MAIN BOX CONTENT</p>
                <PropsSub
                    name={'String!'}
                    number={20}
                    element={<p>Element</p>}
                    execute={TestFunction}
                />
            </blockquote>
        </div>
    );
};
export default PropsMain;
