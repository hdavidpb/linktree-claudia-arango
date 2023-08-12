export interface ILinkTreeData {
  photo: string;
  title: string;
  subtitle: string;
  description: string;
  background: string;
  links: ILink[];
}

export interface ILink {
  title?: string;
  href?: string;
  image?: string;
}
