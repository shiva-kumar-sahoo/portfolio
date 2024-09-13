import Social from "./Social";
import { ModeToggle } from "./ModeToggle";

export default function Footer() {
  return (
    <footer className="grid gap-3 md:px-20 lg:px-32 px-8 py-10">
      <div className="flex justify-end">
        <ModeToggle />
      </div>
      <Social />
      <p className="text-xs">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/shiva-kumar-sahoo"
          className="hover:underline hover:text-primary"
        >
          Shiva Kumar Sahoo
        </a>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}
