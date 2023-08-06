import { render } from "../test-utils";
import { screen } from "@testing-library/react";
import Bio from "../features/bio/Bio";
import userEvent from "@testing-library/user-event";

describe("Bio", ()=>{
  describe("character biography", ()=>{
    it("each button should display a character bio", async()=>{
      render(<Bio/>);
      const buttonHomero = screen.getByText("HOMERO");
      await userEvent.click(buttonHomero);
      expect(screen.getByText("Homero Simpson")).toBeInTheDocument();
    });
  });
    
});