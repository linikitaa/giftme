import './styles/App.css'
import ava from './assets/ava.webp'
import {frame} from "./confetti.js";
import {useEffect} from "react";

export function App() {

    useEffect(() => {
        frame()
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

