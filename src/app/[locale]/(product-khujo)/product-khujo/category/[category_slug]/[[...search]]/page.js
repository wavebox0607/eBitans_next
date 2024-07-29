import ProductKhujoSearchResults from "@/components/product-khujo/ProductKhujoSearchResults";
import { fetchIp, fetchPseCategory } from "@/helper/api";
import ScrollToTop from "@/lib/ScrollToTop";

export async function generateMetadata({ params }) {
  const categorySlugs = category
    .filter(
      (item) =>
        item.id === 28620 ||
        item.id === 28621 ||
        item.id === 28628 ||
        item.id === 28621
    )
    .map((item) => item.slug);
  const category = category
    .filter((item) => item.id === 28619 || item.id === 28622)
    .map((item) => item.slug);

  return {
    title: `${cat?.name} | Product খুঁজো`,
    description:
      "The Ebitans product খুঁজো page makes it easy to find exactly what you're looking for in your online shopping journey. Whether you have a specific product in mind or are browsing different categories, our intuitive search features help you refine your results and find the best deals in Bangladesh.",
    openGraph: {
      images: [
        {
          url: cat?.banner,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

const ProductKhujoSearch = async ({ params }) => {
  const category = (await fetchPseCategory()) ?? [];

  return (
    <div className="relative z-[1]">
      <ScrollToTop />
      <ProductKhujoSearchResults params={params} category={category} />
    </div>
  );
};

export default ProductKhujoSearch;
