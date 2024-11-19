import Image from "next/image";
import { portfolioData } from "@/app/api/data";

const Portfolio = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <div className="lg:-ml-32">
            <Image
              src="/images/portfolio/img-portfolio.png"
              alt="image"
              width={780}
              height={700}
            />
          </div>
          <div className="">
            <p className="sm:text-28 text-18 text-muted mb-4">
              Cryptocurrency <span className="text-primary">Portfolio</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              Create your crypto portfolio today with Cryp
              <span className="text-primary">Go</span>!
            </h2>
            <p className="text-muted text-opacity-60 text-18">
              Coinbase has a variety of features that make it the best
              <br className="md:block hidden" /> place to start trading.
            </p>
            <table className="w-80%">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-5">
                      <div className="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={35}
                          height={35}
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-28 text-22 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
