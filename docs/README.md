📢 Use this project, [contribute](https://github.com/vtex-apps/elfsight) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Elfsight

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Elfsight widgets help 300,000+ website owners to increase sales, engage visitors, collect leads and more.

![image](https://user-images.githubusercontent.com/284515/87573824-dbee0700-c6a3-11ea-9ca2-0f03809b785b.png)

## Configuration 

1. Adding the app as a theme dependency in the `manifest.json` file;

```json
"dependencies": {
  "vtex.elfsight": "0.x"
}
```

2. Add the block `elfsight` to your theme `blocks.json` passing the prop `appId`.

Example:

```diff
   "footer-layout.desktop": {
     "children": [
+      "elfsight#foobar"
     ]
   },

+  "elfsight#foobar": {
+    "props": {
+      "appId": "4a13d81d-20f3-4661-b472-9de777efe3ed"
+    }
+  }
```

### `elfsight` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `appId`      | `string`       | The app id of the widget provided by the Elfsight in the format of: `XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`.          | ``        |

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind are welcome!

<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
