import React from "react"

export default function Copyright() {
  return (
    <div className="flex flex-col mb-10 gap-5 select-none">
      <h1 className="font-bold text-white">Terminal Temple</h1>

      <p className="text-gray-400">
        Professional command line to send requests and other features
      </p>

      <p className="text-gray-400">Copyright © 2024 RaLine</p>

      <p className="text-gray-400">
        <span>To print available commands, type "</span>
        <span className="select-all">ra -help document</span>
        <span>" and press Enter.</span>
      </p>
    </div>
  )
}
