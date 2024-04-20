export const commands = [
  "ra",
  "npx",
  "npm",
  "echo",
  "req",
  "date",
  "create",
  "delete",
  "update",
  "read",
  "cd",
  "mkdir",
  "unix",
  "help",
  "clear",
  "string",
]

export const dashs = [
  "ra",
  "npx",
  "npm",
  "echo",
  "req",
  "date",
  "create",
  "delete",
  "update",
  "read",
  "cd",
  "mkdir",
  "unix",
  "help",
  "clear",
  "string",
]

export const commandRplacer = (command) => {
  let node = command.slice()

  commands.forEach((command) => {
    node = node.replace(
      `${command}`,
      `<strong class="text-blue-500">${command}</strong>`
    )
  })

  dashs.forEach((dash) => {
    node = node.replaceAll(
      `-${dash}`,
      `<strong class="text-gray-500">-${dash}</strong>`
    )
  })

  return node
}
