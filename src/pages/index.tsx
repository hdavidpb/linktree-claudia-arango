import { adapterLinkTreeData } from "@/adapters/getLinkTreeData";
import { ILinkTreeData } from "@/interfaces/linktree-data.interface";
import { GetStaticProps } from "next";
import Image from "next/image";

export default function Home({ data }: { data: ILinkTreeData }) {
  return (
    <div
      style={{ backgroundImage: `url(${data.background})` }}
      className="w-full h-screen bg-pink-400 flex flex-col justify-start items-center gap-5 bg-no-repeat bg-center bg-cover"
    >
      <div className="flex flex-col justify-center items-center gap-2 mt-14 bg-[#ffffff59] w-full rounded-lg p-3 md:w-[640px]">
        <div className="flex flex-col justify-center items-center gap-4 w-full mb-3">
          <Image
            src={data.photo}
            alt="Claudia arango"
            width={110}
            height={110}
            priority={true}
            className="w-[110px] h-[110px] object-cover rounded-full shadow-2xl shadow-slate-100"
          />
          <div className="w-full flex flex-col justify-center items-cente">
            <h1 className="w-full text-xl font-semibold shadow-2xl text-center bg-[#ffffff66] p-1 rounded-sm">
              {data.title}
            </h1>
            <h2 className="w-full text-lg font-medium   shadow-2xl text-center bg-[#ffffff66] p-1 rounded-sm">
              {data.subtitle}
            </h2>
            {data.description && data.description !== "descrición" && (
              <p className="text-sm text-center w-[70%] italic bg-[#ffffff66] p-1 rounded-sm">
                {`❝${data.description}❞`}
              </p>
            )}
          </div>
        </div>
        {data.links.map((link) => (
          <a
            key={link.title!}
            href={link.href!}
            className=" cursor-pointer transition-all ease-in-out duration-500 w-full h-14 bg-white flex justify-center items-center rounded-lg hover:bg-transparent border-white border-2 p-4 shadow-md"
            target="_blank"
          >
            <Image
              src={link.image!}
              alt={link.title!}
              width={30}
              height={30}
              className="rounded-full"
            />
            <span className="flex-1 text-center font-semibold">
              {link.title!}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://script.google.com/macros/s/AKfycbyJ8cLw6CtpRc4nQA8fqnV1gTfdT_CC9KFsbcwChzIkYZN_QxgMcWm1oDB_L26vkNA/exec"
  )
    .then((res) => res.json())
    .then((response) => {
      const data = adapterLinkTreeData(response);
      return data;
    });

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};
