import OpenAI, { ClientOptions } from 'openai';

const configuration: ClientOptions = {
	organization: `${process?.env?.OPENAI_ORGANIZATION_ID}`,
	apiKey: `${process?.env?.OPENAI_API_KEY}`,
};

export const openAIClient = new OpenAI(configuration);
