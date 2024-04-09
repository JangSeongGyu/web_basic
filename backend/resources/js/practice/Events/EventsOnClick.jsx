const defaultCode = `
    <button>設定X</button>
    `;
const eventCode = `
    <button onClick={() => { alert('Button Click!!'); }}>
        設定O
    </button>

    const ButtonClick = () => {
        alert('Component onClick!');
    };

    <button onClick={ButtonClick}>
        コンポーネント
    </button>

    <p onClick={() => { alert('Text Click!!'); }}>
        Please Click me!
    </p>

`;

const missCode = `
    ✖ onClick={alert("だめ")} 
    ○ onClick={()=>{alert("OK")}} 

    ✖ onClick={ButtonClick()} 
    ○ onClick={ButtonClick} 
    ○ onClick={()=>{ButtonClick()}} 
    
`;

const EventsOnClick = () => {
    const ButtonClick = () => {
        alert('Component onClick!');
    };

    return (
        <>
            <blockquote>
                <h1>onClick</h1>
                <p>
                    Elementに「マウスでクリック」したらどんな行動をするか指定する。
                </p>
                <p>属性（プロパティ）として設定する。</p>

                <hr />
                {/* Default */}
                <h2>普通のボタン</h2>
                <pre>{defaultCode}</pre>
                <p>クリックしてもEventが設定されてないので何も起こらない</p>
                <button>設定X</button>
                <hr />

                {/* Event */}
                <h2>Eventを設定したボタン</h2>
                <pre>{eventCode}</pre>
                <p>全てのElementにEventを設定出来ます。</p>

                <button
                    onClick={() => {
                        alert('Button Click!!');
                    }}
                >
                    設定O
                </button>
                <button onClick={ButtonClick}>コンポーネント</button>
                <p
                    onClick={() => {
                        alert('Text Click!!');
                    }}
                >
                    Please Click me!
                </p>

                <hr />

                {/* Miss */}
                <h2>よくミスする書き方</h2>
                <pre>{missCode}</pre>
                <p>設定するEventは関数...</p>

                <hr />
            </blockquote>
        </>
    );
};
export default EventsOnClick;
