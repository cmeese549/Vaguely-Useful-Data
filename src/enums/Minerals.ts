import { registerEnumType } from "type-graphql";

export enum Minerals {
    Quantainium = 'Quantainium',
    Bexalite = 'Bexalite',
    Taranite = 'Taranite',
    Borase = 'Borase',
    Laranite = 'Laranite',
    Agricium = 'Agricium',
    Hephaestanite = 'Hephaestanite',
    Titanium = 'Titanium',
    Diamond = 'Diamond',
    Gold = 'Gold',
    Copper = 'Copper',
    Beryl = 'Beryl',
    Tungsten = 'Tungsetn',
    Corundum = 'Corundum',
    Quartz = 'Quartz',
    Aluminium = 'Aluminium',
    InertMaterial = 'Inert Material'
}

registerEnumType(Minerals, {
    name: 'Minerals'
});