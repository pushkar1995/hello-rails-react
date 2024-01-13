import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetingMessage } from "../redux/messageSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.value);

  useEffect(() => {
    dispatch(getGreetingMessage());
  }, []);

  return (
    <div>
    <h1>This is Greeting Message!!</h1>
      <h4>{message}</h4>
    </div>
  )
};

export default Greeting;