import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import BannerCustom from '../components/BannerCustom';
import key1 from './../assets/images/georg.jpg';
import key2 from './../assets/images/shengban.png';
import key3 from './../assets/images/raewyn.png';
const Committee = () => {
  let commit = [
    {
      title: 'International Advisory Board',
      member: [
        'Prof. Dr. I Nyoman Pugeg Aryantha',
        'Prof. Dr. Eng. Khairurrijal, M.Si.',
        'Dr. Rahayu Sulistyorini, S.T., M.T',
      ],
    },
    {
      title: 'Steering Committee',
      member: [
        'Dr. Ikah Ning Prasetiowati Permanasari, S.Si., M.Si.',
        'Dr. Sri Efrinita Irwan, S.Si., M.Si.',
        'apt. Dirga, S.Farm., M.Sc.',
      ],
    },
    {
      title: 'General Chair',
      member: ['Dr. Robiatul Muztaba, S.Si., M.Si.'],
    },
    {
      title: 'Treasurer',
      member: ['Sofiana Herman, S.Si., M.Si.'],
    },
    {
      title: 'Secretary',
      member: ['Nadisah Nurul Inayah, S.Si., M.Si.'],
    },
    {
      title: 'Event',
      member: ['Gusrian Putra, S.Si., M.Si.'],
    },
    {
      title: 'Public Relation',
      member: ['apt. Nisa Yulianti Suprahman, S.Farm., M.Sc.'],
    },
    {
      title: 'Publication and Documentation',
      member: ['M. Daffa Aliffandhana, A.Md.'],
    },
    {
      title: 'Information and Technology',
      member: ['Ardika Satria, S.Si., M.Si.'],
    },
  ];

  return (
    <>
      <Navbar />
      <BannerCustom name="Committee" />
      <div className="flex flex-col items-center justify-between mx-10 mt-36">
        {commit.map((komite) => (
        <>
            <h1 className="pb-2 text-2xl text-white font-bold font-spaceGrotesk border-b-2 border-b-colorGreen">
              {komite.title}
            </h1>
            {komite.member.map(dosen=>(
              <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
                <img
                  src={key3}
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                />
                <div className="flex flex-col ml-3">
                  <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">
                    {dosen}
                  </p>
                  <p className="text-white text-base mt-2 text-center">
                    The University of Auckland, New Zealand
                  </p>
                </div>
              </div>

            ))}
            {/*<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-5 md:px-[100px] px-6">*/}

        </>
        ))}
          <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center">
            <img
              src={key3}
              className="w-40 h-40 object-cover rounded-lg mb-3"
            />
            <div className="flex flex-col ml-3">
              <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">
                Dr. Rahayu Sulistyorini, S.T., M.T
              </p>
              <p className="text-white text-base mt-2 text-center">
                The University of Auckland, New Zealand
              </p>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Committee;
