import React from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadSnowPreset } from 'tsparticles-preset-snow';

class SnowParticles extends React.Component {
    async customInit(Engine) {
      await loadSnowPreset(Engine);
    }
  
    render() {
      const options = {
        preset: 'snow',
        particles: {
          shape: {
            type: 'square', 
          },
        },
      };
  
      return <Particles options={options} init={this.customInit} />;
    }
  }
  
  export default SnowParticles;
  