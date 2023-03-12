import React from "react";
import { Stack } from "@mui/material";

import PrevNext from "./PrevNext";
import JaydenPrompt from "./JaydenPrompt";
import { Trail } from "./Trail";
import { MyTextField } from "./MyTextField";

import styles from "../styles/pages.module.css";

export default function Idea({ goPrev, goNext, slide, idea, setIdea }) {
  return (
    <div className={styles.container}>
      <div className={styles.verticalCentre}>
        <Trail open={slide == 2}>
          <span className={styles.major}>Project Idea?</span>
        </Trail>
        <JaydenPrompt
          text={
            "OK! No funny business… Describe your project idea to me. I like to think about who my target audience is and the goals!"
          }
          open={slide == 2}
        />
        <Stack className={styles.textbox}>
          <MyTextField
            variant="outlined"
            fullWidth
            value={idea.value}
            onChange={(e) => setIdea({ value: e.target.value, error: "" })}
            label={idea.value ? "" : "Idea"}
            error={idea.error ? true : false}
            helperText={idea.error}
            rows={4}
            multiline
          />
        </Stack>
        <PrevNext goPrev={goPrev} goNext={goNext} />
      </div>
    </div>
  );
}
