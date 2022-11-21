import {Hero} from "../Hero";
import {Nav} from "../Nav";
import {TipList} from "../TipList/TipList";
import {Layout} from "../Layout/Layout";


export const AllTopicsPage = () => {
    return <Layout>
        <Nav/>
        <Hero tipViewMode="all-topics"/>
        <TipList  tipViewMode="all-topics"/>
    </Layout>
}
