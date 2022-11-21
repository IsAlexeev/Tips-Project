import { icons } from "../theme/icons/nav"
import {useContext} from "react";
import {Context} from "../lib/SettingContext";
import {NavLink} from "react-router-dom";
import {ContextActive} from "../lib/ActiveTags";
import {TagsContextRouters} from "../lib/TagsRouter";

export const Nav = ()=>{
    const openContext = useContext(Context);
    const activeUseTags = useContext(ContextActive)
    const activeRouterTags = useContext(TagsContextRouters);

    const settingOpen = () => {
        openContext[1](true);
    }

    const activeAllTags = () => {
        activeUseTags[1](true);
    }

    const updateRouterTag = () => {
        activeRouterTags[1](true);
    }

    console.log('render')
    return (
        <nav className="nav">
            <h1>Т и Т</h1>
            <NavLink to="/all-topics" end onClick={activeAllTags}>
                <icons.Home/> Все темы
            </NavLink>
            <NavLink to="/topic-by-tag" onClick={updateRouterTag}>
                <icons.Tag/> По тэгам
            </NavLink>
            <a>Опубликовать</a>
            <icons.Settings/><a onClick={settingOpen}>Настройки</a>
            <a>Поиск</a>
        </nav>
    )
}
