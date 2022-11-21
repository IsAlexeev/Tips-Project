import {Layout} from "./Layout/Layout";
import { SpinnerCircular } from 'spinners-react';
import {useFetchTips} from "../hooks";
import {useParams, useNavigate, NavLink} from "react-router-dom";
import {icons} from "../theme/icons/tag";
import {useEffect} from "react";
import {Nav} from "./Nav";
import {Aside} from "../aside/Aside";

export const TipByIdPage = () => {
    const fetchTodoTip = useFetchTips();


    const tips = fetchTodoTip.data?.data;

    const params = useParams();
    const navigate = useNavigate();


    const findIdTips = tips.find((el) => el.id === params.id);


    const IconTipId = icons[findIdTips.tag.name];

    useEffect(() => {
        if(!tips && fetchTodoTip.isFetchedAfterMount) {
            navigate('..', {replace: true});
        }
    })


    return <Layout>
        <Nav/>
    <section className="tip-view-layout">
                <article>
                    <header>
                    <IconTipId/> <h1>{findIdTips.title}</h1>
                    </header>
                    <main>
                    <time>
                        <IconTipId/>
                        <div>
                            <span>
                                🚀 {findIdTips.created}
                            </span>
                            <span>
                                👨🏼‍ Автор: {findIdTips.author}
                            </span>
                        </div>
                    </time>
                    </main>
                    <footer>
                        <NavLink to="/all-topics" replace>←&nbsp;Назад</NavLink>
                    </footer>
                </article>
        <main>
            {findIdTips.body}
        </main>
        <Aside/>
            </section>
    </Layout>
}
