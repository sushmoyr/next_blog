import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";

function Section3() {
    return (
        <section className={"container mx-auto md:px-20 py-16"}>
            <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

            <Swiper
                slidesPerView={2}
                loop={true}
                autoplay={{delay: 2000}}
            >
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
                <SwiperSlide>{Post()}</SwiperSlide>
            </Swiper>

        </section>
    );
}

function Post() {
    return (
        <div className="grid">
            <div className="images">
                <Link href={"/"}>
                    <Image src={"/images/img2.jpg"} width={600} height={400}/>
                </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business, Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- July 3, 2022</Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Your
                        most unhappy customers are your greatest source of learning</Link>
                </div>
                <p className="text-gray-500 py-3">
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic
                    life One day however a small line of blind
                    text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                </p>
                <Author/>
            </div>
        </div>
    );
}

export default Section3;
