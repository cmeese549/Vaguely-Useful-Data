import { useMeQuery } from "../../generated/graphql";
import { withApollo } from "../../lib/apollo";
import Layout from "../../components/Layout";
import Log from "../../components/logs/Log";

export default withApollo(() => {
    const { data } = useMeQuery();
    if (data!.me) {
        return (
            <Layout title="Log"> 
                <Log />
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
