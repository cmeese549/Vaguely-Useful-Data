import { Minerals } from '../enums/Minerals';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class CargoData {
    @Field(() => Minerals)
    mineral: Minerals
    
    @Field()
    percentage: number;
}