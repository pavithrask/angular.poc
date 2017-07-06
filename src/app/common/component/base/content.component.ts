export abstract class ContentComponent {

  constructor(private name: string) { }

  get componentName(): string {
    return this.name;
  }
  public value: string;
} 