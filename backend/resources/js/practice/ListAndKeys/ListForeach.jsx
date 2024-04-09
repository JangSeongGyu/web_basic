const ListForeach = () => {
    const listData = ['Test1', 'Test2', 'Test3'];
    const code = `     
    const listData = ['Test1', 'Test2', 'Test3'];
    listData.filter((data) => {
        return data !== 'Test2';
    })
        `;

    return (
        <>
            {/* Map説明 */}
            <blockquote>
                <h1>Filter</h1>
                <p>
                    「filter」は配列データに使うメソッドであり、各要素1つずつに条件を指定し、その結果がTrueの場合、新しい配列に入れる。
                </p>
                <pre>{code}</pre>

                <h1>結果</h1>

                {listData.filter((data) => {
                    return data !== 'Test2';
                })}
            </blockquote>
        </>
    );
};
export default ListForeach;
