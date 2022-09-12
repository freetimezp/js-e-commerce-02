import React from "react";

import Image from "next/image";
import {urlFor} from "../sanity";
import Currency from "react-currency-formatter";
import {ChevronDownIcon} from "@heroicons/react/24/solid";

interface Props {
    items: Product[];
    id: string;
}

function CheckoutProduct({id, items}: Props) {
    return (
        <div>
            <div className="relative h-44 w-44">
                <Image src={urlFor(items[0].image[0]).url()} layout="fill" objectFit="contain" />
            </div>

            <div className="flex flex-1 items-end lg:items-center">
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                        <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
                        <p className="flex items-end gap-x-1 font-semibold">
                            {items.length}
                            <ChevronDownIcon className="h-6 w-6 text-blue-500" />
                        </p>
                    </div>

                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Show Product details
                        <ChevronDownIcon className="h-6 w-6" />
                    </p>
                </div>

                <div>
                    <h4>
                        <Currency
                            quantity={items.reduce((total, item) => total + item.price, 0)}
                            currency="USD"
                        />
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;