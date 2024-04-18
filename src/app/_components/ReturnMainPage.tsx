import Link from "next/link";

export default function ReturnMainPage() {
  return (
    <Link href={'/'}>
      <span className="text-blue-500 text-sm font-bold">Return Home</span>
    </Link>
  )
}