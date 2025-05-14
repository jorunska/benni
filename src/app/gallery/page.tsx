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

      {/* --------------- NEW SECTION ------------- */}
      {/* Gallery */}
      <div>
        <div className="max-lg:px-8 lg:px-20 2xl:px-36 mt-26 md:space-x-20 lg:space-x-40 xl:space-x-32 max-md:mt-32">
          <h2>Gallery</h2>
          <div className="galleryimg pt-18">
          <Image
              alt="An artist in an orange outfit standing on stage with raised hands"
              src="/benedicte9.webp"
              width="500"
              height="0"
            />
            <Image
              alt="A DJ raises his hands and looks out over the crowd, with a Ferris wheel behind him"
              src="/benedicte3.webp"
              width="500"
              height="0"
            />
            <Image
              alt=" A DJ performing behind a DJ deck, with the crowd visible in the background"
              src="/benedicte10.webp"
              width="500"
              height="0"
            />
            <Image
              alt="An artist stands on stage, holding a microphone"
              src="/benedicte6.webp"
              width="500"
              height="0"
            />
            <Image
              alt="A woman dances on stage with a Ferris wheel glowing in the background"
              src="/benedicte2.webp"
              width="500"
              height="0"
            />
            <Image
              alt="A man in a white shirt holding his hands up, posing for a portrait"
              src="/benedicte7.webp"
              width="500"
              height="0"
            />
            <Image
              alt="An artist smiling on stage while holding a microphone"
              src="/benedicte8.webp"
              width="500"
              height="0"
            />
            <Image
              alt="A DJ raises his hands, facing the crowd"
              src="/benedicte5.webp"
              width="500"
              height="0"
            />
            <Image
              alt="An artist sings into a microphone during a live performance"
              src="/benedicte4.webp"
              width="500"
              height="0"
            />
            <Image
              alt="An artist in a pink hoodie singing into a microphone, with the audience in the background"
              src="/benedicte11.webp"
              width="500"
              height="0"
            />
          </div>
        </div>
      </div>

      {/* -------------- NEW SECTION ---------------- */}
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
            <a href="mailto:benedicte.aasb@gmail.com">
              <button className="text-white py-2 px-4 hover:bg-black my-5">
                Send me a message
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* ----------FOOTER-------------- */}
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
