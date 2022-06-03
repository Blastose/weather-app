class LocationInputView {
  input: HTMLInputElement;
  searchButton: HTMLImageElement;

  constructor() {
    this.input = document.querySelector("#location")!;
    this.searchButton = document.querySelector(".search-icon")!;
  }

  bindSearch(handler: (location: string) => void) {
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handler(this.input.value);
      }
    });
    this.searchButton.addEventListener("click", () => {
      handler(this.input.value);
    });
  }
}

export default LocationInputView;
