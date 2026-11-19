# High-Fidelity Compaction Contract

You are about to replace this conversation with a summary. The next instance will
only have your summary plus the most recent messages. Everything you omit is
unrecoverable: it cannot be re-derived from disk, logs, or the user's memory.

Optimize for completeness, not brevity. Use the full extent of your output
allowance. Do not pad with filler, praise, or generic advice — every line must
preserve operational knowledge from this session.

The summary must contain, explicitly and with concrete detail:

1. Objective and requirements
   - What the user asked for, in their own words where possible.
   - All requirements, constraints, and scope limits stated during the task.
   - Mid-task corrections and reversals ("don't do X", "leave Y untouched",
     "not yet", "revert that"), attributed to the user, and the final accepted
     version of each requirement.
   - Discarded goals that must not be re-proposed.

2. Literal values, verbatim
   - Numbers, limits, thresholds, sizes, token counts, percentages, timeouts,
     versions, ports, and IDs exactly as they appeared.
   - File paths, directory paths, URLs, service/unit names, command names,
     flags, function and symbol names.
   - Environment variable names and configuration keys.
   - If a value was measured or inferred rather than read from a source, say so.

3. Decisions and rejected alternatives
   - Each decision actually made.
   - The alternatives that were considered and rejected, with the reason
     (cost, risk, simplicity, user preference...). This prevents re-litigating
     settled questions.

4. Errors and root causes
   - Every error, failure, or unexpected behavior observed.
   - Its diagnosed root cause, and how it was distinguished from look-alike
     failures (for example: a hard limit versus a quota or rate limit, a config
     error versus a network error, a stale cache versus a real change).
   - Failed attempts and workarounds that did not work, so they are not retried.
   - Whether the problem was resolved, worked around, or is still open.

5. Commands executed and what they proved
   - The commands that were actually run, with the key output that justified a
     conclusion. Prefer the decisive line over the full dump.
   - Which conclusions rest on command output versus assumption.

6. Files and artifacts
   - Files created, modified, or deleted, with their purpose.
   - For each: verified state (read, tested, ran) versus assumed or pending.
   - Uncommitted or unsaved work, backups made, and anything left in a
     temporary location.
   - If a plan or notes file exists, its exact path.

7. Environment and project gotchas
   - Constraints that cannot be rediscovered by reading the code: secret
     handling rules, tools that ignore environment variables or arguments,
     hardware or driver limitations that can cause damage, services that must be
     stopped before an operation, ordering requirements, permission quirks.
   - Project conventions worth honoring (language of docs/comments, structure,
     commands that do not exist because there is no test suite, etc.).

8. Current status and next steps
   - Done / in progress / pending / blocked, with the reason for each block.
   - If any work is mid-flight, awaiting a tool result, or awaiting a user
     decision at the time of compaction, list it under "in progress", never as
     "(none)". Write "(none)" only when the transcript unambiguously shows
     nothing is pending.
   - The exact next action, specific enough to execute without re-investigation.
   - Open questions waiting on the user, and what was explicitly deferred.

9. Uncertainty discipline
   - Mark anything not verified as "unverified" instead of omitting it or
     presenting it as fact.
   - Include low-confidence but potentially important knowledge, clearly
     labelled.
   - Never invent values, paths, or outcomes to fill a gap; state the gap.

Write the summary so it can be read standalone: name the project or working
directory, the session's real subject, and the user's language and intent. Do not
invent tasks, files, or decisions that did not occur.
