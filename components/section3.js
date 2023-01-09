import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

function Section3() {
    const {data, isLoading, isError} = fetcher('api/popular');


    if (isLoading) return <Spinner/>
    if (isError) return <Error/>

    return (
        <section className={"container mx-auto md:px-20 py-16"}>
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{delay: 2000}}
            >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}>
                            <Post data={value}></Post>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </section>
    );
}

function Post({data}) {
    const {title, subtitle, category, img, description, author, published} = data;
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}>
                    <Image src={img || "/images/img2.jpg"} width={600} height={400}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "Undefined"}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- {published || "Undefined"}</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">
                        {title || "Untitled"}
                    </Link>
                </div>
                <p className="text-gray-500 py-3">
                    {description || "Description"}
                </p>
                {author ? <Author/> : <></>}
            </div>
        </div>
    );
}

export default Section3;
