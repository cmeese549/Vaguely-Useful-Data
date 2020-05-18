import { MiningHeadData } from '../enums/MiningHeadData';
import { MiningShips } from '../enums/MiningShips';
import { MiningLocations } from '../enums/MiningLocations';
import { SellLocations } from '../enums/SellLocations';
import { ObjectType, Field } from 'type-graphql';
import { CargoData } from './CargoData';

@ObjectType()
export class LogData {
    @Field()
    id: number;
   
    @Field()
    date: string;
   
    @Field()
    patch: string;
    
    @Field(() => MiningShips)
    ship: MiningShips;
    
    @Field(() => MiningHeadData)
    miningHead1: MiningHeadData;
    
    @Field(() => MiningHeadData)
    miningHead2: MiningHeadData;
    
    @Field(() => MiningHeadData)
    miningHead3: MiningHeadData;
    
    @Field(() => MiningLocations)
    miningLocation: MiningLocations;
   
    @Field(() => SellLocations)
    sellLocation: SellLocations;
    
    @Field()
    sellPrice: number;
    
    @Field()
    operatingCost: number;
    
    @Field()
    profit: number;
    
    @Field(() => [CargoData])
    cargoBreakdown: CargoData[]
};