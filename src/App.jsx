import './styles/App.css'
export function App() {

    return (
        <div className='app'>
            <div className={'info'}>
                <h1 className={'title'}>Lorem ipsum dolor sit amet
                </h1>
                <p className={'subtitle'}>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet</p>
            </div>
            <div className={'links'}>
                <button className={'button'}><span>ссылка на контакт</span></button>
                <button className={'button'}><span>ссылка на контакт</span></button>
                <button className={'button'}><span>ссылка на контакт</span></button>
            </div>
        </div>
    )
}

