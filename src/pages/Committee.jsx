import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import BannerCustom from '../components/BannerCustom';
import ardika_satria from '../assets/images/committee/ardika_satria.jpg';
import Dirga from '../assets/images/committee/Dirga.jpg';
import Efrinita from '../assets/images/committee/Efrinita.jpg';
import Gusrian_Putra from '../assets/images/committee/Gusrian-Putra-.png';
import Ikah from '../assets/images/committee/Ikah.jpg';
import Nadisah from '../assets/images/committee/Nadisah.jpg';
import Nisa_Yulianti_Suprahman from '../assets/images/committee/Nisa-Yulianti-Suprahman.jpg';
import robiatul from '../assets/images/committee/robiatul.jpg';
import Sofiana_Herman from '../assets/images/committee/Sofiana-Herman.jpg';

import rektor from '../assets/images/committee/rektor.png';
import wakilrektor from '../assets/images/committee/wakilrektor.jpg';
import wakilrektornonakademik from '../assets/images/committee/wakilrektornonakademik.png';
import ketuajurusansains from '../assets/images/committee/ketuajurusansains.jpg';

const Committee = () => {
  let commit = [
    {
      title: 'International Advisory Board',
      member: [
        'Prof. Dr. I Nyoman Pugeg Aryantha',
        'Prof. Dr. Eng. Khairurrijal, M.Si.',
        'Dr. Rahayu Sulistyorini, S.T., M.T',
      ],
      img:[rektor,wakilrektor,wakilrektornonakademik]
    },
    {
      title: 'Steering Committee',
      member: [
        'Dr. Ikah Ning Prasetiowati Permanasari, S.Si., M.Si.',
        'Dr. Sri Efrinita Irwan, S.Si., M.Si.',
        'apt. Dirga, S.Farm., M.Sc.',
      ],
      img:[ketuajurusansains,Efrinita,Dirga]
    },
    {
      title: 'General Chair',
      member: ['Dr. Robiatul Muztaba, S.Si., M.Si.'],
      img:[robiatul]
    },
    {
      title: 'Treasurer',
      member: ['Sofiana Herman, S.Si., M.Si.'],
      img:[Sofiana_Herman]
    },
    {
      title: 'Secretary',
      member: ['Nadisah Nurul Inayah, S.Si., M.Si.'],
      img:[Nadisah]
    },
    {
      title: 'Event',
      member: ['Gusrian Putra, S.Si., M.Si.'],
      img:[Gusrian_Putra]
    },
    {
      title: 'Public Relation',
      member: ['apt. Nisa Yulianti Suprahman, S.Farm., M.Sc.'],
      img:[Nisa_Yulianti_Suprahman]
    },
    {
      title: 'Publication and Documentation',
      member: ['M. Daffa Aliffandhana, A.Md.'],
      img:["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_ITERA.png/768px-Logo_ITERA.png"]
    },
    {
      title: 'Information and Technology',
      member: ['Ardika Satria, S.Si., M.Si.'],
      img:[ardika_satria]
    },
  ];

  return (
    <>
      <Navbar />
      <BannerCustom name="Committee" />
      <div className="mx-10 mt-36">
        {commit.map((komite) => (
          <div className="my-5 text-center flex flex-col items-center justify-center">
          <h1 className="pb-2 text-2xl text-white font-bold font-spaceGrotesk border-b-2 border-b-colorGreen my-4">
            {komite.title}
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            {komite.member.map((dosen,pos) => (
              <div className="bg-gradient-to-b from-[#121212] to-[#39FF14] to-[900%] p-5 rounded-xl flex flex-col items-center w-72">
                <img
                  src={komite.img[pos]}
                  className="w-40 h-40 object-cover object-top rounded-lg mb-3"
                />
                <div className="flex flex-col ml-3">
                  <p className="text-xl text-colorGreen font-bold text-center font-spaceGrotesk">
                    {dosen}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Committee;
