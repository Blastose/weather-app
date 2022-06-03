class LocationInputView {
  input: HTMLInputElement;
  searchButton: HTMLImageElement;
  errorMessage: HTMLElement;

  constructor() {
    this.input = document.querySelector("#location")!;
    this.searchButton = document.querySelector(".search-icon")!;
    this.errorMessage = document.querySelector(".location-error-message")!;
  }

  bindSearch(handler: (location: string) => void) {
    this.input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handler(this.input.value);
      }
    });
    this.input.addEventListener("input", () => {
      this.clearErrorMessage();
    });
    this.searchButton.addEventListener("click", () => {
      handler(this.input.value);
    });
  }

  setErrorMessage(errorMessage: string) {
    this.errorMessage.textContent = errorMessage;
  }

  clearErrorMessage() {
    this.errorMessage.textContent = "";
  }
}

export default LocationInputView;
