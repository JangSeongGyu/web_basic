import { useState } from 'react';

const stateCode = `
    const [data,setData] = useState(0)
    return (
        <>
            <button
                onClick={() => {
                    setData(data + 1);
                }}
            > 
                + 
            </button>
            <div>
                <p>{data}</p>
            </div>
        </>
    )
    `;

const trapCode = `
    const [trapData, setTrapData] = useState(0);
    return (
        <>
            <button
                onClick={() => {
                    setTrapData(trapData + 1);
                    setTrapData(trapData + 1);
                    setTrapData(trapData + 1);
                }}
            >
                +
            </button>
            <p>{trapData}</p>
        </>
    )
    `;

const trapCode2 = `
    const [trapData, setTrapData] = useState(0);
    return (
        <>
            <button
                onClick={() => {
                    setTrapData(trapData+1)
                    alert(trapData)
                }}
            >
                +
            </button>
            <p>{trapData}</p>
        </>
    )
`;
const HooksUseState = () => {
    const [data, setData] = useState(0);
    const [trapData, setTrapData] = useState(0);

    return (
        <>
            <blockquote>
                <h1>useState</h1>
                <p>
                    <b>useState()</b>
                    は、関数コンポーネントでstateを管理（stateの保持と更新）するためのReact
                    Hookであり、最も利用されるHookです。
                </p>
                <p>
                    stateとはコンポーネントが内部で保持する「状態」のことで、画面上に表示されるデータ等、アプリケーションが保持している状態を指しています。
                </p>

                <pre>{stateCode}</pre>

                <button
                    onClick={() => {
                        setData(data + 1);
                    }}
                >
                    +
                </button>
                <div>
                    <p>{data}</p>
                </div>
                <hr />
                <h2>useStateのトラップ</h2>
                <p>
                    ボタンをクリックしたらどんな結果が出るか考えてみてください。
                </p>
                {/* Trap1 */}
                <pre>{trapCode}</pre>
                <button
                    onClick={() => {
                        setTrapData(trapData + 1);
                        setTrapData(trapData + 1);
                        setTrapData(trapData + 1);
                    }}
                >
                    +
                </button>
                <p>{trapData}</p>

                {/* Trap2 */}
                <pre>{trapCode2}</pre>
                <button
                    onClick={() => {
                        setTrapData(trapData + 1);
                        alert(trapData);
                    }}
                >
                    +
                </button>
                <p>{trapData}</p>

                {/* 理由 */}
                <h2>理由</h2>
                <p>
                    useStateは現在レンダリングされている状態のデータを持っている。
                </p>
                <p>
                    setTrapData(trapData+1)「trapData+1」の結果は画面がレンダリングされるまでに保留される。
                </p>
                <p>
                    3回実行しても画面がレンダリングされないとtrapDataは同じデータを見ている。
                    <pre>
                        setTrapData(0+1)
                        <br />
                        setTrapData(0+1)
                        <br />
                        setTrapData(0+1)
                    </pre>
                    結果、一番最後に実行したものだけが残る。
                </p>
            </blockquote>
        </>
    );
};
export default HooksUseState;
