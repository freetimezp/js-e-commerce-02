import React from "react";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {CheckIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";

function Success() {
    const router = useRouter();
    const {session_id} = router.query;

    return (
        <div>
            <Head>
                <title>Thank You! - Apple</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <header className="mx-auto max-w-xl">
                <Link href="/">
                    <div className="relative ml-4 h-16 w-8 cursor-pointer transition lg:hidden">
                        <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
                    </div>
                </Link>
            </header>

            <main>
                <section className="order-2 mx-auto max-w-xl pb-12 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
                    <Link href="/">
                        <div className="relative ml-14 hidden h-24 w-12 cursor-pointer transition lg:inline-flex">
                            <Image src="https://rb.gy/vsvv2o" layout="fill" objectFit="contain" />
                        </div>
                    </Link>

                    <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-green-500 success-icon">
                            <CheckIcon className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Order #...{session_id?.slice(-5)}</p>
                            <h4 className="text-lg">
                                Thank You {" "}
                                {/*{session ? session.user?.name?.split(" ")[0] : "Guest"};*/}
                            </h4>
                        </div>
                    </div>

                    <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
                        <div className="space-y-2 pb-3">
                            <p>You order is confirmed!</p>
                            <p className="text-sm text-gray-600">
                                We've accepted your order, and we're getting ir ready.
                                Come back to this page for updates in your shipment
                                status.
                            </p>
                        </div>
                        <div className="pt-3 text-sm">
                            <p className="font-medium text-gray-600">
                                Order tracking number:
                            </p>
                            <p>CNB21534375</p>
                        </div>
                    </div>

                    <div className="mx-4 my-4 space-y-4 rounded-md border border-gray-300 p-4 lg:ml-14">
                        <p>Order updates</p>
                        <p className="text-sm text-gray-600">
                            You'll get shipping and delivery updates by email.
                        </p>
                    </div>

                    <div>
                        <p className="hidden lg:inline">Need help? Contact Us.</p>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Success;