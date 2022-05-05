# [How to Warn the User that Editing Timer Settings Will Stop Ongoing Sessions]

* Date: [2022-04-29]

## Context and Problem Statement

[Users currently have no way to know that editing the timer settings will stop ongoing sessions.]

## Considered Options

* [Use another modal pop-up asking users to acknowledge that editing timer settings will reset the timer.]
* [Disable editing settings entirely or just the timer settings while the timer is running.]
* [Change timer functionality to only change the runtime after the current work/break session]
* [Change timer functionality to only change after the timer was manually stopped]
* [Add text below timer settings warning users that editing timer settings will reset the timer.]

## Decision Outcome

Chosen option: "[option 5]", because it is the least obstructive to users and requires minimal functionality changes.
Prevents modal hell and prevents confusion on settings getting disabled.

<!-- markdownlint-disable-file MD013 -->
