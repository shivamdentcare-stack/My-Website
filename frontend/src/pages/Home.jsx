import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, CheckCircle2, Sparkles, Award, Heart, ShieldCheck, Instagram, Heart as HeartIcon } from "lucide-react";
import { clinicInfo, doctors, services, technologies, testimonials, videos, stats, instagramPosts } from "../mock";

const Home = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[88vh]">
          <div className="flex items-center px-6 md:px-16 lg:px-20 py-20 bg-white order-2 md:order-1">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-6">
                <span className="h-px w-8 bg-[#1f3a6e]" /> Welcome to SSDC
              </div>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#0b1424] leading-[1.05] tracking-tight">
                {clinicInfo.hero}
                <br />
                <span className="italic text-[#1f3a6e]">{clinicInfo.heroAccent}</span>
              </h1>
              <p className="mt-8 text-base md:text-lg text-slate-600 leading-relaxed">
                {clinicInfo.legacy}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 bg-[#0b1424] text-white px-7 py-3.5 rounded-full hover:bg-[#1f3a6e] transition-colors"
                >
                  Book an Appointment
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${clinicInfo.phone}`}
                  className="inline-flex items-center gap-2 border border-[#0b1424]/20 text-[#0b1424] px-7 py-3.5 rounded-full hover:border-[#0b1424] transition-colors"
                >
                  <Phone size={16} /> Call Clinic
                </a>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2 h-[50vh] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?auto=format&fit=crop&w=1600&q=80"
              alt="Beautiful smile"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent md:from-white/60" />
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <section className="py-20 md:py-24 px-6 md:px-12 bg-[#f7f9fc] border-y border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-[#1f3a6e] leading-tight">
            {clinicInfo.tagline}
            <br />
            <span className="text-[#0b1424]">{clinicInfo.subTagline}</span>
          </h2>
          <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            {clinicInfo.legacy}
          </p>
        </div>
      </section>

      {/* DOCTORS */}
      {doctors.filter((d) => d.type === "in-house").map((doc, idx) => (
        <section
          key={doc.id}
          className={`py-20 md:py-28 px-6 md:px-12 ${idx % 2 === 0 ? "bg-white" : "bg-[#f7f9fc]"}`}
        >
          <div
            className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
              idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1f3a6e]/5 rounded-2xl rotate-2" />
              <img
                src={doc.image}
                alt={doc.name}
                style={{ objectPosition: doc.imagePosition || "center" }}
                className="relative w-full h-[480px] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                Meet our Specialist
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
                {doc.name}
              </h3>
              <p className="mt-3 text-[#1f3a6e] font-medium">{doc.qualification}</p>
              <p className="text-sm text-slate-500 mt-1">{doc.experience}</p>
              <p className="mt-6 text-slate-600 leading-relaxed">{doc.bio}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {doc.specialties.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-full bg-[#1f3a6e]/10 text-[#1f3a6e]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* STATS */}
      <section className="bg-[#0b1424] text-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl md:text-5xl text-[#7fb3ff]">{s.value}</div>
              <div className="mt-2 text-sm text-white/70 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Our Services
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
              Everything you need.
              <br />
              <span className="italic text-[#1f3a6e]">Nothing you don't.</span>
            </h2>
            <p className="mt-6 text-slate-600">
              Your smile is unique — and so are our services. We offer best-in-class customised
              treatment plans tailored to your needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-[#0b1424] leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{service.short}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#1f3a6e] font-medium">
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-14">
            <div>
              <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
                Technology
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
                Certified Advanced Technology for the Best Care for You
              </h2>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1626878880028-0438b1403b3f?auto=format&fit=crop&w=1200&q=80"
                alt="Dental technology"
                className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {technologies.map((t) => (
              <div
                key={t.title}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-[#1f3a6e]/30 hover:shadow-md transition-all"
              >
                <div className="h-10 w-10 rounded-lg bg-[#1f3a6e]/10 flex items-center justify-center mb-4">
                  <Sparkles size={18} className="text-[#1f3a6e]" />
                </div>
                <h4 className="font-serif text-lg text-[#0b1424]">{t.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Why Choose SSDC
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424]">
              Care that's gentle, expert and personal
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Award-winning Care", desc: "Recognised expertise in implants & smile design." },
              { icon: ShieldCheck, title: "Sterile & Safe", desc: "Hospital-grade sterilisation for every procedure." },
              { icon: Heart, title: "Painless Dentistry", desc: "Modern anesthesia and gentle techniques." },
              { icon: CheckCircle2, title: "Transparent Pricing", desc: "Detailed treatment plans, no hidden costs." },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-slate-200 hover:border-[#1f3a6e]/30 hover:shadow-md transition-all"
              >
                <div className="h-14 w-14 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={22} className="text-[#1f3a6e]" />
                </div>
                <h4 className="font-serif text-lg text-[#0b1424]">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              Real Patients. Real Stories
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424]">
              Our patients, and their smiles speak for themselves
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-2.5 shadow-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-[#0b1424]">4.9</span>
              <span className="text-sm text-slate-500">based on 73+ patient reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{t.quote}</p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <div className="font-medium text-[#0b1424]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href="https://www.google.com/maps/search/Shivam+Speciality+Dental+Care+Vapi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-slate-200 hover:border-[#1f3a6e] hover:shadow-md text-[#0b1424] px-7 py-3.5 rounded-full transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
                <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
                <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
                <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7C13.42 14.62 18.27 10.75 24 10.75z"/>
              </svg>
              Read all reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-[#1f3a6e] uppercase mb-4">
              <Instagram size={14} /> Follow Us
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0b1424] leading-tight">
              <span className="italic text-[#1f3a6e]">@ssdcvapi</span> on Instagram
            </h2>
            <p className="mt-4 text-slate-600">
              Smiles, stories and behind-the-scenes from our clinic.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {instagramPosts.map((post) => (
              <a
                key={post.id}
                href="https://www.instagram.com/ssdcvapi/"
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-slate-200"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0b1424]/0 group-hover:bg-[#0b1424]/70 transition-colors duration-300 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 px-4">
                  <Instagram size={26} className="mb-3" />
                  <p className="text-xs md:text-sm text-center leading-snug line-clamp-3">
                    {post.caption}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-white/90">
                    <HeartIcon size={12} className="fill-white" />
                    {post.likes}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/ssdcvapi/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#0b1424] text-white px-7 py-3.5 rounded-full hover:bg-[#1f3a6e] transition-colors"
            >
              <Instagram size={16} /> Follow @ssdcvapi
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-[#0b1424] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl leading-tight">
            Ready to start your smile journey?
          </h2>
          <p className="mt-5 text-white/70">
            Book a consultation today — we'll design a treatment plan tailored just for you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-white text-[#0b1424] px-8 py-4 rounded-full hover:bg-[#7fb3ff] transition-colors"
          >
            Book Appointment <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
