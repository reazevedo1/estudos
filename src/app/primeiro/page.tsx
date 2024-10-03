import Botao from "@/components/botao"

export default function Home() {
  return (
    <div className="flex gap-2">
      <Botao label="salvar"/>
      <Botao label="cancelar"/>
      <Botao />
    </div>
  )
}
