import { registerEnumType } from "type-graphql";

export enum MiningHeadData {
    ArborMH1 = 'Arbor MH1',
    ArborMH2 = 'Arbor MH2',
    HelixS1 = 'Helix S1',
    HelixS2 = 'Helix S2',
    HofstedeS1 = 'Hofstede S1',
    HofstedeS2 = 'Hofstede S2',
    Impact1 = 'Impact 1',
    Impact2 = 'Impact 2',
    KleinS1 = 'Klein S1',
    KleinS2 = 'Klein S2',
    LancetMH1 = 'Lancet MH1',
    LancetMH2 = 'Lancet MH2',
    None = 'None'
}

registerEnumType(MiningHeadData, {
    name: 'MiningHeadData'
});