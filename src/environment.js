export const getEnvironment = async () => {
    //TODO: persist environment
    const openai_api_key = prompt('What is your openai_api_key?');
    if (!openai_api_key) throw new Error('No openai_api_key provided');
    return {
        openai_api_key
    };
};