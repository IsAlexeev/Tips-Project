import {useQuery} from "react-query";
import {apiTodo} from "../api/api";


export const useFetchTags = () => {
    const query = useQuery('tags', apiTodo.fetchTags);

    return query;
}
