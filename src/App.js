import React from 'react';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: 

import Header from './Header';

function App() {
  return (
    <>
      <Header title="Titulo 1" />
      <Header title="Titulo 2" />
      <Header title="Titulo 4" />
    </>
  );
}

export default App;
