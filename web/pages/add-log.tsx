import React, { useState } from "react";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import EditLog from "../components/logs/EditLog";
import { LogContext } from "../components/context/LogContext";
import { 
    MiningShips,
    MiningHeadData, 
    MiningLocations, 
    SellLocations, 
    useAddLogMutation
} from "../generated/graphql";

const AddLog: React.FC = () => {
    const [ mutation ] = useAddLogMutation();

    const [ logData, setLogData ] = useState({
        date: GetToday(),
        patch: "3.9.1",
        ship: MiningShips.Prospector,
        miningHead1: MiningHeadData.ArborMh1,
        miningHead2: MiningHeadData.None,
        miningHead3: MiningHeadData.None,
        miningLocation: MiningLocations.AaronHalo,
        sellLocation: SellLocations.Area18,
        sellPrice: 0,
        operatingCost: 0,
        profit: 0,
        emptySpace: 0,
        cargoBreakdown: [],
        submitButtonText: "Add Log"
    });

    return (    
        <LogContext.Provider value={logData} >
            <Layout title="Add Log">
                <h1>Add your log here slut</h1>
                <EditLog 
                    logId={null}
                    mutation={mutation}
                    logData={logData} 
                    setLogData={setLogData} 
                    submitButtonText="Add Log"
                />
            </Layout>
        </LogContext.Provider>
    );
};

const GetToday = () => {
    let today: any = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth()+1; 
    let yyyy: any = today.getFullYear();
    if(dd<10) 
    {
        dd='0'+dd;
    } 
    if(mm<10) 
    {
        mm='0'+mm;
    } 
    today = yyyy+'-'+mm+'-'+dd;
    return today;
}

export default withApollo(AddLog);
