import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import '../../assets/css/Tabela/TabelaAluno.css'; // Importando o arquivo CSS externo

const TabelaAlunos = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);

  // Função para lidar com a seleção de linha
  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  // useEffect para detectar cliques fora da tabela
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null); // Reseta a seleção quando o clique for fora da tabela
      }
    };

    // Adiciona o evento de clique global
    document.addEventListener("click", handleClickOutside);

    // Limpa o evento ao desmontar o componente
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Table ref={tableRef} className="custom-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Contato</th>
          <th>Login</th>
        </tr>
      </thead>
      <tbody>
        <tr onClick={() => handleRowClick(0)}>
          <td className={selectedRow === 0 ? "selected-row" : ""}>Exemplo</td>
          <td className={selectedRow === 0 ? "selected-row" : ""}>EMAIL@EMAIL</td>
          <td className={selectedRow === 0 ? "selected-row" : ""}>27 999292921</td>
          <td className={selectedRow === 0 ? "selected-row" : ""}>6923524795</td>
        </tr>
        <tr onClick={() => handleRowClick(1)}>
          <td className={selectedRow === 1 ? "selected-row" : ""}>Exemplo</td>
          <td className={selectedRow === 1 ? "selected-row" : ""}>EMAIL@EMAIL</td>
          <td className={selectedRow === 1 ? "selected-row" : ""}>27 999292921</td>
          <td className={selectedRow === 1 ? "selected-row" : ""}>6923524795</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TabelaAlunos;
