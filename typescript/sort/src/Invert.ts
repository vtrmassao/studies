class InvertString {
  novaString = '';
  constructor(public string: string) {}

  sort(): void {
    for (let i = this.string.length; i > 0; i--) {
      this.novaString += this.string[i - 1];
    }
  }
}
