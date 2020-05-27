import * as React from "react";
import { MiningHeadData, LogDataArgsType } from "../../../generated/graphql";

type MiningHeadSelectProps = {
    headNumber: string;
    changeHandler: Function;
    ctx: LogDataArgsType;
}

export const MiningHeadSelect: React.FC<MiningHeadSelectProps> = (props: MiningHeadSelectProps) => {
    //any because I have to access which mining head this is with a string to make this dynamic
    const workingValues: any = { ...props.ctx };

    const updateValue = (e: any) => {
        const newValue = e.target.value;
        workingValues["miningHead" + props.headNumber] = newValue;
        props.changeHandler(workingValues);
    }
    
    const options: any[] = [];
    for (let head in MiningHeadData) {
        options.push(<option value={head} key={head}>{head}</option>);
    }
    
    return (
        <div>
            <label>Mining Head {props.headNumber} - </label>
            <select 
                name="miningHead" 
                value={workingValues["miningHead" + props.headNumber]} 
                onChange={updateValue}
            >
                {options}   
            </select>
        </div>
    );
};
