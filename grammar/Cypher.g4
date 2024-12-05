grammar Cypher;

options {
  caseInsensitive = true;
}

oC_Cypher: oC_Statement ( ';' )? EOF;

oC_Statement
    : oC_Query
    | oC_Command
    ;

oC_Query
    : oC_RegularQuery
    | oC_StandaloneCall
    ;

oC_RegularQuery
    : oC_SingleQuery ( UNION ( ALL )? oC_SingleQuery )*
    ;

oC_SingleQuery
    : oC_SinglePartQuery
    | oC_MultiPartQuery
    ;

oC_SinglePartQuery
    : ( oC_ReadingClause )*
      ( oC_UpdatingClause )*
      oC_Return
    ;

oC_MultiPartQuery
    : ( oC_ReadingClause )*
      ( oC_UpdatingClause )*
      oC_With
      oC_SinglePartQuery
    ;

oC_ReadingClause
    : oC_Match
    | oC_Unwind
    | oC_InQueryCall
    ;

oC_Command
    : oC_CreateIndex
    | oC_DropIndex
    | oC_CreateConstraint
    | oC_DropConstraint
    ;

oC_CreateIndex
    : CREATE INDEX ON oC_NodeLabel '(' oC_PropertyExpression (',' oC_PropertyExpression)* ')'
    ;

oC_DropIndex
    : DROP INDEX ON oC_NodeLabel '(' oC_PropertyExpression (',' oC_PropertyExpression)* ')'
    ;

oC_CreateConstraint
    : CREATE CONSTRAINT ON '(' oC_Variable oC_NodeLabel ')' ASSERT oC_PropertyExpression IS UNIQUE
    ;

oC_DropConstraint
    : DROP CONSTRAINT ON '(' oC_Variable oC_NodeLabel ')' ASSERT oC_PropertyExpression IS UNIQUE
    ;

oC_Match
    : ( OPTIONAL )? MATCH oC_Pattern ( WHERE oC_Expression )?
    ;

oC_Unwind
    : UNWIND oC_Expression AS oC_Variable
    ;

oC_Merge
    : MERGE oC_PatternPart ( oC_MergeAction )*
    ;

oC_MergeAction
    : ON MATCH oC_Set
    | ON CREATE oC_Set
    ;

oC_Create
    : CREATE oC_Pattern
    ;

oC_Set
    : SET oC_SetItem ( ',' oC_SetItem )*
    ;

oC_SetItem
    : oC_PropertyExpression '=' oC_Expression
    | oC_Variable '=' oC_Expression
    | oC_Variable '+=' oC_Expression
    | oC_Variable oC_NodeLabels
    ;

oC_Delete
    : ( DETACH )? DELETE oC_Expression ( ',' oC_Expression )*
    ;

oC_Remove
    : REMOVE oC_RemoveItem ( ',' oC_RemoveItem )*
    ;

oC_RemoveItem
    : oC_Variable oC_NodeLabels
    | oC_PropertyExpression
    ;

oC_InQueryCall
    : CALL oC_ExplicitProcedureInvocation ( YIELD oC_YieldItems )?
    ;

oC_StandaloneCall
    : CALL oC_ExplicitProcedureInvocation ( YIELD oC_YieldItems )?
    ;

oC_YieldItems
    : oC_YieldItem ( ',' oC_YieldItem )*
    ;

oC_YieldItem
    : oC_ProcedureResultField ( AS oC_Variable )?
    ;

oC_With
    : WITH ( DISTINCT )? oC_ReturnBody ( WHERE oC_Expression )?
    ;

oC_Return
    : RETURN ( DISTINCT )? oC_ReturnBody
    ;

oC_ReturnBody
    : oC_ReturnItems
      ( ORDER BY oC_SortItem ( ',' oC_SortItem )* )?
      ( SKIP oC_Expression )?
      ( LIMIT oC_Expression )?
    ;

oC_ReturnItems
    : '*'
    | oC_ReturnItem ( ',' oC_ReturnItem )*
    ;

oC_ReturnItem
    : oC_Expression ( AS oC_Variable )?
    ;

oC_Order
    : ORDER BY oC_SortItem ( ',' oC_SortItem )*
    ;

oC_SortItem
    : oC_Expression ( ASCENDING | ASC | DESCENDING | DESC )?
    ;

oC_Pattern
    : oC_PatternPart ( ',' oC_PatternPart )*
    ;

oC_PatternPart
    : ( oC_Variable '=' )? oC_AnonymousPatternPart
    ;

oC_AnonymousPatternPart
    : oC_PatternElement
    ;

oC_PatternElement
    : ( '(' oC_NodePattern ')' )
    | ( '(' oC_NodePattern ')' oC_PatternElementChain+ )
    ;

oC_NodePattern
    : ( oC_Variable )? ( oC_NodeLabels )? ( oC_Properties )?
    ;

oC_PatternElementChain
    : oC_RelationshipPattern oC_NodePattern
    ;

oC_RelationshipPattern
    : oC_LeftArrowHead? oC_Dash oC_RelationshipDetail? oC_Dash oC_RightArrowHead?
    ;

oC_RelationshipDetail
    : '[' oC_Variable? oC_RelationshipTypes? oC_RangeLiteral? oC_Properties? ']'
    ;

oC_Properties
    : '{' oC_PropertyKeyValue ( ',' oC_PropertyKeyValue )* '}'
    | '{' '}'
    ;

oC_RelationshipTypes
    : ':' oC_RelTypeName ( '|' ':' oC_RelTypeName )*
    ;

oC_NodeLabels
    : oC_NodeLabel+
    ;

oC_NodeLabel
    : ':' oC_LabelName
    ;

oC_RangeLiteral
    : '*' oC_IntegerLiteral? ( '..' oC_IntegerLiteral? )?
    ;

oC_LabelName
    : oC_SchemaName
    ;

oC_RelTypeName
    : oC_SchemaName
    ;

oC_Expression
    : oC_OrExpression
    ;

oC_OrExpression
    : oC_AndExpression ( OR oC_AndExpression )*
    ;

oC_AndExpression
    : oC_NotExpression ( AND oC_NotExpression )*
    ;

oC_NotExpression
    : ( NOT )* oC_ComparisonExpression
    ;

oC_ComparisonExpression
    : oC_AddOrSubtractExpression ( oC_PartialComparisonExpression )*
    ;

oC_AddOrSubtractExpression
    : oC_MultiplyDivideModuloExpression ( ( '+' | '-' ) oC_MultiplyDivideModuloExpression )*
    ;

oC_MultiplyDivideModuloExpression
    : oC_PowerOfExpression ( ( '*' | '/' | '%' ) oC_PowerOfExpression )*
    ;

oC_PowerOfExpression
    : oC_UnaryAddOrSubtractExpression ( '^' oC_UnaryAddOrSubtractExpression )*
    ;

oC_UnaryAddOrSubtractExpression
    : ( ( '+' | '-' ) )* oC_StringListNullOperatorExpression
    ;

oC_StringListNullOperatorExpression
    : oC_PropertyOrLabelsExpression
    ( oC_StringOperatorExpression
    | oC_ListOperatorExpression
    | oC_NullOperatorExpression
    )*
    ;

oC_ListOperatorExpression
    : IN oC_PropertyOrLabelsExpression
    | '[' oC_Expression ']'
    ;

oC_StringOperatorExpression
    : ( STARTS WITH | ENDS WITH | CONTAINS ) oC_PropertyOrLabelsExpression
    ;

oC_NullOperatorExpression
    : IS NULL
    | IS NOT NULL
    ;

oC_PropertyOrLabelsExpression
    : oC_Atom ( oC_PropertyLookup | oC_NodeLabels )*
    ;

oC_Atom
    : oC_Literal
    | oC_Parameter
    | oC_Variable
    | oC_FunctionInvocation
    | oC_ExplicitProcedureInvocation
    | oC_ImplicitProcedureInvocation
    | oC_CountExpression
    | oC_ListComprehension
    | oC_PatternComprehension
    | oC_Parenthesized
    | oC_FunctionName
    ;

oC_Literal
    : oC_NumberLiteral
    | StringLiteral
    | oC_BooleanLiteral
    | NULL
    | oC_MapLiteral
    | oC_ListLiteral
    ;

oC_BooleanLiteral
    : TRUE
    | FALSE
    ;

oC_ListLiteral
    : '[' ( oC_Expression ( ',' oC_Expression )* )? ']'
    ;

oC_Parenthesized
    : '(' oC_Expression ')'
    ;

oC_PropertyExpression
    : oC_Atom oC_PropertyLookup
    ;

oC_PropertyLookup
    : '.' oC_PropertyKeyName
    ;

oC_Variable
    : oC_SymbolicName
    ;

oC_PropertyKeyName
    : oC_SchemaName
    ;

oC_IntegerLiteral
    : HexInteger
    | OctalInteger
    | DecimalInteger
    ;

oC_DoubleLiteral
    : ExponentDecimalReal
    | RegularDecimalReal
    ;

oC_SchemaName
    : oC_SymbolicName
    | oC_ReservedWord
    ;

oC_SymbolicName
    : UnescapedSymbolicName
    | EscapedSymbolicName
    | HexLetter
    ;

oC_LeftArrowHead
    : '<'
    ;

oC_RightArrowHead
    : '>'
    ;

oC_Dash
    : '-'
    ;

// Lexer Rules
CREATE: 'CREATE';
DROP: 'DROP';
INDEX: 'INDEX';
ON: 'ON';
OPTIONAL: 'OPTIONAL';
MATCH: 'MATCH';
UNWIND: 'UNWIND';
AS: 'AS';
MERGE: 'MERGE';
SET: 'SET';
DETACH: 'DETACH';
DELETE: 'DELETE';
REMOVE: 'REMOVE';
WITH: 'WITH';
RETURN: 'RETURN';
DISTINCT: 'DISTINCT';
ORDER: 'ORDER';
BY: 'BY';
SKIP: 'SKIP';
LIMIT: 'LIMIT';
ASCENDING: 'ASC';
ASC: 'ASC';
DESCENDING: 'DESC';
DESC: 'DESC';
WHERE: 'WHERE';
OR: 'OR';
XOR: 'XOR';
AND: 'AND';
NOT: 'NOT';
IN: 'IN';
STARTS: 'STARTS';
ENDS: 'ENDS';
CONTAINS: 'CONTAINS';
IS: 'IS';
NULL: 'NULL';
TRUE: 'TRUE';
FALSE: 'FALSE';
COUNT: 'COUNT';
FILTER: 'FILTER';
EXTRACT: 'EXTRACT';
ANY: 'ANY';
NONE: 'NONE';
SINGLE: 'SINGLE';
UNION: 'UNION';
ALL: 'ALL';
CONSTRAINT: 'CONSTRAINT';
ASSERT: 'ASSERT';
UNIQUE: 'UNIQUE';
EXISTS: 'EXISTS';
CALL: 'CALL';
YIELD: 'YIELD';

UnescapedSymbolicName: [a-zA-Z_] [a-zA-Z0-9_]*;
EscapedSymbolicName: '`' ( ~'`' )* '`';
StringLiteral: '"' ( ~'"' )* '"' | '\'' ( ~'\'' )* '\'';
HexInteger: '0x' [0-9a-fA-F]+;
DecimalInteger: '0' | [1-9] [0-9]*;
OctalInteger: '0o' [0-7]+;
ExponentDecimalReal: ( '0' | [1-9] [0-9]* ) ( '.' [0-9]+ )? [eE] [-+]? [0-9]+;
RegularDecimalReal: ( '0' | [1-9] [0-9]* ) '.' [0-9]+;
HexLetter: [A-Fa-f];

WS: [ \t\r\n\f]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
MULTILINE_COMMENT: '/*' .*? '*/' -> skip;