import React from "react";
import Head from "next/head";
import Header from "../header";

interface Props {
  searchQuery?: string;
}

export default class Layout extends React.Component<Props> {
  render() {
    return (
      <>
        <Head>
          <title>Test ML</title>
          <link rel="shortcut icon" href="/images/ml-logo.svg" />
        </Head>
        <Header searchQuery={this.props.searchQuery} />
        <div className="bg-gray-200 flex-grow">
          <div className="container mx-auto max-w-screen-lg lg:px-3">
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}
