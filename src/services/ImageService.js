export async function getImage() {

    const response = await fetch('https://random.dog/woof.json');
    return await response.json();
}