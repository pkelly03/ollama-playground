// Assuming ollama is correctly imported
import ollama from 'ollama';

async function run() {
    const response = await ollama.generate({
        model: 'llama2',
        prompt: 'Could you describe in simple terms what is happening here? type WatchedObject<T> = { [K in string & keyof T as `on${Capitalize<K>}Changed`]: (ev: Callback<T[K]> ) => void;};',
        systemPrompt: 'You are <persona> helping <persona> with <task>',
        stream: true
    });

    for await (const part of response) { // Assuming `response` is the correct iterable
        process.stdout.write(part.response);
    }
}

run().catch(console.error);