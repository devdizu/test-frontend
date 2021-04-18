import Image from "next/image";
import React from "react";
import style from "./search.module.scss";
import { NextRouter, withRouter } from "next/router";

interface Props {
  className?: string;
  searchQuery?: string;
  router: NextRouter;
}
interface State {
  query: string;
}

class Search extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { query: this.props.searchQuery ?? "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ query: event.target.value });
  }
  private handleSubmit(event): void {
    event.preventDefault();
    this.props.router.push(`/items?search=${this.state.query}`);
  }
  render() {
    return (
      <form
        id="formSearch"
        className={"p-0.5 h-8 bg-white flex " + this.props.className}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          ref="inputSearch"
          id="inputSearch"
          className={"px-3 text-sm flex-grow " + style.inputSearch}
          placeholder="Nunca dejes de buscar"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="w-8 flex-shrink-0 bg-gray-200"
        >
          <Image
            src="/images/search.svg"
            alt="Mercadolibre"
            width={14}
            height={14}
          />
        </button>
      </form>
    );
  }
}

export default withRouter(Search);
// export default Search;
