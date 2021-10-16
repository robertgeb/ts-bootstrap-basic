(async () => {
    try {
        await main();
    } catch (e) {
        console.error(e);
        throw e;
    }
})();


async function main() {
    // throw new Error("Pane no sistema");
    return new Promise(() => true);
}