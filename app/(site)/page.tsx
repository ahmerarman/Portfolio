import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
    const projects = await getProjects();

    return (

      <div>

        <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
          {/* Image on the right */}
          <div className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
            <div className="rounded-full overflow-hidden bg-transparent">
              <Image
                src="/Me.webp"
                alt="My Image"
                width={400}
                height={300}
                className="max-w-screen-md h-96"
              />
            </div>
          </div>

          {/* Text on the left */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-2">
              Hi, I am{' '}
              <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-300 bg-clip-text text-transparent">
                Ahmer Arman
              </span>
              !
            </h1>
            <p className="text-lg text-gray-700">Hi, I am a passionate and versatile full-stack web developer with a diverse skill set that spans various technologies and platforms. My expertise lies in crafting dynamic and engaging web experiences, and I specialize in the following technologies: <strong>WordPress, Shopify, HTML & CSS, JavaScript & TypeScript, Tailwind CSS, Next.js & React.js.</strong> Whether it is transforming ideas into code, optimizing user interfaces, or delving into the intricacies of e-commerce, I thrive on creating digital solutions that leave a lasting impression. Let us collaborate to bring your web projects to life.</p>
          </div>
        </div>

        <div>
          <h2 className=" mt-10 font-bold text-gray-700 text-3xl">
              My Projects
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project)=>(
            <Link 
              href={`/projects/${project.slug}`}
              key={project._id} 
              className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
            >
              {
                project.image && (
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={750}
                    height={300}
                    className=" object-cover rounded-lg border border-gray-500">
                  </Image>
                )
              }
              <div className=" mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}

        </div>
      </div>
    )
}
