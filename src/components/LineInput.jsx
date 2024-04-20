import React from "react"
import { commandRplacer } from "../constant/constant"

export default function LineInput({ startText, value, onChange, inputRef }) {
  let inputNode = commandRplacer(value)

  return (
    <>
      <div className="flex justify-start items-center h-5">
        <p className="font-bold text-white select-none">{startText}</p>

        <div
          className="font-bold text-white tracking-widest ml-3 mr-1"
          dangerouslySetInnerHTML={{ __html: inputNode }}
        ></div>

        <span className="h-full w-2 bg-white animate-pulse"></span>
      </div>

      <input
        spellCheck={false}
        className="opacity-0 w-0 h-0 -z-50"
        value={value}
        ref={inputRef}
        onChange={onChange}
      ></input>
    </>
  )
}
