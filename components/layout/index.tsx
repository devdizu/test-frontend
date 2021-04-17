import React from "react";
import Head from "next/head";
import Header from "../header";

interface Props {
  className?: string;
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
        <Header className="sticky top-0" searchQuery={this.props.searchQuery}/>
        <div>{this.props.children}</div>
      </>
    );
  }
}
