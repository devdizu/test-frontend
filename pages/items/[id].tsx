import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Layout from "../../components/layout";
import Breadcrumb from "../../components/breadcrumb";
import Image from "next/image";

interface Props {
  item: any;
}

export default class Item extends React.Component<Props> {
  render() {
    console.log("items", this.props);
    return (
      <Layout>
        <Breadcrumb />
        <div className="p-3 bg-white shadow-md rounded-sm">
          <div className="flex flex-row">
            <div className="flex-grow">
              <Image
                className="relative"
                src="/images/ml-logo.svg"
                alt="Mercadolibre"
                layout="responsive"
                width={700}
                height={475}
              />
            </div>
            <div>OK</div>
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
