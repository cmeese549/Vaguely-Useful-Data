import * as React from "react";
import { MiningShips, LogDataArgsType } from "../../../generated/graphql";

type ShipSelectProps = {
    changeHandler: Function;
    ctx: LogDataArgsType
}

export const ShipSelect: React.FC<ShipSelectProps> = (props: ShipSelectProps) => {
    const workingValues: LogDataArgsType = { ...props.ctx };

    const updateValue = (e: any) => {
        workingValues.ship = e.target.value;
        props.changeHandler(workingValues);
    }

    const options: any[] = [];
    for (let ship in MiningShips) {
        options.push(<option value={ship} key={ship}>{ship}</option>);
    }

    return (
        <div>
            <label>Ship - </label>
            <select 
                name="ship" 
                value={workingValues.ship} 
                onChange={updateValue}
            >
                {options}   
            </select>
        </div>
    );
};
