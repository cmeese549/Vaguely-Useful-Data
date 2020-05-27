import * as React from "react";
import { CargoData, Minerals, LogDataArgsType } from "../../../generated/graphql";
import { CargoEntryEditor } from "./CargoEntryEditor";

type CargoBreakdownEditorProps = {
    changeHandler: Function;
    ctx: LogDataArgsType
}

export const CargoBreakdownEditor: React.FC<CargoBreakdownEditorProps> = (props: CargoBreakdownEditorProps) => {
    const workingValues = { ...props.ctx };

    const handleCargoUpdate = (index: number, cargoData: CargoData) => {
        workingValues.cargoBreakdown[index] = cargoData;
        props.changeHandler(workingValues);
    }

    const deleteCargoEntry = (index: number) => {
        workingValues.cargoBreakdown.splice(index, 1);
        props.changeHandler(workingValues);
    }
    
    const cargoRenderData: any[] = [];

    for(let i = 0; i < workingValues.cargoBreakdown.length; i++) {
        cargoRenderData.push(
            <CargoEntryEditor
                key={i}
                initialValue={workingValues.cargoBreakdown[i]}
                index={i}
                changeHandler={handleCargoUpdate}
                deleteHandler={deleteCargoEntry}
            />
        );
    }
   
    const addCargoEntry = () => {
        workingValues.cargoBreakdown.push({ mineral: Minerals.InertMaterial, percentage: 1})
        props.changeHandler(workingValues);
    }
    
    return (
        <div>
            <label>Cargo Breakdown - </label>
            {cargoRenderData.length > 0 && cargoRenderData}
            {cargoRenderData.length === 0 && <h3>No Cargo Data</h3>}
            <button type="button" onClick={addCargoEntry}>Add Entry</button>
        </div>
    );
};
