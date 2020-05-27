import * as React from "react";

type PercentFieldProps = {
    changeHandler: Function;
    initialValue: number;
}

export const PercentField: React.FC<PercentFieldProps> = (props: PercentFieldProps) => {
    return (
        <div>
            <label>Percentage</label>
            <input 
                name="percentage"
                type="number"
                value={props.initialValue} 
                onChange={e => props.changeHandler(parseInt(e.target.value))}
            />
        </div>
    );
};
