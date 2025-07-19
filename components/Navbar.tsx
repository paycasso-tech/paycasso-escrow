import LogoSection from "./navbar/LogoSection";
import NavLinks from "./navbar/NavLinks";
import GetAppButton from "./navbar/GetAppButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Wallet", href: "/about-wallet" },
];

export default function Navbar() {
  return (
    <div
      className="mx-auto mt-[45px] flex flex-row items-center justify-center gap-x-8 rounded-[32px]"
      style={{
        width: 940,
        height: 89,
        borderRadius: 32,
        opacity: 1,
      }}
    >
      <LogoSection />
      <NavLinks links={navLinks} />
      <GetAppButton />
    </div>
  );
}