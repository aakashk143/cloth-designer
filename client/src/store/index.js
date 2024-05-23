import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: 'red',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './Cloth_Logo.png',
  fullDecal: './Cloth_Logo.png',
});

export default state;

// valtio : whatever you define here can be used in whole app