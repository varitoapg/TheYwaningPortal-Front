import { screen } from "@testing-library/react";
import mockLoadingOpenStore from "../../mocks/store/mockLoadingOpenStore";
import mockModalOpenStore from "../../mocks/store/mockModalOpenStore";
import renderWithProviders from "../../testUtils/renderWithProvider";
import App from "./App";

describe("Given an App componen", () => {
  describe("When it's render with an error", () => {
    test("Then it should show Modal Component with 'Fail!'", () => {
      const informationText = "Fail!";
      renderWithProviders(<App />, {
        initialEntries: ["/"],
        store: mockModalOpenStore,
      });

      const expectedModal = screen.getByText(informationText);

      expect(expectedModal).toBeInTheDocument();
    });
  });

  describe("When it's render with Loading open", () => {
    test("Then it should show a Loading Component with 'Dice 20 faces loading' as aria label", () => {
      const informationText = "Dice 20 faces loading";
      renderWithProviders(<App />, {
        initialEntries: ["/"],
        store: mockLoadingOpenStore,
      });

      const expectedModal = screen.getByLabelText(informationText);

      expect(expectedModal).toBeInTheDocument();
    });
  });
});
