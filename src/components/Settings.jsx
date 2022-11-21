import {useContext} from "react";
import {Context} from "../lib/SettingContext";


export const Settings = () => {
    const settingContext = useContext(Context);

    const settingClosed = (event) => {
        event.preventDefault();

        settingContext[1](false);
    }

    return <section className={`settings ${settingContext[0] ? 'open' : 'closed'}`}>
        <header>
            <h1>Настройки</h1>
        </header>
        <footer>
            <button onClick={settingClosed}>Закрыть</button>
        </footer>
    </section>
}
