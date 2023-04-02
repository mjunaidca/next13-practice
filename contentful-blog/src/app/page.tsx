import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BlogData = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_DELIVERY_API}&content_type=blogstep02`
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
    <div>
      <h1>Blog Posts</h1>
      {blogposts.items.map((item: any) => (
        <div key={item.fields.title}>
          <div> {item.fields.title} </div>
          <div> {documentToReactComponents(item.fields.description)} </div>

          <div>
            {" "}
            {blogposts.includes.Asset.map((a: any) => (
              <div>
                {item.fields.img && item.fields.img.sys.id === a.sys.id ? (
                  <Image
                    src={"https:" + a.fields.file.url}
                    alt="Author"
                    width="100"
                    height="100"
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))}{" "}
          </div>

          <div>
            {blogposts.includes.Entry.map((a: any) => (
              <div key={a.sys.id}>
                {item.fields.creator && item.fields.creator.sys.id == a.sys.id ? (
                  <div>Author: {a.fields.name}</div>
                ) : (
                  <div></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
