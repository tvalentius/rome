# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > statement-break > migrated_0000`

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
			index: 23
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		WhileStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 22
					index: 22
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			test: BooleanLiteral {
				value: true
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 11
						index: 11
						line: 1
					}
					start: Object {
						column: 7
						index: 7
						line: 1
					}
				}
			}
			body: BlockStatement {
				directives: Array []
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 22
						index: 22
						line: 1
					}
					start: Object {
						column: 13
						index: 13
						line: 1
					}
				}
				body: Array [
					BreakStatement {
						label: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 20
								index: 20
								line: 1
							}
							start: Object {
								column: 15
								index: 15
								line: 1
							}
						}
					}
				]
			}
		}
	]
}
```
