import {useFetchTags} from "../../hooks/useFetchTags";
import {NavLink} from "react-router-dom";
import {icons} from "../../theme/icons/tag";
import {useContext} from "react";
import {ContextId} from "../../lib/TagContext";
import {ViewIdContext} from "../../lib/IdViewTags";


export const TagsAside = () => {

    const {data: tags} = useFetchTags();

    const idTagsView = useContext(ContextId);

    console.log(tags);



    const tagsView = tags.map((el) => {
        const Icons = icons[el.name];

        return <NavLink to="/topic-by-tag" onClick={() => idTagsView[1](el.id)}>
            <span className="tag" key={el.id}>
            <Icons/> {el.name}
            </span>
        </NavLink>
    })

    return (
        <aside className="tags-aside">
            <h1>Тэги</h1>
            <div>
                {tagsView}
            </div>
        </aside>
    )
}
