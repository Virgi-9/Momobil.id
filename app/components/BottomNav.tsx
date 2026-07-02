"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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
    iconImg: "/navbar/mbekas.svg",
  },
  {
    label: "Jual",
    href: "/jual",
    iconImg: "/navbar/jual.svg",
    isJual: true,
  },
  {
    label: "Mobil Baru",
    href: "/mobil-baru",
    iconImg: "/navbar/mbaru.svg",
  },
  {
    label: "Akun",
    href: "/akun",
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={active ? "#eab308" : "#6b7280"} strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
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
                {"iconImg" in item ? (
                  "isJual" in item ? (
                    <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center shadow-lg shadow-yellow-200">
                      <Image src={item.iconImg!} alt="" width={20} height={20} />
                    </div>
                  ) : (
                    <div className={`w-[22px] h-[22px] flex items-center justify-center ${active ? "opacity-100" : "opacity-50"}`}>
                      <Image src={item.iconImg!} alt="" width={22} height={22} />
                    </div>
                  )
                ) : (
                  item.icon!(active)
                )}
              </div>
              {item.label !== "Jual" && (
                <span
                  className={`text-[10px] truncate ${
                    active ? "text-yellow-500 font-medium" : "text-gray-500"
                  }`}
                >
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
