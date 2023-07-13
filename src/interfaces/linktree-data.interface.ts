export interface ILinkTreeData {
  title: string;
  subtitle: string;
  description: string;
  links: ILink[];
}

export interface ILink {
  title?: string;
  href?: string;
  image?: string;
}
