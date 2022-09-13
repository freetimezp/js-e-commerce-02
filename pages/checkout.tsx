import React ,{useState, useEffect} from "react";

import Head from "next/head";
import {useRouter} from "next/router";
//import Currency from "react-currency-formatter";
//import Stripe from "stripe";
import CheckoutProduct from "../components/CheckoutProduct";
//import {fetchPostJSON} from "../utils/api-helpers";
//import getStripe from "../utils/get-stropejs";

import Header from "../components/Header";
import Button from "../components/Button";
import {useSelector} from "react-redux";
import {selectBasketItems, selectBasketTotal} from "../redux/basketSlice";

import {ChevronDownIcon} from "@heroicons/react/24/solid";



function Checkout() {
    const items = useSelector(selectBasketItems);
    const router = useRouter();
    const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
        {} as {[key: string]: Product[]}
    );

    useEffect(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item._id] = results[item._id] || []).push(item);
            return results;
        }, {} as {[key: string]: Product[]});

        setGroupedItemsInBasket(groupedItems);
    },[items]);

    return (
        <div className="min-h-screen overflow-hidden bg-[#E7ECEE]">
            <Head>
                <title>Basket - E-com-2</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            <main className="mx-auto max-w-5xl pb-24">
                <div className="px-5">
                    <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
                        {items.length > 0 ? "Review your cart." : "Your cart is empty!"}
                    </h1>
                    <p className="my-4">Free delivary and free returns.</p>

                    {items.length === 0 && (
                        <Button title="Continue Shopping" onClick={() => router.push("/")} />
                    )}

                    {items.length > 0 && (
                        <div className="mx-5 md:mx-8">
                            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
                                <CheckoutProduct key={key} items={items} id={key} />
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default Checkout;