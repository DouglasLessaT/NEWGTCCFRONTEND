import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assets/css/CadastroAluno/CadastroAluno.css';

// Recebendo a função adicionarAluno via props
function CadastroAluno({ adicionarAluno }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [contato, setContato] = useState('');
  const [login, setLogin] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Criando um novo objeto de aluno
    const novoAluno = {
      nome,
      email,
      contato,
      login,
      dataNascimento,
    };

    // Chamando a função para adicionar o novo aluno
    adicionarAluno(novoAluno);

    // Limpando os campos do formulário
    setNome('');
    setEmail('');
    setContato('');
    setLogin('');
    setDataNascimento('');
  };

  return (
    <div className="cadastro-aluno">
      <h2 className="text-center mb-4">Cadastro Aluno</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNome">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formContato" className="mt-3">
          <Form.Label>Contato</Form.Label>
          <Form.Control
            type="text"
            placeholder="Contato"
            value={contato}
            onChange={(e) => setContato(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formLogin" className="mt-3">
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            placeholder="Login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formDataNascimento" className="mt-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-center mt-4">
          <Button variant="danger" type="submit">
            Salvar
          </Button>
          <Button variant="danger" type="submit">
            Excluir
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CadastroAluno;
