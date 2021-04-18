import React from "react";
import Image from "next/image";
import style from "./list-item.module.scss";
import Link from "next/link";
import { ECondition, Price } from "../../util/constants";
import { toCurrencyFormat } from "../../util/util";

interface Props {
  className?: string;
  id: string;
  title: string;
  picture: string;
  condition: string;
  category: string;
  price: Price;
}

export default class ListItem extends React.Component<Props> {
  render() {
    return (
      <li className={"p-3 " + style.customListItem}>
        <Link href={"/items/" + this.props.id}>
          <a className="flex">
            <div className="flex-shrink-0 w-24 lg:w-40">
              <Image
                src={this.props.picture}
                alt="Mercadolibre"
                layout="responsive"
                width={160}
                height={160}
              />
            </div>
            <div className="p-3 flex-grow">
              <h1 className="mb-2 text-xl">
                {toCurrencyFormat(this.props.price)}
              </h1>
              <p className="max-w-sm text-sm">
                {this.props.title} {ECondition[this.props.condition]}
              </p>
            </div>
            <p className="py-3 text-gray-500 w-20 lg:w-48 text-sm">
              {this.props.category}
            </p>
          </a>
        </Link>
      </li>
    );
  }
}
