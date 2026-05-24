interface PokemonTipo {
  type: {
    name: string;
  };
}

interface PokemonResponse {
  name: string;
  height: number;
  weight: number;
  types: PokemonTipo[];
}

// Pega o nome ou ID do Pokémon passado pelo terminal
const pokemonBusca = process.argv[2];

// Capitaliza a primeira letra de uma palavra
const capitalizar = (texto: string): string => {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
};

// Função principal que busca os dados do Pokémon
const buscarPokemon = async (nomeOuId: string): Promise<void> => {
  try {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);

    if (resposta.status === 404) {
      console.log("❌ Pokémon não encontrado!");
      return;
    }

    if (!resposta.ok) {
      console.log("⚠️ Erro de rede. Tente novamente.");
      return;
    }

    const dados = await resposta.json() as PokemonResponse;

    const nome = capitalizar(dados.name);
    const altura = dados.height / 10;
    const peso = dados.weight / 10;

    const tipos = dados.types
      .map(item => capitalizar(item.type.name))
      .join(", ");

    console.log(`${nome} – ${altura} m – ${peso} kg – ${tipos}`);
  } catch {
    console.log("⚠️ Erro de rede. Tente novamente.");
  }
};

// Valida se o usuário passou algum argumento
if (!pokemonBusca) {
  console.log("Digite o nome ou ID de um Pokémon.");
  console.log("Exemplo: npx ts-node pokedex.ts pikachu");
} else {
  buscarPokemon(pokemonBusca);
}