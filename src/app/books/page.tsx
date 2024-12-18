import Link from "next/link";
import Image from "next/image";


type Book = {
  id: string; 
  name: string;
  type: string;
  available: true
};


export default async function Api() {
  const url = await fetch("https://simple-books-api.glitch.me/books");
  const response: Book[] = await url.json(); 

  console.log(response); 

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center text-[#393280] py-10">
        Books List
      </h1>
  
    <div className="flex flex-row flex-wrap gap-12 justify-center items-center lg:w-auto sm:grid-cols-1 md:grid-cols-2 py-40 bg-[#FCECEC]">
      {response.slice(0, 12).map((book) => (
        <div
          key={book.id}
          className="rounded-lg shadow-md bg-white w-[300px] h-[400px] px-6 py-8"
        >
          <Link href={`/books/${book.id}`}>
            <div className="py-5 px-5">
              <Image
                src={"/leather-book.png"} // Replace with dynamic book cover if available
                alt={`Cover of ${book.name}`}
                width={270}
                height={350}
                className="rounded-lg shadow-md hover:scale-110"
              />
              <div>
                <h2 className="text-2xl font-bold mt-6 text-center text-[#393280]">
                  {book.name}
                </h2>
                <p className="text-lg text-center text-[#888888] mt-1">
                  {book.type}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}
