import { SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });

  <div className="flex flex-wrap justify-items-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.name} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
}
export default async function HomePage() {
  
  return (
    <main className="">
      
    </main>
  );
};