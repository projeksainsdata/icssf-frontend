import React from 'react';
import Navbar from '../components/navbar/Navbar';
import BannerCustom from '../components/BannerCustom';
import nemo from '../assets/images/nemo.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IconArrowRight } from '@tabler/icons-react';
import Venue from "../components/Venue";
import Footer from "../components/Footer";

const Schedule = () => {
	return (
		<>
			<Navbar />
			<BannerCustom name="Schedule" />
			<div className="my-40" id="excursion">
				<div>
					<h1 className="text-center md:text-4xl text-2xl text-white font-spaceGrotesk font-bold">
						Excursion
					</h1>
					<hr
						width="100"
						className="text-center m-auto mt-3 border border-colorGreen"
					/>
					<h3 className="font-plusJakarta text-white text-xl my-5 text-center">
						One Day Trip To Pahawang Island!
					</h3>
					<Swiper
						effect={'coverflow'}
						grabCursor={true}
						centeredSlides={true}
						slidesPerView={'auto'}
						coverflowEffect={{
							rotate: 50,
							stretch: 0,
							depth: 10,
							modifier: 1,
							slideShadows: true,
						}}
						pagination={true}
						modules={[EffectCoverflow, Pagination]}
						className="m-5 md:m-0 rounded-lg"
					>
						{[...new Array(10)].map((x) => (
							<SwiperSlide className="w-96">
								<img src={nemo} className="rounded" />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="flex justify-center mt-5">
					<Link
						className="bg-colorGreen flex w-fit py-2 px-5 items-center rounded-full gap-1 font-spaceGrotesk font-bold"
						to={'/'}
					>
						Register
						<IconArrowRight className="w-5" />
					</Link>
				</div>
			</div>

			<div id="rundown" className="h-screen w-full flex flex-col justify-center items-center bg-colorGreen bg-blend-darken">
				<h1 className="text-center md:text-3xl text-2xl text-dark font-spaceGrotesk font-bold">
					Rundown
				</h1>
				<div className="py-5 px-12 text-center w-fit">Coming Soon!</div>
			</div>

			<Venue/>

			<div id="rundown" className="h-screen w-full flex flex-col justify-center items-center bg-colorGreen bg-blend-darken">
				<h1 className="text-center md:text-3xl text-2xl text-dark font-spaceGrotesk font-bold">
					Layout
				</h1>
				<div className="py-5 px-12 text-center w-fit">Coming Soon!</div>
			</div>

			<Footer/>
		</>
	);
};

export default Schedule;
