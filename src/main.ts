
process.on('SIGINT', () => process.exit()); // Receive SO IPC signal to exit process when Ctr + C

main()
    .catch((e) => {
        console.error(e);
        process.exit(1); // Exit process with error when catch Exception
    })
    .finally(()=>process.exit(0)); // Exit process with success
    
/*
*   Main async function 
*/
async function main() {
    throw new Error("Pane no sistema");
}