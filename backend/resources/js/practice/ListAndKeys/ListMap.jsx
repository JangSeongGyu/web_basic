const ListMap = () => {
    const listData = ['Test1', 'Test2', 'Test3'];
    const code = ` 
    const listData = ['Test1', 'Test2', 'Test3'];
    listData.map((data) => {
        return <p>{data}</p>;
    })
    `;
    return (
        <>
            {/* Map説明 */}
            <blockquote>
                <h1>Map</h1>
                <p>
                    「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、その結果を新しい配列として返す。
                </p>
                <pre>{code}</pre>

                <h1>結果</h1>
                {listData.map((data) => {
                    return <p key={data}>{data}</p>;
                })}
            </blockquote>
        </>
    );
};
export default ListMap;
