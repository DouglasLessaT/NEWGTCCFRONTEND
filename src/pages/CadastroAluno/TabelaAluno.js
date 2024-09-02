import React from "react";
import { Table } from "react-bootstrap";

function TabelaAlunos({ alunos }) {
  return (
    <div className="tabela-alunos mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Contato</th>
            <th>Login</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {alunos.map((aluno, index) => (
            <tr key={index}>
              <td>{aluno.nome}</td>
              <td>{aluno.email}</td>
              <td>{aluno.contato}</td>
              <td>{aluno.login}</td>
              <td>{aluno.dataNascimento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TabelaAlunos;
