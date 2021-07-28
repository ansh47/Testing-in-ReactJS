import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("Renders posts if request succeeds", async () => {
    window.fetch = jest.fn(); //MOCK FUNCTION
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);

    const listitemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 5000 }
    );
    expect(listitemElements).not.toHaveLength(0);
  });
});
