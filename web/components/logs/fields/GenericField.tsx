import * as React from "react";
import { LogDataArgsType } from "../../../generated/graphql";

type GenericFieldProps = {
    name: string;
    label: string;
    type: string;
    changeHandler: Function;
    ctx: LogDataArgsType
}

export const GenericField: React.FC<GenericFieldProps> = (props: GenericFieldProps) => {
    //any because I have to access it with a string to make this dynamic
    const workingValues: any = { ...props.ctx };

    const updateValue = (e: any) => {
        const newValue = props.type === "number" ? parseInt(e.target.value) : e.target.value;
        workingValues[props.name] = newValue;
        props.changeHandler(workingValues);
    }

    return (
        <div>
            <label>{props.label}</label>
            <input 
                name={props.name} 
                type={props.type} 
                value={workingValues[props.name]} 
                onChange={updateValue}
            />
        </div>
    );
};
