import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="text-center py-8 bg-gray-800 text-white">
        <h1 className="text-4xl font-bold">Shahbaz Nawaz</h1>
        <p className="mt-4">Discover My Work and Projects</p>
      </header>
      <section id="projects" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project */}
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/projects/next-JS-framework.png"
                alt="Build My Portfolio"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold">Build My Portfolio</h3>
                <p className="mt-2">
                  I have build my portfolio and use my skills to create it with
                  next.js
                </p>
              </div>
            </div>
            {/* Repeat for other projects */}
          </div>
        </div>
      </section>
    </main>
  );
}
