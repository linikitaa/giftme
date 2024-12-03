import './styles/App.css'
import inst from './assets/inst.svg'
import wapp from './assets/wapp.svg'
import siu from './assets/photos/siu.jpg';
import anast from './assets/photos/anast.jpg'
import elena from './assets/photos/elena.jpg'
import ang from './assets/photos/ang.jpg'
import tg from './assets/tg.svg'
import {frame} from "./confetti.js";
import {useEffect} from "react";

export function App() {

    useEffect(() => {
        frame();

        const handleResize = () => {
            const confettiCanvas = document.getElementById("confetti_canvas");
            if (confettiCanvas) {
                confettiCanvas.width = window.innerWidth;
                confettiCanvas.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='app'>
            <div className="confetti_container"><canvas id="confetti_canvas"></canvas></div>
            <div className={'info'}>
                {/*<h1 className={'title'}>Новый год<img className={'iconTree'} alt={'icon'} src={icon}/><p>Новые ощущения!</p>*/}
                {/*</h1>*/}
                <h1 className={'title'}>Лимитированное чудо для близких
                </h1>

                <div className={'snake'}></div>
                <p className={'subtitle'}>Ниже указаны мастера, с которыми Вы можете проконсультироваться, и записаться на процедуры.
                    Также Вы можете предложить своим близким сходить по данному купону.
                    <br/>Важно всегда брать его с собой ❣️
                    Укажите слово «купон» при записи
                </p>
                <br/>
                <div className="marquee">
                    <span id="marquee-content">Купон действует с 1.01.25 по 30.02.25</span>
                </div>
            </div>
            <div className={'items'}>
                <div className={'item'}>
                        <div className={'item_left'}>
                            <img className={'ava'} src={siu} alt=""/>
                            <div className={'item_name'}>
                                <p className={'item_first'}>Сюзанна</p>
                                <p className={'item_second'}>стилист – колорист</p>
                            </div>
                        </div>
                        <div className={'item_right'}>
                            <p>Spa программа «Счастье для волос»</p>
                            <button className={'link_for_sign'}>
                                <a className={'link'} href={'https://wa.me/79685620922'}>
                                    Записаться
                                    <img className={'contact_wapp'} src={wapp} alt={'wapp'}/>
                                </a>


                            </button>

                            <div className={'contacts'}>
                                <a href={'https://t.me/colorisue'}><img className={'contact'} src={tg} alt={'tg'}/></a>
                                <a href="https://www.instagram.com/colorisue/profilecard/?igsh=MWJ2d2h1YW0wdWdyMQ==">
                                    <img className={'contact'} src={inst} alt={'inst'}/></a>
                            </div>
                        </div>

                </div>
                <div className={'item'}>
                        <div className={'item_left'}>
                            <img className={'ava'} src={ang} alt=""/>
                            <div className={'item_name'}>
                                <p className={'item_first'}>Анжела</p>
                                <p className={'item_second'}>стилист – колорист</p>
                            </div>
                        </div>
                        <div className={'item_right'}>
                            <p>Эко-завивка или «прикорневой объем» + стрижка</p>
                            <button className={'link_for_sign'}>
                                <a className={'link'} href={'https://wa.me/79265955117'}>
                                    Записаться
                                    <img className={'contact_wapp'} src={wapp} alt={'wapp'}/>
                                </a>


                            </button>

                            <div className={'contacts'}>
                                <a href="https://www.instagram.com/color_angie?igsh=MTdnNWN3NmxiY2I2cw==">
                                    <img className={'contact'} src={inst} alt={'inst'}/></a>
                            </div>
                        </div>

                </div>
                <div className={'item'}>
                        <div className={'item_left'}>
                            <img className={'ava'} src={elena} alt=""/>
                            <div className={'item_name'}>
                                <p className={'item_first'}>Елена</p>
                                <p className={'item_second'}>нэйл сервис</p>
                            </div>
                        </div>
                        <div className={'item_right'}>
                            <p>Spa программа или маникюр с покрытием</p>
                            <button className={'link_for_sign'}>
                                <a className={'link'} href={'https://wa.me/79778577388'}>
                                    Записаться
                                    <img className={'contact_wapp'} src={wapp} alt={'wapp'}/>
                                </a>


                            </button>

                            <div className={'contacts'}>
                                <a href="https://www.instagram.com/aksi.nails1?igsh=Nno4OGY1MGIxMjdp">
                                    <img className={'contact'} src={inst} alt={'inst'}/></a>
                            </div>
                        </div>

                </div>
                <div className={'item'}>
                    <div className={'item_left'}>
                        <img className={'ava'} src={anast} alt=""/>
                        <div className={'item_name'}>
                            <p className={'item_first'}>Анастасия</p>
                            <p className={'item_second'}>косметолог</p>
                        </div>
                    </div>
                    <div className={'item_right'}>
                        <p>Уходовые процедуры для лица</p>
                        <button className={'link_for_sign'}>
                            <a className={'link'} href={'https://wa.me/79150553440'}>
                                Записаться
                                <img className={'contact_wapp'} src={wapp} alt={'wapp'}/>
                            </a>


                        </button>

                        <div className={'contacts'}>
                            <a href={'https://t.me/marossskina'}><img className={'contact'} src={tg} alt={'tg'}/></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

