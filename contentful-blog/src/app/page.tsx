import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogData = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=blogstep02`,
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Error in getting Blog Posts from Contentdul");
  }
  const data = await res.json();
  return data;
};

export default async function Home() {
  const blogposts = await BlogData();
  console.log(blogposts);

  return (
    <div className="flex min-h-screen h-full flex-col justify-center items-center bg-gray-800">
      <h1 className=" pt-10 pb-6 text-3xl md:text-4xl font-bold text-white">
        NextJS13 + Contentful
      </h1>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {blogposts.items.map((item: any) => (
          <div
            key={item.fields.title}
            className="flex flex-col max-w-xs gap-8 bg-white shadow-lg hover:scale-105 duration-500  p-2 rounded-3xl m-6 pb-4 "
          >
            <div>
              {" "}
              {blogposts.includes.Asset.map((a: any) => (
                <div className="">
                  {item.fields.img && item.fields.img.sys.id === a.sys.id ? (
                    <div className="w-full h-32 object-cover ">
                      <Image
                        src={"https:" + a.fields.file.url}
                        alt="Author"
                        width="350"
                        height="450"
                        className="w-full h-32 object-cover rounded-xl"
                      />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}{" "}
            </div>
            <div className="mt-auto flex flex-col gap-3  px-3">
              {" "}
              <div className="font-bold text-2xl">{item.fields.title}</div>
              <div className="text-gray-600 text-base">
                {documentToReactComponents(item.fields.description)}{" "}
              </div>
            </div>

            <div className="text-gray-800 text-base font-semibold  px-3">
              {blogposts.includes.Entry.map((a: any) => (
                <div key={a.sys.id}>
                  {item.fields.creator &&
                  item.fields.creator.sys.id == a.sys.id ? (
                    <div>
                      <div>Author: {a.fields.name}</div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
