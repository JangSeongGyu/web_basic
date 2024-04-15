import { useMemo, useState } from 'react';

// 1~20までテストデータ作成
const testData = [...Array(20).keys()];
const writingCode = `
    const memoizedValue = useMemo(() => {
        // returnさせるデータ
    }, [/* 依存配列 */]);
    `;
const noneMemoCode = `
    const testData = [...Array(20).keys()];
    const userCountFunction = () => {
        console.log('User数を計算中です…（Normal）');
        let count = 0;
        testData.forEach((data) => {
            if (data % 2 == 0) {
                count++;
            }
        });
        return count;
    };
    const userCount = userCountFunction();

    =============================================

    <p>useMemoなし:{userCount}</p>

`;

const MemoCode = `
    const testData = [...Array(20).keys()];
    const memoUserCount = useMemo(() => {
        console.log('User数を計算中です…（UseMemo）');
        let count = 0;
        testData.forEach((data) => {
            if (data % 2 == 0) {
                count++;
            }
        });
        return count;
    }, [testData]);

    =============================================

    useMemoあり:{memoUserCount}

`;

const HooksUseMemo = () => {
    const [check, setCheck] = useState(true);
    const memoUserCount = useMemo(() => {
        console.log('User数を計算中です…（UseMemo）');
        let count = 0;
        testData.forEach((data) => {
            if (data % 2 == 0) {
                count++;
            }
        });
        return count;
    }, [testData]);

    const userCountFunction = () => {
        console.log('User数を計算中です…（Normal）');
        let count = 0;
        testData.forEach((data) => {
            if (data % 2 == 0) {
                count++;
            }
        });
        return count;
    };
    const userCount = userCountFunction();

    return (
        <div>
            <blockquote>
                <h1>useMemo</h1>
                <p>useMemoはをValueをメモ化するためのHook</p>
                {/* 書き方 */}
                <h2>書き方</h2>
                <p>依存配列が変わらない限り常に同じValueを再利用する。</p>
                <p>useCallbackと違いはReturnさせるデータがValue。</p>
                <pre>{writingCode}</pre>
                {/* なし */}
                <h2>useMemoがない場合</h2>
                <p>更新ボタンを押すたびに再計算される。F12-Consoleで確認！</p>
                <pre>{noneMemoCode}</pre>
                <p>useMemoなし:{userCount}</p>
                <button
                    onClick={() => {
                        setCheck(!check);
                    }}
                >
                    更新ボタン
                </button>
                {/* あり */}
                <h2>useMemoがある場合</h2>
                <p>依存配列に指定したtestDataが変わらない限り再計算しない</p>
                <pre>{MemoCode}</pre>
                <h2>実習</h2>
                useMemoあり:{memoUserCount}
                <br />
                <button
                    onClick={() => {
                        setCheck(!check);
                    }}
                >
                    更新ボタン
                </button>
            </blockquote>
        </div>
    );
};
export default HooksUseMemo;
