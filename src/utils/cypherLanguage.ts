import { LanguageSupport, StreamLanguage } from "@codemirror/language"
import { CompletionContext } from "@codemirror/autocomplete"

// Define Cypher keywords
const cypherKeywords = [
  "MATCH", "RETURN", "WHERE", "CREATE", "DELETE", "SET", "REMOVE",
  "WITH", "UNWIND", "MERGE", "OPTIONAL", "DETACH", "EXISTS", "CASE",
  "WHEN", "THEN", "ELSE", "END", "LIMIT", "SKIP", "ORDER", "BY",
  "DESC", "ASC", "DISTINCT", "UNION", "ALL", "LOAD", "CSV", "FROM",
  "AS", "INDEX", "DROP", "CONSTRAINT", "UNIQUE", "NOT", "AND", "OR",
  "XOR", "IN", "STARTS", "ENDS", "CONTAINS", "NULL", "IS", "COUNT",
  "PROFILE", "USING", "CALL", "YIELD", "EXPLAIN"
]

export const cypherLanguage = StreamLanguage.define({
  name: "cypher",
  startState: () => ({
    inString: false,
    stringType: null as null | string,
    inComment: false,
    inMultilineComment: false
  }),

  token: (stream, state) => {
    // Handle comments
    if (state.inMultilineComment) {
      if (stream.match("*/")) {
        state.inMultilineComment = false
        return "comment"
      }
      stream.skipToEnd()
      return "comment"
    }

    if (stream.match("//")) {
      stream.skipToEnd()
      return "comment"
    }

    if (stream.match("/*")) {
      state.inMultilineComment = true
      return "comment"
    }

    // Handle strings
    if (state.inString) {
      while (!stream.eol()) {
        if (stream.next() === state.stringType) {
          state.inString = false
          state.stringType = null
          break
        }
      }
      return "string"
    }

    if (stream.match(/"/) || stream.match(/'/) || stream.match(/`/)) {
      state.inString = true
      state.stringType = stream.string[stream.pos - 1]
      return "string"
    }

    // Handle numbers
    if (stream.match(/^-?\d*\.?\d+/)) return "number"

    // Handle parameters
    if (stream.match(/\$\w+/)) return "variable-2"

    // Handle labels
    if (stream.match(/:`?\w+`?/)) return "atom"

    // Handle properties
    if (stream.match(/\.\w+/)) return "property"

    // Handle keywords
    let word = ""
    while (!stream.eol() && /[\w]/.test(stream.peek())) {
      word += stream.next()
    }

    if (word) {
      if (cypherKeywords.includes(word.toUpperCase())) {
        return "keyword"
      }
      return "variable"
    }

    // Skip spaces
    if (stream.eatSpace()) return null

    // Handle other characters
    stream.next()
    return null
  }
})

// Autocomplete function for Cypher
function cypherComplete(context: CompletionContext) {
  let word = context.matchBefore(/\w*/)
  if (!word || word.from === word.to) return null

  return {
    from: word.from,
    options: cypherKeywords.map(keyword => ({
      label: keyword,
      type: "keyword"
    }))
  }
}

export function cypher() {
  return new LanguageSupport(cypherLanguage, [
    cypherLanguage.data.of({
      autocomplete: cypherComplete
    })
  ])
}