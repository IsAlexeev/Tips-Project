import { icons } from "../../theme/icons/tag";
import {useContext, useState} from "react";
import {ContextId} from "../../lib/TagContext";
import {useFetchTags} from "../../hooks/useFetchTags";
import {ContextActive} from "../../lib/ActiveTags";

export const Tags = () => {
    const [isActive, setIsActive] = useState(false);
    const activeAllTags = useContext(ContextActive);
    const fetchTagsQ = useFetchTags();

    const tagId = useContext(ContextId);


    const tagsJSON = fetchTagsQ.status && fetchTagsQ.isLoading ? <h1>Загрузка...</h1> : fetchTagsQ.data?.map((el) => {
        const toggleId = (id) => {
            tagId[1](id);
            if(el.id === id) {
                setIsActive(true);
            } else {
                setIsActive(false);
            }
        }

        const TagsICON = icons[el.name];
        return <span className="tag" key={el.id} onClick={() => toggleId(el.id)} data-active={activeAllTags[0]}>
                <TagsICON/> {el.name}
            </span>
    })

    return (
        <div className="tags">
            {tagsJSON}
        </div>
    )
};
