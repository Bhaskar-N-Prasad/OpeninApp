import React from "react";

import { Img, Input, Text } from "components";
import Dsdsd from "components/Dsdsd";

const SignInPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-montserrat items-start justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 gap-[94px] items-center justify-start md:px-5 w-[86%] md:w-full">
          <div
            className="bg-cover bg-no-repeat h-[1024px] md:h-[296px] sm:h-[901px] p-[54px] md:px-10 sm:px-5 relative w-[59%] md:w-full"
            style={{ backgroundImage: "url('images/img_group2.svg')" }}
          >
            <div className="absolute flex flex-col md:gap-10 gap-[328px] h-max inset-y-[0] justify-start left-[8%] my-auto w-[54%]">
              <div className="bg-white-A700 h-20 mr-[302px] rounded-[50%] w-20"></div>
              <div className="flex flex-col md:gap-10 gap-[357px] items-center justify-start md:ml-[0] ml-[83px] w-[79%] md:w-full">
                <Text
                  className="md:text-5xl text-7xl text-white-A700_01"
                  size="txtMontserratBold72"
                >
                  BASE
                </Text>
                <div className="flex flex-row items-center justify-between w-[299px]">
                  <Img
                    className="h-11 w-11"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img
                    className="h-[41px] w-[42px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <Img
                    className="h-12 w-12"
                    src="images/img_carbonlogolinkedin.svg"
                    alt="carbonlogolinke"
                  />
                  <Img
                    className="h-12 w-[50px]"
                    src="images/img_carbonlogodiscord.svg"
                    alt="carbonlogodisco"
                  />
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[22px] left-[8%] top-[8%]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
          <Dsdsd className="flex flex-col items-start justify-start w-[35%] md:w-full" />
        </div>
      </div>
    </>
  );
};

export default SignInPage;
