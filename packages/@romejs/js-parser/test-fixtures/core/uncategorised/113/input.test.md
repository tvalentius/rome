# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 113`

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
			column: 15
			index: 15
			line: 1
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
					column: 15
					index: 15
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: CallExpression {
				arguments: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 15
						index: 15
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				callee: MemberExpression {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 13
							index: 13
							line: 1
						}
						start: Object {
							column: 0
							index: 0
							line: 1
						}
					}
					property: StaticMemberProperty {
						value: Identifier {
							name: "bar"
							loc: Object {
								filename: "input.js"
								identifierName: "bar"
								end: Object {
									column: 13
									index: 13
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 13
								index: 13
								line: 1
							}
							start: Object {
								column: 10
								index: 10
								line: 1
							}
						}
					}
					object: NewExpression {
						arguments: Array []
						optional: undefined
						typeArguments: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 9
								index: 9
								line: 1
							}
							start: Object {
								column: 0
								index: 0
								line: 1
							}
						}
						callee: ReferenceIdentifier {
							name: "foo"
							loc: Object {
								filename: "input.js"
								identifierName: "foo"
								end: Object {
									column: 7
									index: 7
									line: 1
								}
								start: Object {
									column: 4
									index: 4
									line: 1
								}
							}
						}
					}
				}
			}
		}
	]
}
```
