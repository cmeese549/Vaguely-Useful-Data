import { useGetLogQuery } from "../../generated/graphql";
import * as React from "react";
import { useRouter } from "next/router";
import UpdateLogCtx from "./UpdateLogCtx";

const UpdateLog: React.FC = () => {    
        const router = useRouter();
        const qData = router.query;
        //@ts-ignore
        const logId = parseInt(qData.index);
        const fetchedLog = useGetLogQuery({ variables: { logId } });

        if(fetchedLog && fetchedLog.data && fetchedLog.data.getLog) {
            return (    
                <UpdateLogCtx 
                    logData={fetchedLog.data.getLog} 
                    logId={logId} 
                />
            );
        } else {
            return (
                <h1>No log :( (errrror)</h1>
            );
        } 
}

export default UpdateLog;