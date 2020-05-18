import * as React from "react";
import { useMeQuery } from "../generated/graphql";
import { withApollo } from "../lib/apollo";
import Layout from "../components/Layout";

export default withApollo(() => {
    const { data } = useMeQuery();
    if (data?.me) {
        return (
            <Layout title="Home"> 
                <h1>{ data && data.me?.firstName ? data.me?.firstName : "loading here too"}</h1>
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
