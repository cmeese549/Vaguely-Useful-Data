import * as React from "react";
import { MiningLocations, LogDataArgsType } from "../../../generated/graphql";

type MiningLocationSelectProps = {
    changeHandler: Function;
    ctx: LogDataArgsType;
}

export const MiningLocationSelect: React.FC<MiningLocationSelectProps> = (props: MiningLocationSelectProps) => {
    const workingValues: LogDataArgsType = { ...props.ctx };
    
    const updateValue = (e: any) => {
        const newValue = e.target.value;
        workingValues.miningLocation = newValue;
        props.changeHandler(workingValues);
    }

    const options: any[] = [];
    for (let location in MiningLocations) {
        options.push(<option value={location} key={location}>{location}</option>);
    }
    return (
        <div>
            <label>Mining Location - </label>
            <select 
                name="miningLocation" 
                value={props.ctx.miningLocation}
                onChange={updateValue}
            >
                {options}   
            </select>
        </div>
    );
};
