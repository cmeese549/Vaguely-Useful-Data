import * as React from "react";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/Layout";
import { useMeQuery, useGetLogQuery } from "../../generated/graphql";
import UpdateLog from "../../components/logs/UpdateLog";
import { useRouter } from "next/router";

export default withApollo(() => {
    const { data } = useMeQuery();
    if (data?.me) {
        return (
            <Layout title="Edit Log">
                <UpdateLog />
            </Layout>
        )
    } else {
        return (
            <Layout title="Home">
                <h1>Welcome!  Please log in or some shit</h1>
            </Layout>
        );
    }
});