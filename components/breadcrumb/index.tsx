import React from "react";

interface Props {
  className?: string;
  category: string;
  itemTitle?: string;
}

export default class Breadcrumb extends React.Component<Props> {
  render() {
    return (
      <div className="px-3 lg:px-0 h-10 flex items-center bg-gray-200 text-gray-500 text-sm">
        {this.props.category}{" "}
        {this.props.itemTitle ? "/" + this.props.itemTitle : ""}
      </div>
    );
  }
}
