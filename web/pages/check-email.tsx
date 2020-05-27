import * as React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";

const CheckEmailPage: React.FC = () => {
    return (
        <Layout title="Check Email">
            <div>Check your email for confirmation link.</div>
        </Layout>
    );
};

export default withApollo(CheckEmailPage);
