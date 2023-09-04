import {
    Garden,
    ProfileBrowser,
} from 'prompt-garden';

import { 
    getEnvironment
} from './environment.js';

const main = async () => {
    const env = await getEnvironment();
    const profile = new ProfileBrowser();
    const garden = new Garden(env, profile);
    const res = await fetch('./seeds/index.json');
    const data = await res.json();
    garden.plantSeedPacket('main', data);
    const seed = await garden.seed('');
    const result = await seed.grow();
    const ele = document.getElementById('output');
    ele.innerText = result;

};

main();