import React, { useEffect, useReducer, useRef, useState } from "react"
import LineInput from "./components/LineInput"
import Copyright from "./components/Copyright"
import LineText from "./components/LineText"

const reducerKeys = {
  SET_INPUT: "SET_INPUT",
  SET_PREV_COMMANDS: "SET_PREV_COMMANDS",
  RESET_PREV_COMMANDS: "RESET_PREV_COMMANDS",
}

const reducer = (state, action) => {
  switch (action.type) {
    case reducerKeys.SET_INPUT: {
      return {
        ...state,
        input: action.value,
      }
    }

    case reducerKeys.SET_PREV_COMMANDS: {
      return {
        ...state,
        prevCommands: [...state.prevCommands, action.value],
      }
    }

    case reducerKeys.RESET_PREV_COMMANDS: {
      return {
        ...state,
        prevCommands: [],
      }
    }

    default: {
      return state
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    prevCommands: [],
  })

  const inputRef = useRef()
  const startText = `${window.location.origin} ~ $ `

  const changeHandler = (event) => {
    dispatch({ type: reducerKeys.SET_INPUT, value: event.target.value })
  }

  const resetInput = () => {
    dispatch({ type: reducerKeys.SET_INPUT, value: "" })
  }

  const focusInput = () => inputRef.current.focus()

  const commandHandler = (command) => {
    dispatch({
      type: reducerKeys.SET_PREV_COMMANDS,
      value: command,
    })

    switch (command) {
      case "ra -help document": {
        dispatch({
          type: reducerKeys.SET_PREV_COMMANDS,
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem quaerat necessitatibus sint quibusdam architecto provident dolorum at possimus voluptatem accusamus facere voluptate aspernatur fugiat, maiores sunt ut repellat mollitia!",
        })
        break
      }

      case "date now -string": {
        dispatch({
          type: reducerKeys.SET_PREV_COMMANDS,
          value: `Time is: ${Date()}`,
        })
        break
      }

      case "date now -unix": {
        dispatch({
          type: reducerKeys.SET_PREV_COMMANDS,
          value: `Time is: ${Date.now()}`,
        })
        break
      }

      case "clear": {
        dispatch({ type: reducerKeys.RESET_PREV_COMMANDS })
        break
      }

      default: {
        dispatch({
          type: reducerKeys.SET_PREV_COMMANDS,
          value: command ? `'${command}' is not supported` : "",
        })
        break
      }
    }
  }

  const submitCommand = (event) => {
    event.preventDefault()

    const isEnter = event.keyCode === 13 || event.key === "Enter"
    const command = state.input.trim()

    if (isEnter) {
      commandHandler(command)
      resetInput()
    }
  }

  useEffect(() => {
    focusInput()

    window.addEventListener("contextmenu", (ev) => ev.preventDefault())
  }, [])

  return (
    <div
      className="bg-gray-800 w-full min-h-screen p-4"
      onKeyUp={submitCommand}
      onClick={focusInput}
    >
      <Copyright />

      {state.prevCommands.map((command) => (
        <LineText
          key={crypto.randomUUID()}
          value={command}
          startText={startText}
        />
      ))}

      <LineInput
        startText={startText}
        inputRef={inputRef}
        value={state.input}
        onChange={changeHandler}
      />
    </div>
  )
}

export default App
