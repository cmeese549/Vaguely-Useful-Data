import * as React from "react";
import gql from "graphql-tag";

import { withApollo } from "../lib/apollo";
import { WithApolloClientContext } from "../interfaces/WithApolloClientContext";
import redirect from "../lib/redirect";
import { MeDocument, MeQuery } from "../generated/graphql";

const LogoutPage = () => {
    return <div>Logging Out!</div>;
};

LogoutPage.getInitialProps = async ({
    apolloClient,
    ...ctx
}: WithApolloClientContext) => {
    await apolloClient.mutate({
        mutation: gql`
            mutation {
                logout
            }
        `,
        update: store => {
            store.writeQuery<MeQuery>({
                query: MeDocument,
                data: { __typename: "Query", me: null }
            });
        }
    });
    redirect(ctx, "/login");
    await apolloClient.resetStore();
    return {};
};
export default withApollo(LogoutPage);
