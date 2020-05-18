import { registerEnumType } from "type-graphql";

export enum MiningShips {
    Prospector = 'MISC Prospector',
    Mole = 'ARGO Mole'
}

registerEnumType(MiningShips, {
    name: 'MiningShips'
});