import { useUpdateLogMutation, LogDataArgsType } from "../../generated/graphql";
import React, { useState } from "react";
import { LogContext } from "../context/LogContext";
import EditLog from "./EditLog";

type UpdateLogCtxProps = {
    logData: LogDataArgsType;
    logId: number;
}

const UpdateLogCtx: React.FC<UpdateLogCtxProps> = (props: UpdateLogCtxProps) => {
    const [ mutation ] = useUpdateLogMutation();
    const [ logData, setLogData ] = useState({
        ...props.logData,
        submitButtonText: "Update Log"
    });
    return (    
        <LogContext.Provider value={logData} >
            <h1>Edit your log here slut</h1>
            <EditLog 
                logId={props.logId}
                mutation={mutation}
                logData={logData} 
                setLogData={setLogData} 
                submitButtonText={logData.submitButtonText}
            />
        </LogContext.Provider>
    );   
}

export default UpdateLogCtx;