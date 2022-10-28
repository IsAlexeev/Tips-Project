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

const queryClient = new QueryClient();

export const App = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ActiveTags>
                <TagContext>
                    <SettingContext>
                        <Router>
                            <Settings/>
                            <HomePage/>
                        </Router>
                    </SettingContext>
                </TagContext>
                </ActiveTags>
            </QueryClientProvider>

        </>
    );
};
