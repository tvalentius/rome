# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > class > invalid-escape-static`

```javascript
Program {
	comments: Array []
	corrupt: false
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
				message: PARTIAL_BLESSED_DIAGNOSTIC_MESSAGE {value: "static can't contain a unicode escape"}
			}
			location: Object {
				filename: "input.js"
				mtime: undefined
				sourceType: "script"
				end: Object {
					column: 12
					index: 12
					line: 1
				}
				start: Object {
					column: 12
					index: 12
					line: 1
				}
			}
		}
	]
	body: Array [
		ClassDeclaration {
			id: BindingIdentifier {
				name: "X"
				loc: Object {
					filename: "input.js"
					identifierName: "X"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 30
					index: 30
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: ClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 30
						index: 30
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					ClassMethod {
						kind: "method"
						key: StaticPropertyKey {
							value: Identifier {
								name: "y"
								loc: Object {
									filename: "input.js"
									identifierName: "y"
									end: Object {
										column: 23
										index: 23
										line: 1
									}
									start: Object {
										column: 22
										index: 22
										line: 1
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 23
									index: 23
									line: 1
								}
								start: Object {
									column: 22
									index: 22
									line: 1
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 28
								index: 28
								line: 1
							}
							start: Object {
								column: 10
								index: 10
								line: 1
							}
						}
						body: BlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 28
									index: 28
									line: 1
								}
								start: Object {
									column: 26
									index: 26
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
									column: 25
									index: 25
									line: 1
								}
								start: Object {
									column: 23
									index: 23
									line: 1
								}
							}
						}
						meta: ClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: true
							typeAnnotation: undefined
							start: Object {
								column: 10
								index: 10
								line: 1
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 23
									index: 23
									line: 1
								}
								start: Object {
									column: 10
									index: 10
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
