"use client";



import { useMemo, useState } from "react";



export default function BookingPage() {

  const [artist, setArtist] = useState("Tai");

  const [fullName, setFullName] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [placement, setPlacement] = useState("");

  const [description, setDescription] = useState("");

  const [budget, setBudget] = useState("");

  const [agreement, setAgreement] = useState(false);



  const mailtoHref = useMemo(() => {

    const subject = `Booking Request - ${artist} - ${fullName || "Client"}`;

    const bodyLines = [

      `Artist: ${artist}`,

      `Full Name: ${fullName}`,

      `Phone: ${phone}`,

      `Email: ${email}`,

      `Placement: ${placement}`,

      `Budget: ${budget}`,

      "",

      "Tattoo Description:",

      description,

      "",

      "Deposit Agreement:",

      agreement ? "Agreed" : "NOT agreed",

    ];



    const body = bodyLines.join("\n");

    const to = "jeanatuha@gmail.com"; // main inbox (locked by Tally earlier)

    return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  }, [artist, fullName, phone, email, placement, description, budget, agreement]);



  const canSubmit =

    fullName.trim() &&

    phone.trim() &&

    email.trim() &&

    description.trim() &&

    agreement;



  return (

    <main className="min-h-screen bg-black text-white px-6 py-10">

      <div className="mx-auto w-full max-w-2xl">

        <h1 className="text-3xl font-bold">Book an Appointment</h1>

        <p className="mt-2 text-white/80">

          Fill this out to request an appointment. A <b>$100 deposit</b> is required to lock in your date/time.

        </p>



        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">

          {/* Artist */}

          <label className="block text-sm font-semibold">Choose an Artist</label>

          <select

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={artist}

            onChange={(e) => setArtist(e.target.value)}

          >

            <option value="Tai">Tai</option>

            <option value="Sunny">Sunny</option>

            <option value="BamCBK">BamCBK</option>

          </select>



          {/* Full name */}

          <label className="mt-5 block text-sm font-semibold">Full Name</label>

          <input

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={fullName}

            onChange={(e) => setFullName(e.target.value)}

            placeholder="Your name"

          />



          {/* Phone */}

          <label className="mt-5 block text-sm font-semibold">Phone Number</label>

          <input

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={phone}

            onChange={(e) => setPhone(e.target.value)}

            placeholder="(555) 555-5555"

          />



          {/* Email */}

          <label className="mt-5 block text-sm font-semibold">Email</label>

          <input

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            placeholder="you@email.com"

          />



          {/* Placement */}

          <label className="mt-5 block text-sm font-semibold">Placement on Body</label>

          <input

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={placement}

            onChange={(e) => setPlacement(e.target.value)}

            placeholder="Forearm, shoulder, calf, etc."

          />



          {/* Budget */}

          <label className="mt-5 block text-sm font-semibold">Budget (optional)</label>

          <input

            className="mt-2 w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={budget}

            onChange={(e) => setBudget(e.target.value)}

            placeholder="$"

          />



          {/* Description */}

          <label className="mt-5 block text-sm font-semibold">Tattoo Description</label>

          <textarea

            className="mt-2 w-full min-h-[140px] rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none"

            value={description}

            onChange={(e) => setDescription(e.target.value)}

            placeholder="Describe the idea, style, size, reference details, etc."

          />



          {/* Deposit agreement */}

          <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">

            <label className="flex items-start gap-3">

              <input

                type="checkbox"

                className="mt-1"

                checked={agreement}

                onChange={(e) => setAgreement(e.target.checked)}

              />

              <span className="text-sm text-white/90">

                I understand a <b>$100 non-refundable deposit</b> is required to secure my appointment.

                The deposit goes toward the final price. Reschedules require <b>48 hours notice</b>.

              </span>

            </label>

          </div>



          {/* Submit */}

          <a

            href={canSubmit ? mailtoHref : undefined}

            onClick={(e) => {

              if (!canSubmit) e.preventDefault();

            }}

            className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-5 py-3 font-semibold

              ${canSubmit ? "bg-white text-black" : "bg-white/20 text-white/60 cursor-not-allowed"}`}

          >

            Request Appointment

          </a>



          {!canSubmit && (

            <p className="mt-3 text-xs text-white/60">

              Fill out Full Name, Phone, Email, Description, and agree to the deposit to enable submit.

            </p>

          )}

        </div>



        <p className="mt-6 text-sm text-white/70">

          Prefer texting? You can also message the shop after submitting.

        </p>

      </div>

    </main>

  );

}