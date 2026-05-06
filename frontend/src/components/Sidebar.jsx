import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { clinicInfo, navItems } from "../mock";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_dental-care-hub-84/artifacts/dew5mkih_SSDC%20Logo%20png%20%281%29.png";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState({});
  const location = useLocation();

  const isActive = (path) =>
    path === "/" ? location.pathname === "/" : location.pathname === path;

  const isParentActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.children) {
      return item.children.some((c) => location.pathname === c.path);
    }
    return false;
  };

  // Auto-expand the parent group whose child or self matches the current route
  useEffect(() => {
    const next = {};
    navItems.forEach((item) => {
      if (item.children && isParentActive(item)) {
        next[item.id] = true;
      }
    });
    setExpanded((prev) => ({ ...prev, ...next }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggle = (id) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[#0b1424] text-white flex items-center justify-between px-4 h-16 border-b border-white/10">
        <Link to="/" className="flex items-center gap-2" onClick={closeMobile}>
          <img src={LOGO_URL} alt="SSDC" className="h-10 w-auto object-contain" />
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
            onClick={closeMobile}
            className="flex flex-col items-center gap-3 mb-8 group"
          >
            <img
              src={LOGO_URL}
              alt="Shivam Speciality Dental Care"
              className="w-44 h-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Nav */}
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => {
              const hasChildren = !!item.children;
              const open = expanded[item.id];
              const parentActive = isParentActive(item);

              if (!hasChildren) {
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={closeMobile}
                    className={`text-[14px] py-2.5 px-1 border-l-2 pl-4 transition-all duration-200 hover:text-[#7fb3ff] hover:border-[#7fb3ff] ${
                      isActive(item.path)
                        ? "text-[#7fb3ff] border-[#7fb3ff] font-medium"
                        : "text-white/85 border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div key={item.id}>
                  <div
                    className={`flex items-center justify-between border-l-2 pl-4 pr-1 transition-all duration-200 ${
                      parentActive
                        ? "border-[#7fb3ff]"
                        : "border-transparent"
                    }`}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMobile}
                      className={`flex-1 text-[14px] py-2.5 hover:text-[#7fb3ff] transition-colors ${
                        parentActive
                          ? "text-[#7fb3ff] font-medium"
                          : "text-white/85"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggle(item.id);
                      }}
                      className="p-1.5 rounded hover:bg-white/5 text-white/60 hover:text-white transition-colors"
                      aria-label={`Toggle ${item.label}`}
                      aria-expanded={open}
                    >
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          open ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-6 py-1 flex flex-col">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMobile}
                          className={`text-[13px] py-1.5 px-3 border-l border-white/10 transition-colors hover:text-[#7fb3ff] hover:border-[#7fb3ff] ${
                            location.pathname === child.path
                              ? "text-[#7fb3ff] border-[#7fb3ff]"
                              : "text-white/65"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
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
          onClick={closeMobile}
          className="md:hidden fixed inset-0 bg-black/60 z-20"
        />
      )}
    </>
  );
};

export default Sidebar;
