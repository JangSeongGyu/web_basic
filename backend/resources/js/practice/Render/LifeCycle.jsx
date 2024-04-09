const LifeCycle = () => {
    return (
        <blockquote>
            <h1>Life Cycle</h1>
            <p>Reactはは三つの順番で画面を更新している。</p>

            <h2>1. componentDidMount</h2>
            <p>
                コンポーネントが作られて<b>初回のレンダリング（Mount）</b>
                が終わった後、実行されるメソッド
            </p>
            <h2>2. componentDidUpdate</h2>
            <p>アップデートが完了（レンダリング）されたら実行するメソッド</p>
            <h2>3. componentWillUnmount</h2>
            <p>コンポーネントがUnmountされて削除される前に実行されるメソッド</p>
        </blockquote>
    );
};
export default LifeCycle;
