---
to: src/pages/<%=name%>.tsx
sh: yarn eslint --fix src/pages/<%=name%>.tsx
---
import type { NextPage } from "next";
import Head from "next/head";

const <%=name%> : NextPage = () => {
  return (
  <>
    <Head>
        <title>
        <%=name%>
        </title>
    </Head>
  </>
  )
};

export default <%=name%>