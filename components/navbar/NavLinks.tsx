import Link from "next/link";

export interface NavLink {
  label: string;
  href: string;
}

export default function NavLinks({ links }: { links: NavLink[] }) {
  return (
    <nav className="flex gap-10">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-white text-lg font-medium hover:underline hover:underline-offset-4 transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
} 