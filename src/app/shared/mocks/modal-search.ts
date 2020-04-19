export class ModalSearch {
    filters = [
        {
          name: "Tipo de contrato",
          types: ["CLT", "PJ", "Estágio"],
          active: false
        },{
          name: "Nível de experiência",
          types: ["Júnior", "Pleno", "Sênior"],
          active: true
        },{
          name: "Tamanho da empresa",
          types: ["Startup", "Pequena ou Média empresa", "Grande empresa"],
          active: false
        }
    ]
}
