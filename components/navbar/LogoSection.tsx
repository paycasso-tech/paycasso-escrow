import Image from "next/image";

export default function LogoSection() {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="Paycasso Logo" width={102} height={102} priority />
    </div>
  );
} 