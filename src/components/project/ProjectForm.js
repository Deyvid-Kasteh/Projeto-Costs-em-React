function ProjectForm() {
    return (
      <div>
        <form>
          <div>
            <input type="text" placeholder="insira o nome do projeto" />
          </div>
          <div>
            <input type="number" placeholder="insira o total do orçamento" />
          </div>
          <div>
            <section name="category_id">
              <option disabled>Selecione a categoria</option>
            </section>
          </div>
          <div>
            <input type="submit" value="Criar projeto"/>
          </div>
        </form>
      </div>
    )
      
    
}

export default ProjectForm;
