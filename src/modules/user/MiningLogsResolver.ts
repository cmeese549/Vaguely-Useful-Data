import { Resolver, Query, Ctx, Arg, Mutation, UseMiddleware } from "type-graphql";
import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";
import { AllLogs } from "../../types/AllLogs";
import { LogData } from "../../types/LogData";
import { LogDataArgsType } from "../../types/LogDataArgsType";
import { IsAuth } from "./middleware/IsAuth";

@Resolver()
export class MiningLogsResolver {
    
    @Query(() => AllLogs, { nullable: true})
    @UseMiddleware(IsAuth)
    async getAllLogs(@Ctx() ctx: MyContext): Promise<AllLogs | null> {
        const userId = ctx.req.session!.userId;
        if (!userId) {
            return null;
        }
        const user = await User.findOne(userId);
        if (user?.logs) {
            return user.logs;
        }
        return null;
    }

    @Query(() => LogData, { nullable: true})
    @UseMiddleware(IsAuth)
    async getLog(
        @Ctx() ctx: MyContext,
        @Arg('logId') logId: number
    ): Promise<LogData | null> {
        const userId = ctx.req.session!.userId;
        if (!userId) {
            return null;
        }
        const user = await User.findOne(userId);
        if (user?.logs) {
            let selectedLog: LogData | null = null;
            user.logs.data.forEach(log => {
                if (log.id === logId) {
                    selectedLog = log;
                }
            });
            return selectedLog;
        }
        return null;
    }

    @Mutation(() => LogData, { nullable: true})
    @UseMiddleware(IsAuth)
    async addLog(
        @Ctx() ctx: MyContext,
        @Arg('logData') logData: LogDataArgsType
    ): Promise<LogData | null> {
        const userId = ctx.req.session!.userId;
        if (!userId) {
            return null;
        }
        const user = await User.findOne(userId);
        if (user) {
            if (Array.isArray(user.logs)) {
                user.logs = {
                    data:  [{
                        id: 1,
                        ...logData
                    }]
                };
                await user.save();
                return user.logs.data[0];
            } else {
                console.log('why are you here');
                const newId: number = user.logs.data.length + 1;
                const newLogData = {
                    id: newId,
                    ...logData
                };
                user.logs.data.push(newLogData);
                await user.save();
                return newLogData;
            }
        }
        return null;
    }

    @Mutation(() => LogData, { nullable: true})
    @UseMiddleware(IsAuth)
    async updateLog(
        @Ctx() ctx: MyContext,
        @Arg('logId') logId: number,
        @Arg('logData') logData: LogDataArgsType
    ): Promise<LogData | null> {
        const userId = ctx.req.session!.userId;
        if (!userId) {
            return null;
        }
        const user = await User.findOne(userId);
        if (user) {
            user.logs.data[logId - 1] = {
                id: logId,
                ...logData
            }
            await user.save();
            return user.logs.data[logId - 1];
        }
        return null;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(IsAuth)
    async deleteLog(
        @Ctx() ctx: MyContext,
        @Arg('logId') logId: number
    ): Promise<boolean> {
        const userId = ctx.req.session!.userId;
        if (!userId) {
            return false;
        }
        const user = await User.findOne(userId);
        if (user?.logs && logId < user?.logs.data.length + 1) {
            user.logs.data.splice(logId - 1, 1);
            user.logs.data.forEach((log, index) => {
                log.id = index + 1;
            });
            await user.save();
            return true;
        }
        return false;
    }
}
