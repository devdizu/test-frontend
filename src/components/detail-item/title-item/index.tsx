import React from "react";
import { ECondition, Price } from "../../../util/constants";
import { pad, toCurrencyFormat } from "../../../util/util";

interface Props {
  title: string;
  condition: string;
  sold_quantity: number;
  className?: string;
  price?: Price;
}

export default class TitleItem extends React.Component<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <div className="lg:w-60 flex-shrink-0 order-1 lg:order-2">
          <p className="text-sm">
            {ECondition[this.props.condition]} - {this.props.sold_quantity}{" "}
            vendidos
          </p>
          <h3 className="text-lg font-bold mb-3">{this.props.title}</h3>
          <h1 className="flex text-4xl mb-8">
            {toCurrencyFormat(this.props.price)}
            <span className="text-lg">{pad(this.props.price.decimals, 2)}</span>
          </h1>
          <button className="btn btn-blue w-full">Comprar</button>
        </div>
      </div>
    );
  }
}
