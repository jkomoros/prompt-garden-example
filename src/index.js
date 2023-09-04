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
    await garden.ensureSeedPacket('https://raw.githubusercontent.com/jkomoros/prompt-garden/main/seeds/example-import.json');
    const seed = await garden.seed('favorite-things-limerick');
    const result = await seed.grow();
    alert(result);
};

main();