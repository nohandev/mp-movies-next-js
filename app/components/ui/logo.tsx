import Image from "next/image";

export default function Logo() {
  return (
    <div className="w-full">
      <Image
      src='/logo.png'
      width={666}
      height={375}
      alt="logo"
      priority={true}
      className="h-auto w-full max-w-[600px] mx-auto"/>
    </div>
  )
}