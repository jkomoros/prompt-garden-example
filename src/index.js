import {
    Garden,
    ProfileBrowser,
} from 'prompt-garden';

const env = {
    openai_api_key: 'YOUR_API_KEY_HERE'
};

const main = async () => {
    const profile = new ProfileBrowser();
    const garden = new Garden(env, profile);
    const res = await fetch('./seeds/index.json');
    const data = await res.json();
    garden.plantSeedPacket('main', data);
    const seed = await garden.seed('');
    const result = await seed.grow();
    alert(result);
};

main();