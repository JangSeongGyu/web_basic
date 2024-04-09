const propagationCode = ` 
    <div
        onClick={() => {
            alert('親コンポーネント！!!');
        }}
    >
        親！
        <button
            onClick={() => {
                alert('子コンポーネント！');
            }}
        >
            子！
        </button>
    </div>
    `;

const preventCode = `
    <div
        onClick={() => {
            alert('親コンポーネント！!!');
        }}
    >
        親！
        <button
            onClick={() => {
                e.stopPropagation()
                alert('子コンポーネント！');
            }}
        >
            子！
        </button>
    </div>
    `;

const EventPropagation = () => {
    return (
        <div>
            <blockquote>
                <h1>Event propagation （イベント伝播）</h1>
                <p>
                    親コンポーネントで設定したEventは子コンポーネントまで影響を受ける
                </p>
                <pre>{propagationCode}</pre>
                <div
                    onClick={() => {
                        alert('親コンポーネント！!!');
                    }}
                >
                    親！
                    <button
                        onClick={(e) => {
                            alert('子コンポーネント！');
                        }}
                    >
                        子！
                    </button>
                </div>
                <hr />

                {/* Prevent */}
                <h2>イベント伝播を防ぐ</h2>
                <p>子コンポーネントにe.stopPropagation()を追加</p>
                <pre>{preventCode}</pre>
                <div
                    onClick={() => {
                        alert('親コンポーネント！!!');
                    }}
                >
                    親！
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            alert('子コンポーネント！');
                        }}
                    >
                        子！
                    </button>
                </div>
            </blockquote>
        </div>
    );
};
export default EventPropagation;
