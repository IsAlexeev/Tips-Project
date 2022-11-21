import {useQuery} from "react-query";
import {apiTodo} from "../api/api";
import {useEffect, useState} from "react";


export const useFetchTips = () => {
        const query = useQuery('todos', apiTodo.fetchTodo);

        return query;
}
