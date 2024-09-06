import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../styles";
const Footer = () => {
  return (
    <section
      id="footer"
      className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => {
            return (
              <div
                key={footerLink.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px]"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[72px] text-white">
                  {footerLink.title}
                </h4>
                <ul className="list-none mt-4">
                  {footerLink.links.map((link, index) => {
                    return (
                      <li
                        key={link.name}
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer duration-300 [&:not(:last-child)]:mb-4`}
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between items-center w-full md:flex-row pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[72px] text-white">
          2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer [&:not(:last-child)]:mr-6"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;
