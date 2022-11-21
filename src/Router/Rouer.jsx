import {Routes,Route,Navigate} from 'react-router-dom';
import {AllTopicsPage} from "../components/AllTopicsPage/AllTopicsPage";
import {TopicByTAg} from "../components/TopicByTag/TopicByTAg";
import {TipByIdPage} from "../components/TipByIdPage";




export const RouterLink = () => {
    return (
        <Routes>
            <Route path="/" element={<AllTopicsPage/>}/>
            <Route path="/all-topics" element={<AllTopicsPage/>}/>
            <Route path="/all-topics/:id" element={<TipByIdPage/>}/>
            <Route path="/topic-by-tag" element={<TopicByTAg/>}/>
            <Route path="/topic-by-tag/:id" element={<TipByIdPage/>}/>
            <Route path="*" element={<Navigate to="/all-topics" replace/>}/>
        </Routes>
    )
}

// <Route path="/all-topics" element={<Outlet/>}>
//     <Route path="/" element={<AllTopicsPage/>}/>
//     {/*<Route path=":id" element={<HomePage/>}/>*/}
// </Route>
// <Route path="/topic-by-tag" element={<Outlet/>}>
//     <Route path="/" element={<TopicByTAg/>}/>
// </Route>
