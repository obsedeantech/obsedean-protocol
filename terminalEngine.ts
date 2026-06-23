export async function executeCommand(
  command: string
) {
  return {
    output: `Executed ${command}`
  };
}
