import React from "react"
import { commandRplacer } from "../constant/constant"

export default function LineText({ startText, value }) {
  let inputNode = commandRplacer(value)

  return (
    <div className="flex justify-start items-start min-h-5 my-3">
      <p className="font-bold text-white min-w-[200px] select-none">{startText}</p>

      <div
        className="font-bold text-white tracking-widest ml-3 mr-1 text-wrap"
        dangerouslySetInnerHTML={{ __html: inputNode }}
      ></div>
    </div>
  )
}
