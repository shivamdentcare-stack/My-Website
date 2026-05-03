import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search } from "lucide-react";
import { clinicInfo, navItems } from "../mock";

const ToothLogo = ({ className = "h-9 w-9" }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M32 6c-7 0-13 3-17 3-3 0-5-1-5 4 0 8 4 13 6 22 1 5 1 11 3 16 1 4 4 6 6 6 3 0 4-3 5-7 1-5 1-9 2-9s1 4 2 9c1 4 2 7 5 7 2 0 5-2 6-6 2-5 2-11 3-16 2-9 6-14 6-22 0-5-2-4-5-4-4 0-10-3-17-3z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
  </svg>
);

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0b1424] text-white flex items-center justify-between px-4 h-16 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <ToothLogo className="h-7 w-7 text-[#7fb3ff]" />
          <span className="font-serif text-lg leading-tight">
            Shivam <span className="block text-xs tracking-widest text-white/70">DENTAL CARE</span>
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-screen w-72 bg-[#0b1424] text-white border-r border-white/10 transform transition-transform duration-300 ease-out md:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto pt-8 pb-6 px-7">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex flex-col items-start gap-3 mb-12 group"
          >
            <ToothLogo className="h-12 w-12 text-[#7fb3ff] group-hover:text-white transition-colors" />
            <div>
              <div className="font-serif text-2xl leading-tight tracking-wide">Shivam</div>
              <div className="text-[11px] tracking-[0.3em] text-white/60 mt-1">
                SPECIALITY DENTAL CARE
              </div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`text-[15px] py-2.5 px-1 border-l-2 pl-4 transition-all duration-200 hover:text-[#7fb3ff] hover:border-[#7fb3ff] ${
                  isActive(item.path)
                    ? "text-[#7fb3ff] border-[#7fb3ff] font-medium"
                    : "text-white/85 border-transparent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pt-10">
            <div className="text-xs text-white/50 leading-relaxed">
              <div className="mb-2 text-white/70">Visit us</div>
              <div>{clinicInfo.address}</div>
            </div>
            <button className="mt-6 flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors">
              <Search size={14} />
              Search this site
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-black/60 z-20"
        />
      )}
    </>
  );
};

export default Sidebar;
