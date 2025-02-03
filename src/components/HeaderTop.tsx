import React from 'react';
import {
  BsFacebook,
  BsTwitterX,
  BsInstagram,
  BsLinkedin,
} from 'react-icons/bs';

export const HeaderTop = () => {
  return (
    <div>
      <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="hidden lg:flex gap-1">
              <div className="header_top__icon_wrapper">
                <BsFacebook size={20} />
              </div>
              <div className="header_top__icon_wrapper">
                <BsTwitterX size={20} />
              </div>
              <div className="header_top__icon_wrapper">
                <BsInstagram size={20} />
              </div>
              <div className="header_top__icon_wrapper">
                <BsLinkedin size={20} />
              </div>
            </div>
            <div className="text-red-500 text-[12px]">
              <b>FREE SHIPPING</b> THIS WEEK ORDER OVER 99$
            </div>
            <div className="flex gap-4">
              <select
                className="text-gray-500 text-[12px] w-[70px]"
                name="currency"
                id="currency"
              >
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
                <option value="UAH ₴">UAH ₴</option>
              </select>
              <select
                className="text-gray-500 text-[12px] w-[80px]"
                name="language"
                id="language"
              >
                <option value="English">EN</option>
                <option value="Ukraine">UA</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
