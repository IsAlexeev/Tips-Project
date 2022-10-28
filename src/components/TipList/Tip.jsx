import { icons } from "../../theme/icons/tag";
import {useFetchTips} from "../../hooks";

export const Tip = () => {
    const fetchTodoQ = useFetchTips();



    const tipJSON = fetchTodoQ.status && fetchTodoQ.isLoading ? <h1>Загружаю...</h1>  : fetchTodoQ.data?.data.map((el) => {
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
                <a>&nbsp; Читать полностью &rarr;</a>
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
