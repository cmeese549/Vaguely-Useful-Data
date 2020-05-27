import { createContext } from "react";
import { 
    MiningShips,
    MiningHeadData,
    MiningLocations,
    SellLocations,
    CargoData
} from "../../generated/graphql";

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

const cargoData: CargoData[] = [];

const defaultValues = {
    date: today,
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
    cargoBreakdown: cargoData,
    submitButtonText: "Add Log"
}

export const LogContext = createContext(defaultValues);