import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Author from "./author";

function Related(props) {
    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">
                Related
            </h1>
            <div className="flex flex-col gap-10">
                {Post()}
            </div>
        </section>
    );
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}> <Image src={"/images/img1.jpg"} className="rounded" width={300} height={200} /> </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2022 </Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning </Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}

export default Related;
