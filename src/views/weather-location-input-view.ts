class LocationInputView {
  input: HTMLInputElement;

  constructor() {
    this.input = document.querySelector("#location")!;
  }

  bindSearch(handler: (location: string) => void) {
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handler(this.input.value);
      }
    });
  }
}

export default LocationInputView;
