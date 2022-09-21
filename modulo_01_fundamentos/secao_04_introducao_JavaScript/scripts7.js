let statusCandidato = "Aprovada";

switch (statusCandidato) {
    case "Aprovada":
        console.log("Parabéns, você foi aprovada(o)!");
        break;
    case "Lista":
        console.log("Você está em nossa lista de espera");
        break;
    case "Reprovada":
        console.log("Você foi reprovada(o)")
        break;
    default:
        console.log("Informação incorreta")
}