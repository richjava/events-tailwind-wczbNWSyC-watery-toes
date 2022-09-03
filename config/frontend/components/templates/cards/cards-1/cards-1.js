import { LeftAlignedHeadline, CenterAlignedHeadline } from "@/elements";

export default function Cards1({ content }) {
  if (!content) return <></>;
  let { attributes, collections } = content;

  if (!collections) {
    throw new Error(
      `No collections attribute provided in sections.json for template`
    );
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection.items;
  }

  return (
    <section id="cards-1" className="template">
      {attributes.headlineAlignment === 'left' && <LeftAlignedHeadline attributes={attributes} />}
      {attributes.headlineAlignment === 'center' && <CenterAlignedHeadline attributes={attributes} />}
      {items &&
        items.map((item, i) => (
          <div className="media-items flex flex-col md:flex-row md:items-start">
            <div className="bg-primary p-4 lg:p-8 mb-10 media-item-card w-full relative">
              <div className="relative z-10">
                <div className="md:px-5 lg:px-10 pt-2 lg:pt-1 pb-6 lg:pb-8">
                  <p
                    data-date="{{ blox.db[args.contentTypeSlug].items[i].fields.date }}"
                    className="pre-headline-white leading-4 mb-0"
                  >
                    {item.attributes.date}
                  </p>
                </div>
                <a href={`/${item.attributes.slug}/${item.attributes.slug}`}>
                  <img
                    className="w-full blurry-load filter-grayscale-1 hover:filter-grayscale-0 transition-filter duration-500 w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover mb-8 shadow-2xl"
                    src={item.attributes.featuredImage?.data?.attributes?.url}
                    alt={item.title}
                  />
                </a>
                <div className="px-5 lg:px-10 mb-6">
                  <a href={`/${item.attributes.slug}`}>
                    <h3 className="text-white mb-5">{item.attributes.title}</h3>
                  </a>
                  <div className="text-white mb-6 md:mb-12 lg:leading-8">
                  {item.attributes.cTABlurb}
                    {/* {item.attributes.body.length > 88 ? `${item.attributes.body.substring(0, 5)}...` : item.attributes.body} */}
                  </div>
                  <div className="flex items-center flex-col lg:flex-row">
                    <a
                      className="flex flex-grow justify-center w-full mb-4 lg:mb-0 mr-0 lg:mr-2 py-3 lg:py-3 text-white text-center uppercase tracking-widest text-sm border border-white hover:bg-white hover:text-primary transition-colors duration-200"
                      href={`/${item.attributes.slug}`}
                    >
                      More Info
                    </a>
                    <a
                      className="flex flex-grow justify-center w-full ml-0 lg:ml-2 py-3 lg:py-3 text-secondary text-center uppercase tracking-widest text-sm border border-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                      href={`/${item.slug}#booking`}
                    >
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-secondary w-full h-56 md:h-64 lg:h-72 xl:h-80 absolute top-0 left-0 z-0"></div>
            </div>

            {/* // This is a hoizontal "spacer" if there aren't two items in a column on the last iteration */}
            <div className="p-4 lg:p-8 mb-10 media-item-card w-full">&nbsp;</div>
          </div>
        ))}
    </section>
  );
}
