"use strict";(self.webpackChunkcreate_docs_blog=self.webpackChunkcreate_docs_blog||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"helpful-javascript-utility-functions","metadata":{"permalink":"/blog/helpful-javascript-utility-functions","editUrl":"https://github.com/YourName/YourName.github.io/tree/master/blog/2023-06-15-helpful-javascript-utility-functions/part-01-helpful-javascript-utility-functions.mdx","source":"@site/blog/2023-06-15-helpful-javascript-utility-functions/part-01-helpful-javascript-utility-functions.mdx","title":"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch","description":"Ng\xe0y nay, JavaScript l\xe0 m\u1ed9t trong nh\u1eefng ng\xf4n ng\u1eef l\u1eadp tr\xecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t tr\xean th\u1ebf gi\u1edbi. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi nhi\u1ec1u c\xf4ng ty nh\u01b0 Google, Facebook, Microsoft, v.v. \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web. JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t m\u1ea1nh m\u1ebd c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p. N\xf3 c\u0169ng l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t linh ho\u1ea1t c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web \u0111\u01a1n gi\u1ea3n.","date":"2023-06-15T00:00:00.000Z","formattedDate":"15 th\xe1ng 6, 2023","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"resources","permalink":"/blog/tags/resources"},{"label":"learning","permalink":"/blog/tags/learning"}],"readingTime":1.87,"hasTruncateMarker":true,"authors":[{"name":"Nguy\u1ec5n Hu\u1ef3nh Minh Ti\u1ebfn","title":"Fullstack Developer","url":"https://github.com/TienNHM","imageURL":"https://github.com/TienNHM.png","key":"TienNHM"}],"frontMatter":{"slug":"helpful-javascript-utility-functions","title":"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch","authors":["TienNHM"],"tags":["javascript","resources","learning"],"enableComments":true,"draft":false,"image":"https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg"},"nextItem":{"title":"C\xe1c trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript","permalink":"/blog/best-websites-to-learn-javascript"}},"content":"import Tabs from \'@theme/Tabs\';\\nimport TabItem from \'@theme/TabItem\';\\nimport CodeBlock from \'@theme/CodeBlock\';\\nimport GetValuesByKey from \'!!raw-loader!./scripts/GetValuesByKey.js\';\\nimport GetValuesByKeyTest from \'!!raw-loader!./scripts/GetValuesByKey.test.js\';\\nimport FlattenObject from \'!!raw-loader!./scripts/FlattenObject.js\';\\nimport FlattenObjectTest from \'!!raw-loader!./scripts/FlattenObject.test.js\';\\nimport FlattenObjectWithKey from \'!!raw-loader!./scripts/FlattenObjectWithKey.js\';\\nimport FlattenObjectWithKeyTest from \'!!raw-loader!./scripts/FlattenObjectWithKey.test.js\';\\n\\n<p align=\\"right\\">\\n    <img src=\\"https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2FYourName.github.io%2Fblog%2Fhelpful-javascript-utility-functions&label=\u26aaViews&labelColor=%2337d67a&countColor=%23555555&style=flat&labelStyle=upper\\" loading=\'lazy\' decoding=\'async\'/>\\n</p>\\n\\nNg\xe0y nay, JavaScript l\xe0 m\u1ed9t trong nh\u1eefng ng\xf4n ng\u1eef l\u1eadp tr\xecnh ph\u1ed5 bi\u1ebfn nh\u1ea5t tr\xean th\u1ebf gi\u1edbi. N\xf3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng b\u1edfi nhi\u1ec1u c\xf4ng ty nh\u01b0 Google, Facebook, Microsoft, v.v. \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web. JavaScript l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t m\u1ea1nh m\u1ebd c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p. N\xf3 c\u0169ng l\xe0 m\u1ed9t ng\xf4n ng\u1eef r\u1ea5t linh ho\u1ea1t c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 x\xe2y d\u1ef1ng c\xe1c \u1ee9ng d\u1ee5ng web \u0111\u01a1n gi\u1ea3n.\\n\\nTrong b\xe0i vi\u1ebft n\xe0y, t\xf4i s\u1ebd li\u1ec7t k\xea m\u1ed9t s\u1ed1 h\xe0m ti\u1ec7n \xedch JavaScript h\u1eefu \xedch nh\u1ea5t m\xe0 t\xf4i \u0111\xe3 s\u1eed d\u1ee5ng trong c\xe1c d\u1ef1 \xe1n c\u1ee7a m\xecnh.\\n\\n\x3c!-- truncate --\x3e\\n\\n![JavaScript](https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg)\\n\\n## 1. GetValuesByKey\\n\\nH\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\u1ea5y c\xe1c gi\xe1 tr\u1ecb c\xf3 c\xf9ng t\xean field trong m\u1ed9t `object`, bao g\u1ed3m c\xe1c `object` con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t m\u1ea3ng c\xe1c gi\xe1 tr\u1ecb t\xecm \u0111\u01b0\u1ee3c.\\n\\n<Tabs defaultValue=\\"source\\" className=\\"unique-tabs\\">\\n  <TabItem value=\\"source\\" label=\\"Source code \ud83d\udcc3\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers title=\\"GetValuesByKey.js\\">\\n        {GetValuesByKey}\\n    </CodeBlock>\\n  </TabItem>\\n  <TabItem value=\\"try\\" label=\\"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers live noInline>\\n        {GetValuesByKeyTest}\\n    </CodeBlock>\\n  </TabItem>\\n</Tabs>\\n\\n## 2. Flatten object\\n\\n### 2.1. Flatten object\\nH\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\xe0m ph\u1eb3ng m\u1ed9t `object` c\xf3 c\xe1c `object` con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t `object` m\u1edbi v\u1edbi c\xe1c `key` l\xe0 `key` c\u1ee7a c\xe1c `object` con l\u1ed3ng nhau.\\n\\n<Tabs defaultValue=\\"source\\" className=\\"unique-tabs\\">\\n  <TabItem value=\\"source\\" label=\\"Source code \ud83d\udcc3\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers title=\\"FlattenObject.js\\">\\n        {FlattenObject}\\n    </CodeBlock>\\n  </TabItem>\\n  <TabItem value=\\"try\\" label=\\"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers live noInline>\\n        {FlattenObjectTest}\\n    </CodeBlock>\\n  </TabItem>\\n</Tabs>\\n\\n### 2.2. Flatten object with key\\n\\nH\xe0m n\xe0y s\u1ebd gi\xfap b\u1ea1n l\xe0m ph\u1eb3ng m\u1ed9t `object` c\xf3 c\xe1c `object` con l\u1ed3ng nhau. N\xf3 s\u1ebd tr\u1ea3 v\u1ec1 m\u1ed9t `object` m\u1edbi v\u1edbi c\xe1c `key` l\xe0 `key` c\u1ee7a c\xe1c `object` con l\u1ed3ng nhau, nh\u01b0ng c\xf3 th\xeam `key` c\u1ee7a `object` cha \u1edf \u0111\u1ea7u `key` c\u1ee7a `object` con.\\n\\n<Tabs defaultValue=\\"source\\" className=\\"unique-tabs\\">\\n  <TabItem value=\\"source\\" label=\\"Source code \ud83d\udcc3\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers title=\\"FlattenObjectWithKey.js\\">\\n        {FlattenObjectWithKey}\\n    </CodeBlock>\\n  </TabItem>\\n  <TabItem value=\\"try\\" label=\\"Ch\u1ea1y th\u1eed \ud83e\uddd1\u200d\ud83d\udcbb\\">\\n    <CodeBlock language=\\"js\\" showLineNumbers live noInline>\\n        {FlattenObjectWithKeyTest}\\n    </CodeBlock>\\n  </TabItem>\\n</Tabs>"},{"id":"best-websites-to-learn-javascript","metadata":{"permalink":"/blog/best-websites-to-learn-javascript","editUrl":"https://github.com/YourName/YourName.github.io/tree/master/blog/2023-06-13-best-websites-to-learn-javascript/index.md","source":"@site/blog/2023-06-13-best-websites-to-learn-javascript/index.md","title":"C\xe1c trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript","description":"Javascript l\xe0 m\u1ed9t ng\xf4n ng\u1eef l\u1eadp tr\xecnh web \u0111a n\u1ec1n t\u1ea3ng, k\u1ecbch b\u1ea3n, h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng. Javascript \u0111\u01b0\u1ee3c nh\xfang v\xe0o HTML \u0111\u1ec3 t\u1ea1o ra c\xe1c trang web \u0111\u1ed9ng v\xe0 t\u01b0\u01a1ng t\xe1c. N\xf3 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng cho nhi\u1ec1u m\u1ee5c \u0111\xedch kh\xe1c nhau, t\u1eeb frontend cho \u0111\u1ebfn backend, t\u1eeb game cho \u0111\u1ebfn \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p.","date":"2023-06-13T00:00:00.000Z","formattedDate":"13 th\xe1ng 6, 2023","tags":[{"label":"javascript","permalink":"/blog/tags/javascript"},{"label":"resources","permalink":"/blog/tags/resources"},{"label":"learning","permalink":"/blog/tags/learning"}],"readingTime":2.085,"hasTruncateMarker":true,"authors":[{"name":"Nguy\u1ec5n Hu\u1ef3nh Minh Ti\u1ebfn","title":"Fullstack Developer","url":"https://github.com/TienNHM","imageURL":"https://github.com/TienNHM.png","key":"TienNHM"}],"frontMatter":{"slug":"best-websites-to-learn-javascript","title":"C\xe1c trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript","authors":["TienNHM"],"tags":["javascript","resources","learning"],"enableComments":true,"draft":false,"image":"https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg"},"prevItem":{"title":"Nh\u1eefng h\xe0m JavaScript h\u1eefu \xedch","permalink":"/blog/helpful-javascript-utility-functions"},"nextItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"}},"content":"<p align=\\"right\\">\\n    <img src=\\"https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2FYourName.github.io%2Fblog%2Fbest-websites-to-learn-javascript&label=\u26aaViews&labelColor=%2337d67a&countColor=%23555555&style=flat&labelStyle=upper\\" loading=\'lazy\' decoding=\'async\'/>\\n</p>\\n\\nJavascript l\xe0 m\u1ed9t ng\xf4n ng\u1eef l\u1eadp tr\xecnh web \u0111a n\u1ec1n t\u1ea3ng, k\u1ecbch b\u1ea3n, h\u01b0\u1edbng \u0111\u1ed1i t\u01b0\u1ee3ng. Javascript \u0111\u01b0\u1ee3c nh\xfang v\xe0o HTML \u0111\u1ec3 t\u1ea1o ra c\xe1c trang web \u0111\u1ed9ng v\xe0 t\u01b0\u01a1ng t\xe1c. N\xf3 c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng cho nhi\u1ec1u m\u1ee5c \u0111\xedch kh\xe1c nhau, t\u1eeb frontend cho \u0111\u1ebfn backend, t\u1eeb game cho \u0111\u1ebfn \u1ee9ng d\u1ee5ng web ph\u1ee9c t\u1ea1p.\\n\\nTrong b\xe0i vi\u1ebft n\xe0y, t\xf4i s\u1ebd gi\u1edbi thi\u1ec7u v\u1edbi b\u1ea1n m\u1ed9t s\u1ed1 trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript. T\xf4i s\u1ebd gi\u1edbi thi\u1ec7u v\u1ec1 c\xe1c trang web n\xe0y v\xe0 cung c\u1ea5p cho b\u1ea1n m\u1ed9t s\u1ed1 l\xfd do t\u1ea1i sao b\u1ea1n n\xean s\u1eed d\u1ee5ng ch\xfang \u0111\u1ec3 h\u1ecdc JavaScript.\\n\\n\x3c!-- truncate --\x3e\\n\\n![JavaScript](https://i.pinimg.com/originals/71/ee/32/71ee32577432648f9e45fbd63b2cf261.jpg)\\n\\n## 1. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)\\n\\nMDN Web Docs l\xe0 m\u1ed9t kho t\xe0i li\u1ec7u v\xe0 ngu\u1ed3n h\u1ecdc t\u1eadp mi\u1ec5n ph\xed cho c\xe1c nh\xe0 ph\xe1t tri\u1ec3n web. N\xf3 \u0111\u01b0\u1ee3c kh\u1edfi x\u01b0\u1edbng b\u1edfi Mozilla v\xe0o n\u0103m 2005 nh\u01b0 m\u1ed9t n\u01a1i th\u1ed1ng nh\u1ea5t cho c\xe1c t\xe0i li\u1ec7u v\u1ec1 c\xe1c ti\xeau chu\u1ea9n web m\u1edf, c\xe1c d\u1ef1 \xe1n c\u1ee7a ch\xednh Mozilla, v\xe0 c\xe1c h\u01b0\u1edbng d\u1eabn cho nh\xe0 ph\xe1t tri\u1ec3n. MDN Web Docs cung c\u1ea5p c\xe1c th\xf4ng tin chi ti\u1ebft v\u1ec1 c\xe1c c\xf4ng ngh\u1ec7 web nh\u01b0 HTML, CSS, JavaScript, v\xe0 nhi\u1ec1u h\u01a1n n\u1eefa. MDN Web Docs c\u0169ng c\xf3 c\xe1c h\u01b0\u1edbng d\u1eabn v\u1ec1 c\xe1ch s\u1eed d\u1ee5ng c\xe1c c\xf4ng ngh\u1ec7 web \u0111\u1ec3 t\u1ea1o ra c\xe1c trang web v\xe0 \u1ee9ng d\u1ee5ng web hi\u1ec7n \u0111\u1ea1i. \u0110\xe2y l\xe0 m\u1ed9t d\u1ef1 \xe1n m\xe3 ngu\u1ed3n m\u1edf, c\xf3 s\u1ef1 \u0111\xf3ng g\xf3p c\u1ee7a c\u1ed9ng \u0111\u1ed3ng c\xe1c nh\xe0 ph\xe1t tri\u1ec3n web tr\xean to\xe0n th\u1ebf gi\u1edbi.\\n\\nB\u1ea1n c\xf3 th\u1ec3 t\xecm th\u1ea5y t\xe0i li\u1ec7u v\u1ec1 JavaScript t\u1ea1i \u0111\xe2y: [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).\\n\\n<img src=\\"https://v1.screenshot.11ty.dev/https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FJavaScript/opengraph/\\" loading=\'lazy\' decoding=\'async\'/>\\n\\n## 2. [W3Schools](https://www.w3schools.com/js/default.asp)\\n\\nW3Schools l\xe0 m\u1ed9t trang web d\xe0nh cho c\xe1c nh\xe0 ph\xe1t tri\u1ec3n web. N\xf3 cung c\u1ea5p c\xe1c h\u01b0\u1edbng d\u1eabn mi\u1ec5n ph\xed v\u1ec1 c\xe1c ng\xf4n ng\u1eef l\u1eadp tr\xecnh web nh\u01b0 HTML, CSS, JavaScript, Python, PHP, Java v\xe0 nhi\u1ec1u h\u01a1n n\u1eefa. B\u1ea1n c\xf3 th\u1ec3 h\u1ecdc v\xe0 th\u1eed c\xe1c v\xed d\u1ee5 tr\u1ef1c tuy\u1ebfn, l\xe0m c\xe1c b\xe0i t\u1eadp v\xe0 b\xe0i ki\u1ec3m tra, v\xe0 nh\u1eadn ch\u1ee9ng ch\u1ec9 c\u1ee7a W3Schools. N\xf3 c\u0169ng c\xf3 c\xe1c s\u1ea3n ph\u1ea9m v\xe0 d\u1ecbch v\u1ee5 kh\xe1c nh\u01b0 W3Schools Spaces, W3Schools Color Picker, W3Schools Code Game v\xe0 W3Schools Easy Learning.\\n\\n\u0110\u1ec3 t\xecm hi\u1ec3u v\u1ec1 JavaScript, b\u1ea1n c\xf3 th\u1ec3 truy c\u1eadp v\xe0o trang web n\xe0y: [JavaScript Tutorial](https://www.w3schools.com/js/default.asp).\\n\\n<img src=\\"https://v1.screenshot.11ty.dev/https%3A%2F%2Fwww.w3schools.com%2Fjs%2Fdefault.asp/opengraph/\\" loading=\'lazy\' decoding=\'async\'/>\\n\\n\\n:::note Disclaimer \ud83d\udd35\\nN\u1ed9i dung b\xe0i vi\u1ebft n\xe0y c\xf3 tham kh\u1ea3o th\xeam t\u1eeb [Bing AI](https://bing.com/chat), n\u1ebfu c\xf3 b\u1ea5t k\u1ef3 v\u1ea5n \u0111\u1ec1 n\xe0o li\xean quan \u0111\u1ebfn b\u1ea3n quy\u1ec1n, vui l\xf2ng li\xean h\u1ec7 v\u1edbi t\xf4i \u0111\u1ec3 \u0111\u01b0\u1ee3c g\u1ee1 b\u1ecf.\\n:::"},{"id":"mdx-blog-post","metadata":{"permalink":"/blog/mdx-blog-post","editUrl":"https://github.com/YourName/YourName.github.io/tree/master/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"1 th\xe1ng 8, 2021","tags":[{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"],"enableComments":true,"draft":false},"prevItem":{"title":"C\xe1c trang web t\u1ed1t nh\u1ea5t \u0111\u1ec3 h\u1ecdc JavaScript","permalink":"/blog/best-websites-to-learn-javascript"},"nextItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/blog/long-blog-post","editUrl":"https://github.com/YourName/YourName.github.io/tree/master/blog/2019-05-29-long-blog-post.md","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"29 th\xe1ng 5, 2019","tags":[{"label":"hello","permalink":"/blog/tags/hello"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"},{"name":"Full name","title":"Your title","url":"https://github.com/YourName","imageURL":"https://github.com/YourName.png","key":"YourName"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":["endi","YourName"],"tags":["hello","docusaurus"],"enableComments":true,"draft":false},"prevItem":{"title":"MDX Blog Post","permalink":"/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/YourName/YourName.github.io/tree/master/blog/2019-05-28-first-blog-post.md","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"28 th\xe1ng 5, 2019","tags":[{"label":"hola","permalink":"/blog/tags/hola"},{"label":"docusaurus","permalink":"/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"],"enableComments":true,"draft":false},"prevItem":{"title":"Long Blog Post","permalink":"/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);