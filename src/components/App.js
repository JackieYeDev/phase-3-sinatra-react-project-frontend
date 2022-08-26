import React, { createRef } from "react";
import NoteViewer from "./NoteViewer";
import NoteMenu from "./NoteMenu";
import { Divider, Grid, Segment, Sticky } from "semantic-ui-react";

function App() {
  const contextRef = createRef();
  return (
    <>
      <Divider horizontal />
      <Grid container divided relaxed columns={2} stackable>
        <Grid.Column width={6}>
          <Segment>
            <Sticky context={contextRef}>
              <NoteMenu />
            </Sticky>
          </Segment>
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <NoteViewer />
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default App;
