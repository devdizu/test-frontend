import { GetServerSideProps } from "next";
import React from "react";
import Search from "../../components/Search";
import { ParsedUrlQuery } from "querystring";

interface Props {
  search?: string;
}

export default class Items extends React.Component<Props> {
  render() {
    console.log("props", this.props);
    return (
      <>
        <Search></Search>
        <h1>Items Component</h1>
      </>
    );
  }
}

interface IParams extends ParsedUrlQuery {
  search?: string;
}

export const getServerSideProps: GetServerSideProps<IParams> = async ({
  query,
}) => {
  return {
    props: query,
  };
};
