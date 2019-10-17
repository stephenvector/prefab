import React from "react";
import ReactDOM from "react-dom";
import {
  Box,
  Button,
  ButtonGroup,
  Carousel,
  ColorPicker,
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
  Select,
  Paragraph,
  Padding
} from "../src";

import CodeSnippet from "./CodeSnippet";
import DemoController from "./DemoController";

const DOCS_SELECT_OPTIONS = [
  {
    label: "First Item",
    value: "first"
  },
  {
    label: "Second Item",
    value: "first"
  },
  {
    label: "Third Item",
    value: "first"
  }
];

function Docs() {
  return (
    <PrefabThemeProvider theme={defaultPrefabTheme}>
      <div className="Docs">
        <header>
          <Container>
            <Row>
              <Column>
                <Padding top={8} bottom={6}>
                  <Display1>prefab</Display1>
                  <Paragraph>A set of themeable UI React components.</Paragraph>
                  <Paragraph>
                    <a href="https://github.com/stephenvector/prefab">
                      View source on GitHub
                    </a>
                  </Paragraph>
                </Padding>
              </Column>
            </Row>
          </Container>
        </header>
        <section>
          <Container>
            <Row>
              <Column>
                <Box aspectRatio={2 / 4} centerContent>
                  <Button>Button</Button>
                  <CodeSnippet code={`<Button>Normal Button</Button>`} />
                </Box>
              </Column>
              <Column>
                <Box aspectRatio={1} centerContent>
                  <Button fullWidth>Button</Button>
                  <CodeSnippet
                    code={`<Button fullWidth>Full Width Button</Button>`}
                  />
                </Box>
              </Column>
            </Row>
            <Row>
              <Column>
                <h3>Button Group</h3>
                <ButtonGroup>
                  <Button>Button</Button>
                  <Button>Button</Button>
                </ButtonGroup>

                <DemoController
                  initialValue="#e56"
                  label="ColorPicker"
                  component={ColorPicker}
                />

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
                  </Box>
                </Carousel>

                <H3>DatePicker</H3>
                <DemoController
                  initialValue={new Date().getTime()}
                  component={DatePicker}
                />

                <H3>Slider</H3>
                <DemoController initialValue={50} component={Slider} />

                <DemoController
                  initialValue={"This is preview text"}
                  component={Textarea}
                />
              </Column>
            </Row>

            <Row>
              <Column>
                <H3>Select</H3>
              </Column>
            </Row>
            <Row>
              <Column>
                <div>
                  <Select options={DOCS_SELECT_OPTIONS} value={undefined} />
                </div>
              </Column>
              <Column>
                <CodeSnippet
                  code={`<Select options={{label: string, value: string}[]} />`}
                />
              </Column>
            </Row>
          </Container>

          <Box aspectRatio={1 / 4} centerContent>
            <H3>prefab</H3>
          </Box>
        </section>
      </div>
    </PrefabThemeProvider>
  );
}

ReactDOM.render(<Docs />, document.getElementById("root"));
