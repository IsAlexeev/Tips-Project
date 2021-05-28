import { icons } from "../theme/icons/tag";
import { Tags } from "./Tags";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="title">
                <h1>Типсы и Триксы</h1>
                <h2>React</h2>
            </div>

            <Tags />
        </section>
    );
};