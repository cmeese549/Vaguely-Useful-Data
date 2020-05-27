import { ArgsType, Field, InputType } from "type-graphql";
import { MiningShips } from "../enums/MiningShips";
import { MiningHeadData } from "../enums/MiningHeadData";
import { SellLocations } from "../enums/SellLocations";
import { MiningLocations } from "../enums/MiningLocations";
import { CargoData } from "./CargoData";
import { GraphQLJSONObject } from "graphql-type-json";

@ArgsType()
@InputType()
export class LogDataArgsType {

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

  @Field()
  emptySpace: number;

  @Field(() => GraphQLJSONObject)
  cargoBreakdown: CargoData[];
}