'use client';
import Slider from 'react-infinite-logo-slider';
import { brandList } from './data';
import Image from 'next/image';

function BrandLogo() {
    return (
        <section>
            <div className="2xl:py-20 py-11">
                <div className="container">
                    <div className="gap-4">
                        <div className="flex justify-center text-center py-4 relative">
                            <p className="text-white font-medium">
                                Trusted by top <span className='text-primary'>crypto platforms</span>
                            </p>
                        </div>

                        <div className="py-3 Xsm:py-7">
                            <Slider
                                width="200px"
                                duration={20}
                                pauseOnHover={true}
                                blurBorders={false}
                            >
                                {brandList.map((items, index) => (
                                    <Slider.Slide>
                                        <div key={index} className='mr-10 w-full h-full flex items-center'>
                                            <Image src={items?.image} alt="logo" width={135} height={35} className='w-full h-full ' />
                                        </div>
                                    </Slider.Slide>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default BrandLogo;
