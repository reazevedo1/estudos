//Função construtora
function Contador() {
    this.numero = 0

    this.incrementar = function() {
        this.numero++
    }

    this.decrementar = function() {
        this.numero--
    }
}

const contadorExemplo = new Contador()
contadorExemplo.decrementar()
contadorExemplo.decrementar()
contadorExemplo.decrementar()
contadorExemplo.decrementar()
contadorExemplo.decrementar()
contadorExemplo.decrementar()
contadorExemplo.incrementar()

console.log(contadorExemplo.numero)
