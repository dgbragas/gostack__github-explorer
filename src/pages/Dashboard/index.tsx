import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="href">
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="href">
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="href">
          <img
            src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4"
            alt="Diego Fernandes"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
