import { Tags } from "./TagList/Tags";

export const Hero = ({tipViewMode}) => {

    let title = null;

    if(tipViewMode === 'all-topics') {
        title = "Все темы";
    }

    return (
        <section className="hero">
            <div className="title">
                <h1>Типсы и Триксы</h1>
                <h2>{title}</h2>
            </div>
        <Tags tipViewMode={tipViewMode}/>
        </section>
    );
};
