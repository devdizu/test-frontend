import React from "react";
import Image from "next/image";
import style from "./list-item.module.scss";
import Link from "next/link";

interface Props {
  className?: string;
}

export default class ListItem extends React.Component<Props> {
  render() {
    return (
      <li className={"p-3 " + style.customListItem}>
        <Link href="/items/1234">
          <a className="flex">
            <Image
              className="flex-shrink-0"
              src="/images/ml-logo.svg"
              alt="Mercadolibre"
              width={120}
              height={120}
            />
            <div className="p-3 flex-grow">
              <h1 className="text-xl">$ 50.000</h1>
              <p>Nombre con condicion</p>
            </div>
            <p className="py-3 text-gray-500 w-20 lg:w-48 text-sm">Categoria</p>
          </a>
        </Link>
      </li>
    );
  }
}
