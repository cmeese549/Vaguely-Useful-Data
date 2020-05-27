import * as React from "react";
import { CargoData, Minerals } from "../../../generated/graphql";
import { PercentField } from "./PercentField";
import { MineralSelect } from "./MineralSelect";

type CargoBreakdownEditorProps = {
    initialValue: CargoData;
    index: number;
    changeHandler: Function;
    deleteHandler: Function;
}

export const CargoEntryEditor: React.FC<CargoBreakdownEditorProps> = (props: CargoBreakdownEditorProps) => {
    const updateMineral = (mineral: Minerals) => {
        const newData = { mineral: mineral, percentage: props.initialValue.percentage };
        props.changeHandler(props.index, newData);
    }

    const updatePercentage = (value: number) => {
        const newData = { mineral: props.initialValue.mineral, percentage: value };
        props.changeHandler(props.index, newData);
    }

    const deleteEntry = () => {
        props.deleteHandler(props.index);
    }

    return (
        <div key={props.index}>
            <MineralSelect 
                initialValue={props.initialValue.mineral}
                changeHandler={updateMineral}
            />
            <PercentField 
                initialValue={props.initialValue.percentage}
                changeHandler={updatePercentage}
            />
            <button type="button" onClick={deleteEntry}>Delete Entry</button>
            <hr></hr>
        </div>
    );
};
