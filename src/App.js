/* Core */
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';

/* Components */
import { HomePage } from './pages';
import {SettingContext} from "./lib/SettingContext";
import {Settings} from "./components/Settings";
import {TagContext} from "./lib/TagContext";
import {QueryClientProvider,QueryClient} from "react-query";
import {BrowserRouter as Router} from "react-router-dom";
import {ActiveTags} from "./lib/ActiveTags";
import {RouterLink} from "./Router/Rouer";
import {TagsContextRouter} from "./lib/TagsRouter";
import {IdViewTags} from "./lib/IdViewTags";



const queryClient = new QueryClient();


export const App = () => {


    return (
        <>
            <QueryClientProvider client={queryClient}>
                <IdViewTags>
                <ActiveTags>
                <TagContext>
                    <TagsContextRouter>
                    <SettingContext>
                        <Router>
                            <RouterLink/>
                            <Settings/>
                        </Router>
                    </SettingContext>
                    </TagsContextRouter>
                </TagContext>
                </ActiveTags>
                </IdViewTags>
            </QueryClientProvider>

        </>
    );
};
