# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-import-declaration > invalid-import-missing-comma`

```javascript
Program {
	comments: Array []
	corrupt: false
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "module"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 0
			index: 31
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	diagnostics: Array [
		Object {
			origins: Array [Object {category: "js-parser"}]
			description: Object {
				advice: Array []
				category: "parse/js"
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "Expected keyword from"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "module"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 11
					index: 11
					line: 1
				}
			}
		}
	]
	body: Array [
		ImportDeclaration {
			importKind: undefined
			namedSpecifiers: Array []
			namespaceSpecifier: undefined
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 10
					index: 10
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			source: StringLiteral {
				value: ""
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
			}
			defaultSpecifier: ImportDefaultSpecifier {
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 10
						index: 10
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				local: ImportSpecifierLocal {
					name: BindingIdentifier {
						name: "foo"
						loc: Object {
							filename: "input.js"
							identifierName: "foo"
							end: Object {
								column: 10
								index: 10
								line: 1
							}
							start: Object {
								column: 7
								index: 7
								line: 1
							}
						}
					}
					importKind: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 10
							index: 10
							line: 1
						}
						start: Object {
							column: 7
							index: 7
							line: 1
						}
					}
				}
			}
		}
		BlockStatement {
			directives: Array []
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 18
					index: 18
					line: 1
				}
				start: Object {
					column: 11
					index: 11
					line: 1
				}
			}
			body: Array [
				ExpressionStatement {
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 16
							index: 16
							line: 1
						}
						start: Object {
							column: 13
							index: 13
							line: 1
						}
					}
					expression: ReferenceIdentifier {
						name: "bar"
						loc: Object {
							filename: "input.js"
							identifierName: "bar"
							end: Object {
								column: 16
								index: 16
								line: 1
							}
							start: Object {
								column: 13
								index: 13
								line: 1
							}
						}
					}
				}
			]
		}
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 19
					index: 19
					line: 1
				}
			}
			expression: ReferenceIdentifier {
				name: "from"
				loc: Object {
					filename: "input.js"
					identifierName: "from"
					end: Object {
						column: 23
						index: 23
						line: 1
					}
					start: Object {
						column: 19
						index: 19
						line: 1
					}
				}
			}
		}
		ExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 24
					index: 24
					line: 1
				}
			}
			expression: StringLiteral {
				value: "bar"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 29
						index: 29
						line: 1
					}
					start: Object {
						column: 24
						index: 24
						line: 1
					}
				}
			}
		}
	]
}
```
