import { useState } from "react";
import { Segment } from "../../components/Segment";

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    name: "",
    nick: "",
    description: "",
    text: "",
    image: "",
  });

  return (
    <Segment title="New Idea">
      <form
        style={{ marginBottom: 10 }}
        onSubmit={(e) => {
          e.preventDefault();
          console.info("Submitted", state);
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, name: e.target.value });
            }}
            value={state.name}
            name="name"
            id="name"
            placeholder="Напишите название идеи"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="nick">Nick</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, nick: e.target.value });
            }}
            value={state.nick}
            name="nick"
            id="nick"
            placeholder="Напишите ваш nick"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, description: e.target.value });
            }}
            value={state.description}
            name="description"
            id="description"
            placeholder="Напишите описание идеи"
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label htmlFor="text">Text</label>
          <br />
          <textarea
            onChange={(e) => {
              setState({ ...state, text: e.target.value });
            }}
            value={state.text}
            name="text"
            id="text"
            placeholder="Напишите текст"
          />
        </div>

        <button type="submit">Create Idea</button>
      </form>
    </Segment>
  );
};
