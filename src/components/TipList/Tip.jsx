import { icons } from "../../theme/icons/tag";
import {useFetchTips} from "../../hooks";
import {useContext} from "react";
import {ContextId} from "../../lib/TagContext";
import {NavLink} from "react-router-dom";
import {ViewIdContext} from "../../lib/IdViewTags";

export const Tip = ({tipViewMode}) => {
    const fetchTodoQ = useFetchTips();
    const tagIdRouter = useContext(ContextId);
    const nameRouter = useContext(ViewIdContext);
    let tips = fetchTodoQ.data?.data;
    if(tipViewMode === 'topic-by-tag' && Array.isArray(tips)) {
       tips = fetchTodoQ.data?.data.filter((el) => el.tag.id === tagIdRouter[0])
    } else if(nameRouter[0]) {
        tips = fetchTodoQ.data?.data.filter((el) => el.tag.id === tagIdRouter[0])
    }

    console.log(tipViewMode);


    const tipJSON = fetchTodoQ.status && fetchTodoQ.isLoading ? <h1>Загружаю...</h1>  : tips.map((el) => {
        const IconsImg = icons[el.tag.name];

        return <article key={el.id}>
            <header>
                <IconsImg/> <h1>{el.title}</h1>
            </header>
            <main>
                <time>
                    <span><IconsImg/></span>
                    <div>
                        <span>🚀 {el.created}</span>
                        <span>👨🏼 Автор: {el.author}</span>
                    </div>
                </time>
                <h2>{el.title}</h2>
                <p>{el.preview}</p>
            </main>
            <footer>
                <NavLink to={`/all-topics/${el.id}`}>&nbsp; Читать полностью &rarr;</NavLink>
            </footer>
        </article>
    })

    console.log('1')
    return (
        <>
            {tipJSON}
        </>
    )
}
