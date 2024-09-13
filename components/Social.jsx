import Link from "next/link";
import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

export default function Social() {
  return (
    <div className="flex gap-2 items-center -ml-1 bg-secondary rounded-full p-2 w-fit">
      <Link
        href="https://github.com/shiva-kumar-sahoo"
        className="hover:text-primary"
      >
        <FaGithub className="h-4 w-4" />
      </Link>
      <Link
        href="https://www.instagram.com/shiva_kumar_sahoo"
        className="hover:text-primary"
      >
        <FaInstagram className="h-4 w-4" />
      </Link>
      <Link
        href="https://t.me/shiva_kumar_sahoo"
        className="hover:text-primary"
      >
        <FaTelegram className="h-4 w-4" />
      </Link>
    </div>
  );
}
