const infoDetalhadaElement = document.createElement('div');
  infoDetalhadaElement.classList.add('infoDetalhada');
  infoDetalhadaElement.innerHTML = `
    <p>Altura: ${pokemon.height}</p>
    <p>Peso: ${pokemon.weight}</p>
    <p>Habilidades: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
    <p>Estatísticas: ${pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</p>
    <!-- Adicione outras informações detalhadas aqui -->
  `;