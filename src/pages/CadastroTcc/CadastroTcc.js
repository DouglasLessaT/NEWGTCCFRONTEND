import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../assets/css/Tabela/TabelaTcc.css'; 
import TabelaTcc from "./TabelaTcc.js"; 
import NavBar from "../../components/NavBar"; 

function CadastroTcc() {
  return (
    <Container>
            {}
            <NavBar />
      <h2 className="text-center mt-5">Cadastro tcc</h2>

      {}
      <Form className="mt-4 form-container">
        <Form.Group controlId="formTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control type="text" placeholder="Título" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formCurso" className="mt-3">
          <Form.Label>Curso</Form.Label>
          <Form.Control type="text" placeholder="Curso" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formTema" className="mt-3">
          <Form.Label>Tema</Form.Label>
          <Form.Control type="text" placeholder="Tema" className="custom-input" />
        </Form.Group>

        <Form.Group controlId="formAluno" className="mt-3">
          <Form.Label>Aluno</Form.Label>
          <Form.Control type="text" placeholder="Aluno" className="custom-input" />
        </Form.Group>

        {/* Botões */}
        <div className="d-flex justify-content-center mt-4">
          <Button variant="danger" className="mr-4">
            Salvar
          </Button>
          <Button variant="danger">Excluir</Button>
        </div>
      </Form>

      <TabelaTcc></TabelaTcc>
    </Container>
  );
}

export default CadastroTcc;
