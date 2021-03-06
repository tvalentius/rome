/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {ClassDeclaration, ClassExpression} from "@romejs/js-ast";
import Builder from "../../Builder";
import {Token, concat, hardline, indent, space} from "../../tokens";
import {hasInnerComments} from "../comments";

export default function ClassDeclaration(
	builder: Builder,
	node: ClassDeclaration | ClassExpression,
): Token {
	const tokens: Array<Token> = ["class"];

	if (node.id) {
		tokens.push(space, builder.tokenize(node.id, node));
	}

	tokens.push(builder.tokenize(node.meta, node), space, "{");

	if (hasInnerComments(node.meta)) {
		tokens.push(builder.tokenizeInnerComments(node.meta, true), hardline);
	}

	if (node.meta.body.length > 0) {
		tokens.push(
			concat([
				indent(
					concat([
						hardline,
						builder.tokenizeStatementList(node.meta.body, node.meta),
					]),
				),
				hardline,
			]),
		);
	}

	tokens.push("}");

	return concat(tokens);
}
