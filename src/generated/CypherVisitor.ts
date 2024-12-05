// Generated from grammar/Cypher.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { OC_CypherContext } from "./CypherParser";
import { OC_StatementContext } from "./CypherParser";
import { OC_QueryContext } from "./CypherParser";
import { OC_RegularQueryContext } from "./CypherParser";
import { OC_SingleQueryContext } from "./CypherParser";
import { OC_SinglePartQueryContext } from "./CypherParser";
import { OC_MultiPartQueryContext } from "./CypherParser";
import { OC_ReadingClauseContext } from "./CypherParser";
import { OC_CommandContext } from "./CypherParser";
import { OC_CreateIndexContext } from "./CypherParser";
import { OC_DropIndexContext } from "./CypherParser";
import { OC_CreateConstraintContext } from "./CypherParser";
import { OC_DropConstraintContext } from "./CypherParser";
import { OC_MatchContext } from "./CypherParser";
import { OC_UnwindContext } from "./CypherParser";
import { OC_MergeContext } from "./CypherParser";
import { OC_MergeActionContext } from "./CypherParser";
import { OC_CreateContext } from "./CypherParser";
import { OC_SetContext } from "./CypherParser";
import { OC_SetItemContext } from "./CypherParser";
import { OC_DeleteContext } from "./CypherParser";
import { OC_RemoveContext } from "./CypherParser";
import { OC_RemoveItemContext } from "./CypherParser";
import { OC_InQueryCallContext } from "./CypherParser";
import { OC_StandaloneCallContext } from "./CypherParser";
import { OC_YieldItemsContext } from "./CypherParser";
import { OC_YieldItemContext } from "./CypherParser";
import { OC_WithContext } from "./CypherParser";
import { OC_ReturnContext } from "./CypherParser";
import { OC_ReturnBodyContext } from "./CypherParser";
import { OC_ReturnItemsContext } from "./CypherParser";
import { OC_ReturnItemContext } from "./CypherParser";
import { OC_OrderContext } from "./CypherParser";
import { OC_SortItemContext } from "./CypherParser";
import { OC_PatternContext } from "./CypherParser";
import { OC_PatternPartContext } from "./CypherParser";
import { OC_AnonymousPatternPartContext } from "./CypherParser";
import { OC_PatternElementContext } from "./CypherParser";
import { OC_NodePatternContext } from "./CypherParser";
import { OC_PatternElementChainContext } from "./CypherParser";
import { OC_RelationshipPatternContext } from "./CypherParser";
import { OC_RelationshipDetailContext } from "./CypherParser";
import { OC_PropertiesContext } from "./CypherParser";
import { OC_RelationshipTypesContext } from "./CypherParser";
import { OC_NodeLabelsContext } from "./CypherParser";
import { OC_NodeLabelContext } from "./CypherParser";
import { OC_RangeLiteralContext } from "./CypherParser";
import { OC_LabelNameContext } from "./CypherParser";
import { OC_RelTypeNameContext } from "./CypherParser";
import { OC_ExpressionContext } from "./CypherParser";
import { OC_OrExpressionContext } from "./CypherParser";
import { OC_AndExpressionContext } from "./CypherParser";
import { OC_NotExpressionContext } from "./CypherParser";
import { OC_ComparisonExpressionContext } from "./CypherParser";
import { OC_AddOrSubtractExpressionContext } from "./CypherParser";
import { OC_MultiplyDivideModuloExpressionContext } from "./CypherParser";
import { OC_PowerOfExpressionContext } from "./CypherParser";
import { OC_UnaryAddOrSubtractExpressionContext } from "./CypherParser";
import { OC_StringListNullOperatorExpressionContext } from "./CypherParser";
import { OC_ListOperatorExpressionContext } from "./CypherParser";
import { OC_StringOperatorExpressionContext } from "./CypherParser";
import { OC_NullOperatorExpressionContext } from "./CypherParser";
import { OC_PropertyOrLabelsExpressionContext } from "./CypherParser";
import { OC_AtomContext } from "./CypherParser";
import { OC_LiteralContext } from "./CypherParser";
import { OC_BooleanLiteralContext } from "./CypherParser";
import { OC_ListLiteralContext } from "./CypherParser";
import { OC_ParenthesizedContext } from "./CypherParser";
import { OC_PropertyExpressionContext } from "./CypherParser";
import { OC_PropertyLookupContext } from "./CypherParser";
import { OC_VariableContext } from "./CypherParser";
import { OC_PropertyKeyNameContext } from "./CypherParser";
import { OC_IntegerLiteralContext } from "./CypherParser";
import { OC_DoubleLiteralContext } from "./CypherParser";
import { OC_SchemaNameContext } from "./CypherParser";
import { OC_SymbolicNameContext } from "./CypherParser";
import { OC_LeftArrowHeadContext } from "./CypherParser";
import { OC_RightArrowHeadContext } from "./CypherParser";
import { OC_DashContext } from "./CypherParser";
import { OC_UpdatingClauseContext } from "./CypherParser";
import { OC_ExplicitProcedureInvocationContext } from "./CypherParser";
import { OC_ProcedureNameContext } from "./CypherParser";
import { OC_NamespaceContext } from "./CypherParser";
import { OC_ProcedureResultFieldContext } from "./CypherParser";
import { OC_PropertyKeyValueContext } from "./CypherParser";
import { OC_PartialComparisonExpressionContext } from "./CypherParser";
import { OC_ParameterContext } from "./CypherParser";
import { OC_FunctionInvocationContext } from "./CypherParser";
import { OC_FunctionNameContext } from "./CypherParser";
import { OC_ImplicitProcedureInvocationContext } from "./CypherParser";
import { OC_CountExpressionContext } from "./CypherParser";
import { OC_ListComprehensionContext } from "./CypherParser";
import { OC_FilterExpressionContext } from "./CypherParser";
import { OC_IdInCollContext } from "./CypherParser";
import { OC_PatternComprehensionContext } from "./CypherParser";
import { OC_NumberLiteralContext } from "./CypherParser";
import { OC_MapLiteralContext } from "./CypherParser";
import { OC_ReservedWordContext } from "./CypherParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CypherParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CypherVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CypherParser.oC_Cypher`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Cypher?: (ctx: OC_CypherContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Statement?: (ctx: OC_StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Query`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Query?: (ctx: OC_QueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RegularQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RegularQuery?: (ctx: OC_RegularQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SingleQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SingleQuery?: (ctx: OC_SingleQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SinglePartQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SinglePartQuery?: (ctx: OC_SinglePartQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_MultiPartQuery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MultiPartQuery?: (ctx: OC_MultiPartQueryContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ReadingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReadingClause?: (ctx: OC_ReadingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Command`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Command?: (ctx: OC_CommandContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_CreateIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_CreateIndex?: (ctx: OC_CreateIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_DropIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_DropIndex?: (ctx: OC_DropIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_CreateConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_CreateConstraint?: (ctx: OC_CreateConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_DropConstraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_DropConstraint?: (ctx: OC_DropConstraintContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Match`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Match?: (ctx: OC_MatchContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Unwind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Unwind?: (ctx: OC_UnwindContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Merge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Merge?: (ctx: OC_MergeContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_MergeAction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MergeAction?: (ctx: OC_MergeActionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Create`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Create?: (ctx: OC_CreateContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Set?: (ctx: OC_SetContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SetItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SetItem?: (ctx: OC_SetItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Delete?: (ctx: OC_DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Remove`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Remove?: (ctx: OC_RemoveContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RemoveItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RemoveItem?: (ctx: OC_RemoveItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_InQueryCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_InQueryCall?: (ctx: OC_InQueryCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_StandaloneCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StandaloneCall?: (ctx: OC_StandaloneCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_YieldItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_YieldItems?: (ctx: OC_YieldItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_YieldItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_YieldItem?: (ctx: OC_YieldItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_With`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_With?: (ctx: OC_WithContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Return`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Return?: (ctx: OC_ReturnContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ReturnBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReturnBody?: (ctx: OC_ReturnBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ReturnItems`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReturnItems?: (ctx: OC_ReturnItemsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ReturnItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReturnItem?: (ctx: OC_ReturnItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Order?: (ctx: OC_OrderContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SortItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SortItem?: (ctx: OC_SortItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Pattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Pattern?: (ctx: OC_PatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PatternPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternPart?: (ctx: OC_PatternPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_AnonymousPatternPart`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AnonymousPatternPart?: (ctx: OC_AnonymousPatternPartContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PatternElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternElement?: (ctx: OC_PatternElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NodePattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodePattern?: (ctx: OC_NodePatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PatternElementChain`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternElementChain?: (ctx: OC_PatternElementChainContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RelationshipPattern`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipPattern?: (ctx: OC_RelationshipPatternContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RelationshipDetail`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipDetail?: (ctx: OC_RelationshipDetailContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Properties?: (ctx: OC_PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RelationshipTypes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelationshipTypes?: (ctx: OC_RelationshipTypesContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NodeLabels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodeLabels?: (ctx: OC_NodeLabelsContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NodeLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NodeLabel?: (ctx: OC_NodeLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RangeLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RangeLiteral?: (ctx: OC_RangeLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_LabelName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_LabelName?: (ctx: OC_LabelNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RelTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RelTypeName?: (ctx: OC_RelTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Expression?: (ctx: OC_ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_OrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_OrExpression?: (ctx: OC_OrExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_AndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AndExpression?: (ctx: OC_AndExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NotExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NotExpression?: (ctx: OC_NotExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ComparisonExpression?: (ctx: OC_ComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_AddOrSubtractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_AddOrSubtractExpression?: (ctx: OC_AddOrSubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_MultiplyDivideModuloExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MultiplyDivideModuloExpression?: (ctx: OC_MultiplyDivideModuloExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PowerOfExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PowerOfExpression?: (ctx: OC_PowerOfExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_UnaryAddOrSubtractExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_UnaryAddOrSubtractExpression?: (ctx: OC_UnaryAddOrSubtractExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_StringListNullOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StringListNullOperatorExpression?: (ctx: OC_StringListNullOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ListOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListOperatorExpression?: (ctx: OC_ListOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_StringOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_StringOperatorExpression?: (ctx: OC_StringOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NullOperatorExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NullOperatorExpression?: (ctx: OC_NullOperatorExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PropertyOrLabelsExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyOrLabelsExpression?: (ctx: OC_PropertyOrLabelsExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Atom?: (ctx: OC_AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Literal?: (ctx: OC_LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_BooleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_BooleanLiteral?: (ctx: OC_BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ListLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListLiteral?: (ctx: OC_ListLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Parenthesized`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Parenthesized?: (ctx: OC_ParenthesizedContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PropertyExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyExpression?: (ctx: OC_PropertyExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PropertyLookup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyLookup?: (ctx: OC_PropertyLookupContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Variable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Variable?: (ctx: OC_VariableContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PropertyKeyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyKeyName?: (ctx: OC_PropertyKeyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_IntegerLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_IntegerLiteral?: (ctx: OC_IntegerLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_DoubleLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_DoubleLiteral?: (ctx: OC_DoubleLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SchemaName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SchemaName?: (ctx: OC_SchemaNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_SymbolicName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_SymbolicName?: (ctx: OC_SymbolicNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_LeftArrowHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_LeftArrowHead?: (ctx: OC_LeftArrowHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_RightArrowHead`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_RightArrowHead?: (ctx: OC_RightArrowHeadContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Dash`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Dash?: (ctx: OC_DashContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_UpdatingClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_UpdatingClause?: (ctx: OC_UpdatingClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ExplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ExplicitProcedureInvocation?: (ctx: OC_ExplicitProcedureInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ProcedureName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProcedureName?: (ctx: OC_ProcedureNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Namespace?: (ctx: OC_NamespaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ProcedureResultField`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ProcedureResultField?: (ctx: OC_ProcedureResultFieldContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PropertyKeyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PropertyKeyValue?: (ctx: OC_PropertyKeyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PartialComparisonExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PartialComparisonExpression?: (ctx: OC_PartialComparisonExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_Parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_Parameter?: (ctx: OC_ParameterContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_FunctionInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FunctionInvocation?: (ctx: OC_FunctionInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_FunctionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FunctionName?: (ctx: OC_FunctionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ImplicitProcedureInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ImplicitProcedureInvocation?: (ctx: OC_ImplicitProcedureInvocationContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_CountExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_CountExpression?: (ctx: OC_CountExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ListComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ListComprehension?: (ctx: OC_ListComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_FilterExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_FilterExpression?: (ctx: OC_FilterExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_IdInColl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_IdInColl?: (ctx: OC_IdInCollContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_PatternComprehension`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_PatternComprehension?: (ctx: OC_PatternComprehensionContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_NumberLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_NumberLiteral?: (ctx: OC_NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_MapLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_MapLiteral?: (ctx: OC_MapLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CypherParser.oC_ReservedWord`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOC_ReservedWord?: (ctx: OC_ReservedWordContext) => Result;
}

