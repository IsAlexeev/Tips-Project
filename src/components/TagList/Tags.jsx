import { icons } from "../../theme/icons/tag";
import {useContext, useEffect, useRef, useState} from "react";
import {ContextId} from "../../lib/TagContext";
import {useFetchTags} from "../../hooks/useFetchTags";

export const  Tags = ({tipViewMode}) => {
    const [isActive, setIsActive] = useState(false);
    const fetchTagsQ = useFetchTags();

    if(tipViewMode === 'topic-by-tag') {

    }

    const tagId = useContext(ContextId);
    const tags = fetchTagsQ.data;

    const inActive = useRef();

    const tagsJSON = fetchTagsQ.status && fetchTagsQ.isLoading ? <h1>Загрузка...</h1> : fetchTagsQ.data?.map((el) => {

        const toggleId = (id) => {
            tagId[1](id);
        }


        const TagsICON = icons[el.name];
        return  <span className="tag" key={el.id} onClick={() => toggleId(el.id)} data-active={isActive}>
                <TagsICON/> {el.name}
            </span>
    })


    return (
        <div className="tags">
             {tagsJSON}
        </div>
    )
};
