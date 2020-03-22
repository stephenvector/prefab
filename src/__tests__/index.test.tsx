import React from "react";
import renderer from "react-test-renderer";
import { matchers } from "jest-emotion";
import {
  Carousel,
  Code,
  Column,
  Container,
  DatePicker,
  Input,
  Label,
  Loading,
  lightTheme,
  ProgressBar,
  Row,
  Select,
  Slider,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Display1,
  Display2,
  Display3,
  Display4,
  Textarea,
  isValidRGBColor,
  isValidHex,
  darkenHex,
  lightenHex,
  getHexFromRGB,
  getRGBFromHex,
  min,
  max
} from "../";

expect.extend(matchers);

describe("<Carousel />", () => {
  it("Should render", () => {
    renderer.create(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
  });
});

describe("<Code />", () => {
  it("Should render", () => {
    renderer.create(<Code>console.log("hello, world!")</Code>);
  });
});

describe("<Column />", () => {
  it("Should render", () => {
    renderer.create(<Column />);
  });
  it("Should render with breakpoints", () => {
    renderer.create(<Column xs="22" sm="3" md="4" lg="11" />);
  });
});

describe("<Container />", () => {
  it("Should render", () => {
    renderer.create(<Container />);
  });
});

describe("<DatePicker />", () => {
  it("Should render", () => {
    renderer.create(
      <DatePicker value={new Date().getTime()} onChange={() => {}} />
    );
  });
});

describe("<Input />", () => {
  it("Should render", () => {
    renderer.create(<Input value="fdsafdsa" onChange={() => {}} />);
  });
});

describe("<Label />", () => {
  it("Should render", () => {
    renderer.create(<Label />);
  });
});

describe("<Loading />", () => {
  it("Should render", () => {
    renderer.create(<Loading />);
  });
});

describe("<ProgressBar />", () => {
  it("Should render", () => {
    renderer.create(<ProgressBar value={0.66} />);
  });
});

describe("<Row />", () => {
  it("Should render", () => {
    renderer.create(<Row />);
  });
});

describe("<Select />", () => {
  it("Should render", () => {
    renderer.create(
      <Select
        listId="testselect"
        value=""
        options={[]}
        onChange={() => {}}
        toggleLabel="Open"
        optionsLabel="Select a test option"
      />
    );
  });
});

describe("<Slider />", () => {
  it("Should render", () => {
    renderer.create(<Slider value={45} onChange={() => {}} />);
  });
});

describe("<Table />", () => {
  it("Should render", () => {
    renderer.create(
      <Table>
        <Thead>
          <Tr>
            <Th>Head</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Cell</Td>
          </Tr>
        </Tbody>
      </Table>
    );
  });
});

describe("<H1 />", () => {
  it("Should render", () => {
    renderer.create(<H1 />);
  });
});

describe("<H2 />", () => {
  it("Should render", () => {
    renderer.create(<H2 />);
  });
});

describe("<H3 />", () => {
  it("Should render", () => {
    renderer.create(<H3 />);
  });
});

describe("<H4 />", () => {
  it("Should render", () => {
    renderer.create(<H4 />);
  });
});

describe("<H5 />", () => {
  it("Should render", () => {
    renderer.create(<H5 />);
  });
});

describe("<H6 />", () => {
  it("Should render", () => {
    renderer.create(<H6 />);
  });
});

describe("<Display1 />", () => {
  it("Should render", () => {
    renderer.create(<Display1 />);
  });
});

describe("<Display2 />", () => {
  it("Should render", () => {
    renderer.create(<Display2 />);
  });
});

describe("<Display3 />", () => {
  it("Should render", () => {
    renderer.create(<Display3 />);
  });
});

describe("<Display4 />", () => {
  it("Should render", () => {
    renderer.create(<Display4 />);
  });
});

describe("<Textarea />", () => {
  it("Should render", () => {
    renderer.create(
      <Textarea value="This is the default value" onChange={() => {}} />
    );
  });
});

describe("isValidRGBColor()", () => {
  it("Should recognize invalid r values", () => {
    expect(isValidRGBColor({ r: 1000, g: 0, b: 0 })).toBeFalsy();
  });

  it("Should recognize invalid g values", () => {
    expect(isValidRGBColor({ r: 1, g: 550, b: 0 })).toBeFalsy();
  });

  it("Should recognize invalid b values", () => {
    expect(isValidRGBColor({ r: 10, g: 990, b: 0 })).toBeFalsy();
  });

  it("Should recognize valid values", () => {
    expect(isValidRGBColor({ r: 0, g: 0, b: 0 })).toBeTruthy();
  });
});

describe("isValidHex()", () => {
  it("Should recognize valid hex code #fff", () => {
    expect(isValidHex("#fff")).toBeTruthy();
  });

  it("Should recognize valid hex code #ffffff", () => {
    expect(isValidHex("#ffffff")).toBeTruthy();
  });

  it("Should recognize invalid hex code #ff", () => {
    expect(isValidHex("#ff")).toBeFalsy();
  });

  it("Should recognize invalid hex code #fffff", () => {
    expect(isValidHex("#fffff")).toBeFalsy();
  });

  it("Should recognize invalid hex code #11111z", () => {
    expect(isValidHex("#11111z")).toBeFalsy();
  });

  it("Should be false for `undefined`", () => {
    expect(isValidHex()).toBeFalsy();
  });
});

describe("darkenHex()", () => {
  it("Should not be able to darken #000", () => {
    expect(darkenHex("#000", 1)).toEqual("#000000");
  });

  it("Should return same value when 0 is passed in", () => {
    expect(darkenHex("#fff", 0)).toEqual("#ffffff");
  });

  it("Should throw an error when the number is negative", () => {
    expect(() => lightenHex("#fff", -1)).toThrowError();
  });

  it("Should throw an error for invalid values", () => {
    expect(() => darkenHex("#fff", -1)).toThrowError();
  });
});

describe("lightenHex()", () => {
  it("Should make #bbb lighter", () => {
    const result = lightenHex("#bbb", 0.01);

    expect(result).not.toEqual("#bbb");
  });

  it("Should return #ffffff when lighten amount = 1", () => {
    expect(lightenHex("#000", 1)).toEqual("#ffffff");
  });

  it("Should throw an error when you pass it a string that isn't a hex color code", () => {
    expect(() => lightenHex("fdsafdsa", 1)).toThrowError();
  });

  it("Should throw an error when the number is negative", () => {
    expect(() => lightenHex("#fff", -1)).toThrowError();
  });

  it("Should throw an error when the number is above 1", () => {
    expect(() => lightenHex("#000", 10)).toThrowError();
  });
});

describe("getHexFromRGB()", () => {
  it("To return #000 for { r: 255, g: 255, b: 255 }", () => {
    expect(getHexFromRGB({ r: 255, g: 255, b: 255 })).toEqual("#ffffff");
  });

  it("Should throw an error when the RGB number values are out of range", () => {
    expect(() => getHexFromRGB({ r: 0, g: 0, b: 259 })).toThrowError();
  });
});

describe("getRGBFromHex() ", () => {
  it("Should work for #fff", () => {
    expect(getRGBFromHex("#fff")).toMatchObject({ r: 255, g: 255, b: 255 });
  });

  it("Should work for #ffffff", () => {
    expect(getRGBFromHex("#ffffff")).toMatchObject({ r: 255, g: 255, b: 255 });
  });

  it("Should throw an error for an invalid hex value", () => {
    expect(() => getRGBFromHex("$#rfdsaf")).toThrowError();
  });
});

describe("max()", () => {
  it("Should return 1 for (0,1)", () => {
    expect(max(0, 1)).toEqual(1);
  });
  it("Should return 1 for (1,0)", () => {
    expect(max(1, 0)).toEqual(1);
  });
});

describe("min()", () => {
  it("Should return 0 for (0,1)", () => {
    expect(min(0, 1)).toEqual(0);
  });
  it("Should return 0 for (1,0)", () => {
    expect(min(1, 0)).toEqual(0);
  });
});
