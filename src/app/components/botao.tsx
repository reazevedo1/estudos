//Primeiro componente
export default function Botao(props: any) {
    return <button className="bg-blue-800 p-1 rounded-md">
        {props.label ?? "ok" }
        </button>
}