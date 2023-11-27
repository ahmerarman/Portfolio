import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {
        project: string
    }
}

export default async function project({params}: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return <div>
            <header className=" m-3 flex items-center justify-between">
                <h1 className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">
                    {project.name}
                </h1>
                <a href={project.url} title='View Project' target='_blank' rel='noopener noreferrer' className='bg-blue-700 rounded-lg text-white font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-600 hover:text-pink-100 transition'>
                    View Project
                </a>
            </header>

            <div className="m-2">
                <PortableText value={project.content}/>
            </div>

            <Image
                src={project.image}
                alt={project.name}
                width={1920}
                height={500}
                className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
            />
        </div>
}
