import Image from "next/image";

type tParams = Promise<{
  id: string[];
}>;

export default async function Books({ params }: { params: tParams }) {
//const id = (await params).id as unknown as string;

  return (
    <>
 <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap bg-[#FCECEC]">
      <Image
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 pt-4 object-cover object-center rounded "
        src="/img2.png"
        width={400}
        height={400}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-4 lg:mt-0">
        <h2 className="text-6xl font-bold font-sans text-[#ED553B] text-center">
         {(await params).id}
        </h2>
        <h1 className="text-[#393280] text-3xl title-font font-medium py-4">
          This is Dynamic Route Content
        </h1>
       
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY.fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        
          <button className="flex mt-6 items-center pb-5 font-serif font-semibold text- mb-5 text-center text-[#393280] rounded-lg underline px-4 py-2">
            READ More
          </button>
          
        </div>
       
      </div>
    </div>
</section>



    </>
  );
}

// google books api
// import Image from "next/image";

// type tParams = Promise<{ key: string }>;

// export default async function SingleProduct({ params }: { params: tParams }) {
//   const key = (await params).key as unknown as string;
//   const data = await fetch("https://openlibrary.org/subjects/fiction.json?limit=16").then((res) => res.json()); // Replace with your API endpoint

//   const books = data.works || [];
//   const book = books.find((book) => book.key === key);

//   if (!book) {
//     return <div>Book not found</div>;
//   }
//   return (
//     <div className="pt-20 w-full">
//       <div className="max-w-screen-md mx-auto py-20 px-10">
//         <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold">
//           {book.title}
//         </h1>
//         <div className="my-6 text-slate-600 flex flex-col sm:flex-row gap-6">
//           <div className="flex gap-2">
//             <span>{book.authors?.[0]?.name || "Unknown Author"}</span>
//           </div>
//           <div className="flex gap-2">
//             <span>11/3/24</span> {/* Replace with dynamic publication date if available */}
//           </div>
//           <div className="flex gap-2">
//             <span>4 min read</span>
//           </div>
//         </div>
//         <Image
//           src={book.cover?.large || "/placeholder.png"} // Replace with book cover if available
//           alt={book.title}
//           height={2000}
//           loading="lazy"
//           width={2000}
//           objectFit="cover"
//           objectPosition="center"
//           className="w-full rounded-lg object-cover my-4"
//         />
//         <p className="text-2xl leading-relaxed py-10">{book.description || "No description available."}</p>
//       </div>
//     </div>
//   );
// }
