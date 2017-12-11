export class IdGenerator {
  private static count = 0;

  public static generateId(baseName: string): string {
    return `${baseName} ${IdGenerator.count++}`;
  }
}
