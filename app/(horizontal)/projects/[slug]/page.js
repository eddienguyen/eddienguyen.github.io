import projects from "public/data/projects.json";

import UIProjectDetail from "./UIProjectDetail";
/**
 *
 * @param {Object} props
 * @param {Promise} parent - A promise of the resolved metadata from parent route segments.
 * @returns
 */
export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const slug = params.slug;

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: slug,
    openGraph: {
      // images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

/**
 * to statically generate routes at build time instead of on-demand at request time.
 * Example Route /product/[id] - generateStaticParams Return Type: { id: string }[]
 * Example Route /products/[category]/[product]	- generateStaticParams Return Type:{ category: string, product: string }[]
 * @returns list of `(object)params` to populate the [slug] dynamic segment where each object represents the populated dynamic segments of a single route.
 */
export async function generateStaticParams() {
  const allProjects = projects?.data || [];
  return allProjects.map((project) => ({
    slug: project.slug,
  }));
}

async function getDataBySlug(slug = "") {
  const allProjects = projects?.data || [];
  const target = allProjects.find((project) => project.slug === slug);

  // const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!target) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  // return target.json();
  return target;
}

/**
 * Multiple versions of this page will be statically generated
 * using the `params` returned by `generateStaticParams`
 * @param {Object} props
 * @returns
 */
export default async function ProjectDetail({
  params: { slug = "" },
  ...props
}) {
  const projectData = await getDataBySlug(slug);
  return (
    <main className="project-detail-page">
      <UIProjectDetail data={projectData} slug={slug} />
    </main>
  );
}
