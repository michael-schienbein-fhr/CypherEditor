// Generated from grammar/Cypher.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { CypherListener } from "./CypherListener";
import { CypherVisitor } from "./CypherVisitor";


export class CypherParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly CREATE = 27;
	public static readonly DROP = 28;
	public static readonly INDEX = 29;
	public static readonly ON = 30;
	public static readonly OPTIONAL = 31;
	public static readonly MATCH = 32;
	public static readonly UNWIND = 33;
	public static readonly AS = 34;
	public static readonly MERGE = 35;
	public static readonly SET = 36;
	public static readonly DETACH = 37;
	public static readonly DELETE = 38;
	public static readonly REMOVE = 39;
	public static readonly WITH = 40;
	public static readonly RETURN = 41;
	public static readonly DISTINCT = 42;
	public static readonly ORDER = 43;
	public static readonly BY = 44;
	public static readonly SKIP_KEYWORD = 45;
	public static readonly LIMIT = 46;
	public static readonly ASCENDING = 47;
	public static readonly DESCENDING = 48;
	public static readonly WHERE = 49;
	public static readonly OR = 50;
	public static readonly XOR = 51;
	public static readonly AND = 52;
	public static readonly NOT = 53;
	public static readonly IN = 54;
	public static readonly STARTS = 55;
	public static readonly ENDS = 56;
	public static readonly CONTAINS = 57;
	public static readonly IS = 58;
	public static readonly NULL = 59;
	public static readonly TRUE = 60;
	public static readonly FALSE = 61;
	public static readonly COUNT = 62;
	public static readonly FILTER = 63;
	public static readonly EXTRACT = 64;
	public static readonly ANY = 65;
	public static readonly NONE = 66;
	public static readonly SINGLE = 67;
	public static readonly UNION = 68;
	public static readonly ALL = 69;
	public static readonly CONSTRAINT = 70;
	public static readonly ASSERT = 71;
	public static readonly UNIQUE = 72;
	public static readonly EXISTS = 73;
	public static readonly CALL = 74;
	public static readonly YIELD = 75;
	public static readonly CASE = 76;
	public static readonly WHEN = 77;
	public static readonly THEN = 78;
	public static readonly ELSE = 79;
	public static readonly END = 80;
	public static readonly MANDATORY = 81;
	public static readonly SCALAR = 82;
	public static readonly OF = 83;
	public static readonly ADD = 84;
	public static readonly DO = 85;
	public static readonly FOR = 86;
	public static readonly REQUIRE = 87;
	public static readonly UnescapedSymbolicName = 88;
	public static readonly EscapedSymbolicName = 89;
	public static readonly StringLiteral = 90;
	public static readonly HexInteger = 91;
	public static readonly DecimalInteger = 92;
	public static readonly OctalInteger = 93;
	public static readonly ExponentDecimalReal = 94;
	public static readonly RegularDecimalReal = 95;
	public static readonly HexLetter = 96;
	public static readonly WS = 97;
	public static readonly COMMENT = 98;
	public static readonly MULTILINE_COMMENT = 99;
	public static readonly RULE_oC_Cypher = 0;
	public static readonly RULE_oC_Statement = 1;
	public static readonly RULE_oC_Query = 2;
	public static readonly RULE_oC_RegularQuery = 3;
	public static readonly RULE_oC_SingleQuery = 4;
	public static readonly RULE_oC_SinglePartQuery = 5;
	public static readonly RULE_oC_MultiPartQuery = 6;
	public static readonly RULE_oC_ReadingClause = 7;
	public static readonly RULE_oC_Command = 8;
	public static readonly RULE_oC_CreateIndex = 9;
	public static readonly RULE_oC_DropIndex = 10;
	public static readonly RULE_oC_CreateConstraint = 11;
	public static readonly RULE_oC_DropConstraint = 12;
	public static readonly RULE_oC_Match = 13;
	public static readonly RULE_oC_Unwind = 14;
	public static readonly RULE_oC_Merge = 15;
	public static readonly RULE_oC_MergeAction = 16;
	public static readonly RULE_oC_Create = 17;
	public static readonly RULE_oC_Set = 18;
	public static readonly RULE_oC_SetItem = 19;
	public static readonly RULE_oC_Delete = 20;
	public static readonly RULE_oC_Remove = 21;
	public static readonly RULE_oC_RemoveItem = 22;
	public static readonly RULE_oC_InQueryCall = 23;
	public static readonly RULE_oC_StandaloneCall = 24;
	public static readonly RULE_oC_YieldItems = 25;
	public static readonly RULE_oC_YieldItem = 26;
	public static readonly RULE_oC_With = 27;
	public static readonly RULE_oC_Return = 28;
	public static readonly RULE_oC_ReturnBody = 29;
	public static readonly RULE_oC_ReturnItems = 30;
	public static readonly RULE_oC_ReturnItem = 31;
	public static readonly RULE_oC_Order = 32;
	public static readonly RULE_oC_SortItem = 33;
	public static readonly RULE_oC_Pattern = 34;
	public static readonly RULE_oC_PatternPart = 35;
	public static readonly RULE_oC_AnonymousPatternPart = 36;
	public static readonly RULE_oC_PatternElement = 37;
	public static readonly RULE_oC_NodePattern = 38;
	public static readonly RULE_oC_PatternElementChain = 39;
	public static readonly RULE_oC_RelationshipPattern = 40;
	public static readonly RULE_oC_RelationshipDetail = 41;
	public static readonly RULE_oC_Properties = 42;
	public static readonly RULE_oC_RelationshipTypes = 43;
	public static readonly RULE_oC_NodeLabels = 44;
	public static readonly RULE_oC_NodeLabel = 45;
	public static readonly RULE_oC_RangeLiteral = 46;
	public static readonly RULE_oC_LabelName = 47;
	public static readonly RULE_oC_RelTypeName = 48;
	public static readonly RULE_oC_Expression = 49;
	public static readonly RULE_oC_OrExpression = 50;
	public static readonly RULE_oC_AndExpression = 51;
	public static readonly RULE_oC_NotExpression = 52;
	public static readonly RULE_oC_ComparisonExpression = 53;
	public static readonly RULE_oC_AddOrSubtractExpression = 54;
	public static readonly RULE_oC_MultiplyDivideModuloExpression = 55;
	public static readonly RULE_oC_PowerOfExpression = 56;
	public static readonly RULE_oC_UnaryAddOrSubtractExpression = 57;
	public static readonly RULE_oC_StringListNullOperatorExpression = 58;
	public static readonly RULE_oC_ListOperatorExpression = 59;
	public static readonly RULE_oC_StringOperatorExpression = 60;
	public static readonly RULE_oC_NullOperatorExpression = 61;
	public static readonly RULE_oC_PropertyOrLabelsExpression = 62;
	public static readonly RULE_oC_Atom = 63;
	public static readonly RULE_oC_Literal = 64;
	public static readonly RULE_oC_BooleanLiteral = 65;
	public static readonly RULE_oC_ListLiteral = 66;
	public static readonly RULE_oC_Parenthesized = 67;
	public static readonly RULE_oC_PropertyExpression = 68;
	public static readonly RULE_oC_PropertyLookup = 69;
	public static readonly RULE_oC_Variable = 70;
	public static readonly RULE_oC_PropertyKeyName = 71;
	public static readonly RULE_oC_IntegerLiteral = 72;
	public static readonly RULE_oC_DoubleLiteral = 73;
	public static readonly RULE_oC_SchemaName = 74;
	public static readonly RULE_oC_SymbolicName = 75;
	public static readonly RULE_oC_LeftArrowHead = 76;
	public static readonly RULE_oC_RightArrowHead = 77;
	public static readonly RULE_oC_Dash = 78;
	public static readonly RULE_oC_UpdatingClause = 79;
	public static readonly RULE_oC_ExplicitProcedureInvocation = 80;
	public static readonly RULE_oC_ProcedureName = 81;
	public static readonly RULE_oC_Namespace = 82;
	public static readonly RULE_oC_ProcedureResultField = 83;
	public static readonly RULE_oC_PropertyKeyValue = 84;
	public static readonly RULE_oC_PartialComparisonExpression = 85;
	public static readonly RULE_oC_Parameter = 86;
	public static readonly RULE_oC_FunctionInvocation = 87;
	public static readonly RULE_oC_FunctionName = 88;
	public static readonly RULE_oC_ImplicitProcedureInvocation = 89;
	public static readonly RULE_oC_CountExpression = 90;
	public static readonly RULE_oC_ListComprehension = 91;
	public static readonly RULE_oC_FilterExpression = 92;
	public static readonly RULE_oC_IdInColl = 93;
	public static readonly RULE_oC_PatternComprehension = 94;
	public static readonly RULE_oC_NumberLiteral = 95;
	public static readonly RULE_oC_MapLiteral = 96;
	public static readonly RULE_oC_ReservedWord = 97;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"oC_Cypher", "oC_Statement", "oC_Query", "oC_RegularQuery", "oC_SingleQuery", 
		"oC_SinglePartQuery", "oC_MultiPartQuery", "oC_ReadingClause", "oC_Command", 
		"oC_CreateIndex", "oC_DropIndex", "oC_CreateConstraint", "oC_DropConstraint", 
		"oC_Match", "oC_Unwind", "oC_Merge", "oC_MergeAction", "oC_Create", "oC_Set", 
		"oC_SetItem", "oC_Delete", "oC_Remove", "oC_RemoveItem", "oC_InQueryCall", 
		"oC_StandaloneCall", "oC_YieldItems", "oC_YieldItem", "oC_With", "oC_Return", 
		"oC_ReturnBody", "oC_ReturnItems", "oC_ReturnItem", "oC_Order", "oC_SortItem", 
		"oC_Pattern", "oC_PatternPart", "oC_AnonymousPatternPart", "oC_PatternElement", 
		"oC_NodePattern", "oC_PatternElementChain", "oC_RelationshipPattern", 
		"oC_RelationshipDetail", "oC_Properties", "oC_RelationshipTypes", "oC_NodeLabels", 
		"oC_NodeLabel", "oC_RangeLiteral", "oC_LabelName", "oC_RelTypeName", "oC_Expression", 
		"oC_OrExpression", "oC_AndExpression", "oC_NotExpression", "oC_ComparisonExpression", 
		"oC_AddOrSubtractExpression", "oC_MultiplyDivideModuloExpression", "oC_PowerOfExpression", 
		"oC_UnaryAddOrSubtractExpression", "oC_StringListNullOperatorExpression", 
		"oC_ListOperatorExpression", "oC_StringOperatorExpression", "oC_NullOperatorExpression", 
		"oC_PropertyOrLabelsExpression", "oC_Atom", "oC_Literal", "oC_BooleanLiteral", 
		"oC_ListLiteral", "oC_Parenthesized", "oC_PropertyExpression", "oC_PropertyLookup", 
		"oC_Variable", "oC_PropertyKeyName", "oC_IntegerLiteral", "oC_DoubleLiteral", 
		"oC_SchemaName", "oC_SymbolicName", "oC_LeftArrowHead", "oC_RightArrowHead", 
		"oC_Dash", "oC_UpdatingClause", "oC_ExplicitProcedureInvocation", "oC_ProcedureName", 
		"oC_Namespace", "oC_ProcedureResultField", "oC_PropertyKeyValue", "oC_PartialComparisonExpression", 
		"oC_Parameter", "oC_FunctionInvocation", "oC_FunctionName", "oC_ImplicitProcedureInvocation", 
		"oC_CountExpression", "oC_ListComprehension", "oC_FilterExpression", "oC_IdInColl", 
		"oC_PatternComprehension", "oC_NumberLiteral", "oC_MapLiteral", "oC_ReservedWord",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'('", "','", "')'", "'='", "'+='", "'*'", "'['", "']'", 
		"'{'", "'}'", "':'", "'|'", "'..'", "'+'", "'-'", "'/'", "'%'", "'^'", 
		"'.'", "'<'", "'>'", "'<>'", "'<='", "'>='", "'$'", "'CREATE'", "'DROP'", 
		"'INDEX'", "'ON'", "'OPTIONAL'", "'MATCH'", "'UNWIND'", "'AS'", "'MERGE'", 
		"'SET'", "'DETACH'", "'DELETE'", "'REMOVE'", "'WITH'", "'RETURN'", "'DISTINCT'", 
		"'ORDER'", "'BY'", "'SKIP'", "'LIMIT'", "'ASC'", "'DESC'", "'WHERE'", 
		"'OR'", "'XOR'", "'AND'", "'NOT'", "'IN'", "'STARTS'", "'ENDS'", "'CONTAINS'", 
		"'IS'", "'NULL'", "'TRUE'", "'FALSE'", "'COUNT'", "'FILTER'", "'EXTRACT'", 
		"'ANY'", "'NONE'", "'SINGLE'", "'UNION'", "'ALL'", "'CONSTRAINT'", "'ASSERT'", 
		"'UNIQUE'", "'EXISTS'", "'CALL'", "'YIELD'", "'CASE'", "'WHEN'", "'THEN'", 
		"'ELSE'", "'END'", "'MANDATORY'", "'SCALAR'", "'OF'", "'ADD'", "'DO'", 
		"'FOR'", "'REQUIRE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "CREATE", 
		"DROP", "INDEX", "ON", "OPTIONAL", "MATCH", "UNWIND", "AS", "MERGE", "SET", 
		"DETACH", "DELETE", "REMOVE", "WITH", "RETURN", "DISTINCT", "ORDER", "BY", 
		"SKIP_KEYWORD", "LIMIT", "ASCENDING", "DESCENDING", "WHERE", "OR", "XOR", 
		"AND", "NOT", "IN", "STARTS", "ENDS", "CONTAINS", "IS", "NULL", "TRUE", 
		"FALSE", "COUNT", "FILTER", "EXTRACT", "ANY", "NONE", "SINGLE", "UNION", 
		"ALL", "CONSTRAINT", "ASSERT", "UNIQUE", "EXISTS", "CALL", "YIELD", "CASE", 
		"WHEN", "THEN", "ELSE", "END", "MANDATORY", "SCALAR", "OF", "ADD", "DO", 
		"FOR", "REQUIRE", "UnescapedSymbolicName", "EscapedSymbolicName", "StringLiteral", 
		"HexInteger", "DecimalInteger", "OctalInteger", "ExponentDecimalReal", 
		"RegularDecimalReal", "HexLetter", "WS", "COMMENT", "MULTILINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(CypherParser._LITERAL_NAMES, CypherParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return CypherParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Cypher.g4"; }

	// @Override
	public get ruleNames(): string[] { return CypherParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return CypherParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(CypherParser._ATN, this);
	}
	// @RuleVersion(0)
	public oC_Cypher(): OC_CypherContext {
		let _localctx: OC_CypherContext = new OC_CypherContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, CypherParser.RULE_oC_Cypher);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 196;
			this.oC_Statement();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__0) {
				{
				this.state = 197;
				this.match(CypherParser.T__0);
				}
			}

			this.state = 200;
			this.match(CypherParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Statement(): OC_StatementContext {
		let _localctx: OC_StatementContext = new OC_StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, CypherParser.RULE_oC_Statement);
		try {
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 202;
				this.oC_Query();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 203;
				this.oC_Command();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Query(): OC_QueryContext {
		let _localctx: OC_QueryContext = new OC_QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, CypherParser.RULE_oC_Query);
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 206;
				this.oC_RegularQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 207;
				this.oC_StandaloneCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RegularQuery(): OC_RegularQueryContext {
		let _localctx: OC_RegularQueryContext = new OC_RegularQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, CypherParser.RULE_oC_RegularQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.oC_SingleQuery();
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.UNION) {
				{
				{
				this.state = 211;
				this.match(CypherParser.UNION);
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.ALL) {
					{
					this.state = 212;
					this.match(CypherParser.ALL);
					}
				}

				this.state = 215;
				this.oC_SingleQuery();
				}
				}
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SingleQuery(): OC_SingleQueryContext {
		let _localctx: OC_SingleQueryContext = new OC_SingleQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, CypherParser.RULE_oC_SingleQuery);
		try {
			this.state = 223;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 221;
				this.oC_SinglePartQuery();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 222;
				this.oC_MultiPartQuery();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		let _localctx: OC_SinglePartQueryContext = new OC_SinglePartQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, CypherParser.RULE_oC_SinglePartQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (CypherParser.OPTIONAL - 31)) | (1 << (CypherParser.MATCH - 31)) | (1 << (CypherParser.UNWIND - 31)))) !== 0) || _la === CypherParser.CALL) {
				{
				{
				this.state = 225;
				this.oC_ReadingClause();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (CypherParser.CREATE - 27)) | (1 << (CypherParser.MERGE - 27)) | (1 << (CypherParser.SET - 27)) | (1 << (CypherParser.DETACH - 27)) | (1 << (CypherParser.DELETE - 27)) | (1 << (CypherParser.REMOVE - 27)))) !== 0)) {
				{
				{
				this.state = 231;
				this.oC_UpdatingClause();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.oC_Return();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MultiPartQuery(): OC_MultiPartQueryContext {
		let _localctx: OC_MultiPartQueryContext = new OC_MultiPartQueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, CypherParser.RULE_oC_MultiPartQuery);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 31)) & ~0x1F) === 0 && ((1 << (_la - 31)) & ((1 << (CypherParser.OPTIONAL - 31)) | (1 << (CypherParser.MATCH - 31)) | (1 << (CypherParser.UNWIND - 31)))) !== 0) || _la === CypherParser.CALL) {
				{
				{
				this.state = 239;
				this.oC_ReadingClause();
				}
				}
				this.state = 244;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (CypherParser.CREATE - 27)) | (1 << (CypherParser.MERGE - 27)) | (1 << (CypherParser.SET - 27)) | (1 << (CypherParser.DETACH - 27)) | (1 << (CypherParser.DELETE - 27)) | (1 << (CypherParser.REMOVE - 27)))) !== 0)) {
				{
				{
				this.state = 245;
				this.oC_UpdatingClause();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
			this.oC_With();
			this.state = 252;
			this.oC_SinglePartQuery();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReadingClause(): OC_ReadingClauseContext {
		let _localctx: OC_ReadingClauseContext = new OC_ReadingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, CypherParser.RULE_oC_ReadingClause);
		try {
			this.state = 257;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.OPTIONAL:
			case CypherParser.MATCH:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 254;
				this.oC_Match();
				}
				break;
			case CypherParser.UNWIND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 255;
				this.oC_Unwind();
				}
				break;
			case CypherParser.CALL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 256;
				this.oC_InQueryCall();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Command(): OC_CommandContext {
		let _localctx: OC_CommandContext = new OC_CommandContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, CypherParser.RULE_oC_Command);
		try {
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 259;
				this.oC_CreateIndex();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 260;
				this.oC_DropIndex();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 261;
				this.oC_CreateConstraint();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 262;
				this.oC_DropConstraint();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_CreateIndex(): OC_CreateIndexContext {
		let _localctx: OC_CreateIndexContext = new OC_CreateIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, CypherParser.RULE_oC_CreateIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 265;
			this.match(CypherParser.CREATE);
			this.state = 266;
			this.match(CypherParser.INDEX);
			this.state = 267;
			this.match(CypherParser.ON);
			this.state = 268;
			this.oC_NodeLabel();
			this.state = 269;
			this.match(CypherParser.T__1);
			this.state = 270;
			this.oC_PropertyExpression();
			this.state = 275;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 271;
				this.match(CypherParser.T__2);
				this.state = 272;
				this.oC_PropertyExpression();
				}
				}
				this.state = 277;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 278;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_DropIndex(): OC_DropIndexContext {
		let _localctx: OC_DropIndexContext = new OC_DropIndexContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, CypherParser.RULE_oC_DropIndex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 280;
			this.match(CypherParser.DROP);
			this.state = 281;
			this.match(CypherParser.INDEX);
			this.state = 282;
			this.match(CypherParser.ON);
			this.state = 283;
			this.oC_NodeLabel();
			this.state = 284;
			this.match(CypherParser.T__1);
			this.state = 285;
			this.oC_PropertyExpression();
			this.state = 290;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 286;
				this.match(CypherParser.T__2);
				this.state = 287;
				this.oC_PropertyExpression();
				}
				}
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 293;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_CreateConstraint(): OC_CreateConstraintContext {
		let _localctx: OC_CreateConstraintContext = new OC_CreateConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, CypherParser.RULE_oC_CreateConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this.match(CypherParser.CREATE);
			this.state = 296;
			this.match(CypherParser.CONSTRAINT);
			this.state = 297;
			this.match(CypherParser.ON);
			this.state = 298;
			this.match(CypherParser.T__1);
			this.state = 299;
			this.oC_Variable();
			this.state = 300;
			this.oC_NodeLabel();
			this.state = 301;
			this.match(CypherParser.T__3);
			this.state = 302;
			this.match(CypherParser.ASSERT);
			this.state = 303;
			this.oC_PropertyExpression();
			this.state = 304;
			this.match(CypherParser.IS);
			this.state = 305;
			this.match(CypherParser.UNIQUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_DropConstraint(): OC_DropConstraintContext {
		let _localctx: OC_DropConstraintContext = new OC_DropConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, CypherParser.RULE_oC_DropConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 307;
			this.match(CypherParser.DROP);
			this.state = 308;
			this.match(CypherParser.CONSTRAINT);
			this.state = 309;
			this.match(CypherParser.ON);
			this.state = 310;
			this.match(CypherParser.T__1);
			this.state = 311;
			this.oC_Variable();
			this.state = 312;
			this.oC_NodeLabel();
			this.state = 313;
			this.match(CypherParser.T__3);
			this.state = 314;
			this.match(CypherParser.ASSERT);
			this.state = 315;
			this.oC_PropertyExpression();
			this.state = 316;
			this.match(CypherParser.IS);
			this.state = 317;
			this.match(CypherParser.UNIQUE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Match(): OC_MatchContext {
		let _localctx: OC_MatchContext = new OC_MatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, CypherParser.RULE_oC_Match);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.OPTIONAL) {
				{
				this.state = 319;
				this.match(CypherParser.OPTIONAL);
				}
			}

			this.state = 322;
			this.match(CypherParser.MATCH);
			this.state = 323;
			this.oC_Pattern();
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.WHERE) {
				{
				this.state = 324;
				this.match(CypherParser.WHERE);
				this.state = 325;
				this.oC_Expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Unwind(): OC_UnwindContext {
		let _localctx: OC_UnwindContext = new OC_UnwindContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, CypherParser.RULE_oC_Unwind);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 328;
			this.match(CypherParser.UNWIND);
			this.state = 329;
			this.oC_Expression();
			this.state = 330;
			this.match(CypherParser.AS);
			this.state = 331;
			this.oC_Variable();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Merge(): OC_MergeContext {
		let _localctx: OC_MergeContext = new OC_MergeContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, CypherParser.RULE_oC_Merge);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this.match(CypherParser.MERGE);
			this.state = 334;
			this.oC_PatternPart();
			this.state = 338;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.ON) {
				{
				{
				this.state = 335;
				this.oC_MergeAction();
				}
				}
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MergeAction(): OC_MergeActionContext {
		let _localctx: OC_MergeActionContext = new OC_MergeActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, CypherParser.RULE_oC_MergeAction);
		try {
			this.state = 347;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.match(CypherParser.ON);
				this.state = 342;
				this.match(CypherParser.MATCH);
				this.state = 343;
				this.oC_Set();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 344;
				this.match(CypherParser.ON);
				this.state = 345;
				this.match(CypherParser.CREATE);
				this.state = 346;
				this.oC_Set();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Create(): OC_CreateContext {
		let _localctx: OC_CreateContext = new OC_CreateContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, CypherParser.RULE_oC_Create);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 349;
			this.match(CypherParser.CREATE);
			this.state = 350;
			this.oC_Pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Set(): OC_SetContext {
		let _localctx: OC_SetContext = new OC_SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, CypherParser.RULE_oC_Set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(CypherParser.SET);
			this.state = 353;
			this.oC_SetItem();
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 354;
				this.match(CypherParser.T__2);
				this.state = 355;
				this.oC_SetItem();
				}
				}
				this.state = 360;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SetItem(): OC_SetItemContext {
		let _localctx: OC_SetItemContext = new OC_SetItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, CypherParser.RULE_oC_SetItem);
		try {
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 361;
				this.oC_PropertyExpression();
				this.state = 362;
				this.match(CypherParser.T__4);
				this.state = 363;
				this.oC_Expression();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 365;
				this.oC_Variable();
				this.state = 366;
				this.match(CypherParser.T__4);
				this.state = 367;
				this.oC_Expression();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 369;
				this.oC_Variable();
				this.state = 370;
				this.match(CypherParser.T__5);
				this.state = 371;
				this.oC_Expression();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 373;
				this.oC_Variable();
				this.state = 374;
				this.oC_NodeLabels();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Delete(): OC_DeleteContext {
		let _localctx: OC_DeleteContext = new OC_DeleteContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, CypherParser.RULE_oC_Delete);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.DETACH) {
				{
				this.state = 378;
				this.match(CypherParser.DETACH);
				}
			}

			this.state = 381;
			this.match(CypherParser.DELETE);
			this.state = 382;
			this.oC_Expression();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 383;
				this.match(CypherParser.T__2);
				this.state = 384;
				this.oC_Expression();
				}
				}
				this.state = 389;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Remove(): OC_RemoveContext {
		let _localctx: OC_RemoveContext = new OC_RemoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, CypherParser.RULE_oC_Remove);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 390;
			this.match(CypherParser.REMOVE);
			this.state = 391;
			this.oC_RemoveItem();
			this.state = 396;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 392;
				this.match(CypherParser.T__2);
				this.state = 393;
				this.oC_RemoveItem();
				}
				}
				this.state = 398;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RemoveItem(): OC_RemoveItemContext {
		let _localctx: OC_RemoveItemContext = new OC_RemoveItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, CypherParser.RULE_oC_RemoveItem);
		try {
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 399;
				this.oC_Variable();
				this.state = 400;
				this.oC_NodeLabels();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 402;
				this.oC_PropertyExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_InQueryCall(): OC_InQueryCallContext {
		let _localctx: OC_InQueryCallContext = new OC_InQueryCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, CypherParser.RULE_oC_InQueryCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(CypherParser.CALL);
			this.state = 406;
			this.oC_ExplicitProcedureInvocation();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.YIELD) {
				{
				this.state = 407;
				this.match(CypherParser.YIELD);
				this.state = 408;
				this.oC_YieldItems();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StandaloneCall(): OC_StandaloneCallContext {
		let _localctx: OC_StandaloneCallContext = new OC_StandaloneCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, CypherParser.RULE_oC_StandaloneCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(CypherParser.CALL);
			this.state = 412;
			this.oC_ExplicitProcedureInvocation();
			this.state = 415;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.YIELD) {
				{
				this.state = 413;
				this.match(CypherParser.YIELD);
				this.state = 414;
				this.oC_YieldItems();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItems(): OC_YieldItemsContext {
		let _localctx: OC_YieldItemsContext = new OC_YieldItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, CypherParser.RULE_oC_YieldItems);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.oC_YieldItem();
			this.state = 422;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 418;
				this.match(CypherParser.T__2);
				this.state = 419;
				this.oC_YieldItem();
				}
				}
				this.state = 424;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_YieldItem(): OC_YieldItemContext {
		let _localctx: OC_YieldItemContext = new OC_YieldItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, CypherParser.RULE_oC_YieldItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.oC_ProcedureResultField();
			this.state = 428;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.AS) {
				{
				this.state = 426;
				this.match(CypherParser.AS);
				this.state = 427;
				this.oC_Variable();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_With(): OC_WithContext {
		let _localctx: OC_WithContext = new OC_WithContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, CypherParser.RULE_oC_With);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 430;
			this.match(CypherParser.WITH);
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.DISTINCT) {
				{
				this.state = 431;
				this.match(CypherParser.DISTINCT);
				}
			}

			this.state = 434;
			this.oC_ReturnBody();
			this.state = 437;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.WHERE) {
				{
				this.state = 435;
				this.match(CypherParser.WHERE);
				this.state = 436;
				this.oC_Expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Return(): OC_ReturnContext {
		let _localctx: OC_ReturnContext = new OC_ReturnContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, CypherParser.RULE_oC_Return);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.match(CypherParser.RETURN);
			this.state = 441;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.DISTINCT) {
				{
				this.state = 440;
				this.match(CypherParser.DISTINCT);
				}
			}

			this.state = 443;
			this.oC_ReturnBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReturnBody(): OC_ReturnBodyContext {
		let _localctx: OC_ReturnBodyContext = new OC_ReturnBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, CypherParser.RULE_oC_ReturnBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 445;
			this.oC_ReturnItems();
			this.state = 456;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.ORDER) {
				{
				this.state = 446;
				this.match(CypherParser.ORDER);
				this.state = 447;
				this.match(CypherParser.BY);
				this.state = 448;
				this.oC_SortItem();
				this.state = 453;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 449;
					this.match(CypherParser.T__2);
					this.state = 450;
					this.oC_SortItem();
					}
					}
					this.state = 455;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.SKIP_KEYWORD) {
				{
				this.state = 458;
				this.match(CypherParser.SKIP_KEYWORD);
				this.state = 459;
				this.oC_Expression();
				}
			}

			this.state = 464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.LIMIT) {
				{
				this.state = 462;
				this.match(CypherParser.LIMIT);
				this.state = 463;
				this.oC_Expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReturnItems(): OC_ReturnItemsContext {
		let _localctx: OC_ReturnItemsContext = new OC_ReturnItemsContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, CypherParser.RULE_oC_ReturnItems);
		let _la: number;
		try {
			this.state = 475;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.T__6:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 466;
				this.match(CypherParser.T__6);
				}
				break;
			case CypherParser.T__1:
			case CypherParser.T__7:
			case CypherParser.T__9:
			case CypherParser.T__14:
			case CypherParser.T__15:
			case CypherParser.T__25:
			case CypherParser.NOT:
			case CypherParser.NULL:
			case CypherParser.TRUE:
			case CypherParser.FALSE:
			case CypherParser.COUNT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
			case CypherParser.StringLiteral:
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
			case CypherParser.HexLetter:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 467;
				this.oC_ReturnItem();
				this.state = 472;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 468;
					this.match(CypherParser.T__2);
					this.state = 469;
					this.oC_ReturnItem();
					}
					}
					this.state = 474;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReturnItem(): OC_ReturnItemContext {
		let _localctx: OC_ReturnItemContext = new OC_ReturnItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, CypherParser.RULE_oC_ReturnItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.oC_Expression();
			this.state = 480;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.AS) {
				{
				this.state = 478;
				this.match(CypherParser.AS);
				this.state = 479;
				this.oC_Variable();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Order(): OC_OrderContext {
		let _localctx: OC_OrderContext = new OC_OrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, CypherParser.RULE_oC_Order);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 482;
			this.match(CypherParser.ORDER);
			this.state = 483;
			this.match(CypherParser.BY);
			this.state = 484;
			this.oC_SortItem();
			this.state = 489;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 485;
				this.match(CypherParser.T__2);
				this.state = 486;
				this.oC_SortItem();
				}
				}
				this.state = 491;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SortItem(): OC_SortItemContext {
		let _localctx: OC_SortItemContext = new OC_SortItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, CypherParser.RULE_oC_SortItem);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this.oC_Expression();
			this.state = 494;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.ASCENDING || _la === CypherParser.DESCENDING) {
				{
				this.state = 493;
				_la = this._input.LA(1);
				if (!(_la === CypherParser.ASCENDING || _la === CypherParser.DESCENDING)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Pattern(): OC_PatternContext {
		let _localctx: OC_PatternContext = new OC_PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, CypherParser.RULE_oC_Pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.oC_PatternPart();
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__2) {
				{
				{
				this.state = 497;
				this.match(CypherParser.T__2);
				this.state = 498;
				this.oC_PatternPart();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternPart(): OC_PatternPartContext {
		let _localctx: OC_PatternPartContext = new OC_PatternPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, CypherParser.RULE_oC_PatternPart);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 507;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 504;
				this.oC_Variable();
				this.state = 505;
				this.match(CypherParser.T__4);
				}
			}

			this.state = 509;
			this.oC_AnonymousPatternPart();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
		let _localctx: OC_AnonymousPatternPartContext = new OC_AnonymousPatternPartContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, CypherParser.RULE_oC_AnonymousPatternPart);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.oC_PatternElement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElement(): OC_PatternElementContext {
		let _localctx: OC_PatternElementContext = new OC_PatternElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, CypherParser.RULE_oC_PatternElement);
		let _la: number;
		try {
			this.state = 525;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 513;
				this.match(CypherParser.T__1);
				this.state = 514;
				this.oC_NodePattern();
				this.state = 515;
				this.match(CypherParser.T__3);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 517;
				this.match(CypherParser.T__1);
				this.state = 518;
				this.oC_NodePattern();
				this.state = 519;
				this.match(CypherParser.T__3);
				this.state = 521;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 520;
					this.oC_PatternElementChain();
					}
					}
					this.state = 523;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === CypherParser.T__15 || _la === CypherParser.T__20);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodePattern(): OC_NodePatternContext {
		let _localctx: OC_NodePatternContext = new OC_NodePatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, CypherParser.RULE_oC_NodePattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 528;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 527;
				this.oC_Variable();
				}
			}

			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__11) {
				{
				this.state = 530;
				this.oC_NodeLabels();
				}
			}

			this.state = 534;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__9) {
				{
				this.state = 533;
				this.oC_Properties();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternElementChain(): OC_PatternElementChainContext {
		let _localctx: OC_PatternElementChainContext = new OC_PatternElementChainContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, CypherParser.RULE_oC_PatternElementChain);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 536;
			this.oC_RelationshipPattern();
			this.state = 537;
			this.oC_NodePattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		let _localctx: OC_RelationshipPatternContext = new OC_RelationshipPatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, CypherParser.RULE_oC_RelationshipPattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__20) {
				{
				this.state = 539;
				this.oC_LeftArrowHead();
				}
			}

			this.state = 542;
			this.oC_Dash();
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__7) {
				{
				this.state = 543;
				this.oC_RelationshipDetail();
				}
			}

			this.state = 546;
			this.oC_Dash();
			this.state = 548;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__21) {
				{
				this.state = 547;
				this.oC_RightArrowHead();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipDetail(): OC_RelationshipDetailContext {
		let _localctx: OC_RelationshipDetailContext = new OC_RelationshipDetailContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, CypherParser.RULE_oC_RelationshipDetail);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 550;
			this.match(CypherParser.T__7);
			this.state = 552;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 551;
				this.oC_Variable();
				}
			}

			this.state = 555;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__11) {
				{
				this.state = 554;
				this.oC_RelationshipTypes();
				}
			}

			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__6) {
				{
				this.state = 557;
				this.oC_RangeLiteral();
				}
			}

			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__9) {
				{
				this.state = 560;
				this.oC_Properties();
				}
			}

			this.state = 563;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Properties(): OC_PropertiesContext {
		let _localctx: OC_PropertiesContext = new OC_PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, CypherParser.RULE_oC_Properties);
		let _la: number;
		try {
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 565;
				this.match(CypherParser.T__9);
				this.state = 566;
				this.oC_PropertyKeyValue();
				this.state = 571;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 567;
					this.match(CypherParser.T__2);
					this.state = 568;
					this.oC_PropertyKeyValue();
					}
					}
					this.state = 573;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 574;
				this.match(CypherParser.T__10);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 576;
				this.match(CypherParser.T__9);
				this.state = 577;
				this.match(CypherParser.T__10);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelationshipTypes(): OC_RelationshipTypesContext {
		let _localctx: OC_RelationshipTypesContext = new OC_RelationshipTypesContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, CypherParser.RULE_oC_RelationshipTypes);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 580;
			this.match(CypherParser.T__11);
			this.state = 581;
			this.oC_RelTypeName();
			this.state = 587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__12) {
				{
				{
				this.state = 582;
				this.match(CypherParser.T__12);
				this.state = 583;
				this.match(CypherParser.T__11);
				this.state = 584;
				this.oC_RelTypeName();
				}
				}
				this.state = 589;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabels(): OC_NodeLabelsContext {
		let _localctx: OC_NodeLabelsContext = new OC_NodeLabelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, CypherParser.RULE_oC_NodeLabels);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 590;
					this.oC_NodeLabel();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 593;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 57, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NodeLabel(): OC_NodeLabelContext {
		let _localctx: OC_NodeLabelContext = new OC_NodeLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, CypherParser.RULE_oC_NodeLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 595;
			this.match(CypherParser.T__11);
			this.state = 596;
			this.oC_LabelName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RangeLiteral(): OC_RangeLiteralContext {
		let _localctx: OC_RangeLiteralContext = new OC_RangeLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, CypherParser.RULE_oC_RangeLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 598;
			this.match(CypherParser.T__6);
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CypherParser.HexInteger - 91)) | (1 << (CypherParser.DecimalInteger - 91)) | (1 << (CypherParser.OctalInteger - 91)))) !== 0)) {
				{
				this.state = 599;
				this.oC_IntegerLiteral();
				}
			}

			this.state = 606;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__13) {
				{
				this.state = 602;
				this.match(CypherParser.T__13);
				this.state = 604;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CypherParser.HexInteger - 91)) | (1 << (CypherParser.DecimalInteger - 91)) | (1 << (CypherParser.OctalInteger - 91)))) !== 0)) {
					{
					this.state = 603;
					this.oC_IntegerLiteral();
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_LabelName(): OC_LabelNameContext {
		let _localctx: OC_LabelNameContext = new OC_LabelNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, CypherParser.RULE_oC_LabelName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 608;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RelTypeName(): OC_RelTypeNameContext {
		let _localctx: OC_RelTypeNameContext = new OC_RelTypeNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, CypherParser.RULE_oC_RelTypeName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 610;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Expression(): OC_ExpressionContext {
		let _localctx: OC_ExpressionContext = new OC_ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, CypherParser.RULE_oC_Expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 612;
			this.oC_OrExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_OrExpression(): OC_OrExpressionContext {
		let _localctx: OC_OrExpressionContext = new OC_OrExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, CypherParser.RULE_oC_OrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.oC_AndExpression();
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.OR) {
				{
				{
				this.state = 615;
				this.match(CypherParser.OR);
				this.state = 616;
				this.oC_AndExpression();
				}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AndExpression(): OC_AndExpressionContext {
		let _localctx: OC_AndExpressionContext = new OC_AndExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, CypherParser.RULE_oC_AndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 622;
			this.oC_NotExpression();
			this.state = 627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.AND) {
				{
				{
				this.state = 623;
				this.match(CypherParser.AND);
				this.state = 624;
				this.oC_NotExpression();
				}
				}
				this.state = 629;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NotExpression(): OC_NotExpressionContext {
		let _localctx: OC_NotExpressionContext = new OC_NotExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, CypherParser.RULE_oC_NotExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 633;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.NOT) {
				{
				{
				this.state = 630;
				this.match(CypherParser.NOT);
				}
				}
				this.state = 635;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 636;
			this.oC_ComparisonExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		let _localctx: OC_ComparisonExpressionContext = new OC_ComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, CypherParser.RULE_oC_ComparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.oC_AddOrSubtractExpression();
			this.state = 642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__4) | (1 << CypherParser.T__20) | (1 << CypherParser.T__21) | (1 << CypherParser.T__22) | (1 << CypherParser.T__23) | (1 << CypherParser.T__24))) !== 0)) {
				{
				{
				this.state = 639;
				this.oC_PartialComparisonExpression();
				}
				}
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		let _localctx: OC_AddOrSubtractExpressionContext = new OC_AddOrSubtractExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, CypherParser.RULE_oC_AddOrSubtractExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.oC_MultiplyDivideModuloExpression();
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__14 || _la === CypherParser.T__15) {
				{
				{
				this.state = 646;
				_la = this._input.LA(1);
				if (!(_la === CypherParser.T__14 || _la === CypherParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 647;
				this.oC_MultiplyDivideModuloExpression();
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext {
		let _localctx: OC_MultiplyDivideModuloExpressionContext = new OC_MultiplyDivideModuloExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, CypherParser.RULE_oC_MultiplyDivideModuloExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this.oC_PowerOfExpression();
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__6) | (1 << CypherParser.T__16) | (1 << CypherParser.T__17))) !== 0)) {
				{
				{
				this.state = 654;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__6) | (1 << CypherParser.T__16) | (1 << CypherParser.T__17))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 655;
				this.oC_PowerOfExpression();
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PowerOfExpression(): OC_PowerOfExpressionContext {
		let _localctx: OC_PowerOfExpressionContext = new OC_PowerOfExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, CypherParser.RULE_oC_PowerOfExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 661;
			this.oC_UnaryAddOrSubtractExpression();
			this.state = 666;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__18) {
				{
				{
				this.state = 662;
				this.match(CypherParser.T__18);
				this.state = 663;
				this.oC_UnaryAddOrSubtractExpression();
				}
				}
				this.state = 668;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext {
		let _localctx: OC_UnaryAddOrSubtractExpressionContext = new OC_UnaryAddOrSubtractExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, CypherParser.RULE_oC_UnaryAddOrSubtractExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__14 || _la === CypherParser.T__15) {
				{
				{
				this.state = 669;
				_la = this._input.LA(1);
				if (!(_la === CypherParser.T__14 || _la === CypherParser.T__15)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 675;
			this.oC_StringListNullOperatorExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
		let _localctx: OC_StringListNullOperatorExpressionContext = new OC_StringListNullOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, CypherParser.RULE_oC_StringListNullOperatorExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 677;
			this.oC_PropertyOrLabelsExpression();
			this.state = 683;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__7 || ((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & ((1 << (CypherParser.IN - 54)) | (1 << (CypherParser.STARTS - 54)) | (1 << (CypherParser.ENDS - 54)) | (1 << (CypherParser.CONTAINS - 54)) | (1 << (CypherParser.IS - 54)))) !== 0)) {
				{
				this.state = 681;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CypherParser.STARTS:
				case CypherParser.ENDS:
				case CypherParser.CONTAINS:
					{
					this.state = 678;
					this.oC_StringOperatorExpression();
					}
					break;
				case CypherParser.T__7:
				case CypherParser.IN:
					{
					this.state = 679;
					this.oC_ListOperatorExpression();
					}
					break;
				case CypherParser.IS:
					{
					this.state = 680;
					this.oC_NullOperatorExpression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 685;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext {
		let _localctx: OC_ListOperatorExpressionContext = new OC_ListOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, CypherParser.RULE_oC_ListOperatorExpression);
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.IN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 686;
				this.match(CypherParser.IN);
				this.state = 687;
				this.oC_PropertyOrLabelsExpression();
				}
				break;
			case CypherParser.T__7:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 688;
				this.match(CypherParser.T__7);
				this.state = 689;
				this.oC_Expression();
				this.state = 690;
				this.match(CypherParser.T__8);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext {
		let _localctx: OC_StringOperatorExpressionContext = new OC_StringOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, CypherParser.RULE_oC_StringOperatorExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 699;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.STARTS:
				{
				this.state = 694;
				this.match(CypherParser.STARTS);
				this.state = 695;
				this.match(CypherParser.WITH);
				}
				break;
			case CypherParser.ENDS:
				{
				this.state = 696;
				this.match(CypherParser.ENDS);
				this.state = 697;
				this.match(CypherParser.WITH);
				}
				break;
			case CypherParser.CONTAINS:
				{
				this.state = 698;
				this.match(CypherParser.CONTAINS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 701;
			this.oC_PropertyOrLabelsExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext {
		let _localctx: OC_NullOperatorExpressionContext = new OC_NullOperatorExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, CypherParser.RULE_oC_NullOperatorExpression);
		try {
			this.state = 708;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.match(CypherParser.IS);
				this.state = 704;
				this.match(CypherParser.NULL);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 705;
				this.match(CypherParser.IS);
				this.state = 706;
				this.match(CypherParser.NOT);
				this.state = 707;
				this.match(CypherParser.NULL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		let _localctx: OC_PropertyOrLabelsExpressionContext = new OC_PropertyOrLabelsExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, CypherParser.RULE_oC_PropertyOrLabelsExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 710;
			this.oC_Atom();
			this.state = 715;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === CypherParser.T__11 || _la === CypherParser.T__19) {
				{
				this.state = 713;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case CypherParser.T__19:
					{
					this.state = 711;
					this.oC_PropertyLookup();
					}
					break;
				case CypherParser.T__11:
					{
					this.state = 712;
					this.oC_NodeLabels();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 717;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Atom(): OC_AtomContext {
		let _localctx: OC_AtomContext = new OC_AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, CypherParser.RULE_oC_Atom);
		try {
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 718;
				this.oC_Literal();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 719;
				this.oC_Parameter();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 720;
				this.oC_Variable();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 721;
				this.oC_FunctionInvocation();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 722;
				this.oC_ExplicitProcedureInvocation();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 723;
				this.oC_ImplicitProcedureInvocation();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 724;
				this.oC_CountExpression();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 725;
				this.oC_ListComprehension();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 726;
				this.oC_PatternComprehension();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 727;
				this.oC_Parenthesized();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 728;
				this.oC_FunctionName();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Literal(): OC_LiteralContext {
		let _localctx: OC_LiteralContext = new OC_LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, CypherParser.RULE_oC_Literal);
		try {
			this.state = 737;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 731;
				this.oC_NumberLiteral();
				}
				break;
			case CypherParser.StringLiteral:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 732;
				this.match(CypherParser.StringLiteral);
				}
				break;
			case CypherParser.TRUE:
			case CypherParser.FALSE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 733;
				this.oC_BooleanLiteral();
				}
				break;
			case CypherParser.NULL:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 734;
				this.match(CypherParser.NULL);
				}
				break;
			case CypherParser.T__9:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 735;
				this.oC_MapLiteral();
				}
				break;
			case CypherParser.T__7:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 736;
				this.oC_ListLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_BooleanLiteral(): OC_BooleanLiteralContext {
		let _localctx: OC_BooleanLiteralContext = new OC_BooleanLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, CypherParser.RULE_oC_BooleanLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 739;
			_la = this._input.LA(1);
			if (!(_la === CypherParser.TRUE || _la === CypherParser.FALSE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListLiteral(): OC_ListLiteralContext {
		let _localctx: OC_ListLiteralContext = new OC_ListLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, CypherParser.RULE_oC_ListLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this.match(CypherParser.T__7);
			this.state = 750;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__1) | (1 << CypherParser.T__7) | (1 << CypherParser.T__9) | (1 << CypherParser.T__14) | (1 << CypherParser.T__15) | (1 << CypherParser.T__25))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CypherParser.NOT - 53)) | (1 << (CypherParser.NULL - 53)) | (1 << (CypherParser.TRUE - 53)) | (1 << (CypherParser.FALSE - 53)) | (1 << (CypherParser.COUNT - 53)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.StringLiteral - 88)) | (1 << (CypherParser.HexInteger - 88)) | (1 << (CypherParser.DecimalInteger - 88)) | (1 << (CypherParser.OctalInteger - 88)) | (1 << (CypherParser.ExponentDecimalReal - 88)) | (1 << (CypherParser.RegularDecimalReal - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 742;
				this.oC_Expression();
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 743;
					this.match(CypherParser.T__2);
					this.state = 744;
					this.oC_Expression();
					}
					}
					this.state = 749;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 752;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Parenthesized(): OC_ParenthesizedContext {
		let _localctx: OC_ParenthesizedContext = new OC_ParenthesizedContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, CypherParser.RULE_oC_Parenthesized);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 754;
			this.match(CypherParser.T__1);
			this.state = 755;
			this.oC_Expression();
			this.state = 756;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		let _localctx: OC_PropertyExpressionContext = new OC_PropertyExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, CypherParser.RULE_oC_PropertyExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.oC_Atom();
			this.state = 759;
			this.oC_PropertyLookup();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyLookup(): OC_PropertyLookupContext {
		let _localctx: OC_PropertyLookupContext = new OC_PropertyLookupContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, CypherParser.RULE_oC_PropertyLookup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(CypherParser.T__19);
			this.state = 762;
			this.oC_PropertyKeyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Variable(): OC_VariableContext {
		let _localctx: OC_VariableContext = new OC_VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, CypherParser.RULE_oC_Variable);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 764;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		let _localctx: OC_PropertyKeyNameContext = new OC_PropertyKeyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, CypherParser.RULE_oC_PropertyKeyName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 766;
			this.oC_SchemaName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_IntegerLiteral(): OC_IntegerLiteralContext {
		let _localctx: OC_IntegerLiteralContext = new OC_IntegerLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, CypherParser.RULE_oC_IntegerLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 768;
			_la = this._input.LA(1);
			if (!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & ((1 << (CypherParser.HexInteger - 91)) | (1 << (CypherParser.DecimalInteger - 91)) | (1 << (CypherParser.OctalInteger - 91)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_DoubleLiteral(): OC_DoubleLiteralContext {
		let _localctx: OC_DoubleLiteralContext = new OC_DoubleLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, CypherParser.RULE_oC_DoubleLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 770;
			_la = this._input.LA(1);
			if (!(_la === CypherParser.ExponentDecimalReal || _la === CypherParser.RegularDecimalReal)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SchemaName(): OC_SchemaNameContext {
		let _localctx: OC_SchemaNameContext = new OC_SchemaNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, CypherParser.RULE_oC_SchemaName);
		try {
			this.state = 774;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
			case CypherParser.HexLetter:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 772;
				this.oC_SymbolicName();
				}
				break;
			case CypherParser.CREATE:
			case CypherParser.DROP:
			case CypherParser.ON:
			case CypherParser.OPTIONAL:
			case CypherParser.MATCH:
			case CypherParser.UNWIND:
			case CypherParser.AS:
			case CypherParser.MERGE:
			case CypherParser.SET:
			case CypherParser.DETACH:
			case CypherParser.DELETE:
			case CypherParser.REMOVE:
			case CypherParser.WITH:
			case CypherParser.RETURN:
			case CypherParser.DISTINCT:
			case CypherParser.ORDER:
			case CypherParser.BY:
			case CypherParser.SKIP_KEYWORD:
			case CypherParser.LIMIT:
			case CypherParser.ASCENDING:
			case CypherParser.DESCENDING:
			case CypherParser.WHERE:
			case CypherParser.OR:
			case CypherParser.XOR:
			case CypherParser.AND:
			case CypherParser.NOT:
			case CypherParser.IN:
			case CypherParser.STARTS:
			case CypherParser.ENDS:
			case CypherParser.CONTAINS:
			case CypherParser.IS:
			case CypherParser.NULL:
			case CypherParser.TRUE:
			case CypherParser.FALSE:
			case CypherParser.UNION:
			case CypherParser.ALL:
			case CypherParser.CONSTRAINT:
			case CypherParser.UNIQUE:
			case CypherParser.EXISTS:
			case CypherParser.CASE:
			case CypherParser.WHEN:
			case CypherParser.THEN:
			case CypherParser.ELSE:
			case CypherParser.END:
			case CypherParser.MANDATORY:
			case CypherParser.SCALAR:
			case CypherParser.OF:
			case CypherParser.ADD:
			case CypherParser.DO:
			case CypherParser.FOR:
			case CypherParser.REQUIRE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 773;
				this.oC_ReservedWord();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_SymbolicName(): OC_SymbolicNameContext {
		let _localctx: OC_SymbolicNameContext = new OC_SymbolicNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, CypherParser.RULE_oC_SymbolicName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			_la = this._input.LA(1);
			if (!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext {
		let _localctx: OC_LeftArrowHeadContext = new OC_LeftArrowHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, CypherParser.RULE_oC_LeftArrowHead);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 778;
			this.match(CypherParser.T__20);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_RightArrowHead(): OC_RightArrowHeadContext {
		let _localctx: OC_RightArrowHeadContext = new OC_RightArrowHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, CypherParser.RULE_oC_RightArrowHead);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.match(CypherParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Dash(): OC_DashContext {
		let _localctx: OC_DashContext = new OC_DashContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, CypherParser.RULE_oC_Dash);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.match(CypherParser.T__15);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_UpdatingClause(): OC_UpdatingClauseContext {
		let _localctx: OC_UpdatingClauseContext = new OC_UpdatingClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, CypherParser.RULE_oC_UpdatingClause);
		try {
			this.state = 789;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.CREATE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.oC_Create();
				}
				break;
			case CypherParser.MERGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				this.oC_Merge();
				}
				break;
			case CypherParser.DETACH:
			case CypherParser.DELETE:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 786;
				this.oC_Delete();
				}
				break;
			case CypherParser.SET:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 787;
				this.oC_Set();
				}
				break;
			case CypherParser.REMOVE:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 788;
				this.oC_Remove();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		let _localctx: OC_ExplicitProcedureInvocationContext = new OC_ExplicitProcedureInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, CypherParser.RULE_oC_ExplicitProcedureInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			this.oC_ProcedureName();
			this.state = 792;
			this.match(CypherParser.T__1);
			this.state = 801;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__1) | (1 << CypherParser.T__7) | (1 << CypherParser.T__9) | (1 << CypherParser.T__14) | (1 << CypherParser.T__15) | (1 << CypherParser.T__25))) !== 0) || ((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & ((1 << (CypherParser.NOT - 53)) | (1 << (CypherParser.NULL - 53)) | (1 << (CypherParser.TRUE - 53)) | (1 << (CypherParser.FALSE - 53)) | (1 << (CypherParser.COUNT - 53)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.StringLiteral - 88)) | (1 << (CypherParser.HexInteger - 88)) | (1 << (CypherParser.DecimalInteger - 88)) | (1 << (CypherParser.OctalInteger - 88)) | (1 << (CypherParser.ExponentDecimalReal - 88)) | (1 << (CypherParser.RegularDecimalReal - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 793;
				this.oC_Expression();
				this.state = 798;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 794;
					this.match(CypherParser.T__2);
					this.state = 795;
					this.oC_Expression();
					}
					}
					this.state = 800;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 803;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureName(): OC_ProcedureNameContext {
		let _localctx: OC_ProcedureNameContext = new OC_ProcedureNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, CypherParser.RULE_oC_ProcedureName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 805;
			this.oC_Namespace();
			this.state = 806;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Namespace(): OC_NamespaceContext {
		let _localctx: OC_NamespaceContext = new OC_NamespaceContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, CypherParser.RULE_oC_Namespace);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 813;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 808;
					this.oC_SymbolicName();
					this.state = 809;
					this.match(CypherParser.T__19);
					}
					}
				}
				this.state = 815;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext {
		let _localctx: OC_ProcedureResultFieldContext = new OC_ProcedureResultFieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, CypherParser.RULE_oC_ProcedureResultField);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 816;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PropertyKeyValue(): OC_PropertyKeyValueContext {
		let _localctx: OC_PropertyKeyValueContext = new OC_PropertyKeyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, CypherParser.RULE_oC_PropertyKeyValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 818;
			this.oC_PropertyKeyName();
			this.state = 819;
			this.match(CypherParser.T__11);
			this.state = 820;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext {
		let _localctx: OC_PartialComparisonExpressionContext = new OC_PartialComparisonExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, CypherParser.RULE_oC_PartialComparisonExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 822;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__4) | (1 << CypherParser.T__20) | (1 << CypherParser.T__21) | (1 << CypherParser.T__22) | (1 << CypherParser.T__23) | (1 << CypherParser.T__24))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 823;
			this.oC_AddOrSubtractExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_Parameter(): OC_ParameterContext {
		let _localctx: OC_ParameterContext = new OC_ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, CypherParser.RULE_oC_Parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(CypherParser.T__25);
			this.state = 826;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionInvocation(): OC_FunctionInvocationContext {
		let _localctx: OC_FunctionInvocationContext = new OC_FunctionInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, CypherParser.RULE_oC_FunctionInvocation);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 828;
			this.oC_FunctionName();
			this.state = 829;
			this.match(CypherParser.T__1);
			this.state = 841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.T__1) | (1 << CypherParser.T__7) | (1 << CypherParser.T__9) | (1 << CypherParser.T__14) | (1 << CypherParser.T__15) | (1 << CypherParser.T__25))) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & ((1 << (CypherParser.DISTINCT - 42)) | (1 << (CypherParser.NOT - 42)) | (1 << (CypherParser.NULL - 42)) | (1 << (CypherParser.TRUE - 42)) | (1 << (CypherParser.FALSE - 42)) | (1 << (CypherParser.COUNT - 42)))) !== 0) || ((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & ((1 << (CypherParser.UnescapedSymbolicName - 88)) | (1 << (CypherParser.EscapedSymbolicName - 88)) | (1 << (CypherParser.StringLiteral - 88)) | (1 << (CypherParser.HexInteger - 88)) | (1 << (CypherParser.DecimalInteger - 88)) | (1 << (CypherParser.OctalInteger - 88)) | (1 << (CypherParser.ExponentDecimalReal - 88)) | (1 << (CypherParser.RegularDecimalReal - 88)) | (1 << (CypherParser.HexLetter - 88)))) !== 0)) {
				{
				this.state = 831;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.DISTINCT) {
					{
					this.state = 830;
					this.match(CypherParser.DISTINCT);
					}
				}

				this.state = 833;
				this.oC_Expression();
				this.state = 838;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 834;
					this.match(CypherParser.T__2);
					this.state = 835;
					this.oC_Expression();
					}
					}
					this.state = 840;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 843;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FunctionName(): OC_FunctionNameContext {
		let _localctx: OC_FunctionNameContext = new OC_FunctionNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, CypherParser.RULE_oC_FunctionName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.oC_Namespace();
			this.state = 846;
			this.oC_SymbolicName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext {
		let _localctx: OC_ImplicitProcedureInvocationContext = new OC_ImplicitProcedureInvocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, CypherParser.RULE_oC_ImplicitProcedureInvocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			this.oC_ProcedureName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_CountExpression(): OC_CountExpressionContext {
		let _localctx: OC_CountExpressionContext = new OC_CountExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, CypherParser.RULE_oC_CountExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 850;
			this.match(CypherParser.COUNT);
			this.state = 851;
			this.match(CypherParser.T__1);
			this.state = 857;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.T__6:
				{
				this.state = 852;
				this.match(CypherParser.T__6);
				}
				break;
			case CypherParser.T__1:
			case CypherParser.T__7:
			case CypherParser.T__9:
			case CypherParser.T__14:
			case CypherParser.T__15:
			case CypherParser.T__25:
			case CypherParser.DISTINCT:
			case CypherParser.NOT:
			case CypherParser.NULL:
			case CypherParser.TRUE:
			case CypherParser.FALSE:
			case CypherParser.COUNT:
			case CypherParser.UnescapedSymbolicName:
			case CypherParser.EscapedSymbolicName:
			case CypherParser.StringLiteral:
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
			case CypherParser.HexLetter:
				{
				this.state = 854;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === CypherParser.DISTINCT) {
					{
					this.state = 853;
					this.match(CypherParser.DISTINCT);
					}
				}

				this.state = 856;
				this.oC_Expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 859;
			this.match(CypherParser.T__3);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ListComprehension(): OC_ListComprehensionContext {
		let _localctx: OC_ListComprehensionContext = new OC_ListComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, CypherParser.RULE_oC_ListComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(CypherParser.T__7);
			this.state = 862;
			this.oC_FilterExpression();
			this.state = 865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.T__12) {
				{
				this.state = 863;
				this.match(CypherParser.T__12);
				this.state = 864;
				this.oC_Expression();
				}
			}

			this.state = 867;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_FilterExpression(): OC_FilterExpressionContext {
		let _localctx: OC_FilterExpressionContext = new OC_FilterExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, CypherParser.RULE_oC_FilterExpression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 869;
			this.oC_IdInColl();
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.WHERE) {
				{
				this.state = 870;
				this.match(CypherParser.WHERE);
				this.state = 871;
				this.oC_Expression();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_IdInColl(): OC_IdInCollContext {
		let _localctx: OC_IdInCollContext = new OC_IdInCollContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, CypherParser.RULE_oC_IdInColl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.oC_Variable();
			this.state = 875;
			this.match(CypherParser.IN);
			this.state = 876;
			this.oC_Expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_PatternComprehension(): OC_PatternComprehensionContext {
		let _localctx: OC_PatternComprehensionContext = new OC_PatternComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, CypherParser.RULE_oC_PatternComprehension);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 878;
			this.match(CypherParser.T__7);
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 879;
				this.oC_Variable();
				this.state = 880;
				this.match(CypherParser.T__4);
				}
				break;
			}
			this.state = 884;
			this.oC_Pattern();
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === CypherParser.WHERE) {
				{
				this.state = 885;
				this.match(CypherParser.WHERE);
				this.state = 886;
				this.oC_Expression();
				}
			}

			this.state = 889;
			this.match(CypherParser.T__12);
			this.state = 890;
			this.oC_Expression();
			this.state = 891;
			this.match(CypherParser.T__8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_NumberLiteral(): OC_NumberLiteralContext {
		let _localctx: OC_NumberLiteralContext = new OC_NumberLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, CypherParser.RULE_oC_NumberLiteral);
		try {
			this.state = 895;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case CypherParser.ExponentDecimalReal:
			case CypherParser.RegularDecimalReal:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 893;
				this.oC_DoubleLiteral();
				}
				break;
			case CypherParser.HexInteger:
			case CypherParser.DecimalInteger:
			case CypherParser.OctalInteger:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 894;
				this.oC_IntegerLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_MapLiteral(): OC_MapLiteralContext {
		let _localctx: OC_MapLiteralContext = new OC_MapLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, CypherParser.RULE_oC_MapLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			this.match(CypherParser.T__9);
			this.state = 911;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << CypherParser.CREATE) | (1 << CypherParser.DROP) | (1 << CypherParser.ON) | (1 << CypherParser.OPTIONAL))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (CypherParser.MATCH - 32)) | (1 << (CypherParser.UNWIND - 32)) | (1 << (CypherParser.AS - 32)) | (1 << (CypherParser.MERGE - 32)) | (1 << (CypherParser.SET - 32)) | (1 << (CypherParser.DETACH - 32)) | (1 << (CypherParser.DELETE - 32)) | (1 << (CypherParser.REMOVE - 32)) | (1 << (CypherParser.WITH - 32)) | (1 << (CypherParser.RETURN - 32)) | (1 << (CypherParser.DISTINCT - 32)) | (1 << (CypherParser.ORDER - 32)) | (1 << (CypherParser.BY - 32)) | (1 << (CypherParser.SKIP_KEYWORD - 32)) | (1 << (CypherParser.LIMIT - 32)) | (1 << (CypherParser.ASCENDING - 32)) | (1 << (CypherParser.DESCENDING - 32)) | (1 << (CypherParser.WHERE - 32)) | (1 << (CypherParser.OR - 32)) | (1 << (CypherParser.XOR - 32)) | (1 << (CypherParser.AND - 32)) | (1 << (CypherParser.NOT - 32)) | (1 << (CypherParser.IN - 32)) | (1 << (CypherParser.STARTS - 32)) | (1 << (CypherParser.ENDS - 32)) | (1 << (CypherParser.CONTAINS - 32)) | (1 << (CypherParser.IS - 32)) | (1 << (CypherParser.NULL - 32)) | (1 << (CypherParser.TRUE - 32)) | (1 << (CypherParser.FALSE - 32)))) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & ((1 << (CypherParser.UNION - 68)) | (1 << (CypherParser.ALL - 68)) | (1 << (CypherParser.CONSTRAINT - 68)) | (1 << (CypherParser.UNIQUE - 68)) | (1 << (CypherParser.EXISTS - 68)) | (1 << (CypherParser.CASE - 68)) | (1 << (CypherParser.WHEN - 68)) | (1 << (CypherParser.THEN - 68)) | (1 << (CypherParser.ELSE - 68)) | (1 << (CypherParser.END - 68)) | (1 << (CypherParser.MANDATORY - 68)) | (1 << (CypherParser.SCALAR - 68)) | (1 << (CypherParser.OF - 68)) | (1 << (CypherParser.ADD - 68)) | (1 << (CypherParser.DO - 68)) | (1 << (CypherParser.FOR - 68)) | (1 << (CypherParser.REQUIRE - 68)) | (1 << (CypherParser.UnescapedSymbolicName - 68)) | (1 << (CypherParser.EscapedSymbolicName - 68)) | (1 << (CypherParser.HexLetter - 68)))) !== 0)) {
				{
				this.state = 898;
				this.oC_PropertyKeyName();
				this.state = 899;
				this.match(CypherParser.T__11);
				this.state = 900;
				this.oC_Expression();
				this.state = 908;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === CypherParser.T__2) {
					{
					{
					this.state = 901;
					this.match(CypherParser.T__2);
					this.state = 902;
					this.oC_PropertyKeyName();
					this.state = 903;
					this.match(CypherParser.T__11);
					this.state = 904;
					this.oC_Expression();
					}
					}
					this.state = 910;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 913;
			this.match(CypherParser.T__10);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public oC_ReservedWord(): OC_ReservedWordContext {
		let _localctx: OC_ReservedWordContext = new OC_ReservedWordContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, CypherParser.RULE_oC_ReservedWord);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 915;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (CypherParser.CREATE - 27)) | (1 << (CypherParser.DROP - 27)) | (1 << (CypherParser.ON - 27)) | (1 << (CypherParser.OPTIONAL - 27)) | (1 << (CypherParser.MATCH - 27)) | (1 << (CypherParser.UNWIND - 27)) | (1 << (CypherParser.AS - 27)) | (1 << (CypherParser.MERGE - 27)) | (1 << (CypherParser.SET - 27)) | (1 << (CypherParser.DETACH - 27)) | (1 << (CypherParser.DELETE - 27)) | (1 << (CypherParser.REMOVE - 27)) | (1 << (CypherParser.WITH - 27)) | (1 << (CypherParser.RETURN - 27)) | (1 << (CypherParser.DISTINCT - 27)) | (1 << (CypherParser.ORDER - 27)) | (1 << (CypherParser.BY - 27)) | (1 << (CypherParser.SKIP_KEYWORD - 27)) | (1 << (CypherParser.LIMIT - 27)) | (1 << (CypherParser.ASCENDING - 27)) | (1 << (CypherParser.DESCENDING - 27)) | (1 << (CypherParser.WHERE - 27)) | (1 << (CypherParser.OR - 27)) | (1 << (CypherParser.XOR - 27)) | (1 << (CypherParser.AND - 27)) | (1 << (CypherParser.NOT - 27)) | (1 << (CypherParser.IN - 27)) | (1 << (CypherParser.STARTS - 27)) | (1 << (CypherParser.ENDS - 27)) | (1 << (CypherParser.CONTAINS - 27)) | (1 << (CypherParser.IS - 27)))) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (CypherParser.NULL - 59)) | (1 << (CypherParser.TRUE - 59)) | (1 << (CypherParser.FALSE - 59)) | (1 << (CypherParser.UNION - 59)) | (1 << (CypherParser.ALL - 59)) | (1 << (CypherParser.CONSTRAINT - 59)) | (1 << (CypherParser.UNIQUE - 59)) | (1 << (CypherParser.EXISTS - 59)) | (1 << (CypherParser.CASE - 59)) | (1 << (CypherParser.WHEN - 59)) | (1 << (CypherParser.THEN - 59)) | (1 << (CypherParser.ELSE - 59)) | (1 << (CypherParser.END - 59)) | (1 << (CypherParser.MANDATORY - 59)) | (1 << (CypherParser.SCALAR - 59)) | (1 << (CypherParser.OF - 59)) | (1 << (CypherParser.ADD - 59)) | (1 << (CypherParser.DO - 59)) | (1 << (CypherParser.FOR - 59)) | (1 << (CypherParser.REQUIRE - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03e\u0398\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x03\x02\x03\x02\x05\x02\xC9\n\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x05\x03\xCF\n\x03\x03\x04\x03\x04\x05\x04\xD3\n\x04" +
		"\x03\x05\x03\x05\x03\x05\x05\x05\xD8\n\x05\x03\x05\x07\x05\xDB\n\x05\f" +
		"\x05\x0E\x05\xDE\v\x05\x03\x06\x03\x06\x05\x06\xE2\n\x06\x03\x07\x07\x07" +
		"\xE5\n\x07\f\x07\x0E\x07\xE8\v\x07\x03\x07\x07\x07\xEB\n\x07\f\x07\x0E" +
		"\x07\xEE\v\x07\x03\x07\x03\x07\x03\b\x07\b\xF3\n\b\f\b\x0E\b\xF6\v\b\x03" +
		"\b\x07\b\xF9\n\b\f\b\x0E\b\xFC\v\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t" +
		"\x05\t\u0104\n\t\x03\n\x03\n\x03\n\x03\n\x05\n\u010A\n\n\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u0114\n\v\f\v\x0E\v\u0117\v\v\x03" +
		"\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u0123\n" +
		"\f\f\f\x0E\f\u0126\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x05" +
		"\x0F\u0143\n\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0149\n\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x07\x11\u0153" +
		"\n\x11\f\x11\x0E\x11\u0156\v\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x05\x12\u015E\n\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x07\x14\u0167\n\x14\f\x14\x0E\x14\u016A\v\x14\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u017B\n\x15\x03\x16\x05\x16" +
		"\u017E\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x07\x16\u0184\n\x16\f\x16" +
		"\x0E\x16\u0187\v\x16\x03\x17\x03\x17\x03\x17\x03\x17\x07\x17\u018D\n\x17" +
		"\f\x17\x0E\x17\u0190\v\x17\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u0196" +
		"\n\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u019C\n\x19\x03\x1A\x03" +
		"\x1A\x03\x1A\x03\x1A\x05\x1A\u01A2\n\x1A\x03\x1B\x03\x1B\x03\x1B\x07\x1B" +
		"\u01A7\n\x1B\f\x1B\x0E\x1B\u01AA\v\x1B\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u01AF\n\x1C\x03\x1D\x03\x1D\x05\x1D\u01B3\n\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x05\x1D\u01B8\n\x1D\x03\x1E\x03\x1E\x05\x1E\u01BC\n\x1E\x03\x1E\x03\x1E" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07\x1F\u01C6\n\x1F\f" +
		"\x1F\x0E\x1F\u01C9\v\x1F\x05\x1F\u01CB\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01CF" +
		"\n\x1F\x03\x1F\x03\x1F\x05\x1F\u01D3\n\x1F\x03 \x03 \x03 \x03 \x07 \u01D9" +
		"\n \f \x0E \u01DC\v \x05 \u01DE\n \x03!\x03!\x03!\x05!\u01E3\n!\x03\"" +
		"\x03\"\x03\"\x03\"\x03\"\x07\"\u01EA\n\"\f\"\x0E\"\u01ED\v\"\x03#\x03" +
		"#\x05#\u01F1\n#\x03$\x03$\x03$\x07$\u01F6\n$\f$\x0E$\u01F9\v$\x03%\x03" +
		"%\x03%\x05%\u01FE\n%\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'" +
		"\x03\'\x03\'\x03\'\x06\'\u020C\n\'\r\'\x0E\'\u020D\x05\'\u0210\n\'\x03" +
		"(\x05(\u0213\n(\x03(\x05(\u0216\n(\x03(\x05(\u0219\n(\x03)\x03)\x03)\x03" +
		"*\x05*\u021F\n*\x03*\x03*\x05*\u0223\n*\x03*\x03*\x05*\u0227\n*\x03+\x03" +
		"+\x05+\u022B\n+\x03+\x05+\u022E\n+\x03+\x05+\u0231\n+\x03+\x05+\u0234" +
		"\n+\x03+\x03+\x03,\x03,\x03,\x03,\x07,\u023C\n,\f,\x0E,\u023F\v,\x03," +
		"\x03,\x03,\x03,\x05,\u0245\n,\x03-\x03-\x03-\x03-\x03-\x07-\u024C\n-\f" +
		"-\x0E-\u024F\v-\x03.\x06.\u0252\n.\r.\x0E.\u0253\x03/\x03/\x03/\x030\x03" +
		"0\x050\u025B\n0\x030\x030\x050\u025F\n0\x050\u0261\n0\x031\x031\x032\x03" +
		"2\x033\x033\x034\x034\x034\x074\u026C\n4\f4\x0E4\u026F\v4\x035\x035\x03" +
		"5\x075\u0274\n5\f5\x0E5\u0277\v5\x036\x076\u027A\n6\f6\x0E6\u027D\v6\x03" +
		"6\x036\x037\x037\x077\u0283\n7\f7\x0E7\u0286\v7\x038\x038\x038\x078\u028B" +
		"\n8\f8\x0E8\u028E\v8\x039\x039\x039\x079\u0293\n9\f9\x0E9\u0296\v9\x03" +
		":\x03:\x03:\x07:\u029B\n:\f:\x0E:\u029E\v:\x03;\x07;\u02A1\n;\f;\x0E;" +
		"\u02A4\v;\x03;\x03;\x03<\x03<\x03<\x03<\x07<\u02AC\n<\f<\x0E<\u02AF\v" +
		"<\x03=\x03=\x03=\x03=\x03=\x03=\x05=\u02B7\n=\x03>\x03>\x03>\x03>\x03" +
		">\x05>\u02BE\n>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x05?\u02C7\n?\x03@" +
		"\x03@\x03@\x07@\u02CC\n@\f@\x0E@\u02CF\v@\x03A\x03A\x03A\x03A\x03A\x03" +
		"A\x03A\x03A\x03A\x03A\x03A\x05A\u02DC\nA\x03B\x03B\x03B\x03B\x03B\x03" +
		"B\x05B\u02E4\nB\x03C\x03C\x03D\x03D\x03D\x03D\x07D\u02EC\nD\fD\x0ED\u02EF" +
		"\vD\x05D\u02F1\nD\x03D\x03D\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03G\x03" +
		"G\x03G\x03H\x03H\x03I\x03I\x03J\x03J\x03K\x03K\x03L\x03L\x05L\u0309\n" +
		"L\x03M\x03M\x03N\x03N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03Q\x03Q\x03Q\x05" +
		"Q\u0318\nQ\x03R\x03R\x03R\x03R\x03R\x07R\u031F\nR\fR\x0ER\u0322\vR\x05" +
		"R\u0324\nR\x03R\x03R\x03S\x03S\x03S\x03T\x03T\x03T\x07T\u032E\nT\fT\x0E" +
		"T\u0331\vT\x03U\x03U\x03V\x03V\x03V\x03V\x03W\x03W\x03W\x03X\x03X\x03" +
		"X\x03Y\x03Y\x03Y\x05Y\u0342\nY\x03Y\x03Y\x03Y\x07Y\u0347\nY\fY\x0EY\u034A" +
		"\vY\x05Y\u034C\nY\x03Y\x03Y\x03Z\x03Z\x03Z\x03[\x03[\x03\\\x03\\\x03\\" +
		"\x03\\\x05\\\u0359\n\\\x03\\\x05\\\u035C\n\\\x03\\\x03\\\x03]\x03]\x03" +
		"]\x03]\x05]\u0364\n]\x03]\x03]\x03^\x03^\x03^\x05^\u036B\n^\x03_\x03_" +
		"\x03_\x03_\x03`\x03`\x03`\x03`\x05`\u0375\n`\x03`\x03`\x03`\x05`\u037A" +
		"\n`\x03`\x03`\x03`\x03`\x03a\x03a\x05a\u0382\na\x03b\x03b\x03b\x03b\x03" +
		"b\x03b\x03b\x03b\x03b\x07b\u038D\nb\fb\x0Eb\u0390\vb\x05b\u0392\nb\x03" +
		"b\x03b\x03c\x03c\x03c\x02\x02\x02d\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02" +
		"\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02" +
		"8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02" +
		"T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02" +
		"p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02" +
		"\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02" +
		"\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02" +
		"\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02" +
		"\xBE\x02\xC0\x02\xC2\x02\xC4\x02\x02\v\x03\x0212\x03\x02\x11\x12\x04\x02" +
		"\t\t\x13\x14\x03\x02>?\x03\x02]_\x03\x02`a\x04\x02Z[bb\x04\x02\x07\x07" +
		"\x17\x1B\x07\x02\x1D\x1E ?FHJKNY\x02\u03AD\x02\xC6\x03\x02\x02\x02\x04" +
		"\xCE\x03\x02\x02\x02\x06\xD2\x03\x02\x02\x02\b\xD4\x03\x02\x02\x02\n\xE1" +
		"\x03\x02\x02\x02\f\xE6\x03\x02\x02\x02\x0E\xF4\x03\x02\x02\x02\x10\u0103" +
		"\x03\x02\x02\x02\x12\u0109\x03\x02\x02\x02\x14\u010B\x03\x02\x02\x02\x16" +
		"\u011A\x03\x02\x02\x02\x18\u0129\x03\x02\x02\x02\x1A\u0135\x03\x02\x02" +
		"\x02\x1C\u0142\x03\x02\x02\x02\x1E\u014A\x03\x02\x02\x02 \u014F\x03\x02" +
		"\x02\x02\"\u015D\x03\x02\x02\x02$\u015F\x03\x02\x02\x02&\u0162\x03\x02" +
		"\x02\x02(\u017A\x03\x02\x02\x02*\u017D\x03\x02\x02\x02,\u0188\x03\x02" +
		"\x02\x02.\u0195\x03\x02\x02\x020\u0197\x03\x02\x02\x022\u019D\x03\x02" +
		"\x02\x024\u01A3\x03\x02\x02\x026\u01AB\x03\x02\x02\x028\u01B0\x03\x02" +
		"\x02\x02:\u01B9\x03\x02\x02\x02<\u01BF\x03\x02\x02\x02>\u01DD\x03\x02" +
		"\x02\x02@\u01DF\x03\x02\x02\x02B\u01E4\x03\x02\x02\x02D\u01EE\x03\x02" +
		"\x02\x02F\u01F2\x03\x02\x02\x02H\u01FD\x03\x02\x02\x02J\u0201\x03\x02" +
		"\x02\x02L\u020F\x03\x02\x02\x02N\u0212\x03\x02\x02\x02P\u021A\x03\x02" +
		"\x02\x02R\u021E\x03\x02\x02\x02T\u0228\x03\x02\x02\x02V\u0244\x03\x02" +
		"\x02\x02X\u0246\x03\x02\x02\x02Z\u0251\x03\x02\x02\x02\\\u0255\x03\x02" +
		"\x02\x02^\u0258\x03\x02\x02\x02`\u0262\x03\x02\x02\x02b\u0264\x03\x02" +
		"\x02\x02d\u0266\x03\x02\x02\x02f\u0268\x03\x02\x02\x02h\u0270\x03\x02" +
		"\x02\x02j\u027B\x03\x02\x02\x02l\u0280\x03\x02\x02\x02n\u0287\x03\x02" +
		"\x02\x02p\u028F\x03\x02\x02\x02r\u0297\x03\x02\x02\x02t\u02A2\x03\x02" +
		"\x02\x02v\u02A7\x03\x02\x02\x02x\u02B6\x03\x02\x02\x02z\u02BD\x03\x02" +
		"\x02\x02|\u02C6\x03\x02\x02\x02~\u02C8\x03\x02\x02\x02\x80\u02DB\x03\x02" +
		"\x02\x02\x82\u02E3\x03\x02\x02\x02\x84\u02E5\x03\x02\x02\x02\x86\u02E7" +
		"\x03\x02\x02\x02\x88\u02F4\x03\x02\x02\x02\x8A\u02F8\x03\x02\x02\x02\x8C" +
		"\u02FB\x03\x02\x02\x02\x8E\u02FE\x03\x02\x02\x02\x90\u0300\x03\x02\x02" +
		"\x02\x92\u0302\x03\x02\x02\x02\x94\u0304\x03\x02\x02\x02\x96\u0308\x03" +
		"\x02\x02\x02\x98\u030A\x03\x02\x02\x02\x9A\u030C\x03\x02\x02\x02\x9C\u030E" +
		"\x03\x02\x02\x02\x9E\u0310\x03\x02\x02\x02\xA0\u0317\x03\x02\x02\x02\xA2" +
		"\u0319\x03\x02\x02\x02\xA4\u0327\x03\x02\x02\x02\xA6\u032F\x03\x02\x02" +
		"\x02\xA8\u0332\x03\x02\x02\x02\xAA\u0334\x03\x02\x02\x02\xAC\u0338\x03" +
		"\x02\x02\x02\xAE\u033B\x03\x02\x02\x02\xB0\u033E\x03\x02\x02\x02\xB2\u034F" +
		"\x03\x02\x02\x02\xB4\u0352\x03\x02\x02\x02\xB6\u0354\x03\x02\x02\x02\xB8" +
		"\u035F\x03\x02\x02\x02\xBA\u0367\x03\x02\x02\x02\xBC\u036C\x03\x02\x02" +
		"\x02\xBE\u0370\x03\x02\x02\x02\xC0\u0381\x03\x02\x02\x02\xC2\u0383\x03" +
		"\x02\x02\x02\xC4\u0395\x03\x02\x02\x02\xC6\xC8\x05\x04\x03\x02\xC7\xC9" +
		"\x07\x03\x02\x02\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA" +
		"\x03\x02\x02\x02\xCA\xCB\x07\x02\x02\x03\xCB\x03\x03\x02\x02\x02\xCC\xCF" +
		"\x05\x06\x04\x02\xCD\xCF\x05\x12\n\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCD" +
		"\x03\x02\x02\x02\xCF\x05\x03\x02\x02\x02\xD0\xD3\x05\b\x05\x02\xD1\xD3" +
		"\x052\x1A\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD1\x03\x02\x02\x02\xD3\x07" +
		"\x03\x02\x02\x02\xD4\xDC\x05\n\x06\x02\xD5\xD7\x07F\x02\x02\xD6\xD8\x07" +
		"G\x02\x02\xD7\xD6\x03\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xDB\x05\n\x06\x02\xDA\xD5\x03\x02\x02\x02\xDB\xDE\x03" +
		"\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\t\x03" +
		"\x02\x02\x02\xDE\xDC\x03\x02\x02\x02\xDF\xE2\x05\f\x07\x02\xE0\xE2\x05" +
		"\x0E\b\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE0\x03\x02\x02\x02\xE2\v\x03\x02" +
		"\x02\x02\xE3\xE5\x05\x10\t\x02\xE4\xE3\x03\x02\x02\x02\xE5\xE8\x03\x02" +
		"\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7\xEC\x03\x02" +
		"\x02\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEB\x05\xA0Q\x02\xEA\xE9\x03\x02" +
		"\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC\xED\x03\x02" +
		"\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF0\x05:" +
		"\x1E\x02\xF0\r\x03\x02\x02\x02\xF1\xF3\x05\x10\t\x02\xF2\xF1\x03\x02\x02" +
		"\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02" +
		"\x02\xF5\xFA\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x05\xA0Q" +
		"\x02\xF8\xF7\x03\x02\x02\x02\xF9\xFC\x03\x02\x02\x02\xFA\xF8\x03\x02\x02" +
		"\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFD\x03\x02\x02\x02\xFC\xFA\x03\x02\x02" +
		"\x02\xFD\xFE\x058\x1D\x02\xFE\xFF\x05\f\x07\x02\xFF\x0F\x03\x02\x02\x02" +
		"\u0100\u0104\x05\x1C\x0F\x02\u0101\u0104\x05\x1E\x10\x02\u0102\u0104\x05" +
		"0\x19\x02\u0103\u0100\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0102\x03\x02\x02\x02\u0104\x11\x03\x02\x02\x02\u0105\u010A\x05\x14\v" +
		"\x02\u0106\u010A\x05\x16\f\x02\u0107\u010A\x05\x18\r\x02\u0108\u010A\x05" +
		"\x1A\x0E\x02\u0109\u0105\x03\x02\x02\x02\u0109\u0106\x03\x02\x02\x02\u0109" +
		"\u0107\x03\x02\x02\x02\u0109\u0108\x03\x02\x02\x02\u010A\x13\x03\x02\x02" +
		"\x02\u010B\u010C\x07\x1D\x02\x02\u010C\u010D\x07\x1F\x02\x02\u010D\u010E" +
		"\x07 \x02\x02\u010E\u010F\x05\\/\x02\u010F\u0110\x07\x04\x02\x02\u0110" +
		"\u0115\x05\x8AF\x02\u0111\u0112\x07\x05\x02\x02\u0112\u0114\x05\x8AF\x02" +
		"\u0113\u0111\x03\x02\x02\x02\u0114\u0117\x03\x02\x02\x02\u0115\u0113\x03" +
		"\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0118\x03\x02\x02\x02\u0117" +
		"\u0115\x03\x02\x02\x02\u0118\u0119\x07\x06\x02\x02\u0119\x15\x03\x02\x02" +
		"\x02\u011A\u011B\x07\x1E\x02\x02\u011B\u011C\x07\x1F\x02\x02\u011C\u011D" +
		"\x07 \x02\x02\u011D\u011E\x05\\/\x02\u011E\u011F\x07\x04\x02\x02\u011F" +
		"\u0124\x05\x8AF\x02\u0120\u0121\x07\x05\x02\x02\u0121\u0123\x05\x8AF\x02" +
		"\u0122\u0120\x03\x02\x02\x02\u0123\u0126\x03\x02\x02\x02\u0124\u0122\x03" +
		"\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0127\x03\x02\x02\x02\u0126" +
		"\u0124\x03\x02\x02\x02\u0127\u0128\x07\x06\x02\x02\u0128\x17\x03\x02\x02" +
		"\x02\u0129\u012A\x07\x1D\x02\x02\u012A\u012B\x07H\x02\x02\u012B\u012C" +
		"\x07 \x02\x02\u012C\u012D\x07\x04\x02\x02\u012D\u012E\x05\x8EH\x02\u012E" +
		"\u012F\x05\\/\x02\u012F\u0130\x07\x06\x02\x02\u0130\u0131\x07I\x02\x02" +
		"\u0131\u0132\x05\x8AF\x02\u0132\u0133\x07<\x02\x02\u0133\u0134\x07J\x02" +
		"\x02\u0134\x19\x03\x02\x02\x02\u0135\u0136\x07\x1E\x02\x02\u0136\u0137" +
		"\x07H\x02\x02\u0137\u0138\x07 \x02\x02\u0138\u0139\x07\x04\x02\x02\u0139" +
		"\u013A\x05\x8EH\x02\u013A\u013B\x05\\/\x02\u013B\u013C\x07\x06\x02\x02" +
		"\u013C\u013D\x07I\x02\x02\u013D\u013E\x05\x8AF\x02\u013E\u013F\x07<\x02" +
		"\x02\u013F\u0140\x07J\x02\x02\u0140\x1B\x03\x02\x02\x02\u0141\u0143\x07" +
		"!\x02\x02\u0142\u0141\x03\x02\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143" +
		"\u0144\x03\x02\x02\x02\u0144\u0145\x07\"\x02\x02\u0145\u0148\x05F$\x02" +
		"\u0146\u0147\x073\x02\x02\u0147\u0149\x05d3\x02\u0148\u0146\x03\x02\x02" +
		"\x02\u0148\u0149\x03\x02\x02\x02\u0149\x1D\x03\x02\x02\x02\u014A\u014B" +
		"\x07#\x02\x02\u014B\u014C\x05d3\x02\u014C\u014D\x07$\x02\x02\u014D\u014E" +
		"\x05\x8EH\x02\u014E\x1F\x03\x02\x02\x02\u014F\u0150\x07%\x02\x02\u0150" +
		"\u0154\x05H%\x02\u0151\u0153\x05\"\x12\x02\u0152\u0151\x03\x02\x02\x02" +
		"\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0154\u0155\x03" +
		"\x02\x02\x02\u0155!\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157" +
		"\u0158\x07 \x02\x02\u0158\u0159\x07\"\x02\x02\u0159\u015E\x05&\x14\x02" +
		"\u015A\u015B\x07 \x02\x02\u015B\u015C\x07\x1D\x02\x02\u015C\u015E\x05" +
		"&\x14\x02\u015D\u0157\x03\x02\x02\x02\u015D\u015A\x03\x02\x02\x02\u015E" +
		"#\x03\x02\x02\x02\u015F\u0160\x07\x1D\x02\x02\u0160\u0161\x05F$\x02\u0161" +
		"%\x03\x02\x02\x02\u0162\u0163\x07&\x02\x02\u0163\u0168\x05(\x15\x02\u0164" +
		"\u0165\x07\x05\x02\x02\u0165\u0167\x05(\x15\x02\u0166\u0164\x03\x02\x02" +
		"\x02\u0167\u016A\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169" +
		"\x03\x02\x02\x02\u0169\'\x03\x02\x02\x02\u016A\u0168\x03\x02\x02\x02\u016B" +
		"\u016C\x05\x8AF\x02\u016C\u016D\x07\x07\x02\x02\u016D\u016E\x05d3\x02" +
		"\u016E\u017B\x03\x02\x02\x02\u016F\u0170\x05\x8EH\x02\u0170\u0171\x07" +
		"\x07\x02\x02\u0171\u0172\x05d3\x02\u0172\u017B\x03\x02\x02\x02\u0173\u0174" +
		"\x05\x8EH\x02\u0174\u0175\x07\b\x02\x02\u0175\u0176\x05d3\x02\u0176\u017B" +
		"\x03\x02\x02\x02\u0177\u0178\x05\x8EH\x02\u0178\u0179\x05Z.\x02\u0179" +
		"\u017B\x03\x02\x02\x02\u017A\u016B\x03\x02\x02\x02\u017A\u016F\x03\x02" +
		"\x02\x02\u017A\u0173\x03\x02\x02\x02\u017A\u0177\x03\x02\x02\x02\u017B" +
		")\x03\x02\x02\x02\u017C\u017E\x07\'\x02\x02\u017D\u017C\x03\x02\x02\x02" +
		"\u017D\u017E\x03\x02\x02\x02\u017E\u017F\x03\x02\x02\x02\u017F\u0180\x07" +
		"(\x02\x02\u0180\u0185\x05d3\x02\u0181\u0182\x07\x05\x02\x02\u0182\u0184" +
		"\x05d3\x02\u0183\u0181\x03\x02\x02\x02\u0184\u0187\x03\x02\x02\x02\u0185" +
		"\u0183\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186+\x03\x02\x02" +
		"\x02\u0187\u0185\x03\x02\x02\x02\u0188\u0189\x07)\x02\x02\u0189\u018E" +
		"\x05.\x18\x02\u018A\u018B\x07\x05\x02\x02\u018B\u018D\x05.\x18\x02\u018C" +
		"\u018A\x03\x02\x02\x02\u018D\u0190\x03\x02\x02\x02\u018E\u018C\x03\x02" +
		"\x02\x02\u018E\u018F\x03\x02\x02\x02\u018F-\x03\x02\x02\x02\u0190\u018E" +
		"\x03\x02\x02\x02\u0191\u0192\x05\x8EH\x02\u0192\u0193\x05Z.\x02\u0193" +
		"\u0196\x03\x02\x02\x02\u0194\u0196\x05\x8AF\x02\u0195\u0191\x03\x02\x02" +
		"\x02\u0195\u0194\x03\x02\x02\x02\u0196/\x03\x02\x02\x02\u0197\u0198\x07" +
		"L\x02\x02\u0198\u019B\x05\xA2R\x02\u0199\u019A\x07M\x02\x02\u019A\u019C" +
		"\x054\x1B\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02" +
		"\u019C1\x03\x02\x02\x02\u019D\u019E\x07L\x02\x02\u019E\u01A1\x05\xA2R" +
		"\x02\u019F\u01A0\x07M\x02\x02\u01A0\u01A2\x054\x1B\x02\u01A1\u019F\x03" +
		"\x02\x02\x02\u01A1\u01A2\x03\x02\x02\x02\u01A23\x03\x02\x02\x02\u01A3" +
		"\u01A8\x056\x1C\x02\u01A4\u01A5\x07\x05\x02\x02\u01A5\u01A7\x056\x1C\x02" +
		"\u01A6\u01A4\x03\x02\x02\x02\u01A7\u01AA\x03\x02\x02\x02\u01A8\u01A6\x03" +
		"\x02\x02\x02\u01A8\u01A9\x03\x02\x02\x02\u01A95\x03\x02\x02\x02\u01AA" +
		"\u01A8\x03\x02\x02\x02\u01AB\u01AE\x05\xA8U\x02\u01AC\u01AD\x07$\x02\x02" +
		"\u01AD\u01AF\x05\x8EH\x02\u01AE\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03" +
		"\x02\x02\x02\u01AF7\x03\x02\x02\x02\u01B0\u01B2\x07*\x02\x02\u01B1\u01B3" +
		"\x07,\x02\x02\u01B2\u01B1\x03\x02\x02\x02\u01B2\u01B3\x03\x02\x02\x02" +
		"\u01B3\u01B4\x03\x02\x02\x02\u01B4\u01B7\x05<\x1F\x02\u01B5\u01B6\x07" +
		"3\x02\x02\u01B6\u01B8\x05d3\x02\u01B7\u01B5\x03\x02\x02\x02\u01B7\u01B8" +
		"\x03\x02\x02\x02\u01B89\x03\x02\x02\x02\u01B9\u01BB\x07+\x02\x02\u01BA" +
		"\u01BC\x07,\x02\x02\u01BB\u01BA\x03\x02\x02\x02\u01BB\u01BC\x03\x02\x02" +
		"\x02\u01BC\u01BD\x03\x02\x02\x02\u01BD\u01BE\x05<\x1F\x02\u01BE;\x03\x02" +
		"\x02\x02\u01BF\u01CA\x05> \x02\u01C0\u01C1\x07-\x02\x02\u01C1\u01C2\x07" +
		".\x02\x02\u01C2\u01C7\x05D#\x02\u01C3\u01C4\x07\x05\x02\x02\u01C4\u01C6" +
		"\x05D#\x02\u01C5\u01C3\x03\x02\x02\x02\u01C6\u01C9\x03\x02\x02\x02\u01C7" +
		"\u01C5\x03\x02\x02\x02\u01C7\u01C8\x03\x02\x02\x02\u01C8\u01CB\x03\x02" +
		"\x02\x02\u01C9\u01C7\x03\x02\x02\x02\u01CA\u01C0\x03\x02\x02\x02\u01CA" +
		"\u01CB\x03\x02\x02\x02\u01CB\u01CE\x03\x02\x02\x02\u01CC\u01CD\x07/\x02" +
		"\x02\u01CD\u01CF\x05d3\x02\u01CE\u01CC\x03\x02\x02\x02\u01CE\u01CF\x03" +
		"\x02\x02\x02\u01CF\u01D2\x03\x02\x02\x02\u01D0\u01D1\x070\x02\x02\u01D1" +
		"\u01D3\x05d3\x02\u01D2\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02" +
		"\u01D3=\x03\x02\x02\x02\u01D4\u01DE\x07\t\x02\x02\u01D5\u01DA\x05@!\x02" +
		"\u01D6\u01D7\x07\x05\x02\x02\u01D7\u01D9\x05@!\x02\u01D8\u01D6\x03\x02" +
		"\x02\x02\u01D9\u01DC\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA" +
		"\u01DB\x03\x02\x02\x02\u01DB\u01DE\x03\x02\x02\x02\u01DC\u01DA\x03\x02" +
		"\x02\x02\u01DD\u01D4\x03\x02\x02\x02\u01DD\u01D5\x03\x02\x02\x02\u01DE" +
		"?\x03\x02\x02\x02\u01DF\u01E2\x05d3\x02\u01E0\u01E1\x07$\x02\x02\u01E1" +
		"\u01E3\x05\x8EH\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02" +
		"\x02\u01E3A\x03\x02\x02\x02\u01E4\u01E5\x07-\x02\x02\u01E5\u01E6\x07." +
		"\x02\x02\u01E6\u01EB\x05D#\x02\u01E7\u01E8\x07\x05\x02\x02\u01E8\u01EA" +
		"\x05D#\x02\u01E9\u01E7\x03\x02\x02\x02\u01EA\u01ED\x03\x02\x02\x02\u01EB" +
		"\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02\x02\x02\u01ECC\x03\x02\x02" +
		"\x02\u01ED\u01EB\x03\x02\x02\x02\u01EE\u01F0\x05d3\x02\u01EF\u01F1\t\x02" +
		"\x02\x02\u01F0\u01EF\x03\x02\x02\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1" +
		"E\x03\x02\x02\x02\u01F2\u01F7\x05H%\x02\u01F3\u01F4\x07\x05\x02\x02\u01F4" +
		"\u01F6\x05H%\x02\u01F5\u01F3\x03\x02\x02\x02\u01F6\u01F9\x03\x02\x02\x02" +
		"\u01F7\u01F5\x03\x02\x02\x02\u01F7\u01F8\x03\x02\x02\x02\u01F8G\x03\x02" +
		"\x02\x02\u01F9\u01F7\x03\x02\x02\x02\u01FA\u01FB\x05\x8EH\x02\u01FB\u01FC" +
		"\x07\x07\x02\x02\u01FC\u01FE\x03\x02\x02\x02\u01FD\u01FA\x03\x02\x02\x02" +
		"\u01FD\u01FE\x03\x02\x02\x02\u01FE\u01FF\x03\x02\x02\x02\u01FF\u0200\x05" +
		"J&\x02\u0200I\x03\x02\x02\x02\u0201\u0202\x05L\'\x02\u0202K";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u0203\u0204\x07\x04\x02\x02\u0204\u0205\x05N(\x02\u0205" +
		"\u0206\x07\x06\x02\x02\u0206\u0210\x03\x02\x02\x02\u0207\u0208\x07\x04" +
		"\x02\x02\u0208\u0209\x05N(\x02\u0209\u020B\x07\x06\x02\x02\u020A\u020C" +
		"\x05P)\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D" +
		"\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03\x02" +
		"\x02\x02\u020F\u0203\x03\x02\x02\x02\u020F\u0207\x03\x02\x02\x02\u0210" +
		"M\x03\x02\x02\x02\u0211\u0213\x05\x8EH\x02\u0212\u0211\x03\x02\x02\x02" +
		"\u0212\u0213\x03\x02\x02\x02\u0213\u0215\x03\x02\x02\x02\u0214\u0216\x05" +
		"Z.\x02\u0215\u0214\x03\x02\x02\x02\u0215\u0216\x03\x02\x02\x02\u0216\u0218" +
		"\x03\x02\x02\x02\u0217\u0219\x05V,\x02\u0218\u0217\x03\x02\x02\x02\u0218" +
		"\u0219\x03\x02\x02\x02\u0219O\x03\x02\x02\x02\u021A\u021B\x05R*\x02\u021B" +
		"\u021C\x05N(\x02\u021CQ\x03\x02\x02\x02\u021D\u021F\x05\x9AN\x02\u021E" +
		"\u021D\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0220\x03\x02" +
		"\x02\x02\u0220\u0222\x05\x9EP\x02\u0221\u0223\x05T+\x02\u0222\u0221\x03" +
		"\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0224\x03\x02\x02\x02\u0224" +
		"\u0226\x05\x9EP\x02\u0225\u0227\x05\x9CO\x02\u0226\u0225\x03\x02\x02\x02" +
		"\u0226\u0227\x03\x02\x02\x02\u0227S\x03\x02\x02\x02\u0228\u022A\x07\n" +
		"\x02\x02\u0229\u022B\x05\x8EH\x02\u022A\u0229\x03\x02\x02\x02\u022A\u022B" +
		"\x03\x02\x02\x02\u022B\u022D\x03\x02\x02\x02\u022C\u022E\x05X-\x02\u022D" +
		"\u022C\x03\x02\x02\x02\u022D\u022E\x03\x02\x02\x02\u022E\u0230\x03\x02" +
		"\x02\x02\u022F\u0231\x05^0\x02\u0230\u022F\x03\x02\x02\x02\u0230\u0231" +
		"\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0234\x05V,\x02\u0233" +
		"\u0232\x03\x02\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0235\x03\x02" +
		"\x02\x02\u0235\u0236\x07\v\x02\x02\u0236U\x03\x02\x02\x02\u0237\u0238" +
		"\x07\f\x02\x02\u0238\u023D\x05\xAAV\x02\u0239\u023A\x07\x05\x02\x02\u023A" +
		"\u023C\x05\xAAV\x02\u023B\u0239\x03\x02\x02\x02\u023C\u023F\x03\x02\x02" +
		"\x02\u023D\u023B\x03\x02\x02\x02\u023D\u023E\x03\x02\x02\x02\u023E\u0240" +
		"\x03\x02\x02\x02\u023F\u023D\x03\x02\x02\x02\u0240\u0241\x07\r\x02\x02" +
		"\u0241\u0245\x03\x02\x02\x02\u0242\u0243\x07\f\x02\x02\u0243\u0245\x07" +
		"\r\x02\x02\u0244\u0237\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245" +
		"W\x03\x02\x02\x02\u0246\u0247\x07\x0E\x02\x02\u0247\u024D\x05b2\x02\u0248" +
		"\u0249\x07\x0F\x02\x02\u0249\u024A\x07\x0E\x02\x02\u024A\u024C\x05b2\x02" +
		"\u024B\u0248\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D\u024B\x03" +
		"\x02\x02\x02\u024D\u024E\x03\x02\x02\x02\u024EY\x03\x02\x02\x02\u024F" +
		"\u024D\x03\x02\x02\x02\u0250\u0252\x05\\/\x02\u0251\u0250\x03\x02\x02" +
		"\x02\u0252\u0253\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02\u0253\u0254" +
		"\x03\x02\x02\x02\u0254[\x03\x02\x02\x02\u0255\u0256\x07\x0E\x02\x02\u0256" +
		"\u0257\x05`1\x02\u0257]\x03\x02\x02\x02\u0258\u025A\x07\t\x02\x02\u0259" +
		"\u025B\x05\x92J\x02\u025A\u0259\x03\x02\x02\x02\u025A\u025B\x03\x02\x02" +
		"\x02\u025B\u0260\x03\x02\x02\x02\u025C\u025E\x07\x10\x02\x02\u025D\u025F" +
		"\x05\x92J\x02\u025E\u025D\x03\x02\x02\x02\u025E\u025F\x03\x02\x02\x02" +
		"\u025F\u0261\x03\x02\x02\x02\u0260\u025C\x03\x02\x02\x02\u0260\u0261\x03" +
		"\x02\x02\x02\u0261_\x03\x02\x02\x02\u0262\u0263\x05\x96L\x02\u0263a\x03" +
		"\x02\x02\x02\u0264\u0265\x05\x96L\x02\u0265c\x03\x02\x02\x02\u0266\u0267" +
		"\x05f4\x02\u0267e\x03\x02\x02\x02\u0268\u026D\x05h5\x02\u0269\u026A\x07" +
		"4\x02\x02\u026A\u026C\x05h5\x02\u026B\u0269\x03\x02\x02\x02\u026C\u026F" +
		"\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02\x02\x02" +
		"\u026Eg\x03\x02\x02\x02\u026F\u026D\x03\x02\x02\x02\u0270\u0275\x05j6" +
		"\x02\u0271\u0272\x076\x02\x02\u0272\u0274\x05j6\x02\u0273\u0271\x03\x02" +
		"\x02\x02\u0274\u0277\x03\x02\x02\x02\u0275\u0273\x03\x02\x02\x02\u0275" +
		"\u0276\x03\x02\x02\x02\u0276i\x03\x02\x02\x02\u0277\u0275\x03\x02\x02" +
		"\x02\u0278\u027A\x077\x02\x02\u0279\u0278\x03\x02\x02\x02\u027A\u027D" +
		"\x03\x02\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02" +
		"\u027C\u027E\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u027F\x05" +
		"l7\x02\u027Fk\x03\x02\x02\x02\u0280\u0284\x05n8\x02\u0281\u0283\x05\xAC" +
		"W\x02\u0282\u0281\x03\x02\x02\x02\u0283\u0286\x03\x02\x02\x02\u0284\u0282" +
		"\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285m\x03\x02\x02\x02\u0286" +
		"\u0284\x03\x02\x02\x02\u0287\u028C\x05p9\x02\u0288\u0289\t\x03\x02\x02" +
		"\u0289\u028B\x05p9\x02\u028A\u0288\x03\x02\x02\x02\u028B\u028E\x03\x02" +
		"\x02\x02\u028C\u028A\x03\x02\x02\x02\u028C\u028D\x03\x02\x02\x02\u028D" +
		"o\x03\x02\x02\x02\u028E\u028C\x03\x02\x02\x02\u028F\u0294\x05r:\x02\u0290" +
		"\u0291\t\x04\x02\x02\u0291\u0293\x05r:\x02\u0292\u0290\x03\x02\x02\x02" +
		"\u0293\u0296\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0294\u0295\x03" +
		"\x02\x02\x02\u0295q\x03\x02\x02\x02\u0296\u0294\x03\x02\x02\x02\u0297" +
		"\u029C\x05t;\x02\u0298\u0299\x07\x15\x02\x02\u0299\u029B\x05t;\x02\u029A" +
		"\u0298\x03\x02\x02\x02\u029B\u029E\x03\x02\x02\x02\u029C\u029A\x03\x02" +
		"\x02\x02\u029C\u029D\x03\x02\x02\x02\u029Ds\x03\x02\x02\x02\u029E\u029C" +
		"\x03\x02\x02\x02\u029F\u02A1\t\x03\x02\x02\u02A0\u029F\x03\x02\x02\x02" +
		"\u02A1\u02A4\x03\x02\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03" +
		"\x02\x02\x02\u02A3\u02A5\x03\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5" +
		"\u02A6\x05v<\x02\u02A6u\x03\x02\x02\x02\u02A7\u02AD\x05~@\x02\u02A8\u02AC" +
		"\x05z>\x02\u02A9\u02AC\x05x=\x02\u02AA\u02AC\x05|?\x02\u02AB\u02A8\x03" +
		"\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AB\u02AA\x03\x02\x02\x02\u02AC" +
		"\u02AF\x03\x02\x02\x02\u02AD\u02AB\x03\x02\x02\x02\u02AD\u02AE\x03\x02" +
		"\x02\x02\u02AEw\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02B0\u02B1" +
		"\x078\x02\x02\u02B1\u02B7\x05~@\x02\u02B2\u02B3\x07\n\x02\x02\u02B3\u02B4" +
		"\x05d3\x02\u02B4\u02B5\x07\v\x02\x02\u02B5\u02B7\x03\x02\x02\x02\u02B6" +
		"\u02B0\x03\x02\x02\x02\u02B6\u02B2\x03\x02\x02\x02\u02B7y\x03\x02\x02" +
		"\x02\u02B8\u02B9\x079\x02\x02\u02B9\u02BE\x07*\x02\x02\u02BA\u02BB\x07" +
		":\x02\x02\u02BB\u02BE\x07*\x02\x02\u02BC\u02BE\x07;\x02\x02\u02BD\u02B8" +
		"\x03\x02\x02\x02\u02BD\u02BA\x03\x02\x02\x02\u02BD\u02BC\x03\x02\x02\x02" +
		"\u02BE\u02BF\x03\x02\x02\x02\u02BF\u02C0\x05~@\x02\u02C0{\x03\x02\x02" +
		"\x02\u02C1\u02C2\x07<\x02\x02\u02C2\u02C7\x07=\x02\x02\u02C3\u02C4\x07" +
		"<\x02\x02\u02C4\u02C5\x077\x02\x02\u02C5\u02C7\x07=\x02\x02\u02C6\u02C1" +
		"\x03\x02\x02\x02\u02C6\u02C3\x03\x02\x02\x02\u02C7}\x03\x02\x02\x02\u02C8" +
		"\u02CD\x05\x80A\x02\u02C9\u02CC\x05\x8CG\x02\u02CA\u02CC\x05Z.\x02\u02CB" +
		"\u02C9\x03\x02\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CC\u02CF\x03\x02" +
		"\x02\x02\u02CD\u02CB\x03\x02\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE" +
		"\x7F\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02D0\u02DC\x05\x82B" +
		"\x02\u02D1\u02DC\x05\xAEX\x02\u02D2\u02DC\x05\x8EH\x02\u02D3\u02DC\x05" +
		"\xB0Y\x02\u02D4\u02DC\x05\xA2R\x02\u02D5\u02DC\x05\xB4[\x02\u02D6\u02DC" +
		"\x05\xB6\\\x02\u02D7\u02DC\x05\xB8]\x02\u02D8\u02DC\x05\xBE`\x02\u02D9" +
		"\u02DC\x05\x88E\x02\u02DA\u02DC\x05\xB2Z\x02\u02DB\u02D0\x03\x02\x02\x02" +
		"\u02DB\u02D1\x03\x02\x02\x02\u02DB\u02D2\x03\x02\x02\x02\u02DB\u02D3\x03" +
		"\x02\x02\x02\u02DB\u02D4\x03\x02\x02\x02\u02DB\u02D5\x03\x02\x02\x02\u02DB" +
		"\u02D6\x03\x02\x02\x02\u02DB\u02D7\x03\x02\x02\x02\u02DB\u02D8\x03\x02" +
		"\x02\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DA\x03\x02\x02\x02\u02DC" +
		"\x81\x03\x02\x02\x02\u02DD\u02E4\x05\xC0a\x02\u02DE\u02E4\x07\\\x02\x02" +
		"\u02DF\u02E4\x05\x84C\x02\u02E0\u02E4\x07=\x02\x02\u02E1\u02E4\x05\xC2" +
		"b\x02\u02E2\u02E4\x05\x86D\x02\u02E3\u02DD\x03\x02\x02\x02\u02E3\u02DE" +
		"\x03\x02\x02\x02\u02E3\u02DF\x03\x02\x02\x02\u02E3\u02E0\x03\x02\x02\x02" +
		"\u02E3\u02E1\x03\x02\x02\x02\u02E3\u02E2\x03\x02\x02\x02\u02E4\x83\x03" +
		"\x02\x02\x02\u02E5\u02E6\t\x05\x02\x02\u02E6\x85\x03\x02\x02\x02\u02E7" +
		"\u02F0\x07\n\x02\x02\u02E8\u02ED\x05d3\x02\u02E9\u02EA\x07\x05\x02\x02" +
		"\u02EA\u02EC\x05d3\x02\u02EB\u02E9\x03\x02\x02\x02\u02EC\u02EF\x03\x02" +
		"\x02\x02\u02ED\u02EB\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE" +
		"\u02F1\x03\x02\x02\x02\u02EF\u02ED\x03\x02\x02\x02\u02F0\u02E8\x03\x02" +
		"\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2" +
		"\u02F3\x07\v\x02\x02\u02F3\x87\x03\x02\x02\x02\u02F4\u02F5\x07\x04\x02" +
		"\x02\u02F5\u02F6\x05d3\x02\u02F6\u02F7\x07\x06\x02\x02\u02F7\x89\x03\x02" +
		"\x02\x02\u02F8\u02F9\x05\x80A\x02\u02F9\u02FA\x05\x8CG\x02\u02FA\x8B\x03" +
		"\x02\x02\x02\u02FB\u02FC\x07\x16\x02\x02\u02FC\u02FD\x05\x90I\x02\u02FD" +
		"\x8D\x03\x02\x02\x02\u02FE\u02FF\x05\x98M\x02\u02FF\x8F\x03\x02\x02\x02" +
		"\u0300\u0301\x05\x96L\x02\u0301\x91\x03\x02\x02\x02\u0302\u0303\t\x06" +
		"\x02\x02\u0303\x93\x03\x02\x02\x02\u0304\u0305\t\x07\x02\x02\u0305\x95" +
		"\x03\x02\x02\x02\u0306\u0309\x05\x98M\x02\u0307\u0309\x05\xC4c\x02\u0308" +
		"\u0306\x03\x02\x02\x02\u0308\u0307\x03\x02\x02\x02\u0309\x97\x03\x02\x02" +
		"\x02\u030A\u030B\t\b\x02\x02\u030B\x99\x03\x02\x02\x02\u030C\u030D\x07" +
		"\x17\x02\x02\u030D\x9B\x03\x02\x02\x02\u030E\u030F\x07\x18\x02\x02\u030F" +
		"\x9D\x03\x02\x02\x02\u0310\u0311\x07\x12\x02\x02\u0311\x9F\x03\x02\x02" +
		"\x02\u0312\u0318\x05$\x13\x02\u0313\u0318\x05 \x11\x02\u0314\u0318\x05" +
		"*\x16\x02\u0315\u0318\x05&\x14\x02\u0316\u0318\x05,\x17\x02\u0317\u0312" +
		"\x03\x02\x02\x02\u0317\u0313\x03\x02\x02\x02\u0317\u0314\x03\x02\x02\x02" +
		"\u0317\u0315\x03\x02\x02\x02\u0317\u0316\x03\x02\x02\x02\u0318\xA1\x03" +
		"\x02\x02\x02\u0319\u031A\x05\xA4S\x02\u031A\u0323\x07\x04\x02\x02\u031B" +
		"\u0320\x05d3\x02\u031C\u031D\x07\x05\x02\x02\u031D\u031F\x05d3\x02\u031E" +
		"\u031C\x03\x02\x02\x02\u031F\u0322\x03\x02\x02\x02\u0320\u031E\x03\x02" +
		"\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0324\x03\x02\x02\x02\u0322" +
		"\u0320\x03\x02\x02\x02\u0323\u031B\x03\x02\x02\x02\u0323\u0324\x03\x02" +
		"\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x07\x06\x02\x02\u0326" +
		"\xA3\x03\x02\x02\x02\u0327\u0328\x05\xA6T\x02\u0328\u0329\x05\x98M\x02" +
		"\u0329\xA5\x03\x02\x02\x02\u032A\u032B\x05\x98M\x02\u032B\u032C\x07\x16" +
		"\x02\x02\u032C\u032E\x03\x02\x02\x02\u032D\u032A\x03\x02\x02\x02\u032E" +
		"\u0331\x03\x02\x02\x02\u032F\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02" +
		"\x02\x02\u0330\xA7\x03\x02\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0333" +
		"\x05\x98M\x02\u0333\xA9\x03\x02\x02\x02\u0334\u0335\x05\x90I\x02\u0335" +
		"\u0336\x07\x0E\x02\x02\u0336\u0337\x05d3\x02\u0337\xAB\x03\x02\x02\x02" +
		"\u0338\u0339\t\t\x02\x02\u0339\u033A\x05n8\x02\u033A\xAD\x03\x02\x02\x02" +
		"\u033B\u033C\x07\x1C\x02\x02\u033C\u033D\x05\x98M\x02\u033D\xAF\x03\x02" +
		"\x02\x02\u033E\u033F\x05\xB2Z\x02\u033F\u034B\x07\x04\x02\x02\u0340\u0342" +
		"\x07,\x02\x02\u0341\u0340\x03\x02\x02\x02\u0341\u0342\x03\x02\x02\x02" +
		"\u0342\u0343\x03\x02\x02\x02\u0343\u0348\x05d3\x02\u0344\u0345\x07\x05" +
		"\x02\x02\u0345\u0347\x05d3\x02\u0346\u0344\x03\x02\x02\x02\u0347\u034A" +
		"\x03\x02\x02\x02\u0348\u0346\x03\x02\x02\x02\u0348\u0349\x03\x02\x02\x02" +
		"\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02\x02\x02\u034B\u0341\x03" +
		"\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D" +
		"\u034E\x07\x06\x02\x02\u034E\xB1\x03\x02\x02\x02\u034F\u0350\x05\xA6T" +
		"\x02\u0350\u0351\x05\x98M\x02\u0351\xB3\x03\x02\x02\x02\u0352\u0353\x05" +
		"\xA4S\x02\u0353\xB5\x03\x02\x02\x02\u0354\u0355\x07@\x02\x02\u0355\u035B" +
		"\x07\x04\x02\x02\u0356\u035C\x07\t\x02\x02\u0357\u0359\x07,\x02\x02\u0358" +
		"\u0357\x03\x02\x02\x02\u0358\u0359\x03\x02\x02\x02\u0359\u035A\x03\x02" +
		"\x02\x02\u035A\u035C\x05d3\x02\u035B\u0356\x03\x02\x02\x02\u035B\u0358" +
		"\x03\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x07\x06\x02\x02" +
		"\u035E\xB7\x03\x02\x02\x02\u035F\u0360\x07\n\x02\x02\u0360\u0363\x05\xBA" +
		"^\x02\u0361\u0362\x07\x0F\x02\x02\u0362\u0364\x05d3\x02\u0363\u0361\x03" +
		"\x02\x02\x02\u0363\u0364\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02\u0365" +
		"\u0366\x07\v\x02\x02\u0366\xB9\x03\x02\x02\x02\u0367\u036A\x05\xBC_\x02" +
		"\u0368\u0369\x073\x02\x02\u0369\u036B\x05d3\x02\u036A\u0368\x03\x02\x02" +
		"\x02\u036A\u036B\x03\x02\x02\x02\u036B\xBB\x03\x02\x02\x02\u036C\u036D" +
		"\x05\x8EH\x02\u036D\u036E\x078\x02\x02\u036E\u036F\x05d3\x02\u036F\xBD" +
		"\x03\x02\x02\x02\u0370\u0374\x07\n\x02\x02\u0371\u0372\x05\x8EH\x02\u0372" +
		"\u0373\x07\x07\x02\x02\u0373\u0375\x03\x02\x02\x02\u0374\u0371\x03\x02" +
		"\x02\x02\u0374\u0375\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376" +
		"\u0379\x05F$\x02\u0377\u0378\x073\x02\x02\u0378\u037A\x05d3\x02\u0379" +
		"\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A\u037B\x03\x02" +
		"\x02\x02\u037B\u037C\x07\x0F\x02\x02\u037C\u037D\x05d3\x02\u037D\u037E" +
		"\x07\v\x02\x02\u037E\xBF\x03\x02\x02\x02\u037F\u0382\x05\x94K\x02\u0380" +
		"\u0382\x05\x92J\x02\u0381\u037F\x03\x02\x02\x02\u0381\u0380\x03\x02\x02" +
		"\x02\u0382\xC1\x03\x02\x02\x02\u0383\u0391\x07\f\x02\x02\u0384\u0385\x05" +
		"\x90I\x02\u0385\u0386\x07\x0E\x02\x02\u0386\u038E\x05d3\x02\u0387\u0388" +
		"\x07\x05\x02\x02\u0388\u0389\x05\x90I\x02\u0389\u038A\x07\x0E\x02\x02" +
		"\u038A\u038B\x05d3\x02\u038B\u038D\x03\x02\x02\x02\u038C\u0387\x03\x02" +
		"\x02\x02\u038D\u0390\x03\x02\x02\x02\u038E\u038C\x03\x02\x02\x02\u038E" +
		"\u038F\x03\x02\x02\x02\u038F\u0392\x03\x02\x02\x02\u0390\u038E\x03\x02" +
		"\x02\x02\u0391\u0384\x03\x02\x02\x02\u0391\u0392\x03\x02\x02\x02\u0392" +
		"\u0393\x03\x02\x02\x02\u0393\u0394\x07\r\x02\x02\u0394\xC3\x03\x02\x02" +
		"\x02\u0395\u0396\t\n\x02\x02\u0396\xC5\x03\x02\x02\x02c\xC8\xCE\xD2\xD7" +
		"\xDC\xE1\xE6\xEC\xF4\xFA\u0103\u0109\u0115\u0124\u0142\u0148\u0154\u015D" +
		"\u0168\u017A\u017D\u0185\u018E\u0195\u019B\u01A1\u01A8\u01AE\u01B2\u01B7" +
		"\u01BB\u01C7\u01CA\u01CE\u01D2\u01DA\u01DD\u01E2\u01EB\u01F0\u01F7\u01FD" +
		"\u020D\u020F\u0212\u0215\u0218\u021E\u0222\u0226\u022A\u022D\u0230\u0233" +
		"\u023D\u0244\u024D\u0253\u025A\u025E\u0260\u026D\u0275\u027B\u0284\u028C" +
		"\u0294\u029C\u02A2\u02AB\u02AD\u02B6\u02BD\u02C6\u02CB\u02CD\u02DB\u02E3" +
		"\u02ED\u02F0\u0308\u0317\u0320\u0323\u032F\u0341\u0348\u034B\u0358\u035B" +
		"\u0363\u036A\u0374\u0379\u0381\u038E\u0391";
	public static readonly _serializedATN: string = Utils.join(
		[
			CypherParser._serializedATNSegment0,
			CypherParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!CypherParser.__ATN) {
			CypherParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(CypherParser._serializedATN));
		}

		return CypherParser.__ATN;
	}

}

export class OC_CypherContext extends ParserRuleContext {
	public oC_Statement(): OC_StatementContext {
		return this.getRuleContext(0, OC_StatementContext);
	}
	public EOF(): TerminalNode { return this.getToken(CypherParser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Cypher; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Cypher) {
			listener.enterOC_Cypher(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Cypher) {
			listener.exitOC_Cypher(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Cypher) {
			return visitor.visitOC_Cypher(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StatementContext extends ParserRuleContext {
	public oC_Query(): OC_QueryContext | undefined {
		return this.tryGetRuleContext(0, OC_QueryContext);
	}
	public oC_Command(): OC_CommandContext | undefined {
		return this.tryGetRuleContext(0, OC_CommandContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Statement; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Statement) {
			listener.enterOC_Statement(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Statement) {
			listener.exitOC_Statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Statement) {
			return visitor.visitOC_Statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_QueryContext extends ParserRuleContext {
	public oC_RegularQuery(): OC_RegularQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_RegularQueryContext);
	}
	public oC_StandaloneCall(): OC_StandaloneCallContext | undefined {
		return this.tryGetRuleContext(0, OC_StandaloneCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Query; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Query) {
			listener.enterOC_Query(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Query) {
			listener.exitOC_Query(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Query) {
			return visitor.visitOC_Query(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RegularQueryContext extends ParserRuleContext {
	public oC_SingleQuery(): OC_SingleQueryContext[];
	public oC_SingleQuery(i: number): OC_SingleQueryContext;
	public oC_SingleQuery(i?: number): OC_SingleQueryContext | OC_SingleQueryContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SingleQueryContext);
		} else {
			return this.getRuleContext(i, OC_SingleQueryContext);
		}
	}
	public UNION(): TerminalNode[];
	public UNION(i: number): TerminalNode;
	public UNION(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.UNION);
		} else {
			return this.getToken(CypherParser.UNION, i);
		}
	}
	public ALL(): TerminalNode[];
	public ALL(i: number): TerminalNode;
	public ALL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.ALL);
		} else {
			return this.getToken(CypherParser.ALL, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RegularQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RegularQuery) {
			listener.enterOC_RegularQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RegularQuery) {
			listener.exitOC_RegularQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RegularQuery) {
			return visitor.visitOC_RegularQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SingleQueryContext extends ParserRuleContext {
	public oC_SinglePartQuery(): OC_SinglePartQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_SinglePartQueryContext);
	}
	public oC_MultiPartQuery(): OC_MultiPartQueryContext | undefined {
		return this.tryGetRuleContext(0, OC_MultiPartQueryContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SingleQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SingleQuery) {
			listener.enterOC_SingleQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SingleQuery) {
			listener.exitOC_SingleQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SingleQuery) {
			return visitor.visitOC_SingleQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SinglePartQueryContext extends ParserRuleContext {
	public oC_Return(): OC_ReturnContext {
		return this.getRuleContext(0, OC_ReturnContext);
	}
	public oC_ReadingClause(): OC_ReadingClauseContext[];
	public oC_ReadingClause(i: number): OC_ReadingClauseContext;
	public oC_ReadingClause(i?: number): OC_ReadingClauseContext | OC_ReadingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ReadingClauseContext);
		} else {
			return this.getRuleContext(i, OC_ReadingClauseContext);
		}
	}
	public oC_UpdatingClause(): OC_UpdatingClauseContext[];
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
	public oC_UpdatingClause(i?: number): OC_UpdatingClauseContext | OC_UpdatingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UpdatingClauseContext);
		} else {
			return this.getRuleContext(i, OC_UpdatingClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SinglePartQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SinglePartQuery) {
			listener.enterOC_SinglePartQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SinglePartQuery) {
			listener.exitOC_SinglePartQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SinglePartQuery) {
			return visitor.visitOC_SinglePartQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MultiPartQueryContext extends ParserRuleContext {
	public oC_With(): OC_WithContext {
		return this.getRuleContext(0, OC_WithContext);
	}
	public oC_SinglePartQuery(): OC_SinglePartQueryContext {
		return this.getRuleContext(0, OC_SinglePartQueryContext);
	}
	public oC_ReadingClause(): OC_ReadingClauseContext[];
	public oC_ReadingClause(i: number): OC_ReadingClauseContext;
	public oC_ReadingClause(i?: number): OC_ReadingClauseContext | OC_ReadingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ReadingClauseContext);
		} else {
			return this.getRuleContext(i, OC_ReadingClauseContext);
		}
	}
	public oC_UpdatingClause(): OC_UpdatingClauseContext[];
	public oC_UpdatingClause(i: number): OC_UpdatingClauseContext;
	public oC_UpdatingClause(i?: number): OC_UpdatingClauseContext | OC_UpdatingClauseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UpdatingClauseContext);
		} else {
			return this.getRuleContext(i, OC_UpdatingClauseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MultiPartQuery; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MultiPartQuery) {
			listener.enterOC_MultiPartQuery(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MultiPartQuery) {
			listener.exitOC_MultiPartQuery(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MultiPartQuery) {
			return visitor.visitOC_MultiPartQuery(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReadingClauseContext extends ParserRuleContext {
	public oC_Match(): OC_MatchContext | undefined {
		return this.tryGetRuleContext(0, OC_MatchContext);
	}
	public oC_Unwind(): OC_UnwindContext | undefined {
		return this.tryGetRuleContext(0, OC_UnwindContext);
	}
	public oC_InQueryCall(): OC_InQueryCallContext | undefined {
		return this.tryGetRuleContext(0, OC_InQueryCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReadingClause; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReadingClause) {
			listener.enterOC_ReadingClause(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReadingClause) {
			listener.exitOC_ReadingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReadingClause) {
			return visitor.visitOC_ReadingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CommandContext extends ParserRuleContext {
	public oC_CreateIndex(): OC_CreateIndexContext | undefined {
		return this.tryGetRuleContext(0, OC_CreateIndexContext);
	}
	public oC_DropIndex(): OC_DropIndexContext | undefined {
		return this.tryGetRuleContext(0, OC_DropIndexContext);
	}
	public oC_CreateConstraint(): OC_CreateConstraintContext | undefined {
		return this.tryGetRuleContext(0, OC_CreateConstraintContext);
	}
	public oC_DropConstraint(): OC_DropConstraintContext | undefined {
		return this.tryGetRuleContext(0, OC_DropConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Command; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Command) {
			listener.enterOC_Command(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Command) {
			listener.exitOC_Command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Command) {
			return visitor.visitOC_Command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CreateIndexContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(CypherParser.CREATE, 0); }
	public INDEX(): TerminalNode { return this.getToken(CypherParser.INDEX, 0); }
	public ON(): TerminalNode { return this.getToken(CypherParser.ON, 0); }
	public oC_NodeLabel(): OC_NodeLabelContext {
		return this.getRuleContext(0, OC_NodeLabelContext);
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext[];
	public oC_PropertyExpression(i: number): OC_PropertyExpressionContext;
	public oC_PropertyExpression(i?: number): OC_PropertyExpressionContext | OC_PropertyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PropertyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_CreateIndex; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_CreateIndex) {
			listener.enterOC_CreateIndex(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_CreateIndex) {
			listener.exitOC_CreateIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_CreateIndex) {
			return visitor.visitOC_CreateIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DropIndexContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(CypherParser.DROP, 0); }
	public INDEX(): TerminalNode { return this.getToken(CypherParser.INDEX, 0); }
	public ON(): TerminalNode { return this.getToken(CypherParser.ON, 0); }
	public oC_NodeLabel(): OC_NodeLabelContext {
		return this.getRuleContext(0, OC_NodeLabelContext);
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext[];
	public oC_PropertyExpression(i: number): OC_PropertyExpressionContext;
	public oC_PropertyExpression(i?: number): OC_PropertyExpressionContext | OC_PropertyExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PropertyExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_DropIndex; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_DropIndex) {
			listener.enterOC_DropIndex(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_DropIndex) {
			listener.exitOC_DropIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_DropIndex) {
			return visitor.visitOC_DropIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CreateConstraintContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(CypherParser.CREATE, 0); }
	public CONSTRAINT(): TerminalNode { return this.getToken(CypherParser.CONSTRAINT, 0); }
	public ON(): TerminalNode { return this.getToken(CypherParser.ON, 0); }
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabel(): OC_NodeLabelContext {
		return this.getRuleContext(0, OC_NodeLabelContext);
	}
	public ASSERT(): TerminalNode { return this.getToken(CypherParser.ASSERT, 0); }
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		return this.getRuleContext(0, OC_PropertyExpressionContext);
	}
	public IS(): TerminalNode { return this.getToken(CypherParser.IS, 0); }
	public UNIQUE(): TerminalNode { return this.getToken(CypherParser.UNIQUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_CreateConstraint; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_CreateConstraint) {
			listener.enterOC_CreateConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_CreateConstraint) {
			listener.exitOC_CreateConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_CreateConstraint) {
			return visitor.visitOC_CreateConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DropConstraintContext extends ParserRuleContext {
	public DROP(): TerminalNode { return this.getToken(CypherParser.DROP, 0); }
	public CONSTRAINT(): TerminalNode { return this.getToken(CypherParser.CONSTRAINT, 0); }
	public ON(): TerminalNode { return this.getToken(CypherParser.ON, 0); }
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabel(): OC_NodeLabelContext {
		return this.getRuleContext(0, OC_NodeLabelContext);
	}
	public ASSERT(): TerminalNode { return this.getToken(CypherParser.ASSERT, 0); }
	public oC_PropertyExpression(): OC_PropertyExpressionContext {
		return this.getRuleContext(0, OC_PropertyExpressionContext);
	}
	public IS(): TerminalNode { return this.getToken(CypherParser.IS, 0); }
	public UNIQUE(): TerminalNode { return this.getToken(CypherParser.UNIQUE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_DropConstraint; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_DropConstraint) {
			listener.enterOC_DropConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_DropConstraint) {
			listener.exitOC_DropConstraint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_DropConstraint) {
			return visitor.visitOC_DropConstraint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MatchContext extends ParserRuleContext {
	public MATCH(): TerminalNode { return this.getToken(CypherParser.MATCH, 0); }
	public oC_Pattern(): OC_PatternContext {
		return this.getRuleContext(0, OC_PatternContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OPTIONAL, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Match; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Match) {
			listener.enterOC_Match(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Match) {
			listener.exitOC_Match(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Match) {
			return visitor.visitOC_Match(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UnwindContext extends ParserRuleContext {
	public UNWIND(): TerminalNode { return this.getToken(CypherParser.UNWIND, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public AS(): TerminalNode { return this.getToken(CypherParser.AS, 0); }
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Unwind; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Unwind) {
			listener.enterOC_Unwind(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Unwind) {
			listener.exitOC_Unwind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Unwind) {
			return visitor.visitOC_Unwind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MergeContext extends ParserRuleContext {
	public MERGE(): TerminalNode { return this.getToken(CypherParser.MERGE, 0); }
	public oC_PatternPart(): OC_PatternPartContext {
		return this.getRuleContext(0, OC_PatternPartContext);
	}
	public oC_MergeAction(): OC_MergeActionContext[];
	public oC_MergeAction(i: number): OC_MergeActionContext;
	public oC_MergeAction(i?: number): OC_MergeActionContext | OC_MergeActionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_MergeActionContext);
		} else {
			return this.getRuleContext(i, OC_MergeActionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Merge; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Merge) {
			listener.enterOC_Merge(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Merge) {
			listener.exitOC_Merge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Merge) {
			return visitor.visitOC_Merge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MergeActionContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(CypherParser.ON, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MATCH, 0); }
	public oC_Set(): OC_SetContext {
		return this.getRuleContext(0, OC_SetContext);
	}
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CREATE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MergeAction; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MergeAction) {
			listener.enterOC_MergeAction(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MergeAction) {
			listener.exitOC_MergeAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MergeAction) {
			return visitor.visitOC_MergeAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CreateContext extends ParserRuleContext {
	public CREATE(): TerminalNode { return this.getToken(CypherParser.CREATE, 0); }
	public oC_Pattern(): OC_PatternContext {
		return this.getRuleContext(0, OC_PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Create; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Create) {
			listener.enterOC_Create(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Create) {
			listener.exitOC_Create(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Create) {
			return visitor.visitOC_Create(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SetContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(CypherParser.SET, 0); }
	public oC_SetItem(): OC_SetItemContext[];
	public oC_SetItem(i: number): OC_SetItemContext;
	public oC_SetItem(i?: number): OC_SetItemContext | OC_SetItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SetItemContext);
		} else {
			return this.getRuleContext(i, OC_SetItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Set; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Set) {
			listener.enterOC_Set(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Set) {
			listener.exitOC_Set(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Set) {
			return visitor.visitOC_Set(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SetItemContext extends ParserRuleContext {
	public oC_PropertyExpression(): OC_PropertyExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyExpressionContext);
	}
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SetItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SetItem) {
			listener.enterOC_SetItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SetItem) {
			listener.exitOC_SetItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SetItem) {
			return visitor.visitOC_SetItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DeleteContext extends ParserRuleContext {
	public DELETE(): TerminalNode { return this.getToken(CypherParser.DELETE, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public DETACH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DETACH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Delete; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Delete) {
			listener.enterOC_Delete(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Delete) {
			listener.exitOC_Delete(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Delete) {
			return visitor.visitOC_Delete(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RemoveContext extends ParserRuleContext {
	public REMOVE(): TerminalNode { return this.getToken(CypherParser.REMOVE, 0); }
	public oC_RemoveItem(): OC_RemoveItemContext[];
	public oC_RemoveItem(i: number): OC_RemoveItemContext;
	public oC_RemoveItem(i?: number): OC_RemoveItemContext | OC_RemoveItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_RemoveItemContext);
		} else {
			return this.getRuleContext(i, OC_RemoveItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Remove; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Remove) {
			listener.enterOC_Remove(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Remove) {
			listener.exitOC_Remove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Remove) {
			return visitor.visitOC_Remove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RemoveItemContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	public oC_PropertyExpression(): OC_PropertyExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RemoveItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RemoveItem) {
			listener.enterOC_RemoveItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RemoveItem) {
			listener.exitOC_RemoveItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RemoveItem) {
			return visitor.visitOC_RemoveItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_InQueryCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(CypherParser.CALL, 0); }
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		return this.getRuleContext(0, OC_ExplicitProcedureInvocationContext);
	}
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.YIELD, 0); }
	public oC_YieldItems(): OC_YieldItemsContext | undefined {
		return this.tryGetRuleContext(0, OC_YieldItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_InQueryCall; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_InQueryCall) {
			listener.enterOC_InQueryCall(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_InQueryCall) {
			listener.exitOC_InQueryCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_InQueryCall) {
			return visitor.visitOC_InQueryCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StandaloneCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(CypherParser.CALL, 0); }
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext {
		return this.getRuleContext(0, OC_ExplicitProcedureInvocationContext);
	}
	public YIELD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.YIELD, 0); }
	public oC_YieldItems(): OC_YieldItemsContext | undefined {
		return this.tryGetRuleContext(0, OC_YieldItemsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StandaloneCall; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StandaloneCall) {
			listener.enterOC_StandaloneCall(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StandaloneCall) {
			listener.exitOC_StandaloneCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StandaloneCall) {
			return visitor.visitOC_StandaloneCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_YieldItemsContext extends ParserRuleContext {
	public oC_YieldItem(): OC_YieldItemContext[];
	public oC_YieldItem(i: number): OC_YieldItemContext;
	public oC_YieldItem(i?: number): OC_YieldItemContext | OC_YieldItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_YieldItemContext);
		} else {
			return this.getRuleContext(i, OC_YieldItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_YieldItems; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_YieldItems) {
			listener.enterOC_YieldItems(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_YieldItems) {
			listener.exitOC_YieldItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_YieldItems) {
			return visitor.visitOC_YieldItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_YieldItemContext extends ParserRuleContext {
	public oC_ProcedureResultField(): OC_ProcedureResultFieldContext {
		return this.getRuleContext(0, OC_ProcedureResultFieldContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_YieldItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_YieldItem) {
			listener.enterOC_YieldItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_YieldItem) {
			listener.exitOC_YieldItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_YieldItem) {
			return visitor.visitOC_YieldItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_WithContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(CypherParser.WITH, 0); }
	public oC_ReturnBody(): OC_ReturnBodyContext {
		return this.getRuleContext(0, OC_ReturnBodyContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_With; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_With) {
			listener.enterOC_With(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_With) {
			listener.exitOC_With(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_With) {
			return visitor.visitOC_With(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReturnContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(CypherParser.RETURN, 0); }
	public oC_ReturnBody(): OC_ReturnBodyContext {
		return this.getRuleContext(0, OC_ReturnBodyContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Return; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Return) {
			listener.enterOC_Return(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Return) {
			listener.exitOC_Return(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Return) {
			return visitor.visitOC_Return(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReturnBodyContext extends ParserRuleContext {
	public oC_ReturnItems(): OC_ReturnItemsContext {
		return this.getRuleContext(0, OC_ReturnItemsContext);
	}
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ORDER, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.BY, 0); }
	public oC_SortItem(): OC_SortItemContext[];
	public oC_SortItem(i: number): OC_SortItemContext;
	public oC_SortItem(i?: number): OC_SortItemContext | OC_SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SortItemContext);
		} else {
			return this.getRuleContext(i, OC_SortItemContext);
		}
	}
	public SKIP_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SKIP_KEYWORD, 0); }
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.LIMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReturnBody; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReturnBody) {
			listener.enterOC_ReturnBody(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReturnBody) {
			listener.exitOC_ReturnBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReturnBody) {
			return visitor.visitOC_ReturnBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReturnItemsContext extends ParserRuleContext {
	public oC_ReturnItem(): OC_ReturnItemContext[];
	public oC_ReturnItem(i: number): OC_ReturnItemContext;
	public oC_ReturnItem(i?: number): OC_ReturnItemContext | OC_ReturnItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ReturnItemContext);
		} else {
			return this.getRuleContext(i, OC_ReturnItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReturnItems; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReturnItems) {
			listener.enterOC_ReturnItems(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReturnItems) {
			listener.exitOC_ReturnItems(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReturnItems) {
			return visitor.visitOC_ReturnItems(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReturnItemContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReturnItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReturnItem) {
			listener.enterOC_ReturnItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReturnItem) {
			listener.exitOC_ReturnItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReturnItem) {
			return visitor.visitOC_ReturnItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_OrderContext extends ParserRuleContext {
	public ORDER(): TerminalNode { return this.getToken(CypherParser.ORDER, 0); }
	public BY(): TerminalNode { return this.getToken(CypherParser.BY, 0); }
	public oC_SortItem(): OC_SortItemContext[];
	public oC_SortItem(i: number): OC_SortItemContext;
	public oC_SortItem(i?: number): OC_SortItemContext | OC_SortItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SortItemContext);
		} else {
			return this.getRuleContext(i, OC_SortItemContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Order; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Order) {
			listener.enterOC_Order(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Order) {
			listener.exitOC_Order(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Order) {
			return visitor.visitOC_Order(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SortItemContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASCENDING, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESCENDING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SortItem; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SortItem) {
			listener.enterOC_SortItem(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SortItem) {
			listener.exitOC_SortItem(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SortItem) {
			return visitor.visitOC_SortItem(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternContext extends ParserRuleContext {
	public oC_PatternPart(): OC_PatternPartContext[];
	public oC_PatternPart(i: number): OC_PatternPartContext;
	public oC_PatternPart(i?: number): OC_PatternPartContext | OC_PatternPartContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PatternPartContext);
		} else {
			return this.getRuleContext(i, OC_PatternPartContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Pattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Pattern) {
			listener.enterOC_Pattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Pattern) {
			listener.exitOC_Pattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Pattern) {
			return visitor.visitOC_Pattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternPartContext extends ParserRuleContext {
	public oC_AnonymousPatternPart(): OC_AnonymousPatternPartContext {
		return this.getRuleContext(0, OC_AnonymousPatternPartContext);
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternPart; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternPart) {
			listener.enterOC_PatternPart(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternPart) {
			listener.exitOC_PatternPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternPart) {
			return visitor.visitOC_PatternPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AnonymousPatternPartContext extends ParserRuleContext {
	public oC_PatternElement(): OC_PatternElementContext {
		return this.getRuleContext(0, OC_PatternElementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AnonymousPatternPart; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AnonymousPatternPart) {
			listener.enterOC_AnonymousPatternPart(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AnonymousPatternPart) {
			listener.exitOC_AnonymousPatternPart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AnonymousPatternPart) {
			return visitor.visitOC_AnonymousPatternPart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternElementContext extends ParserRuleContext {
	public oC_NodePattern(): OC_NodePatternContext | undefined {
		return this.tryGetRuleContext(0, OC_NodePatternContext);
	}
	public oC_PatternElementChain(): OC_PatternElementChainContext[];
	public oC_PatternElementChain(i: number): OC_PatternElementChainContext;
	public oC_PatternElementChain(i?: number): OC_PatternElementChainContext | OC_PatternElementChainContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PatternElementChainContext);
		} else {
			return this.getRuleContext(i, OC_PatternElementChainContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternElement; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternElement) {
			listener.enterOC_PatternElement(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternElement) {
			listener.exitOC_PatternElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternElement) {
			return visitor.visitOC_PatternElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodePatternContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_NodeLabels(): OC_NodeLabelsContext | undefined {
		return this.tryGetRuleContext(0, OC_NodeLabelsContext);
	}
	public oC_Properties(): OC_PropertiesContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodePattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodePattern) {
			listener.enterOC_NodePattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodePattern) {
			listener.exitOC_NodePattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodePattern) {
			return visitor.visitOC_NodePattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternElementChainContext extends ParserRuleContext {
	public oC_RelationshipPattern(): OC_RelationshipPatternContext {
		return this.getRuleContext(0, OC_RelationshipPatternContext);
	}
	public oC_NodePattern(): OC_NodePatternContext {
		return this.getRuleContext(0, OC_NodePatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternElementChain; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternElementChain) {
			listener.enterOC_PatternElementChain(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternElementChain) {
			listener.exitOC_PatternElementChain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternElementChain) {
			return visitor.visitOC_PatternElementChain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipPatternContext extends ParserRuleContext {
	public oC_Dash(): OC_DashContext[];
	public oC_Dash(i: number): OC_DashContext;
	public oC_Dash(i?: number): OC_DashContext | OC_DashContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_DashContext);
		} else {
			return this.getRuleContext(i, OC_DashContext);
		}
	}
	public oC_LeftArrowHead(): OC_LeftArrowHeadContext | undefined {
		return this.tryGetRuleContext(0, OC_LeftArrowHeadContext);
	}
	public oC_RelationshipDetail(): OC_RelationshipDetailContext | undefined {
		return this.tryGetRuleContext(0, OC_RelationshipDetailContext);
	}
	public oC_RightArrowHead(): OC_RightArrowHeadContext | undefined {
		return this.tryGetRuleContext(0, OC_RightArrowHeadContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipPattern; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipPattern) {
			listener.enterOC_RelationshipPattern(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipPattern) {
			listener.exitOC_RelationshipPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipPattern) {
			return visitor.visitOC_RelationshipPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipDetailContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_RelationshipTypes(): OC_RelationshipTypesContext | undefined {
		return this.tryGetRuleContext(0, OC_RelationshipTypesContext);
	}
	public oC_RangeLiteral(): OC_RangeLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_RangeLiteralContext);
	}
	public oC_Properties(): OC_PropertiesContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipDetail; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipDetail) {
			listener.enterOC_RelationshipDetail(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipDetail) {
			listener.exitOC_RelationshipDetail(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipDetail) {
			return visitor.visitOC_RelationshipDetail(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertiesContext extends ParserRuleContext {
	public oC_PropertyKeyValue(): OC_PropertyKeyValueContext[];
	public oC_PropertyKeyValue(i: number): OC_PropertyKeyValueContext;
	public oC_PropertyKeyValue(i?: number): OC_PropertyKeyValueContext | OC_PropertyKeyValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyKeyValueContext);
		} else {
			return this.getRuleContext(i, OC_PropertyKeyValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Properties; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Properties) {
			listener.enterOC_Properties(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Properties) {
			listener.exitOC_Properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Properties) {
			return visitor.visitOC_Properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelationshipTypesContext extends ParserRuleContext {
	public oC_RelTypeName(): OC_RelTypeNameContext[];
	public oC_RelTypeName(i: number): OC_RelTypeNameContext;
	public oC_RelTypeName(i?: number): OC_RelTypeNameContext | OC_RelTypeNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_RelTypeNameContext);
		} else {
			return this.getRuleContext(i, OC_RelTypeNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelationshipTypes; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelationshipTypes) {
			listener.enterOC_RelationshipTypes(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelationshipTypes) {
			listener.exitOC_RelationshipTypes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelationshipTypes) {
			return visitor.visitOC_RelationshipTypes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodeLabelsContext extends ParserRuleContext {
	public oC_NodeLabel(): OC_NodeLabelContext[];
	public oC_NodeLabel(i: number): OC_NodeLabelContext;
	public oC_NodeLabel(i?: number): OC_NodeLabelContext | OC_NodeLabelContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NodeLabelContext);
		} else {
			return this.getRuleContext(i, OC_NodeLabelContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodeLabels; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodeLabels) {
			listener.enterOC_NodeLabels(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodeLabels) {
			listener.exitOC_NodeLabels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodeLabels) {
			return visitor.visitOC_NodeLabels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NodeLabelContext extends ParserRuleContext {
	public oC_LabelName(): OC_LabelNameContext {
		return this.getRuleContext(0, OC_LabelNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NodeLabel; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NodeLabel) {
			listener.enterOC_NodeLabel(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NodeLabel) {
			listener.exitOC_NodeLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NodeLabel) {
			return visitor.visitOC_NodeLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RangeLiteralContext extends ParserRuleContext {
	public oC_IntegerLiteral(): OC_IntegerLiteralContext[];
	public oC_IntegerLiteral(i: number): OC_IntegerLiteralContext;
	public oC_IntegerLiteral(i?: number): OC_IntegerLiteralContext | OC_IntegerLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_IntegerLiteralContext);
		} else {
			return this.getRuleContext(i, OC_IntegerLiteralContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RangeLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RangeLiteral) {
			listener.enterOC_RangeLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RangeLiteral) {
			listener.exitOC_RangeLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RangeLiteral) {
			return visitor.visitOC_RangeLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LabelNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_LabelName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_LabelName) {
			listener.enterOC_LabelName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_LabelName) {
			listener.exitOC_LabelName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_LabelName) {
			return visitor.visitOC_LabelName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RelTypeNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RelTypeName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RelTypeName) {
			listener.enterOC_RelTypeName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RelTypeName) {
			listener.exitOC_RelTypeName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RelTypeName) {
			return visitor.visitOC_RelTypeName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ExpressionContext extends ParserRuleContext {
	public oC_OrExpression(): OC_OrExpressionContext {
		return this.getRuleContext(0, OC_OrExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Expression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Expression) {
			listener.enterOC_Expression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Expression) {
			listener.exitOC_Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Expression) {
			return visitor.visitOC_Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_OrExpressionContext extends ParserRuleContext {
	public oC_AndExpression(): OC_AndExpressionContext[];
	public oC_AndExpression(i: number): OC_AndExpressionContext;
	public oC_AndExpression(i?: number): OC_AndExpressionContext | OC_AndExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_AndExpressionContext);
		} else {
			return this.getRuleContext(i, OC_AndExpressionContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.OR);
		} else {
			return this.getToken(CypherParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_OrExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_OrExpression) {
			listener.enterOC_OrExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_OrExpression) {
			listener.exitOC_OrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_OrExpression) {
			return visitor.visitOC_OrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AndExpressionContext extends ParserRuleContext {
	public oC_NotExpression(): OC_NotExpressionContext[];
	public oC_NotExpression(i: number): OC_NotExpressionContext;
	public oC_NotExpression(i?: number): OC_NotExpressionContext | OC_NotExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NotExpressionContext);
		} else {
			return this.getRuleContext(i, OC_NotExpressionContext);
		}
	}
	public AND(): TerminalNode[];
	public AND(i: number): TerminalNode;
	public AND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.AND);
		} else {
			return this.getToken(CypherParser.AND, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AndExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AndExpression) {
			listener.enterOC_AndExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AndExpression) {
			listener.exitOC_AndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AndExpression) {
			return visitor.visitOC_AndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NotExpressionContext extends ParserRuleContext {
	public oC_ComparisonExpression(): OC_ComparisonExpressionContext {
		return this.getRuleContext(0, OC_ComparisonExpressionContext);
	}
	public NOT(): TerminalNode[];
	public NOT(i: number): TerminalNode;
	public NOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(CypherParser.NOT);
		} else {
			return this.getToken(CypherParser.NOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NotExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NotExpression) {
			listener.enterOC_NotExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NotExpression) {
			listener.exitOC_NotExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NotExpression) {
			return visitor.visitOC_NotExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ComparisonExpressionContext extends ParserRuleContext {
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getRuleContext(0, OC_AddOrSubtractExpressionContext);
	}
	public oC_PartialComparisonExpression(): OC_PartialComparisonExpressionContext[];
	public oC_PartialComparisonExpression(i: number): OC_PartialComparisonExpressionContext;
	public oC_PartialComparisonExpression(i?: number): OC_PartialComparisonExpressionContext | OC_PartialComparisonExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PartialComparisonExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PartialComparisonExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ComparisonExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ComparisonExpression) {
			listener.enterOC_ComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ComparisonExpression) {
			listener.exitOC_ComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ComparisonExpression) {
			return visitor.visitOC_ComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AddOrSubtractExpressionContext extends ParserRuleContext {
	public oC_MultiplyDivideModuloExpression(): OC_MultiplyDivideModuloExpressionContext[];
	public oC_MultiplyDivideModuloExpression(i: number): OC_MultiplyDivideModuloExpressionContext;
	public oC_MultiplyDivideModuloExpression(i?: number): OC_MultiplyDivideModuloExpressionContext | OC_MultiplyDivideModuloExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_MultiplyDivideModuloExpressionContext);
		} else {
			return this.getRuleContext(i, OC_MultiplyDivideModuloExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_AddOrSubtractExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_AddOrSubtractExpression) {
			listener.enterOC_AddOrSubtractExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_AddOrSubtractExpression) {
			listener.exitOC_AddOrSubtractExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_AddOrSubtractExpression) {
			return visitor.visitOC_AddOrSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MultiplyDivideModuloExpressionContext extends ParserRuleContext {
	public oC_PowerOfExpression(): OC_PowerOfExpressionContext[];
	public oC_PowerOfExpression(i: number): OC_PowerOfExpressionContext;
	public oC_PowerOfExpression(i?: number): OC_PowerOfExpressionContext | OC_PowerOfExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PowerOfExpressionContext);
		} else {
			return this.getRuleContext(i, OC_PowerOfExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MultiplyDivideModuloExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MultiplyDivideModuloExpression) {
			listener.enterOC_MultiplyDivideModuloExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MultiplyDivideModuloExpression) {
			listener.exitOC_MultiplyDivideModuloExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MultiplyDivideModuloExpression) {
			return visitor.visitOC_MultiplyDivideModuloExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PowerOfExpressionContext extends ParserRuleContext {
	public oC_UnaryAddOrSubtractExpression(): OC_UnaryAddOrSubtractExpressionContext[];
	public oC_UnaryAddOrSubtractExpression(i: number): OC_UnaryAddOrSubtractExpressionContext;
	public oC_UnaryAddOrSubtractExpression(i?: number): OC_UnaryAddOrSubtractExpressionContext | OC_UnaryAddOrSubtractExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_UnaryAddOrSubtractExpressionContext);
		} else {
			return this.getRuleContext(i, OC_UnaryAddOrSubtractExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PowerOfExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PowerOfExpression) {
			listener.enterOC_PowerOfExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PowerOfExpression) {
			listener.exitOC_PowerOfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PowerOfExpression) {
			return visitor.visitOC_PowerOfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UnaryAddOrSubtractExpressionContext extends ParserRuleContext {
	public oC_StringListNullOperatorExpression(): OC_StringListNullOperatorExpressionContext {
		return this.getRuleContext(0, OC_StringListNullOperatorExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_UnaryAddOrSubtractExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_UnaryAddOrSubtractExpression) {
			listener.enterOC_UnaryAddOrSubtractExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_UnaryAddOrSubtractExpression) {
			listener.exitOC_UnaryAddOrSubtractExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_UnaryAddOrSubtractExpression) {
			return visitor.visitOC_UnaryAddOrSubtractExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StringListNullOperatorExpressionContext extends ParserRuleContext {
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		return this.getRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public oC_StringOperatorExpression(): OC_StringOperatorExpressionContext[];
	public oC_StringOperatorExpression(i: number): OC_StringOperatorExpressionContext;
	public oC_StringOperatorExpression(i?: number): OC_StringOperatorExpressionContext | OC_StringOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_StringOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_StringOperatorExpressionContext);
		}
	}
	public oC_ListOperatorExpression(): OC_ListOperatorExpressionContext[];
	public oC_ListOperatorExpression(i: number): OC_ListOperatorExpressionContext;
	public oC_ListOperatorExpression(i?: number): OC_ListOperatorExpressionContext | OC_ListOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ListOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ListOperatorExpressionContext);
		}
	}
	public oC_NullOperatorExpression(): OC_NullOperatorExpressionContext[];
	public oC_NullOperatorExpression(i: number): OC_NullOperatorExpressionContext;
	public oC_NullOperatorExpression(i?: number): OC_NullOperatorExpressionContext | OC_NullOperatorExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NullOperatorExpressionContext);
		} else {
			return this.getRuleContext(i, OC_NullOperatorExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StringListNullOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StringListNullOperatorExpression) {
			listener.enterOC_StringListNullOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StringListNullOperatorExpression) {
			listener.exitOC_StringListNullOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StringListNullOperatorExpression) {
			return visitor.visitOC_StringListNullOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListOperatorExpressionContext extends ParserRuleContext {
	public IN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IN, 0); }
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListOperatorExpression) {
			listener.enterOC_ListOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListOperatorExpression) {
			listener.exitOC_ListOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListOperatorExpression) {
			return visitor.visitOC_ListOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_StringOperatorExpressionContext extends ParserRuleContext {
	public oC_PropertyOrLabelsExpression(): OC_PropertyOrLabelsExpressionContext {
		return this.getRuleContext(0, OC_PropertyOrLabelsExpressionContext);
	}
	public STARTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.STARTS, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WITH, 0); }
	public ENDS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ENDS, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONTAINS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_StringOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_StringOperatorExpression) {
			listener.enterOC_StringOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_StringOperatorExpression) {
			listener.exitOC_StringOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_StringOperatorExpression) {
			return visitor.visitOC_StringOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NullOperatorExpressionContext extends ParserRuleContext {
	public IS(): TerminalNode { return this.getToken(CypherParser.IS, 0); }
	public NULL(): TerminalNode { return this.getToken(CypherParser.NULL, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NullOperatorExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NullOperatorExpression) {
			listener.enterOC_NullOperatorExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NullOperatorExpression) {
			listener.exitOC_NullOperatorExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NullOperatorExpression) {
			return visitor.visitOC_NullOperatorExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyOrLabelsExpressionContext extends ParserRuleContext {
	public oC_Atom(): OC_AtomContext {
		return this.getRuleContext(0, OC_AtomContext);
	}
	public oC_PropertyLookup(): OC_PropertyLookupContext[];
	public oC_PropertyLookup(i: number): OC_PropertyLookupContext;
	public oC_PropertyLookup(i?: number): OC_PropertyLookupContext | OC_PropertyLookupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyLookupContext);
		} else {
			return this.getRuleContext(i, OC_PropertyLookupContext);
		}
	}
	public oC_NodeLabels(): OC_NodeLabelsContext[];
	public oC_NodeLabels(i: number): OC_NodeLabelsContext;
	public oC_NodeLabels(i?: number): OC_NodeLabelsContext | OC_NodeLabelsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_NodeLabelsContext);
		} else {
			return this.getRuleContext(i, OC_NodeLabelsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyOrLabelsExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyOrLabelsExpression) {
			listener.enterOC_PropertyOrLabelsExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyOrLabelsExpression) {
			listener.exitOC_PropertyOrLabelsExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyOrLabelsExpression) {
			return visitor.visitOC_PropertyOrLabelsExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_AtomContext extends ParserRuleContext {
	public oC_Literal(): OC_LiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_LiteralContext);
	}
	public oC_Parameter(): OC_ParameterContext | undefined {
		return this.tryGetRuleContext(0, OC_ParameterContext);
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public oC_FunctionInvocation(): OC_FunctionInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_FunctionInvocationContext);
	}
	public oC_ExplicitProcedureInvocation(): OC_ExplicitProcedureInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_ExplicitProcedureInvocationContext);
	}
	public oC_ImplicitProcedureInvocation(): OC_ImplicitProcedureInvocationContext | undefined {
		return this.tryGetRuleContext(0, OC_ImplicitProcedureInvocationContext);
	}
	public oC_CountExpression(): OC_CountExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_CountExpressionContext);
	}
	public oC_ListComprehension(): OC_ListComprehensionContext | undefined {
		return this.tryGetRuleContext(0, OC_ListComprehensionContext);
	}
	public oC_PatternComprehension(): OC_PatternComprehensionContext | undefined {
		return this.tryGetRuleContext(0, OC_PatternComprehensionContext);
	}
	public oC_Parenthesized(): OC_ParenthesizedContext | undefined {
		return this.tryGetRuleContext(0, OC_ParenthesizedContext);
	}
	public oC_FunctionName(): OC_FunctionNameContext | undefined {
		return this.tryGetRuleContext(0, OC_FunctionNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Atom; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Atom) {
			listener.enterOC_Atom(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Atom) {
			listener.exitOC_Atom(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Atom) {
			return visitor.visitOC_Atom(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LiteralContext extends ParserRuleContext {
	public oC_NumberLiteral(): OC_NumberLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_NumberLiteralContext);
	}
	public StringLiteral(): TerminalNode | undefined { return this.tryGetToken(CypherParser.StringLiteral, 0); }
	public oC_BooleanLiteral(): OC_BooleanLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_BooleanLiteralContext);
	}
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NULL, 0); }
	public oC_MapLiteral(): OC_MapLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_MapLiteralContext);
	}
	public oC_ListLiteral(): OC_ListLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_ListLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Literal; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Literal) {
			listener.enterOC_Literal(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Literal) {
			listener.exitOC_Literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Literal) {
			return visitor.visitOC_Literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_BooleanLiteralContext extends ParserRuleContext {
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FALSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_BooleanLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_BooleanLiteral) {
			listener.enterOC_BooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_BooleanLiteral) {
			listener.exitOC_BooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_BooleanLiteral) {
			return visitor.visitOC_BooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListLiteralContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListLiteral) {
			listener.enterOC_ListLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListLiteral) {
			listener.exitOC_ListLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListLiteral) {
			return visitor.visitOC_ListLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ParenthesizedContext extends ParserRuleContext {
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Parenthesized; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Parenthesized) {
			listener.enterOC_Parenthesized(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Parenthesized) {
			listener.exitOC_Parenthesized(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Parenthesized) {
			return visitor.visitOC_Parenthesized(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyExpressionContext extends ParserRuleContext {
	public oC_Atom(): OC_AtomContext {
		return this.getRuleContext(0, OC_AtomContext);
	}
	public oC_PropertyLookup(): OC_PropertyLookupContext {
		return this.getRuleContext(0, OC_PropertyLookupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyExpression) {
			listener.enterOC_PropertyExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyExpression) {
			listener.exitOC_PropertyExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyExpression) {
			return visitor.visitOC_PropertyExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyLookupContext extends ParserRuleContext {
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		return this.getRuleContext(0, OC_PropertyKeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyLookup; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyLookup) {
			listener.enterOC_PropertyLookup(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyLookup) {
			listener.exitOC_PropertyLookup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyLookup) {
			return visitor.visitOC_PropertyLookup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_VariableContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Variable; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Variable) {
			listener.enterOC_Variable(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Variable) {
			listener.exitOC_Variable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Variable) {
			return visitor.visitOC_Variable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyKeyNameContext extends ParserRuleContext {
	public oC_SchemaName(): OC_SchemaNameContext {
		return this.getRuleContext(0, OC_SchemaNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyKeyName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyKeyName) {
			listener.enterOC_PropertyKeyName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyKeyName) {
			listener.exitOC_PropertyKeyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyKeyName) {
			return visitor.visitOC_PropertyKeyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_IntegerLiteralContext extends ParserRuleContext {
	public HexInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.HexInteger, 0); }
	public OctalInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OctalInteger, 0); }
	public DecimalInteger(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DecimalInteger, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_IntegerLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_IntegerLiteral) {
			listener.enterOC_IntegerLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_IntegerLiteral) {
			listener.exitOC_IntegerLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_IntegerLiteral) {
			return visitor.visitOC_IntegerLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DoubleLiteralContext extends ParserRuleContext {
	public ExponentDecimalReal(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ExponentDecimalReal, 0); }
	public RegularDecimalReal(): TerminalNode | undefined { return this.tryGetToken(CypherParser.RegularDecimalReal, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_DoubleLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_DoubleLiteral) {
			listener.enterOC_DoubleLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_DoubleLiteral) {
			listener.exitOC_DoubleLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_DoubleLiteral) {
			return visitor.visitOC_DoubleLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SchemaNameContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext | undefined {
		return this.tryGetRuleContext(0, OC_SymbolicNameContext);
	}
	public oC_ReservedWord(): OC_ReservedWordContext | undefined {
		return this.tryGetRuleContext(0, OC_ReservedWordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SchemaName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SchemaName) {
			listener.enterOC_SchemaName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SchemaName) {
			listener.exitOC_SchemaName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SchemaName) {
			return visitor.visitOC_SchemaName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_SymbolicNameContext extends ParserRuleContext {
	public UnescapedSymbolicName(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UnescapedSymbolicName, 0); }
	public EscapedSymbolicName(): TerminalNode | undefined { return this.tryGetToken(CypherParser.EscapedSymbolicName, 0); }
	public HexLetter(): TerminalNode | undefined { return this.tryGetToken(CypherParser.HexLetter, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_SymbolicName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_SymbolicName) {
			listener.enterOC_SymbolicName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_SymbolicName) {
			listener.exitOC_SymbolicName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_SymbolicName) {
			return visitor.visitOC_SymbolicName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_LeftArrowHeadContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_LeftArrowHead; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_LeftArrowHead) {
			listener.enterOC_LeftArrowHead(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_LeftArrowHead) {
			listener.exitOC_LeftArrowHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_LeftArrowHead) {
			return visitor.visitOC_LeftArrowHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_RightArrowHeadContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_RightArrowHead; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_RightArrowHead) {
			listener.enterOC_RightArrowHead(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_RightArrowHead) {
			listener.exitOC_RightArrowHead(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_RightArrowHead) {
			return visitor.visitOC_RightArrowHead(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_DashContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Dash; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Dash) {
			listener.enterOC_Dash(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Dash) {
			listener.exitOC_Dash(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Dash) {
			return visitor.visitOC_Dash(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_UpdatingClauseContext extends ParserRuleContext {
	public oC_Create(): OC_CreateContext | undefined {
		return this.tryGetRuleContext(0, OC_CreateContext);
	}
	public oC_Merge(): OC_MergeContext | undefined {
		return this.tryGetRuleContext(0, OC_MergeContext);
	}
	public oC_Delete(): OC_DeleteContext | undefined {
		return this.tryGetRuleContext(0, OC_DeleteContext);
	}
	public oC_Set(): OC_SetContext | undefined {
		return this.tryGetRuleContext(0, OC_SetContext);
	}
	public oC_Remove(): OC_RemoveContext | undefined {
		return this.tryGetRuleContext(0, OC_RemoveContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_UpdatingClause; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_UpdatingClause) {
			listener.enterOC_UpdatingClause(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_UpdatingClause) {
			listener.exitOC_UpdatingClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_UpdatingClause) {
			return visitor.visitOC_UpdatingClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ExplicitProcedureInvocationContext extends ParserRuleContext {
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getRuleContext(0, OC_ProcedureNameContext);
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ExplicitProcedureInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ExplicitProcedureInvocation) {
			listener.enterOC_ExplicitProcedureInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ExplicitProcedureInvocation) {
			listener.exitOC_ExplicitProcedureInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ExplicitProcedureInvocation) {
			return visitor.visitOC_ExplicitProcedureInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProcedureNameContext extends ParserRuleContext {
	public oC_Namespace(): OC_NamespaceContext {
		return this.getRuleContext(0, OC_NamespaceContext);
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProcedureName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProcedureName) {
			listener.enterOC_ProcedureName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProcedureName) {
			listener.exitOC_ProcedureName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProcedureName) {
			return visitor.visitOC_ProcedureName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NamespaceContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext[];
	public oC_SymbolicName(i: number): OC_SymbolicNameContext;
	public oC_SymbolicName(i?: number): OC_SymbolicNameContext | OC_SymbolicNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_SymbolicNameContext);
		} else {
			return this.getRuleContext(i, OC_SymbolicNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Namespace; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Namespace) {
			listener.enterOC_Namespace(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Namespace) {
			listener.exitOC_Namespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Namespace) {
			return visitor.visitOC_Namespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ProcedureResultFieldContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ProcedureResultField; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ProcedureResultField) {
			listener.enterOC_ProcedureResultField(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ProcedureResultField) {
			listener.exitOC_ProcedureResultField(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ProcedureResultField) {
			return visitor.visitOC_ProcedureResultField(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PropertyKeyValueContext extends ParserRuleContext {
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext {
		return this.getRuleContext(0, OC_PropertyKeyNameContext);
	}
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PropertyKeyValue; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PropertyKeyValue) {
			listener.enterOC_PropertyKeyValue(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PropertyKeyValue) {
			listener.exitOC_PropertyKeyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PropertyKeyValue) {
			return visitor.visitOC_PropertyKeyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PartialComparisonExpressionContext extends ParserRuleContext {
	public oC_AddOrSubtractExpression(): OC_AddOrSubtractExpressionContext {
		return this.getRuleContext(0, OC_AddOrSubtractExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PartialComparisonExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PartialComparisonExpression) {
			listener.enterOC_PartialComparisonExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PartialComparisonExpression) {
			listener.exitOC_PartialComparisonExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PartialComparisonExpression) {
			return visitor.visitOC_PartialComparisonExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ParameterContext extends ParserRuleContext {
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_Parameter; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_Parameter) {
			listener.enterOC_Parameter(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_Parameter) {
			listener.exitOC_Parameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_Parameter) {
			return visitor.visitOC_Parameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FunctionInvocationContext extends ParserRuleContext {
	public oC_FunctionName(): OC_FunctionNameContext {
		return this.getRuleContext(0, OC_FunctionNameContext);
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FunctionInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FunctionInvocation) {
			listener.enterOC_FunctionInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FunctionInvocation) {
			listener.exitOC_FunctionInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FunctionInvocation) {
			return visitor.visitOC_FunctionInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FunctionNameContext extends ParserRuleContext {
	public oC_Namespace(): OC_NamespaceContext {
		return this.getRuleContext(0, OC_NamespaceContext);
	}
	public oC_SymbolicName(): OC_SymbolicNameContext {
		return this.getRuleContext(0, OC_SymbolicNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FunctionName; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FunctionName) {
			listener.enterOC_FunctionName(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FunctionName) {
			listener.exitOC_FunctionName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FunctionName) {
			return visitor.visitOC_FunctionName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ImplicitProcedureInvocationContext extends ParserRuleContext {
	public oC_ProcedureName(): OC_ProcedureNameContext {
		return this.getRuleContext(0, OC_ProcedureNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ImplicitProcedureInvocation; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ImplicitProcedureInvocation) {
			listener.enterOC_ImplicitProcedureInvocation(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ImplicitProcedureInvocation) {
			listener.exitOC_ImplicitProcedureInvocation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ImplicitProcedureInvocation) {
			return visitor.visitOC_ImplicitProcedureInvocation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_CountExpressionContext extends ParserRuleContext {
	public COUNT(): TerminalNode { return this.getToken(CypherParser.COUNT, 0); }
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_CountExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_CountExpression) {
			listener.enterOC_CountExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_CountExpression) {
			listener.exitOC_CountExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_CountExpression) {
			return visitor.visitOC_CountExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ListComprehensionContext extends ParserRuleContext {
	public oC_FilterExpression(): OC_FilterExpressionContext {
		return this.getRuleContext(0, OC_FilterExpressionContext);
	}
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ListComprehension; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ListComprehension) {
			listener.enterOC_ListComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ListComprehension) {
			listener.exitOC_ListComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ListComprehension) {
			return visitor.visitOC_ListComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_FilterExpressionContext extends ParserRuleContext {
	public oC_IdInColl(): OC_IdInCollContext {
		return this.getRuleContext(0, OC_IdInCollContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	public oC_Expression(): OC_ExpressionContext | undefined {
		return this.tryGetRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_FilterExpression; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_FilterExpression) {
			listener.enterOC_FilterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_FilterExpression) {
			listener.exitOC_FilterExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_FilterExpression) {
			return visitor.visitOC_FilterExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_IdInCollContext extends ParserRuleContext {
	public oC_Variable(): OC_VariableContext {
		return this.getRuleContext(0, OC_VariableContext);
	}
	public IN(): TerminalNode { return this.getToken(CypherParser.IN, 0); }
	public oC_Expression(): OC_ExpressionContext {
		return this.getRuleContext(0, OC_ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_IdInColl; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_IdInColl) {
			listener.enterOC_IdInColl(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_IdInColl) {
			listener.exitOC_IdInColl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_IdInColl) {
			return visitor.visitOC_IdInColl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_PatternComprehensionContext extends ParserRuleContext {
	public oC_Pattern(): OC_PatternContext {
		return this.getRuleContext(0, OC_PatternContext);
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	public oC_Variable(): OC_VariableContext | undefined {
		return this.tryGetRuleContext(0, OC_VariableContext);
	}
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_PatternComprehension; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_PatternComprehension) {
			listener.enterOC_PatternComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_PatternComprehension) {
			listener.exitOC_PatternComprehension(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_PatternComprehension) {
			return visitor.visitOC_PatternComprehension(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_NumberLiteralContext extends ParserRuleContext {
	public oC_DoubleLiteral(): OC_DoubleLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_DoubleLiteralContext);
	}
	public oC_IntegerLiteral(): OC_IntegerLiteralContext | undefined {
		return this.tryGetRuleContext(0, OC_IntegerLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_NumberLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_NumberLiteral) {
			listener.enterOC_NumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_NumberLiteral) {
			listener.exitOC_NumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_NumberLiteral) {
			return visitor.visitOC_NumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_MapLiteralContext extends ParserRuleContext {
	public oC_PropertyKeyName(): OC_PropertyKeyNameContext[];
	public oC_PropertyKeyName(i: number): OC_PropertyKeyNameContext;
	public oC_PropertyKeyName(i?: number): OC_PropertyKeyNameContext | OC_PropertyKeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_PropertyKeyNameContext);
		} else {
			return this.getRuleContext(i, OC_PropertyKeyNameContext);
		}
	}
	public oC_Expression(): OC_ExpressionContext[];
	public oC_Expression(i: number): OC_ExpressionContext;
	public oC_Expression(i?: number): OC_ExpressionContext | OC_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OC_ExpressionContext);
		} else {
			return this.getRuleContext(i, OC_ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_MapLiteral; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_MapLiteral) {
			listener.enterOC_MapLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_MapLiteral) {
			listener.exitOC_MapLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_MapLiteral) {
			return visitor.visitOC_MapLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OC_ReservedWordContext extends ParserRuleContext {
	public ALL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ALL, 0); }
	public ASCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ASCENDING, 0); }
	public BY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.BY, 0); }
	public CREATE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CREATE, 0); }
	public DELETE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DELETE, 0); }
	public DESCENDING(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DESCENDING, 0); }
	public DETACH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DETACH, 0); }
	public EXISTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.EXISTS, 0); }
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.LIMIT, 0); }
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MATCH, 0); }
	public MERGE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MERGE, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ON, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OPTIONAL, 0); }
	public ORDER(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ORDER, 0); }
	public REMOVE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.REMOVE, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.RETURN, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SET, 0); }
	public SKIP_KEYWORD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SKIP_KEYWORD, 0); }
	public WHERE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHERE, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WITH, 0); }
	public UNION(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNION, 0); }
	public UNWIND(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNWIND, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AND, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.AS, 0); }
	public CONTAINS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONTAINS, 0); }
	public DISTINCT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DISTINCT, 0); }
	public ENDS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ENDS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.IS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NOT, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OR, 0); }
	public STARTS(): TerminalNode | undefined { return this.tryGetToken(CypherParser.STARTS, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.XOR, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FALSE, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.TRUE, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(CypherParser.NULL, 0); }
	public CONSTRAINT(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CONSTRAINT, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DO, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.FOR, 0); }
	public REQUIRE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.REQUIRE, 0); }
	public UNIQUE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.UNIQUE, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.CASE, 0); }
	public WHEN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.WHEN, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(CypherParser.THEN, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ELSE, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(CypherParser.END, 0); }
	public MANDATORY(): TerminalNode | undefined { return this.tryGetToken(CypherParser.MANDATORY, 0); }
	public SCALAR(): TerminalNode | undefined { return this.tryGetToken(CypherParser.SCALAR, 0); }
	public OF(): TerminalNode | undefined { return this.tryGetToken(CypherParser.OF, 0); }
	public ADD(): TerminalNode | undefined { return this.tryGetToken(CypherParser.ADD, 0); }
	public DROP(): TerminalNode | undefined { return this.tryGetToken(CypherParser.DROP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return CypherParser.RULE_oC_ReservedWord; }
	// @Override
	public enterRule(listener: CypherListener): void {
		if (listener.enterOC_ReservedWord) {
			listener.enterOC_ReservedWord(this);
		}
	}
	// @Override
	public exitRule(listener: CypherListener): void {
		if (listener.exitOC_ReservedWord) {
			listener.exitOC_ReservedWord(this);
		}
	}
	// @Override
	public accept<Result>(visitor: CypherVisitor<Result>): Result {
		if (visitor.visitOC_ReservedWord) {
			return visitor.visitOC_ReservedWord(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


