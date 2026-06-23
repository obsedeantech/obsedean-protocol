export async function createBranch(
  branch: string
) {
  return {
    branch,
    status: "created"
  };
}
