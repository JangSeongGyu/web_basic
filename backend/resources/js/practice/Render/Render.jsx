import { useRef, useState } from 'react';
import LifeCycle from './LifeCycle';

// Hooks
const Render = () => {
    const [stateCount, setStateCount] = useState(0);
    const refCount = useRef(0);
    let count = 0;

    return (
        <div>
            <LifeCycle />
            {/* 説明 */}
            <blockquote>
                <h1>Render</h1>
                <p>Reactが再レンダリングされる時は三つあります。</p>
                <ul>
                    <li>
                        <b>State</b>が変更された時
                    </li>
                    <li>
                        <b>Props</b>が変更された時
                    </li>
                    <li>親コンポーネントが更新された時</li>
                </ul>
            </blockquote>
            <hr />
            <h1>実習</h1>
            {/* Count 説明 */}
            <blockquote>
                <h1>let, var</h1>
                <p>データが変わる時、画面は更新されない。</p>
                <p>画面が更新されたら初期値に戻る。</p>
                <br />
                <p>
                    <b>F12-Console</b>でデータの変化を確認してみましょう。
                </p>
                <button
                    onClick={() => {
                        count++;
                        console.log('let count = ', count);
                    }}
                >
                    count={count}
                </button>
            </blockquote>

            {/* Ref 説明 */}
            <blockquote>
                <h1>useRef</h1>
                <p>データが変わる時、画面は更新されない。</p>
                <p>画面が更新されてもデータが保存される</p>
                <br />
                <p>
                    <b>F12-Console</b>でデータの変化を確認してみましょう。
                </p>
                <button
                    onClick={() => {
                        refCount.current++;
                        console.log('refCount = ', refCount.current);
                    }}
                >
                    refCount={refCount.current}
                </button>
            </blockquote>

            {/* State 説明 */}
            <blockquote>
                <h1>useState</h1>
                <p>データが変わる時、画面も更新される。</p>
                <button
                    onClick={() => {
                        setStateCount(stateCount + 1);
                        console.log('stateCount = ', stateCount);
                    }}
                >
                    stateCount={stateCount}
                </button>
            </blockquote>
        </div>
    );
};
export default Render;
