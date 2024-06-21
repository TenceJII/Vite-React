import React from "react";
import image1 from "../assets/image1.png";
import image3 from "../assets/image3.png";

export default function Home() {
    return (
        <main>
            <section className="relative mx-auto max-w-screen-2xl ">
                <div className="flex flex-col justify-center h-screen px-3 py-12 lg:pt-28">
                    <div className="relative w-full md:h-[540px] h-[181px]">
                        <img
                            alt=""
                            src={image1}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-3xl tracking-wide text-white font-baskervville md:text-9xl">
                                LOREM IPSUM
                            </h1>
                        </div>
                    </div>
                    <div className="pt-1 md:grid-cols-12 md:grid gap-x-4">
                        <div className="hidden leading-7 md:block md:col-end-8 md:col-start-1">
                            <p className="font-normal leading-7 font-baskervville">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                                Donec tempus venenatis ante, vel vestibulum dui
                                suscipit vitae. Praesent imperdiet convallis
                                felis vitae malesuada. Phasellus a facilisis
                                lectus. Sed ut ipsum ut justo dapibus commodo.
                                Curabitur quis magna placerat risus tristique
                                venenatis. Pellentesque nec orci scelerisque,
                                pretium nisl non, porttitor diam. Vivamus
                                maximus nisi et sollicitudin porta. <br></br>{" "}
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                                Donec tempus venenatis ante, vel vestibulum dui
                                suscipit vitae. Praesent imperdiet convallis
                                felis vitae malesuada. Phasellus a facilisis
                                lectus. Sed ut ipsum ut justo dapibus commodo.
                                Curabitur quis magna placerat risus tristique
                                venenatis. Pellentesque nec orci scelerisque,
                                pretium nisl non, porttitor diam. Vivamus
                                maximus nisi et sollicitudin porta.
                            </p>
                        </div>
                        <div className=" md:col-end-13 md:col-start-9">
                            <p className="font-normal leading-7 font-baskervville">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Curabitur eget vehicula ipsum.
                                Donec tempus venenatis ante, vel vestibulum dui
                                suscipit vitae. Praesent imperdiet convallis
                                felis vitae malesuada. Phasellus a facilisis
                                lectus. Sed ut ipsum ut justo dapibus commodo.
                                Curabitur quis magna placerat risus tristique
                                venenatis. Pellentesque nec orci scelerisque,
                                pretium nisl non, porttitor diam. Vivamus
                                maximus nisi et sollicitudin porta.{" "}
                                <span className="block lg:hidden">
                                    Curabitur quis magna placerat risus
                                    tristique venenatis. Pellentesque nec orci
                                    scelerisque, pretium nisl non, porttitor
                                    diam. Vivamus maximus nisi et sollicitudin
                                    porta.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto">
                <div className="relative w-full h-full px-3 md:py-24 ">
                    <div className="relative font-light text-[7.625vw] lg:text-[6.9vw] h-[2em] xl:pt-0 block ">
                        <div className="block text-right lg:text-left leading-[0.84em] ">
                            <div className="text-right lg:text-left">
                                <span className=" pr-[0.36em] lg:pr-0 font-[HVMuseRegular]">
                                    LEADING
                                </span>
                                <span className="lg:w-[0.20em] lg:inline-block"></span>
                                <span className=" font-[HVMuseRegular] pr-[0.05em] lg:pr-0 lg:ml-0 ml-[-.05em]">
                                    NEWSPAPER
                                </span>
                            </div>
                            <div className="relative text-left lg:text-right">
                                <span className="absolute lg:relative lg:top-0 lg:left-0 top-[0.64em]  inline-block font-[HVMuseRegular] ">
                                    MAGAZINE INDONESIA
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:mt-0 mt-5  h-[1px] bg-[#401D01]"></div>
                    <div className="pt-5 md:grid md:grid-cols-12 gap-x-4">
                        <div className="col-end-5 md:col-start-1 xl:col-start-2">
                            <div className="">
                                <div className="lg:w-[393px] relative">
                                    <img
                                        alt=""
                                        className="relative w-full h-auto"
                                        src="https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p1/364/2023/11/15/prilly-415729445.jpg"
                                    ></img>
                                </div>
                                <div className="lg:w-[20rem]">
                                    <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                                        LOREM IPSUM
                                    </h1>
                                    <p className="text-sm font-kaisei">
                                        Consectetur adipiscing elit. Curabitur
                                        eget vehicula ipsum. Donec tempus
                                    </p>
                                    <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                                        BY MONALISA MORALLES
                                    </h2>
                                </div>
                            </div>
                            <div className="py-4">
                                <div className="lg:w-[393px] relative">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1718040506078-5a7b90746511?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="relative w-full h-auto"
                                    ></img>
                                </div>
                                <div className="lg:w-[20rem]">
                                    <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                                        LOREM IPSUM
                                    </h1>
                                    <p className="text-sm font-kaisei">
                                        Consectetur adipiscing elit. Curabitur
                                        eget vehicula ipsum. Donec tempus
                                    </p>
                                    <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                                        BY MONALISA MORALLES
                                    </h2>
                                </div>
                            </div>
                            <div className="py-4">
                                <div className="lg:w-[393px] relative">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1519748771451-a94c596fad67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="relative w-full h-auto"
                                    ></img>
                                </div>
                                <div className="lg:w-[20rem]">
                                    <h1 className="tracking-wider underline font-baskervville underline-offset-1">
                                        LOREM IPSUM
                                    </h1>
                                    <p className="text-sm font-kaisei">
                                        Consectetur adipiscing elit. Curabitur
                                        eget vehicula ipsum. Donec tempus
                                    </p>
                                    <h2 className="mt-3 tracking-widest font-baskervville hover:underline underline-offset-1">
                                        BY MONALISA MORALLES
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-start-6 col-end-12">
                            <div className="pb-9">
                                <p className="text-lg font-baskervville">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    imperdiet convallis felis vitae malesuada.
                                    Phasellus a facilisis lectus. Sed ut ipsum
                                    ut justo dapibus commodo. Curabitur quis
                                    magna placerat risus tristique venenatis.
                                    Pellentesque nec orci scelerisque, pretium
                                    nisl non, porttitor diam. Vivamus maximus
                                    nisi et sollicitudin porta.
                                </p>
                                <div className="relative ">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1508245740873-1a4820efedf8?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="relative w-full h-full"
                                    ></img>
                                </div>
                            </div>
                            <div>
                                <p className="te">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Curabitur eget vehicula
                                    ipsum. Donec tempus venenatis ante, vel
                                    vestibulum dui suscipit vitae. Praesent
                                    imperdiet convallis felis vitae malesuada.
                                    Phasellus a facilisis lectus. Sed ut ipsum
                                    ut justo dapibus commodo. Curabitur quis
                                    magna placerat risus tristique venenatis.
                                    Pellentesque nec orci scelerisque, pretium
                                    nisl non, porttitor diam. Vivamus maximus
                                    nisi et sollicitudin porta.
                                </p>
                                <div className="relative ">
                                    <img
                                        alt=""
                                        src={image3}
                                        className="relative w-full h-full"
                                    ></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
