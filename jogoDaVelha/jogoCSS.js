import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    marginBottom: 10,
    fontSize: 24,
  },
  tabuleiro: {
    flexDirection: 'column',
  },
  linha: {
    flexDirection: 'row',
  },
  quadrado: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoQuadrado: {
    fontSize: 36,
  },
});

export default css;