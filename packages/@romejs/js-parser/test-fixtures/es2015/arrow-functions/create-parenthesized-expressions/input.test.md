# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > arrow-functions > create-parenthesized-expressions`

```javascript
Program {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 12
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 11
					index: 11
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: ArrowFunctionExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: BlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 11
							index: 11
							line: 1
						}
						start: Object {
							column: 9
							index: 9
							line: 1
						}
					}
				}
				head: FunctionHead {
					async: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 8
							index: 8
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					params: Array [
						BindingIdentifier {
							name: "foo"
							loc: Object {
								filename: "input.js"
								identifierName: "foo"
								end: Object {
									column: 4
									index: 4
									line: 1
								}
								start: Object {
									column: 1
									index: 1
									line: 1
								}
							}
						}
					]
				}
			}
		}
	]
}
```
