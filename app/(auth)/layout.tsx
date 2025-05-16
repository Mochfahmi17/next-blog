import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="animate__animated animate__fadeIn">
      <section className="grid h-screen w-full grid-cols-1 justify-center p-2 md:grid-cols-2 md:gap-2">
        <div className="relative h-full w-full place-self-center self-center overflow-hidden rounded-md md:block">
          <Image
            src="/login-image.jpg"
            alt="login image"
            fill
            priority
            className="hidden object-cover object-center md:block"
          />
          <Link href="/" className="m-4 block">
            <Image
              src="/logo.png"
              alt="logo"
              width={70}
              height={25}
              priority
              className="relative"
            />
          </Link>
        </div>
        <div className="w-full place-items-center md:self-center">
          {children}
        </div>
      </section>
    </main>
  );
}
