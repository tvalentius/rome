/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	AnyExpression,
	ClassDeclaration,
	FunctionDeclaration,
	JSNodeBase,
	TSInterfaceDeclaration,
} from "../index";
import {createBuilder} from "../utils";
import {TSDeclareFunction} from "../typescript/TSDeclareFunction";

export type ExportDefaultDeclaration = JSNodeBase & {
	type: "ExportDefaultDeclaration";
	declaration:
		| FunctionDeclaration
		| ClassDeclaration
		| TSInterfaceDeclaration
		| TSDeclareFunction
		| AnyExpression;
	exportKind?: undefined;
	declare?: boolean;
};

export const exportDefaultDeclaration = createBuilder<ExportDefaultDeclaration>(
	"ExportDefaultDeclaration",
	{
		bindingKeys: {},
		visitorKeys: {
			declaration: true,
		},
	},
);
