import * as React from "react";
import { Minerals } from "../../../generated/graphql";

type ShipSelectProps = {
    initialValue: Minerals;
    changeHandler: Function;
}

export const MineralSelect: React.FC<ShipSelectProps> = (props: ShipSelectProps) => {
    const options: any[] = [];
    for (let mineral in Minerals) {
        options.push(<option value={mineral} key={mineral}>{mineral}</option>);
    }
    return (
        <div>
            <label>Mineral - </label>
            <select 
                name="mineral" 
                value={props.initialValue} 
                onChange={e => props.changeHandler(e.target.value)}
            >
                {options}   
            </select>
        </div>
    );
};
