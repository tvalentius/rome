# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > regression > 186`

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
			index: 24
			line: 2
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		VariableDeclarationStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 23
					index: 23
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			declaration: VariableDeclaration {
				kind: "const"
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 23
						index: 23
						line: 1
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				declarations: Array [
					VariableDeclarator {
						id: BindingIdentifier {
							name: "x"
							loc: Object {
								filename: "input.js"
								identifierName: "x"
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
								column: 22
								index: 22
								line: 1
							}
							start: Object {
								column: 6
								index: 6
								line: 1
							}
						}
						init: ObjectExpression {
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 22
									index: 22
									line: 1
								}
								start: Object {
									column: 10
									index: 10
									line: 1
								}
							}
							properties: Array [
								ObjectProperty {
									key: StaticPropertyKey {
										value: Identifier {
											name: "async"
											loc: Object {
												filename: "input.js"
												identifierName: "async"
												end: Object {
													column: 16
													index: 16
													line: 1
												}
												start: Object {
													column: 11
													index: 11
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											identifierName: "async"
											end: Object {
												column: 16
												index: 16
												line: 1
											}
											start: Object {
												column: 11
												index: 11
												line: 1
											}
										}
									}
									value: ReferenceIdentifier {
										name: "async"
										loc: Object {
											filename: "input.js"
											identifierName: "async"
											end: Object {
												column: 16
												index: 16
												line: 1
											}
											start: Object {
												column: 11
												index: 11
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 16
											index: 16
											line: 1
										}
										start: Object {
											column: 11
											index: 11
											line: 1
										}
									}
								}
								ObjectProperty {
									key: StaticPropertyKey {
										value: Identifier {
											name: "bar"
											loc: Object {
												filename: "input.js"
												identifierName: "bar"
												end: Object {
													column: 21
													index: 21
													line: 1
												}
												start: Object {
													column: 18
													index: 18
													line: 1
												}
											}
										}
										loc: Object {
											filename: "input.js"
											end: Object {
												column: 21
												index: 21
												line: 1
											}
											start: Object {
												column: 18
												index: 18
												line: 1
											}
										}
									}
									value: ReferenceIdentifier {
										name: "bar"
										loc: Object {
											filename: "input.js"
											identifierName: "bar"
											end: Object {
												column: 21
												index: 21
												line: 1
											}
											start: Object {
												column: 18
												index: 18
												line: 1
											}
										}
									}
									loc: Object {
										filename: "input.js"
										end: Object {
											column: 21
											index: 21
											line: 1
										}
										start: Object {
											column: 18
											index: 18
											line: 1
										}
									}
								}
							]
						}
					}
				]
			}
		}
	]
}
```
