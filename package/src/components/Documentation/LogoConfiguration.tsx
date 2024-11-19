export const LogoConfiguration = () => {
  return (
    <>
      <h3 className=" text-xl font-semibold mt-8 text-white">Logo</h3>
      <div className="p-6 rounded-md border mt-4 border-border dark:border-dark_border">
        <p className="text-base font-medium text-muted text-opacity-60 flex lg:flex-row flex-col">
          1. Change Logo over here :{" "}
          <span className="font-semibold text-base overflow-x-auto">
            {" "}
            src/components/Layout/Header/Logo/index.tsx
          </span>{" "}
        </p>
        <div className="py-4 px-3 rounded-md bg-black mt-8">
          <div className="text-sm text-gray-400">
            <p>&#x3C;Link href=&#x22;/&#x22;&#x3E;</p>
            <p className="ms-2">&#x3C;Image</p>
            <p className="ms-3">src=&#x22;/images/logo/logo.svg&#x22;</p>
            <p className="ms-3">alt=&#x22;logo&#x22;</p>
            <p className="ms-3">width={160}</p>
            <p className="ms-3">height={50}</p>
            <p className="ms-3">quality={100}</p>
            <p className="ms-3">className=&#x27;dark:hidden&#x27;</p>
            <p>/&#x3E;</p>
            <p className="ms-2">&#x3C;Image</p>
            <p className="ms-5">
              src=&#x22;/images/footer/footer-logo-white.svg&#x22;
            </p>
            <p className="ms-5">alt=&#x22;logo&#x22;</p>
            <p className="ms-5">width={160}</p>
            <p className="ms-5">height={50}</p>
            <p className="ms-5">quality={100}</p>
            <p className="ms-5">className=&#x27;dark:block hidden&#x27;</p>
            <p className="ms-2">/&#x3E;</p>
            <p className="ms-2">&#x3C;/Link&#x3E;</p>
          </div>
        </div>
      </div>
    </>
  );
};
