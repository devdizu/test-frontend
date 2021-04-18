import { GetServerSideProps } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/list-item";
import { getMostRepeatedCategory } from "../../util/util";

interface Props {
  search?: any;
  categories: any;
  items: any[];
}

export default class Items extends React.Component<Props> {
  private renderListItems(listTtems, categories): ListItem[] {
    return listTtems.map((item, idx) => (
      <ListItem {...item} key={"item" + idx} category={categories[idx]} />
    ));
  }

  render() {
    console.log("props", this.props);
    return (
      <Layout searchQuery={this.props.search}>
        <Breadcrumb category={getMostRepeatedCategory(this.props.categories)} />
        <ul className="px-3 bg-white shadow-md rounded-sm">
          {this.renderListItems(this.props.items, this.props.categories)}
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
  const search = (query.hasOwnProperty("search") ? query.search : "") as string;
  const data = await fetch(
    `http://localhost:3000/api/items?q=${search}`
  ).then((response) => response.json());
  return {
    props: { search, ...data },
  };
};
