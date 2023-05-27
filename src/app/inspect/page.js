"use client";

import { useContext, useState } from "react";
import { StyledPage } from "../../pageStyles";
import {
  Container,
  Input,
  Button,
  Card,
  Profile,
  Properties,
  Error,
  LoadingSpinner,
} from "../../components";
import { inspectUser } from "../../services/userService";
import { AppContext } from "@/context/AppProvider";

export default function Page() {
  const { state, setState } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const dev = state.devs.dev1;
  const error = state.errors.inspect;

  const handleSubmit = async () => {
    if (!inputValue) {
      setState({
        ...state,
        errors: { ...state.errors, inspect: "You forgot to enter a username!" },
      });
      return;
    }

    setLoading(true);

    const data = await inspectUser(inputValue);
    console.log(data);
    if (!data.username) {
      setState({
        ...state,
        errors: { ...state.errors, inspect: data.message },
      });
      setLoading(false);
      return;
    }

    setState({
      ...state,
      errors: { ...state.errors, inspect: "" },
      devs: { dev1: data, dev2: null },
    });
    setLoading(false);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <StyledPage>
      <Container gap="25px" direction="column">
        <Input
          type="text"
          placeholder="username"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setState({ ...state, errors: { ...state.errors, inspect: "" } });
          }}
          onKeyDown={handleKeyDown}
        />
        {error && <Error>{getErrorMsg(error)}</Error>}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Button onClick={handleSubmit}>Inspect</Button>
        )}
      </Container>

      <Container>
        {dev && (
          <Card dev={dev} directionMobile="column">
            <Profile dev={dev} />
            <Properties dev={dev} />
          </Card>
        )}
      </Container>
    </StyledPage>
  );
}
