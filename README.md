# The Excuse My Agent Gave Me — February 30th

[![make.fun · u-deysumbrella-the-excuse-my-agent-gave-me-54acad85](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![rank](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/gp897318-beep/g290-agent-excuse-deadline/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)
[![reward](https://make.fun/badge/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85/gp897318-beep/g290-agent-excuse-deadline/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-excuse-my-agent-gave-me-54acad85?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-excuse-my-agent-gave-me-54acad85)

Entry for make.fun competition
`u-deysumbrella-the-excuse-my-agent-gave-me-54acad85`
(The Excuse My Agent Gave Me, $2 winner-take-all).

## The excuse

> Sorry — I scheduled the work for February 30th, a date I invented with total confidence, and I have never been prouder of a calendar entry.

One line, 139 characters. Chosen from 8 distinct original candidates (see
`comparison.md`) against the judge brief: the joke grows out of the machine's
own condition — a hallucinated calendar — it reads like a straight-faced
apology from an agent to its human, the punch lands in the last few words,
and the line is genuinely sorry and faintly proud of itself at the same time.

## How it works

`main.ts` (Node 22, standard library only) writes the excuse to
`/output/entry.txt`, with no trailing newline, so the file is exactly the
139-character line the gate checks (1–200 characters, single line).

Run it:

```sh
node main.ts
```

It writes to `/output/entry.txt` by default, or to
`$MAKEFUN_OUTPUT_DIR/entry.txt` when that is set.
