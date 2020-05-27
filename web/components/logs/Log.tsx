import React, { useState } from "react";
import Router, { useRouter } from "next/router";
import { useGetLogQuery, LogData, useDeleteLogMutation } from "../../generated/graphql";
import CargoBreakdown from "./CargoBreakdown";

const Log: React.FunctionComponent = () => {
    const router = useRouter();
    const qData = router.query;
    //@ts-ignore
    const logId = parseInt(qData.index);
    const logData = useGetLogQuery({ variables: { logId } });

    const [ deleting, setDeleting ] = useState(false);
    const [ showDeletePrompt, setShowDeletePrompt ] =  useState(false);
    const [ deleteLogMutation ] = useDeleteLogMutation();

    const deleteLog = async () => {
        setDeleting(true);
        await deleteLogMutation({ variables: { logId }});
        Router.push("/");
    }

    const editLog = () => {
        Router.push("/edit-log/" + logId);
    }

    console.log(logData);

    if(logData.data) {
        //@ts-ignore
        const data: LogData | null = logData.data.getLog;
        if (!data) {
            return (<h3>No data :( (err)</h3>);
        }
        return (
            <div>
                {!deleting && !showDeletePrompt &&  (
                    <div>
                        <h1>Mining trip {logId} - {data.date}</h1>
                        <h2>{data.miningLocation} to {data.sellLocation} in a {data.ship}</h2>
                        {data.ship === 'Prospector' && 
                            <p>Mining head: {data.miningHead1}</p>
                        }
                        {data!.ship === 'Mole' && 
                            <div>
                                <p>Mining head 1: {data.miningHead1}</p>
                                <p>Mining head 2: {data.miningHead2}</p>
                                <p>Mining head 3: {data.miningHead3}</p>
                            </div>
                        }
                        {/*
                        //@ts-ignore */}
                        <CargoBreakdown cargoBreakdown={data!.cargoBreakdown} />
                        <h3>Revenue: ${data.sellPrice}</h3>
                        <h3>Operating Cost: ${data.operatingCost}</h3>
                        <h3>Profit: ${data.profit}</h3>
                        <button type="button" onClick={() => setShowDeletePrompt(true)}>Delete Log</button>
                        <br></br>
                        <button type="button" onClick={editLog}>Edit Log</button>
                    </div>
                )}
                {!deleting && showDeletePrompt && (
                    <div>
                        <h1>Are you sure you wanna delete this log?</h1>
                        <button type="button" onClick={deleteLog}>Yee</button>
                        <br></br>
                        <button type="button" onClick={() => setShowDeletePrompt(false)}>Noo</button>
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <h1>No Log Data, hmmmm (error)</h1>
        );
    }
};

export default Log;
