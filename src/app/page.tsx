import Link from "next/link"

export default function Home() {
  return (
    <div className="flex gap-2">
      <Link href="/primeiro">Primeiro componente</Link>
      <Link href="/contador">Contador</Link>
    </div>
  )
}
