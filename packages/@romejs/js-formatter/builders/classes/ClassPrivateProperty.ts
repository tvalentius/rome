/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Builder from "../../Builder";
import {ClassPrivateProperty} from "@romejs/js-ast";
import {Token, concat, group, space} from "../../tokens";

export default function ClassPrivateProperty(
	builder: Builder,
	node: ClassPrivateProperty,
): Token {
	const tokens: Array<Token> = [
		builder.tokenize(node.meta, node),
		builder.tokenize(node.key, node),
	];

	if (builder.options.typeAnnotations && node.typeAnnotation) {
		tokens.push(":", space, builder.tokenize(node.typeAnnotation, node));
	}

	if (node.value) {
		tokens.push(space);
		tokens.push("=");
		tokens.push(space);
		tokens.push(builder.tokenize(node.value, node));
	}

	tokens.push(";");

	return group(concat(tokens));
}
