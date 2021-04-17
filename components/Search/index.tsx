import Image from "next/image";
import React from "react";
import style from "./search.module.css";

interface Props {
  className?: string;
  searchQuery?: string;
}

export default class Search extends React.Component<Props> {
  render() {
    return (
      <div className={"p-0.5 h-8 bg-white flex " + this.props.className}>
        <input
          type="text"
          id="inputSearch"
          className={"px-3 text-sm flex-grow " + style.inputSearch}
          placeholder="Nunca dejes de buscar"
          defaultValue={this.props.searchQuery ?? ""}
        />
        <button type="submit" className="w-8 flex-shrink-0 bg-gray-200">
          <Image
            src="/images/search.svg"
            alt="Mercadolibre"
            width={14}
            height={14}
          />
        </button>
      </div>
    );
  }
}
