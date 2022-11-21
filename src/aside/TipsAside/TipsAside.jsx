import {useFetchTips} from "../../hooks";
import {NavLink} from "react-router-dom";
import {icons} from "../../theme/icons/tag";



export const TipsAside = () => {
    const dataTips = useFetchTips();

    const lengthTips = dataTips.data?.data.slice(0,5);

    console.log('----',lengthTips);


    const tips = lengthTips.map((el) => {
        const Icons = icons[el.tag.name];



        return <NavLink to={`/all-topics/${el.id}`} key={el.name}>
            <h3>{el.title}</h3>
            <time>
           <Icons/>   {el.created}
            </time>
        </NavLink>
    })

    return <aside className="recent-tips">
        <h1>Свежие типсы</h1>
        {tips}
    </aside>
}
