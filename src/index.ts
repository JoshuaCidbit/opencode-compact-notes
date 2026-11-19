import { readFile } from "node:fs/promises"
import { pathToFileURL } from "node:url"
import { Plugin } from "@opencode/plugin"

const LOG_PREFIX = "[opencode-compact-notes]"
const DEFAULT_CONTRACT_URL = new URL("../compact.md", import.meta.url)

/**
 * Load the compaction contract. A custom path can be supplied through plugin
 * options: { "package": "opencode-compact-notes", "options": { "path": "/abs/contract.md" } }
 */
async function loadContract(options: Record<string, unknown>): Promise<string | undefined> {
  const custom = typeof options.path === "string" ? options.path : undefined
  const source = custom ? pathToFileURL(custom) : DEFAULT_CONTRACT_URL

  try {
    const text = await readFile(source, "utf8")
    if (!text.trim()) {
      console.error(`${LOG_PREFIX} contract file is empty: ${source.href}`)
      return undefined
    }
    return text
  } catch (error) {
    console.error(`${LOG_PREFIX} could not read contract at ${source.href}:`, error)
    return undefined
  }
}

export default Plugin.define({
  id: "opencode-compact-notes",
  async setup(ctx) {
    const contract = await loadContract(ctx.options ?? {})
    if (!contract) return

    // Only the compaction hook is registered: normal requests are untouched.
    const registration = await ctx.session.hook("compaction", (event) => {
      // Defensive: if the event shape ever changes, never break native compaction.
      if (!Array.isArray(event.system)) {
        console.error(`${LOG_PREFIX} unexpected compaction event shape (system is not an array); skipping`)
        return
      }
      event.system.push({ type: "text", text: contract })
    })

    console.log(`${LOG_PREFIX} compaction contract loaded (${Buffer.byteLength(contract, "utf8")} bytes)`)
    return () => registration.dispose()
  },
})
