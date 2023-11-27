import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react";

type Props = {
    params: {slug: string}
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">{page.title}</h1>
            <div className=" text-lg text-gray-700 mt-10"><PortableText value={page.content}/></div>
        </div>
    );
}