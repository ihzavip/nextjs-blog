import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="w-full px-6 h-24 bg-beige flex items-center justify-between">
        <Image src="/images/favicon.ico" height={60} width={60} alt="logo" />
        <svg
          className=""
          width="48"
          height="42"
          viewBox="0 0 48 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            class="pwm-anim"
            width="48"
            height="1"
            rx="0.5"
            fill="black"
          ></rect>
          <rect y="7.15625" width="48" height="1" rx="0.5" fill="black"></rect>
        </svg>
      </nav>
    </>
  );
}
