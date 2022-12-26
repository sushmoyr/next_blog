import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Author() {
    return (
        <div className="author flex py-5">
            <Image src={"/images/author/author1.jpg"} width={60} height={60} className="rounded-full"></Image>
            <div className="flex flex-col justify-center px-4">
                <Link href={"/"} className={"text-md font-bold text-gray-800 hover:text-gray-600"}>
                    Flying High
                </Link>
                <span className={"text-sm text-gray-500"}>CEO and Founder</span>
            </div>
        </div>
    );
}

export default Author;
