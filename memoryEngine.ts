export class MemoryEngine {
  private memory: string[] = [];

  add(context: string) {
    this.memory.push(context);
  }

  getAll() {
    return this.memory;
  }
}
