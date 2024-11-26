import './styles/App.css'
import ava from './assets/ava.webp'
import {frame} from "./confetti.js";
import {useEffect} from "react";

export function App() {

    useEffect(() => {
        frame();

        const handleResize = () => {
            const canvas = document.getElementById("confetti_canvas");
            if (canvas) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
        };

        // Перехватываем событие изменения размеров
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='app'>
            <div className="confetti_container"><canvas id="confetti_canvas"></canvas></div>
            <div className={'info'}>
                <h1 className={'title'}>Lorem ipsum dolor sit amet
                </h1>
                <p className={'subtitle'}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</p>
            </div>
            <div className={'links'}>
                <div className={'link'}>
                    <img className={'ava'} src={ava} alt=""/>
                    <button className={'button'}><span>ссылка на контакт</span></button>
                </div>
                <div className={'link'}>
                    <img className={'ava'} src={ava} alt=""/>
                    <button className={'button'}><span>ссылка на контакт</span></button>
                </div>
                <div className={'link'}>
                    <img className={'ava'} src={ava} alt=""/>
                    <button className={'button'}><span>ссылка на контакт</span></button>
                </div>

            </div>
        </div>
    )
}

