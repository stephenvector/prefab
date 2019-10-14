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
  Textarea,
  Display1,
  H3,
  P,
  PrefabTheme,
  Select
} from "../src";

import CodeSnippet from "./CodeSnippet";
import DemoController from "./DemoController";

const buttonCode = `<Button>Button</Button>`;

function Docs() {
  return (
    <PrefabThemeProvider theme={PrefabTheme}>
      <div className="Docs">
        <header>
          <Container>
            <Row>
              <Column>
                <Display1>prefab</Display1>
                <P>A set of themeable UI React components.</P>
                <P>
                  <a href="https://github.com/stephenvector/prefab">
                    View source on GitHub
                  </a>
                </P>
              </Column>
            </Row>
          </Container>
        </header>
        <section>
          <Container>
            <Row>
              <Column>
                <h2>Components</h2>

                <CodeSnippet code={buttonCode} />

                <H3 component="h3">Button</H3>
                <Button>Button</Button>

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

                <H3>Carousel</H3>
                <Carousel>
                  <Box centerContent aspectRatio={9 / 16}>
                    Slide One
                  </Box>
                  <Box centerContent aspectRatio={9 / 16}>
                    Slide Two
                  </Box>
                  <Box centerContent aspectRatio={9 / 16}>
                    Slide Three
                  </Box>
                </Carousel>

                <H3 component="h3">DatePicker</H3>
                <DemoController
                  initialValue={new Date().getTime()}
                  component={DatePicker}
                />

                <H3 component="h3">Slider</H3>
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
                  <Select options={[]} value={undefined} />
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
