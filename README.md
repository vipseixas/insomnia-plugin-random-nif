# insomnia-plugin-random-nif

Insomnia plugin that generates a random valid portuguese NIF value.

## About

NIF is a portuguese individual (as opposed to organizations) fiscal identification number composed by 9 digits. The first digit must be in the range [1-3] and the last digit is a mod-11 check digit.

## How to Install

To install this package, you need to go to Insomnia's Preferences screen > Plugins tab and put `insomnia-plugin-random-nif` in the `npm-package-name` field and hit Install Plugin.

### Alternate Method

In case something similar happens to issue [#905](https://github.com/Kong/insomnia/issues/905), you can always navigate to the Insomnia plugins folder and install the package manually, using one of the below commands.

```
yarn add insomnia-plugin-random-nif
```

```
npm install insomnia-plugin-random-nif
```

To get more info on this, read [this comment](https://github.com/Kong/insomnia/issues/905#issuecomment-519472520).

## Built for

[Insomnia](https://insomnia.rest/)

## Author

Vinicius Seixas

## Inspiration

Inspired by [insomnia-plugin-random-cnpj by @gustaandrade](https://github.com/gustaandrade/insomnia-plugin-random-cnpj) which was inspired by [insomnia-plugin-random-cpf by @edicarloslds](https://github.com/edicarloslds/insomnia-plugin-random-cpf)

## License

This project is licensed under the MIT License.
