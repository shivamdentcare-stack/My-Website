import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check, ChevronLeft } from "lucide-react";
import { services } from "../mock";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="font-serif text-3xl text-[#0b1424]">Service not found</h2>
        <Link to="/" className="mt-4 inline-block text-[#1f3a6e] underline">
          Back to home
        </Link>
      </div>
    );
  }

  const related = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div>
      <section className="relative h-[55vh] md:h-[60vh] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1424]/85 via-[#0b1424]/60 to-transparent" />
        <div className="relative h-full flex items-center px-6 md:px-12">
          <div className="max-w-3xl text-white">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white mb-6"
            >
              <ChevronLeft size={16} /> Back to home
            </Link>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight">{service.title}</h1>
            <p className="mt-5 text-lg text-white/85 max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-3xl text-[#0b1424] mb-6">What's included</h2>
            <ul className="space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-[#1f3a6e]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#1f3a6e]" />
                  </div>
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#f7f9fc] p-8 rounded-2xl border border-slate-200">
            <h3 className="font-serif text-2xl text-[#0b1424]">Book a Consultation</h3>
            <p className="mt-3 text-slate-600 text-sm">
              Talk to our specialists about {service.title.toLowerCase()} and get a personalised
              treatment plan.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#0b1424] text-white px-6 py-3 rounded-full hover:bg-[#1f3a6e] transition-colors"
            >
              Book Appointment <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 bg-[#f7f9fc]">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl text-[#0b1424] mb-8">Other services</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {related.map((s) => (
              <Link
                key={s.id}
                to={`/service/${s.id}`}
                className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-serif text-lg text-[#0b1424]">{s.title}</div>
                  <p className="text-sm text-slate-600 mt-1">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
