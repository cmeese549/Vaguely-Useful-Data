import { registerEnumType } from "type-graphql";

export enum MiningLocations {
    AaronHalo = 'Aaron Halo Asteroid Belt',
    Lyria = 'Lyria',
    Wala = 'Wala',
    Cellin = 'Cellin',
    Daymar = 'Daymay',
    Yela = 'Yela',
    CRUL = 'CRU L1 - CRU L5',
    Levski = 'Levski Asteroid Fields',
    Aberdeen = 'Aberdeen',
    Arial = 'Arial',
    Ita = 'Ita',
    Magda = 'Magda',
    HURL = 'HUR L1 - HUR L4',
    Calliope = 'Calliope',
    Clio = 'Clio',
    Euterpe = 'Euterpe',
    MICL1 = 'MIC L1'
}

registerEnumType(MiningLocations, {
    name: 'MiningLocations'
});