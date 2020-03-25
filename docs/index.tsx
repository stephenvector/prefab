import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Button,
  Carousel,
  Container,
  Row,
  Column,
  PrefabThemeProvider,
  Hr,
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
  Paragraph,
  lightenHex,
  useField,
  TextField,
  Form
} from "../src";

import CodeSnippet from "./CodeSnippet";
import DemoController from "./DemoController";

import FormControls from "./FormControls";

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

const ButtonLink = Button.withComponent("a");

function Docs() {
  return (
    <PrefabThemeProvider theme={defaultPrefabTheme}>
      <div className="Docs">
        <header style={{ background: defaultPrefabTheme.colors.accent }}>
          <Container>
            <Row>
              <Column>
                <Box fg="#fff" paddingTop={4} paddingBottom={4}>
                  <Display1>prefab</Display1>
                  <Paragraph>A set of themeable UI React components.</Paragraph>
                  <Paragraph>
                    <ButtonLink
                      bg={defaultPrefabTheme.colors.bg}
                      fg={defaultPrefabTheme.colors.fg}
                      href="https://github.com/stephenvector/prefab"
                    >
                      View source on GitHub
                    </ButtonLink>
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
                <FormControls />
              </Column>
            </Row>
          </DemoContainer>
          <DemoContainer>
            <Row>
              <Column>
                <H2>Form State</H2>
              </Column>
            </Row>
            <Row>
              <Column>
                <Form
                  onSubmit={() => {}}
                  initialValues={{ textfield: "Hello, world!" }}
                >
                  <TextField name="textfield" label="Text Field" />
                  <Button type="submit">Submit</Button>
                </Form>
              </Column>
              <Column>
                <CodeSnippet
                  code={`<Form onSubmit={() => {}} initialValues={{textfield: "Hello, world!"}}>
  <TextField name="textfield" label="Text Field" />
  <Button type="submit">Submit</Button>
</Form>`}
                />
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
                  marginBottom={1}
                >
                  <Display1>Box</Display1>
                </Box>

                <CodeSnippet
                  code={`<Box aspectRatio={1}><Display1>Box</Display1></Box>`}
                />
              </Column>
            </Row>
            <Row>
              <Column>
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
                  <Box
                    bg={lightenHex("#e56", 0.6)}
                    fg="#e56"
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide One</H4>
                  </Box>

                  <Box
                    bg={lightenHex("#56e", 0.6)}
                    fg="#56e"
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide Two</H4>
                  </Box>
                  <Box
                    bg={lightenHex("#5e6", 0.6)}
                    fg="#5e6"
                    centerContent
                    aspectRatio={9 / 16}
                  >
                    <H4>Slide Three</H4>
                  </Box>
                </Carousel>
              </Column>
            </Row>
          </DemoContainer>
        </section>
      </div>
    </PrefabThemeProvider>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
