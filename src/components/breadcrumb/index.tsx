import React from "react";

interface Props {
  className?: string;
  category: string;
  title?: string;
}

export default class Breadcrumb extends React.Component<Props> {
  render() {
    return (
      <div className="p-3 lg:px-0 flex items-center bg-gray-200 text-gray-500 text-sm">
        {this.props.category}
        {this.props.title ? " / " + this.props.title : ""}
      </div>
    );
  }
}
