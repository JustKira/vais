// import { AiFillLinkedin, AiOutlineMail } from "react-icons/Ai";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-full gap-4 bg-white">
      <div className="w-full h-2 xl:h-3 bg-vais-sec/10" />
      <div className="container grid grid-cols-1 grid-rows-3 gap-4 py-4 xl:grid-cols-3 xl:grid-rows-1">
        <section className="flex flex-col h-full col-span-1 gap-4 px-4 ">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">Location</h1>
            <div className="flex flex-col w-3/4 gap-4 text-sm font-light text-gray-700 ">
              <p>
                1349, 1007 N. Orange St. 4th Floor , Wilmington, DE, New Castle,
                US, 19801.
              </p>

              <p>
                B309, F5/F6, LINX Business Park, Smart Village, Giza, Egypt,
                12577.
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col h-full col-span-1 gap-4 px-4 border-l border-vais-pri/25">
          <div className="flex flex-col gap-2">
            <h1 className="text-lg">Technologies</h1>
            <nav className="flex flex-col gap-2 text-sm font-light text-vais-pri">
              <a>Virtual Field Probing</a>
              <a>Soil Moister Engine</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-lg">Products</h1>
            <nav className="flex flex-col gap-2 text-sm font-light text-vais-pri">
              <a>FarmGuru</a>
            </nav>
          </div>
        </section>{" "}
        <section className="flex flex-col h-full col-span-1 gap-4 px-4 border-l ">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg">Contact us</h1>
            <div className="flex flex-col gap-4 font-light text-gray-700 w ">
              <div className="flex flex-col gap-1 text-vais-pri">
                <div className="flex items-center gap-1">
                  <h1 className="">info@vais.ai</h1>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="">linkedIn</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex items-center justify-center w-full">
        <div className="container h-1 border-b border-gray-300 " />
      </div>
      <div className="flex items-center justify-center h-16 py-2 pb-4 text-gray-500 xl:w-full">
        <h1 className="w-3/4 text-center xl:w-full">
          Copyright © 2023 Visual and AI Solutions (VAIS) Inc. All rights
          reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
