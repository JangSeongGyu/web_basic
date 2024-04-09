import { useRef } from 'react';

const refCode = `
    const ref = useRef(0);
    <button
    onClick={() => {
        ref.current += 1;
        console.log(ref);
    }}
    >
        UseRef = {ref.current}
    </button>
    `;

const DomCode = `
    const ref = useRef(0);
    <button
        onClick={() => {
            const randomInt = parseInt(Math.random(1) * 255);
            const randomInt2 = parseInt(Math.random(1) * 255);
            const randomInt3 = parseInt(Math.random(1) * 255);
            domRef.current.style.backgroundColor = 'rgb(＆{randomInt},＆{randomInt2},＆{randomInt3})';
        }}
        ref={domRef}
    >
        DomTest
    </button>
    `;

const HooksUseRef = () => {
    const ref = useRef(0);
    const domRef = useRef(null);

    return (
        <div>
            <blockquote>
                <h1>useRef</h1>
                <p>「useRef」はDOMを参照して要素にアクセスするためのフック。</p>
                <p>useRefはレンダリングを起こさない。</p>
                <p>useRefはcurrentプロパティに値を保持し、値を書き換え。</p>
                <pre>{refCode}</pre>

                <button
                    onClick={() => {
                        ref.current += 1;
                        console.log(ref);
                    }}
                >
                    UseRef = {ref.current}
                </button>
                <h2>DOMにアクセス</h2>
                <p>useRefはDOMにアクセスする手段としても利用される。</p>

                <pre>{DomCode}</pre>
                <p>背景の色がランダムに変わるボタン</p>
                <button
                    onClick={() => {
                        const randomInt = parseInt(Math.random(1) * 255);
                        const randomInt2 = parseInt(Math.random(1) * 255);
                        const randomInt3 = parseInt(Math.random(1) * 255);
                        domRef.current.style.backgroundColor = `rgb(${randomInt},${randomInt2},${randomInt3})`;
                    }}
                    ref={domRef}
                >
                    DomTest
                </button>
            </blockquote>
        </div>
    );
};
export default HooksUseRef;
