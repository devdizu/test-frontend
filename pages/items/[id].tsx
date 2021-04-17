import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Search from "../../components/Search";

interface Props {
  item: any;
}

export default class Item extends React.Component<Props> {
  render() {
    console.log("items", this.props);
    return (
      <>
        <Search></Search>
        <h1>Detail Item Component</h1>
      </>
    );
  }
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as IParams; // no longer causes error
  return {
    props: { item: id },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: "blocking", // indicates the type of fallback
  };
};
