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

      {/* ------------- NEW SECTION ----------- */}
      {/* Header */}
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
          <h1>About me</h1>
          <div className="space-y-5">
            <p>
              I’m Benni — a 24-year-old photographer based in Oslo, Norway. I’m
              self-taught, camera-obsessed, and fully driven by the love I have
              for capturing real moments.
            </p>
            <p>
              My passion lies in music photography — festivals, concerts, behind
              the scenes, and everything in between. I’ve had the chance to work
              with artists like R3HAB and KSHMR, and photograph some of the
              biggest festivals in Norway, as well as Ultra Europe in Croatia.
            </p>
            <p>
              I also take on a wide range of creative projects, from galleries
              and restaurants to corporate events, fashion brands, and cultural
              institutions.
            </p>
          </div>

          <div className="pt-6">
            <a href="#contact">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ------------- NEW SECTION ----------- */}
      {/* Extra section */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-32 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-3/5 max-md:w-full max-md:pb-16 content-center">
          <div className="space-y-5">
            <p className="pb-3">
              My style is raw, honest, and documentary-driven. I aim to freeze
              memories as they truly felt — unfiltered and full of energy. I
              believe that’s where the magic is.
            </p>
            <p>
              I’m known for being easy to work with — always smiling, flexible,
              and professional. I thrive in fast-paced environments, adapt
              quickly, and respect every client’s vision. Whether it’s a packed
              show or a quiet shoot, I bring the same focus and passion.
            </p>
          </div>

          <div className="pt-6">
            <a href="/gallery">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                See my work
              </button>
            </a>
          </div>
        </div>
        <div className="w-2/5 max-md:w-full max-md:pb-16">
          <Image
            className="h-auto max-w-full rounded-lg object-cover"
            src="/dagny-foto.jpg"
            alt="Svane i sjøen"
            width="400"
            height="0"
          />
        </div>
      </div>

      {/* ------------- NEW SECTION ----------- */}
      {/* Extra section */}
      <div className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-32 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
        <div className="w-2/5 max-md:w-full max-md:pb-16">
          <Image
            className="h-auto max-w-full object-cover"
            src="/dagny-foto.jpg"
            alt="Svane i sjøen"
            width="400"
            height="0"
          />
        </div>
        <div className="w-3/5 max-md:w-full max-md:pb-16 content-center">
          <div className="space-y-5">
            <p className="pb-3">
              But there’s something even deeper behind the lens. I do this for
              my older brother, who passed away from cancer in 2020. He gave me
              my first real camera and believed in my eye long before I did. He
              was my best friend, and he’s still the reason I pour everything
              into this craft. Every photo I take is for him.
            </p>
            <p>
              I’m always looking for the next challenge — especially
              internationally. I’m open for tours, collaborations, and creative
              projects around the world.
            </p>
            <p>Let’s create something that means something.</p>
          </div>
          <div className="pt-6">
            <a href="#contact">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* -------------- NEW SECTION ---------------- */}
      {/* Contact */}
      {/* Contact */}
      <div
        id="contact"
        className="flex max-md:flex-col max-lg:px-8 lg:px-20 2xl:px-36 mt-48 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32"
      >
        <div className="w-3/5 max-md:w-full max-md:pb-16">
          <h2>Want to work together?</h2>
        </div>

        <div className="w-3/5 max-md:w-full max-md:pb-16">
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

      {/* ---------------FOOTER-------------- */}
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
