import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between select-none">
      {/* Navbar */}
      <nav className="navbar max-lg:px-8 lg:px-16 2xl:px-36 fixed w-full">
        <div className="flex space-x-4 h-20 items-center max-sm:space-x-2">
          <Link href="/" className="py-1 pr-32 uppercase font-bold logo">
            <p>Benni.</p>
          </Link>
          <a href="/gallery" className="px-1 py-3 hover:text-gray-500">
            Gallery
          </a>
          <a href="/about" className="px-1 py-3 hover:text-gray-500">
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
            I’m a photographer & videographer. Self-taught & driven by passion.
          </p>
          <p className="italic my-5">
            Still learning. Still building. But always shooting.
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
          <p>
            I’ve worked with artists like R3HAB and KSHMR, and shot at major
            festivals like Ultra Europe.
          </p>
          <div className="galleryimg pt-18">
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-2.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-3.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-4.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-11.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-15.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-17.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-23.webp"
              width="500"
              height="0"
            />
            <Image
              alt="Artist synger på en scene"
              src="/benedicte-38.webp"
              width="500"
              height="0"
            />
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
      <div className="about flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-32 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-10">
        <div className="w-2/5 max-md:w-full max-md:pb-16">
          <Image
            className="h-auto max-w-full object-cover"
            src="/benedicte-5.webp"
            alt="Svane i sjøen"
            width="400"
            height="0"
          />
        </div>

        <div className="w-3/5 max-md:w-full max-md:pb-16 content-center">
          <h2>About me</h2>
          <div className="space-y-5">
          <p>
            I’m Benni — a 24-year-old photographer based in Oslo, Norway. I’m
            self-taught, camera-obsessed, and fully driven by the love I have
            for capturing real moments.
          </p>
          <p>
            My passion lies in music photography — festivals, concerts, behind
            the scenes, and everything in between.
          </p>
          <p>
            I also take on a wide range of creative projects, from galleries and
            restaurants to corporate events, fashion brands, and cultural
            institutions.
          </p>
          </div>
          
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
      <div
        id="contact"
        className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-10"
      >
        <div className="w-3/5 max-md:w-full max-md:pb-10">
          <h2>Want to work together?</h2>
        </div>

        <div className="w-3/5 max-md:w-full max-md:pb-5">
          <p>
            Got a project or idea in mind? I’d love to hear from you — let’s
            make something amazing together!
          </p>
          <div className="pt-6">
            {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
            <a href="email" href="mailto:benedicte.aasb@gmail.com">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
              Send me a message
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* -----------FOOTER------------ */}
      <footer className="footer flex max-md:flex-col py-18 max-lg:px-8 lg:px-20 2xl:px-36 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32 mt-32 bg-black ">
        <div className="w-3/5">
          <h2>Benni.</h2>
        </div>
        <div className="w-2/5 content-center">
          <a href="mailto:benedicte.aasb@gmail.com">Send me a message</a>
        </div>
        <div className="w-2/5 content-center">
          <a href="https://www.instagram.com/beneedictee/">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
