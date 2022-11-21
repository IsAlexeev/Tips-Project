import {Tip} from "./Tip";


export const TipList = (props) => {


    return (
        <section className="tip-list">
            <Tip tipViewMode={props.tipViewMode}/>
        </section>
    )
};
