import * as React from "react";
import { useMeQuery } from "../generated/graphql";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";
import AllLogs from "../components/logs/AllLogs";
import Link from "next/link";

export default withApollo(() => {
    const { data } = useMeQuery();
    if (data?.me) {
        return (
            <Layout title="Home"> 
                <h1>{ data && data.me?.firstName ? data.me?.firstName : "loading here too"}</h1>
                <Link href="/add-log">
                    <a>Add Log</a>
                </Link>
                <AllLogs />
            </Layout>
        );
    } else {
        return (
            <Layout title="Home">
                <h1>Welcome!  Please log in or some shit</h1>
            </Layout>
        );
    }
});
