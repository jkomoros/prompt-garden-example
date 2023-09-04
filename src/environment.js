const ENVIRONMENT_KEY = 'environment';

export const getEnvironment = async () => {

    let saved = localStorage.getItem(ENVIRONMENT_KEY);

    if (!saved) {
        const openai_api_key = prompt('What is your openai_api_key?\nThe key will be stored locally but not transmitted to any server other than openai.com');
        if (!openai_api_key) throw new Error('No openai_api_key provided');
        const data = {
            openai_api_key
        };
        saved = JSON.stringify(data);
        localStorage.setItem(ENVIRONMENT_KEY, saved);
    }

    return JSON.parse(saved);
};