import { useCallback, useState } from 'react';

const memoizationCode = `
    const memoizedFunction = useCallback(() => {
        // 関数の本体
    }, [/* 依存配列 */]);
    `;

const testCode = `
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const memoizedFunction = useCallback(() => {
        return a + b;
    }, [b]);

    <button
        onClick={() => {
            setA(a + 1);
        }}
    >
        a+1
    </button>
    <button
        onClick={() => {
            setB(b + 1);
        }}
    >
        b+1
    </button>
    <p>{a} + {b} = {memoizedFunction()}</p>
    `;

const HooksUseCallback = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const memoizedFunction = useCallback(() => {
        return a + b;
    }, [b]);

    return (
        <blockquote>
            <h1>useCallback</h1>
            <p>
                useCallbackはコールバック関数を<b>メモ化</b>するためのHook
            </p>
            <ul>
                <li>
                    <b>メモ化（memoization）とは？</b>
                    <br />
                    <p>
                        一度計算した結果を保存しておき、同じ計算を再度行う場合には保存した結果を再利用する。
                    </p>
                </li>
            </ul>
            <h2>書き方</h2>
            <p>依存配列が変わらない限り常に同じ関数を再利用する。</p>
            <p>useEffectと違いは結果をReturnする。</p>
            <pre>{memoizationCode}</pre>

            <h2>実習</h2>
            <pre>{testCode}</pre>
            <p>
                useCallbackの依存配列を「b」のみ指定したのでAは変わっても再計算しない
            </p>
            <button
                onClick={() => {
                    setA(a + 1);
                }}
            >
                a+1
            </button>
            <button
                onClick={() => {
                    setB(b + 1);
                }}
            >
                b+1
            </button>
            <p>
                {a} + {b} = {memoizedFunction()}
            </p>
        </blockquote>
    );
};
export default HooksUseCallback;
