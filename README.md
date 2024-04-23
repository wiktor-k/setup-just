# Setup Just

Quickly sets up [`just` task runner](https://github.com/casey/just) in a GitHub Action.

Compared to other methods this action is designed to use compiled and packaged version of `just` for each major operating system thus significantly reducing installation time.

The action does not have any configuration and is extremely simple (see the `index.js` file!).

## Usage

To use this action use the following fragment:

```yaml
- uses: wiktor-k/setup-just@v1
```

## License

This project is licensed under [Apache License, Version 2.0][APL].

[APL]: https://www.apache.org/licenses/LICENSE-2.0.html

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the package by you shall be under the terms and conditions of this license, without any additional terms or conditions.
