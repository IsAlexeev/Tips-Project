import axios from "axios";


export const apiTodo = {
    async fetchTodo() {
        const response = await axios.get('https://lab.lectrum.io/rtx/api/tips-and-tricks/tips');

        return response.data;
    },
    async fetchTags() {
        const response = await axios.get('https://lab.lectrum.io/rtx/api/tips-and-tricks/tags');

        return response.data;
    }
}
