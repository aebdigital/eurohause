"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { services } from "@/lib/services";

export default function ServicesSidebar() {
  const pathname = usePathname();

  return (
    <aside className="services-sidebar">
      <h3>Služby</h3>
      <ul className="services-nav">
        {services.map((s) => {
          const href = `/sluzby/${s.slug}`;
          const active = pathname === href;
          return (
            <li key={s.slug}>
              <Link
                href={href}
                className={`service-nav-link${active ? " active" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {s.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
