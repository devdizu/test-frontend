import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "../search";

interface Props {
  className?: string;
  searchQuery?: string;
}

export default class Header extends React.Component<Props> {
  render() {
    return (
      <div className={"bg-yellow " + (this.props.className ?? "")}>
        <div className="container mx-auto max-w-screen-lg px-3 h-12 flex items-center">
          <Link href="/">
            <a>
              <Image
                className="flex-shrink-0"
                src="/images/ml-logo.svg"
                alt="Mercadolibre"
                width={34}
                height={34}
              />
            </a>
          </Link>
          <Search
            className="ml-3 flex-grow"
            searchQuery={this.props.searchQuery}
          ></Search>
        </div>
      </div>
    );
  }
}
