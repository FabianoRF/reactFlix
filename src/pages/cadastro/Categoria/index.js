/* eslint-disable react/jsx-indent */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => {
    setValues({
      ...values,
      [chave]: valor, // nome: 'valor', faz a chave ser dinamica
    });
  };

  const handleChange = (e) => {
    setValue(
      e.target.getAttribute('name'),
      e.target.value,
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    console.log(categorias);

    setValues({ valoresIniciais });// zera o estado que mostra em tela
    console.log(values);

  };

  useEffect(() => {
    const URL = 'http://localhost:8080/categoria';
    fetch(URL)
      .then(async (data) => {
        const resposta = await data.json();
        setCategorias(resposta);
      });
  }, []);

  return (
        <PageDefault>
            <h1>
              Cadastro de categoria:
              {values.nome}
            </h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <FormField
                          label="Nome da categoria"
                          value={values.nome}
                          onChange={handleChange}
                          name="nome"
                          type="text"
                        />
                    </div>
                    <div>
                        <FormField
                          label="Descrição:"
                          value={values.descricao}
                          onChange={handleChange}
                          name="descricao"
                          type="textarea"
                        />
                    </div>
                    <div>
                        <FormField
                          label="Cor:"
                          value={values.cor}
                          onChange={handleChange}
                          name="cor"
                          type="color"
                        />
                    </div>
                </div>

                <Button type="submit">Cadastrar</Button>
            </form>

            <ul>
              {categorias.map((categoria) => (
                  <li key={`${categoria.nome}`}>{categoria.nome}</li>
              ))}
            </ul>
            <Link to="/">
                ir para o home
            </Link>
        </PageDefault>
  );
}

export default CadastroCategoria;
