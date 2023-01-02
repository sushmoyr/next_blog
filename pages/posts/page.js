import React from 'react';
import Format from '../../layout/format';
import Author from "../../components/_child/author";
import Image from "next/image";
import Related from "../../components/_child/related";

function Page(props) {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author/>
                </div>
                <div className={"post py-10"}>
                    <h1 className="font-bold text-4xl text-center pb-5">
                        Your most unhappy customers are your greatest source of learning
                    </h1>
                    <p className={"text-gray-500 text-xl text-center"}>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>

                    <div className="py-10">
                        <Image alt={"Blog cover"} src={"/images/img1.jpg"} width={900} height={600}/>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis dolor eaque facere ipsam, iure labore laboriosam laudantium magnam omnis praesentium quam rerum soluta! Deserunt illo minima praesentium suscipit ullam.
                    </p>
                    <br/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis dolor eaque facere ipsam, iure labore laboriosam laudantium magnam omnis praesentium quam rerum soluta! Deserunt illo minima praesentium suscipit ullam.
                    </p>
                    <br/>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis dolor eaque facere ipsam, iure labore laboriosam laudantium magnam omnis praesentium quam rerum soluta! Deserunt illo minima praesentium suscipit ullam.
                    </p>
                    <br/>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab corporis dolor eaque facere ipsam, iure labore laboriosam laudantium magnam omnis praesentium quam rerum soluta! Deserunt illo minima praesentium suscipit ullam.
                    </p>

                </div>
                <Related/>
            </section>
        </Format>
    );
}

export default Page;
