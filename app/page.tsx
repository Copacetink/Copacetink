const taiImages = [

  "/images/taitattoos/IMG_6454 (1).jpeg",

  "/images/taitattoos/IMG_6457.jpeg",

  "/images/taitattoos/IMG_6458.jpeg",

  "/images/taitattoos/IMG_6459.jpeg",

 "/images/taitattoos/IMG_6460 (1).jpeg",

  "/images/taitattoos/IMG_6461 (1).jpeg",

  "/images/taitattoos/IMG_6462 (1).jpeg",

  "/images/taitattoos/IMG_6464 (1).jpeg",

  "/images/taitattoos/IMG_6465 (1).jpeg",

  "/images/taitattoos/IMG_6466 (1).jpeg",

  "/images/taitattoos/IMG_6468 (1).jpeg",

  "/images/taitattoos/IMG_6469 (2).jpeg",

];



const saniImages = [

  "/images/sunny/IMG_6485.jpeg",

  "/images/sunny/IMG_6491.jpeg",

  "/images/sunny/IMG_6492.jpeg",

  "/images/sunny/IMG_6494.jpeg",

  "/images/sunny/IMG_6496.jpeg",

  "/images/sunny/IMG_6499.jpeg",

];


const bamImages = [

  "/images/bamcbk/IMG_6267.jpeg",
  
  

  

 

];


const galleryImages = [

  ...taiImages,

  ...saniImages,

  ...bamImages,

];

const getArtistImages = (name: string): string[] => {

  if (name === "Tai") return taiImages;

  if (name === "Sunny") return saniImages;

  if (name === "BamCBK") return bamImages;

  return [];

};
export default function Home() {

  return (

    <main className="min-h-screen bg-black text-white">



      


      {/* HERO */}

      <section className="relative overflow-hidden">

        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">

          <div className="text-xs uppercase tracking-[0.35em] text-white/60">

            TATTOOS / ART / FAMILY

          </div>



         <div className="relative inline-block">

  <h1 className="mt-6 text-6xl md:text-7xl font-semibold uppercase tracking-[0.1em]">

  COPACET

  <span className="ml-2 text-[0.8em] font-semibold tracking-[0.15em] align-baseline">

    INK

  </span>

</h1>



<span className="ml-2 text-[3em] font-semibold tracking-[0.15em] align-baseline">

  TATTOO

</span>

</div>


          <p className="mt-4 max-w-xl text-white/70">

            Premium custom tattoos • Black &amp; gray • Polynesian • Fine-line • DFW

          </p>



          <div className="mt-8 flex flex-wrap gap-3">

            <a

              href="#booking"

              className="rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black"

            >

              Book an Appointment

            </a>



            <a

              href="#gallery"

              className="rounded-full border border-white/25 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:border-white/60"

            >

              View Gallery

            </a>

          </div>



          <p className="mt-10 text-xs uppercase tracking-widest text-zinc-500">

            Tai · Sunny · BamCBK

          </p>

        </div>



        {/* big faint background word */}

       <div className="pointer-events-none absolute inset-x-0 -bottom-12 select-none text-center text-[2.5rem] font-black uppercase tracking-[0.25em] text-white/5 md:text-[6rem]">

  -TOKOUSO-

</div>

      </section>



      {/* ARTISTS */}

      <section id="artists" className="border-t border-white/10">

        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">

          <div className="mb-6">

            <div className="text-xs uppercase tracking-[0.35em] text-white/60">

              Choose an Artist

            </div>

            <div className="mt-2 text-3xl font-extrabold uppercase tracking-[0.12em]">

              Our Artists

            </div>

          </div>



          <div className="grid gap-5 md:grid-cols-3">

            {[

              { name: "Tai", role: "Resident / Artist", tags: ["Polynesian", "Black & Gray", "Script"] },

              { name: "Sunny", role: "Resident Artist", tags: ["Anime", "Black & Gray","fine Line", "Portraits"] },

              { name: "BamCBK", role: "Apprentice / Artist", tags: ["Polynesian", "Anime", "Black & Gray"] },

            ].map((a) => (

              <div key={a.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">

                <div className="text-xs uppercase tracking-[0.35em] text-white/60">{a.role}</div>

                <div className="mt-2 text-lg font-extrabold uppercase tracking-[0.18em]">{a.name}</div>
<div className="grid grid-cols-2 gap-3 mt-4">

  {getArtistImages(a.name).map((src) => (

    <img

      key={src}

      src={src}

      alt={`Tattoo by ${a.name}`}

      className="w-full rounded-lg"

    />

  ))}

</div>




{a.name === "Sunny" && (

  <div className="grid grid-cols-2 gap-3 mt-4">

    {saniImages.map((src) => (

      <img

        key={src}

        src={src}

        alt="Tattoos by Sunny"

        className="w-full rounded-lg"

      />

    ))}

  </div>

)}



{a.name === "BamCBK" && (

  <div className="grid grid-cols-2 gap-3 mt-4">

    {bamImages.map((src) => (

      <img

        key={src}

        src={src}

        alt="Tattoos by BamCBK"

        className="w-full rounded-lg"

      />

    ))}

  </div>

)}


                <div className="mt-3 flex flex-wrap gap-2">

                  {a.tags.map((t) => (

                    <span

                      key={t}

                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/75"

                    >

                      {t}

                    </span>

                  ))}

                </div>



                <a

                  href="#booking"

                  className="mt-5 inline-flex text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white"

                >

                  Book with {a.name} →

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* GALLERY */}

      <section id="gallery" className="border-t border-white/10 bg-[#0a0a0b]">

        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">

          <div className="mb-6">

            <div className="text-xs uppercase tracking-[0.35em] text-white/60">Our Gallery</div>

            <div className="mt-2 text-3xl font-extrabold uppercase tracking-[0.12em]">TATTOOS</div>

          </div>
<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

  {galleryImages.map((src) => (

  <div key={src} className="...">

    <img src={src} alt="Gallery" className="..." />

  </div>

))}

</div>


         
          <p className="mt-4 text-xs text-white/50">

            (We’ll drop real tattoo photos into the gallery next.)

          </p>

        </div>

      </section>



      {/* BOOKING */}

      <section id="booking" className="border-t border-white/10">

        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-12 md:py-20">

          <div className="md:col-span-5">

            <div className="text-xs uppercase tracking-[0.35em] text-white/60">Booking</div>

            <div className="mt-2 text-3xl font-extrabold uppercase tracking-[0.12em]">Book Now</div>



            <p className="mt-4 text-white/70">

              Send your idea + placement + size + reference photos. We’ll reply with availability and deposit details.

            </p>

          </div>



          <div className="md:col-span-7">

            <form className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <div className="grid gap-4 md:grid-cols-2">

                <input

                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/40"

                  placeholder="Full name"

                />

                <input

                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/40"

                  placeholder="Phone / Email"

                />

              </div>



              <input

                className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/40"

                placeholder="Tattoo idea (style, placement, size)"

              />



              <textarea

                className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none focus:border-white/40"

                placeholder="Reference links / extra details"

                rows={5}

              />



              <button

                type="button"

                className="mt-5 w-full rounded-full bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black"

              >

                Submit Request

              </button>



              <p className="mt-3 text-xs text-white/50">

                Next we’ll connect this to your real booking form (Google Form / Acuity / Square / etc.).

              </p>

            </form>

          </div>

        </div>

      </section>



      {/* FOOTER */}

      <footer className="border-t border-white/10 bg-black">

        <div className="mx-auto max-w-6xl px-5 py-10 text-xs text-white/60">

          © {new Date().getFullYear()} COPACETINK • DFW • By Appointment

        </div>

      </footer>

    </main>

  );

}

