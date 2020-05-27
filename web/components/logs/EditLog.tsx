import React, { useState, useContext } from "react";
import Router from "next/router";
import { LogDataArgsType, MiningShips } from "../../generated/graphql";
import { GenericField } from "./fields/GenericField";
import { ShipSelect } from "./fields/ShipSelect";
import { MiningHeadSelect } from "./fields/MiningHeadSelect";
import { MiningLocationSelect } from "./fields/MiningLocationSelect";
import { SellLocationSelect } from "./fields/SellLocationSelect";
import { CargoBreakdownEditor } from "./fields/CargoBreakdownEditor";
import { LogContext } from "../context/LogContext";

type EditLogProps = {
    logData: LogDataArgsType;
    setLogData: any;
    mutation: any;
    submitButtonText: string;
    logId: number | null;
};

const EditLog: React.FC<EditLogProps> = (props: EditLogProps) => {
    const ctx: LogDataArgsType = useContext(LogContext);
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleEdit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(props.logData);
        const response = await props.mutation({
            variables: props.logData
        });
        setIsSubmitting(false);
        if (!response?.data?.addLog) {
            console.log('errrr');
        } else {
            Router.push("/logs/" + response?.data?.addLog?.id);
        }
    }

    const handleUpdate = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);
        const response = await props.mutation({
            variables: {
                logId: props.logId,
                ...props.logData
            }
        });
        setIsSubmitting(false);
        console.log(response);
        if (!response?.data?.updateLog) {
            console.log('errrr');
        } else {
            Router.push("/logs/" + props.logId);
        }
    }

    return (
        <div>
            {isSubmitting && <h1>Adding log...</h1>}
            {!isSubmitting && (
                <form onSubmit={props.logId !== null ? handleUpdate : handleEdit}>
                    <GenericField 
                        name="date"
                        label="Date of Trip - "
                        type="date"
                        ctx={ctx}
                        changeHandler={props.setLogData} 
                    />
                    <GenericField 
                        name="patch"
                        label="Game Patch - "
                        type="string"
                        ctx={ctx}
                        changeHandler={props.setLogData} 
                    />
                    <ShipSelect 
                        ctx={ctx}
                        changeHandler={props.setLogData} 
                     />
                    <MiningHeadSelect 
                        headNumber="1" 
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    {props.logData.ship !== MiningShips.Prospector &&
                        <div>
                            <MiningHeadSelect 
                            headNumber="2" 
                            ctx={ctx}
                            changeHandler={props.setLogData}
                            />
                            <MiningHeadSelect 
                                headNumber="3" 
                                ctx={ctx} 
                                changeHandler={props.setLogData}
                            />
                        </div>
                    }
                    <MiningLocationSelect 
                        ctx={ctx}
                        changeHandler={props.setLogData} 
                    />
                    <SellLocationSelect 
                        ctx={ctx}
                        changeHandler={props.setLogData}  
                    />
                    <GenericField 
                        name="sellPrice"
                        label="Sell Price - "
                        type="number"
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    <GenericField 
                        name="operatingCost"
                        label="Operating Cost - "
                        type="number"
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    <GenericField 
                        name="profit"
                        label="Profit - "
                        type="number"
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    <GenericField 
                        name="emptySpace"
                        label="Empty Cargo Space (in cSCU) - "
                        type="number"
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    <CargoBreakdownEditor 
                        ctx={ctx}
                        changeHandler={props.setLogData}
                    />
                    <br></br>
                    <hr></hr>
                    <button disabled={isSubmitting} type="submit">{props.submitButtonText}</button>
                </form>
            )}
        </div>
    );
};

export default EditLog;