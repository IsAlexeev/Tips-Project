import {Layout} from "../Layout/Layout";
import {Nav} from "../Nav";
import {Hero} from "../Hero";
import {TipList} from "../TipList/TipList";


export const TopicByTAg = () => {
return <Layout>
    <Nav/>
    <Hero tipViewMode="topic-by-tag"/>
    <TipList  tipViewMode="topic-by-tag"/>
</Layout>
}
