import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";

//const client = createClient(config);

export async function getProjects(): Promise <Project[]> {
/*  const client = createClient({
    projectId: "m2egel00",
    dataset: "production",
    apiVersion: "2023-11-17",
    useCdn: false,
  });*/
  const client = createClient(config);
  try {
    // Use await to wait for the fetch operation to complete
    return await client.fetch(groq`
      *[_type == 'project'] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        alt,
      }
    `);
  } catch (error) {
    console.log("Throws an error while reloading." + error);
    throw error; // Propagate the error to the calling code
  }
}

export async function getProject(slug: string): Promise <Project> {
/*  const client = createClient({
    projectId: "m2egel00",
    dataset: "production",
    apiVersion: "2023-11-17",
    useCdn: false,
  });*/
  const client = createClient(config);
  try {
    // Use await to wait for the fetch operation to complete
    return await client.fetch(groq`
      *[_type == 'project' && slug.current == $slug][0] {
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,
        alt,
      }`,
      { slug }
    );
  } catch (error) {
    console.log("Throws an error while reloading." + error);
    throw error; // Propagate the error to the calling code
  }
}

export async function getPages(): Promise <Page[]>{
  const client = createClient(config);
  try{
    return await client.fetch(groq`
      *[_type == 'page']{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
      }`
    );
  }catch(error){
    console.log("Throws an error while reloading." + error);
    throw error;
  }
}

export async function getPage(slug: string): Promise <Page>{
  const client = createClient(config);
  try{
    return await client.fetch(groq`
      *[_type == 'page' && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,
      }`,
      { slug },
    );
  }catch(error){
    console.log("Throws an error while reloading page." + error);
    throw error;
  }
}