import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import ContentItem from "../../components/detail-item/content-item";
import TitleItem from "../../components/detail-item/title-item";
import { Price } from "../../util/constants";

interface Props {
  title: string;
  picture: string;
  description: string;
  condition: string;
  sold_quantity: number;
  price: Price;
}

export default class Item extends React.Component<Props> {
  render() {
    console.log("item", this.props);
    const contentItem = {
      picture: this.props.picture,
      description: this.props.description,
    };
    const titleItem = {
      title: this.props.title,
      condition: this.props.condition,
      sold_quantity: this.props.sold_quantity,
      price: this.props.price,
    };
    return (
      <Layout>
        <Breadcrumb category=""/>
        <div className="p-7 bg-white shadow-md rounded-sm">
          <div className="flex flex-col lg:flex-row">
            <ContentItem
              className="flex-grow order-2 lg:order-1 mb-3"
              {...contentItem}
            />
            <TitleItem
              className="lg:w-60 flex-shrink-0 order-1 lg:order-2"
              {...titleItem}
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
  const { id } = params as IParams; // no longer causes error
  const { item } = await fetch(
    `http://localhost:3000/api/items/${id}`
  ).then((response) => response.json());
  return {
    props: { ...item },
  };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: "blocking", // indicates the type of fallback
  };
};
