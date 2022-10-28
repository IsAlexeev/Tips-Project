import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero';
import { TipList } from '../components/TipList/TipList';

export const HomePage = () => {
    return (
        <section className="layout">
                <Nav/>
                <Hero />
                <TipList />
        </section>
    )
}
