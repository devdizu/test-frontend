import { GetServerSideProps } from "next";
import React from "react";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../layout";
import Breadcrumb from "../../components/breadcrumb";
import ListItem from "../../components/list-item";
import { getMostRepeatedCategory } from "../../util/util";
import itemsService from "../../services/items-service";

interface Props {
  search?: any;
  categories: string[];
  items: any[];
}

export default class Items extends React.Component<Props> {
  private renderListItems(listTtems, categories): ListItem[] {
    return listTtems.map((item, idx) => (
      <ListItem {...item} key={"item" + idx} category={categories[idx]} />
    ));
  }

  render() {
    return (
      <Layout searchQuery={this.props.search}>
        <Breadcrumb category={getMostRepeatedCategory(this.props.categories)} />
        <ul className="lg:mb-10 px-3 bg-white shadow-md rounded-sm">
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
  const data = await itemsService.getItems(search);
  return {
    props: { search, ...data },
  };
};
