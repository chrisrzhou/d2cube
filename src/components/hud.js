import {Element, Layout} from 'uinix-ui';

import {player} from '../mocks/index.js';
import Globe from './globe.js';
import HudPanel from './hud-panel.js';

const Hud = () => {
  const {life, mana} = player;

  return (
    <Element as="footer" variant="sticky.bottom">
      <Layout align="center" mx="auto" w="min-content">
        <Globe type="life" max={life.max} value={life.value} />
        <HudPanel player={player} />
        <Globe type="mana" max={mana.max} value={mana.value} />
      </Layout>
    </Element>
  );
};

export default Hud;
