import React, { useState, useEffect, useRef } from "react";
import { Table } from "react-bootstrap";
import '../../assets/css/Tabela/TabelaSala.css'; // Certifique-se de ter esse caminho correto para o CSS

const TabelaSala = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);

  const handleRowClick = (index) => {
    setSelectedRow(index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tableRef.current && !tableRef.current.contains(event.target)) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Table ref={tableRef} className="custom-table">
      <thead>
        <tr>
          <th>Título</th>
          <th>Curso</th>
          <th>Tema</th>
          <th>Aluno</th>
        </tr>
      </thead>
      <tbody>
        <tr
          className={selectedRow === 0 ? "selected-row" : ""}
          onClick={() => handleRowClick(0)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
        <tr
          className={selectedRow === 1 ? "selected-row" : ""}
          onClick={() => handleRowClick(1)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
        <tr
          className={selectedRow === 2 ? "selected-row" : ""}
          onClick={() => handleRowClick(2)}
        >
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
          <td>Exemplo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TabelaSala;
