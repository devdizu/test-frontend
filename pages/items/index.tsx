import { GetServerSideProps } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/ListItem";

interface Props {
  search?: string;
}

export default class Items extends React.Component<Props> {
  render() {
    console.log("props", this.props);
    return (
      <Layout searchQuery={this.props.search}>
        <Breadcrumb />
        <ul className="px-3 bg-white shadow-md rounded-sm">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </Layout>
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
