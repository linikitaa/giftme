import './styles/App.css'
import ava from './assets/ava.webp'
import icon from './assets/icon.svg'
import wapp from './assets/wapp.svg'
import tg from './assets/tg.svg'
import {frame} from "./confetti.js";
import {useEffect} from "react";

// export function App() {
//
//     useEffect(() => {
//         frame();
//
//         const handleResize = () => {
//             const confettiCanvas = document.getElementById("confetti_canvas");
//             if (confettiCanvas) {
//                 confettiCanvas.width = window.innerWidth;
//                 confettiCanvas.height = window.innerHeight;
//             }
//         };
//
//         window.addEventListener("resize", handleResize);
//
//         return () => {
//             window.removeEventListener("resize", handleResize);
//         };
//     }, []);
//
//     return (
//         <div className='app'>
//             <div className="confetti_container"><canvas id="confetti_canvas"></canvas></div>
//             <div className={'info'}>
//                 <h1 className={'title'}>Новый год – новые ощущения!
//                 </h1>
//                 <p className={'subtitle'}>Ниже указаны мастера, к которым вы можете записаться на процедуры и
//                     уточнить по стоимости, проконсультироваться и понять какой вариант услуги подходит именно вам!
//                     Вы можете предложить сходить по данному купону своим близким, только важно всегда брать его с собой
//                     <p>Купон действует с 1.01.25 по 30.02.25 <img className={'iconTree'} alt={'icon'} src={icon}/></p>
//                 </p>
//             </div>
//             <div className={'items'}>
//                 <div className={'item'}>
//                     <img className={'ava'} src={ava} alt=""/>
//                     <h3>Сюзанна - стилист – колорист</h3>
//                     <p>Spa программа «счастье для волос</p>
//                     <div className={'contacts'}>
//                         <img className={'contact'} src={wapp} alt={'wapp'}/>
//                         <img className={'contact'} src={tg} alt={'tg'}/>
//                     </div>
//                     <button className={'button'}><span>ссылка на контакт</span></button>
//                 </div>
//
//             </div>
//         </div>
//     )
// }

export function App() {
    return (
        <div className={'appPlug'}>
            В разработке!
        </div>
    );
}