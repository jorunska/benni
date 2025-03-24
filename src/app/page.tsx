import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between select-none">
      {/* Navbar */}
      <nav className="navbar max-lg:px-8 lg:px-16 2xl:px-36 fixed w-full">
        <div className="flex space-x-4 h-20 items-center max-sm:space-x-2">
          <Link href="/" className="py-1 pr-32 uppercase font-bold">
            <p>Benni.</p>
          </Link>
          <a href="/gallery" className="px-1 py-3 hover:text-gray-500">
            Gallery
          </a>
          <a href="/about-me" className="px-1 py-3 hover:text-gray-500">
            About me
          </a>
          <a href="#contact" className="px-1 py-3 hover:text-gray-500">
            Contact
          </a>
        </div>
      </nav>

      {/* ---------------- NEW SECTION ------------------ */}
      {/* Header */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-3/5 max-md:w-full max-md:pb-16">
          <h1>Hi, I&apos;m Benni.</h1>
          <p className="text-2xl max-md:text-xl leading-normal my-5 lg:pr-25">
            I am a photographer.
          </p>
          <div>
            <a href="#contact">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Contact me
              </button>
            </a>
          </div>
        </div>
        <div className="w-3/5 max-md:w-full">
          <Image
            alt="Artist synger på en scene"
            src="/dagny-foto.jpg"
            width="500"
            height="0"
          />
        </div>
      </div>

      {/* --------------- NEW SECTION ------------- */}
      {/* Gallery */}
      <div>
        <div className="max-lg:px-8 lg:px-20 2xl:px-36 mt-26 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
          <h2>Gallery</h2>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-3 pt-18">
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="To naust som ligger ved vannkanten, med fjell i bakgrunn"
                  width="500"
                  height="0"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="Bålpanne med fjell i bakgrunn"
                  width="500"
                  height="0"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="Svane i sjøen"
                  width="500"
                  height="0"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="Blomst med fjell og sjø i bakgrunn"
                  width="500"
                  height="0"
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="Svane i sjøen"
                  width="500"
                  height="0"
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover"
                  src="/dagny-foto.jpg"
                  alt="Blomst med fjell og sjø i bakgrunn"
                  width="500"
                  height="0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-12">
          <a href="/gallery">
            <button className="text-white py-2 px-4 hover:bg-black my-5">
              See more
            </button>
          </a>
        </div>
      </div>

      {/* ------------- NEW SECTION ----------- */}
      {/* ABOUT */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-32 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-2/5 max-md:w-full max-md:pb-16">
          <Image
            className="h-auto max-w-full rounded-lg object-cover"
            src="/dagny-foto.jpg"
            alt="Svane i sjøen"
            width="400"
            height="0"
          />
        </div>

        <div className="w-3/5 max-md:w-full max-md:pb-16 content-center">
          <h2>About me</h2>
          <p className="pb-3">
            Our passion for photography drives our commitment to capturing
            life&apos;s most precious moments with unrivaled expertise and
            attention to detail.
          </p>
          <p>
            We blend art and technology to provide our clients with
            unforgettable images that tell their unique stories.
          </p>
          <div className="pt-6">
            <a href="/gallery">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Read more
              </button>
            </a>
          </div>
        </div>
      </div>


{/* -------------- NEW SECTION ---------------- */}
{/* Contact */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-3/5 max-md:w-full max-md:pb-16">
          <h2>Want to work together?</h2>
        </div>

        <div className="w-3/5 max-md:w-full max-md:pb-16">
          <p>Got an interesting project you want together on? Contact me to discuss</p>
          <div className="pt-8 font-bold"><a className="email" href="mailto">benni@contact.no</a></div>
        </div>
      </div>

      <footer className="footer flex max-md:flex-col py-18 max-lg:px-8 lg:px-20 2xl:px-36 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32 mt-32 bg-black ">
        <div className="w-3/5">
          <h2>Benni.</h2>
          <p>I am a photographer</p>
        </div>
        <div className="w-2/5 content-center">
          <a>benni@contact.no</a>
        </div>
        <div className="w-2/5 content-center">
        <a>Instagram</a></div>

      </footer>
    </main>
  );
}
