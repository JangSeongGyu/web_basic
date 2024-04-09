const Keys = () => {
    const listData = [
        { id: 1, name: 'Test1' },
        { id: 2, name: 'Test2' },
        { id: 3, name: 'Test3' },
    ];
    const code = `
    const listData = [
        { id: 1, name: 'test1' },
        { id: 2, name: 'test2' },
        { id: 3, name: 'test3' },
    ];

    listData.map((data) => {
        return <p key={data.id}>{data.name}</p>;
    })
    `;
    return (
        <>
            <blockquote>
                <h1>Key</h1>
                <p>Reactの要素を識別するためにkey属性が使用する。</p>
                <p>
                    Reactはkeyを利用して再レンダリングが必要な要素のみを効率的に更新可能
                </p>
                <p>
                    要素の並び順が変更される可能性がある場合、インデックスを key
                    として使用しない方がいい。
                </p>
                <pre>{code}</pre>

                <h1>結果</h1>
                {listData.map((data) => {
                    return <p key={data.id}>{data.name}</p>;
                })}
            </blockquote>
        </>
    );
};
export default Keys;
