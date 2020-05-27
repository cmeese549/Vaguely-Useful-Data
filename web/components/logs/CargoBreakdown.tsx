import * as React from "react";
import { CargoData } from "../../generated/graphql";

const CargoBreakdown: React.FunctionComponent = (props: any) => {
    console.log(props);
    let content: any = [];
    props.cargoBreakdown.forEach((cargo: CargoData) => {
    content.push(<li key={cargo.mineral}>{cargo.mineral}, {cargo.percentage}%</li>);
    });
    return (
        <div>
            <h3>Cargo Breakdown</h3>
            <ul>{content}</ul>
        </div>
    );
};

export default CargoBreakdown;
