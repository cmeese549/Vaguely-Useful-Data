import * as React from "react";
import { SellLocations, LogDataArgsType } from "../../../generated/graphql";

type SellLocationProps = {
    changeHandler: Function;
    ctx: LogDataArgsType;
}

export const SellLocationSelect: React.FC<SellLocationProps> = (props: SellLocationProps) => {
    const workingValues: LogDataArgsType = { ...props.ctx };

    const updateValue = (e: any) => {
        const newValue = e.target.value;
        workingValues.sellLocation = newValue;
        props.changeHandler(workingValues);
    }
    
    const options: any[] = [];
    for (let location in SellLocations) {
        options.push(<option value={location} key={location}>{location}</option>);
    }

    return (
        <div>
            <label>Sell Location - </label>
            <select 
                name="sellLocation" 
                value={props.ctx.sellLocation}
                onChange={updateValue}
            >
                {options}   
            </select>
        </div>
    );
};
