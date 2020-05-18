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
            if (user.logs === null) {
                user.logs = { data: [] };
            }
            const newId: number = user.logs.data.length + 1;
            const newLogData = {
                id: newId,
                ...logData
            };
            user.logs.data.push(newLogData);
            await user.save();
            return newLogData;
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
            user.logs.data.forEach((log, index, object) => {
                if (log.id === logId) {
                    object.splice(index, 1);
                }
            });
            user.logs.data.forEach((log, index) => {
                log.id = index + 1;
            });
            await user.save();
            return true;
        }
        return false;
    }
}
