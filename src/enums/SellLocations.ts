import { registerEnumType } from "type-graphql";

export enum SellLocations {
    Area18 = 'Area 18 IO North Tower',
    PortOlisar = 'Port Olisar Refinery',
    GrimHEX = 'GrimHEX Refinery',
    Levski = 'Levski Refinery',
    NewBabbage = 'New Babbage Planetary Servies'
}

registerEnumType(SellLocations, {
    name: 'SellLocations'
});