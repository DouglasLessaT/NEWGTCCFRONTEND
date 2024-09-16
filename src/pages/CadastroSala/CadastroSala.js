import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/CadastroSala/CadastroSala.css"; // Caso tenha um arquivo de CSS específico
import NavBar from "../../components/NavBar"; 
import TabelaSala from "./TabelaSala";

function CadastroSala() {
  return (
    <div>
      {}
      <NavBar />

      <Container>
        <h2 className="text-center mt-5">Cadastro de Sala</h2>

        {/* Formulário de cadastro de sala */}
        <Form className="mt-4 form-container">
          <Form.Group controlId="formAgendaSala">
            <Form.Label>Agenda - Sala</Form.Label>
            <Form.Control as="select" className="custom-input">
              <option>Selecione a Sala</option>
              <option>Exemplo 1</option>
              <option>Exemplo 2</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formTccOrientador" className="mt-3">
            <Form.Label>TCC - Orientador</Form.Label>
            <Form.Control as="select" className="custom-input">
              <option>Selecione o Orientador</option>
              <option>Exemplo 1</option>
              <option>Exemplo 2</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formMembro1" className="mt-3">
            <Form.Label>Membro 1</Form.Label>
            <Form.Control as="select" className="custom-input">
              <option>Selecione o Membro 1</option>
              <option>Exemplo 1</option>
              <option>Exemplo 2</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formMembro2" className="mt-3">
            <Form.Label>Membro 2</Form.Label>
            <Form.Control as="select" className="custom-input">
              <option>Selecione o Membro 2</option>
              <option>Exemplo 1</option>
              <option>Exemplo 2</option>
            </Form.Control>
          </Form.Group>

          {/* Botões */}
          <div className="d-flex justify-content-center mt-4">
            <Button variant="danger" className="mr-4">
              Salvar
            </Button>
            <Button variant="danger">Excluir</Button>
          </div>
        </Form>
        <TabelaSala />
      </Container>
    </div>
  );
}

export default CadastroSala;
