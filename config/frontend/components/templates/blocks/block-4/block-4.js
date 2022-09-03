import getConfig from "next/config";

export default function Block4({ content }) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes, collections } = content;
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }
  return (
    <section id="block-4" className="my-16 md:my-28 lg:my-48 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">{attributes.preheading}</p>
        <h2 className="mb-8 md:mb-16 leading-tight">{attributes.heading}</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <div className="sm:ml-6 lg:ml-12">
              <p className="text-primary-50 mb-12 lg:max-w-2xl sm:pr-4 lg:pr-8 leading-7 ">
                {attributes.body}
              </p>
              {/* {% call ctaBtnSimple.default({text: args.ctaText, url: args.ctaUrl}) %}{% endcall %} */}
            </div>
          </div>
          <div className="w-full lg:w-3/5 sm:mx-4 lg:ml-0 lg:mr-0">
            {items &&
              items.map((sponsor) => {
                return (
                  <div className="flex flex-wrap sm:mr-8 lg:mr-0">
                    <div className="w-1/2 md:w-1/3">
                      <a href={sponsor.attributes.url} target="_blank">
                        <img
                          className="filter-grayscale-1 hover:filter-grayscale-0 transition-filter duration-500 w-full px-2 sm:px-10 pb-8"
                          src={`${publicRuntimeConfig.BACKEND_URL || ""}${
                            sponsor.attributes.image.data.attributes.url
                          }`}
                          alt={sponsor.attributes.heading}
                          data-aos="fade-up"
                          data-aos-once="true"
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
