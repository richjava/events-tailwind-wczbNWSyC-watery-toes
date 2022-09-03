import Image from "next/image";
import getConfig from "next/config";

export default function HeroCover({ content }) {
  // if (!content) return <></>;
  let { attributes } = content;
  const { publicRuntimeConfig } = getConfig();

  return (
    <section
      id="hero-cover"
      className="relative xl:mt-16 mb-24 md:mb-32 xl:mb-48 template"
    >
      <div className="media-item-hero-container">
        <div
          className="filter-grayscale-1 hover:filter-grayscale-0 backdrop-darken transition-filter duration-500 media-item-hero h-screen bg-cover bg-center xl:bg-fixed flex items-center justify-center relative xl:-mt-16"
          style={{ backgroundImage: 'url(https://appyay.s3.amazonaws.com/e/5fc9df392ad4920500cd3cd1/a/61b52729e59bac0018976082/w1200)' }}
        >
          <div className="flex flex-col justify-center py-64 md:py-0 md:-mt-48 lg:-mt-56 xl:-mt-8 z-10">
            <p className="text-center text-white tracking-widest uppercase text-xs lg:text-sm md:mb-4">
              Featured Event
            </p>
            <a href="{{args.contentTypeSlug}}/{{blox.db[args.contentTypeSlug].items[0].slug}}">
              <h1 className="text-center text-white text-shadow-lg max-w-3xl lg:max-w-4xl px-8 lg:px-16">
              The Rebirth of the Cool with Ralph Miller Nonet
              </h1>
            </a>
          </div>
          <div className="absolute top-0 left-0 w-full h-full backdrop-darken"></div>
        </div>

        <div className="media-item-hero-content md:absolute md:z-30 md:bottom-0 md:w-full lg:backdrop-blur lg:hover:backdrop-blur-lg border-t border-white transition-all ease-in-out duration-500">
          <div
            className="flex flex-col md:flex-row"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="flex flex-grow flex-col xl:flex-row">
              <div className="flex-grow bg-primary-80 lg:bg-transparent border-b xl:border-b-0 xl:border-r border-primary-70 lg:border-white py-6 px-4 xl:py-8 lg:px-12">
                <h4 className="text-white text-center md:text-left text-shadow-sm mb-2 lg:mb-0">
                  When<span>:</span>
                </h4>
                <p
                  data-date="{{ args.info1 }}"
                  className="text-primary-10 text-center md:text-left tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0"
                >
                  Sunday, September 4, 2022
                </p>
              </div>

              <div className="flex-grow bg-primary-80 lg:bg-transparent py-6 px-4 xl:py-8 lg:px-12">
                <h4 className="text-white text-center md:text-left text-shadow-sm mb-2 lg:mb-0">
                  Where<span>:</span>
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start">
                  <p className="text-primary-10 tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0">
                  Lake Wanaka Centre
                  </p>
                  <span className="text-primary-50 lg:text-primary-30 px-2 lg:px-3 mb-2 lg:mb-0">
                    |
                  </span>
                  <p className="text-primary-10 tracking-wider text-lg text-shadow-sm mb-2 lg:mb-0">
                    Wanaka
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-grow xl:flex-grow-0 flex-row md:flex-col xl:flex-row items-center justify-center md:bg-primary-80 lg:bg-transparent md:border-l border-primary-70 lg:border-white xl:py-8 md:px-12 md:bg-wave lg:bg-none">
              <div className="w-full xl:w-auto xl:mr-2 md:mb-6 xl:mb-0 relative z-10">
                <a
                  className="flex flex-grow justify-center py-5 lg:py-3 lg:px-8 text-white text-center uppercase tracking-widest text-sm bg-primary-90 hover:bg-primary border border-primary-90 hover:border-primary  transition-colors duration-200"
                  href="{{args.contentTypeSlug}}/{{blox.db[args.contentTypeSlug].items[0].slug}}"
                >
                  More Info
                </a>
              </div>
              <div className="w-full xl:w-auto xl:ml-2 relative z-10">
                <a
                  className="flex flex-grow justify-center py-5 lg:py-3 lg:px-8 text-white lg:text-primary lg:hover:text-white text-center uppercase tracking-widest text-sm bg-secondary lg:bg-white hover:bg-secondary-dark border border-secondary lg:border-white hover:border-secondary-dark transition-colors duration-200"
                  href="/{{args.contentTypeSlug}}/{{blox.db[args.contentTypeSlug].items[0].slug}}#booking"
                >
                  Buy Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
