const defaultCode = `
    <input />
    `;
const eventCode = `
    const InputChangeHandle = (event) => {
        console.log(event);
    };
    <input onChange ={(event)=>{ InputChangeHandle(event)}}/>

ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

    const InputChangeHandle2 = (event) => {
        console.log(event);
    };
    <input onChange ={InputChangeHandle2}/>
    `;

const EventsOnChange = () => {
    const ButtonClick = () => {
        alert('Component onClick!');
    };

    const InputChangeHandle = (event) => {
        console.log(event);
    };

    const InputChangeHandle2 = (event) => {
        console.log(event);
    };

    return (
        <>
            <blockquote>
                <h1>onChange</h1>
                <p>Elementに何かの変化があったらどんな行動をするか指定する。</p>
                <p>よく使われる所は ＜input＞＜textarea＞など「入力」で使う</p>
                <p>属性（プロパティ）として設定する。</p>
                <hr />
                {/* Input */}
                <h2>Input</h2>
                <pre>{defaultCode}</pre>
                <p>入力したデータを操作する方法がない。</p>
                <input />
                <hr />

                {/* Event */}
                <h2>Eventを設定したInput</h2>
                <pre>{eventCode}</pre>
                <p>onChangeからevent情報がReturnされる。</p>
                <p>
                    よく使うのは「event.target.value」Inputに入力したデータを確認できる。
                </p>
                <p>F12-ConsoleでLogを確認</p>
                <input
                    onChange={(event) => {
                        InputChangeHandle(event);
                    }}
                />
                <input onChange={InputChangeHandle2} />
                <hr />
            </blockquote>
        </>
    );
};
export default EventsOnChange;
