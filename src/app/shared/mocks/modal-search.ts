export class ModalSearch {
   private filters = [
        {
          name: "Tipo de contrato",
          types: ["CLT", "PJ", "Freelancer"],
          active: false
        },{
          name: "Nível de experiência",
          types: ["Júnior", "Pleno", "Sênior"],
          active: true
        },{
          name: "Empresa",
          types: ["Startup", "Pequena ou Média empresa", "Grande empresa"],
          active: false
        }
    ];
    
   private listSelect = ["Todos os skills", "Front-End", "Back-End", "UI", "UX", "Full-Stack"]

    public listButtons() {
        return this.filters;
    }

    public selectProfiles() {
        return this.listSelect;
    }
}
