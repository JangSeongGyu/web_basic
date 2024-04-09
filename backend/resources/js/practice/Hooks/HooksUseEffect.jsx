import { useEffect, useState } from 'react';

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
                <p>
                    dependenciesに「State、Props」などの変数を入れて特定の変数が更新された時、実行可能。
                </p>

                <h2>配列（dependencies）がないUseEffect</h2>
                <p>全てのレンダリングに実行される。</p>
                <pre>{noneDependenciesCode}</pre>

                <h2>配列（dependencies）に変数がないUseEffect</h2>
                <pre>{noneStateCode}</pre>

                <h2>配列（dependencies）にStateが入っているUseEffect</h2>
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
