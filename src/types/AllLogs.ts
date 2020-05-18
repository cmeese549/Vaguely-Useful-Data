import { LogData } from './LogData';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class AllLogs {
    @Field(() => [LogData], { nullable: true })
    data: LogData[]
}