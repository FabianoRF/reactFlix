import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';

function CadastroCategoria(){
    return (
        <PageDefault>
            <h1>Cadastro de categoria</h1>
            <form>
                <label>
                    Nome da Categoria
                    <input type="text"id="nome"/>
                </label>
                <button>Cadastrar</button>
            </form>



            <Link to="/">
                ir para o home
            </Link>
        </PageDefault>
    )
  };

export default CadastroCategoria;