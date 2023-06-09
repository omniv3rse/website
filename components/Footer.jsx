'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { socials } from '../constants';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">Enter the Omniverse</h4>
        <Link href="https://docs.omniv3rse.com/" target="_blank" rel="noreferrer noopener">
          <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]">
            <img src="/icon-map-pano.svg" alt="eye icon" className="w-[24px] h-[24px] object-contain" />
            <span className="font-normal text-[16px] text-white">DOCUMENTATION</span>
          </button>
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">Omniv3rse.com</h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 🌌 All rights reserved
          </p>
          <div className="flex gap-4 z-10">
            {socials.map((social) => (
              <Link key={social.name} href={social.url} target="_blank" rel="noreferrer noopener">
                <img
                  src={social.src}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
