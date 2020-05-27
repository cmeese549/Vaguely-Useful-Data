import * as React from "react";
import { useGetAllLogsQuery } from "../../generated/graphql";

const AllLogs: React.FunctionComponent = () => {
    const { data } = useGetAllLogsQuery();
    if (data && data.getAllLogs && data.getAllLogs.data) {
        const logData = data.getAllLogs.data;
        const logs: any = [];
        logData.forEach((log, index) => {
            logs.push(<li key={index}><a href={'/logs/' + log.id}>Log: {log.id}</a> ---- ${log.profit}, from {log.miningLocation} to {log.sellLocation}</li>);
        });
        return (
            <ul>{logs}</ul>
        );
    } else {
        return <h3>No logs :(</h3>
    }
};

export default AllLogs;
