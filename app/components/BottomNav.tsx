"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useAuth } from "../hooks/useAuth";

export default function BottomNav() {
  const pathname = usePathname();
  const { user } = useAuth();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "#eab308" : "none"} stroke={active ? "#eab308" : "#6b7280"} strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "Mobil Bekas",
      href: "/mobil-bekas",
      icon: (active: boolean) => (
        <Image src="/navbar/mbekas.svg" alt="" width={22} height={22} className={active ? "opacity-100" : "opacity-50"} />
      ),
    },
    {
      label: "Jual",
      href: "/jual",
      isJual: true,
      icon: () => (
        <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-yellow-200 -mt-4">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1f2937" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      ),
    },
    {
      label: "Iklan Saya",
      href: "/iklan-saya",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#eab308" : "#6b7280"} strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      label: "Akun",
      href: user ? "/profil" : "/",
      icon: (active: boolean) => user ? (
        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px] font-bold">
          {user.name.charAt(0).toUpperCase()}
        </div>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#eab308" : "#6b7280"} strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-0.5 min-w-0 flex-1"
            >
              <div className="flex items-center justify-center">
                {item.icon(active)}
              </div>
              {!item.isJual && (
                <span className={`text-[10px] truncate ${active ? "text-yellow-500 font-medium" : "text-gray-500"}`}>
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
