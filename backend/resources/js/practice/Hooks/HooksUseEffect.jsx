import { useEffect, useState } from 'react';

const firstCode = `
    useEffect(() => {
        // 実行コード
    }, [/* 依存配列 */]);
    `;

const noneDependenciesCode = `
    useEffect(() => {
        console.log('dependenciesがないUseEffect');
    });
    `;

const noneStateCode = `
    useEffect(() => {
        console.log('Mounted!!');
    },[]);
    `;

const stateCode = `
    useEffect(() => {
        console.log('UseEffect!!');
    }, [testData]);

    ========================================
    
    <button
        onClick={() => {
            setTestData(testData + 1);
        }}
    >
            testData
    </button>
        
    <button
        onClick={() => {
            setTestData2(testData2 + 1);
        }}
    >
            testData2
    </button>
    `;

const HooksUseEffect = () => {
    const [testData, setTestData] = useState(0);
    const [testData2, setTestData2] = useState(0);
    useEffect(() => {
        console.log('dependenciesがないUseEffect');
    });

    useEffect(() => {
        console.log('Mounted!');
    }, []);

    useEffect(() => {
        console.log('testData Changed!');
    }, [testData]);

    return (
        <div>
            <blockquote>
                <h1>useEffect</h1>
                <p>LifeCycleのMount、Updateが終わった後、実行するHook。</p>
                <p>主に初期設定、特定変数チェックなどに使われる。</p>
                <h2>書き方</h2>
                <p>
                    依存配列（dependencies）に「State、Props」などの変数を入れて特定の変数が更新されたら、実行するHook
                </p>

                <pre>{firstCode}</pre>

                <br />
                <h2>依存配列（dependencies）がないUseEffect</h2>
                <p>全てのMount、Updateに実行される。</p>
                <pre>{noneDependenciesCode}</pre>

                <br />
                <h2>依存配列（dependencies）に変数がないUseEffect</h2>
                <p>Mountのみ実行される。</p>
                <pre>{noneStateCode}</pre>

                <br />
                <h2>依存配列（dependencies）にStateが入っているUseEffect</h2>
                <p>配列に入っている「State,Props」が変わる時、実行される。</p>
                <pre>{stateCode}</pre>
                <button
                    onClick={() => {
                        setTestData(testData + 1);
                    }}
                >
                    testData
                </button>
                <button
                    onClick={() => {
                        setTestData2(testData2 + 1);
                    }}
                >
                    testData2
                </button>
            </blockquote>
        </div>
    );
};
export default HooksUseEffect;
