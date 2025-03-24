import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Carousel from "~/_components/carousel";
import Sidebar from "~/_components/sidebar";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images(){
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id),
  });
return(
  <div className="flex flex-wrap justify-items-center gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={image.name} />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  );
}
export default async function HomePage() {
  return (
    <main className="">
        <SignedOut>     
          <div  style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', textAlign: 'center'}}>PLEASE SIGN IN TO SEE THE BROCHURE </div> 
          <Carousel /> 
          <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#0000' }}>
          <p>© AUTODEPOT PHILIPPINES CORPORATION. 2025 ALL RIGHTS RESERVED</p>
        </footer>
        </SignedOut>
        <SignedIn>
          <Sidebar/>
        </SignedIn> 
    </main>
  );
};