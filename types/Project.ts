import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: string;
    name: string;
    slug: string;
    image: string;
    url: string;
    alt: string;
    content: PortableTextBlock[];
}