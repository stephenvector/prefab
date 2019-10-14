import React from "react";
import { mount } from "enzyme";
import {
  Box,
  Button,
  ButtonGroup,
  Carousel,
  Code,
  ColorPicker,
  Column,
  Container,
  DatePicker,
  Input,
  Label,
  Loading,
  PrefabThemeProvider,
  ProgressBar,
  Row,
  Select,
  Slider,
  Table,
  TableHead,
  TableHeadCell,
  TableRow,
  TableCell,
  TableBody,
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

describe("<Box />", () => {
  it("Should render", () => {
    mount(<Box />);
  });

  it("Should render aspect ratio of 1 as a square", () => {
    const wrapper = mount(<Box aspectRatio={1} />);
    const clientRect = wrapper.getDOMNode().getBoundingClientRect();
    expect(clientRect.width).toEqual(clientRect.height);
  });
});

describe("<Button />", () => {
  it("Should render", () => {
    mount(<Button />);
  });
});

describe("<ButtonGroup />", () => {
  it("Should render", () => {
    mount(<ButtonGroup />);
  });
});

describe("<Carousel />", () => {
  it("Should render", () => {
    mount(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    );
  });
});

describe("<Code />", () => {
  it("Should render", () => {
    mount(<Code />);
  });
});

describe("<ColorPicker />", () => {
  it("Should render", () => {
    mount(<ColorPicker onChange={() => {}} value="#e56" />);
  });
});

describe("<Column />", () => {
  it("Should render", () => {
    mount(<Column />);
  });
});

describe("<Container />", () => {
  it("Should render", () => {
    mount(<Container />);
  });
});

describe("<DatePicker />", () => {
  it("Should render", () => {
    mount(<DatePicker />);
  });
});

describe("<Input />", () => {
  it("Should render", () => {
    mount(<Input value="fdsafdsa" onChange={() => {}} />);
  });
});

describe("<Label />", () => {
  it("Should render", () => {
    mount(<Label />);
  });
});

describe("<Loading />", () => {
  it("Should render", () => {
    mount(<Loading />);
  });
});

describe("<PrefabThemeProvider />", () => {
  it("should render", () => {
    mount(<PrefabThemeProvider />);
  });
});

describe("<ProgressBar />", () => {
  it("Should render", () => {
    mount(<ProgressBar value={0.66} />);
  });
});

describe("<Row />", () => {
  it("Should render", () => {
    mount(<Row />);
  });
});

describe("<Select />", () => {
  it("Should render", () => {
    mount(<Select />);
  });
});

describe("<Slider />", () => {
  it("Should render", () => {
    mount(<Slider value={45} onChange={() => {}} />);
  });
});

describe("<Table />", () => {
  it("Should render", () => {
    mount(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Head</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  });
});

describe("<H1 />", () => {
  it("Should render", () => {
    mount(<H1 />);
  });
});

describe("<H2 />", () => {
  it("Should render", () => {
    mount(<H2 />);
  });
});

describe("<H3 />", () => {
  it("Should render", () => {
    mount(<H3 />);
  });
});

describe("<H4 />", () => {
  it("Should render", () => {
    mount(<H4 />);
  });
});

describe("<H5 />", () => {
  it("Should render", () => {
    mount(<H5 />);
  });
});

describe("<H6 />", () => {
  it("Should render", () => {
    mount(<H6 />);
  });
});

describe("<Display1 />", () => {
  it("Should render", () => {
    mount(<Display1 />);
  });
});

describe("<Display2 />", () => {
  it("Should render", () => {
    mount(<Display2 />);
  });
});

describe("<Display3 />", () => {
  it("Should render", () => {
    mount(<Display3 />);
  });
});

describe("<Display4 />", () => {
  it("Should render", () => {
    mount(<Display4 />);
  });
});

describe("<Textarea />", () => {
  it("Should render", () => {
    mount(<Textarea value="This is the default value" onChange={() => {}} />);
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
