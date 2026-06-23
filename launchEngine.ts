export async function launchToken(
  symbol: string
) {
  return {
    token: symbol,
    status: "launched"
  };
}
