import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../layout";
import Breadcrumb from "../../components/breadcrumb";
import ContentItem from "../../components/detail-item/content-item";
import TitleItem from "../../components/detail-item/title-item";
import { Price } from "../../util/constants";
import itemsService from "../../services/items-service";

interface Props {
  title: string;
  picture: string;
  description: string;
  condition: string;
  sold_quantity: number;
  price: Price;
  category: string;
}

export default class Item extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <Breadcrumb {...this.props} />
        <div className="lg:mb-10 p-3 lg:p-7 bg-white shadow-md rounded-sm">
          <div className="flex flex-col lg:flex-row">
            <ContentItem
              className="flex-grow order-2 lg:order-1 mb-3"
              {...this.props}
            />
            <TitleItem
              className="lg:w-60 flex-shrink-0 order-1 lg:order-2"
              {...this.props}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const { id } = params as IParams;
  const { item } = await itemsService.getItem(id);
  return {
    props: { ...item },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
