# hackerscript

> A tool for writing scripts in JS with sensible default frameworks.

Inspired by [zx](https://github.com/google/zx), `hackscript` is a version that is specifically tailored towards me and my needs.

## Differences

### Features kept

- API:
  - `chalk` package
  - `os` package

### Features removed

- Remote file execution
- API:
  - `$` with its template functionality and all its children
  - `fs` package
  - `question` function
  - `fetch` function
  - `cd` function

### Features added

- API:
  - `arg` for simple argument parsing (uses [vercel/arg](https://github.com/vercel/arg))
  - `open` for opening files, urls and the like with the OS' default program (uses [sindresorhus/open](https://github.com/sindresorhus/open))
  - `prompt` for creating interactive prompts (uses [enquirer/enquirer](https://github.com/enquirer/enquirer))

#### License

<!-- markdownlint-disable-next-line MD033 -->
<sup>
<!-- markdownlint-disable-next-line MD033 -->
Licensed under the <a href="license-mit">MIT license</a>.
</sup>
