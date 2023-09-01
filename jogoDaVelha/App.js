import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import styles from './jogoCSS'; // Importe os estilos

const App = () => {
  // Gera o tabuleiro do jogo
  const tabuleiroInicial = Array(9).fill(null);

  // Define o tabuleiro e o próximo a jogar
  const [tabuleiro, setTabuleiro] = useState(tabuleiroInicial);
  const [proximaJogada, setproximaJogada] = useState(true);

  // Verifica se algum jogador ganhou
  const verificarganhador = () => {
    const opcoesVitorias = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < opcoesVitorias.length; i++) {
      const [a, b, c] = opcoesVitorias[i];
      if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
        return tabuleiro[a];
      }
    }

    return null;
  };

  // Marca a jogada
  const jogadaRealizada = (index) => {
    const quadrados = [...tabuleiro];
    if (verificarganhador() || quadrados[index]) {
      return;
    }
    quadrados[index] = proximaJogada ? 'X' : 'O';
    setTabuleiro(quadrados);
    setproximaJogada(!proximaJogada);
  };

  // Resetar
  const novoJogo = () => {
    setTabuleiro(tabuleiroInicial);
    setproximaJogada(true);
  };

  // Retorna os quadrados do tabuleiro
  const campo = (index) => {
    return (
      <TouchableOpacity
        style={styles.quadrado}
        onPress={() => jogadaRealizada(index)}>
        <Text style={styles.textoQuadrado}>{tabuleiro[index]}</Text>
      </TouchableOpacity>
    );
  };

  // Verifica se alguem ganhou, empatou ou se continua o jogo
  const ganhador = verificarganhador();
  let status;
  if (ganhador) {
    status = `Parabéns ${ganhador}, você venceu `;
  } 
  else if(tabuleiro.every((quadrado) => quadrado)) {
    status = 'Que pena, deu empate';
  } 
  else {
    status = `O próximo a jogar é: ${proximaJogada ? 'X' : 'O'}`;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.status}>{status}</Text>
      <View style={styles.tabuleiro}>
        <View style={styles.linha}>
          {campo(0)}
          {campo(1)}
          {campo(2)}
        </View>
        <View style={styles.linha}>
          {campo(3)}
          {campo(4)}
          {campo(5)}
        </View>
        <View style={styles.linha}>
          {campo(6)}
          {campo(7)}
          {campo(8)}
        </View>
      </View>
      <Button title="Novo Jogo" onPress={novoJogo} />
    </View>
  );
};



export default App;