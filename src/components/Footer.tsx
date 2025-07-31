import Documentation from "@/components/icons/Documentation";
import Discord from "@/components/icons/Discord";
import Email from "@/components/icons/Email";
import Telegram from "@/components/icons/Telegram";
import X from "@/components/icons/X";

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 border-t border-neutral-900 flex justify-between items-center">
      <div className="text-base flex items-center gap-1">
        <p>Sui Add Liquidity MVP</p>
        <span className="text-neutral-600">•</span>
        <p>Copyright 2025</p>
      </div>

      <div className="flex items-center gap-6">
        <a href="#">
          <Documentation />
        </a>
        <a href="#">
          <Email />
        </a>
        <a href="#">
          <Discord />
        </a>
        <a href="#">
          <Telegram />
        </a>
        <a href="#">
          <X />
        </a>
      </div>
    </footer>
  );
}
