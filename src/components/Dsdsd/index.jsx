import React from "react";

import { useGoogleLogin } from "@react-oauth/google";

import { Img, Input, Text } from "components";

const Dsdsd = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

  return (
    <>
      <div className={props.className}>
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-black-900"
          size="txtMontserratBold36"
        >
          {props?.asd}
        </Text>
        <Text className="mt-2 text-base text-black-900" size="txtLatoRegular16">
          Sign in to your account
        </Text>
        <div className="flex sm:flex-col flex-row gap-7 items-center justify-between mt-[27px] w-full">
          <div
            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
            style={{ backgroundImage: "url('images/img_googlesignin.svg')" }}
          >
            <div
              className="common-pointer flex flex-row gap-[17px] items-start justify-start w-[82%] md:w-full"
              onClick={() => googleSignIn()}
            >
              <Img
                className="h-[15px] w-[15px]"
                src="images/img_googleicon1.svg"
                alt="googleiconOne"
              />
              <Text
                className="mt-0.5 text-center text-gray-600 text-xs"
                size="txtMontserratRegular12"
              >
                Sign in with Google
              </Text>
            </div>
          </div>
          <div
            className="bg-cover bg-no-repeat flex sm:flex-1 flex-col h-8 items-center justify-end p-1.5 w-[47%] sm:w-full"
            style={{ backgroundImage: "url('images/img_googlesignin.svg')" }}
          >
            <div className="flex flex-row gap-[17px] items-start justify-center w-[76%] md:w-full">
              <Img
                className="h-[15px] mb-0.5"
                src="images/img_user_gray_500.svg"
                alt="user_One"
              />
              <Text
                className="mt-[3px] text-center text-gray-600 text-xs"
                size="txtMontserratRegular12"
              >
                Sign in with Apple
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center justify-start mt-[27px] w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[347px] items-center justify-end p-8 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_googlesignin.svg')" }}
          >
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-base text-black-900"
                size="txtLatoRegular16"
              >
                Email address
              </Text>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[43px] items-start justify-end mt-[11px] p-[11px] w-full"
                style={{ backgroundImage: "url('images/img_group4.svg')" }}
              >
                <Text
                  className="ml-1 md:ml-[0] text-base text-black-900"
                  size="txtLatoRegular16"
                >
                  johndoe@gmail.com
                </Text>
              </div>
              <Text
                className="mt-[22px] text-base text-black-900"
                size="txtLatoRegular16"
              >
                Password
              </Text>
              <Input
                name="groupOne"
                placeholder="••••••••"
                className="font-lato leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                wrapClassName="mt-[11px] w-full"
                shape="round"
                color="gray_200"
                size="xs"
                variant="fill"
              ></Input>
              <a
                href="javascript:"
                className="mt-[23px] text-base text-blue-700"
              >
                <Text size="txtLatoRegular16Blue700">Forgot password?</Text>
              </a>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[43px] items-center justify-start mt-[21px] p-[11px] w-full"
                style={{
                  backgroundImage: "url('images/img_buttonsignin.svg')",
                }}
              >
                <a
                  href="javascript:"
                  className="text-base text-center text-white-A700_01"
                >
                  <Text size="txtMontserratBold16">Sign In</Text>
                </a>
              </div>
            </div>
          </div>
          <Text
            className="text-base text-center text-gray-600"
            size="txtLatoRegular16Gray600"
          >
            <span className="text-gray-600 font-lato font-normal">
              Don’t have an account?{" "}
            </span>
            <span className="text-blue-700 font-lato font-normal">
              Register here
            </span>
          </Text>
        </div>
      </div>
    </>
  );
};

Dsdsd.defaultProps = { asd: "Sign In" };

export default Dsdsd;
