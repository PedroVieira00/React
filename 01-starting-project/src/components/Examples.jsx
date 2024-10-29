import { useState } from "react";
import { EXAMPLES } from "../data.js";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // Here the setSelectedTopic is stored and only executed
    // after the App() is reexecuted, that's why the
    // console.log(selectedTopic) still prints the previous value.
    // console.log(selectedTopic);
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        //   if I wanted the buttonsContainer to be a costume component, it would
        //   have to be like {Section}.
        // buttonsContainer="menu"

        // Sometimes, we might want a default value instead of having to pass
        // so we can set it on the actuall component's receiving props as we did 
        // in Tabs.
        // ButtonsContainer="menu"
        buttons={
          <>
            {/* <TabButton label='Component'></TabButton> */}

            {/* This can be another way to the same. 
            Children is whatever is between the costum component. 
            In this case is the text. */}

            {/* Before we used onSelect because we passed the onSelect to the 
            component but now, as we know we can access the props (it will
            have the class, id,..., onClick) we can just have it there.  */}
            <TabButton
              isSelected={selectedTopic === "components"}
              //   onSelect={() => handleSelect("components")}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              //   onSelect={() => handleSelect("jsx")}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              //   onSelect={() => handleSelect("props")}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              //   onSelect={() => handleSelect("state")}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
      {/* To see if a value is undefined in js you could also do
              !selectedTopic. */}

      {/* The code is , if selectedTopic is undefined print the paragraph
              "Please select a topic", otherwise, print nothing */}

      {/* The way to shorten the code would be to put the code starting 
              with the div and put it o the first null.
              Basicly having only one expression -> if selected topic is 
              undefined print "Please select a topic", otherwise, print the content */}

      {/* There is another approach and it is using && because basicly 
              this operator will output the value that comes after it if the 
              condition before yields true */}

      {/* The last approach it to create in the beggining of the component
              a variable that if the selectedTopic was null would store the code 
              "<p>Please select a topic.</p>"else, it would store the other code. 
              With this approach the JSX code would be much cleaner to understand 
              because it would only need to have {chosenVariableName}.  */}

      {/* This ends up complicanting the readability of the code, its prefered to do
the conditions in the begining of the component. */}

      {/* {selectedTopic === undefined ? <p>Please select a topic.</p> : null}
      {selectedTopic !== undefined ? (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      ) : null} */}
      {/* {tabContent} */}
    </Section>
  );
}
