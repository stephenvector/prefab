import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Button,
  Carousel,
  Container,
  Row,
  Column,
  DatePicker,
  PrefabThemeProvider,
  Slider,
  Hr,
  Textarea,
  Display1,
  Display2,
  Display3,
  Display4,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  defaultPrefabTheme,
  RadioGroup,
  Select,
  Paragraph,
  Input,
  Padding
} from "../src";

import CodeSnippet from "./CodeSnippet";
import DemoController from "./DemoController";

const DOCS_SELECT_OPTIONS = [
  {
    label: "Green",
    value: "green"
  },
  {
    label: "Blue",
    value: "blue"
  },
  {
    label: "Red",
    value: "red"
  },
  {
    label: "Purple",
    value: "purple"
  },
  {
    label: "Orange",
    value: "orange"
  },
  {
    label: "Pink",
    value: "Pink"
  },
  {
    label: "Grey",
    value: "grey"
  }
];

// <Box marginY={4}>

function DemoContainer(props) {
  return (
    <Box marginY={4}>
      <Container {...props} />
    </Box>
  );
}

function Docs() {
  return (
    <PrefabThemeProvider theme={defaultPrefabTheme}>
      <div className="Docs">
        <header style={{ background: "#f2f2f2" }}>
          <Container>
            <Row>
              <Column>
                <Box paddingTop={4} paddingBottom={4}>
                  <Display1>prefab</Display1>
                  <Paragraph>A set of themeable UI React components.</Paragraph>
                  <Paragraph>
                    <Button
                      as="a"
                      href="https://github.com/stephenvector/prefab"
                    >
                      View source on GitHub
                    </Button>
                  </Paragraph>
                </Box>
              </Column>
            </Row>
          </Container>
        </header>
        <section>
          <DemoContainer>
            <Row>
              <Column>
                <H1>Buttons</H1>
                <Box marginBottom={1}>
                  <Button>Button</Button>
                </Box>
                <Box marginBottom={1}>
                  <Button bg="#000" fg="#fff">
                    Custom Colors
                  </Button>
                </Box>
                <Box marginBottom={1}>
                  <Button outline bg="#000" fg="#fff">
                    Outline Button
                  </Button>
                </Box>
                <Box marginBottom={1}>
                  <Button fullWidth>Button</Button>
                </Box>
                <CodeSnippet
                  code={`<Button>Button</Button>
<Button bg="#000" fg="#fff">Custom Colors</Button>
<Button outline bg="#000" fg="#fff">Outline Button</Button>
<Button fullWidth>Button</Button>`}
                />
              </Column>
              <Column></Column>
            </Row>
          </DemoContainer>
          <DemoContainer>
            <Row>
              <Column>
                <DemoController label="RadioGroup" initialValue="red">
                  {({ value, onChange }) => (
                    <RadioGroup
                      onChange={onChange}
                      value={value}
                      options={DOCS_SELECT_OPTIONS}
                    />
                  )}
                </DemoController>
              </Column>
            </Row>
          </DemoContainer>
          <DemoContainer>
            <Row>
              <Column>
                <H2>Grid System</H2>

                <CodeSnippet
                  code={`
<Container>
  <Row>
    <Column>{...}</Column>
  </Row>
</Container>
`}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Box
                  aspectRatio={1}
                  centerContent
                  style={{ background: "#888", color: "#fff" }}
                >
                  <Display1>Box</Display1>
                </Box>
                <CodeSnippet
                  code={`<Box aspectRatio={1}><Display1>Box</Display1></Box>`}
                />
              </Column>
              <Column>
                <CodeSnippet
                  code={`<Button fullWidth>Full Width Button</Button>`}
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <h3>Button Group</h3>
                {/* <ButtonGroup>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup> */}

                <div id="typography">
                  <h2>Typography</h2>
                  <Display1>Display1</Display1>
                  <Display2>Display2</Display2>
                  <Display3>Display3</Display3>
                  <Display4>Display4</Display4>
                  <H1>Heading 1</H1>
                  <H2>Heading 2</H2>
                  <H3>Heading 3</H3>
                  <H4>Heading 4</H4>
                  <H5>Heading 5</H5>
                  <H6>Heading 6</H6>
                </div>

                <Hr />

                <H3>Carousel</H3>
                <Carousel>
                  {/* <Box
                    style={{ background: "#777", color: "#fff" }}
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide One</H4>
                  </Box>
                  <Box
                    style={{ background: "#444", color: "#fff" }}
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide Two</H4>
                  </Box>
                  <Box
                    style={{ background: "#555", color: "#fff" }}
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide Three</H4>
                  </Box> */}
                </Carousel>

                <H3>DatePicker</H3>
                <DemoController initialValue={new Date().valueOf()}>
                  {({ value, onChange }) => (
                    <DatePicker value={value} onChange={onChange} />
                  )}
                </DemoController>

                {/* <H3>Slider</H3>
                <DemoController initialValue={50} component={Slider} />

                <DemoController
                  initialValue={"This is preview text"}
                  component={Textarea}
                /> */}
              </Column>
            </Row>

            <Row>
              <Column>
                <H3>Select</H3>
              </Column>
            </Row>
            <Row>
              <Column>
                <DemoController initialValue="">
                  {({ value, onChange }) => (
                    <Select
                      optionsLabel="Select a color"
                      toggleLabel="Open"
                      listId="examplelist"
                      onChange={onChange}
                      value={value}
                      options={DOCS_SELECT_OPTIONS}
                    />
                  )}
                </DemoController>
              </Column>
              <Column>
                <CodeSnippet
                  code={`<Select options={{label: string, value: string}[]} />`}
                />
              </Column>
            </Row>
          </DemoContainer>

          <Box aspectRatio={1 / 4} centerContent>
            <H3>prefab</H3>
          </Box>
        </section>
      </div>
    </PrefabThemeProvider>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
