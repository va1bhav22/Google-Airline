import Head from "next/head";
type Props = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  //   description?: string;
  //   ogImage?: string;
};
const AdminLayout = ({ title, children = <></> }: Props) => {
  <>
    <Head>
      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <title>{title || "Welcome to your pannel"}</title>
      {/* <meta name="description" content={description} /> */}
      {/* <meta property="og:image" content={ogImage} /> */}
    </Head>
  </>;
};

export default AdminLayout;
