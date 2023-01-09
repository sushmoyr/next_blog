import Author from "./_child/author"
import Link from "next/link"
import Image from "next/image"
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import {SwiperSlide} from "swiper/react";

function Section4(){
    const {data, isLoading, isError} = fetcher('api/popular');

    if (isLoading) return <Spinner/>
    if (isError) return <Error/>

    return (
        <section className="container mx-auto md:px-20 py-16">
            <div className="grid lg:grid-cols-2">
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {/* posts */}
                        { data[1] ? <Post data={data[1]}></Post> : <></>}
                        { data[2] ? <Post data={data[2]}></Post> : <></>}
                        { data[3] ? <Post data={data[3]}></Post> : <></>}
                    </div>
                </div>
                <div className="item">
                    <h1 className="font-bold text-4xl py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        { data[4] ? <Post data={data[4]}></Post> : <></>}
                        { data[5] ? <Post data={data[5]}></Post> : <></>}
                        { data[2] ? <Post data={data[2]}></Post> : <></>}
                    </div>
                </div>
            </div>
        </section>
    )
}

function Post({ data }){
    const { id, title, category, img, published, author } = data;
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}>
                    <Image src={img || "/images/img1.jpg"} className="rounded" width={300} height={250} />
                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "No Category"}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">- {published || ""} </Link>
                </div>
                <div className="title">
                    <Link href={"/"} className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"} </Link>
                </div>
                { author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}

export default Section4;
