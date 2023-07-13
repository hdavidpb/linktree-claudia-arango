import { ILink, ILinkTreeData } from "@/interfaces/linktree-data.interface";
import { LinkTreeResponse } from "@/interfaces/linktree-response.interface";

export const adapterLinkTreeData = (response: LinkTreeResponse) => {
  const [_, ...rest] = response.content;

  let links: ILink[] = [];
  let link: ILink = {};

  rest.forEach((data) => {
    data.forEach((res, idx) => {
      if (idx === 0) {
        link.title = res;
      }
      if (idx === 1) {
        link.href = res;
      }
      if (idx === 2) {
        link.image = res;
      }
    });
    links.push(link);
    link = {};
  });

  const data: ILinkTreeData = {
    title: response.content[0][0],
    subtitle: response.content[0][1],
    description: response.content[0][2] ?? "",
    photo: response.content[0][3] ?? "/claudia1.jpg",
    links,
  };

  return data;
};
