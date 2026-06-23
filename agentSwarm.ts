export interface Agent {
  name: string;
  role: string;
}

export async function spawnAgents() {
  const agents: Agent[] = [
    {
      name: "Builder",
      role: "Code Generation"
    },
    {
      name: "Auditor",
      role: "Security"
    },
    {
      name: "Reviewer",
      role: "QA"
    }
  ];

  return agents;
}
