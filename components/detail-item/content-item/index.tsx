import React from "react";
import Image from "next/image";

interface Props {
  picture: string;
  description: string;
  className?: string;
}

export default class ContentItem extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="mb-5 lg:mb-20">
          <Image
            src={this.props.picture}
            alt="Mercadolibre"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        <h3 className="text-xl mb-3">Descripción del producto</h3>
        <p className="text-gray-400 text-sm">{this.props.description}</p>
      </div>
    );
  }
}
