# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-object-initialiser > proto-identifier-method`

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
			index: 38
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
					column: 37
					index: 37
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: ObjectExpression {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 36
						index: 36
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				properties: Array [
					ObjectProperty {
						key: StaticPropertyKey {
							value: Identifier {
								name: "__proto__"
								loc: Object {
									filename: "input.js"
									identifierName: "__proto__"
									end: Object {
										column: 12
										index: 12
										line: 1
									}
									start: Object {
										column: 3
										index: 3
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 12
									index: 12
									line: 1
								}
								start: Object {
									column: 3
									index: 3
									line: 1
								}
							}
						}
						value: NullLiteral {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 18
									index: 18
									line: 1
								}
								start: Object {
									column: 14
									index: 14
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 18
								index: 18
								line: 1
							}
							start: Object {
								column: 3
								index: 3
								line: 1
							}
						}
					}
					ObjectMethod {
						kind: "method"
						key: StaticPropertyKey {
							value: Identifier {
								name: "__proto__"
								loc: Object {
									filename: "input.js"
									identifierName: "__proto__"
									end: Object {
										column: 29
										index: 29
										line: 1
									}
									start: Object {
										column: 20
										index: 20
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 29
									index: 29
									line: 1
								}
								start: Object {
									column: 20
									index: 20
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 33
								index: 33
								line: 1
							}
							start: Object {
								column: 20
								index: 20
								line: 1
							}
						}
						body: BlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 33
									index: 33
									line: 1
								}
								start: Object {
									column: 31
									index: 31
									line: 1
								}
							}
						}
						head: FunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 31
									index: 31
									line: 1
								}
								start: Object {
									column: 29
									index: 29
									line: 1
								}
							}
						}
					}
				]
			}
		}
	]
}
```
